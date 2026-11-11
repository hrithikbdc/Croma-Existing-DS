# Actual Figma DS catalogue

This app documents the source-derived library in `packages/figma-ds` and captured foundations in `packages/figma-foundations`. It does not import the older website-derived `@croma/web-ui` package.

From the repository root:

- `npm run figma:storybook` starts the catalogue at port 6020.
- `npm run figma:build-storybook` produces the static catalogue.
- `npm run figma:dev` starts the component integration example at port 5182.

Stories show source names, source links, supported configurations and review limits. A rendered story is not an acceptance receipt. Exact source values and rendered comparison require separate evidence. Written specifications are authoritative over saved styles/components. The user-supplied Switzer Variable font is now loaded; source sizes, weights, line heights and tracking are retained.

When adding components, include interactive stories and meaningful source-state galleries. Do not invent unsupported combinations. Layout stress examples are labelled separately from Figma variants. The consumer app owns mock data and workflow state.

Local review links when their servers are running: [Storybook preview](http://127.0.0.1:6021/) and [prototype](http://127.0.0.1:5184/). These addresses are local to this machine.

The catalogue includes a gallery for each implemented component family, state controls, long-content fixtures and a source-to-computed-property acceptance report. Source specifications and individual gaps remain visible. See [verification](VERIFICATION.md) for the checks actually performed. Component behaviour and readable layout were reviewed; exact visual DS acceptance is still unresolved where the written values are missing.

The independent acceptance page is included in the production build at `acceptance.html`. Build the prototype, serve its output, and run `CROMA_ACCEPTANCE_URL=http://127.0.0.1:5184 PLAYWRIGHT_BROWSERS_PATH=/private/tmp/croma-web-playwright node apps/figma-storybook/acceptance/review-browser.mjs` from the repository root. This uses the existing local browser installation; another machine can omit the browser-path override. Run `node apps/figma-storybook/acceptance/summarize.mjs` after verification to refresh the catalogue’s evidence table. Raw observations, source citations, registry hash, CSS-normalization rules and remaining unmeasured declarations are retained in `acceptance/results.json`.

Runtime freshness is independent of the written-value registry. The acceptance report records sorted per-file SHA256 hashes and an aggregate fingerprint before and after review. Its53-file scope includes component source and public dist JS/CSS, foundation runtime, fixture inputs, built prototype HTML/JS/CSS/fonts, manifests/lockfile and relevant build/test scripts. Reports and screenshots are excluded from that scope. A changed fingerprint fails the run.

Source policy changed on 4 November 2026: written specifications remain first. Saved styles, main-component properties and original artwork from the same supplied Figma file may fill unwritten gaps when exact bindings, IDs and state scope are inspected. The 279-rule written-only report is historical and archived under acceptance/history/written-only-2026-11-03. New source-bound colour, effect, typography and asset checks are in progress.

## Prototype preview checkpoint — 4 November 2026

The opening page links directly to the23 local Button variants, the linked guide family, Segmented control, seven Form Field states and working prototype. Button native hover, pressed, click, Enter and Space interactions passed; disabled actions remained inert. The320px galleries and long-label example did not overflow. Radio dark/light source artwork and disabled Checkbox feedback were visually reviewed. Tabs measured48px height with8px horizontal padding and16/24 typography; arrow navigation skipped disabled options. No browser errors occurred in this focused check. These observations do not establish complete visual acceptance of every library family. The guide Filled/Small/dark label is intentionally purple (#2b0052), confirmed by fresh Figma context for245:36065; it differs from the Large case.

The final visible Segmented width mismatch was corrected: the production control measures310×32px, with two150×28px options atx4 andx156. At320px viewport it shrinks to272px without page overflow. Final static build includes the six Dropdown states and source artwork, latest Tabs/Radio/Checkbox bindings, badge colours and Dropdown placement corrections. Storybook serves130 stories plus2 documentation entries.

The next preview checkpoint adds Menu and chip source examples, plus a single-case Tooltip selector for all52 source tuples. Menu rows now have source styling instead of native button chrome; selection, nested disclosure and320px layout passed. Input chips use original Close artwork, remove with Space, and keep the16px close control visible with long text at320px. Choice chips expose five authored states in both themes and support native arrow selection. Fresh live source copy is “Info chip” and “Input chip”; the earlier projected “Label” text was a cached-main value and must not establish current instance copy. Info/Choice inside-stroke spacing is being corrected separately; no whole-family acceptance is claimed from this checkpoint. Tooltip source preview renders one variant at a time and supports focus/Escape dismissal.

Fresh source contexts resolved the chip-copy width question: the current figures say “Info chip” and “Input chip”; these strings are now used in the source galleries. With temporary Inter, they measure87.69×28px and113.64×32px before the pending Info inside-stroke correction. Source Switzer widths are82px and110px. Info text was independently measured atx17 because a standard1px CSS border consumed layout space; source padding is16 with an inside stroke, so the component agent is moving that stroke to an overlay. This is separate from the approved font substitution.

The inside-stroke fix was verified in the refreshed production preview: Info text starts at16px, padding is6px by16px, height remains28px and hug width is85.69px with temporary Inter. Choice rows remain32px with6px by16px padding and arrow selection still works. The final refresh also includes Tooltip’s long-copy viewport scrolling adjustment; the main reviewer owns its52-variant geometry check and final long-copy review.

The latest usable preview includes the Account drawer’s nine original rows and icons, three Popup modes, two Sheet modes, Chat’s original conversation and composer, four Steppers references and six Divider references. Focused browser checks passed for Chat Enter/send/close/reopen, Search clear/Enter, Accordion keyboard expansion, drawer Tab trap/Escape/scrim/focus return, and Popup/Sheet close/focus return. At320px, Popup and both Sheet modes fit without horizontal overflow; the drag handle dismisses its sheet and Fullscreen fills320×650. Original Card media loads in its source example.

A visible Footer defect at320px was fixed: the price area now flexes to126px and the CTA remains138×48px, keeping the footer72px tall. At the source390px width, price196px/CTA138×48px/footer72px remain unchanged. The Header remains a separately labelled image reference plus an unaccepted code composition helper. Search artwork is an approved same-file main-art composition with its current instance font conflict retained in the source manifest; it is not an exact effective-font-glyph acceptance claim.

Final static preview checkpoint:157 stories plus2 documentation entries are served at6021; the prototype is served at5184. Both builds passed. Search native caret colors were checked as#CB92FF dark and#8800EC light. Popup, both Sheet modes, Fullscreen and original Card media passed the focused320px layout checks. This checkpoint covers the rendered examples and native interactions described above; it does not mark every DS component as fully accepted.

Switzer supplied4November2026: bundled originalTTF, weights100–900. Browser font responses in both apps matched the supplied file SHA256; computed families are Switzer and all three consumer tests passed after the replacement. Earlier Inter review notes below remain historical.
