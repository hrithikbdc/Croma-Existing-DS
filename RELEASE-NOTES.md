# Croma DS 0.5.1

11 November 2026. Developer distribution and repository improvements; component designs are unchanged from 0.5.0.

## Changes

The repository now contains editable foundations, React components, original artwork, Storybook stories, prototype examples and regression tests. Clone it and run `npm ci` then `npm run dev`. Main-branch changes build and test before Storybook deploys to GitHub Pages. Pull requests run checks without replacing the public catalogue.

The release workflow packages the exact verified commit and publishes both installable TGZs, editable source ZIP, static Storybook ZIP, changelog, release notes, manifest and SHA256 checksums. Existing releases are not overwritten. The package verification cache now uses the operating system temporary directory instead of a Mac-only path.

## Use in prototypes

Install both matching packages directly from the versioned release URLs using the command in README.md. React and React DOM 19 are peer requirements. Import all four DS stylesheets and use PrototypeTheme around the full page. No npm registry account is needed for the GitHub package URLs. Named npmjs.com distribution is not configured.

## Acceptance scope

The release workflow requires component builds, consumer builds, TypeScript, source-literal and package-boundary checks, Storybook build and the component/consumer browser suites to pass before publishing. Consult the successful workflow run for observed outcomes. A planned workflow is not evidence of a successful run.

Original Figma visual acceptance remains incomplete. These repository changes do not establish 100% visual acceptance or verify access from Croma's managed network. Older frozen releases and the existing 0.5.0 shared catalogue remain unchanged.
