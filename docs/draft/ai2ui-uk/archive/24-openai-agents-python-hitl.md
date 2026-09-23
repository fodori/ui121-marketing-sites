# OpenAI Agents SDK (Python): human-in-the-loop

- **Source:** https://openai.github.io/openai-agents-python/human_in_the_loop/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The Python Agents SDK pauses a run until a person approves or rejects sensitive tool calls. A tool sets `needs_approval` to true, or to an async function that sees the run context, the parsed arguments, and the call id. If that function cannot safely inspect the arguments — missing, blank, malformed JSON, a non-object, or non-standard constants such as NaN — it is not called and the tool fails closed into manual approval. The same rule applies to realtime tool calls.

Approvals are run-wide. They surface for the current agent, for an agent reached by handoff, and for tools inside a nested agent-as-tool. Nested approvals still appear on the outer run, and you resume the original top-level agent. An agent used as a tool can itself require approval, and tools inside it can raise further approvals later. Both use the outer interruption list.

The result’s interruptions are tool-approval items with agent name, tool name, and arguments. You convert the result to run state, approve or reject each item, and run again. You may resolve only some items; unresolved ones pause the run again. Sticky always-approve or always-reject decisions are stored in that state and survive serialisation. For hosted MCP tools, a sticky decision is keyed by server label plus tool name, so the same tool name on another server is not auto-approved. Hosted MCP also needs both identity fields present or the sticky decision is not stored.

Rejection text can be customised run-wide with a formatter or per call on reject. The per-call message wins. Shell and apply-patch tools, and hosted MCP, can decide in code via callbacks and then never pause. Ordinary function tools use the manual path. Streaming works if you drain events before reading interruptions. Sessions should be the same session id so the resumed turn appends to the same history.

Long waits use `to_json` or `to_string` and the matching loader. The SDK does not authenticate that snapshot. The security section is unusually direct: keep the full snapshot on the server, show the reviewer only the tool details they may see plus opaque ids, authenticate the reviewer yourself, authorise them for that run, validate decision ids against server-side pending items, and do not accept a client-supplied replacement of the tool call or the serialised state. Prevent double resume. Do not put secrets in the context object unless you intend them to travel with the snapshot. If approvals sit for a long time, store a version marker for the agent definition or SDK so you deserialise with compatible code.

## Key facts

- `needs_approval` on function tools, agent-as-tool, shell, and apply-patch. Local MCP servers use `require_approval`. Hosted MCP uses `require_approval` of always or never, plus an optional callback.
- Fail-closed argument inspection for callable approval rules.
- Interruptions include nested and handoff tools; resume the outer agent.
- Sticky approvals are per call id unless always-approve or always-reject is set; hosted MCP stickiness is server label plus tool name.
- Serialised run state is untrusted if it has touched a client. Server-side approve/reject is the recommended browser pattern.
- Examples named on the page include streaming approvals, custom rejection text, shell HITL, MCP approval, session memory, and realtime approve/reject over WebSocket.

## How it works

The runner sees a tool call, checks for an existing decision, and either proceeds or appends an interruption and stops. The application persists state, collects a decision, calls approve or reject on the server-owned items, and runs the original agent with that state. New approvals can appear after resume. Programmatic callbacks skip the human entirely when policy can decide in code.

## Implications for ai2ui.uk / ui121

This is the vendor implementation to integrate, not to clone. ai2ui.uk should be the review UI that never receives the full run snapshot: opaque interruption ids, escaped tool arguments, server-side approve/reject. That matches OpenAI’s own warning and is a credibility point. Marketing: first-party SDKs pause the run; they still tell you to build an authenticated approval screen and to keep state off the device. Version pending tasks so a Tuesday prompt change does not resume a Monday snapshot blindly.
