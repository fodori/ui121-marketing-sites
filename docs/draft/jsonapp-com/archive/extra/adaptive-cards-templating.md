# Adaptive Cards templating

- Title: Adaptive Cards templating overview
- Source URL: https://learn.microsoft.com/en-us/adaptive-cards/templating/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 17

## Summary

Templating separates an Adaptive Card’s layout from its data. The page, including a May 2020 release-candidate note, gives three reasons. You can design a card once in the designer and fill it later, instead of generating JSON in code and losing the ability to tweak the design. Repeating a card only requires sending new data if the client already has the template, which shrinks payloads. A template service can pick a known layout from data alone, so not every payload needs a hand-written card. The page also says splitting data from presentation lets other services, including AI, reason about the data in the card.

Three pieces: a template language, SDKs that expand a template with data, and a proof-of-concept template service. Binding uses `${...}` (the older `{...}` form was a breaking change in that release candidate). The JavaScript API dropped EvaluationContext; you pass data to `expand`. .NET was aligned to the same shape. The sample is an employee card: photo, name, manager name, and a FactSet of peers driven by `$data` over an array. Sample data in the designer updates the preview live. SDKs named as available at the time of the page: Node (`adaptivecards-templating`) and .NET (`AdaptiveCards.Templating`). Other platforms were promised later. Expansion is `Template` plus `expand` with a `$root` object. The service is described as flat JSON files in a GitHub repo, fetched by HTTP, for example a profile template under templates.adaptivecards.io, and it can try to match a template to data you already have.

## Key facts

- Binding syntax: `${field}`. Array repeat: `$data`.
- Breaking change called out: May 2020, from `{name}` to `${name}`.
- SDKs on the page: JavaScript and .NET. iOS, Android, and UWP listed as future at the time of writing.
- Designer: sample data pane plus preview mode at adaptivecards.io/designer.
- Template service: shared JSON templates in a public repo; GET by template path.
- Stated benefit: smaller wire payloads when the template is reused on the client.

## How it works

Authors write a card with holes. At runtime an SDK combines that card with a data object and emits a normal Adaptive Card, which the host renderer already knows how to draw. Repeat blocks stamp one element per array item. The service is optional: teams can keep templates locally. The expansion step can run on the server or on the client.

## Implications for jsonapp.com / ui121

Template plus data is the right split when the same task UI is filled per user. ui121 already separates model and submitted values; this page is the industry wording for it, including the AI line: once data and layout are separate, a model can reason about the data without rewriting the layout. Prefer a declarative binding syntax over Jasonette’s embedded JavaScript. A shared template library is optional; a schema for one product’s templates is enough.

> "Templating enables the separation of data from the layout in an Adaptive Card."
