# TrueFoundry: AI gateways in 2026

- **Source:** https://www.truefoundry.com/blog/a-definitive-guide-to-ai-gateways-in-2026-competitive-landscape-comparison
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Rhea Jain’s 14 June 2026 TrueFoundry guide says an AI gateway is the control plane between apps and models or tools, and that enterprises can no longer stretch an LLM proxy into that role. It quotes Gartner’s idea of an intermediary that centralises security, governance, and observability, and points at a 2025 Gartner market guide. Three categories are separated because they optimise for different phases: AI and LLM gateways such as Portkey, LiteLLM, and Kong; cloud platforms such as Bedrock and SageMaker or Azure AI Foundry; and data platforms such as Databricks. Trouble starts when a tool built for one phase is forced into another.

The vendor sketches are partisan but specific. Kong is a strong API gateway with weak token-level cost, no prompt or agent understanding, and no model-aware fallback, so AI stays a plugin. Portkey is strong on prompt-aware routing, token cost, retries, cache, and developer experience, and weaker on org-wide isolation, on-prem, and cross-team attribution. LiteLLM is the open-source OpenAI-compatible proxy for many providers, easy to self-host, with spend limits, and without an enterprise UI, SLAs, or audit trails. Bedrock is fast serverless access with linear token pricing and, in this post, provisioned throughput often in the tens of thousands of dollars a month. SageMaker gives control and VPC isolation with MLOps overhead and idle instances. Databricks is excellent at data engineering and less so at real-time model serving. The common complaint: these systems route requests and do not answer who owns a model, how org policy is enforced, how a team’s cost incident is prevented, or how a regulated workload is isolated.

TrueFoundry’s pitch is a control plane for models, agents, services, and jobs, with environment-level policy, budgets at runtime, infrastructure metrics next to tokens, and deployment in cloud, VPC, on-prem, or air-gapped. A performance aside claims about 3–4 ms latency and 350-plus requests per second on one vCPU, contrasted with LiteLLM’s scaling limits. Treat that as the vendor’s benchmark, not an independent test. The page’s own FAQ says the “best” gateway depends on requirements, and mentions MCP integration as part of TrueFoundry’s scope. Human approval of agent actions is not the axis of the comparison. Governance here means keys, budgets, guardrails, and audit of model calls.

## Key facts

- Published 14 June 2026. Author Rhea Jain.
- Categories: LLM gateways (Portkey, LiteLLM, Kong), cloud model platforms (Bedrock, SageMaker, Azure), data platforms (Databricks).
- Gartner is cited for the gateway definition via a 2025 market guide.
- Bedrock provisioned throughput called out as often $20k–$40k or more per month.
- TrueFoundry claims on the page: 1000+ models, OpenAI-compatible endpoint, about 3–4 ms latency, 350+ RPS on 1 vCPU.
- Evaluation axes: unified API, provider coverage, onboarding speed, multimodal, routing and fallback, switching models without code changes.

## How it works

Clients speak one chat-completions style API. The gateway routes by provider, latency, weight, or health, applies guardrails and budgets, and logs the call. Policies can attach to an environment so dev and prod differ without each app reimplementing them. Self-hosted or VPC deployment keeps the control plane in the customer’s network while model calls may still leave if the upstream is a public API. Agent and MCP support, where present, is still described as governed tool access at the gateway, not as a human review queue.

## Implications for ai2ui.uk / ui121

The landscape is crowded on model traffic and thin on human decisions. Use this page to name the incumbents and then leave their feature race. ai2ui.uk should not claim lower milliseconds or more model connectors. It should claim the missing question: when the gateway has decided a call is allowed by budget and policy, who approves the action the agent wants to take in the world? A credible architecture is TrueFoundry-or-LiteLLM for models, ai2ui.uk for the person. Note the vendor bias when citing the latency numbers.
