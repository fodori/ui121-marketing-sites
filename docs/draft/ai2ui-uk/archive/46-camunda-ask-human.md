# Camunda: ask a human inside an agentic process

- **Source:** https://docs.camunda.io/docs/components/agentic-orchestration/model-recommendations-agentic/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Camunda’s model-recommendations page for agentic orchestration is mostly about which LLMs fit their runtime, and it contains a clear human-escalation pattern. Supported models need tool calling and a vendor path through Amazon Bedrock, Google Vertex, Azure OpenAI, or an OpenAI-compatible endpoint. Inputs and outputs are plain text. The page splits frontier models and open-weight models as a cost choice, not as a quality ranking to copy here.

Prompt advice: write detailed tool descriptions, watch the context window, sanitise tool output before it returns to the model, and persist long-running state outside the model, in Camunda document storage or a database. The agent should not be the system of record for a process that spans hours.

The human pattern is explicit. When the stakes are high, the tool output is malformed, or confidence is low, the agent should call something like `ask_human` or open a review task instead of guessing. The example persona is an order agent that escalates irreversible actions and ambiguous cases to a person. That makes “ask a human” a workflow verb with the same status as a service task, which is how Camunda users already think.

## Key facts

- Docs area: Camunda 8 agentic orchestration, model recommendations.
- Model requirements: tool calling; Bedrock, Vertex, Azure OpenAI, or OpenAI-compatible; text in and out.
- State: keep long-running process data outside the model.
- Escalation triggers named: high stakes, bad tool output, low confidence, irreversible actions, ambiguity.
- Example: an order agent that prefers `ask_human` over a guess.

## How it works

The process model includes both automated tool steps and a human step. The agent loop runs while the case is routine. On a trigger, it creates a human task or calls an ask tool, and the process waits in Camunda’s engine rather than in the model’s context window. When the person completes the task, the process continues with that input stored as process data. The model recommendation exists so the tool-calling loop is reliable enough that escalation is a choice, not a crash.

## Implications for ai2ui.uk / ui121

Camunda already has human tasks. ai2ui.uk should not claim to replace a BPM human task for customers who live in Camunda. The opening is agents that are not inside that engine: a coding agent, an MCP tool, an ad-hoc script. For Camunda users, ai2ui.uk can be the form rendered when `ask_human` fires outside a modelled user task, or the mobile-friendly page a user task links to. Message: asking a human is a first-class step, and the UI for that step is still often an afterthought. Outline for docs: when to escalate, what the human must see, where the answer is stored, how the process resumes.
