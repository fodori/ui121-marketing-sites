# Agentic Patterns: human-in-the-loop approval framework

- **Source:** https://agentic-patterns.com/patterns/human-in-loop-approval-framework/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

This catalog entry, credited to Nikola Balic and marked validated in production with an update of 5 January 2026, names a UX pattern: keep the agent autonomous on safe work, and insert a human gate only on functions that are high-risk or hard to undo. The problem statement is the one a gateway sells. Agents need to drop tables, deploy, change config, and call APIs with side effects. Blocking every such call kills automation. Letting them all run unsupervised is unacceptable for safety and compliance.

The proposed system classifies risk, notifies a person on more than one channel, and logs the decision. Channels called out are Slack for live buttons, email for slower review, SMS for urgent cases, and a web dashboard for batch review. The agent asks before the risky function, the person approves, rejects, or modifies, and the agent adapts if refused. Timeouts should escalate, and the recommended default when nobody answers is deny.

The page is honest about the costs. People must be available. Slow approvals bottleneck the agent. Notification and state machinery is real infrastructure. The worst failure is fatigue: reviewers start rubber-stamping. Classification of what needs a gate has to stay explicit.

## Key facts

- Category on the catalog: UX and collaboration. Status: validated in production. Updated 5 January 2026.
- Example high-risk call in the sequence: dropping a table, classified before anyone is notified.
- Reference implementations named: HumanLayer’s approval decorator (Slack channel) and LangGraph `interrupt` with a checkpointer.
- Related reading cited: HumanLayer, 12-factor agents, and a 2025 ETH Zurich paper on design patterns for securing LLM agents (separation of proposal and execution).
- When to apply: production database writes, side-effecting APIs (payments, email, webhooks), firewall and permission changes, bulk deletes, and GDPR / HIPAA / SOC2 operations.

## How it works

Risk classification decides which functions pause. Criteria include cost thresholds, data sensitivity, and whether the action can be reversed. A request should carry why the operation is needed, what data changes, whether it is reversible, and what the alternatives are. On approve, the agent executes and the framework logs both the approval and the execution. On reject, the reason goes back so the agent can skip or choose another path. Prerequisites are a chat or email integration, a written risk policy, a fast human for time-sensitive work, and a fallback when the answer is no.

## Implications for ai2ui.uk / ui121

This is the category language: approval gates, multi-channel delivery, default-deny timeout, audit of who approved what. ai2ui.uk should not compete as another decorator inside one Python framework. It should be the shared approval surface those decorators and interrupts call when the human is not sitting in the same terminal. Copy can borrow the pattern’s trade-off list: fatigue, context, and default deny are product requirements, not footnotes.
