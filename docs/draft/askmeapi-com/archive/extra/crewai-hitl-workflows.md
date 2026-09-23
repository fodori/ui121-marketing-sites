# CrewAI — human-in-the-loop workflows (webhooks)

Source: https://docs.crewai.com/en/learn/human-in-the-loop
Fetched: 2026-09-23
Status: ok

Parent: source 7. The SOURCES URL returned the CrewAI docs home. This page is the production HITL guide in the same learn section, distinct from the local `human_input` flag.

## Summary

CrewAI splits HITL into two products. Flow-based review uses a `@human_feedback` decorator for local, synchronous, console review, documented elsewhere and marked as version 1.8.0 or newer. This page is the webhook path for enterprise and other async deployments, including Slack or Teams. You enable human input on the task, and when you kick off the crew you pass `humanInputWebhook` with a URL and either bearer or basic authentication.

When the task that needs a person finishes its draft, CrewAI POSTs a webhook with execution id, task id, and task output, and the run sits in `Pending Human Input`. You resume with POST `/resume` carrying execution id, task id, `human_feedback` text, and `is_approve`. Critical detail: task, step, and crew webhook URLs from the original kickoff are not stored for you. The resume request must repeat them or later notifications stop. The entire feedback string is appended as context for later tasks, so irrelevant text can skew the crew. Negative feedback retries the task and sends another webhook. Positive feedback continues. Best practices on the page: be specific, stay relevant, answer promptly, review before submit. Use cases listed: QA, complex decisions, high-stakes operations, creative judgment, compliance. Enterprise adds an in-product review queue with assignment, permissions, escalation, SLAs, routing, and analytics, linked but not documented on this page.

## Key facts

- Two modes: `@human_feedback` in Flows (1.8.0+) versus webhook resume.
- Kickoff field: `humanInputWebhook.url` plus bearer or basic auth.
- Pause state: `Pending Human Input`. Payload: execution id, task id, output.
- Resume fields: `execution_id`, `task_id`, `human_feedback`, `is_approve`, plus the three webhook URLs again.
- Feedback is injected wholesale into later task context.
- Reject retries; approve continues.

## How it works

1. Kick off with a human-input webhook.
2. Crew runs until the gated task produces output.
3. Your URL receives ids and the draft. The execution waits.
4. A person reviews. You POST resume with approval boolean and feedback text, repeating webhook URLs.
5. On rejection the task runs again with that text as context. On approval the crew proceeds.

## Implications for askmeapi.com / ui121

CrewAI already expects an external system to catch the webhook and call resume. That system is the askmeapi-shaped product: hold the draft, reach a human, return `is_approve` plus feedback. ui121 is the review page for a long task output, posting those two fields back. The “repeat your webhook URLs on resume” footgun is a reason to put a durable request id in AskMeAPI so the customer does not re-attach channel config on every answer. Free-text feedback polluting later context is an argument for a schema (approve, edited sections) instead of an unbounded string.
