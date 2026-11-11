# Actual Croma Figma foundations

Source: [Croma DS](https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS), the user-supplied local `.fig`, and targeted read-only live checks. This package is separate from the website-derived `@croma/web-ui`.

On 4 November 2026, the user approved saved styles, actual component properties and original artwork from this file to fill written gaps. Written specifications still take priority. Exact source IDs, references, component/state scope and original values are required. A matching style name alone does not establish a binding. The earlier written-only restriction is preserved as superseded history in `source/source-policy.json`.

## Runtime data and CSS

- 47 typography rules retain exact written labels, source IDs and values. Unwritten decorations such as link underlines come from actual adjacent type-label style references.
- 16 spacing and 10 border values retain their written names and 26 custom properties.
- Written mobile layout: 4 columns, 15px margin, 16px gutter. Written desktop layout: 12 columns, 32px margin/gutter and maximum 1320px container.
- 41 original local paint styles retain exact IDs and float values. These are an inventory, not an automatic semantic theme assignment.
- `savedStyleDefinitions` exposes 652 same-file definitions: 420 paint, 207 text, 16 effect and 9 grid records. `mainComponentText` retains 2421 directly defined master text records. ID variables include `--croma-source-paint-49-2098` and `--croma-source-text-399-72740-line-height`.

Actual figures may override imported defaults, and older/newer definitions coexist. Component/state bindings must follow actual references and overrides. `source/effective-figure-text.json` projects 1,296 text slots from 512 selected figures with exact override-key paths and field origins. `source/candidate-role-bindings.json` proposes written-slot matches for explicit component/state review.

All-solid paint stacks are composited in their actual stored order with full source precision. Linear gradients retain exact stops and inverse affine positioning in normalized SVG paint tiles. Shadows preserve source offsets, radius, spread and RGBA. Background blur uses half the Figma blur radius as CSS standard deviation, corroborated in `source/live-background-blur.json`; source 5.436563491821289 becomes 2.7182817459106445px without rounding.

## Written priority

Written Mobile H6 line-height 20px overrides saved 28px through actual type-label style399:72740. Written desktop Feature Title tracking -0.02em overrides saved -1%. Desktop B1 Regular/Semibold use written 34px line-height; Bold/Link use 32px. Written desktop margin 32px overrides saved 1366-grid margin 23px.

There are 46 confirmed style-reference bridges for 47 written typography blocks. Feature Title 2 has a standalone written definition and no style reference on its adjacent label; its written rule remains without an invented bridge.

All 149 written Table roots are eligible, including hidden whole tables. The 3,103 hidden descendant/template cell occurrences remain excluded. All tables were recovered locally after the earlier cloud limit; targeted live reading later succeeded. Historical cloud-only coverage files preserve their original scope. Source values and browser/behavior acceptance are separate records.

## Font delivery

Import `@croma/figma-foundations/fonts.css` once in each consumer. It loads the unchanged user-supplied Switzer Variable TTF and sets the shared family. Weights 100–900 are supported; written sizes, weights, line heights and tracking are retained. Inter was a temporary choice before this font was supplied and is no longer the actual-Figma library font.

## Generation and verification

In the source checkout, run `npm run generate` and `npm run verify`. Saved-source checks compare definitions and reference paths against the decoded original, test surface composition, check written precedence and confirm emitted ID variables. Browser and interaction review remain separate acceptance stages.

`source/saved-definitions.json` retains 652 definitions, 53,544 resolved reference occurrences, 20,324 explicit cleared-style sentinels and 11 dangling GUID references. Cleared references are not missing definitions. Cached properties that disagree with their current linked definitions remain explicit; effective instance overrides and corroborating live reads take priority over stale caches.

## Package boundary

The package includes `index.ts`, `tokens.json`, `tokens.css`, `typography.css`, `fonts.css`, the unchanged Switzer TTF and font notice, this README and the package manifest. They contain the approved runtime projection and provenance. Original archives, decoded documents, full binding graphs, screenshots, extraction scripts and decoder dependencies stay in the source checkout and are excluded from the package.

Style references resolve by exact source GUID or asset key and version. Conflicting versions are never selected by name or first match. The public definition includes its original version. `source/verify-style-reference.mjs` checks every recorded reference and regression cases for two conflicting versions of the same key.

## Switzer font

The user supplied Switzer Variable on4November2026. Import `@croma/figma-foundations/fonts.css` once in each consumer; it bundles the unchanged TTF and sets `--croma-font-family` to Switzer. The verified weight axis is100–900, default400. Source font sizes, weights, line heights and tracking are unchanged. Font metadata and attribution are preserved in `fonts/NOTICE.txt`. This replaces the earlier temporary Inter choice in the actual-Figma track.
