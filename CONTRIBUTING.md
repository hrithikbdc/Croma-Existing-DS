# Contributing to Croma DS

Use Node 22.12 or newer and npm. Clone the repository, run `npm ci`, then `npm run dev`.
Create a branch for a change and open a pull request against `main`.

## Component changes

1. Read the component's source evidence and the rules in `docs/FIGMA-DESIGN-HYGIENE.md`.
2. Update shared components in `packages/figma-ds/src` and shared tokens in `packages/figma-foundations`.
3. Add or update Storybook examples for the affected states, including dark surfaces and narrow widths.
4. Add a meaningful behavior regression when behavior changes. Keep original Figma components separate from prototype extensions.
5. Run `npm run verify`. Include the affected stories, source basis, changes and actual checks in the pull request.

Do not use prototype-specific CSS to disguise a missing shared rule. Do not change original artwork bytes or assert visual acceptance from a passing build. Never add the raw Figma archive, credentials, personal files or the private extraction corpus to this repository.

## Releases

Component changes and repository changes use semantic versions. A patch version can correct behavior or developer tooling without adding a component API. Update the root and all four workspace versions together, refresh `package-lock.json`, and update `CHANGELOG.md` and `RELEASE-NOTES.md` in the same pull request.

After the main branch passes checks, run **Actions → Publish release → Run workflow** with the matching version. The workflow rebuilds and tests, packages the exact commit, creates its version tag and publishes the packages, source, Storybook and checksums. Existing releases are never overwritten. The earlier 0.5.0 tag is the initial archive distribution checkpoint; 0.5.1 starts the source-backed developer repository releases.

Storybook deploys to GitHub Pages after checks pass on `main`. Pull requests run the same checks but do not replace the public Storybook. The existing shared 0.5.0 catalogue remains a frozen review reference until separately updated.

## Package registry

The release archives support ordinary `npm install` over HTTPS without signing in or downloading files manually. The package names resolve to `@croma/figma-ds` and `@croma/figma-foundations` inside the project.

These packages have not been published to npmjs.com. Publishing under `@croma` requires that scope's owner to grant access. Do not claim ownership of Croma's namespace or rename imports silently. An authorised npm account and confirmed namespace are needed before adding registry publishing. GitHub Packages also requires separate client authentication; it is not used for anonymous installation here.
