# A2UI protocol v1.0 (release candidate)

- Source: https://a2ui.org/specification/v1.0-a2ui/
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 03 (a2ui.org docs hub)

## Summary

v1.0 is a release candidate, previously drafted as v0.10. The spec tells production users to stay on v0.9.1 for now. Header dates: created 20 November 2025, last updated 8 June 2026. The base story is unchanged: a stream of JSON, structure separated from data, progressive rendering. The agent-to-renderer messages listed in the introduction are still createSurface, updateComponents, updateDataModel, and deleteSurface. End of turn is left to the transport.

What 1.0 adds, in the spec’s own summary:

- Bidirectional RPC. The client can set wantResponse on an action, with an actionId, and the server answers with actionResponse containing either a value or an error (code plus message). The evolution guide also describes callRendererFunction / rendererFunctionResponse and callAgentFunction / agentFunctionResponse, checked against catalog allowedCallers, so functions are not an open eval.
- A single createSurface can carry the initial component tree and data model, so a small UI need not be three round trips.
- Theme colors inside the surface schema go away. surfaceProperties replaces theme. Brand color is the host’s job.
- Catalog functions are maps for direct lookup, and inline catalogs may use standard JSON Schema metadata.
- Names follow Unicode identifier rules. The `@` namespace is reserved for system context such as `@index`.

The evolution guide (linked from this spec) says catalogs must declare `"protocolVersion": "1.0"`. Renderer packages called out in the renderer guide include `@a2ui/web_core/v1_0`. Client capabilities must expose surfaceProperties rather than theme. A2A messages that carry v1.0 still put a2uiClientCapabilities in metadata.

An actionResponse example on the spec: the client asks for typeahead suggestions with wantResponse true and an actionId; the server returns that same actionId and a value array. Exactly one of value or error is present.

## Key facts

- Status: release candidate, not the production default. Updated 8 June 2026.
- New reply: actionResponse keyed by actionId. wantResponse defaults false.
- surfaceProperties replaces theme. No hardcoded primary brand color in the surface schema.
- createSurface may embed the initial tree and data.
- Function calls are catalog-checked, with distinct renderer-bound and agent-bound messages.
- Production advice printed on the spec: use v0.9.1 until you are ready for the candidate.

## How it works

The v0.9.1 stream still builds the surface. When a widget needs a synchronous answer — suggestions, a calculation, a confirmed slot — the client sends an action with an ID and waits for actionResponse instead of hoping the next surface update implies the answer. The host checks that the function is in the catalog and that the caller is allowed. Visual tokens stay in the native theme.

## Implications for generatedui / ui121

actionResponse is the feature that makes a block feel like software: a typeahead, a price check, an approval, with a typed result or a typed error. ui121 should plan for it, and ship against v0.9.1 until the hosts ui121 cares about (Gemini Enterprise, custom AG-UI clients) mark v1.0 current. surfaceProperties is a brand win: the protocol stopped pretending the agent picks the primary color. That is the sentence for generatedui — the design system stays yours, including in the next spec version.
