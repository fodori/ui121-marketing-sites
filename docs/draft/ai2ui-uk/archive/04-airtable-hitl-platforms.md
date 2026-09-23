# Airtable: platforms with human-in-the-loop controls

- **Source:** https://www.airtable.com/articles/human-in-the-loop-ai-agents
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Airtable’s 15 September 2026 article is a buyer’s comparison of how agent platforms pause, show a proposal, and resume after a person approves, rejects, or edits. It separates two ideas that marketing often collapses. Human-in-the-loop means execution stops before a consequential step. Human-on-the-loop means the agent keeps running while a person watches and can step in. It also separates pre-execution approval from a post-execution audit. A platform that only logs what already happened is not an approval gate.

The useful frame is four patterns: approval before execution, monitoring with intervention, asking a human when data is ambiguous, and logging low-risk actions for later review. Airtable argues that an approve button without context produces rubber stamps. Eight capabilities mark a real system: a true pause with saved state, the ability to edit the proposal, reviewer context, risk-based routing, policy that lives outside the agent, escalation when confidence drops, an audit trail, and delivery inside tools people already use.

A three-tier policy is the operating model: auto-approve reads and drafts, notify on reversible medium-risk writes, and hard-block payments, deletions, customer-facing messages, and compliance actions. EU AI Act Article 14 and the NIST AI Risk Management Framework are cited as the reason oversight has to be demonstrable. Airtable claims more than 500,000 organisations, including 80% of the Fortune 100, use its platform. That is a distribution claim for Airtable, not a measure of HITL adoption.

## Key facts

- Published 15 September 2026, about an 8 minute read.
- Four patterns: approval before execution, human-on-the-loop, input recovery, post-execution audit.
- Tiers: auto-approve, notify (soft gate), block (hard gate).
- Comparison table covers LangGraph, CrewAI, Agno, AutoGen, OpenAI Agents SDK, Temporal, Bedrock Agents, Microsoft Agent Framework / Copilot Studio, StackAI, n8n / Zapier, HumanLayer, Galileo, and Salesforce Agentforce.
- Split in that table: code-first tools make you build the review UI; packaged tools ship Slack, email, or Teams and trade away some control.
- Suggested pilot: one risky workflow, one hard gate, two weeks, then read the audit log for unedited approvals.
- Compliance pointers: EU AI Act Article 14; NIST AI RMF Govern function. Timeout default recommended: cancel, then escalate.

## How it works

The agent prepares an action. Policy outside the model decides whether that action may run, must notify, or must wait. If it waits, state is checkpointed so a reviewer can answer after meetings, from Slack or email, and optionally edit the payload (amount, recipient) instead of rejecting the whole run. The log should keep the prompt context, the proposal, the approver, the reason, the time, and what the agent did next. A high rate of approvals with no edits is a signal to loosen the gate; frequent edits mean the gate is catching real mistakes.

## Implications for ai2ui.uk / ui121

The comparison is the competitive map. Most frameworks “you build the review surface.” ai2ui.uk is that surface, sold across LangGraph, OpenAI, Temporal, and MCP rather than locked to one vendor’s console. Marketing should use Airtable’s questions as the product checklist: does execution actually pause, can the reviewer edit, where does policy live, what happens if nobody answers, and is the audit reconstructable. Position against rubber-stamping and against post-hoc logs dressed up as control.
