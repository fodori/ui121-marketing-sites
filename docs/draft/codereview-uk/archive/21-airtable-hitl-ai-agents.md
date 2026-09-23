# Airtable — AI agent platforms with human-in-the-loop controls

- Source: https://www.airtable.com/articles/human-in-the-loop-ai-agents
- Fetched: 2026-09-23
- Status: ok
- 15 September 2026. Single article. Patterns are generic; the close is an Airtable pitch.

## Summary

Airtable defines a serious HITL platform as one that pauses an agent mid-task, shows the proposed action with reasoning, and continues only after a person approves, rejects, or edits. Human-on-the-loop is different: the agent keeps running and a person watches and can step in. Pre-execution approval and post-execution audit are both real products; buyers need to know which one a vendor means. A button with no context turns the reviewer into someone stamping a passport.

Four patterns: stop before a high-stakes step (a drafted payment that cannot send); monitor a high-volume medium-risk stream (ticket triage); pause on ambiguity (two matching customer records); let low-risk writes happen and review them in a window (a CRM field in a daily log). Eight capabilities separate oversight from a checkbox: true suspend-and-resume, edit not only yes/no, reviewer context (what, why, what changes, how to undo), risk-based routing, policy outside the agent, escalation when confidence drops, an audit trail, and delivery in Slack, Teams, or email so nobody lives in a separate console.

Their three tiers: auto-approve reads and summaries you can ignore; notify on medium-risk notes; hard-block payments, refunds, customer messages, deletes, production changes, and anything legal, HR, or compliance. If nobody answers, the default should be cancel, not proceed, with a second approver. A defensible log holds the prompt and context, the proposal, the approver, the decision and reason, the time, and what the agent did next. They cite EU AI Act Article 14 and NIST’s Govern function, and they name automation bias: a high unedited-approval rate can mean the gate is theatre. A two-week pilot: one risky workflow, write the three tiers, hard-gate only the worst action, route to a channel people already use, do not retune for two weeks, then read how often approvals had no edits.

The platform table is a map of who builds the review UI. LangGraph checkpoints state and you build the screen. CrewAI has a human-as-tool step. Agno, Bedrock, and others offer a partial API. Temporal holds a workflow open for hours or days. Microsoft, StackAI, n8n, Zapier, HumanLayer, Salesforce Agentforce ship a surface in Teams, Slack, or the system of record. Galileo stresses logging full reviewer context.

## Key facts

- HITL pauses; human-on-the-loop monitors.
- Tiers: auto-approve / notify / block.
- Timeout default: cancel, then escalate.
- Audit fields: prompt, context, proposal, identity, decision, reason, timestamp, next action.
- Pilot length: two weeks, one hard gate, then measure unedited approvals.
- Article 14 and NIST Govern are the compliance name-drops.
- Airtable’s implementation sketch: an “agent recommendation” field that cannot apply until status is Approved, an override field, audit log across human and agent, approvals also via Slack or email.

## How it works

Policy lives in the workflow engine, not in the prompt, so the agent cannot decide to skip the gate. On a blocked action the run suspends with state intact (otherwise a reviewer who is in meetings all afternoon loses the work). The reviewer gets a short card: proposed change, why, consequence. They edit or reject. The engine resumes or stops. Routing sends refunds to someone who may approve refunds, not to a single overloaded queue.

## Implications for codereview.uk / ui121

This is the review-queue UX spec. A code-review task should pause the merge (hard gate on auth, data, and production config), show the diff in an IDE-like surface with the agent’s reason beside it, allow the reviewer to rewrite the verdict rather than only yes/no, and write the audit fields above. Auto-approve has no place on a first release of codereview.uk — that tier is “do not send us the docs-only PR.” Notify maps to a sampled audit. Put the task where developers already are if you can; if the product is the IDE-like surface, the notification still belongs in Slack or email so the queue is not a second inbox nobody opens. Use the two-week pilot as the sales motion: one repo, one risk class, measure rubber-stamps.
