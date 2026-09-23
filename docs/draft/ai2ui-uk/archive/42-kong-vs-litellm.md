# Kong AI Gateway versus LiteLLM

- **Source:** https://konghq.com/blog/enterprise/kong-ai-gateway-vs-litellm
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Kong’s comparison argues that multi-model routing is now table stakes, and the production question is throughput, policy composition, and enterprise operations once the gateway is shared infrastructure. LiteLLM is acknowledged as a reasonable start: open source, many providers, budgets and rate limits per key, team, user, model, and customer, plus cost and observability basics. Kong’s critique is that those limits live on separate entities, so overlapping rules become a precedence puzzle, and that a Python proxy will force more nodes for the same load.

The performance claim is Kong’s own public benchmark against LiteLLM: 859% higher throughput and 86% lower latency in the tested environment, with LiteLLM hitting a ceiling before the upstream model did. That is a vendor measurement. Cite it as Kong’s result, with the test conditions living in Kong’s benchmark post, not as an industry fact. The rest of the article, from the portions retrieved, stays on AI data-path governance: central policy, security, and scale, not on a human clicking approve before an agent edits production.

Kong’s product is an API gateway with AI plugins, familiar to teams already running Kong in Kubernetes. The comparison is about which proxy should carry model traffic. It does not describe a review queue, a durable human wait, or an ask-user tool.

## Key facts

- Kong-stated benchmark versus LiteLLM: 859% higher throughput, 86% lower latency, in their tested setup. LiteLLM saturated first.
- LiteLLM controls named: rate limits and budgets at key, team, user, model, and customer scope, configured as separate fields.
- Kong’s frame: centralised policy enforcement for routing, security, and observation at scale.
- A downloadable comparison chart is offered; it was not fetched.
- Human approval of agent actions is outside the article’s comparison axes.

## How it works

Applications send model traffic to the gateway. The gateway authenticates, applies limits and security plugins, routes to a provider, and emits metrics. Capacity planning follows from requests per node and added latency. Policy authors attach rules in the gateway rather than in each application. Nothing in this path renders a question to a person or resumes an agent after a decision.

## Implications for ai2ui.uk / ui121

Incumbent gateway vendors are fighting over latency and policy engines for model calls. That fight is a reason to stay out of it. ai2ui.uk’s buyer may already run Kong or LiteLLM. The integration line is “keep your model gateway; add a human decision when the agent’s tool is the risky part.” Do not counter-benchmark Kong’s 859% figure. Use it only to show how intensely the model-traffic category competes, which makes a human-decision category easier to own.
