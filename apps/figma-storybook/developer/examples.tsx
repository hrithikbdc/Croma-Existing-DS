import { useState } from "react";
import * as DS from "@croma/figma-ds";

export function ButtonExample() {
  return (
    <DS.Button Type="Filled" Size="Large">
      Continue
    </DS.Button>
  );
}
export function LocalButtonExample() {
  return (
    <DS.Local.Button Size="Desktop" Type="Primary">
      Continue
    </DS.Local.Button>
  );
}
export function FormFieldExample() {
  const [value, setValue] = useState("");
  return (
    <DS.FormField
      Label="Email address"
      type="email"
      name="email"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      supportingText="We send your confirmation here."
    />
  );
}
export function PrototypeFieldExample() {
  const [value, setValue] = useState("");
  return (
    <DS.PrototypeField
      label="PIN code"
      name="pincode"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      inputMode="numeric"
      maxLength={6}
      help="Enter six digits."
    />
  );
}
export function DropdownExample() {
  const [value, setValue] = useState("");
  return (
    <DS.Dropdown
      label="Storage"
      name="storage"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      options={[
        { value: "128", label: "128 GB" },
        { value: "256", label: "256 GB" },
      ]}
    />
  );
}
export function FormDropdownExample() {
  const [value, setValue] = useState("");
  return (
    <DS.FormDropdown
      label="Storage"
      name="storage"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      options={[
        { value: "128", label: "128 GB" },
        { value: "256", label: "256 GB" },
      ]}
    />
  );
}
export function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  return (
    <DS.Checkbox
      label="Include accessories"
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}
export function ToggleSwitchExample() {
  const [checked, setChecked] = useState(false);
  return (
    <DS.ToggleSwitch
      label="Receive updates"
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}
export function RadioGroupExample() {
  const [value, setValue] = useState("");
  return (
    <DS.RadioGroup
      label="Collection method"
      value={value}
      onChange={setValue}
      options={[
        { value: "delivery", label: "Delivery" },
        { value: "store", label: "Store" },
      ]}
    />
  );
}
export function ChoiceExample() {
  const [value, setValue] = useState("");
  return (
    <DS.Choice
      label="Phone condition"
      value={value}
      onChange={setValue}
      options={[
        { value: "working", label: "Working" },
        { value: "repair", label: "Needs repair" },
      ]}
    />
  );
}
export function FilterExample() {
  const [selected, setSelected] = useState(false);
  return (
    <DS.Filter selected={selected} onSelectedChange={setSelected}>
      Available nearby
    </DS.Filter>
  );
}
export function AccordionExample() {
  return (
    <DS.Accordion heading="Delivery details">
      <p>Delivery information supplied by your application.</p>
    </DS.Accordion>
  );
}
export function LocalAccordionExample() {
  return (
    <DS.LocalAccordion heading="Delivery details" Background="Dark">
      <p>Source local accordion content.</p>
    </DS.LocalAccordion>
  );
}
export function ColourAccordionExample() {
  return (
    <DS.ColourAccordion
      items={[
        {
          id: "delivery",
          heading: "Delivery details",
          content: <p>Application content.</p>,
          icon: "Delivery",
        },
      ]}
    />
  );
}
export function TabsExample() {
  const [value, setValue] = useState("details");
  return (
    <DS.Tabs
      label="Product information"
      value={value}
      onChange={setValue}
      items={[
        { value: "details", label: "Details", content: <p>Product details</p> },
        {
          value: "delivery",
          label: "Delivery",
          content: <p>Delivery details</p>,
        },
      ]}
    />
  );
}
export function SearchBarExample() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  return (
    <>
      <DS.SearchBar
        label="Search products"
        value={value}
        onChange={setValue}
        onSubmit={setResult}
      />
      <p role="status">
        {result ? `Search requested: ${result}` : "Enter a search query."}
      </p>
    </>
  );
}
export function SearchComboboxExample() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<DS.VariantSuggestion>();
  return (
    <>
      <DS.SearchCombobox
        label="Find your phone"
        query={query}
        onQueryChange={(value) => {
          setQuery(value);
          setSelected(undefined);
        }}
        suggestions={[
          { id: "phone-128", model: "Example phone", storage: "128 GB" },
          { id: "phone-256", model: "Example phone", storage: "256 GB" },
        ].filter((item) =>
          `${item.model} ${item.storage}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        )}
        selectedId={selected?.id}
        onSelect={(item) => {
          setSelected(item);
          setQuery(item.model);
        }}
      />
      <p role="status">
        {selected
          ? `${selected.model} · ${selected.storage}`
          : "Choose an exact variant."}
      </p>
    </>
  );
}
export function PopUpExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DS.PrototypeButton onClick={() => setOpen(true)}>
        Open confirmation
      </DS.PrototypeButton>
      <DS.PopUp
        title="Confirm your choice"
        open={open}
        onClose={() => setOpen(false)}
      >
        <p>Review your details.</p>
      </DS.PopUp>
    </>
  );
}
export function BottomSheetExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DS.PrototypeButton onClick={() => setOpen(true)}>
        Open sheet
      </DS.PrototypeButton>
      <DS.BottomSheet
        title="Delivery options"
        open={open}
        onClose={() => setOpen(false)}
      >
        <p>Available options come from the application.</p>
      </DS.BottomSheet>
    </>
  );
}
export function NavigationDrawerExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DS.PrototypeButton onClick={() => setOpen(true)}>
        Open account
      </DS.PrototypeButton>
      <DS.NavigationDrawer
        title="Account"
        open={open}
        onClose={() => setOpen(false)}
        SourceBranch="Account"
      />
    </>
  );
}
export function SourceSheetContainerExample() {
  const [state, setState] = useState<DS.SourceSheetContainerState>("Close");
  return (
    <>
      <DS.PrototypeButton onClick={() => setState("Open")}>
        Open source sheet
      </DS.PrototypeButton>
      <DS.SourceSheetContainer
        title="Delivery options"
        State={state}
        onStateChange={setState}
      >
        <p>Application content.</p>
      </DS.SourceSheetContainer>
    </>
  );
}
export function MenuExample() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <DS.Menu
        label="Account navigation"
        sections={[
          {
            id: "account",
            items: [
              {
                id: "orders",
                label: "Orders",
                onSelect: () => setSelected("orders"),
              },
              {
                id: "profile",
                label: "Profile",
                onSelect: () => setSelected("profile"),
              },
            ],
          },
        ]}
      />
      <p role="status">
        {selected ? `Selected ${selected}` : "Choose a destination."}
      </p>
    </>
  );
}
export function MenuPopoverExample() {
  return (
    <DS.MenuPopover
      label="Account navigation"
      trigger="Account"
      sections={[
        {
          id: "account",
          items: [{ id: "orders", label: "Orders", href: "#orders" }],
        },
      ]}
    />
  );
}
export function TooltipExample() {
  return (
    <DS.Tooltip
      label="About exchange"
      description="Your phone is checked at delivery."
    />
  );
}
export function HeaderExample() {
  return (
    <DS.Header
      brand={<DS.Logo nodeId="39:2065" label="Croma" />}
      actions={
        <DS.PrototypeButton appearance="quiet">Account</DS.PrototypeButton>
      }
    >
      <p>
        Editable composition helper; see CommerceHeader for an integrated
        header.
      </p>
    </DS.Header>
  );
}
export function CommerceHeaderExample() {
  return (
    <DS.CommerceHeader
      navigation={[{ label: "Phones", href: "#phones" }]}
      account={{ label: "Account", href: "#account" }}
      cart={{ label: "Shopping bag", href: "#bag", count: 0 }}
    />
  );
}
export function LiveCommerceHeaderExample() {
  const [message, setMessage] = useState("");
  return (
    <>
      <DS.LiveCommerceHeader
        onSearch={(query) => setMessage(`Search requested: ${query}`)}
        onAccount={() => setMessage("Account requested")}
        onCart={() => setMessage("Shopping bag requested")}
      />
      <p role="status">{message}</p>
    </>
  );
}
export function BreadcrumbExample() {
  return (
    <DS.Breadcrumb
      items={[
        { label: "Home", href: "#home" },
        { label: "Phones", href: "#phones" },
        { label: "Exchange" },
      ]}
    />
  );
}
export function SteppersExample() {
  return (
    <DS.Steppers
      label="Exchange progress"
      current={1}
      steps={["Phone", "Condition", "Review"]}
    />
  );
}
export function ResponsiveStepperExample() {
  return (
    <DS.ResponsiveStepper
      label="Exchange progress"
      current={1}
      steps={["Phone", "Condition", "Review"]}
    />
  );
}
export function StickyFooterExample() {
  return (
    <DS.StickyFooter
      price="₹21,999"
      installment="₹1,365/mo"
      action={<DS.PrototypeButton>Add to bag</DS.PrototypeButton>}
      sticky={false}
    />
  );
}
export function StickyFooterLayoutExample() {
  return (
    <DS.StickyFooterLayout
      footer={
        <DS.StickyFooter
          sticky={false}
          action={<DS.PrototypeButton>Continue</DS.PrototypeButton>}
        />
      }
    >
      <p>Page content. The layout reserves the footer space.</p>
    </DS.StickyFooterLayout>
  );
}
export function ChatExample() {
  const [messages, setMessages] = useState<DS.ChatMessage[]>([
    { id: "welcome", author: "Assistant", content: "How can we help?" },
  ]);
  return (
    <DS.Chat
      label="Support conversation"
      dateLabel="Example conversation"
      messages={messages}
      onSend={(text) =>
        setMessages((items) => [
          ...items,
          {
            id: String(items.length),
            author: "You",
            content: text,
            direction: "outgoing",
          },
        ])
      }
    />
  );
}
export function LabelExample() {
  return <DS.Label>New</DS.Label>;
}
export function BadgeExample() {
  return <DS.Badge>Offer</DS.Badge>;
}
export function LocalBadgeExample() {
  return <DS.LocalBadge Property1="New">New</DS.LocalBadge>;
}
export function InfoChipExample() {
  return <DS.InfoChip>Express delivery</DS.InfoChip>;
}
export function InputChipExample() {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <DS.InputChip label="128 GB" onRemove={() => setVisible(false)} />
  ) : (
    <DS.PrototypeButton onClick={() => setVisible(true)}>
      Restore filter
    </DS.PrototypeButton>
  );
}
export function ChipGroupExample() {
  const [items, setItems] = useState(["128 GB", "Midnight"]);
  return (
    <DS.ChipGroup label="Active filters">
      {items.map((item) => (
        <DS.InputChip
          key={item}
          label={item}
          onRemove={() =>
            setItems((values) => values.filter((value) => value !== item))
          }
        />
      ))}
    </DS.ChipGroup>
  );
}
export function SegmentedExample() {
  const [value, setValue] = useState("say");
  return (
    <DS.Segmented
      label="Input method"
      value={value}
      onChange={setValue}
      options={[
        { value: "say", label: "Say it" },
        { value: "write", label: "Write it" },
      ]}
    />
  );
}
export function CardExample() {
  return (
    <DS.Card Branch="Local">
      <h3>Product information</h3>
      <p>Application-supplied content.</p>
    </DS.Card>
  );
}
export function CardSkeletonExample() {
  return <DS.CardSkeleton aria-label="Loading product information" />;
}
export function DividerLineExample() {
  return <DS.DividerLine />;
}
export function IconExample() {
  return <DS.Icon nodeId="219:34976" label="Search" monochrome size={24} />;
}
export function LogoExample() {
  return <DS.Logo nodeId="39:2065" label="Croma" />;
}
export function IllustrationExample() {
  return <DS.Illustration nodeId="13:1774" label="Example illustration" />;
}
export function LayoutGridExample() {
  return (
    <DS.LayoutGrid>
      <p>Content follows the source grid margins and maximum width.</p>
    </DS.LayoutGrid>
  );
}
export function DeviceViewportExample() {
  return (
    <DS.DeviceViewport nodeId="414:82821">
      <p>Editable phone viewport content.</p>
    </DS.DeviceViewport>
  );
}
export function DeviceFrameExample() {
  return (
    <DS.DeviceFrame nodeId="414:82817">
      <p>Editable phone content.</p>
    </DS.DeviceFrame>
  );
}
export function SourceOptionExample() {
  const [selected, setSelected] = useState(false);
  return (
    <DS.SourceOption
      selected={selected}
      aria-pressed={selected}
      onClick={() => setSelected(!selected)}
    >
      128 GB
    </DS.SourceOption>
  );
}
export function SourceListExample() {
  const [value, setValue] = useState("");
  return (
    <DS.SourceList
      label="Storage"
      items={[
        { value: "128", label: "128 GB" },
        { value: "256", label: "256 GB" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}
export function SelectablePurchaseCardExample() {
  const [checked, setChecked] = useState(false);
  return (
    <DS.SelectablePurchaseCard
      name="purchase"
      value="phone"
      model="Example phone"
      variant="128 GB · Midnight"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
}
export function SelectablePurchaseGroupExample() {
  const [value, setValue] = useState("");
  return (
    <DS.SelectablePurchaseGroup
      label="Your purchases"
      value={value}
      onValueChange={setValue}
      items={[
        {
          value: "phone",
          model: "Example phone",
          variant: "128 GB · Midnight",
        },
      ]}
    />
  );
}
export function SelectionPillGroupExample() {
  const [value, setValue] = useState("");
  return (
    <DS.SelectionPillGroup
      label="Finish"
      value={value}
      onValueChange={setValue}
      options={[
        { value: "black", label: "Black" },
        { value: "white", label: "White" },
      ]}
    />
  );
}
export function InlineNotificationExample() {
  return (
    <DS.InlineNotification heading="Before you continue" live={false}>
      Choose the exact phone storage and finish.
    </DS.InlineNotification>
  );
}
export function LoadingIndicatorExample() {
  return <DS.LoadingIndicator label="Loading your purchases" />;
}
export function PrototypeButtonExample() {
  const [count, setCount] = useState(0);
  return (
    <>
      <DS.PrototypeButton onClick={() => setCount(count + 1)}>
        Continue
      </DS.PrototypeButton>
      <p role="status">Activated {count} times</p>
    </>
  );
}
export function ActionGroupExample() {
  return (
    <DS.ActionGroup align="between">
      <DS.PrototypeButton appearance="quiet">Back</DS.PrototypeButton>
      <div className="cx-actions">
        <DS.PrototypeButton appearance="secondary">Save</DS.PrototypeButton>
        <DS.PrototypeButton>Continue</DS.PrototypeButton>
      </div>
    </DS.ActionGroup>
  );
}
export function InlineFieldActionExample() {
  return (
    <DS.InlineFieldAction
      field={
        <DS.PrototypeField label="PIN code" inputMode="numeric" maxLength={6} />
      }
      action={<DS.PrototypeButton>Check availability</DS.PrototypeButton>}
    />
  );
}
export function FormSectionExample() {
  return (
    <DS.FormSection
      title="Delivery details"
      description="Enter your delivery address."
    >
      <DS.PrototypeField label="PIN code" name="pincode" />
    </DS.FormSection>
  );
}
export function CompositionDialogExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DS.PrototypeButton onClick={() => setOpen(true)}>
        Review exchange
      </DS.PrototypeButton>
      <DS.CompositionDialog
        title="Review exchange"
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <DS.ActionGroup>
            <DS.PrototypeButton onClick={() => setOpen(false)}>
              Done
            </DS.PrototypeButton>
          </DS.ActionGroup>
        }
      >
        <p>Application-supplied review content.</p>
      </DS.CompositionDialog>
    </>
  );
}
export function PlainSectionExample() {
  return (
    <DS.PlainSection title="Phone details">
      <DS.PrototypeField label="IMEI number" />
    </DS.PlainSection>
  );
}
export function SurfaceCardExample() {
  return (
    <DS.SurfaceCard
      title="Exchange estimate"
      status="Ready to review"
      supporting="Example information only."
    >
      <p>Estimate supplied by your application.</p>
    </DS.SurfaceCard>
  );
}
export function HelpDisclosureExample() {
  return (
    <DS.HelpDisclosure title="Where do I find the IMEI?">
      <p>Check your phone settings or dial *#06#.</p>
    </DS.HelpDisclosure>
  );
}
export function PrototypeThemeExample() {
  return (
    <DS.PrototypeTheme Theme="dark">
      <DS.PrototypeButton>Continue</DS.PrototypeButton>
    </DS.PrototypeTheme>
  );
}
export function CromaProviderExample() {
  return (
    <DS.CromaProvider theme="dark" applyDocument={false}>
      <DS.PrototypeButton>Continue</DS.PrototypeButton>
    </DS.CromaProvider>
  );
}
