# MCP vs API (Dash0)

- **Source:** https://www.dash0.com/knowledge/mcp-vs-api
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Yves Sinkgraven’s Dash0 article, updated 21 August 2026, argues that MCP and APIs are not rivals. An API is a contract between programs: fixed endpoints, known shapes, the caller decides. MCP sits above that and exposes capabilities to a model, which chooses tools at runtime. Most real systems use both. MCP servers usually call REST underneath.

The model breaks the old assumption that both sides know the endpoint. A task may chain many calls and decide the next one from unstructured results. A plain API is described as a labeled cabinet the model cannot see unless the prompt hardcodes every drawer. With MCP, the server advertises tools and the model picks. The support-ticket sketch is Gmail, Notion, and Jira: either three bespoke clients plus a long prompt, or three MCP interfaces and a goal.

Differences he draws: runtime discovery via JSON Schema instead of human docs; stateful JSON-RPC sessions versus stateless REST; one protocol versus each API’s own auth and payload; tools, resources, and prompts instead of only HTTP methods on resources. The M×N line is attributed to Anthropic’s framing: M models and N tools otherwise need M×N connectors; MCP makes that M+N, the way HTTP did for the web.

He warns against one-to-one wrappers. Every field costs context. Returning 50 fields when the model needs 3 wastes money and causes what he calls context rot. Use a plain API for deterministic app code. Use MCP when the sequence is unknown until the user speaks, especially across services. Permissions are the skipped chapter: a model that chooses its own path can send mail or delete data unless scopes are explicit. Failures are harder to reproduce because the path was chosen at runtime, so traces must show what the model saw, what it called, and what the API returned. The close is a Dash0 product pitch for OpenTelemetry-style traces.

## Key facts

- Updated: 21 August 2026. Author: Yves Sinkgraven.
- Formula: M models × N tools becomes M+N.
- Primitives restated: tools, resources, prompts.
- Anti-pattern: wrapping every API field as a tool.
- Failure mode named: context rot from excess tool data.

## How it works

The API still does the work. The MCP server translates a curated set of operations into something the model can discover and call. The client of the API is code. The client of the MCP server is the model, through the host. Session state lets a multi-step task hang together without the application threading every token by hand.

## Implications for ui-mcp.com / ui121

Use the M+N line as the reason one ui121 interface server reaches every MCP host. Then use the wrapper warning as craft: a ui121 tool should be a task (“review this submission”, “pick a variant”), not a raw endpoint list. Context rot is also why the UI should render the wide table and hand the model a short structured result. Observability — what the person saw in the UI and what the model decided — belongs in the enterprise story next to auth.

> “M models and N tools requires M×N custom connectors. MCP collapses that to M+N.” — Dash0, summarizing the MCP integration problem, updated 21 August 2026
