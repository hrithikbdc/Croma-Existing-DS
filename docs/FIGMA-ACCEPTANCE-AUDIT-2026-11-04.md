> CORRECTION 4 November 2026: A30.1–A30.5 are withdrawn. Effective Figma get_design_context and screenshots show the existing Form Field labels already match. Raw decoded child fields omitted instance/style overrides. Preserve existing label styling; the original proposed label changes below are superseded history. Other cache-derived properties require effective-context/render checks before implementation. Toggle form reset remains a confirmed defect.

Reviewed 4 November 2026 against code release **0.1.0**. The current library does **not** meet the full 100% acceptance requirement. There are confirmed value and behaviour defects, missing source families, unresolved source conflicts and incomplete visual verification. This report reviews all **42 Figma pages in order**. Nine are cover, separator or empty section pages; the other 33 contain guidance, foundations, assets or component acceptance scope. Empty pages are not missing components.

The most urgent confirmed defects are five Form Field label typography/colour mismatches and a Toggle form-reset bug. The largest coverage gaps are Illustration artwork, the local Accordion/Colour, light Card, semantic badge and 48px Search families, plus scrollable/icon Tabs and several Various primitives. Existing source-correct work should be retained: 47 written typography definitions, 26 spacing/border values, 7 logo assets and 359 icon assets passed fresh integrity/value checks. These foundation passes do not establish correct use in every component.

# Review basis

[Original Croma Figma DS](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS) · [Public Storybook](https://croma-figma-ds.bombaydc-3738.chatgpt.site) · [Frozen release 0.1.0 and downloads](https://chatgpt.com/space/page_e25fd2046fd48191ba1909301f8a7b70).

The supplied downloaded Figma file is the source baseline. Its retained archive fingerprint is `38f12fce6765b24f9283350556a0339e464fddc8be766b316508b127aeb13451`. The live page order was re-read and matches all 42 inventoried pages; Illustration, Various and Content page structures were also cross-checked live. This does not establish that every saved property matches a newer cloud revision. The component source, font assets and Storybook stories inspected locally are byte-identical to the curated 0.1.0 snapshot; its source ZIP fingerprint is `c134d8e376b3dc4721007adbc7ee8bd4f7bf7e4c7b0467a1ad27bf7e66c717e5`.

Written specifications take priority. Whole hidden written tables count; hidden template rows do not. Applicable same-file component properties, saved styles and original artwork fill unwritten gaps. Hidden prose/artwork is not automatically visible output. Switzer is supplied and bundled; temporary Inter is no longer a current limitation. No external Material defaults were used to fill gaps.

This is a source/code/catalogue audit across every page, with focused fresh browser checks of Form Field, Toggle and Dropdown and inspection of the hosted introduction. It is **not** a pixel comparison of every story or visual tuple. Each section distinguishes confirmed mismatch, missing coverage, source conflict and verification still needed. The earlier written-only failure counts are historical and are not reused as current failure counts. No component, Figma source, frozen release or sharing setting was changed by this audit.

# Fix order

1. **Correct reproduced defects:** bind Form Field label values per actual state and synchronise Toggle artwork after native form reset. Recheck all related states to prevent regressions.
2. **Complete source coverage:** recover Illustration assets and the missing local Accordion, light Card, semantic badge and Search branches; add Tabs layouts/icon support and map the Various primitives. Confirm equivalence before creating duplicate implementations.
3. **Finish ideal behaviour:** drawer swipe dismissal, Tooltip icon/touch triggers, safe whole-card actions, chip-removal focus and page-level Footer modes. Keep authored visual values separate from proposed interaction mechanics.
4. **Resolve source conflicts:** Header's missing editable anatomy, Search/Accordion glyph mappings, Footer scrolling definitions and incompatible badge/container constraints. Record the exact scoped rule; do not invent a value or mark an unresolved exception passed.
5. **Close the evidence:** compare every intended variant with loaded Switzer at its source width, then test narrow/wide layouts, long content, native form behaviour and keyboard interaction. Publish the results against a new exact release and reconcile current documentation.

These are proposed implementation priorities from the review. The audit does not authorise changes to frozen releases or decide unresolved source interpretations. There is no defensible overall acceptance percentage until the branch/property register is complete.

# Page by page gap index

| Page | Figma section | Finding |
| --- | --- | --- |
| 1 | Cover | Reference only; explain source 2.1 versus code 0.1.0 |
| 2 | Separator | Empty separator |
| 3 | 🥚 Guidance | Empty section heading |
| 4 | Experience principles | Principles missing from usage guidance/examples |
| 5 | Motion principles | Motion guidance missing; exact timing largely unspecified |
| 6 | Content guidelines | Commerce copy rules and source examples missing |
| 7 | Separator | Empty separator |
| 8 | 🐣 Elements | Empty section heading |
| 9 | Logo | 7 asset checks passed; rendered/callsite checks remain |
| 10 | Colors | Saved paints present; gradient/blur guidance and role checks incomplete |
| 11 | Typography | 47 written metrics match; specimen checks and stale font docs remain |
| 12 | Layout / Grid | Written grid values correct; fluid layout demonstration and boundary checks missing |
| 13 | Device | Device reference/mockup coverage missing; presentation scope |
| 14 | Iconography ✍️ | 359 assets match; full rendered variant/callsite checks remain |
| 15 | Illustration  ✍️ | Illustration artwork registry and catalogue missing |
| 16 | Spacing | 16 values match; component usage measurements remain |
| 17 | Border | 10 values match; component stroke/radius checks remain |
| 18 | Separator | Empty separator |
| 19 | 🐥 Components | Empty section heading |
| 20 | Accordian  ✔️ | 8 local tuples and Colour composition missing; glyph conflict |
| 21 | Bottom Sheet ✔️ | Drag/Close implemented; full visual and ideal gesture checks remain |
| 22 | Buttons | Both families represented; complete value/state sign-off missing |
| 23 | Cards | Light Card family and Skeleton coverage missing |
| 24 | Chat | Editable source Chat implemented; full conversation/action checks remain |
| 25 | Checkbox / Radio / Toggle | Confirmed Toggle form-reset visual bug; state matrix incomplete |
| 26 | Chips | Local-to-guide mapping, state coverage and removal focus checks incomplete |
| 27 | Divider | 6 guide cases present; local mapping and final measurements remain |
| 28 | Dropdown | 6 source tuples present; locked-preview distinction and interaction checks remain |
| 29 | Header | Editable whole Header and exact element values not established |
| 30 | Input Fields ✔️ | 5 confirmed Form Field value mismatches; second Dropdown branch unmapped |
| 31 | Labels & Badges | Local semantic badge family missing; source size conflict |
| 32 | Menu | Complete source menu compositions and temporary-menu scope unresolved |
| 33 | Navigation Drawer | Older branch incomplete; swipe dismissal missing; standard scope unresolved |
| 34 | Pop ups | Canonical surfaces present; action/RTL and full visual checks remain |
| 35 | Search bar  ✔️ | Local 48px Search missing; glyph override conflict remains |
| 36 | Steppers  ✔️ | Progression/icon coverage, duplicate mapping and navigation mode incomplete |
| 37 | Sticky footer | Contradictory scrolling rules; page-shell behaviour unaccepted |
| 38 | Tabs | Scrollable and icon Tabs absent; taxonomy/alignment coverage incomplete |
| 39 | Tooltip  ✔️ | Information-icon trigger and touch lifecycle absent; all-tuple proof remains |
| 40 | Various | Option/List mapping missing; Container states ambiguous |
| 41 | Separator | Empty separator |
| 42 | 🦖 Templates | Empty Templates heading; no authored templates to implement |


# Page 1 Cover

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=0-1). Source page ID `0:1`.

**Status: reference page, not a UI acceptance failure.** Original 1:122 says “Design System 2.1”; 1:124 says “Last Modified 05-05-2023”. The code release is 0.1.0 dated 4 November 2026. These are different version domains, not a mismatch to fix by renaming the code to 2.1. The current Storybook does not explain this source-version versus code-version relationship on a cover/reference page.

**To close:** show source file/version and code release separately in Start here; retain the Figma date as source artwork text, not a claim that the live file was last modified then. Check a consumer can identify exactly which code release and Figma source apply.

# Page 2 Separator

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=2-26). Source page ID `2:26`.

**Status: no component gap.** Original page is empty. Preserve it only in the inventory; no code component or screenshot acceptance case is required.

# Page 3 🥚 Guidance

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=1-138). Source page ID `1:138`.

**Status: no component gap.** Empty section marker. Do not count it as missing implementation. Its three following substantive guidance pages do need a readable usage route.

# Page 4 Experience principles

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=1-173). Source page ID `1:173`.

**Confirmed documentation gap.** Source has Expert, Human and Personal principles (1:180–1:190). No equivalent Storybook guidance exists: the story inventory covers foundations/components and source acceptance, not these three principles.

Concrete rules include showing necessary information simply (1:186), communicating processes/actions/timings, allowing changes and mistakes, catering for languages/dialects/abilities and respecting privacy/preferences (1:190). These do not imply a new numeric component value or permission to invent product flows.

**To close:** include the three principles in usage documentation and connect relevant component guidance to them: clear labels/status, recovery from invalid input, keyboard/assistive use and content expansion. Verify the relevant examples, rather than marking a principle passed because its text was copied. Product-level personalisation is outside component acceptance.

# Page 5 Motion principles

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=3-1641). Source page ID `3:1641`.

**Confirmed coverage gap and source precision gap.** Source 3:1645 names notifications, hover states, loading cursors, animation in/out, staggers and timings; 3:1647 describes natural easing/speeds/transitions; 3:1649 covers expressive motion. The released component CSS has no `transition` or `animation` declarations and no shared motion contract or Storybook motion page. Instant native interaction can work, but it does not document or demonstrate these principles.

The source page provides qualitative descriptions, not numeric duration/easing tokens. Therefore importing Material motion values or declaring a guessed duration “100% Figma” would be unsupported.

**To close:** expose the original principles, identify which component transitions actually have same-file timing/easing evidence, and add those exact scoped values where available. Keep genuinely absent numbers unresolved; any proposed defaults need an explicit separate decision. Verify opening/closing, interruption, rapid repeated input and reduced-motion behaviour for any animation added. Reduced motion is an ideal-code behaviour check, not an authored numeric Figma token.

# Page 6 Content guidelines

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=3-1651). Source page ID `3:1651`.

**Confirmed documentation and example-coverage gap.** The source contains detailed commerce copy rules; none has a dedicated implementation guide or source-linked content stories. Specific rules that need to be carried into prototype examples include:

- Value-offering labels have an approximate 30-character allowance (3:1669); promotion labels approximately 16 (3:1673); Sustainable is the literal 11-character label (3:1678–3:1679). These are authoring guidance, not a reason to silently truncate all runtime text at those counts.
- Price/EMI format is `₹[full price] or ₹[lowest monthly EMI payment]/mo` (3:1686). MRP/save format and the struck-through MRP segment are specified in 3:1972.
- Short sentences need no full stop (3:1907); multiline/multiple-sentence copy requires one (3:1911).
- Express delivery first line is bold; standard delivery/day/month are shortened (3:2097, 3:2221). Exact delivery/store template strings are in 3:2230, 3:2238, 3:2246, 3:2257, 3:2263 and 3:2269.
- Product feature content: kicker on one line, headline at most two lines and approximately 250 characters of body content (3:2310).

**To close:** add readable content guidance and source-linked sample stories for price, delivery, promotional labels and feature text. Check emphasis/strikethrough/punctuation and long-content layout using those source examples. Do not turn sample data, personal names, stock levels or delivery promises into library constants. The page includes large composed PDP/PLP examples; document which are guidance-only and which are intended reusable patterns instead of claiming every commerce screen is already implemented.

# Page 7 Separator

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=3-2629). Source page ID `3:2629`.

**Status: no component gap.** Empty navigation separator.

# Page 8 🐣 Elements

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=3-2628). Source page ID `3:2628`.

**Status: no component gap.** Empty section marker. No UI implementation required.

# Page 9 Logo

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=3-2734). Source page ID `3:2734`.

**Integrity passed; rendered acceptance still required.** Seven original logo components are available through `Logo` and `sourceLogos` in `packages/figma-ds/src/Logo.tsx`; Storybook `Foundations/Original logos` exposes all seven. Original node IDs, exact names/case and dimensions are retained. Fresh hash and dimension checks passed for all seven. Source examples include 39:2159 black wordmark 142×32, 39:2065 white wordmark 143×32, two 142×51 TATA wordmarks and three 80×80 favicons (including 400:72843 Aqua Green).

No new confirmed value mismatch was found in this pass. Remaining acceptance evidence is a rendered contact sheet on applicable light/dark surfaces, transparency/aspect-ratio inspection and verification that each actual component callsite uses the intended logo with meaningful/decorative semantics. Registry completeness alone cannot prove all callsites.

**Naming note:** the API deliberately selects exact node IDs; the source has inconsistent Black/black and white naming. Preserve source names; any friendly alias needs an explicit reversible mapping rather than silent renaming.

# Page 10 Colors

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=5-2839). Source page ID `5:2839`.

**Saved values present; page coverage and role acceptance incomplete.** Tokens expose all 41 local saved paints with exact source identity, and the 652 same-file saved definitions include imported paints. Fresh foundation verification passed the 41 local paints. The Storybook Colours story is a table of those 41 saved paints (`Foundations.stories.tsx`), not a complete reconstruction of the Color Guidance page.

The source includes a visible Color Guidance frame 39:2455 with gradient/layer-blur examples, while an `Old` frame 52:2106 is hidden. Written examples include `#4223A5(Layer blur)` (39:4613), `#35A7FF(90% Layer blur)` (39:4614), `#F7B401(80% Layer blur)` (39:4652), `#6035E9(50% Layer blur)` (39:4986) and `#000000(1% Background blur)` (39:4822). These specific decorative examples are not documented as named public reusable swatches/examples in the palette story. Existing saved paint/effect data means the values are not universally “missing”; the remaining task is mapping the exact example nodes and documenting their supported use.

**To close:** show current palette categories, source-bound theme/state roles and applicable gradient/blur examples, preserving source IDs and exact stacking. Separate hidden historical palette material from current examples. Render reference swatches and inspect gradients/alpha/blur against their exact nodes. Do not choose a semantic colour solely because its name resembles a token or treat a background-blur percentage label as an unqualified CSS blur radius. Component-specific colour discrepancies belong to their exact component/state acceptance cases.

# Page 11 Typography

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=6-317). Source page ID `6:317`.

**47 numeric definitions passed; remaining visual/usage verification.** All original written size, weight, line-height and tracking values match tokens and generated CSS in the fresh check. Switzer Variable is bundled; the former Inter substitute is resolved. Written Desktop B1 Regular/Semibold 34px (397:72614, 397:72674), Mobile H6 20px line height (397:72516), and Feature Titles −0.02em remain correct. No new confirmed typography value mismatch was found.

**Naming/source issue to document:** `Feature \nTitle` labels contain literal line breaks, some body labels have double/trailing spaces, and desktop has H7 while mobile stops at H6. Exact names are preserved; use a visible mapping if the code gains friendly aliases. Feature Title 2 (398:72682) has a standalone written definition without a proven adjacent style bridge; its written values are usable and must not be blocked merely because no bridge exists.

**Confirmed documentation contradiction:** `packages/figma-foundations/README.md` still has a “Font exception” section instructing consumers to load Inter, followed later by the correct Switzer section. Its package-boundary paragraph also omits fonts although `package.json` exports/bundles them. Correct the superseded instructions in the next documentation release; frozen 0.1.0 files should remain unchanged.

**To close:** render all 47 specimens with loaded Switzer, compare geometry/decoration to source, check multiline and link cases, and verify importing instructions in a clean consumer. Existing source-value checks are not a pixel comparison of all 47 specimens.

# Page 12 Layout / Grid

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=8-528). Source page ID `8:528`.

**Written definitions correct; reusable demonstration/constraint coverage missing.** Source 8:673–8:674 specifies mobile 320–767px, four fluid columns, 15px margins and 16px gutters. Source 8:693–8:694 specifies desktop ≥768px, 12 fluid columns, 32px margins/gutters and maximum 1320px centered container. Tokens contain these exact definitions; the Grids story only prints configuration JSON. There is no foundation CSS grid/container utility or rendered grid story demonstrating the promised behaviour.

**Source contradiction:** visible annotation 427:83179 says 23px while written 8:694 says 32px. The agreed written-first rule already resolves the code margin to 32px. Source also describes centering as width increases beyond 1366px; at 1366px a 1320px container yields 23px outer space, so the relationship among “max width”, container edges and the written 32px margin must remain explicitly scoped rather than silently allowing the annotation to override the written value.

**To close:** provide a documented layout helper or worked implementation using the written precedence, with rendered checks at 320, 767, 768, 1366, 1440 and 1920px. Verify the actual container-edge interpretation, equal fluid columns/gutters, 1320px cap, centering and overflow. The source’s “4×4 mini unit” is a general composition guide; the explicitly written 1px/2px spacing and 15px mobile margin are valid exceptions, not defects to round.

# Page 13 Device

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=410-85003). Source page ID `410:85003`.

**Confirmed missing reference assets/examples; not automatically a missing product component.** Source frame 414:82816 includes four device/mockup branches: phone 414:82817 (422×876 outer, 390×844 screen), display 414:82823 (1435×920 outer), laptop 414:82828 (1881×1083 outer, 1440×903 screen placeholder) and desktop 418:83949 (2131×1773 outer, 1920×1080 screen placeholder). Labels Small/Medium/Large are 434:82757/434:82765/434:82770. No Device/mockup catalogue or reusable preview wrapper exists in current Storybook/package exports.

**To close:** document this as presentation tooling, preserve original frame/screen geometry if supplied, and provide source-linked mockup examples where required for prototype reviews. Do not infer CSS breakpoints from drawings or their labels; breakpoint rules come from Layout/Grid. Count this as full-file coverage work, separately from runtime component fidelity.

# Page 14 Iconography

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=13-534). Source page ID `13:534`.

**359 asset integrity checks passed; variant/callsite/visual review remains.** The Icon API and catalogue expose 359 original source components. Fresh checks confirmed all 359 SVG hashes match the registry and all source dimensions match. Original families and property strings are retained, including `icons.social`, `Name=Amazon`, `Property 1=Light_Outline`/`Dark_Outline` and mixed `Icon/`/`Icons/` case conventions. The page contains 135 page-resident variant sets; icons are selected by exact node ID rather than a guessed semantic name.

No new confirmed missing icon asset was found. To reach full acceptance, compare all 359 renderings on appropriate surfaces and check each component callsite for correct variant, size, paint and accessibility. Native assets include 24×24 and 32×32 roots; the optional Icon `size` scales artwork and must only be used where its applicable component slot establishes that size. Monochrome masks are limited by `monochromeMaskSafe`; verify any recoloured callsite against source intent. Inconsistent source naming does not justify silently renaming variants.

# Page 15 Illustration

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=13-1772). Source page ID `13:1772`.

**Confirmed major missing coverage.** This is not an empty placeholder page. The decoded source has 73 top-level FRAME records, including the Illustration documentation frame, with artwork such as Envelope 13:1776, Wifi 13:1784, Plug 13:1788, Recycle 13:1813, Shopping bags 13:1907, Receipts 203:34946 and later Add-on artwork. The root agent is checking the live inventory; final asset grouping must exclude heading/documentation frames and retain all actual artwork.

The code has Icon and Logo asset registries but no Illustration registry, exported Illustration component or Storybook catalogue. These graphics are not covered by the 359 icons. This is confirmed missing DS asset coverage, not an unknown colour value.

**To close:** export each original artwork asset unchanged; retain exact node ID/name, light/dark applicability, native dimensions and authored colours; create a reusable asset API and catalogue; verify all assets render and keep aspect ratio, original fills and proper decorative/meaningful labels. Resolve duplicate generic names (`Power`, `Delivery`, `Illustration N`) by exact node ID, not the first name match. Full-file coverage cannot pass while this page is absent.

# Page 16 Spacing

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=409-72354). Source page ID `409:72354`.

**16 written values passed; no new value mismatch found.** Original spec 410:72421 lists spacing.0, 1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72 and 80. Tokens and the 26-property spacing/border group preserve exact names and numbers; the Scale story shows all 16. Source 410:72425/410:73734 says scales apply inside components and between components.

**To close:** component-by-component computed layout checks need to show these values are actually used in the applicable scope, including inside-stroke and long-text cases. Having all tokens does not prove component padding/gaps. A global replacement of all literal spacing is unnecessary for fidelity; an exact literal can match the source. General 4px guidance does not invalidate written 1/2px increments.

# Page 17 Border

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=105-3464). Source page ID `105:3464`.

**10 written values passed; no new token mismatch found.** Source 382:72799–382:72823 defines radius none 0, x-small 2, small 4, normal 8, medium 14, large 20 and full 50%; 382:72831–382:72841 defines width none 0, small 1 and medium 2. Runtime values and names match. Source full radius is 50%, not an unqualified 9999px pill alias.

**To close:** verify computed radius, stroke and inside-stroke layout for each component state at native and fluid dimensions. The historical native checkbox 0px radius does not prove that the current asset-backed checkbox still fails; inspect the current component separately. Preserve original rounded geometry and avoid semantic renaming without mapping.

# Page 18 Separator

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=13-1919). Source page ID `13:1919`.

**Status: no component gap.** Empty navigation separator.

# Page 19 🐥 Components

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=13-1920). Source page ID `13:1920`.

**Status: no component gap.** Empty section marker. Its substantive component pages are covered separately in the full audit.


# Page 20 Accordian

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=245-38543). Source page ID `245:38543`.

**Status: incomplete source coverage, plus an unresolved icon identifier conflict.**

- **Coverage A20.1, high:** The page's actual local set `463:83388` has eight authored combinations: Background Light/Dark × State Close/Open × Title On/Off. Its variants include `463:83389` through `463:83443`; Title On contains a separate 24px Section Title and the set uses 24px vertical spacing. `Accordion.tsx:6–13` implements only the guide instance `245:38719`, fixes `data-theme="dark"` and has no Background/Title controls or section-title structure. The two composition stories cover only guide open/closed. Keep the guide branch and add or explicitly map the distinct local set, preserving its source property names and eight real tuples; render every tuple at its source size and narrow widths. Do not relabel the guide as coverage of this set.
- **Coverage A20.2:** Separate source component `468:82805`, “Accordion - Colour”, includes a 390×476 composition with a “Why Cromā?” title and gradient content. No corresponding source branch was found in the component API/stories. Decide its documented use relative to the regular local set, then implement and verify the original gradient/artwork if it belongs in the full library.
- **Source conflict A20.3:** Written glyph IDs E813/E816 disagree with exported saved IDs E819/E81C. Existing original 11×7 artwork in 16px slots is a usable shape fallback. It does not prove an exact glyph-name mapping. Retain both identifiers and resolve the mapping within the file, or retain an explicit acceptance exception for identifiers.
- **Verification:** No full per-tuple rendered comparison was performed for these missing local branches. Guide geometry is not their acceptance evidence.

# Page 21 Bottom Sheet

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=245-54344). Source page ID `245:54344`.

**Status: the two saved variants are implemented; full visual and gesture acceptance remains unverified.**

Source set `550:83765` has Type Drag (`549:83710`) and Close (`550:83773`), each 390×480. `Behaviours.tsx:55–56`, `surfaces.css` and the Drag/Close stories preserve that structure, including the 32×4 handle and native modal behaviour. No new source-value mismatch was established in this pass.

- **Verification A21.1:** Produce one source-to-render measurement sheet for both variants: outer bounds, top radii, header/handle area, body padding and title, close art, all shadow layers; repeat at 320px and with long body content. The source variants are 390px wide; shrinking is a robustness check, not a claim of an additional source variant.
- **Behaviour A21.2, verification:** The current “drag” handler closes after a downward displacement exceeding a quarter of the dialog height; it does not translate the sheet under the finger or use velocity/snap-back. Define and test the ideal gesture behaviour, including cancellation, short drags, scrolling inside the body, Escape, focus return and reduced motion. Figma's two visual variants do not prescribe numerical animation physics, so do not invent source-backed values.
- The source prose describes standard/modal/expanding sheet usage. The API currently creates a modal dialog only. This is a **scope question**, not evidence that three additional authored visual variants exist: document whether nonmodal/expanding use is required for this library.

# Page 22 Buttons

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=242-34930). Source page ID `242:34930`.

**Status: both branches are represented; no new concrete source-value defect was established here.**

The separate local set `393:72921` contains 23 authored combinations and source properties Size, Type, State, Right Icon and Right icon instance. `src/local/Button.tsx` retains the variant strings, rejects nonexistent combinations and documents its JSX-safe RightIcon/RightIconInstance mapping. The guide branch uses Large/Small and Filled/Outlined/Text/Icon/Segmented separately; it is not an alias of the local set. `ButtonGate.stories.tsx` provides both branches and source artwork rather than plus-sign icons.

- **Verification A22.1:** Close acceptance with an exact per-case matrix for all 23 local variants, 36 guide Filled/Outlined/Text cases, actual Icon cases and Segmented anatomy. Compare not just minimum height but text weight/line height/tracking/case, per-slot foregrounds, disabled opacity, fill layers/gradients, inside stroke, icon native dimensions and all padding/gaps. A gate containing a case is not evidence that every value passed.
- **Verification A22.2:** Check real pointer hover/press, keyboard press/focus, disabled suppression, long-label containment and source-width cases after Switzer. Preserve the source property's unusual State names such as Link on Light/Link on Dark and document their mapping rather than renaming them silently.
- Historical written-state fixtures still contain unrelated placeholder-art examples; use the whole-component Button gate as the intended acceptance route and label historical fixtures accordingly.

# Page 23 Cards

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=144-6142). Source page ID `144:6142`.

**Status: light source coverage and skeleton coverage are missing; complete interactive acceptance is unverified.**

- **Coverage A23.1, high:** The six page-resident masters are two surface branches: dark Elevated/Filled/Outlined `171:38467–38469` and light `171:38474–38476`, all with 14px corners. Light masters carry base #F9F9F9 plus explicit overlay fills; dark masters carry #393939 plus their overlays. `CardProps` in `Behaviours.tsx` exposes no Theme/Background axis, and generated CSS fixes the Card surface and foreground to dark source paints `39:2430/2431`. A light card cannot be selected through a documented source-backed API. Add the missing theme mapping, preserving each exact source style and state layer, then compare both themes and the three card types.
- **Coverage A23.2:** Visible guidance `171:18914` explicitly describes a Skeleton Card for loading. There is no skeleton component/state or corresponding story in the inspected Card API. Locate its exact source figure/artwork and measurements, then implement it; where the page supplies description without enough appearance values, record a source gap rather than choose a generic skeleton design.
- **Behaviour A23.3, verification/scope:** The page describes one large card touch target and multiple internal actions (`171:19108`, `171:19144`). The component is a plain section; it supports caller-provided actions but supplies no explicit whole-card action API or keyboard contract. Define a safe composition for each interaction (without nested interactive controls), then verify focus, activation and hover/press feedback. A static section should not imply it has those interactions.
- **Verification:** Check media aspect-ratio variants, title/body truncation, padding 16/gap16/details4, original data-supplied media geometry and both theme/state surfaces. The existing source-card story is one composition, not full coverage.

# Page 24 Chat

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=245-52051). Source page ID `245:52051`.

**Status: one editable source composition is implemented; acceptance gaps are coverage and behaviour checks.**

`245:52312` is a 342×755 editable Chat frame with its own original background, avatars, attach, microphone and close art. `Chat.tsx`/`chat.css` implement this branch, with caller-controlled messages and native composer behaviour. This pass found no new proved geometric mismatch.

- **Verification A24.1:** Record source-to-render bounds and typography for the entire source conversation, first/subsequent avatars, incoming/outgoing bubbles, timestamp alignment, action buttons, date separators, title and composer. Exercise the page's distinct default/active illustrations rather than assuming the single main frame covers every illustration.
- **Behaviour A24.2:** Verify controlled and uncontrolled open/close/reopen, message send by keyboard/mobile, IME composition, empty message suppression, attachment selection, callback wiring, long messages and sticky scroll behaviour. Attach/voice buttons can be rendered without callbacks; prototype consumers must either wire them or mark the demo's unavailable actions clearly. This is a usability requirement, not a claim that a voice service is part of the DS.
- **Source conflict:** This page contains copied Search/Card prose, e.g. `245:53184` and `245:53192`. Assign requirements to the Chat frame/annotations only; copied component descriptions do not establish Chat values.

# Page 25 Checkbox / Radio / Toggle

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=144-15458). Source page ID `144:15458`.

**Status: original artwork is integrated, but one observable reset defect and state-coverage gaps remain.**

- **Mismatch A25.1, high, browser reproduced:** An uncontrolled Toggle initially unselected was checked, then its containing native form reset. The native input returned to `checked=false`, but the displayed image remained `toggle-dark-selected`. `Behaviours.tsx:18` chooses artwork from React localChecked and has no reset synchronization; native reset does not fire its onChange. The browser evidence records before/after values. Synchronize the visual state with form reset and verify both defaultChecked directions, both themes and repeated resets. Use a form created by the consumer as the final regression fixture; this audit enclosed an existing Storybook Toggle in a native form to expose the mismatch.
- **Coverage A25.2:** Source sets are checkbox `205:34948` (dark/light × unselected/selected/Indeterminate), radio-buttons `205:35036` and toggle-switch `208:34930`. The written Checkbox/Radio/Toggle prose also enumerates hover/focus/press/disabled states. The generic fixtures show only part of that cross-product; Toggle written fixtures are dark only, and disabled selected/mixed Checkbox variants are not separately exercised despite packaged artwork. Build an explicit valid source-case matrix, then check every native state and label opacity, outline, selected artwork, native 24px slot and interactive target.
- **Naming:** Source generic Property 1/Property 2 maps to Theme plus native checked/indeterminate in code. Preserve this source-to-code alias mapping in public documentation; do not claim exact API name identity.
- The old “native checkbox radius 0px” failure is historical. Current code uses original checked/mixed artwork and appearance:none, so that old failure was not carried forward as a current defect.

# Page 26 Chips

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=144-8239). Source page ID `144:8239`.

**Status: the guide branches are represented; local-set equivalence and all-state acceptance are incomplete.**

- **Coverage A26.1:** The page also has local sets filter `224:35058` with Property1 dark/light and Property2 selected/unselected, and Choice `224:35046` with on light/on dark and default/active. Code uses Theme/selected or native Radio selection and keeps named guide states. Provide a literal tuple map from these two local sets to the implemented guide variants, showing exact value/artwork equivalence or preserving separate branches where they differ. Their presence in the page inventory is not proof of parity.
- **Verification A26.2:** Verify Info Default/Special, Input with/without icon, Filter selected/unselected and Choice states across both themes, including all authored hover/focus/press/disabled combinations. Check remove artwork and inside strokes, not browser button defaults. Generic acceptance fixtures still include plus glyphs; use source-artwork examples for visual sign-off.
- **Behaviour A26.3:** Check native keyboard selection, removal focus handoff to a surviving chip, disabled removal suppression, wrapping with the written minimum 12px spacing (`144:8953`) and clipped labels. Current InputChip calls onRemove but has no collection-level focus recovery; the composition must supply and test it. This is a behaviour integration gap, not an invented source spacing value.

# Page 27 Divider

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=105-3465). Source page ID `105:3465`.

**Status: six guide cases are represented; source/master mapping and final visual proof remain.**

The guide implementation has dark/light × 1px/4px plain or 1px with text; unsupported 4px-with-text throws. It uses 16px horizontal margins and source caption typography. The page-resident local set `153:13149` has On Dark/On Light only; keep that distinction clear.

- **Verification A27.1:** Record the mapping between the local set and the guide's six real cases, and measure stroke widths/alpha, text gap/alignment and outer width at source widths. A thin rule's bounding box must include its painted border; height:0 is not itself a defect.
- **Source conflict A27.2:** Copied Card/Input descriptions (`153:12746`, `153:12738`) and a Filled button states heading (`153:12984`) are not Divider requirements. Preserve only applicable annotated/written rows. No new confirmed visual defect was found here.

# Page 28 Dropdown

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=144-12667). Source page ID `144:12667`.

**Status: six named saved states are represented; interaction and accessibility acceptance remains incomplete.**

Source set `1715:79529` has exactly six authored tuples, not the full State×Visible Cartesian product. `Dropdown.tsx` retains exact source strings/case and rejects unsupported tuples. Browser inspection found all six stories at 54px control height with the expected open/closed lists.

- **Behaviour A28.1, verification:** State/Visible props intentionally lock a preview variant; Escape/outside click cannot close the forced-open story because open is derived from that prop pair. Document preview-only state forcing and use the unforced interactive story for behaviour acceptance. Do not present the locked state fixture as the prototype interaction contract.
- **Verification A28.2:** Check Arrow/Home/End/typeahead/Enter/Space/Escape/Tab, disabled options, empty lists, controlled updates, native form reset, required validation, active-option scrolling, viewport flipping, long values and mobile keyboard input. Verify the native select/custom listbox combination with an actual screen reader; a transparent native control plus a second listbox is not automatically a validated accessibility pattern.
- **Not a gap:** The apparent 12px floating Dropdown labels are hidden in these saved variants (`1715:79551/79562`); their absence from the visual implementation is correct. They must not be promoted into required visible content merely because they exist in the node tree.

# Page 29 Header

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=248-59268). Source page ID `248:59268`.

**Status: source-limited; whole Header is not implemented to acceptance.**

- **Source gap A29.1, high:** Anatomy includes raster `248:59641` displayed 941×52 inside `248:59562`; it does not expose editable children for all seven header elements. The code's `Header` in `Compound.tsx` is a generic wrapping composition helper and explicitly unspecified, not a recovered Header. The source-reference story correctly shows the original raster. With the supplied file as the only source, unresolved element spacing, type, colours, states and responsive rules cannot be truthfully certified by reading raster pixels as written specs.
- **Next action:** Exhaust same-file linked masters/nested references and actual saved properties for the individual elements. Where none exist, list each missing value and accept that exact Header acceptance is source-blocked unless the source is enriched or a scoped interpretation is explicitly approved. Implementing a plausible header alone cannot close this gap.
- Copied Search/Card content (`248:60001`, `248:60009`) and hidden footer templates must remain excluded from Header requirements.

# Page 30 Input Fields

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=247-45267). Source page ID `247:45267`.

**Status: confirmed typography/colour mismatches in multiple actual Form Field states, plus an unmapped Dropdown branch.**

There are no component-specification tables inventoried for this page. Its visible actual Form Field `827:82201` properties therefore supply the unwritten values under the approved source policy. The seven state names and 54px height/8px radius are implemented, but a shared label style incorrectly normalises distinct saved states.

| Finding | Exact visible source | Browser result in the matching source-state story | Required change |
| --- | --- | --- | --- |
| A30.1 Default | `820:82181`: Switzer Bold 16/22, black | 14/20, weight600, grey≈#5F5F5F | Apply the Default node's exact typography and colour |
| A30.2 Active | `827:82203`: Semibold16/24, black, y−8 | Bold12/16, grey≈#9B9B9B, y−8 | Keep the correct offset but restore this state's font and colour |
| A30.3 Hover | `827:82240`: Semibold16/24, black | 14/20 weight600, grey≈#5F5F5F | Restore visible Hover typography and colour |
| A30.4 Filled | `840:82225`: Bold12/16, #088466, y−8 | Bold12/16, grey≈#9B9B9B | Restore the source green for this state only |
| A30.5 Error 2 | `840:82311`: visible in-field Semibold14/20 grey; `840:82303`: separate red supporting text at y62; floating caption hidden | In-field label is red | Keep in-field label grey and reserve red for the separate error text, matching source visibility |

Evidence: `FormField.tsx:33–37` selects the source state, `form-field.css:21–32` applies shared values, and fresh browser measurements are in `audit-components-a-browser-2026-11-04.json`. Fix per-state bindings, then rerender all seven states after Switzer at source width298px and narrow/wide/long-label compositions. Do not copy the active state's 16px values into Filled/Error/Hover2, which have distinct visible text properties.

- **Coverage A30.6:** The same page separately owns form Dropdown set `840:82414`, with six variants `840:82413`, `840:82415`, `920:82438`, `931:82487`, `942:82524`, `942:82536`. Current Dropdown maps only set `1715:79529` on the Dropdown page. Establish a node-by-node equivalence map before reusing that implementation; if the actual border/text/visibility/interaction values differ, keep a separate branch. This is an unmapped branch, not proof that duplicate code is required.
- **Verification:** After the state fixes, measure every border piece, notch, caret, required mark, helper text, native focus/hover, disabled/read-only and form-reset transitions. Passed build/source-literal checks did not catch these semantic state mappings.


# Page 31 Labels & Badges

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=263-58477). Source page ID `263:58477`.

Figma page `263:58477`, exact source name `Labels & Badges`. **Confirmed gap plus verification gap.**

- **B31.1 Local semantic badge family is absent.** The visible overview contains local set `304:72592`, with `Property 1=Default` (`304:72591`), `New` (`304:72593`), `Deal` (`304:72599`), `Sustainable` (`304:72608`) and `Light` (`307:72622`). Default/Light are 66×32 examples; icon-bearing examples are 86×32. The saved source uses pill radius 518, horizontal padding 14 and Switzer Bold 14/20 labels; New/Deal/Sustainable add a 16 px source icon and 4 px icon gap. The release `Label` API in `packages/figma-ds/src/Behaviours.tsx:62` exposes Type, Colour, Emphasis, Size and Shape, with no Property 1 semantic family. Its generated text-badge base uses 12 px/600 and 8 px large padding. The separate `Badge` in `Compound.tsx:28` is the Chips-page badge: 28 px minimum height with a bottom-right corner and 14 px regular text. Neither is an implementation of these authored local badges. **Action:** add this local family as a separate mapped export/API with the exact five source variant names; retain the existing written/library badge family. **Pass:** five matching source fixtures with original icons, exact effective colour bindings, typography, pill geometry and 32 px height; confirm both existing families still behave unchanged.
- **B31.2 Existing library variants have no complete fresh visual acceptance matrix.** Generic Text Badges/Number Indicator/Dots exist, and the page has independent local number/dot assets (`304:72621`, `304:72620`). The local number badge is 20×20 with a 10/16 Semibold number; the written family uses different rules, including 24 px width and 12 px text in generated CSS. These are separate scopes, not proof the written implementation is wrong. **Action:** map every supported family to its exact source and mark unsupported local variants explicitly. **Pass:** enumerate all valid tuples, distinguish invalid combinations, and compare every displayed tuple in both themes with written rules winning within their actual scope.

- **B31.3 Local badge sizing also contains a source constraint conflict.** Default `304:72591` saves a 32 px frame, vertical padding 8 and a 20 px text line. Padding plus line height totals 36 px. Copying all three literally into a naturally sized box would change the source height or overflow its content. **Action:** inspect actual rendered bounds/constraints and any applicable written specification; record which property represents intended spacing before implementation. **Pass:** source-backed 32 px appearance with robust alignment, with the superseded conflicting saved property explicitly identified. This is a source inconsistency, not a measured implementation defect.

# Page 32 Menu

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=248-60935). Source page ID `248:60935`.

Figma page `248:60935`, exact source name `Menu`. **Confirmed coverage gap and source decision.**

- **B32.1 The source page contains more than the generic menu fixture.** Its visible Overview `248:60942` contains the older navigation-drawer composition (`248:61335`, `248:61722`, main `247:51018`), NeuPass card (`248:60959`), four quick-link tiles (`248:60962` onward), 56 px navigation rows, nested groups, toggle/control rows, text links and responsive navigation styles. `MenuSource.stories.tsx` provides a single plain list example with text, one nested section, one disabled row and a message. `Menu` in `Compound.tsx:13` supports supplied icons, controls and nesting, but no fixture reconstructs this full source anatomy. **Action:** map the page's actual compositions and add complete source fixtures; do not count a flexible slot as proof that each source composition matches. **Pass:** each visible composition has source IDs, supplied original artwork, measured row/subrow/icon/divider geometry and a rendered comparison.
- **B32.2 Temporary menu surface versus navigation-list scope is unresolved.** Visible text `248:64886` says menus present choices on a temporary surface, while several neighbouring guidelines and frame names describe navigation drawers. The exported `Menu` is a permanent `<nav>` and does not own a trigger, popup placement, dismissal or menu keyboard model. That is suitable for a drawer list, but not sufficient for a temporary command menu. **Action:** explicitly scope which examples are drawer lists and which are temporary menus. Implement a popup wrapper only for the latter, retaining navigation semantics where appropriate. **Pass:** each family has a documented source mapping and appropriate opening, focus, selection, dismissal and keyboard checks. Copied text-field guidance on this page must not become menu requirements.

# Page 33 Navigation Drawer

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=247-50726). Source page ID `247:50726`.

Figma page `247:50726`, exact source name `Navigation Drawer`. **Partial implementation; older branch remains outside acceptance.**

- **B33.1 The Account and older profile/NeuPass branches are different source families.** Current Account `247:51237` has its original nine icons, 348 px inner panel, 24 px padding, 35 px icon slots and 16/24 Bold labels in `NavigationDrawer.tsx` and `navigation-drawer.css`. The older `247:51078` branch accepts caller profile/NeuPass/quick-link content, but its complete exact source composition and original subassets are not supplied by `navigationDrawerAccountSections`. The source includes 28 px profile imagery, a NeuPass card and 156×80 tiles. **Action:** finish a separate older-branch fixture and complete its source/asset mapping, without applying its dimensions to Account. **Pass:** both branches separately match their applicable source, including short/long copy and all nested destinations.
- **B33.2 Swipe dismissal is missing from the drawer API.** Visible guideline `247:53488` includes dismissal by selecting an item, tapping the scrim and swiping toward the anchoring edge. Code supports item close, scrim, Escape and focus trapping/return through `ModalSurface`; neither `NavigationDrawer.tsx` nor the shared drawer surface adds a swipe handler. **Action:** add an interruption-safe drawer swipe interaction, preserving vertical content scrolling and keyboard dismissal. **Pass:** deliberate horizontal swipe closes; vertical scrolling and short/cancelled gestures do not; focus returns correctly.
- **B33.3 Standard drawer is not accepted.** The visible page introduction `247:51417` distinguishes standard and modal drawers, but the implementation always uses native modal `<dialog>`. Some detailed standard-drawer guidance is hidden and must not be promoted automatically. **Action:** determine whether the visible standard family is required for the prototype release; retain it as unsupported until its exact source layout is mapped. **Pass:** explicit coverage disposition and, if included, non-modal interaction/layout checks distinct from modal Account.

# Page 34 Pop ups

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=278-84548). Source page ID `278:84548`.

Figma page `278:84548`, exact source name `Pop ups`. **Implemented canonical surfaces; verification gaps remain.**

- **B34.1 Canonical variant coverage needs final measured acceptance.** The page has Mobile Default `659:82226` (360×479), Mobile Fullscreen `662:82711` (390×844 source canvas) and Desktop Default `665:82183` (720×429). `Behaviours.tsx` and `surfaces.css` implement those three and correctly reject Desktop Fullscreen. The fullscreen implementation is intentionally viewport-sized rather than hardcoded to the source device. The Storybook `SurfacesSource` exposes its fullscreen case via the Case control, although no separate exported fullscreen story exists. **Action:** capture the three canonical variants with actual Switzer at their source dimensions, plus constrained viewport/content cases. **Pass:** title/close/content/footer geometry, original close art, colours and scroll regions match; keyboard focus, Escape, close, reopen and focus return work in all variants.
- **B34.2 Action composition is not covered by the main source fixtures.** `PopUp` exposes footer/confirm/dismiss slots; visible guideline `278:91387` specifies confirmation at the trailing side with dismissal before it, reversing for RTL. Source fixtures render only a title and `Content` paragraph. **Action:** add a source-backed action composition and long-action-text/RTL fixtures rather than treating unused slots as accepted. **Pass:** actual button family, order, spacing and layout match source; narrow screens preserve reachable actions.
- **B34.3 Copied guideline scope still needs explicit disposition.** Numerous visible rows on this page concern text fields and navigation drawers; for example `278:88901` describes modal drawer opening/dismissal. They are not automatically popup rules. **Action:** mark copied rows out of scope with their exact row/node references. **Pass:** no popup acceptance test imports a drawer or field measurement merely from its page location.

# Page 35 Search bar

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=245-42988). Source page ID `245:42988`.

Figma page `245:42988`, exact source name `Search bar  ✔️`. **Confirmed missing family and unresolved artwork conflict.**

- **B35.1 The local 48 px Search family is not implemented.** Visible local main `294:72589`, named `Search`, is 579×48 with radius 14; child `245:44134` uses horizontal padding 16, vertical padding 12 and an 8 px gap. The release `SearchBar` (`SearchBar.tsx:6`, `search-bar.css`) implements source `245:44147`/`245:44166` with written-priority 40 px minimum height, radius 4, padding 8×12 and 16 px outside margins. It has no family/size prop for the distinct local Search main. **Action:** preserve the existing written/library implementation and add a separately mapped local Search family. **Pass:** both families have their own source fixture and exact visual/value comparison; no 48 px rule overwrites the written 40 px branch.
- **B35.2 Current Search glyph remains an explicit exception.** `SearchBar.tsx` directly documents that its clear control uses a chip close alpha mask instead of the actual overridden Search font glyph; leading art also uses the original main artwork fallback. The supplied Switzer file does not itself establish the private-use icon glyph rendering. **Action:** resolve the source instance override versus main artwork at exact IDs, or obtain a scoped approval identifying which source representation is authoritative. **Pass:** all leading/clear/caret states have exact artwork/font provenance and a visual comparison; a guessed substitute cannot receive exact-art acceptance.
- **B35.3 Behaviour coverage is narrower than complete family acceptance.** Native Enter submission, clear and refocus exist, and caret colour is source-scoped. **Action:** test both themes/families empty, focused, typed, clear, long query and keyboard-only operation. Keep autocomplete or immersive-search composition separate until its own source is mapped.

# Page 36 Steppers

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=245-47939). Source page ID `245:47939`.

Figma page `245:47939`, exact source name `Steppers  ✔️`. **Implemented source family; remaining scope and verification gaps.**

- **B36.1 The page has repeated overview/spec groups that need an explicit equivalence ledger.** Roots `245:48001`, `245:48921` and `245:49890` repeat stepper content. The code maps the four theme/orientation figures `245:48010`, `245:48052`, `245:48078`, `245:48120`. Several later overview instances resolve to the same earlier item masters, so repeated sections must not be counted as separate missing components without a property comparison. **Action:** establish which repeats are exact duplicates and whether any copy has changed state, icon, value or typography. **Pass:** every visible source figure resolves to an implemented case or documented duplicate.
- **B36.2 Current Storybook fixture exercises one progression value.** `SteppersSource.stories.tsx` shows all four theme/orientation cases at `current={1}` with repeated source-like numbers, while the API also accepts icons/descriptions and arbitrary counts. This review found no basis for reopening the corrected 8 px group gap/24 px non-last copy padding. **Action:** add complete first/middle/last/completed/inactive progression cases and icon-bearing cases, with exact source state mapping. **Pass:** each state retains correct path colour, count/ring, label weight, source art and geometry; long content and additional steps remain usable.
- **B36.3 Navigation is a supported source use but not an implemented mode.** Visible text `245:48172` says steppers may also be used for navigation. `Steppers` renders a labelled `<nav>` containing noninteractive spans; it has no per-step link/action interface. **Action:** scope the current export as a progress indicator and add an explicit navigable composition if required, rather than making all steps clickable by default. **Pass:** approved navigable cases have clear current/completed/unavailable states and keyboard access; progress-only cases keep their semantics.

# Page 37 Sticky footer

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=278-58490). Source page ID `278:58490`.

Figma page `278:58490`, exact source name `Sticky footer`. **Source behaviour conflict and verification gap.**

- **B37.1 Two visible definitions conflict.** Overview `278:58649` describes a footer pinned to the viewport and visible while scrolling. Visible guideline `278:63640` says it sits at the viewport bottom when content is short and below content in normal flow when content is long. The release default is `position:sticky; bottom:0` (`sticky-footer.css`), which is neither a complete page-shell recipe for short-content push-to-bottom nor an always-fixed overlay. The isolated source story deliberately sets `sticky={false}`, so it proves row geometry rather than page scrolling. **Action:** preserve the 390×72 price/CTA composition, resolve the two behaviour scopes and provide separate named page-shell/fixed-overlay compositions where justified. **Pass:** short and long pages demonstrate the chosen mode with no overlap; footer remains reachable and source dimensions are preserved.
- **B37.2 Long-content, custom slots and action-state acceptance is incomplete.** Current fixtures cover 390 and 320 px geometry and a working Add to cart callback. They do not enumerate long price/installment strings, a supplied custom action, keyboard focus, disabled/loading action composition or different page scroll contexts. Not all of these states are authored; unsupported states must be marked rather than invented. **Action:** add source-backed state cases and clearly separate robustness fixtures. **Pass:** no clipped price/action at supported widths; exact CTA sizing and written typography remain intact.

# Page 38 Tabs

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=263-58478). Source page ID `263:58478`.

Figma page `263:58478`, exact source name `Tabs`. **Confirmed missing capabilities plus state verification gaps.**

- **B38.1 Scrollable layout is absent.** Visible `278:74861` requires scrollable tabs to have content-defined widths, consistent padding and a leading offset. Current `tabs.css` always uses `flex:1 1 0`, `min-width:0` and single-line ellipsis; `TabsProps` has no fixed/scrollable mode. **Action:** add a separately mapped scrollable layout and retain the current equal-width fixed layout. **Pass:** all tabs remain reachable by pointer/keyboard on narrow screens, initial leading offset matches the applicable source, selected-tab scrolling works, and fixed tabs retain written 48 px/2 px/8 px geometry.
- **B38.2 Icon labels are absent.** Visible guidance `278:74628`/`278:74637` allows icons and text. `TabItem` in `Tabs.tsx:3` only permits `label:string`; there is no icon slot or icon-label geometry. **Action:** recover the applicable icon-bearing figures, add the slot and preserve original assets. **Pass:** text-only and icon/text variants have exact spacing, dimensions, active colour/indicator and accessible names.
- **B38.3 Primary/secondary taxonomy is not mapped.** Overview text `278:66224` names primary and secondary tabs. The code exposes only Theme with a single layout/style family, mapped to `278:66348`/`278:66360`. **Action:** identify the actual figure/master distinction before adding a new style or alias; written prose alone does not supply missing geometry. **Pass:** primary/secondary source examples have explicit dispositions and exact mappings, or remain named unsupported source gaps.
- **B38.4 Disabled styling and responsive alignment remain unaccepted.** The implementation has native disabled behaviour and correct roving arrows/Home/End with RTL reversal, which are positive existing capabilities. Disabled appearance simply uses inactive styling; exact Tabs-specific disabled visual provenance is not established. Visible `278:74816`/`278:74821` also permits centered or leading-aligned groups, while the code only stretches equal segments across its host. **Action:** map applicable responsive/disabled cases and measure them; do not describe keyboard behaviour as absent.
- Hidden swipe guidance (`278:74784`, under hidden Anatomy `278:74738`) was inspected but is **not** promoted to a missing swipe requirement under the current hidden-table policy.

# Page 39 Tooltip

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=159-12949). Source page ID `159:12949`.

Figma page `159:12949`, exact source name `Tooltip  ✔️`. **Implemented 52-tuple geometry/artwork; trigger and verification gaps.**

- **B39.1 Information-icon trigger cannot be expressed directly.** Visible guideline `160:13870` says to use tooltips for information icons and `160:13860` places the beak toward that icon. `Tooltip.tsx:5` requires a text `label`; the component always renders its own Text Button trigger. Its `icon` prop affects the bubble heading, not the trigger. **Action:** add a source-backed icon/child trigger option with a real accessible name, retaining the existing text trigger for allowed cases. **Pass:** actual information-icon trigger geometry and beak alignment match; focus, pointer and touch interaction all work.
- **B39.2 Touch/transient policy is not complete.** Visible `160:13795` describes hover/focus/touch with disappearance after a short duration. Code uses mouse enter/leave, focus/blur and Escape, with no explicit pointer/touch lifecycle or duration. A touch-induced focus can keep it visible until blur; that is not an established match to the visible transient guideline. **Action:** define a robust touch lifecycle while preserving hover and keyboard readability. **Pass:** touch open/dismiss, hover persistence, keyboard focus/Escape and controlled Open behaviour are tested without a stuck bubble.
- **B39.3 Hidden timing/motion prose requires applicability review.** Exact 1.5 seconds (`160:13849`), fade (`160:13852`) and long-press text (`160:13846`) live beneath hidden Behavior frame `160:13843`. Whole hidden written tables are authorised, but that does not automatically authorise every hidden prose template. **Action:** classify these specific nodes before adopting exact timing or calling its absence a confirmed mismatch. The visible transient guideline still applies.
- **B39.4 A complete 52-tuple rendered comparison remains necessary.** The release data includes 52 theme/position/beak/stroke tuples and 100 original art assets, and code flips near edges and constrains long copy. This reviewer did not establish new failures in the already-corrected pointer orientation or stroke layout. **Action:** measure/render all tuples after Switzer loading, including edge flips and both no-beak variants. **Pass:** source IDs, fills, stroke, shadow, title/copy metrics, body padding and pointer slots match per tuple; no clipped tooltip in constrained hosts.

# Page 40 Various

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=557-83995). Source page ID `557:83995`.

Figma page `557:83995`, exact source name `Various`. **Confirmed missing primitive families and ambiguous state coverage.**

- **B40.1 Option and List are not mapped as source families.** `Option` frame `845:82252` contains `State=Default` (`845:82251`), `Hover` (`845:82253`), `Selected` (`845:82255`) and exact spelling `selected hover` (`907:82273`), each 84×44 in the source master. `List` main `845:82271` is 231×220 with five 231×44 instances. The public exports in `src/index.ts` have no Option/List family. Dropdown has its own option implementation and different main IDs; it cannot be assumed to cover these private primitives without a source mapping. **Action:** decide whether to export them or keep them private behind Dropdown, but implement/map their four exact states and list composition. **Pass:** 4-state source comparison, five-row list geometry, selected-hover behaviour and accessible keyboard selection. Preserve source names even if a separate code alias is needed.
- **B40.2 Container states need independent review.** `549:83702` groups Close (`549:83701`), Open (`549:83703`), State3 (`550:83915`), State4 (`550:83923`) and State5 (`557:83996`) as 390×844 canvases. Existing BottomSheet covers Drag/Close surfaces, but no export or fixture maps these five container states. Generic names State3/4/5 do not establish meaning. **Action:** inspect the original state contents/reactions, map them to canonical interaction states and preserve the original-to-code naming table. **Pass:** each authored container state is reproduced or explicitly documented as an excluded duplicate; no invented meaning for numbered states.
- **B40.3 Accordion primitive and cursor need traceability, not automatic new public components.** `468:82714` has Open (`468:82715`, 340×164) and Close (`468:82721`, 340×52) accordion elements, with a leading delivery icon and trailing arrow. The top-level Accordion component can accept icon slots, but its default source branch is different. Cursor `827:82250` has Visible/Invisible zero-width×27 states; native carets are allowed implementation mechanics, but must be compared to the applicable field/text slot. **Action:** link these private primitives to actual consuming components and source variants. **Pass:** consumed states have exact geometry/assets or a documented native equivalent; unused primitives receive a coverage disposition.

# Page 41 Separator

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=211-34959). Source page ID `211:34959`.

Figma page `211:34959`, exact source name is the repeated wavy-line separator. **Not applicable to component acceptance.** The decoded page contains only its canvas, no child nodes. No code component is required. Keep it as a navigation separator and exclude it from the accepted-component denominator.

# Page 42 🦖 Templates

[Open original Figma page](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=211-34960). Source page ID `211:34960`.

Figma page `211:34960`, exact source name `🦖 Templates`. **No authored template deliverable present.** The decoded page contains only its canvas, no child nodes. This is not evidence of implemented templates, nor an implementation mismatch. Record it as an empty source page. If templates become a requirement, they need new source material and separate acceptance.


# Release wide acceptance gaps

Audit baseline: actual Figma DS release 0.1.0, 4 November 2026. The live Figma page order was re-read and matches all 42 pages in the local inventory. Detailed checks use the supplied file's decoded source, the current component source and the released Storybook/source snapshot. Focused browser checks supplement the source comparison; this is not a pixel comparison of every state.

## R01 Current acceptance results are incomplete

The public Acceptance evidence story reads `apps/figma-storybook/acceptance/summary.json` with `sourcePolicyId: written-only-2026-11-03`, 279 rules and a runtime fingerprint containing the earlier Inter assets. The story labels the checkpoint historical, which is correct. It cannot establish acceptance of the current Switzer and same-file-artwork release. The current literal check has 283 rules, but literal provenance is not a full comparison of rendered appearance or source applicability.

Needed: a current, version-bound result for every supported source variant. Record expected and actual geometry, paint/gradient, typography, asset identity, native asset size, state and behaviour. Keep old results as history. A build or a story rendering is not a pass for every design property.

## R02 Inventory counts are not an acceptance denominator

The built Storybook index has 157 stories and two documentation entries. Several Figma branches share pages, and multiple stories are fixtures of one branch. `packages/figma-ds/evidence/acceptance-gaps.json` and `component-completeness.json` still describe the earlier written-only boundary and unresolved global palettes/artwork. They need reconciliation with actual current source-backed work. An overall acceptance percentage cannot be calculated from those counts.

Needed: one explicit register of source page → component family → exact source variant → public API configuration → story → measured result. Preserve source spelling, property values and branch distinctions, with any code naming mappings stated explicitly. Mark source contradictions separately from missing implementation and missing tests.

## R03 Reproduce the acceptance review on another computer

The source ZIP was checked through clean installation/build and both package archives through an independent React consumer. However, the broad visual review script `apps/figma-storybook/acceptance/review-source-layout.mjs:5` still reads `/private/tmp/croma-figma-source-assets/effective-figure-properties.json`; its explanatory limits still mention temporary Inter. The ordinary `tests/figma/consumer.spec.ts` exercises three integration scenarios, not the entire Figma variant matrix.

Needed: portable, curated expected values for the delivered components and a repeatable visual/value/interaction review against the frozen release. Do not require the private full decoded document in the distributed library. Include narrow/wide layouts, long text, native form reset, keyboard focus, disabled and selected combinations, Escape/outside dismissal and reduced motion where relevant. Test source-backed examples and explicitly label robustness checks that extend beyond Figma.

## R04 Documentation and public access wording

The current Space Design System shortcut still says “private Storybook” although its release home correctly records the subsequent public access change. Package/evidence documentation also contains superseded font/source-policy statements, identified in the page-specific review. Historical checkpoints should remain dated history; current usage guidance must state the actual release and remaining gaps.

Needed: reconcile current guidance and add the release/version to acceptance results. This is a documentation gap, not a change to component geometry. Public hosting and the eight versioned Space downloads already exist; this audit does not claim they are missing or change their access.

## Final acceptance rule

A substantive page can close only when all of its intended branches and visible states are mapped; all source-supported values and original artwork match; the component behaves correctly in a real prototype; and the exact reviewed release has a recorded passing check. If the file genuinely lacks or contradicts a required value, retain a scoped source decision rather than inventing a value or silently treating it as passed. Cover, separators and empty navigation headings do not need product components and should not inflate the missing-component count.


# Closing each page

For each substantive page, keep one checklist of all intended source branches and their valid state tuples. Map each to the exact public API, story and source node/style. Record expected and observed spacing, alignment, dimensions, colour/gradient/alpha, typography, borders/effects, artwork and naming. Check native interaction and resizing separately from static visuals. A page closes only after every required case passes and all conflicting/missing source values have an explicit scoped resolution. A prototype build passing does not satisfy that rule.

Guidance-only pages close through accurate readable guidance and applicable worked examples; empty navigation pages remain not applicable. Correct foundation values and asset bytes remain passed within their measured scope. Repeat only checks affected by a fix, then run the complete release acceptance pass before claiming 100%.

# Supporting evidence

File paths in this report are relative to the downloaded release source root, not a required location on this Mac. The audit working copy also retains selected source evidence, browser observations and release-byte comparisons in `docs/audit-foundations-comparison-evidence.json`, `docs/audit-components-a-source-2026-11-04.json`, `docs/audit-components-a-browser-2026-11-04.json`, `docs/audit-components-a-release-match-2026-11-04.json` and `docs/audit-components-b-evidence-2026-11-04.json`. The private full decoded document was not added to the report or distributed release. This audit is a dated report, not a new library release.

