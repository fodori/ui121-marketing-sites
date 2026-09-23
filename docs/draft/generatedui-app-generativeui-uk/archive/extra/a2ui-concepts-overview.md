# A2UI core concepts

- Source: https://a2ui.org/concepts/overview/
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 03 (a2ui.org docs hub)

## Summary

The concepts overview is the short architecture page behind the A2UI homepage. It says the protocol rests on three ideas: UI updates are a stream of JSON messages, components are declarative data rather than code, and structure is bound to application state so updates can be reactive without redrawing the whole tree from scratch.

The page is mostly a map. Data flow covers the booking lifecycle, transports (SSE, WebSockets, A2A), progressive rendering, and errors. Component structure covers the adjacency list, static versus dynamic children, and incremental updates. Data binding covers JSON Pointer paths, reactive components, dynamic lists, and input bindings.

Message types are tabulated by version. v0.8: surfaceUpdate, dataModelUpdate, beginRendering, deleteSurface. v0.9: createSurface, updateComponents, updateDataModel, deleteSurface, with a version field on messages, and createSurface replacing both beginRendering and the old implicit surface creation. v1.0 adds actionResponse so the server can answer a client action as a synchronous-style RPC. The page points at a glossary and a message reference for the full shapes.

## Key facts

- Three ideas: streaming messages, declarative components, data binding.
- v0.9 message set: createSurface, updateComponents, updateDataModel, deleteSurface.
- v1.0 adds actionResponse.
- v0.8 message set: surfaceUpdate, dataModelUpdate, beginRendering, deleteSurface.
- Child pages linked: data flow, components, data binding.

## How it works

The agent streams versioned JSON. The client creates a surface against a catalog, applies component updates as a flat list, and applies data updates at a path. Rendering is the client’s job. In v1.0 a client action can ask for a response and the server sends actionResponse rather than only pushing a new surface. Progressive rendering falls out of the stream: the client paints what it has.

## Implications for generatedui / ui121

Marketing should use the v0.9/v1.0 verbs (create a surface, update components, update data, answer an action), not the older beginRendering trio, except when citing a specific lab. The three ideas are the product sentence: stream data, declare blocks, bind values. ui121’s catalog is the thing createSurface points at.
