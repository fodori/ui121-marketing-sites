# Y Combinator launch — HumanLayer (YC F24)

Source: https://www.ycombinator.com/launches/M8e-humanlayer-human-in-the-loop-for-ai-agents-and-beyond
Fetched: 2026-09-23
Status: ok

## Summary

Dexter Horthy’s YC launch post, marked “almost 2 years ago” on the page fetched in September 2026, introduces HumanLayer as software that contacts humans for feedback, input, and approvals. Three jobs are listed: manual approval steps in ordinary workflows, oversight of autonomous agents, and the transition between those two. Clients are Python and TypeScript. Channels named are Slack, SMS, email, and others. It is framework-agnostic. The try-it URL is humanlayer.dev. A demo video is linked.

The origin story is an agent that would drop Snowflake or SQL tables unused for 90 days. The team already had a recommendation system and wanted the agent to do the work, but would not let it run raw SQL unsupervised, so they added approval steps. The generalization: the most useful functions are the riskiest, especially under LLMs, so anyone shipping meaningful agents needs approval tools. The product lets teams put agents in the background and grow confidence in production instead of spending months on evals before the first deploy.

Use cases: reviewing outbound email and infrastructure changes; dynamic labeling by in-house experts, including RLHF-style feedback and human-versus-AI benchmarks; shipping customer-facing AI before it is perfect because a person still gates the bad action; giving customers their own approve/review hooks. Integration is described as a decorator or webhooks, and `human_as_tool()` for natural-language questions. Two short founder quotes praise production-grade reliability and reviewing leads from Slack. Dex’s bio: seven years at Replicated, helping teams such as DataStax and H2O.ai ship Kubernetes-packaged products, then product and GTM.

## Key facts

- Founder: Dexter Horthy (Dex). Batch framing: YC F24. Launch id `M8e`.
- Promise: approvals across Slack, SMS, email; Python and TypeScript; any framework and LLM.
- Origin example: an agent proposing to drop SQL tables not queried in 90+ days.
- Use cases: internal automations, expert labeling, ship-fast with a human guarantee, customer-visible control.
- Quotes on the page from Vaibhav Gupta (Boundary, YC W23) and Tom Granot (syntaxcinema.dev).

## How it works

The post stays at pitch level. Decorate a function or pass `human_as_tool()` into the agent’s tools. HumanLayer routes the ask to Slack, SMS, or email. The workflow continues after the person responds. The same mechanism is meant for non-AI approval steps, not only agents.

## Implications for askmeapi.com / ui121

The launch post is the category’s founding pitch, including SMS, which the later PyPI roadmap still listed as planned. AskMeAPI can claim the original job (any workflow, not only coding agents) now that the homepage has moved on. ui121 supports the “customer-facing control” use case: the end user, not only an internal Slack admin, gets a clear approval page. The labeling use case is a second product surface: structured human feedback returned as data, which is a form, not a chat reply.
