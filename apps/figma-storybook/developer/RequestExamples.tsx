import { useEffect, useRef, useState } from "react";
import {
  CromaProvider,
  SearchCombobox,
  PrototypeButton,
  PrototypeField,
  SelectionPillGroup,
  SurfaceCard,
  PlainSection,
  ActionGroup,
  InlineNotification,
  ResponsiveStepper,
  type VariantSuggestion,
} from "@croma/figma-ds";
/** Consumer example: requests and service contracts stay outside the DS package. */
export function RequestSearch({
  endpoint = "/api/variants",
}: {
  endpoint?: string;
}) {
  const [query, setQuery] = useState(""),
    [selected, setSelected] = useState<VariantSuggestion>(),
    [items, setItems] = useState<VariantSuggestion[]>([]),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(""),
    [attempt, setAttempt] = useState(0),
    [scenario, setScenario] = useState("success");
  useEffect(() => {
    const controller = new AbortController();
    setError("");
    setItems([]);
    if (query.trim().length < 2) {
      setLoading(false);
      return () => controller.abort();
    }
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const url = new URL(endpoint, window.location.href);
        url.searchParams.set("q", query);
        url.searchParams.set("scenario", scenario);
        url.searchParams.set("attempt", String(attempt));
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok)
          throw Error("Could not load matching phones. Try again.");
        const data = (await response.json()) as { items: VariantSuggestion[] };
        if (!Array.isArray(data.items))
          throw Error("Unexpected service response.");
        if (!controller.signal.aborted) setItems(data.items);
      } catch (error) {
        if (!controller.signal.aborted)
          setError(
            error instanceof Error
              ? error.message
              : "Could not load matching phones.",
          );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 250);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, scenario, attempt, endpoint]);
  return (
    <CromaProvider applyDocument={false}>
      <div style={{ padding: 24, maxWidth: 680, display: "grid", gap: 24 }}>
        <label>
          Mock response{" "}
          <select
            value={scenario}
            onChange={(e) => {
              setScenario(e.target.value);
              setSelected(undefined);
              setAttempt(0);
            }}
          >
            <option value="success">Success</option>
            <option value="empty">No matches</option>
            <option value="error-once">Fail once, then retry succeeds</option>
            <option value="slow">Slow response</option>
          </select>
        </label>
        <SearchCombobox
          label="Find your phone"
          query={query}
          onQueryChange={(value) => {
            setQuery(value);
            setSelected(undefined);
            setAttempt(0);
          }}
          suggestions={items}
          selectedId={selected?.id}
          onSelect={(item) => {
            setSelected(item);
          }}
          loading={loading}
          error={error || undefined}
          onRetry={() => setAttempt((value) => value + 1)}
          emptyText={
            query.trim().length < 2
              ? "Type at least two characters."
              : "No matching phones."
          }
          helpText="Choose an exact variant. Changing the query clears the previous selection."
        />
        <p role="status">
          {selected
            ? `Chosen: ${selected.model} · ${selected.storage}`
            : "No variant selected."}
        </p>
        <PrototypeButton disabled={!selected}>
          Continue with this phone
        </PrototypeButton>
      </div>
    </CromaProvider>
  );
}
export function ValidatedExchange({
  endpoint = "/api/exchange-drafts",
}: {
  endpoint?: string;
}) {
  const [step, setStep] = useState(0),
    [pincode, setPincode] = useState(""),
    [finish, setFinish] = useState(""),
    [errors, setErrors] = useState<{ pincode?: string; finish?: string }>({}),
    [status, setStatus] = useState<"idle" | "saving" | "error" | "success">(
      "idle",
    ),
    [message, setMessage] = useState(""),
    [attempt, setAttempt] = useState(0);
  const pinRef = useRef<HTMLInputElement>(null),
    request = useRef<AbortController | null>(null),
    form = useRef<HTMLFormElement>(null);
  useEffect(() => () => request.current?.abort(), []);
  useEffect(() => {if(step===0 && errors.pincode)pinRef.current?.focus();}, [step,errors.pincode]);
  const validate = () => {
    const next = {
      pincode: /^\d{6}$/.test(pincode)
        ? undefined
        : "Enter a six-digit PIN code.",
      finish: finish ? undefined : "Choose a finish.",
    };
    setErrors(next);
    if (next.pincode || next.finish) {
      requestAnimationFrame(() =>
        next.pincode
          ? pinRef.current?.focus()
          : form.current
              ?.querySelector<HTMLInputElement>("input[type=radio]")
              ?.focus(),
      );
      return false;
    }
    return true;
  };
  async function save() {
    if (status === "saving" || !validate()) return;
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    setStatus("saving");
    setMessage("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pincode, finish, attempt }),
      });
      const result = (await response.json()) as {
        message?: string;
        fieldErrors?: { pincode?: string; finish?: string };
      };
      if (controller.signal.aborted) return;
      if (!response.ok) {
        setAttempt((value) => value + 1);
        if (result.fieldErrors) {
          setErrors(result.fieldErrors);
          setStep(0);
          requestAnimationFrame(() => pinRef.current?.focus());
        }
        throw Error(
          result.message ??
            "Could not save your exchange draft. Your details are retained. Try again.",
        );
      }
      setStatus("success");
      setMessage(result.message ?? "Exchange draft saved.");
    } catch (error) {
      if (!controller.signal.aborted) {
        setStatus("error");
        setMessage(
          error instanceof Error ? error.message : "Could not save. Try again.",
        );
      }
    }
  }
  return (
    <CromaProvider applyDocument={false}>
      <form
        ref={form}
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          if (step === 0) {
            if (validate()) setStep(1);
          } else void save();
        }}
        style={{ padding: 24, maxWidth: 760, display: "grid", gap: 24 }}
      >
        <ResponsiveStepper
          label="Exchange draft progress"
          steps={["Phone details", "Review"]}
          current={step}
        />
        <SurfaceCard
          title={step === 0 ? "Phone details" : "Review exchange draft"}
        >
          {step === 0 ? (
            <PlainSection>
              <PrototypeField
                ref={pinRef}
                label="PIN code"
                name="pincode"
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value);
                  setErrors((current) => ({ ...current, pincode: undefined }));
                }}
                inputMode="numeric"
                maxLength={6}
                required
                error={errors.pincode}
              />
              <div>
                <SelectionPillGroup
                  label="Finish"
                  value={finish}
                  onValueChange={(value) => {
                    setFinish(value);
                    setErrors((current) => ({ ...current, finish: undefined }));
                  }}
                  options={[
                    { value: "black", label: "Black" },
                    { value: "white", label: "White" },
                  ]}
                />
                {errors.finish && <p role="alert">{errors.finish}</p>}
              </div>
            </PlainSection>
          ) : (
            <PlainSection>
              <p>PIN code: {pincode}</p>
              <p>Finish: {finish}</p>
              <p>
                Fictional draft only. No pricing, eligibility or purchase
                decision is made.
              </p>
            </PlainSection>
          )}
          {message && (
            <InlineNotification
              tone={status === "error" ? "error" : "success"}
              heading={status === "error" ? "Draft not saved" : "Draft saved"}
            >
              {message}
            </InlineNotification>
          )}
        </SurfaceCard>
        <ActionGroup align="between">
          <PrototypeButton
            type="button"
            appearance="quiet"
            disabled={step === 0 || status === "saving"}
            onClick={() => {
              setStep(0);
              setMessage("");
              setStatus("idle");
            }}
          >
            Back
          </PrototypeButton>
          <div className="cx-actions">
            <PrototypeButton
              type="button"
              appearance="secondary"
              loading={status === "saving"}
              onClick={() => void save()}
            >
              Save draft
            </PrototypeButton>
            <PrototypeButton
              type="submit"
              disabled={status === "saving" || status === "success"}
            >
              {step === 0
                ? "Continue"
                : status === "error"
                  ? "Try saving again"
                  : "Confirm draft"}
            </PrototypeButton>
          </div>
        </ActionGroup>
      </form>
    </CromaProvider>
  );
}
