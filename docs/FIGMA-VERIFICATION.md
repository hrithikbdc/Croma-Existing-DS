# Release0.2.0 verification 4 November 2026

The actual Figma DS implementation has been extended with the page-audit fixes. See FIGMA-FIXES-A.md, FIGMA-FIXES-B.md, FIGMA-FIXES-FOUNDATIONS.md and FIGMA-GAPS.md for exact scope. The original0.1.0 release and Figma file remain unchanged.

Observed current checks:21focused acceptance browser tests passed;3consumer regressions passed; all195exported stories rendered without JavaScript exceptions or non-lazy broken images; all47written typography styles use loaded Switzer with exact numeric metrics;14Grid/Device viewport checks passed. All72Illustrations render with manifest-matching bytes;56are official exports,16have archive recovery provenance. Source hash/native-dimension checks remain passed for359icons and7logos. Source literal boundaries cover283rules and are not semantic or whole-component acceptance.

Five initial Form Field audit findings A30.1–A30.5 are WITHDRAWN. Effective design context and source screenshots establish that existing labels match; raw cached child values omitted overrides. Matching label styles were retained. Toggle form reset, disclosure sizing, local Card paint and Form Dropdown source-asset transforms were corrected and checked.

Source/render limits remain: whole Header editable anatomy; conflicting glyph identifiers/overrides; complete standard/older Drawer; some source numeric motion/Tab values; Laptop/Display casing context, Phone official comparison; and official render comparison of11archive-recovered Illustrations. Full whole-system100% acceptance is not claimed. New source checks may close individual limits and will be recorded before release freeze.

The sections below are prior dated evidence and retain their historical source policy/version; do not treat old Inter, checkbox-radius or written-only blocked counts as current failures.

# Written-specification implementation checks

Source policy changed on 4 November 2026. Written specifications take priority, and saved styles, main-component properties and original artwork from the same Croma Figma file may fill unwritten gaps. Inter remains the approved temporary font exception. The results below describe the earlier written-only snapshot until the expanded-source build receives fresh checks.

## Last verified written-only checkpoint 3 November 2026

- The library exposes 28 component/helper exports. The built Storybook at `http://127.0.0.1:6021/` returns 115 stories and two documentation entries. Story counts do not measure accepted variants.
- The full `figma:verify` command passes: foundation and literal-source checks, TypeScript, prototype and Storybook production builds, private-source package exclusions, and three production consumer browser tests.
- The separate production acceptance report covers 279 rules and 535 unique declared properties: 223 numeric properties verified, one failing checkbox-radius property, and 311 properties blocked by unresolved token definitions. No numeric property is unmeasured. The report's registry hash matches the current implementation: `647cc76433625b92f9f44842445ea44d0f5fd8d1708a6d3c3c7e9990b866726f`. A separate fingerprint covers the runtime and production fixture inputs; it was unchanged across the review.
- The expanded review passes 26 exercised interactions and six width/content layout checks at 320, 768 and 1440 px. It also records 214 foundation numeric checks, temporary Inter font exceptions, no console errors and no unverified citations. These checks cover their fixtures and scopes, not every browser/device or screen-reader combination.
- The acceptance harness deliberately exits with failure because native checkbox rendering has 0 px computed radius instead of the written 4 px. Native checked and mixed feedback is visible. The previous custom appearance hid those marks; that implementation was rejected. The remaining radius discrepancy is preserved rather than normalized away.
- Written specifications in hidden tables are user-approved; hidden template rows remain excluded. The explicit 32 px segmented-container height is implemented. Missing colour, typography-alias, elevation and artwork definitions remain unresolved. No component has passed full visual acceptance.
- The unverified triangular tooltip beak was removed. The component keeps the written 32×8 px slot and accepts supplied artwork; an empty slot does not claim original-artwork fidelity.

The current detailed report is `apps/figma-storybook/acceptance/results.json`; the Storybook evidence view exposes source references, unique-property statuses and the remaining gaps. Source applicability and duplicate-row reconciliation are recorded under `packages/figma-foundations/source/`.

## Observed checks at the earlier 17-export milestone

- Foundation numerical checks: 47 typography rules, 26 spacing/border values and two layout specifications match the captured written source. This does not establish source completeness or rendered acceptance.
- TypeScript, component package compilation, prototype production build and Storybook production build passed.
- The installable package was extracted outside the workspace and all 17 ESM exports imported successfully using the workspace's React dependency. This is a package-content/import check, not an independent dependency installation.
- Three consumer browser tests passed: written Large Button 40 px minimum height and 24 px horizontal padding; label/focus association and controlled input/submission; checkbox/switch/filter/radio/dropdown behaviour; arrow-key tab selection; popup Escape dismissal and focus return; local search submission; long input and 320 px page overflow.
- Specialist browser review exercised controlled mixed checkboxes, controlled accordion refusal, invalid/disabled tab selection, Home/arrow keys, modal Escape/Close/unmount focus return and close callback counts, and forwarded input refs/invalid semantics.
- Narrow/wide screenshots were inspected for readability and overflow. They are provisional/native renderings with unresolved design values, not accepted visual replicas.

## Environment history

The default Playwright browser revision was missing. The matching existing binary at `/private/tmp/croma-web-playwright` required process access to launch. Restricted launches failed before page interaction; the authorised process run succeeded. Development watcher/file-cache problems were resolved by restarting the local preview; final consumer checks run against production output.

## Source recovery and coverage

The Figma connector returned the account's explicit Professional-plan Full-seat tool-call limit during detailed table extraction. All 149 Table frames were attempted: 84 successful written-cell reads, 63 quota-blocked and 2 metadata-only requiring deeper reads. Successful table reads and failed/quota-blocked IDs are retained in source evidence. Inaccessible tables are uninspected, not proof that a specification is absent. This earlier blocker was superseded by the user-supplied local Croma DS.fig archive. Embedded-schema decoding recovered all 149 tables and 12,385 literal cell occurrences (9,282 visible, 3,103 hidden). Independent checks found all expected IDs and no semantic differences in the compared captured table text. Hidden template rows are excluded from runtime authority; saved paint/layout values remain excluded. Local decoding does not establish current cloud revision identity or visual acceptance.

No component has passed the user's complete 100% acceptance requirement. Publication, production parity, screen-reader conformance and full browser/device coverage are not established.

## Resumed implementation checks

After the user challenged the partial handoff, implementation and independent acceptance checks resumed. A user-requested Figma retry on 3 November succeeded for both metadata and design context of `245:36936`. Live metadata explicitly marks the table hidden; its written Height row says 32 px. Access success does not resolve whether hidden specifications are authoritative or settle the nearby 28 px annotation.

The subsequent live read of layout `245:36912` places the 28 px annotation beside an inner segment. This suggests a different measured part, but the context and explicit screenshot calls both returned 1×1 PNGs. Measurement endpoints remain unverified; the earlier claim of a definite same-property conflict is therefore softened to an applicability question. Live context evidence is retained in `packages/figma-foundations/source/live-segmented-layout.json`.

The user subsequently resolved the table-authority question: “Include written tables even when hidden; exclude hidden template rows.” Root-hidden tables now count as written source authority. This supersedes the earlier provisional authority status; it does not approve hidden template rows, missing semantic values or saved-node/style fallbacks. Dependent container-height decisions are being reassessed against that policy.

The current TypeScript check passes. Numeric-token checks pass for 188 registered rules at this checkpoint, preventing mistakes such as treating 8 px as present in 28 px. This check does not establish correct property, variant or state applicability. Package-content checks pass for both packages and exclude the private archive and decoded source files. Expanded browser and semantic checks are in progress; the earlier browser results above do not cover all newly added components.

A subsequent resumed checkpoint passed the foundation checks, the component transcription/output check for 238 rules, the prototype production build, all three production consumer browser tests, and imports of all 26 current component exports. The expanded Storybook production build failed because new story titles used template expressions; the fix and rerun remain pending at this checkpoint. These results cover the stated checks only and do not accept all 26 components.

The story titles were then changed to static strings. The subsequent Storybook production build passed and the live preview's index returned 105 stories and two documentation entries at `http://127.0.0.1:6021/`. A further prototype build passed with both the normal page and the isolated acceptance page included. The registry at this stable checkpoint contains 242 rules and passes exact numeric-token checks. Expanded browser results are still pending; story count is not a count of accepted variants.

The first expanded browser report at the 242-rule checkpoint is retained in `apps/figma-storybook/acceptance/results.json`. It found no unverified cell citations or console errors, and all nine modal Escape/focus-return checks passed. It also found a checkbox corner-radius discrepancy and narrow long-content overflow in button/dropdown fixtures. Other raw comparison failures require explicit handling of documented variant overrides and CSS serialization differences; they are not silently treated as passes. These findings reopened implementation work and will be checked again against a fresh build. Repeated observations across fixtures, states and widths are not unique accepted requirements.

## Reproduce

Run `node packages/figma-foundations/verify.mjs`, `npm run figma:typecheck`, `npm run figma:build`, `npm run figma:build-storybook` and `npm run figma:test`. Browser installation/access is environment-specific; this machine uses `PLAYWRIGHT_BROWSERS_PATH=/private/tmp/croma-web-playwright` for the final command.

## Prototype-focused checkpoint — 4 November 2026

The library now exports the separate Local.Button branch with its23 authored variants, preserving Desktop/Mobile and Primary/Secondary/Link names. Its CSS, four original icons and public namespace build successfully. The linked guide remains separate. A production prototype build and TypeScript check passed. The first focused production browser run passed all three consumer tests (entry/submit, selection/navigation/dialog/search, and narrow-layout/assets). The consumer was subsequently updated to use Local.Button, so a fresh run is required for that version.

Form Field now has a seven-state Storybook gallery. Direct browser measurement found and corrected a floating-caption offset: the inherited grid area made x34px instead of source x17px. The rebuilt prototype measures x17px, y−8px,12px caption with16px line height; the control measures54px high with8px corners. Storybook is being rebuilt to include this correction. These are scoped observations, not whole-library acceptance.

The refreshed consumer run also passed all three tests with Local.Button in the real form. The rebuilt Storybook gallery was then checked at all seven states: each control298×54px; all label x offsets17px; default/hover/error2 labels y17px, floating captions y−8px; helper text y62px (8px below control). The updated gallery screenshot was visually inspected at1100×780. Original border artwork now aligns with the corrected caption notch. This check does not claim pixel identity with Switzer or cover every optional slot combination.

The subsequent prototype pass corrected native radio appearance using original artwork, disabled Checkbox/Radio labels, Filter chrome/paint, Badge and Dots paints, Tabs typography/gradient indicator and Segmented source footprint. Peer browser checks measured Segmented310×32px with150×28px options, shrinking without overflow at320px. Button23local/36guide/6icon cases, click/keyboard/disabled behavior and mobile/long-content checks passed the focused review. A fresh Figma read confirmed the Small dark Filled label is intentionally#2B0052; it was retained. This is a scoped visible/interaction checkpoint, not acceptance of all remaining components.

Dropdown was rebuilt from all six live source variants in set1715:79529, with30 unchanged original SVG slots. Root browser checks passed mouse and keyboard selection, Escape, focus retention, outside dismissal and upward placement near a narrow viewport bottom. A doubled arrow rotation was found in visual review and removed because the original open-state export is already oriented upward. Menu/chip, Accordion/Search and the52authored Tooltip cases are the next active review. Tooltip source contexts and their100 original artwork slots have been recovered; runtime/browser review is pending.

Tooltip focused review completed: all52 authored theme/position/beak/stroke tuples rendered with56px body height,8px padding,4px gap,14/20title,12/16/.5description and32×8logical beak slots. All source SVGs loaded without browser errors. DarkTopLeft and lightRightBottom outlined screenshots were inspected. Long-copy overflow was corrected and rechecked at320×600:592pxbody,576px scrollable copy, no viewport overflow; Escape dismissal passed. This supersedes the pending Tooltip status above. Inter remains the approved temporary family.

## Usable prototype checkpoint 4 November 2026

The source-backed public build and full-project TypeScript checks passed, followed by both static app builds. Root final browser checks passed all three consumer tests, covering form entry/submission/focus, selections/tabs/popup/search and narrow-screen layout/assets. The283-rule literal check passes; it verifies literal boundaries, not semantic scope by itself.

Root Chat review measured342×755px,64pxheader, close32×32 at278/16, and composer36px at56.6875/703. All six original assets load; narrow320px fits. The source screenshot and rendered Chat were visually reviewed; intrinsic bubble growth and the approved Inter family difference remain documented. Root Steppers review passed all four orientation/theme cases at328×68 and240×328,24pxcounts, zero title/descriptiongap,8pxverticalgroupgap and24pxnonlastcopybottompadding. Fresh annotated source245:48709 confirms the corrected8/24scope; the earlier globalcopygap8/outergap24 mapping was wrong. Root Divider review passed six cases with328pxlines in360pxhosts,1/4/16pxheights,16pxside margins and8pxcaptiongap.

Peer focused review passed original Accordion disclosure shapes, Search40px/clear/Enter, InputChip removal and Choice keyboard selection, Menu56px/defaultchrome removal, nine AccountDrawer rows plusEscape/scrim/focustrap/focusreturn, Popup360×479/Desktop720×429, Fullscreen320×650, both Sheets390×480 and320×480, source media loading in Card, and Chat send/close/reopen. Footer initially squeezed its CTA on320px; after correction both390px and320px remain72pxhigh with138×48pxCTA and price areas196/126px. The final source caret colours are#CB92FF/#8800EC.

Remaining acceptance limits are explicit: Inter replaces Switzer; Search current font/glyph overrides disagree with usable original main artwork; Accordion written glyph IDs differ from actual exported glyph IDs; the Header example is raster guidance rather than an editable complete Header; older NavigationDrawer profile/NeuPass layout is separately scoped and not included in the current Account branch review. These do not remove the tested source-backed components from prototype use, and they prevent an unqualified100%whole-system fidelity claim. No publication or Figma content edit occurred.

## Switzer supplied and verified4November2026

The user-supplied Switzer Variable TTF is now bundled unchanged and loaded by Storybook and both prototype entries. Browser font responses on6021 and5184 returned200 and exactly matched SHA256373c2d2ad8f1f811ca58ae725e9591db2e72cf726dc6e8066cd7f64b4c283cdf. FontFaceSet reportsSwitzer loaded with weight range100–900; computed buttons retain700weight,18pxsize and28pxline height. The authored DesktopCalltoaction button measures156.84375px versus rounded157px Figma reference. TypeScript, both builds, package-boundary checks and all three consumer tests passed. Written typography values were not changed. Earlier Inter-based measurements are historical; text wrapping/widths may improve with Switzer and must not be described as current Inter output. The supplied cmap has no Search/Accordion private glyphsE81F,E84F,E813,E816,E819,E81C, so the separately recorded icon-font/source conflicts are not resolved by this font file.


## Shared hygiene release 0.5.0 — 5 November 2026

User-approved extension defaults now own card layering, field/help spacing, input focus, selection stability, text contrast and action alignment. See FIGMA-DESIGN-HYGIENE.md and acceptance/current-checkpoint.json for scope, deliberate presentation changes and migration. All34 Storybook regressions and3 consumer checks passed;283 source literal rules, TypeScript and both app builds passed. Browser tests used installed Chromium revision1243 through the optional CROMA_TEST_BROWSER setting because the preferred revision1248 was absent. Normal and320px dark composition were visually reviewed. This does not establish full-system visual acceptance, automatic consumer migration or a new hosted deployment. Original component/source files and frozen releases remain unchanged.
