# Croma design system

Reusable React components, Switzer typography and Croma foundations for building prototypes. This repository distributes the curated code library built from the actual Croma Figma DS, together with separately documented prototype extensions.

## Latest release

Version **0.5.0**, released 5 November 2026. Use the repository's Releases section for the editable source ZIP, both installable package archives, static Storybook, release notes, change history and verification manifest. Install the DS and foundations from the same version.

## Install

Requires React and React DOM 19. Download both TGZ files into your project's vendor directory:

```sh
npm install --save-exact ./vendor/croma-figma-foundations-0.5.0.tgz ./vendor/croma-figma-ds-0.5.0.tgz
```

Import these once at the app entry:

```tsx
import '@croma/figma-foundations/fonts.css';
import '@croma/figma-foundations/tokens.css';
import '@croma/figma-foundations/typography.css';
import '@croma/figma-ds/styles.css';
import {PrototypeTheme} from '@croma/figma-ds';
```

Wrap the full prototype in `<PrototypeTheme Theme="dark">`. Explicitly cover the full HTML/body/application shell with the page background #191919; the card surface is #212121. Theme overlays and dialogs too. Remove competing legacy component/focus/selection styles. Read `docs/FIGMA-DESIGN-HYGIENE.md` and `docs/FIGMA-PROTOTYPE-EXTENSIONS.md` in the source archive before migrating.

## Editable source and Storybook

Extract the source ZIP; use Node 22.12+ and npm. Run `npm ci`, `npm run figma:build-ds`, then `npm run figma:storybook`. The included source contains the two Figma packages, Storybook, prototype examples, rules and tests.

Public catalogue: https://croma-figma-ds.bombaydc-3738.chatgpt.site . It now runs 0.5.0, published on 11 November 2026 with 228 stories and 2 documentation entries. The downloadable source includes the same hygiene examples and buildable Storybook.

## Source and acceptance

Original Figma specifications take priority; scoped same-file properties and original artwork fill documented gaps. Prototype extensions are separately identified implementation contracts. The original raw Figma archive is excluded. Full-system visual acceptance is incomplete; passing tests and a release do not establish stakeholder approval. Check the release notes and manifest for exact verification scopes.

## Rights

No blanket open-source licence is asserted. Croma branding, artwork and the supplied font retain their existing rights and bundled notices.
