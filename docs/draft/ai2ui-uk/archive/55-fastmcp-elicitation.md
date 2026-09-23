# FastMCP elicitation, two protocol eras

- **Source:** https://gofastmcp.com/servers/elicitation
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

FastMCP’s elicitation guide is really two guides, and mixing them is the bug. In the handshake era through 25 November 2025, `ctx.elicit()` pauses inside a tool. The user can accept, decline, or cancel, and accepted calls carry data. In the modern era aligned with the 28 July 2026 MCP spec, the project removed server-initiated mid-call requests. The notes point at SEP-2322 and at the statelessness work in SEP-2575. A tool now returns a guard that describes what it needs. The client calls the tool again with the answer. Calling `ctx.elicit()` on a modern session, or returning a guard on a handshake-era session, raises an error that names the era mismatch. Code that must support both branches on the request’s protocol version.

The schema story matches the rest of the ecosystem: elicitation forms are a limited JSON Schema, flat objects of primitive types, formats, and enums, not arbitrary nested documents. That limitation is why a URL-mode page, or a gateway form that is not bound to the client’s schema subset, still has a job when the question is a refund case, a diff, or a multi-party approval rather than three booleans.

The page is library documentation, not a spec. Behaviour of `ctx.elicit` and the guard pattern should be re-checked against the FastMCP version you ship, because the era split is the whole point of the article.

## Key facts

- Handshake era, through 2025-11-25: `ctx.elicit()` pauses mid-tool. Actions: accept, decline, cancel. Data on accept.
- Modern era, 2026-07-28 spec: no server-initiated mid-call elicit. Tool returns a guard. Client retries with the answer. Cited: SEP-2322, SEP-2575.
- Wrong-era calls raise a clear error. Branch on protocol version.
- Schema: flat object, primitives, string formats, enums. Not a general JSON Schema.
- Library: FastMCP (gofastmcp.com).

## How it works

On an old client, the tool calls elicit, the session blocks, and the action comes back on the same invocation. On a new client, the tool returns immediately with a description of the missing input. The host renders that description, collects the answer, and issues another tool call whose arguments include the user’s content. The server must be idempotent across that second call. Decline and cancel are still outcomes the tool has to handle; they are not exceptions to ignore.

## Implications for ai2ui.uk / ui121

The guard pattern is a durable ask without holding the MCP session open, which matches a hosted page better than a paused socket. ai2ui.uk can be where the guard’s “what I need” becomes a URL the human opens, and the second tool call is what resumes after the page is submitted. The schema subset is the wedge: IDE clients will render flat fields; a gateway page can show the case file and still return a small structured payload the tool accepts. Document the era split so integrators do not copy a 2025 snippet onto a 2026 server. Marketing line: MCP moved elicitation out of the live call, which is exactly when a separate human product becomes useful.
