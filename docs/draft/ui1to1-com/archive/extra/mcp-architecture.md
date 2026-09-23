# MCP — Architecture overview

- Source: https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The architecture page says MCP is only the protocol for exchanging context. It does not decide how an AI application uses a model or manages that context. The project scope is the specification, language SDKs, developer tools such as the Inspector, and reference servers.

Participants are a host, a client, and a server. The host is the AI application (Claude Desktop, Claude Code, Visual Studio Code). The host creates one client per server connection. A local server on standard input/output usually serves one client. A remote server on streamable HTTP usually serves many. Visual Studio Code connecting to Sentry and to a filesystem server is their example of two client objects inside one host.

Two layers: a data layer of JSON-RPC 2.0 (discovery, tools, resources, prompts, notifications, progress) and a transport layer (stdio for local processes, streamable HTTP with optional server-sent events, bearer tokens, API keys, or OAuth). The protocol is described as stateless: each request carries version and capabilities in `_meta`, and servers answer `server/discover` with versions, capabilities, and identity. Server primitives are tools (the model invokes them), resources (contextual data), and prompts (templates). Sampling is marked deprecated as of protocol version 2026-07-28. Client features include asking the user for input.

## Key facts

- Host creates one MCP client per server.
- Transports: stdio (local) and streamable HTTP (remote), same JSON-RPC messages.
- Discovery method named: `server/discover`.
- Server primitives: tools, resources, prompts. Utilities: notifications and progress.
- Sampling deprecated in the 2026-07-28 revision.
- MCP does not specify the LLM or the host’s context policy.

## How it works

The host opens a transport, discovers what the server supports, and then exchanges JSON-RPC requests. Tools run actions. Resources supply data. Prompts are reusable instructions the user can invoke. Notifications push changes without a response. Because requests are self-contained, a server is not required to remember the previous call. Authorisation sits in the transport, not in the data schema.

## Implications for ui1to1.com / ui121

This is the agent-side plumbing behind a one-to-one human interface. ui121 does not need to be the host. It can be the place a person sees and completes what an MCP tool was about to do. Stateless requests and typed tools match JSONUI: a description in, a known UI out. Deprecation of sampling is a reminder that “the server asks the model to think” is unstable; “the server asks the person, through a UI” is the durable human-in-the-loop path.
