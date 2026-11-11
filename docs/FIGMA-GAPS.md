# Remaining acceptance work for Croma Figma DS 0.2.0

Updated4November2026. Written specifications take priority; effective same-file component/style bindings and original artwork fill unwritten gaps. Whole hidden written tables count and hidden template rows do not. Raw decoded child caches can omit instance/style overrides and cannot independently establish effective visible values. Switzer is supplied and bundled; Inter is no longer the font exception.

## Corrected audit finding

A30.1–A30.5 are withdrawn. Fresh Figma design context and screenshots show that the existing Form Field labels already match: Default/Hover14pxSemibold grey and floating Active/Filled12pxBold grey, with the actual Error2 red label. No label-style change was required. The original browser measurements were accurate; the audit's expected raw values were wrong. The separate Form Dropdown is a real additional source family and is now implemented.

## Source backed work implemented

- Toggle and Checkbox reset state/source metadata now synchronise after the native reset default; Form Field and Dropdown reset synchronisation follows the same guarded timing.
- Added eight local Accordion tuples, Colour Accordion, light/dark local Card masters, source Skeleton Card and a separate six-state Form Dropdown. Guide families remain distinct. Closed disclosure content and intrinsic height are corrected; native Card actions avoid nested controls.
- Added five local semantic badges, the579×48/radius14localSearch, four Option states, five-row List and five source Sheet Container states including expanded State5.
- Added scrolling/icon/alignment Tabs, original information/custom Tooltip triggers, held-touch behaviour and the written1500ms post-release lifetime. Drawer swipe, explicit Fixed/Flow/StickyFooter modes and short/long page shells are available.
- Added safe chip-removal focus handoff, navigable Steppers, a temporary Menu surface and source Button popup action compositions including RTL.
- Added72Illustration assets, four editable Device content viewports, original Phone/Desktop casings, written fluid Grid rules, and Experience/Motion/Content guidance with examples. Font usage documentation now consistently loads Switzer.

## Remaining precise source and acceptance limits

| Area | Remaining limit | Required closure |
| --- | --- | --- |
| Header | The whole seven-part anatomy is a941×52raster. Same-file dependencies inspected so far do not establish all editable child geometry, type, states and responsive values. | Enrich the source or approve a specific scoped interpretation; a plausible header helper is not an exact match. |
| Search and Accordion glyphs | Instance glyph/font overrides and original main artwork or written identifiers disagree. Existing original artwork is a documented usable fallback. | Resolve the exact source representation and identifier mapping; do not certify a guessed private-use glyph. |
| Sixteen Illustrations | Original image bytes and authored masks/fills/transforms were recovered from the supplied archive after official export quota was reached. All render. Five official source comparisons now show matching geometry/paint with raster differences; eleven remain unavailable after tool failures. | Compare the remaining11compositions with official source renders when available. Preserve provenance and do not redraw. |
| Device casings | Four editable screen viewports plus original Phone and Desktop casing compositions are implemented. Laptop/Display casings still lack complete effective source context; Phone has no fresh official render comparison. | Complete the remaining casing references and compare every physical frame. |
| Standard drawer and older profile branch | Current Account modal and swipe interactions are implemented. Standard/nonmodal geometry and the complete older profile/NeuPass composition lack final effective-source sign-off. | Map each branch and original subasset independently. Do not apply old profile dimensions to Account. |
| Tabs | Fixed/scrolling/icons/alignment work. Exact primary/secondary distinction and some numerical icon gap/leading inset are not established by the inspected visible guidance. | Map actual numeric source figures, or retain explicit caller-supplied values as unaccepted until resolved. |
| Motion | Component-specific Tooltip1.5second lifetime is implemented from applicable written prose. Numeric fade duration/easing is absent; general Motion principles are qualitative. | Obtain a scoped source value or an explicitly approved implementation choice before exact animation acceptance. |
| Grid | Written32px desktop margins and1320px content cap are preserved. The23px annotation/1366px prose conflict is documented. | Keep written-first precedence and the tested container interpretation; do not silently substitute23px. |
| Exhaustive visual acceptance | Builds, source literals, asset integrity and focused interactions/geometry do not compare every source property and every state on every page. | Complete the explicit branch/property register and per-variant visual comparisons for the exact released version. |

None of these limits justifies stopping independent supported component work. They also cannot be silently marked passed. The first release0.1.0 and the original Figma file remain unchanged; current fix outcomes and actual checks are in FIGMA-VERIFICATION.md and FIGMA-FIXES-A/B/FOUNDATIONS.md.
