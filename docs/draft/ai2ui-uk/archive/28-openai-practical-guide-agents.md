# OpenAI: a practical guide to building agents

- **Source:** https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
- **Fetched:** 2026-09-23
- **Status:** partial

## Summary

A direct fetch returned 403. The guide text below is paraphrased from a search-indexed copy of the same URL, so treat fine detail as partial. The guide’s orchestration chapter contrasts two multi-agent shapes. In the manager pattern a central agent keeps control and calls specialists as tools, which suits workflows where one agent should own the user. In the decentralised pattern agents hand off to each other. A handoff is a one-way transfer: calling it starts the new agent and passes along the latest conversation state. That fits triage, where a specialist should talk to the user directly. A handoff back is optional. The guide prefers expressing this in ordinary code rather than pre-declaring every branch in a graph language, which it says gets cumbersome as workflows become dynamic.

Guardrails are a layered defence: relevance classifiers, safety classifiers for jailbreaks and prompt injection, PII filters on output, moderation for harmful content, tool safeguards, deterministic rules (blocklists, length limits, regex), and output checks for brand risk. Tool safeguards are the HITL hook. Rate each tool low, medium, or high using read versus write, reversibility, account permissions, and financial impact. Use the rating to pause for a check or to escalate to a person before a high-risk function runs. The SDK’s default in the guide is optimistic execution: the main agent runs while guardrails run alongside and raise if a constraint breaks. The advice is to start with privacy and content safety, add guardrails from real failures, and tune them so security does not wreck the experience.

Human intervention is called a critical safeguard, especially early, because it surfaces edge cases and feeds evaluation. Two triggers: the agent exceeds a retry or failure limit, and the action is sensitive, irreversible, or high stakes. Examples given are cancelling orders, large refunds, and payments. In support, intervention means escalating to a human agent. For a coding agent, it means handing control back to the user. The conclusion says to start with one agent, add specialists only when needed, and treat human intervention as part of guardrails from the first deployment. Related reading links on the indexed page included later OpenAI pieces dated May and June 2026; those were not fetched.

## Key facts

- Direct HTTP fetch: 403. Content recovered from an indexed copy of the same guide URL.
- Two orchestration patterns: manager (agents as tools) and decentralised handoffs.
- Tool risk inputs: read versus write, reversibility, permissions, financial impact. Ratings: low, medium, high.
- Human triggers: repeated failure, and high-stakes or irreversible actions (order cancel, large refund, payment).
- Guardrail families: relevance, safety, PII, moderation, tool safeguards, rules, output validation.
- Optimistic execution: primary agent proceeds while guardrails run and can tripwire.

## How it works

A triage agent either calls specialist tools and synthesises the reply, or hands the conversation to a specialist who continues with the user. Before high-risk tools run, a safeguard rated from the tool’s side effects pauses or escalates. Input guardrails can be small classifier agents with a structured yes/no. When the agent is stuck or the action is dangerous, control transfers to a person instead of looping.

## Implications for ai2ui.uk / ui121

OpenAI’s own buyer guide already says high-risk tools should escalate to a human, and it does not specify the screen. ai2ui.uk can be that escalation for both support handoff and coding-agent “hand control back,” with the risk rating as the policy that decides when to open a page. Because this fetch was partial, do not quote the guide verbatim in ads. The safe claim is the one the indexed text supports: human intervention is recommended for irreversible actions, and the UI is left to the implementer.
