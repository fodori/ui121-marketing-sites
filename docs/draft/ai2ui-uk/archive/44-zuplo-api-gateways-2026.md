# Zuplo: API gateways for AI workloads in 2026

- **Source:** https://zuplo.com/learning-center/best-api-gateways-ai-llm-workloads-2026
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Zuplo’s learning-center roundup picks Zuplo as the API gateway for AI and LLM workloads and then surveys the field a buyer actually meets: API management platforms (Zuplo, Kong, Tyk, Apigee, Gravitee), cloud gateways, and dedicated AI gateways (Cloudflare AI Gateway, Portkey, LiteLLM). It is a single article with outbound comparison links, not a paginated blog index, so those links were not expanded into extra notes.

The category split matters. Traditional API gateways already do auth, rate limits, and observability, and they are adding AI plugins. Purpose-built AI gateways start from token accounting, model fallback, and prompt logging. Kong is described as the widely adopted open-source API gateway, with Kong 3.14 adding an agent gateway and agent-to-agent protocol support, plus an MCP proxy plugin for authenticated MCP traffic. Extension is Lua, Go, or other plugins, and self-hosting means operating NGINX-based infrastructure. Portkey is the observability-heavy AI gateway; the page says its gateway went fully open source in March (year implied by the 2026 roundup context, not independently checked). LiteLLM is the self-hosted Python proxy with an OpenAI-compatible API and a basic MCP gateway. Zuplo’s own pitch is programmable policies, including rate limits that understand AI usage rather than only request counts, positioned as multi-cloud.

None of the product sketches retrieved from this page centre on a human approval queue. MCP and agent protocol support show the gateways moving toward tool traffic, which is closer to ai2ui.uk than pure chat proxying, and still not the same as rendering a question.

## Key facts

- Page stance: Zuplo as the recommended pick for AI workloads. Treat as vendor content.
- Field covered: Zuplo, Kong, Gravitee, Tyk, Apigee, AWS API Gateway, Cloudflare AI Gateway, Portkey, LiteLLM.
- Kong 3.14: agent gateway and A2A support; MCP proxy plugin for auth and routing.
- Portkey: purpose-built AI gateway; open-source gateway noted as of March in the article.
- LiteLLM: open-source proxy with a native MCP gateway feature described as basic.
- Human-in-the-loop approvals are not a comparison column in the retrieved sections.

## How it works

An AI workload hits the gateway like any other API. Policies authenticate the caller, shape or limit traffic, route to a model or an MCP server, and emit logs. Programmable gateways let you attach custom logic in the request path. Dedicated AI gateways add token and prompt features that generic HTTP gateways lack unless extended. Agent and MCP plugins move tool calls onto the same data plane as REST. Approval of a person is not part of the default policy chain described here.

## Implications for ai2ui.uk / ui121

Use the roundup as the “do not look like these” list. Buyers searching for an AI gateway will land on Zuplo, Kong, Portkey, and LiteLLM. ai2ui.uk’s page should say, in the first screen, that it does not route model traffic. It asks a human and returns structured data. If those gateways grow MCP proxies, the integration is to pause selected MCP tools and hand the elicitation or approval to ai2ui.uk. Do not reproduce Zuplo’s ranking. Name the category and step out of it.
