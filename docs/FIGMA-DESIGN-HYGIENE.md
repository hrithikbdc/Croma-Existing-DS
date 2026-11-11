# Shared prototype design hygiene

Version 0.5.0 · 5 November 2026. The user approved promoting the exchange review fixes into shared DS rules with “sure, update the ds”. These are reusable **prototype-extension contracts**, separate from the source-exact Figma components. The Figma file and frozen releases are unchanged. This release does not change pricing, eligibility, flow or policy.

## Component rules

| Component | Shared rule | Screen responsibility |
| --- | --- | --- |
| PrototypeTheme | Dark is the default. Use named page, surface, text, muted, border and accent roles. Light is an explicit region variant. A form has a page base and one subdued card surface. | Wrap the complete region once. Supply actual content and choose which sections need grouping. |
| SelectionPillGroup | Text-only pills by default. Native radio/checkbox remains accessible but its glyph is visually hidden in compact pills. Icons and colour swatches are explicit option properties. Selected border/text use accent; fill is neutral. Border width, padding and weight stay constant. | Single/multiple mode, values, labels and exclusions such as “No issues” come from the screen. |
| Choice cards | Two equal columns on wider screens, one below 480px. Each row stretches to its tallest content. Minimum height is 64px; longer content grows. Every state uses identical geometry. State changes are immediate, with no fill animation. Keyboard focus is one contiguous inner stroke, with no second native outline. | Supply content and selection behaviour. Do not add checked-only padding, height, weight or transition styles. |
| PrototypeField | Label-to-control 8px; control-to-hint/error 12px. Control has a single accent border on focus, without a second ring or shadow. Invalid border remains the error colour. Hint/error association and forwarded input ref are built in. | Validation timing/messages and input attributes. No external margins on internal label/input/help elements. |
| SearchCombobox | One focus border around the combined control. Help uses the same 12px spacing. Inside a themed composition, search uses the same surface/text roles. | Query, suggestions, filters, requests and selection data. |
| PlainSection | Transparent, without border, radius or inset. Groups content through spacing and an optional heading. | Use for IMEI fields or nested explanatory sections when no extra card is needed. |
| SurfaceCard | One inset, 12px content rhythm and ordered status/title/body/support/actions slots. Inset is 24px, reduced to 20px below 768px. Nested SurfaceCards automatically become plain subsections, without another fill, border or inset. | Choose meaningful groups. Supply status and actions only when needed; avoid repeating “Selected” in multiple places. |
| HelpDisclosure | Native expandable details, high-contrast summary and secondary body text; 16px vertical summary padding and a 48px minimum target. Background stays transparent. | Title and explanatory content. Use the original Figma Accordion when source-exact appearance is required. |
| ActionGroup / CompositionDialog | Start/end/between alignment is explicit. 16px gap (24px for card actions), wrapping and full-width stacked actions below 768px. Button labels can wrap. Dialog uses page background; body scrolls, footer remains visible. | Action order, primary/quiet choice and callbacks. Long primary copy must be checked in composition. |

The 480px choice-grid and 768px action/dialog thresholds follow the existing extension responsive patterns. They are shared implementation decisions, not viewport-specific patches or newly recovered Figma measurements. A forced-colour mode restores a system focus outline when colour-only border changes may be suppressed.

## Semantic roles and composition boundary

The extension roles reuse existing Croma values: dark page `#191919`, subdued surface `#212121`, primary text `#fff`, secondary text `#cfcfcf`, accent `#12daa8`. Light uses page `#f9f9f9`, surface `#fff`, primary text `#191919`, secondary text `#5f5f5f`, accent `#088466`. The extension border is `#777` in dark and `#9b9b9b` in light. `--cx-raised` aliases the card surface rather than adding another form layer. The light error role uses `#930006` from saved source paint `278:81072` (source error-container colour), reassigned here for readable field errors; dark errors retain the existing extension red. This is a deliberate semantic-role assignment, not a change to authored Figma colour definitions.

Interactive controls retain necessary boundaries. An open search menu is an overlay, with its own placement and active-option cue; the two-layer form rule does not remove overlays. Original Figma components keep their original source contracts and are not automatically recoloured by these additions.

The DS owns component internals, states, semantics and responsive behaviour. Screens own routing, content, business rules and space between major sections. For a missing reusable behaviour, add a documented shared variant rather than overriding internal selectors or stacking another focus/selection treatment. Legacy adapters must apply one shared selection hook per control, preserve native semantics and avoid mounting two components on the same element. Existing 0.4 adapter compatibility selectors remain; new React consumers need no local `!important` fixes.

## Verification and acceptance

Storybook → Prototype extensions → Design hygiene contains dark/light, narrow, explicit-swatch and long-dialog-action compositions. The regression suite checks state geometry, native keyboard selection, retained state after rerender, zero fill transition, one focus boundary, 12px hint/error spacing, nested surface depth, text contrast in both themes, disclosure keyboard use, footer visibility, label containment and focus return at 320px and 1440px.

Run `npm run figma:build-storybook` then `npm run figma:test:extensions`. The suite is also included in `figma:verify`. Tests exercise these defaults; they do not prove that every consumer uses them correctly or replace visual review. New reusable variants should add a composed example and a check for the behaviour that prompted them. Original Figma source acceptance remains tracked separately.

## Migration

Install both version-matched 0.5.0 packages. Replace local plain containers/cards/help details with the corresponding extension. Remove local duplicate focus rings, checked-state geometry and fill transitions. Compact SelectionPillGroup inputs are now visually hidden; automate clicks on their labels or use keyboard selection. Explicit swatches use `options[].swatch`, and icon options use `options[].icon`. Choice-card layouts now use a responsive grid instead of a wrapping inline row. Theme/card assignments and these selection presentations deliberately change extension appearance; no required prop was removed.

The final exchange prototype's existing local fixes do not disappear automatically when the DS changes. It remains a separate pinned consumer until explicitly migrated and reviewed. Public hosting is a separate release step.
