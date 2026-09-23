# Tygress: enterprise AI gateway with an approval queue

- **Source:** https://tygress.com/enterprise-ai-gateway
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Tygress is a pre-launch product page for a self-hosted AI gateway written in Rust on Cloudflare’s Pingora. The claim is one policy chain for REST, gRPC, LLM traffic, MCP, and agent-to-agent calls, aimed at teams that cannot send prompts through a vendor SaaS. The page is early-access: a waitlist, not a documented API.

Controls listed: virtual keys instead of raw provider secrets; token and dollar budgets; prompt-injection and PII redaction; failover and semantic cache; MCP aggregation and tool allow-lists; A2A routing by skill; and, notably, a gateway approval queue with audit and webhooks for sensitive MCP or A2A actions. That queue is the closest “human approval inside an AI gateway” neighbour in this source set, still described at brochure depth. Providers named: OpenAI, Anthropic, Gemini, Azure OpenAI, Bedrock, Mistral, Groq, and OpenAI-compatible endpoints.

A caveat the page itself should not hide, and which ai2ui.uk should repeat: self-hosting the gateway does not keep prompts on-prem if the upstream model is a public API. Air-gap and VPC deployments only localise the control plane and the cache, not the model, unless the model is local too.

## Key facts

- Positioning: pre-launch, Rust, Pingora, self-host, VPC, or air-gap.
- One policy chain claimed for REST, gRPC, LLM, MCP, and A2A.
- Human-shaped feature: approval queue, audit trail, webhooks for sensitive MCP and A2A.
- Other controls: virtual keys, token and USD budgets, injection and PII filters, failover, semantic cache, MCP allow-lists.
- Status: waitlist. No public SLA or schema was fetched.

## How it works

Clients call the gateway. Policy decides route, budget, and whether a tool call is allowed, redacted, or queued for a person. An approval, if the feature ships as described, would notify via webhook and record the decision before the MCP or A2A call proceeds. Model requests still leave the network when the chosen provider is external. Until early access opens, the mechanism is a product claim, not a spec.

## Implications for ai2ui.uk / ui121

Watch Tygress as a possible bundled competitor: gateway plus approval queue. The differentiation, if they ship the queue, is scope. Tygress wants to be the data plane. ai2ui.uk can be the human endpoint those queues call, including for agents that never sit behind Tygress. Marketing should not attack a waitlist product. Note that “approval queue” is now a phrase gateway vendors will use, so ai2ui.uk’s page needs a concrete object: a URL, a form or structured schema, a durable wait, and an audit record a reviewer can open without adopting a new proxy.
