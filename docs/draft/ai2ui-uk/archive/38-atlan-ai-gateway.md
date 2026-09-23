# Atlan: what an AI gateway is, and what it misses

- **Source:** https://atlan.com/know/what-is-ai-gateway-llm-gateway/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Atlan’s explainer defines an AI gateway, also called an LLM gateway, as middleware between applications and model providers. It routes across models, rate-limits, tracks cost, holds API keys so apps never see provider credentials, logs calls, caches similar prompts, and applies content guardrails. The terms are used interchangeably, though “AI gateway” has widened to vision, embeddings, and some agent orchestration. Before gateways, each team called OpenAI, Anthropic, or Bedrock with its own keys, budgets, retries, and logs, so spend and policy were fragmented.

The page cites a projection, attributed to growth analysis reported by TrueFoundry and others covering Gartner research, that by 2028 about 70% of software engineering teams building multimodel applications will use an AI gateway, up from roughly 25% in 2025. It also cites Menlo Ventures for enterprise LLM API spend of $12.5 billion in 2025, and says 53% of AI teams report costs exceeding forecasts by 40% or more as they scale. Those figures are third-party claims hosted on a vendor page. Use them with attribution.

Atlan’s strategic point is the gap. A gateway governs how models are called. It does not govern what context reaches them. The page says customers report up to 5x accuracy gains when a gateway is paired with a governed context layer, which is Atlan’s product argument. For ai2ui.uk the analogous gap is different and compatible: gateways govern model traffic, not the human decision. Context quality and human approval are both missing from a pure proxy, and they are not the same feature.

## Key facts

- Gateway jobs listed: routing, rate limits, cost, key management, logging, semantic cache, guardrails.
- Adoption projection on the page: about 25% in 2025 to about 70% by 2028 of software engineering teams on multimodel apps, via TrueFoundry and others on Gartner research.
- Spend: $12.5 billion enterprise LLM API spend in 2025, cited to Menlo Ventures.
- Cost overrun: 53% of AI teams over forecast by 40% or more during scaling, as stated on the page.
- Atlan claim: gateway plus governed context, up to 5x accuracy in customer reports.
- Explicit limit: gateways do not control which context the model sees.

## How it works

Applications send prompts to the gateway instead of to each provider. The gateway authenticates the caller, picks a model, enforces budget and rate limits, may serve a semantic cache hit, filters content, forwards the call, and logs tokens and latency. Provider credentials stay server-side. Nothing in that path asks a person whether a downstream tool may act. Guardrails here are content filters, not approval cards.

## Implications for ai2ui.uk / ui121

This is the positioning sentence: a model gateway is not a human gateway. Atlan uses the gap to sell context governance. ai2ui.uk uses the adjacent gap to sell decisions. Marketing can acknowledge the crowded proxy layer and the spend statistics, attributed, then say those products still do not render a question or collect a structured approval. Do not claim the 5x accuracy number; that is Atlan’s context-layer result, not an approval-UI result. Docs outline: what an LLM gateway already does, what it never sees (the human), where an ask endpoint sits beside it.
