# MCP — Specification (2026-07-28)

- Source: https://modelcontextprotocol.io/specification/2026-07-28/index
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The specification index is the normative overview for the 2026-07-28 revision. MCP is an open protocol for connecting LLM applications to external data and tools, whether the host is an IDE, a chat UI, or a custom workflow. The authoritative schema is the TypeScript `schema.ts` for that date. Requirement words (MUST, SHOULD, MAY) follow BCP 14.

The overview repeats three jobs: share context with models, expose tools, and build composable workflows. Roles match the architecture page: hosts initiate, clients connect, servers provide. The inspiration cited is the Language Server Protocol, which standardised language support across editors; MCP aims to standardise context and tools across AI apps. Base protocol: JSON-RPC 2.0, stateless requests, capability negotiation per request. Servers may offer resources, prompts, and tools. Clients may offer elicitation (asking the user for more information). Utilities include configuration, progress, cancellation, and errors. Extensions are opt-in. The index names Tasks, skills over MCP, and MCP Apps (charts, forms, video, inline in a conversation). A security section exists further down the spec; this index stresses principles and implementation guidelines rather than a single control list. The page did not state a content license such as CC0 or MIT in the fetched overview.

## Key facts

- Revision index: 2026-07-28. Schema lives in the specification repository.
- Modelled on the idea of the Language Server Protocol.
- Client-to-server feature highlighted: elicitation.
- Extensions named here: Tasks, skills, MCP Apps.
- Normative language: RFC 2119 / BCP 14.
- Stateless JSON-RPC with per-request capabilities.

## How it works

Hosts embed clients. Clients and servers exchange JSON-RPC. A server advertises which features it implements. A client only uses what was negotiated. Elicitation is the specified way for a server to pause and ask a person. Extensions add UI, long-running tasks, or skill packages only when both sides enable them. The spec is the contract; SDKs and tutorials are non-normative helpers.

## Implications for ui1to1.com / ui121

The spec’s own list — forms and charts as MCP Apps, elicitation as a client feature — is the industry writing down “the human must get an interface.” ui121 can align publicly with that contract and still own the one-to-one canvas outside any single host. JSONUI is a way to render elicitation and task UIs as the person’s primary surface, with MCP as the wire. Composable workflows in the overview are the same sentence as unified work: many servers, one place the human finishes the job.
