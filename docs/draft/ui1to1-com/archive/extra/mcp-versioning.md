# MCP — Versioning

- Source: https://modelcontextprotocol.io/docs/2026-07-28/learn/versioning
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

MCP versions are dates (`YYYY-MM-DD`) marking the last backwards-incompatible change. Compatible edits do not bump the version, so the protocol can improve without a flag day. Revisions are draft (not ready), current (usable, still allowed to grow compatibly), or final (frozen). The page states the current version is 2026-07-28.

Features can be deprecated while remaining in the spec, with a migration note, for at least twelve months, or ninety days in an expedited case, before removal. Negotiation is per request: the client sends `io.modelcontextprotocol/protocolVersion` in `_meta` (and, on streamable HTTP, an `MCP-Protocol-Version` header). If the server cannot speak that version it returns an unsupported-version error listing what it does support. `server/discover` can be called first to read versions and capabilities; it is optional. Older handshake-based revisions (2025-11-25 and earlier) have a separate compatibility note.

## Key facts

- Version id format: `YYYY-MM-DD`. Current named on the page: 2026-07-28.
- States: draft, current, final. Feature states include deprecated, then removed.
- Deprecation window: generally 12 months, 90 days if expedited.
- Clients and servers may implement several versions at once.
- Discovery is optional; a direct call can fail and be retried on a shared version.

## How it works

Every call declares the version it assumes. The server accepts or rejects that call alone, which matches the stateless design. A client that wants to choose up front asks for discovery. A client that guessed wrong reads the error and retries. Final specs stay as historical documents. Deprecated features stay callable during the window so hosts and servers can move without a hard break.

## Implications for ui1to1.com / ui121

A one-to-one canvas that agents call through MCP has to tolerate more than one protocol date in the wild. ui121’s human surface should not break because a server is a revision behind. The product implication is boring and useful: version the integration, keep the person’s interface stable. Human-in-the-loop requests (elicitation, approvals) are features that can be deprecated on a clock; the canvas should depend on the durable idea — a typed ask and a typed answer — not on one revision’s method name.
