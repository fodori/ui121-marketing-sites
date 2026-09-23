# A2UI data flow

- Source: https://a2ui.org/concepts/data-flow/
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 03 (a2ui.org docs hub)

## Summary

The data-flow page is the lifecycle, with a booking surface as the running example. In v0.9 the server first sends createSurface with a surfaceId and a catalogId (the basic catalog URL is the example). Then updateComponents sends the flat list: a root column, a header, a guests field, a submit button, and so on. Then updateDataModel writes values at a path such as `/reservation`. The field’s value is not a literal baked into the component; it is a path into that model. The button’s action carries a name and a context that also points at a path, so the click submits structured state, not a new sentence.

The page shows the older v0.8 envelopes beside this so readers can see the rename. Order is not rigid, but the surface has to exist before component and data updates apply. The client renders from whatever has arrived. User actions leave the client on a return channel and typically cause further updates. Transports discussed from the overview include SSE, WebSockets, and A2A. Errors and progressive rendering are part of the same story: invalid references wait or show placeholders rather than aborting the stream.

## Key facts

- v0.9 sequence: createSurface (catalogId), updateComponents, updateDataModel.
- Bindings are paths (JSON Pointer style), not copied strings.
- Actions carry a name plus context bound to paths.
- Catalog example referenced: the v0.9 basic catalog JSON on a2ui.org.
- v0.8 equivalents remain documented for migration.

## How it works

Structure and state are different messages. The renderer subscribes to both. A data change at `/reservation/guests` updates the field without a new layout. A click resolves the bound context and emits an action. The agent replies with more component or data messages, or deletes the surface when the region is done. Because the catalog ID is chosen up front, the client can reject unknown component names before paint.

## Implications for generatedui / ui121

This is the interaction loop to draw on a product page: catalog chosen, blocks streamed, values bound, the user’s action returns data, the surface updates. ui121 forms should bind to a data model the MCP tool already understands, so approve/submit is a tool call with those paths, not a blob of HTML form state. Separating layout from values is also how a branded renderer stays stable while numbers change.
