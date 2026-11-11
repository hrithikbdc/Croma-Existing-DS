# Source backed component fixes from pages 20 to 30

4 November 2026. User authorised execution after the page audit. Frozen release0.1.0 and the original audit report remain unchanged. These changes are working source pending the coordinated build, browser checks and a new shared release.

## Correction to the field audit

A30.1–A30.5 are withdrawn as code defects. The audit compared browser output with cached raw properties in the decoded archive. Fresh high-fidelity Figma responses and screenshots for820:82191,827:82202,827:82239,840:82224 and840:82301 expose effective values that differ from those caches: Default/Hover14px Semibold20px grey; Active/Filled12px Bold16px grey; Error2's in-field label is red. These match the original implementation. Proposed changes were immediately removed; no typography/colour regression is being shipped as a “fix”. This is a source-resolution error in the audit, not proof that the raw cached properties represent additional required variants. Keep the original audit as history and use this correction for acceptance decisions.

The same distinction matters for local Accordion dark text: cached fills can appear black, while resolved high-fidelity context and render show white. Runtime bindings below follow the resolved context.

## Implemented working changes

- **Toggle reset:** Native form reset now synchronises uncontrolled React artwork state after the input's default checked value is restored. Controlled inputs retain caller state. Both themes and default values have an explicit real-form regression story.
- **Local Accordion463:83388:** Added `LocalAccordion` with exact Background Light/Dark, Title On/Off and State Close/Open tuple IDs, editable section title/heading/content, native disclosure and controlled/uncontrolled state. It remains separate from the guide Accordion245:38719. Includes exact source arrows, 390px width,12×15 padding,24px gaps,22px header, source content fills/type and divider opacities. All eight source tuples have stories.
- **Colour Accordion468:82805:** Added `ColourAccordion` with four original24px source icons, original disclosure arrow and the two exact radial gradient definitions returned in design context. Content remains editable. Default source composition opens Express delivery; every row can be toggled. Original gradient geometry is preserved as two local background SVG fills, not a raster screenshot of the component.
- **Local Card masters:** Card now has Branch Guide/Local and Theme dark/light. Existing Guide behaviour is retained; Local maps all six actual master IDs, original palette/layers,14px corners and local elevation/inside outline. A six-master story demonstrates both themes. Optional whole-card href/onActivate uses a native sibling action, keeping nested controls outside the primary action's ancestry.
- **Skeleton Card171:18917:** Located its complete live source example171:18915 and implemented the editable360×360 widget,202.5px source media, actual source media tile,16px content padding,8/6px detail gaps, original grey layers/opacities and152×40 action placeholder. No unsupported shimmer animation or light variant was invented.
- **Form Dropdown840:82414:** Live context confirms a distinct six-tuple branch with visible floating captions in four states, unlike Default Dropdown1715:79529 whose matching captions are hidden. Added `FormDropdown`, exact source IDs,17 original vectors, native selection semantics and a measured text notch. Existing Dropdown remains the default branch.
- **Sheet drag:** The source Drag sheet now follows pointer movement, restores position for short/cancelled drags and dismisses for a sufficient downward drag. The existing quarter-height dismissal threshold is an implementation behaviour, not a Figma measurement. Source appearance is unchanged and no animation timing was invented.

## Evidence retained

Read-only live context text is retained in `packages/figma-ds/evidence/fixes-a-live-design-context.json`. Thirteen actual reference renders are in `docs/verification/fixes-a/source/`; none is used as a runtime component image. All required static vectors returned by those contexts were downloaded into the existing accordion/cards/dropdown asset folders. The component build already copies those folders.

## Remaining source limits

Header anatomy248:59562 still contains941×52 raster248:59641 with no editable children. The full decoded symbol-name scan found only Email Header, table header, documentation .header and drawer section-header masters; no whole ecommerce Header master was identified. Missing exact values remain per-element fonts/paints/spacing, sizes, source states and responsive breakpoints. Hidden Left/Right footer-template branches do not provide those Header values. Retain the reference and unaccepted helper; do not infer a replacement from pixels.

Written Accordion glyph identifiers still disagree with the saved original glyph identifiers. Native exported arrow artwork provides appearance, but does not resolve naming. Preserve that explicit source conflict.

Nonmodal/expanding Bottom Sheet usage has prose guidance without the same explicit authored visual tuple matrix as Drag/Close; no new visual variants were fabricated. Chat, Buttons and Divider retain their source-backed implementations; broader value/state acceptance uses their existing source gates and remains distinct from these focused repairs.

## Checks

Component TypeScript no-emit check passed after these edits. Full application checking awaits the coordinated package build because workspace declarations still describe the preceding build. Fresh Storybook regressions are in `tests/figma-storybook/component-fixes-a.spec.ts`, with `playwright.figma-storybook.config.ts`; actual post-build outcomes will be appended below. Passing those checks will establish only their named source/behaviour cases, not whole-system100% acceptance.

## First coordinated browser pass

The combined19-case suite ran after the first0.2.0build:16passed and3failed. Two A failures were real runtime defects: a reset microtask could read before the browser's default reset completed, and flex content styling exposed closed local Accordion content. Reset readers now run after the default action and respect a cancelled reset; closed local/Colour content has an explicit hidden rule. The third failure concerned the information-tooltip lifetime in the separate B workstream. The initial report is retained at `docs/verification/fixes-acceptance-browser-initial.json`. Component type checking passed after the corrections; a coordinated rebuild and browser rerun is pending.

The second combined pass ran20cases:19passed. Toggle reset now passes in both themes/default directions. The remaining local Accordion height failure was diagnosed precisely: closed details content was hidden and its details height was22px, but the outer flex gallery stretched the whole component to the tallest sibling. An intrinsic `height:max-content` now preserves the source's hug-content sizing within flex parents. The explicit closed-content rule is retained defensively, but exposed content was not the observed remaining cause. Second-pass JSON is retained at `fixes-acceptance-browser-second.json`.

## Final coordinated browser and visual checks

After the intrinsic-size correction, all20combined acceptance tests passed in5.9seconds, including all seven A tests. The current JSON result is `docs/verification/fixes-acceptance-browser.json`. Eleven A screenshots were captured with no page errors or broken images; measurements include local Accordion390×309, Colour390×476, Skeleton360×360, and six Card masters at128pxheight.

Direct source-image review found an additional real Form Dropdown asset transform defect: design-context Right assets retain the base left path, and the generated source layout mirrors the frame. Added Form-branch-only scaleX(−1), leaving direct-export Default Dropdown assets untouched. Nonfloating top-line inset is17px; floating is13px, matching its authored width. The six-tuple regression now checks these source transforms/insets. A final rebuilt visual check remains pending for this specific change.

The source and browser text geometry/weights match; on this Mac, white text initially rasterises heavier under automatic browser font smoothing than the Figma reference. A transient browser-only antialiased smoothing check matched the source appearance without changing font sizes or weights. This is retained as rendering evidence rather than silently changing source font weights.

The appearance check supports a scoped `-webkit-font-smoothing:antialiased` hint on Local Accordion, Colour Accordion, Local Card and Form Dropdown. This hint is now applied only to those newly implemented branches. It preserves all source font metrics and weights. Its effect is platform-specific and is not a guarantee of identical pixels on every operating system.

Final rebuilt check: all20combined acceptance tests pass (5.8seconds), including the Form Dropdown mirror/inset regression and all eight local Accordion source heights. Recaptured and directly inspected all eleven A images against the retained source renders/context: Light/Dark local Accordion with title, Colour composition, Skeleton, six Card masters and the Form Dropdown six-case gallery. The corrected right border closes in the correct direction; floating captions, source arrows, source gradient, skeleton slots and Card surfaces are visibly present and aligned. The scoped smoothing brings the white-on-dark glyph appearance into line with the reference on this Mac. No further concrete visual mismatch was found in these inspected cases. The capture report contains no page errors or broken images. Source and runtime images remain under `docs/verification/fixes-a/`; current captures are in `rendered/`. This direct review is scoped to those cases, not a whole-system pixel-equality claim. Runtime/story edits are complete and frozen for release packaging.

A final direct fetch of the remaining Dark Elevated/Outlined master contexts established one additional concrete border difference that the initial light-master-based implementation had missed: Dark Outlined171:38469 uses #9B9B9B while Light Outlined171:38474 uses #5F5F5F. Added the Dark-only inside-stroke override and assertions for both colours in the existing Card behaviour test. Both final source renders and context text are saved. The earlier “no additional mismatch” observation was premature for this last master and is superseded by this finding. Only that detected CSS binding requires the final rebuild/recheck; font metrics remain unchanged.

Final Dark Outlined paint check passed after rebuild: source171:38469 computes `rgb(155,155,155) 0px 0px 0px 1px inset`, height128px. The existing Card test verifies Dark#9B9B9B and Light#5F5F5F alongside independent native primary/secondary activation; one focused test passed. Its JSON is `docs/verification/fixes-a/final-card-check.json`, and the final Dark Outlined screenshot was recaptured and directly reviewed against the retained source. No further defect was found in this final check. This supplements the unchanged20-pass combined result; no full suite was repeated for the one paint override. All A work is now complete within the inspected source scope; Header and glyph-identifier source limits remain as stated.

## Integrated release verification

Root integration completed for0.2.0. All new public exports, stylesheet pieces and runtime asset folders are included. Type checking, builds, foundation/literal checks and package exclusions passed. Combined20-case browser suite passed without skips/flakes; the final Card paint correction passed its focused follow-up. Three existing consumer regressions and47rendered typography-style checks passed. The192-story rendering smoke pass found no runtime exception or missing non-lazy image. This supersedes earlier “awaiting root integration/browser checks” preparation notes above. Full source/variant pixel acceptance is not claimed; precise remaining limits stay in FIGMA-GAPS.md and current-checkpoint.json.
