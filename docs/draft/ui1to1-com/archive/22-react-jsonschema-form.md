# react-jsonschema-form

- Source: https://github.com/rjsf-team/react-jsonschema-form
- Fetched: 2026-09-23
- Status: ok

## Summary

react-jsonschema-form (rjsf) is the mainstream open-source proof that a form can be a React component driven by JSON Schema instead of hand-built fields. The repository describes a simple component that declaratively builds and customises web forms from a schema. On 23 September 2026 the GitHub page showed about 15,903 stars. The README badge identifies the license as Apache 2.0. This note paraphrases; it does not copy the README. The Apache 2.0 terms allow reuse with attribution and the usual notice requirements; body text below is still a paraphrase.

The project’s public surface is a docs site and a live playground on GitHub Pages, plus issue tracking for bugs and features. Themes in the README span Ant Design v5, Bootstrap 3 (core), Chakra UI v3, Daisy UI v5, Fluent UI v9, Mantine, Material UI v7, React-Bootstrap (Bootstrap 5), Semantic UI v2, and shadcn. Shared libraries called out are `@rjsf/utils` and validators for AJV8, ATA, and Cloudflare workers. Documentation is a Docusaurus site. Tests are credited to BrowserStack. The GitHub page itself is a repository home, not an article index. It links to a separate docs site; that docs hub was not expanded here because the collection budget was used on the Model Context Protocol docs linked from source 33.

## Key facts

- Repository: rjsf-team/react-jsonschema-form. About 15,903 stars at fetch.
- License stated on the README badge: Apache 2.0.
- Mechanism: JSON Schema in, React form out, with theme packages for major design systems.
- Validators named: AJV8, ATA, Cloudflare worker validator; utilities in `@rjsf/utils`.
- Docs and playground: `https://rjsf-team.github.io/react-jsonschema-form/docs` and the playground root on the same host.
- Themes listed include Material UI v7, Ant Design v5, Chakra, Mantine, Fluent, shadcn, Bootstrap 3 and 5, Daisy UI, Semantic UI.

## How it works

A developer supplies a JSON Schema that describes the data: types, required fields, and constraints. The library walks that schema and renders the matching inputs, validation, and error state. A theme package swaps the widgets for a design system without rewriting the schema. Validators check the data against the schema before submit. Customisation is component replacement and UI schema hints, so the data description stays separate from the look. The playground is where a schema can be edited and the form seen immediately. The result is a form that can change when the schema changes, without a new hand-laid screen for every field set.

## Implications for ui1to1.com / ui121

rjsf is the citation that data-described UI is already normal — for forms. ui1to1.com can say JSONUI generalises that idea from a form to a full canvas: pages, charts, messages, and decisions as a description the server sends per person. One-to-one UI is what you get when that description is not one schema for every user, but a schema assembled for this user, this role, and this moment, rendered by a known component set the way rjsf renders a known theme.

Apache 2.0 is the license to record if any structure from the project is reused; this note does not lift README prose. The human-in-the-loop link is direct: a JSON-described form is how a workflow asks a person for a real answer instead of sending an email. rjsf shows the form half. A universal canvas is the same contract for everything else that must stay live and connected.

License: Apache License 2.0, as badged on the project README. Attribution: rjsf-team/react-jsonschema-form.
