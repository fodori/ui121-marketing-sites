# HumanLayer homepage

Source: https://www.humanlayer.dev/
Fetched: 2026-09-23
Status: ok

## Summary

The live homepage no longer leads with an approval API. It markets a multiplayer coding-agent IDE and cloud: sessions, plan artifacts, and diffs in one workspace, from a laptop daemon to cloud workers, with the same UI on web, desktop, and phone. Install is a Homebrew tap. The product story is a six-phase workflow — questions, research, design, structure, plan, implement — with a repeated warning not to outsource the thinking. Humans and agents comment on design documents in real time, and those comments go back to the agents, which the page contrasts with a design doc that lives in Notion or Google Docs and never reaches the code.

Tasks group sessions, artifacts, and worktrees. Task creation can start from inline text or a Linear or Jira ticket, pick a workflow (guided research-plan-implement, outline, PRD-oriented, oneshot, or freeform), and launch an agent session. Named agents include Claude Code, Codex, Copilot, and Fireworks. The page says you bring your own model subscription or API key. A starter plan is free for teams of three or fewer. Enterprise items listed: SSO/SAML, audit logs, volume pricing, custom terms, on-prem and private VPC, SOC 2 Type II via Vanta, and ZDR/DPA on enterprise tiers. The company says the product is not open source yet, except that the research-plan-implement framework already is, with more building blocks promised. The page still links the April 2025 “12 Factor Agents” essay as the original context-engineering repo.

The human is no longer “a tool the agent calls.” The human is a teammate who must push back at each phase before implementation, specifically to catch mistakes before they become a large code change (the page uses 2,000 lines as the scare number).

## Key facts

- Current category: multiplayer coding-agent workspace, not a generic HITL API.
- Phases: questions, research, design, structure, plan, implement.
- Distribution: `brew install humanlayer/humanlayer/humanlayer`. Local daemon plus cloud daemons, synced through a HumanLayer API.
- BYOK for Claude, Codex, and others. No separate per-token HumanLayer bill.
- Free starter for teams of three or fewer.
- SOC 2 Type II. Not fully open source; RPI framework is.
- Issue sources: inline, Linear, Jira.

## How it works

1. Create a task from text or a ticket and choose a workflow.
2. Agents research and draft artifacts (research, design, structure, mockup, plan).
3. Teammates comment on the design doc. Comments are fed back to the agents.
4. Implementation starts only after that checkpoint.
5. Sessions and diffs stay visible; work can continue in the cloud if the laptop closes.

## Implications for askmeapi.com / ui121

HumanLayer’s pivot leaves the generic “contact a human for approval” slot less owned on the homepage, even though the SDK still exists. AskMeAPI should not try to be a coding IDE. It should be the callable question the IDE, or any other agent, uses when a phase needs a person who is not already in that workspace. ui121 matches their comment-on-a-doc moment only partly: better as the structured checkpoint form (approve this plan, edit this field) than as a full multiplayer IDE.
