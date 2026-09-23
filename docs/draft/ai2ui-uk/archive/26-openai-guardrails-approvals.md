# OpenAI: guardrails and human review

- **Source:** https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

OpenAI’s guide splits automatic checks from human decisions. Guardrails validate input, output, or tool behaviour and can stop a run. Human review pauses a run so a person or a policy can approve or reject a sensitive action. The selection table is blunt: block bad user requests with input guardrails, redact or validate the final answer with output guardrails, check tool arguments and results with tool guardrails, and pause before side effects — cancellations, edits, shell, sensitive MCP — with human-in-the-loop approvals.

Input guardrails can run in a blocking mode before the main agent starts, which the guide recommends when starting the agent is expensive or risky, or in parallel when latency matters more than avoiding wasted work. The approval example is a cancel-order tool with `needsApproval`. The first run returns interruptions. The app approves them on the state and runs again. The same pattern applies after a handoff or inside a nested agent tool.

The lifecycle is four steps: record an interruption instead of executing, return interruptions plus resumable state, approve or reject, resume that state rather than starting a new turn. If review takes time, serialise the state and resume later. It is still the same run.

Guardrail scope is easy to get wrong. Input guardrails run only for the first agent in a chain. Output guardrails run only for the agent that produces the final output. Tool guardrails run on the tools they are attached to. In a manager workflow, checks have to sit on the tool that causes the side effect.

A cybersecurity section tells authorised workflows to check target, action, arguments, identity, and engagement window before execution; to show a separate reviewer only the proposed action and the context needed to judge it; to deny out-of-scope hosts, credential theft, persistence, exfiltration, destructive changes, production access, and policy bypass; to pause ambiguous or high-risk actions; to keep filesystem, network, identity, and project boundaries independent; to record decisions and outcomes; and to fail closed if review times out or disappears. Responses API and Agents SDK apps do not inherit Codex auto-review. You add review in your own harness.

Streaming does not invent a second approval system. Wait for the stream to settle, resolve interruptions, resume the same state.

## Key facts

- Two controls: guardrails (automatic) and approvals (human or policy pause).
- Side-effect examples: cancellations, edits, shell commands, sensitive MCP actions.
- Input guardrails: first agent only. Output guardrails: final agent only. Tool guardrails: attached tools only.
- Resume is the same run, including delayed review via serialised state.
- Fail closed on timeout or unavailable review for high-risk security actions.
- Codex auto-review is not inherited by Agents SDK applications.

## How it works

Guardrails throw or tripwire before or around model work. Approvals replace tool execution with an interruption. The application is the policy component: it shows the proposed call, decides, and resumes. For security-sensitive tools, a separate reviewer sees a minimal packet, and the system records the outcome. If that reviewer cannot be reached, the action does not proceed.

## Implications for ai2ui.uk / ui121

This is the market leader’s safety framing, and it still outsources the review screen. ai2ui.uk fits the “separate policy component” sentence: show the exact proposed action, hide the rest, record the decision, fail closed. Marketing should not blur guardrails and approvals. Guardrails are automatic filters. The gateway is the human pause before a side effect. A strong line for regulated buyers: timeout is deny, and the SDK will not do that for you unless your harness does.
