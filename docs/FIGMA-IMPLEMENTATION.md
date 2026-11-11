# Actual Figma implementation

Source: https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS

Implementation authorised 3 November 2026. This source-derived track is separate from the earlier website-derived `@croma/web-ui` package. The main agent coordinates foundations, component engineering, Storybook integration and independent review. Existing releases remain unchanged.

## Acceptance

Source policy updated by the user on 4 November 2026: written specifications take priority. Explicitly linked saved styles, main-component properties and original artwork from the supplied Croma DS file may fill gaps in the written specifications. Values genuinely absent from that file remain unspecified. Switzer Variable is now supplied and bundled; the earlier temporary Inter exception is superseded.

Every source-defined spacing, colour, typography, dimension, radius, border, name and variant must match its recorded Figma reference exactly. Correct CSS layout, alignment, constraints and content resizing replace defective Figma construction without silently changing specified visual values. Exact-value verification, visual review and behaviour checks are separate requirements. A successful build does not establish visual acceptance.

Written specifications override saved styles. Saved-property fallback must retain exact source node/style IDs, component/state context and original values. A matching name alone does not establish a token binding; inspect actual references and variant scope. Conflicts between written statements, or saved sources whose scopes cannot be distinguished, remain explicit. Missing definitions or assets block the affected property, not independent structure, geometry, behaviour or verification work. Switzer Variable is supplied and loaded through the shared font setting. No approximation may be labelled accepted.

Policy history: on 3 November, the user required written specifications exclusively and left missing values unspecified. That restriction explained the earlier blocked token checks. On 4 November, the user said the Figma file was their only source of truth and approved using its saved styles, component properties and artwork to fill unwritten gaps. Written values still win conflicts; whole hidden written tables remain eligible and hidden template rows remain excluded.

## Component acceptance sequence

On 4 November 2026, the user explicitly requested component-by-component work to reach full acceptance. Button is the active acceptance gate, followed by Form Field and the selection controls. Implementation preparation may run in parallel, but supporting foundation, token or asset checks do not mark any component accepted.

Each component needs a complete source-linked inventory of its valid names, properties, variants, themes and states; exact written-priority and approved saved fallback values; original artwork; source-root and child-slot layout review; responsive and long-content checks; native semantics, keyboard, focus and state behaviour; and fresh browser evidence tied to the tested build. An unresolved required property prevents that component's acceptance. The supplied Switzer font replaces the earlier temporary Inter exception. Genuine source conflicts are recorded at the affected component, without supplying Material defaults.

The user also suggested Material Design as a possible base. The inspected file's state-layer and disabled-opacity conventions are compatible with Material, but no explicit Material attribution was found in the searched names, descriptions, documentation links, hyperlinks or authored text. This remains a user hypothesis and contextual clue, not approval to import external design values.

## Work ownership

| Workstream | Owned paths | Responsibility |
| --- | --- | --- |
| Foundations specialist | packages/figma-foundations | Exact source extraction, shared styles, source evidence |
| Component specialist | packages/figma-ds | Source-backed reusable controls and robust behaviour |
| Storybook specialist | apps/figma-storybook, apps/figma-prototype | Catalogue, documentation, real consumer |
| Main orchestrator | root configuration, tests, integration and this record | Integration and independent acceptance checks |

## Extension workflow

Check existing components first. Record the exact source and intended variants. Keep business rules and feature data in consumers. New components require stories, source-value comparisons, relevant interaction checks, rendered review, an inventory update and a versioned release. Code-only extensions remain identified until their design status is resolved. Consumers pin releases; changes do not silently update frozen handovers.

## Initial milestones

1. Extract foundations and prepare source specifications.
2. Implement Button and form field pilots and verify their contracts.
3. Extend to source-backed selection/disclosure components.
4. Integrate Storybook and a consumer prototype; review narrow/wide layouts and keyboard behaviour.
5. Record acceptance gaps explicitly before release.

Status: active implementation resumed after the premature partial handoff. Continue until every source-supported property, state, layout and behaviour is implemented and checked. Unknown semantic values must not become a blanket stop. Keep an explicit property/state acceptance matrix so incomplete implementation is distinguished from a genuinely unresolved specification. No component has yet passed the user's complete acceptance standard.

## Prototype delivery priority — 4 November 2026

The user clarified that usable components matching the Figma DS are the priority, and does not want time spent on UI code details. Continue component by component, with visible source fidelity, variant coverage and essential interaction checks. Defer extra provenance tooling, packaging refinement and engineering cleanup that does not improve prototype use. This changes delivery priorities; it does not waive exact source values or authorize invented defaults. Button remains first; complete the visible Storybook result before expanding acceptance infrastructure.

## Current usable build

The4November prototype pass is now available in Storybook on6021 and the consumer on5184. Source-based Button, FormField, selection controls, Tabs, Menu/chips/badges, Tooltip, Dropdown, Accordion/Search, Chat, Divider, Steppers, Popup/Sheet/Card, AccountDrawer and StickyFooter have been integrated and checked within the scoped results in FIGMA-VERIFICATION.md. Source-native names and alternate families remain separate. The Header helper is explicitly outside accepted editable-Figma components, with its original raster reference retained. Font and glyph conflicts and the older Drawer branch remain explicit acceptance limits; this is a usable prototype build, not a claim of unqualified whole-system100%fidelity.

## Supplied Switzer font 4 November 2026

The user supplied `/Users/mac/Downloads/Fonts/Switzer-Variable_6.ttf` as Croma fonts. Its internal family is Switzer Variable and its weight axis spans100–900 with default400. The unchanged141020-byte TTF is bundled in `packages/figma-foundations/fonts/` with SHA256373c2d2ad8f1f811ca58ae725e9591db2e72cf726dc6e8066cd7f64b4c283cdf. Shared `fonts.css` loads it as Switzer and defines the shared family variable. Storybook and both prototype entries import that font stylesheet; temporary Inter family overrides were removed. Written font size, weight, line height and tracking values are unchanged. This supersedes the earlier temporary font substitution; unrelated icon-font and source conflicts remain.
