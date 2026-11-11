# Prototype extensions for composed Croma screens

5 November 2026. The user supplied an exchange-prototype agent report and explicitly chose “Build DS-based extensions”. This authorises new reusable compositions using Croma's existing tokens; it does not make the report's proposed rules original Figma specifications. The first report was an agent's account, not an independent audit. A later review of 17 user annotations inspected and corrected the actual exchange prototype at port8774; see [the annotation review](FIGMA-EXCHANGE-ANNOTATION-REVIEW.md).

## Source and scope

Keep original Figma components and their authored values intact. New components live under Storybook “Prototype extensions”. Their geometry/theme-role assignments are implementation proposals using the existing scale; exact Figma acceptance is not claimed. Existing source artwork is reused where available. Feature routing, fetching, stock, eligibility, prices and business validation remain caller-owned. Header is a fully editable extension, while the original raster-based Header reference remains separate.

## Added components

| Component | Contract |
| --- | --- |
| SearchCombobox | Controlled query, model/storage/finish suggestions, optional controlled brand filter; keyboard-active/selected/disabled choices; loading/error/empty and dark/light states. App supplies filtering and requests. |
| SelectablePurchaseCard / Group | Single selection uses native radios, multiple selection checkboxes; whole card selects, metadata belongs inside its label. Separate chosen-phone summary is app content, not another selection control. |
| InlineNotification | Polite status or alert according to urgency, optional dismiss/action; do not repeat alerts in static galleries. |
| LoadingIndicator | Labelled, stable-size spinner with reduced-motion support. Its motion duration is an extension choice, not Figma timing. |
| Breadcrumb | Ancestor links and a non-link current page; decorative separators hidden from assistive technology. |
| CommerceHeader | Editable logo, navigation, search and action slots; original logo/icons; responsive menu with Escape/focus return. No text inserted into icon-only artwork slots. |
| LiveCommerceHeader | Separate dated croma.com presentation observed5November2026: black header, wordmark, Menu, white search, location, account and cart. Callbacks and mobile layout support prototypes; it is separate from the original Figma Header and generic CommerceHeader. |
| SelectionPillGroup | Controlled single radios or multiple checkboxes, compact pill or card layout. Selection changes green stroke/text and neutral grey fill without changing border width, padding, weight or dimensions. Native control semantics remain intact. |

## Composition rules and examples

Version 0.5.0 promotes the user-approved hygiene rules into shared component defaults. See [component rules, ownership, checks and migration](FIGMA-DESIGN-HYGIENE.md). New `PlainSection`, `SurfaceCard` and `HelpDisclosure` extensions encode section/surface/card anatomy; field, selection and action defaults are enforced in their shared styles. These supersede conflicting earlier extension guidance below, without changing authored Figma components.

- Compact dialog hugs content; form and multi-step patterns use explicit width/height limits. In CompositionDialog, header, progress, body and footer share one inset. Only the body scrolls. Multi-step shell stays stable between short and long steps.
- ResponsiveStepper offers fill versus compact desktop width. At narrow widths it becomes “Step n of total — Title”, with access to completed steps when a callback is supplied. Visible Completed/Current/Upcoming copy supplements colour. Keep storage values such as “128 GB” in one semantic string rather than splitting their spans.
- Group radio options as inseparable label/control units. Extension recipe uses8px inside an option and24px between options, wrapping whole labels. Original radio glyph geometry is retained.
- Plain sections use spacing, surface cards group content, interactive cards communicate selection. Avoid outlining every nested group.
- PrototypeField has separate label/input/help/error anatomy, disabled and autofill treatments, and dark/light theme roles. This is a new extension, not a silent recolouring of the source-white FormField.
- InlineFieldAction measures the input's actual top edge so the action aligns with the control, excluding label/help/error height. Narrow layouts stack with16px spacing. Extension controls share48px height.
- ActionGroup wraps/stacks without truncating labels. Back is quiet; the primary action remains trailing. Forward arrows belong after the text. PrototypeButton loading retains its footprint.
- CTA copy uses sentence case (e.g. “Check availability”, “Continue to review”). CSS preserves supplied casing instead of forcing uppercase/title case. Authors retain proper nouns/acronyms such as Croma, USB and PIN; automatic lowercasing would corrupt them.
- Extensions use named page/surface/raised/text/muted/border/accent/error roles per theme. Search menus and notifications have their own explicit theme styling. Original components retain their source contracts; do not apply blanket consumer overrides to them.
- Typography roles: dialog title24/28, section title20/24, control/CTA14/20, metadata/help12/16. These are extension compositions of the existing scale. Avoid additional local bold roles.
- General composition spacing8/16/24/32 is adopted only for these extensions; it does not overwrite authored component padding/gaps.

## Applying the extensions without local visual repairs

Import foundations fonts/tokens and the DS stylesheet once. Use explicit component intent (`appearance="secondary"` for a secondary purchase action); legacy class names are not reliable intent. Structural integration wrappers must have neutral geometry and must never reuse a visual component class. A wrapper and its button both carrying padding caused several exchange alignment defects.

Use one inline inset owner per surface. Body, heading and footer share24px on desktop and16px on narrow layouts; child rows add no second inset. Keep Back in a leading group and Save/Continue together in the trailing group. Do not replace their grouping container with `display:contents`. Use spacing rather than dividers between related condition questions. These are extension recipes, not changes to authored Figma component values.

SearchCombobox supports `resultsLabel` (default “Matching phones”) with the actual count inside the result surface and outside option semantics. Model/storage metadata should use the same text emphasis, with storage right aligned and no badge. Feature code still supplies query filtering and data.

SelectionPillGroup owns its state styling. For a retained native HTML journey, the same stylesheet can adapt nodes marked `data-croma-selection` and `data-selection-variant="pill"|"card"` inside `.cx-theme`; select via native checked inputs or `aria-pressed="true"`. Remove competing legacy selected-state rules. Merely importing the DS does not remove earlier consumer CSS. Check settled selection state, geometry, keyboard operation, long content and mobile before accepting the application.

## Acceptance and limits

Verify keyboard selection and focus return, disabled suppression, status announcements, narrow320px layouts, long labels, loading/empty/error and dark/light examples. This library cannot establish whether the agent's prototype used the correct components or whether every report item was an actual original-DS gap. No backend flow or exchange-prototype integration is implied. Theme assignments and full composed-screen visuals remain reviewable proposals, not stakeholder sign-off.
