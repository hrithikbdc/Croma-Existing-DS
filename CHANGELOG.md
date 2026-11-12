# 0.6.0 — Developer adoption

- Add 66 public React API pages with working, typechecked examples, actual props and source links; add installation, component-choice, theme and quality guides.
- Add CromaProvider document setup and inherited theme support; explicit source variants retain priority.
- Move 51 exact CSS colours and prototype semantic roles to shared foundation tokens without normalising source values.
- Use public package imports in extension stories and expose real Local.Button and search controls.
- Add mocked HTTP search, cancellation, error/retry and validated multi-step form recipes.
- Add developer onboarding, accessibility, visual and cross-browser regression checks. Visual baselines describe code examples, not Figma sign-off.

# Croma Figma DS changes

## 0.5.1 — 11 November 2026

- Put editable component, token, asset, Storybook and test sources directly in Git.
- Add standard development commands, contributor guidance and pull request checks.
- Build and deploy Storybook from verified main-branch source with GitHub Pages.
- Add a repeatable release workflow that tags and packages the exact verified commit.
- Remove a Mac-specific package-check cache path.
- Support direct npm installation of versioned GitHub release packages.
- Fix Escape on an open menu trigger, including the interval before focus enters its panel.
- Component visual values and source-acceptance boundaries are unchanged from 0.5.0.

## 0.5.0 — 2026-11-05

- Added PlainSection, SurfaceCard and HelpDisclosure with shared grouping, card anatomy, accessible disclosure and one base plus one card surface in themed forms. Nested SurfaceCards flatten into plain subsections.
- PrototypeField owns 8px label and 12px hint/error spacing, forwards its input ref and uses one accent focus border. SearchCombobox uses one combined-control focus boundary and the same help spacing.
- SelectionPillGroup compact pills are text-only by default with hidden native input glyphs; icons and swatches are explicit. Card rows use equal responsive columns, invariant state geometry and immediate selection without fill transitions. Focus uses one contiguous inner stroke.
- Themed purchase/notification/search extensions share semantic surfaces and readable text. Light field error colour is reassigned from saved source paint278:81072 for contrast; original source components are unchanged.
- ActionGroup supports start/end/between alignment. SurfaceCard actions have shared spacing and align quiet-action labels with card copy. CompositionDialog uses page background and retains body scrolling/footer visibility.
- Added five Design hygiene compositions, component-specific authoring/migration guidance, and four regression cases. The extension suite is now part of figma:verify. Existing 0.4.0 adapter compatibility hooks remain.

Correction: No authored Figma component correction is made in this release.

## 0.4.0 — 2026-11-05

- Added SelectionPillGroup single/multiple selection with native input semantics and user-approved invariant geometry: green selected stroke/text, neutral grey selected fill and transparent unselected state with grey stroke.
- Added LiveCommerceHeader as a separate dated website-layout preset using logo/menu/search/location/account/cart anatomy; its original public account SVG is bundled. Original Figma Header and generic CommerceHeader remain separate.
- SearchCombobox exposes an inside-results heading/count contract; option semantics remain reserved for selectable suggestions.
- The annotation review distinguishes reusable DS extension gaps from adapter/consumer defects, including duplicate visual classes, double padding and local cascade/state rules. Application integration changes and business logic remain separate from library acceptance.

Frozen files remain unchanged in the separate version record.

## 0.3.0 — 2026-11-05

- Added SearchCombobox with controlled query, grouped model/storage/finish suggestions, optional brand filter, keyboard selection and loading/error/empty states.
- Added native-radio/checkbox SelectablePurchaseCard and Group, InlineNotification, LoadingIndicator and Breadcrumb compositions.
- Added fully editable CommerceHeader with original logo/icon slots and responsive navigation; the original raster-based Header reference remains separate.
- Added CompositionDialog, ResponsiveStepper, PrototypeField, InlineFieldAction, ActionGroup and PrototypeButton recipes for shared insets, body-only dialog scrolling, narrow layouts, long labels and stable loading actions.
- CTA authors use sentence case while preserving proper nouns/acronyms. CSS preserves supplied casing; no automatic lowercasing is applied.
- Geometry, theme-role assignments and composition spacing are explicitly extension choices. Routing, data fetching, business validation and exchange-prototype integration remain caller-owned.

Frozen files remain unchanged in the separate version record.

## 0.2.3 — 2026-11-04

- Stepper caller artwork is uniformly scaled and centred inside the written12pxicon slot; original SVG root geometry and asset bytes remain unchanged.
- Numbered Stepper acceptance examples no longer pass a placeholder plus icon.
- Added an Icon Steps review story covering both themes and both orientations with original source icons.

Frozen files remain unchanged in the separate version record.

## 0.2.2 — 2026-11-04

- User-approved reconsideration: retain the current source focus appearance as default and restore the previous outer outline as an optional alternate.
- FormField and Dropdown expose focusAppearance="source"|"outer-outline"; the alternate restores the earlier outer focus outline and Dropdown row rectangle. This is a presentation option, not a new authored Figma variant.
- Fields, floating labels, inputs, Dropdown text and review-story titles explicitly use normal upright font style; source typography sizes, weights, line heights and tracking remain unchanged.
- Added separate Previous focus outline alternate stories for Form Field and Dropdown.

Frozen files remain unchanged in the separate version record.

## 0.2.1 — 2026-11-04

- Removed added outer focus rectangles from Dropdown trigger/options so focus uses the source field border and source option-hover fill.
- The main interactive Dropdown story now uses the separate FormDropdown branch with floating label and source border artwork.
- Form Field review width is298px and Dropdown review width is294px; source-state galleries use dark review surfaces.

Frozen files remain unchanged in the separate version record.

## 0.2.0 — 2026-11-04

- Native form reset now reads after the browser default and respects cancelled resets, synchronising Toggle artwork, Checkbox source metadata, Form Field and Dropdown state.
- Added local Accordion, Colour Accordion, light/dark Card masters, Skeleton Card and separate Form Dropdown.
- Added local Label/Search, Option/List and all five mapped Sheet Container states, including fullscreen State5 with original close artwork.
- Added scrolling/icon/alignment Tabs, Tooltip information/custom triggers and the written1500ms post-touch-release lifetime with held-touch persistence, drawer swipe and explicit Fixed/Flow/Sticky Footer layout modes.
- Added72original Illustration assets, four source Device viewports, Phone/Desktop casing compositions, fluid Grid and Experience/Motion/Content guidance.
- Added safe chip-removal focus, navigable Steppers and temporary Menu/popup action compositions.

Frozen files remain unchanged in the separate version record.

## 0.1.0 — 2026-11-04

First shared prototype snapshot.

Frozen files remain unchanged in the separate version record.
