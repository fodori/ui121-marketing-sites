# Medium: building an LLM gateway, and where humans appear

- **Source:** https://medium.com/@mpandey95/building-an-lagateway-with-langchain-v1-a-practical-hands-on-guide-b5ed432144d9
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Manish Pandey’s 24 May 2026 guide frames an LLM gateway as the way to swap OpenAI, Anthropic, and Gemini without rewriting the application. Direct integrations create lock-in, mismatched APIs, weak cost control, no shared failover, thin compliance visibility, and fragmented monitoring. The architecture he describes is a single front door that applies routing, security, and governance, chooses a provider, records tokens, latency, and failures, falls back when a provider errors, and returns the response.

The implementation sketch is a small Python class holding LangChain chat models for three providers, plus a router that sends “code” prompts one way, long prompts another, and everything else to a third. A fallback loop tries providers in order. A timer wrapper is the observability starter, with LangSmith, Grafana, Prometheus, and OpenTelemetry named as the real tools. Guardrails listed: prompt-injection protection, PII masking, output moderation, role-based access, audit logs, and rate limits, especially for banking, healthcare, and SaaS. The deployment stack is Docker, Kubernetes, an API gateway such as KrakenD, Grafana, a CI system, Terraform, and a secret manager.

Human approval is not in the build steps. It appears once, in a list of advanced enhancements beside semantic caching, streaming, tool calling, workflow orchestration, price-aware routing, retrieval, and governance policies. That placement is the insight. Practitioners building a model gateway already know a human approval system is a later, harder concern. It is not part of the routing class they ship first.

LangChain v1 is praised for cleaner APIs, middleware, and LangGraph integration. Challenges and the author’s fixes are provider API changes (hide them), rate limits (queues), cost (routing), hallucinations (guardrails), monitoring gaps (central logs), and latency spikes (regional routing).

## Key facts

- Published 24 May 2026. Author Manish Pandey.
- Providers in the sketch: OpenAI, Anthropic, Google Gemini, via LangChain chat models.
- Routing example: code-related prompts, prompts longer than 500 characters, otherwise a lighter model. This is illustrative, not a benchmark.
- Observability fields: tokens, cost, latency, failures, hallucinations, rate limits.
- Human approval systems are listed under future enhancements, not in the core gateway steps.
- Production pieces named: containers, Kubernetes, an edge API gateway, metrics, CI, Terraform, secret storage.

## How it works

Callers hit the gateway with a provider name or let a heuristic choose. The gateway invokes the matching chat model. On failure it tries the next provider. Timers and, in a fuller build, trace exporters record the call. Guardrails wrap prompts and outputs. Nothing in the basic path pauses for a person. Adding human approval would be another policy step before a tool or a high-impact completion is allowed to leave.

## Implications for ai2ui.uk / ui121

Quote the roadmap gap, not the routing code: human approval is already named as an advanced gateway feature and is still unbuilt in the tutorial. ai2ui.uk can be that feature without becoming a model router. Position beside LangChain gateways: they unify providers; you unify the human ask. A joint architecture is easy to draw — gateway for models, ai2ui.uk for approvals — which matches how this author sequenced the work.
