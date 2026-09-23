# A2UI protocol v0.9.1 (current production)

- Source: https://a2ui.org/specification/v0.9.1-a2ui/
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 03 (a2ui.org docs hub)

## Summary

v0.9.1 is marked as the current production release. The document header dates creation at 20 November 2025 and the last update shown at 3 December 2025. It is a JSON streaming UI protocol: the client reads a sequence of JSON objects and builds the interface incrementally. Server-to-client message types are createSurface, updateComponents, updateDataModel, and deleteSurface.

v0.9’s philosophical change, which 0.9.1 inherits, is prompt-first. v0.8 targeted models with structured output. v0.9 is meant to be pasted into a prompt as schema and examples, which allows a richer catalog than provider structured-output limits, and splits the schema into modules (common types, basic catalog, server-to-client). The cost is that the model is not hard-constrained, so the client must validate, repair, or ask for a retry. The spec calls itself a living document generated from the markdown in the repository.

The flow is deliberately simple. Create the surface. Send one or more flat component lists. Send data at any time after creation. The client renders. Later messages patch structure or data. deleteSurface removes the region. User actions are a different channel and may cause a new burst of messages. The spec’s sequence diagram uses a submit action with context as that return path.

Transport is not prescribed. Requirements: in-order delivery (stateful updates corrupt if reordered), framing so each JSON envelope is one message (JSONL newlines, WebSocket frames, or SSE), metadata for data-model echo and capability exchange, and an optional return path for actions. A2A maps each envelope to a message part, puts client data model and capabilities in metadata, and uses contextId as the session. AG-UI is named as the other natural binding because it already has low-latency shared state and many framework connectors. Other transports are allowed if they meet the contract.

The adjacency-list section repeats the components concept: flat list, ID references, one root, buffer until root exists, skip bad references, render progressively. surfaceId is a meaningful unique name inside the session. updateComponents is only valid after createSurface. Children or bindings may refer to things that do not exist yet; placeholders are required, not optional.

MIME type standardisation on `application/a2ui+json` and relaxed surfaceId rules are the homepage’s summary of what 0.9.1 changed relative to 0.9; the evolution guide is the detailed diff. Apache 2.0 applies to the project.

## Key facts

- Status: current production. Version 0.9.1. Header dates: created 20 Nov 2025, updated 3 Dec 2025.
- Four server-to-client messages: createSurface, updateComponents, updateDataModel, deleteSurface.
- Prompt-first: validate after generation; structured output is no longer the constraint.
- Transport contract: ordered, framed, metadata, optional actions back.
- Bindings: A2A and AG-UI called out; others allowed.
- Composition: adjacency list, single root, progressive placeholders.
- MIME called out on the homepage for this version: application/a2ui+json.

## How it works

An agent prompt includes the catalog and examples. The model emits JSONL. A validator checks it. The renderer applies messages in order onto a surface bound to a catalog the client trusts. Interactions return as actions with path-resolved context. The host never evaluates model code. Styling is the renderer’s theme, not a CSS payload.

Section outline of the spec: introduction; changes from v0.8; data flow; transport contract and A2A/AG-UI bindings; message reference including updateComponents and the adjacency list; catalogs and validation behaviour (remainder of the living spec).

## Implications for generatedui / ui121

If ui121 emits a declarative payload, v0.9.1 is the production dialect to be compatible with, not the v0.8 lab dialect and not the v1.0 candidate, until hosts say otherwise. Gemini Enterprise and Oracle’s browser adapter already bracket this range. Prompt-first validation is a product feature: show a repair or a fallback block when the model’s JSON fails, rather than painting garbage. The transport contract means ui121 can carry A2UI over its existing MCP or AG-UI session as long as order and framing hold.
