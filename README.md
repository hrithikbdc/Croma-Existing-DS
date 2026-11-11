# Croma design system

Reusable React components and foundations built from Croma's actual Figma DS, with separately documented prototype extensions.

[![Checks and Storybook](https://github.com/hrithikbdc/Croma-Existing-DS/actions/workflows/quality.yml/badge.svg)](https://github.com/hrithikbdc/Croma-Existing-DS/actions/workflows/quality.yml)

[Storybook](https://hrithikbdc.github.io/Croma-Existing-DS/) · [Releases](https://github.com/hrithikbdc/Croma-Existing-DS/releases) · [Changelog](CHANGELOG.md) · [Contributing](CONTRIBUTING.md)

## Use in a prototype

Use React and React DOM 19. Install the two matching **0.5.1** packages directly; no ZIP download, GitHub login or npm registry login is required:

```sh
npm install --save-exact \
  https://github.com/hrithikbdc/Croma-Existing-DS/releases/download/v0.5.1/croma-figma-foundations-0.5.1.tgz \
  https://github.com/hrithikbdc/Croma-Existing-DS/releases/download/v0.5.1/croma-figma-ds-0.5.1.tgz
```

Import the four stylesheets once at the application entry:

```tsx
import '@croma/figma-foundations/fonts.css';
import '@croma/figma-foundations/tokens.css';
import '@croma/figma-foundations/typography.css';
import '@croma/figma-ds/styles.css';
import {Button, PrototypeTheme} from '@croma/figma-ds';

export function App() {
  return (
    <PrototypeTheme Theme="dark">
      <Button Type="Filled">Continue</Button>
    </PrototypeTheme>
  );
}
```

Apply the page background to the entire document, including the app shell. The default dark page is `#191919`; the subdued card surface is `#212121`.

```css
html, body, #root { min-height: 100%; margin: 0; background: #191919; }
```

Use the documented shared components and tokens, remove conflicting legacy styles, and theme dialogs and overlays too. Read [design hygiene](docs/FIGMA-DESIGN-HYGIENE.md) and [prototype extensions](docs/FIGMA-PROTOTYPE-EXTENSIONS.md) before applying the DS to an existing prototype. Pin both dependencies to the same release and commit your lockfile.

The names `@croma/figma-ds` and `@croma/figma-foundations` are the installed import names. They are not currently published to npmjs.com. The HTTPS command above is the supported distribution route.

## Develop the library

Use Node **22.12+** and npm. The editable source is directly in the repository:

```sh
git clone https://github.com/hrithikbdc/Croma-Existing-DS.git
cd Croma-Existing-DS
npm ci
npm run dev
```

Storybook opens at `http://localhost:6020`. Run `npm run figma:dev` for the consumer prototype at `http://localhost:5182`.

| Command | Result |
| --- | --- |
| `npm run dev` | Build the DS and start Storybook |
| `npm run build` | Build the components and consumer prototype |
| `npm run build:storybook` | Build the static catalogue |
| `npm run typecheck` | Check TypeScript after building the DS |
| `npm test` | Run consumer and component browser regressions against built apps |
| `npm run verify` | Build, typecheck, check source/package boundaries and run browser tests |
| `npm run release:pack` | Package a clean, already verified source commit |

Install Chromium before running browser tests: `npx playwright install chromium` (Linux CI uses `--with-deps`).

## Repository structure

| Path | Purpose |
| --- | --- |
| `packages/figma-foundations` | Tokens, typography, Switzer and font notices |
| `packages/figma-ds/src` | React components, styles and source artwork |
| `packages/figma-ds/evidence` | Curated source values and acceptance records |
| `apps/figma-storybook` | Stories and documentation |
| `apps/figma-prototype` | Consumer examples and acceptance harness |
| `tests` | Behavior, composition and source checks |
| `docs` | Source limits and reusable design rules |
| `.github/workflows` | Checks, Storybook deployment and versioned releases |

## Review and release

Use a branch and pull request for component changes. Checks run on pull requests and main-branch changes. Successful main-branch checks deploy the current development catalogue to GitHub Pages. [Contributing](CONTRIBUTING.md) describes the component and release process.

Release **0.5.1** starts source-backed developer releases. The earlier 0.5.0 tag records the initial archive distribution; its editable source is the named source ZIP in that release's assets. Existing downloads stay unchanged. The [shared 0.5.0 review catalogue](https://croma-figma-ds.bombaydc-3738.chatgpt.site) remains available separately.

Original Figma specifications take priority. Prototype extensions have separate implementation contracts. Full-system visual acceptance remains incomplete; builds and passing tests do not establish stakeholder sign-off.

No blanket open-source licence is asserted. Croma branding, artwork and supplied fonts retain their existing rights and notices. The raw Figma archive, private extraction corpus and credentials are excluded.
