# Croma React Storybook

The public developer guide is https://hrithikbdc.github.io/Croma-Existing-DS/?path=/story/developers-start-here--installation. It contains versioned GitHub installation, complete CromaProvider setup, component choices, public React API pages and request/form examples. No private Space login or local-machine path is required.

From the repository root, with Node 22.12+ and npm:

```sh
npm ci
npm run dev
```

Open http://localhost:6020. Use `npm run build:storybook` to build and `npm run figma:preview-storybook` to serve the static build at http://localhost:6021. `npm run figma:dev` starts the consumer example at http://localhost:5182.

`npm run build:storybook` regenerates the API pages from the public TypeScript declarations and checked-in React examples. Update `developer/examples.tsx` for a public component change; `scripts/build-developer-docs.mjs` rejects a missing public component example. All examples are typechecked. The generated files are checked in so reviewers can inspect the exact release.

The Component theme toolbar controls inherited Theme; Preview background changes only the surrounding canvas. Explicit source variants and fixed artwork retain their original appearance. Every React API page includes its source/extension boundary and current visual-acceptance limit.

API and forms uses MSW for fictional same-origin HTTP responses. The application adapter owns requests, validation, retry and stable product identity; the DS package has no Express or pipeline dependency. Mock handlers are Storybook-only.

Run `npm run verify` for the release checks. See the [root README](../../README.md), [contribution guide](../../CONTRIBUTING.md) and [source verification](../../docs/FIGMA-VERIFICATION.md) for current commands and boundaries. Historical acceptance records remain evidence of their dated checks; they are not current acceptance receipts. Full original-Figma visual acceptance remains incomplete.
