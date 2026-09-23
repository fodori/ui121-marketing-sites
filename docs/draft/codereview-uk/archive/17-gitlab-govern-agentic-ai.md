# GitLab — How to govern agentic AI, MCPs, and AI code assistants

- Source: https://about.gitlab.com/blog/govern-agentic-ai-mcps-code-assistants/
- Fetched: 2026-09-23
- Status: ok
- Julie Griffin, 31 July 2026. Single post, not a docs hub.

## Summary

GitLab’s post says code completion kept a human on every suggestion, and agentic AI removed that beat. An agent can open a merge request, call a tool, edit CI, and push, sometimes with nobody reviewing each step. MCP connections to outside data make the leadership question “what is this agent allowed to do, and how do we prove it?” rather than “which model writes best?”

Their research across more than 1,500 developers and technology leaders: 73% worry about long-term maintainability of AI code, and 86% agree that without clear governance, AI-generated code compounds technical debt faster than ordinary development. 92% of DevSecOps professionals report some governance challenge with AI-generated code. Top worries are attribution (what was generated), traceability back to the business requirement, and documentation that cannot be written by hand once agents own a growing share of the repo. Accountability stays with the organisation either way.

The control model has three questions before an agent runs: which agents and flows are allowed, where they may operate, and which models they may use. Mechanisms: a central catalogue instead of every team wiring its own agent; composite identity so the agent and the human who asked are both authorised; per-tool settings of autonomous, ask, or deny; prompt checks against hijacking from untrusted issue text or web pages. Self-hosting and bring-your-own-model are the data-residency answers (does the vendor train on your code, who owns inputs and outputs, where do subprocessors sit).

Human-in-the-loop is a placement decision, not a slogan. Interactive work (a person sees each suggestion) is the old completion loop. Headless CI work needs a gate before the action or an audit immediately after. They explicitly say to document checkpoints for code review, testing and validation, and deployment approval, enforced by merge-request rules, tool guardrails, and pipeline scanners — an organisation policy, not team folklore. Approvals should be stored as records (who, which policy version, what exception) so the next reviewer, human or agent, does not start from zero.

Five metrics, read together: adoption (users, flows, which teams are on); acceptance and quality (revert rate, how often AI merge requests pass without rework — a raw accept rate is a weak proxy); risk (how often a guardrail pauses or blocks); remediation (scanner coverage, auto-fix versus manual triage, time to close); ROI after a quarter (time saved versus credits). A rollout can look healthy on adoption while risk shows up at audit six months later.

## Key facts

- n>1,500: 73% maintainability concern; 86% say ungoverned AI code speeds technical debt.
- 92% of DevSecOps respondents report a governance challenge.
- Tool modes: always allow, always ask, always deny.
- Composite identity: agent plus requesting human, both authenticated.
- Checklist: transparency centre, approved catalogue, tool guardrails, composite identity, self-host or BYO model for regulated workloads, written HITL checkpoints, audit streaming, metrics before leaving pilot.
- Governance is per release, because new tools and models reopen the questions.

## How it works

Publish an allow-list of agents. Bind every action to a person. Sensitive tools wait. Scanners hold the pipeline. Merge approval rules apply whether a human or an agent opened the request. Stream the events into the audit log the company already reviews. Review the five metrics on a cadence so adoption cannot outrun risk. Duo Agent Platform is the product wrapping catalogue, guardrails, and streaming; the checklist is usable without buying it.

## Implications for codereview.uk / ui121

GitLab tells buyers to write down the human checkpoint for code review. That sentence is the market. codereview.uk is the named sign-off on the merge request, executed as a ui121 task in an IDE-like surface, with the agent’s identity and the diff in the brief. Composite identity maps cleanly: the task assignee is the human owner of record, even when an agent opened the change. Offer the audit export (who reviewed, what they saw, approve or reject with a reason) as the thing their five-metric dashboard does not contain. Testing and deploy approval can stay the customer’s; do not blur the product into “we govern your whole SDLC.”
