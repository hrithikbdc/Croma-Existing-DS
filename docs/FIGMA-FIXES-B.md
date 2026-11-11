# Component fixes from pages 31 to 42

4 November 2026. The user requested fixes after the page-by-page acceptance audit. These changes affect the working library. The frozen 0.1.0 release and original Figma file are unchanged. Written specifications retain priority. New branch values were checked against live design context and screenshots, including effective style overrides, rather than cached raw fills. The supplied Switzer font remains bundled.

## Implemented

- `Tabs.tsx` and `tabs.css`: separate Fixed and Scrollable modes, Start/Center/Stretch alignment, original-art icon slots, selected-tab scrolling and existing keyboard/RTL navigation. The existing 48 px height, 2 px indicator and 8 px padding remain. Numeric scroll inset, icon gap and fixed maximum tab width are explicit consumer parameters where no applicable inspected numeric source is established. They are not fabricated design tokens. Disabled visuals and primary/secondary taxonomy still need exact source mappings.
- `SearchBar.tsx` and `search-bar.css`: explicit Library and Local branches. The new Local branch matches verified node `294:72589`: 579×48, radius 14, inner padding 12×16, gap 8, original 24 px green search artwork, 16/22 Regular text and 50% placeholder opacity. The written/library 40 px branch is unchanged. The local main has no clear control, so the new branch omits it by default; a consumer may opt into functional clear behaviour. The glyph conflict in the earlier branch remains documented.
- `LocalPrimitives.tsx` and `local-primitives.css`: `LocalBadge` implements the five exact `Property 1` values Default/New/Deal/Sustainable/Light from `304:72592`, separately from written Text Badges and the Chips-page badge. Live effective colours and the three original SVGs are used. The Deal master SVG retains its 32 px root and uses the source instance's 0.5 scale inside its 16 px slot. The observed 32 px container centres text at y6 and icons at y8; inconsistent saved 8 px vertical padding is not copied as overflow. `SourceOption` and `SourceList` implement four original states, including exact spelling `selected hover`, a 3 px inside selected stroke, 14/20 Semibold text, 44 px rows and 231 px list width. Native buttons, roving focus, arrows/Home/End and typeahead make them usable.
- `Tooltip.tsx` and `tooltip.css`: an information-icon trigger and custom focusable child trigger, with merged `aria-describedby`; touch toggles, outside-pointer dismissal, Escape and window-blur cleanup. Hover/focus and all 52 source tuples remain. Component-specific written timing `160:13849` now supplies the default 1.5-second touch lifetime after release. Holding a touch and desktop hover/focus remain continuously visible; outside actions dismiss it earlier. A held pointer is tracked through document-level release/cancel events, even when released outside the trigger. Touching or scrolling bubble content does not toggle the trigger off.
- `NavigationDrawer.tsx` and `navigation-drawer.css`: rightward touch/pen swipe dismissal for the existing right-anchored modal drawer. Vertical scrolling and cancelled gestures keep it open. Keyboard, close and scrim mechanisms remain. The threshold is a functional gesture policy, not a claimed Figma measurement.
- `StickyFooter.tsx` and `sticky-footer.css`: explicit Sticky/Fixed/Flow modes preserve compatibility while separating the two visible source behaviours. `StickyFooterLayout` fills short pages and places the Flow footer after long content. It measures and reserves the actual height if a supplied footer uses Fixed mode, preventing covered content. Original price and CTA geometry remain unchanged.
- `SourceSheetContainer.tsx`: retains original Container state names. Close/Open map to closed/open Drag Sheet; State3/State4 map to closed/open Close Sheet. It reuses existing source-backed sheets and native modal behaviour. It does not infer State5 acceptance.
- `sourcePrimitiveMappings` records Accordion Open/Close, native Cursor Visible/Invisible and five Container states with exact source IDs. Reactions and positions show State5 is an expanded fullscreen Drag Sheet; visual acceptance remains pending its high-fidelity render and exact external close asset.

## New exports

`LocalBadge`, `LocalBadgeVariant`, `SourceOption`, `SourceOptionProps`, `SourceOptionState`, `SourceList`, `SourceListItem`, `sourcePrimitiveMappings`, `SourceSheetContainer`, `SourceSheetContainerState` and `StickyFooterLayout`.

Existing Tabs, SearchBar, Tooltip, NavigationDrawer and StickyFooter types gain optional capabilities. The package build must include `local-primitives.css` after the source component styles and copy `src/assets/local-primitives`.

## Source evidence

Live design contexts and screenshots inspected: `294:72589`, `304:72592`, `845:82252` and `845:82271`. Generated context reading copies are in `packages/figma-ds/evidence/fixes-b-context-*.txt`. `local-primitives-source.json` records exact downloaded asset byte counts, SHA256 and SVG root metadata. Temporary Figma URLs remain only in evidence, never runtime code.

## Checks

The package TypeScript no-emit check passed after these changes. Eight focused browser checks are prepared in `tests/figma-expanded/coverage.spec.ts`, with a separate `playwright.figma-expanded.config.ts`, so existing prototype checks do not unexpectedly require Storybook. They cover local badge geometry/artwork, local Search geometry/submission, Option/List keyboard behaviour and row height, scrollable Tab reachability, Tooltip focus/Escape/touch, short/long Footer flow, Container close-state mapping and directional Drawer gestures. Browser results must be appended after the integrated build. Prepared tests are not passing results.

`ExpandedSource.stories.tsx` supplies 12 focused fixtures. Icon Tabs is explicitly a functional composition pending its Tab-specific icon measurement mapping, rather than an accepted authored variant.

## Remaining source limits

The Figma quota prevented further high-fidelity requests after the four new branch contexts. Standard Drawer geometry was not invented from a prose mention; its nonmodal variant remains unsupported until applicable figures are verified. State5 Container needs its exact expanded render/artwork. Tabs needs a numeric scroll inset/icon measurement and primary-versus-secondary/disabled source mappings. Current Search private-glyph conflicts need a scoped source decision. The hidden Tooltip Behavior frame was reclassified using its actual text: all three rows are visible within their hidden parent, and their characters specifically describe Tooltip behaviour, despite stale Toast layer names. This supports the exact 1.5-second timing and opacity-fade pattern. Fade duration and easing remain unspecified, so no arbitrary motion token was added. Hidden Tabs swipe prose has no equivalent applicability decision.

These limits prevent a whole-page 100% acceptance claim. They do not block use of the implemented components.

## Tooltip behaviour applicability decision

The orchestrator approved the source interpretation after direct inspection of frame `160:13843`, its ancestry and rows `160:13844`, `160:13847` and `160:13850`. Unlike individually hidden template rows, these rows are visible inside a hidden whole Behavior frame and contain rewritten Tooltip-specific characters. Evidence is saved in `evidence/tooltip-written-behavior.json`. The implementation uses 1500 ms after touch release, preserves continuous hold/hover/focus, and exposes opacity fade with an explicit duration/easing configuration. Without an authored numeric fade duration the default motion duration remains zero; exact motion acceptance is still open.

## Focused timing check follow-up

The first combined run passed seven B checks and failed the exact Tooltip timing boundary. Repeating the focused check showed that the installed test clock continued advancing in real time between commands: advancing 1499 ms could cross the 1500 ms deadline because of command overhead. The test now pauses a fixed clock before interaction. Against unchanged Tooltip runtime, the focused check passed: visible through a 1600 ms hold, visible for 1499 ms after release, then hidden after the final 1 ms. This corrected a test timing defect, not a component defect. The orchestrator will rerun the combined suite after its other component fixes.

## Integrated release verification

Root integration completed for0.2.0. All new public exports, stylesheet pieces and runtime asset folders are included. Type checking, builds, foundation/literal checks and package exclusions passed. Combined20-case browser suite passed without skips/flakes; the final Card paint correction passed its focused follow-up. Three existing consumer regressions and47rendered typography-style checks passed. The192-story rendering smoke pass found no runtime exception or missing non-lazy image. This supersedes earlier “awaiting root integration/browser checks” preparation notes above. Full source/variant pixel acceptance is not claimed; precise remaining limits stay in FIGMA-GAPS.md and current-checkpoint.json.

## State5 source recovery and implementation

A later bounded retry recovered high-fidelity context and the official screenshot for `557:83996`, plus its exact original close SVG. State5 is now implemented as a full-height square sheet with an empty 44 px header band, content beginning at y52, and a 24 px close control at x351/y10 in a 390 px source viewport. The original close SVG is 536 bytes and is included in the asset manifest. The body scrolls rather than copying the source frame’s overflow defect. Open can expand upward to State5; dragging its header downward or pressing its close control returns to Close. Original numbered source names remain unchanged. A ninth focused browser test measures full height, title/close positions, body scrolling, close/reopen and focus return. Browser results remain pending the orchestrator build.

Search override recovery remains unresolved: exact virtual IDs `I245:44147;1933:62252;5908:132038` and the light counterpart returned not found in both direct node export and design-context reads; the imported Search instances returned no text descendants through the node API. No substitute is promoted to exact glyph acceptance. Existing main-artwork fallback remains explicit.

## Drawer gesture and focus follow-up

The drawer now captures the original pointer target, allowing a gesture to finish outside its starting row while preserving normal tap/click bubbling. Drag or cancellation suppresses the compatibility click so it cannot accidentally select a row. Horizontal distance must still exceed one quarter of the panel width and exceed vertical movement before dismissal; the 8 px click-suppression slop is an implementation gesture threshold, not a Figma design value. The regression fixture records selection calls and checks short drag, vertical drag, cancellation, deliberate rightward dismissal and an ordinary row click separately.

`SourceOption` uses the browser's native focus outline (`outline:auto`) rather than claiming an authored green 2 px focused state without a source figure. The green 3 px selected bar remains the verified source styling. Package TypeScript checks pass after both changes. The integrated browser suite must verify the new State5 and gesture regressions after rebuild.
