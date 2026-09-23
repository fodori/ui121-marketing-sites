# A2UI components and the adjacency list

- Source: https://a2ui.org/concepts/components/
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 03 (a2ui.org docs hub)

## Summary

This concept page explains why A2UI does not send a nested JSON tree. Components are a flat list. Containers point at children by ID. The client stores a map from ID to component and rebuilds the tree when it renders. The page argues that a flat list is easier for a model to emit incrementally, to correct, and to stream, because the model does not have to close a deep bracket structure in one shot.

From v0.9 onward the component object itself is flatter: the component field is a name such as Text, and children are a plain array of IDs. The older v0.8 shape nested the component type as an object key and wrapped children in an explicitList. Static children are a fixed ID list. Dynamic children are how lists follow data. Updates are ID operations: add a new ID, replace properties on an existing ID, or drop an ID from the parent’s children to remove it. There must be a single root (the page and the v0.9 spec both treat the root ID as the anchor). Until that root exists, other updates can be buffered. Dangling child IDs should be skipped or shown as placeholders so partial streams still render.

The generation story on the page, in v0.8 terms, is still: components, then data, then a render signal. Later versions fold the render signal into surface creation. The client always maps the abstract nodes onto native widgets.

## Key facts

- Model: adjacency list, flat components, child references by ID.
- v0.9+ shape: `"component": "Text"` and a children array, not a nested type object.
- One root per tree. Unresolved IDs are placeholders, not hard failures.
- Mutations: add ID, update ID, or detach ID from the parent list.
- Client holds `Map` of ID to component and rebuilds the tree at render time.

## How it works

A container lists child IDs. Those children may arrive in a later message. The renderer walks from root, skips what it cannot resolve, and fills in as definitions land. Changing a label is another component message with the same ID. Changing a value can be a data-model update instead, if the component bound a path. The model never sends a function body.

## Implications for generatedui / ui121

ui121’s block tree should be stored and streamed the same way: flat records, stable IDs, parent or children links, data bound by path. That is what makes “the form appears as it is generated” true without accepting HTML. It also matches syntux’s post-v0.2 schema, which is useful evidence that the flat list is a convergent design, not a Google quirk. Marketing can say the agent edits a block by ID instead of regenerating the page.
