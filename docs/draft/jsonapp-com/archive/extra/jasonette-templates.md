# Jasonette templates

- Title: Jasonette templates
- Source URL: https://jasonelle-archive.github.io/docs/legacy/templates/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 05

## Summary

Templates exist because the JSON on the server is not always the JSON on screen. The client may need to paint local input, a third-party API result, or a mix. Templates are declared under `$jason.head.templates`. The common one is the body template. Slots are `{{ }}`. The engine evaluates them with the native JavaScript runtime, so a slot can be a property (`{{$jason.username}}`), any expression (`JSON.stringify`), or a function body that ends in `return` (the page sorts posts by date inside a slot). Templates also support `#each` loops and `#if` / `#elseif` / `#else`.

The data in scope includes the action result (`$jason`), local gets, and, when arriving from another view, `$params` (see the href note). The point of the chapter is to keep one view description and fill it, rather than asking the server to pre-render every row.

## Key facts

- Declaration site: `$jason.head.templates`, usually a `body` template.
- Slot syntax: `{{ }}`, evaluated as JavaScript, including full functions with `return`.
- Control structures: `#each`, `#if`, `#elseif`, `#else`.
- Used for local input, remote payloads, and values passed from the previous view.

## How it works

The document stores a template with holes. When data arrives, the runtime evaluates each slot and produces concrete component JSON, then renders that. Loop slots expand one template item per element. Conditionals include or drop branches. Because evaluation is real JavaScript, the template is powerful and is also a sandbox problem: it is code inside the data format.

## Implications for jsonapp.com / ui121

Binding is required in any JSON UI, but embedding a JavaScript engine in slots is the opposite of a safe AI-written document. ui121 should keep binding declarative (paths, formats, visibility rules as data) and leave computation on the server or in a locked expression subset. The useful idea to keep is the split: a stable view template plus a data payload, which is also how Adaptive Cards templating works.
