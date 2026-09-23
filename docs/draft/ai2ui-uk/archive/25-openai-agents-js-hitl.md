# OpenAI Agents SDK (JavaScript): human-in-the-loop

- **Source:** https://openai.github.io/openai-agents-js/guides/human-in-the-loop/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The JavaScript guide mirrors the Python approval flow. A tool sets `needsApproval` to true or to an async function that returns a boolean. When the model calls that tool, the run pauses and returns interruptions plus a resumable state. The host approves or rejects on that state and runs again. The same surface covers the current agent, a handoff, and a nested `agent.asTool()` call. Nested interruptions still sit on the outer result, so you resume the original root run, not the inner agent.

Two layers can both require approval: the agent-as-tool wrapper itself, via `asTool({ needsApproval })`, and tools inside the nested agent after that nested run starts. Both come back through the outer interruption list. If the application can decide in code, some tool types support approval callbacks and the run does not pause. The page points those readers at the tools guide and keeps this page on the manual path.

The practical client contract is small. Inspect `result.interruptions`. If the list is non-empty, take `result.state`, approve or reject each interruption, and call `run` with the original agent and that state. Do not start a fresh user turn. That preserves turn accounting and history. Streaming and delayed review use the same state object: wait until the stream settles, resolve interruptions, store the serialised state if the person will answer later, and resume the same run.

## Key facts

- Package surface: `@openai/agents` tool helper, Zod parameters, `needsApproval`, `run`.
- Paused runs expose `interruptions` and `state`.
- Nested agent tools and handoffs do not create a second approval channel.
- Programmatic callbacks exist for some tools; function tools in this guide use the manual pause.
- Resume the root agent with the saved state.

## How it works

Define the tool with approval required. Run the agent on the user message. If interruptions exist, show each pending call to a person or a policy service. Record approve or reject on the state. Run again. The SDK continues the tool or returns a rejection into the model and proceeds. Further tools can interrupt the resumed run. The application loop is “while interruptions, resolve, run again.”

## Implications for ai2ui.uk / ui121

JavaScript clients are where a hosted approval page is natural: a Next.js or browser app should not hold the full run state. ai2ui.uk can be the page the JS app opens, returning only a decision id. The integration story is “OpenAI’s JS SDK already pauses; point the interruption at a URL.” Keep parity with the Python security notes even though this guide is shorter: server-owned state, opaque ids, no client-supplied tool arguments.
