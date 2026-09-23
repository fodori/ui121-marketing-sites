# HumanLayer blog — 12 Factor Agents

Source: https://www.humanlayer.dev/blog/12-factor-agents
Fetched: 2026-09-23
Status: ok

## Summary

Dex’s 3 April 2025 essay, based on an earlier GitHub post and styled after the 12-factor apps, argues that production “agents” are mostly ordinary software with a few LLM steps. He says he does not see many frameworks in real customer-facing agents; strong teams roll their own. The promised agent — throw away the DAG, give the model a goal and let it pick edges — fails once context gets long. Builders he talks to abandon the open tool loop after roughly 10–20 turns. Even if the model is right 90 percent of the time, that is not good enough to ship. He claims a short, focused context keeps beating a longer window.

What works, in his account, is a micro-agent inside a deterministic graph. A deploy example: merge to main, staging deploy, and e2e tests are code; a small agent handles production deploy, proposes `deploy_frontend` or `deploy_backend`, and deterministic code stops for a person. A rejection such as “deploy the backend first” is parsed by the model into the next tool call. The LLM’s job is to turn plaintext human feedback into the next structured step, on a 5–10 step workflow, not to own the whole system.

The twelve factors, in order: natural language to tool calls; own your prompts; own your context window; tools are just structured outputs; unify execution state and business state; launch, pause, and resume with simple APIs; contact humans with tool calls; own your control flow; fold errors back into the context; keep agents small; trigger from anywhere; make the agent a stateless reducer. Factor 6 notes that many orchestrators can pause, but not between tool selection and tool execution. Factor 7 makes “ask a human” a tool intent (`request_human_input`) with urgency and format (free text, yes/no, multiple choice). The loop saves state, notifies a person, and returns. A webhook later appends the human response and continues. Factor 8 is the same idea as control flow: clarification and high-stakes tools break the loop; cheap reads do not. Without that granularity you either sleep in memory, restrict the agent to research, or hope.

## Key facts

- Author Dex, 3 April 2025, under 32 minutes, based on the GitHub 12-factor-agents post.
- Failure mode: open loops past about 10–20 turns; 90 percent success compared to a web app that crashes on 10 percent of loads.
- Micro-agent deploy story uses a real HumanLayer deploy bot and a human rejection that reorders backend then frontend.
- Human-contact tool fields: question, context, urgency (low/medium/high), format (free text, yes/no, multiple choice), choices.
- Outer loop: agent-initiated (cron, webhook), not only chat.
- Factor 8’s number-one framework request: interrupt between tool selection and tool invocation.

> “What are the principles we can use to build LLM-powered software that is actually good enough to put in the hands of production customers?”

> “Even as models support longer and longer context windows, you'll ALWAYS get better results with a small, focused prompt and context.”

## How it works

1. Deterministic code owns the outer DAG and starts a small agent with a tight context.
2. The model always emits a structured next step, including a human-contact intent.
3. Code switches on that intent. Risky or human steps persist state and return.
4. Slack, email, or SMS delivers the question. A webhook resumes with the answer appended to the thread.
5. The model proposes the next tool. Code may pause again for approval before execution.

## Implications for askmeapi.com / ui121

Factor 7 is the askmeapi product spec written as an essay: a structured ask (yes/no, multiple choice, free text), a saved thread, a notify step, a webhook resume. AskMeAPI can sell that factor as a service so teams keep factors 2, 3, and 8 without building the contact layer. ui121 is the format renderer: the `options.format` and `choices` become the page, and the webhook body is the validated answer, not a Slack sentence the model must parse. The 10–20 turn limit is a marketing argument for small, schema-bound questions instead of an open chat with the approver.
