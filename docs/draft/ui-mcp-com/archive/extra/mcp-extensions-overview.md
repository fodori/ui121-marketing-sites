# MCP extensions overview

- **Source:** https://modelcontextprotocol.io/extensions/overview
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** the Apps docs linked from source 03, and the extensions system described in sources 06 and 08

## Summary

Extensions are optional additions that stay out of the core spec until they earn a place. They can be modular, industry-specific, or experimental. Identifiers look like `{vendor}/{name}`. Official ones use `io.modelcontextprotocol`. A third party should use a reversed domain they own, Java-style, so names do not collide.

Official repos use an `ext-` prefix. The page groups authorization extras (OAuth client credentials for machine-to-machine, and enterprise-managed authorization through an identity provider), MCP Apps (inline charts, forms, video), Tasks (async work with polling and durable handles), and Skills (discover agent-skill instructions and files as resources). Experimental repos use `experimental-ext-` and must belong to a working group or interest group, label themselves experimental, and can be archived by core maintainers.

Graduation is a SEP on the extensions track: a proposal, at least one reference implementation in an official SDK, core-maintainer review, then a published repo. Specs use RFC 2119 keywords. SDKs may ignore extensions; support is opt-in and off by default. Extensions version on their own. Breaking changes need a new identifier. Prefer capability flags inside the settings object when possible.

Negotiation is explicit. Clients list extensions inside client capabilities on each request. Servers list them on `server/discover`. The UI example identifier is `io.modelcontextprotocol/ui`, with a mime type setting of `text/html;profile=mcp-app`. If only one side supports an extension, the other falls back or rejects. The documented fallback for UI tools is still to return useful text.

## Key facts

- Apps extension id: `io.modelcontextprotocol/ui`.
- Other official families: auth extras, tasks, skills.
- Off by default; both sides must advertise support.
- Lifecycle: SEP, reference SDK, review, publish.
- UI MIME cited: `text/html;profile=mcp-app`.

## How it works

A client says which extensions it implements. A server says which it offers. Only the intersection is used. MCP Apps are one extension among others, which is why a server can ship interactive HTML without every MCP client in the world implementing it on day one, and why text results remain mandatory.

## Implications for ui-mcp.com / ui121

ui-mcp.com should speak “extension,” not “fork.” The interface is `io.modelcontextprotocol/ui`, negotiated, optional, and paired with text. That is a safer enterprise sentence than “we replace the chat UI.” Skills and tasks are adjacent: a ui121 flow might be a skill the agent reads and a task the server runs, with an App as the human step. Third-party extension names are a warning not to invent a private `ui121/` protocol if the official UI extension already exists.
