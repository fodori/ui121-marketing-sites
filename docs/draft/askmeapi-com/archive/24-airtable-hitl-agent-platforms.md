# Airtable — AI agent platforms with human-in-the-loop controls

Source: https://www.airtable.com/articles/human-in-the-loop-ai-agents
Fetched: 2026-09-23
Status: ok

## Summary

Airtable’s 15 September 2026 article (about eight minutes, bylined Airtable) defines a serious HITL platform as one that pauses mid-task, shows the proposal and why, and resumes only after approve, reject, or edit. It separates that from human-on-the-loop, where the agent keeps running and a person intervenes. It warns that a human without context becomes a rubber stamp. A three-tier gate closes the piece’s decision framework: auto-approve reversible reads and summaries, notify on medium-risk writes, and hard-block payments, customer messages, deletes, production changes, and legal or HR or compliance steps.

Eight capabilities distinguish a real gate from a button: true pause and resume, edit as well as approve or reject, reviewer context including how to undo, risk-based routing to the right role, policy outside the agent so the model cannot skip the gate, escalation when confidence drops, an audit of who decided and what they saw, and delivery in Slack, Teams, email, or the system people already use. Vendor questions mirror that list, especially what happens on silence (prefer cancel, plus a second approver) and whether state survives an afternoon of meetings.

A comparison table places LangGraph, CrewAI, Agno, AutoGen, OpenAI Agents SDK, and Temporal on the “you build the review surface” side; Bedrock, Microsoft Agent Framework / Copilot Studio, StackAI, n8n/Zapier, HumanLayer, Galileo, and Salesforce Agentforce on the “surface included” side, with channels such as Slack, email, Discord, Teams, and Outlook. HumanLayer is described as a require-approval decorator with Slack, email, and Discord and a built-in audit trail. A two-week pilot: pick one risky workflow, write the three tiers, gate only the worst action, route to the existing channel, do not change the gate for two weeks, then read the audit log. A high rate of unedited approvals means the gate can loosen; frequent edits mean it is earning its keep.

Compliance paragraphs cite EU AI Act Article 14 and the NIST AI RMF Govern function, plus automation bias. Airtable’s own pitch is an operational record where agent recommendations sit in fields that cannot proceed until status is Approved, with an Override field, Slack or email routing, and one audit log. The page says more than 500,000 organizations, including 80 percent of the Fortune 100, use Airtable.

## Key facts

- Published 15 September 2026.
- Patterns: approval before execution, human-on-the-loop, input recovery when data is ambiguous, post-execution audit.
- Three tiers: auto-approve, notify, block.
- Pilot length: two weeks, one hard gate.
- HumanLayer row: decorator, Slack/email/Discord, built-in audit, framework-agnostic.
- Fortune 100 claim: 80 percent of the Fortune 100; 500,000 organizations.

## How it works

The article is a buying guide, not an implementation. You classify each action into a tier, attach a hard gate only to irreversible steps, show proposal plus reasoning in the reviewer’s existing tool, record identity and context, and escalate or cancel on timeout. Policy lives outside the prompt.

## Implications for askmeapi.com / ui121

The table’s split is the positioning: code frameworks pause, and someone else must build the screen. AskMeAPI plus ui121 is that screen and the delivery API, sold to the LangGraph/OpenAI/Temporal column. Edit-before-approve and “what will change” are form requirements, not extra features. The unedited-approval metric is a good onboarding story: the product should show how often humans changed the agent’s proposal. Airtable is a horizontal competitor for the system of record, not for the ask endpoint.
