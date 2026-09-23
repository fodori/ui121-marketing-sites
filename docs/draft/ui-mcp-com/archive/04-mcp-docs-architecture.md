# MCP architecture overview

- **Source:** https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The architecture page (2026-07-28) limits MCP to context exchange. It does not tell an application how to run a model or how to manage the context it receives. The project scope is the specification, language SDKs, developer tools such as the MCP Inspector, and reference servers.

Participants are a host, clients, and servers. The host is the AI application (Claude Code, Claude Desktop, Visual Studio Code). The host creates one client per server connection. A local stdio server usually serves one client. A remote server on Streamable HTTP can serve many. The page’s example is VS Code connecting to Sentry (remote) and to a filesystem server (local), with a separate client object for each.

Two layers sit on top of each other. The data layer is JSON-RPC 2.0: discovery, tools, resources, prompts, and notifications. The transport layer is either stdio (no network, best for a local process) or Streamable HTTP (HTTP POST, optional server-sent events, bearer tokens, API keys, custom headers; OAuth is the recommended way to get tokens).

The 2026-07-28 revision is stateless. Every request carries protocol version and capabilities in `_meta`, and clients should identify themselves there. Servers must implement `server/discover`, whose response can be cached (the example uses a one-hour public TTL). Listings of tools, resources, and prompts can change at runtime. Clients opt into change notifications with a long-lived `subscriptions/listen` stream.

Server primitives: tools (actions), resources (context data), prompts (templates). Client-side elicitation asks the user for more input through a multi-round-trip pattern. Sampling and logging are deprecated in this version; new servers should call model APIs directly and log to stderr or OpenTelemetry. Optional extensions include Tasks, which return a durable handle for long-running work.

## Key facts

- Host creates one MCP client per server connection.
- Transports: stdio (local) and Streamable HTTP (remote).
- Protocol is stateless as of 2026-07-28; discovery is `server/discover`.
- Core server primitives: tools, resources, prompts.
- Elicitation remains; sampling and logging are deprecated in this version.
- Example cache hint on discovery: `ttlMs` 3600000, `cacheScope` public.

## How it works

The host asks each connected server what it offers, then folds those tools into the model’s available actions. A tool call is a JSON-RPC request. The server runs the action and returns a result. If the tool set changes, the server can notify clients that subscribed. UI is not defined on this page; it arrives as an extension that reuses the same tool and resource primitives.

## Implications for ui-mcp.com / ui121

ui-mcp.com should describe the host as the place a person already chats, and the server as the place a designed interface is registered. Because one host can attach many servers, a ui121 interface server can sit beside GitHub, a database, or a design tool without replacing them. Stateless discovery and cached server identity matter for a product that many AI apps connect to: the interface catalog can be advertised once and reused.

Sibling notes: `extra/mcp-server-concepts.md`, `extra/mcp-client-concepts.md`.
