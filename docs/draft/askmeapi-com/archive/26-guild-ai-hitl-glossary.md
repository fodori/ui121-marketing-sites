# Guild.ai glossary — human in the loop

Source: https://www.guild.ai/glossary/human-in-the-loop
Fetched: 2026-09-23
Status: ok

## Summary

Guild’s 23 February 2026 glossary (about five minutes, bylined Guild.ai team) defines HITL as a person participating at checkpoints: approve, reject, or modify before an automated action takes effect. The mechanism sentence is the category in one line: pause execution, present context, wait for a human decision, then resume. The CI/CD analogy is a pipeline that tests and stages on its own and stops for a human diff before production.

Framework notes match the rest of this archive. LangGraph `interrupt()` pauses, checkpoints, and resumes with approve, edit, or reject. CrewAI uses `human_input` or a `HumanTool`. Temporal can wait hours, days, or with no compute until a signal. Confidence routing is illustrated with expenses auto-approved under $500 and finance review above $5,000. Quality claims: up to 99.9 percent accuracy in document extraction with HITL versus 92 percent for AI-only systems, and a clinical arXiv deployment where 81 percent of AI-generated tasks were approved unchanged and 0 percent were fully rejected as dangerously wrong. EU AI Act Article 14 is summarized as required human oversight for high-risk systems, with competent named people. SOC 2 is mentioned as an audit driver.

The risks section is as useful as the definition. Too many gates are slower than doing the work by hand. Automation complacency: people cannot supervise a mostly autonomous system for long without risk rising (Carnegie Council is cited). Rubber-stamping raw JSON at 2 a.m. is theater. Reviewers need a summary, what changed, and why, not a payload dump. Expert review in medicine or law is expensive, so the ask should be asynchronous. A precise warning: if the agent already committed the migration before asking, that is not the same loop as approval before execution.

Examples: a deploy agent pauses before `kubectl` so on-call confirms cluster and namespace; a code-review agent auto-comments style issues but Slack-routes privilege escalation; a content workflow (ContentMonk, via Zapier’s guide) automates 70–80 percent and keeps human passes on brief and draft. Guild’s close is a control-plane pitch: every action logged, every approval owned.

## Key facts

- Published 23 February 2026.
- Canonical mechanism: pause, present context, wait, resume.
- Stats as stated: 99.9 percent vs 92 percent document extraction; clinical study 81 percent approved unchanged, 0 percent fully rejected as dangerous.
- Dollar sketch: auto-approve under $500, review above $5,000.
- ContentMonk: 70–80 percent of content ops automated, with human brief and draft review.
- HOTL versus HITL: kill switch and monitor, versus a blocking gate.

## How it works

Policy decides which tool calls interrupt. The runtime saves state. A person sees a summarized proposal and returns approve, edit, or reject. The run continues. Low-risk calls never enter the queue. Feedback from edits can be kept for later prompt or model changes. Async delivery matters when the expert is not at the keyboard.

## Implications for askmeapi.com / ui121

The glossary sentence is a headline askmeapi can use in spirit (paraphrased): pause, show context, wait, resume, return a decision. The anti-patterns are product requirements: no raw JSON, async by default, gate only irreversible or low-confidence steps, and do not ask after the write has already happened. ui121 is the “summarize what changed” layer. The 99.9 versus 92 figure is a third-party claim to cite carefully, not a ui121 metric. Guild wants to own the control plane; askmeapi can own the ask endpoint those planes call.
