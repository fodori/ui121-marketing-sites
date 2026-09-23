# CodeRabbit — AI governance for coding agents

- Source: https://www.coderabbit.ai/guides/ai-governance-coding-agents
- Fetched: 2026-09-23
- Status: ok
- Brandon Gubitosa, 23 June 2026. One guide, not the guides index. Vendor piece.

## Summary

CodeRabbit’s governance guide says agent-written code can head for production with no control point you can name, because developers mix Cursor, Codex, Claude Code, and others. That mix is shadow IT: unseen spend, unseen data access, unseen tools until an audit asks for the inventory. The place they want the control is the pull-request merge gate, not the IDE (voluntary) and not after deploy (too late).

Stack Overflow 2025, as cited: among more than 49,000 developers, 80% use AI coding tools, while trust in AI accuracy fell to 29% from 40%. A later line says 84% use or plan to use AI tools, up from 76%. Sonar is cited again: 42% of committed code is AI-generated today, toward 65% by 2027, and only 48% always verify before commit. Their own “AI vs Human” look at 470 pull requests: 10.83 issues per AI-authored PR versus 6.45 for human-only, about 1.7×, widening to 26 versus 12.3 at the 90th percentile. Readability issues were 3.15× more common on AI pull requests. An InfoQ paraphrase of Agoda’s Leonardo Stern: the white-box review model breaks when agents emit thousands of lines an hour.

Taskrabbit is the before-agents case study: average PR cycle from 10 days to 7 (−25%) at 300 PRs a week through CodeRabbit. Abnormal AI: more than 65% of critical-severity comments accepted, about 100 reviewer hours saved in the last 30 days of the study, same enforcement on AI and human code.

The control set they list for leaders: RBAC, human-in-the-loop approval on high-impact actions, immutable audit logs, an allow-list of agents and integrations, and discovery of shadow deployments. Enterprise tier claims: SSO, custom roles, admin audit logs, self-host, zero data retention (retention and export vary by plan). Policy should be configuration, not a wiki. They ingest `.cursorrules` and Copilot instruction files, path and AST instructions, “learnings” from past review feedback, and pre-merge checks against the linked issue. NIST’s generative-AI profile and AI risk framework are name-checked for documented requirements and traceability. A regulated buyer (EU AI Act, FDA, finance) will ask who approved the change, on what basis, and for the evidence. Governance that lives only in a vendor console the customer does not control is not enough; the record has to land in Git and CI.

## Key facts

- Trust versus use: 80% using AI tools, 29% trust accuracy (Stack Overflow 2025); 84% use or plan to.
- Issue density: 10.83 vs 6.45 per PR (1.7×); P90 26 vs 12.3; readability 3.15× (CodeRabbit, n=470).
- Taskrabbit: 10 → 7 days, 300 PRs/week, −25% cycle time.
- Abnormal AI: >65% of critical comments accepted; ~100 hours in 30 days.
- Gate mechanics: branch protection, required reviewers, bot reviews the diff and updates as commits land; IDE and CLI runs are optional and earlier; Slack-started work still hits the same merge path.
- Context engine reads the codebase and tickets; they point at Martian’s Code Review Bench as an external comparison.

## How it works

Protect the branch so nothing merges without the check. The bot reviews what changed, attaches findings, and a named human approves. The human is supposed to arrive at a cleaner diff: null checks, encryption mistakes, and spec misses already marked. High-impact actions still need a person. Rules live in repo files so every team hits the same standard. The audit trail is the pull request itself: what the bot caught and who signed. Evaluators are told to judge a platform by the evidence it leaves, not by the demo.

## Implications for codereview.uk / ui121

Steal the checklist, not the bot. RBAC, a human on high-impact actions, an allow-list, and an exportable log are the compliance tier’s feature list — ui121 already thinks in tasks, assignees, and audit. Position the human task as the required reviewer branch protection already understands, working in an IDE-like surface so “high-impact” (auth, payments, data) is a routed queue rather than every PR. Quote their 1.7× issue rate as their study, and note the conflict with New Relic’s separate 1.7× runtime figure so marketing does not mash them. The guide’s own limit is the pitch: AI is the first pass; a person still earns the merge.
