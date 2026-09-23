# OpenAI Agents SDK (JS) — human-in-the-loop

Source: https://openai.github.io/openai-agents-js/guides/human-in-the-loop/
Fetched: 2026-09-23
Status: ok

## Summary

The JavaScript Agents SDK treats human approval as a pause in a run, not as a chat prompt. A tool can declare that it needs approval, either always or only when a function looking at the parsed arguments says so. If approval is required and no decision is stored yet, the tool does not run. The turn ends with a list of pending interruptions, and the caller later approves or rejects each one on the saved run state, then resumes the same run.

The approval surface is the whole run, not only the top-level agent. A tool that belongs to an agent reached by handoff, or to a nested agent used as a tool, still shows up as an interruption on the outer result. You approve it on the outer state and resume the original root run. Nested agents can raise approvals at two layers: the agent-as-tool itself, and tools inside the nested agent after it starts. Both use the same outer interruption list.

The SDK also lets you add new user input while a run is paused, keep sticky approve-or-reject defaults for the rest of the run, and serialize the paused state so a later process can resume it. Some tool types (local shell, apply-patch, hosted MCP) can decide in code via an approval callback and never pause. Ordinary function tools use the manual interruption path. Malformed tool arguments fail closed: the SDK asks for approval without running the callback or the tool, and approving that call still does not execute it.

## Key facts

- `needsApproval` can be a boolean or an async function of the parsed arguments.
- Pending decisions arrive as `interruptions` containing tool-approval items.
- Resume is `state.approve` / `state.reject`, then `runner.run` with the original top-level agent and the updated state.
- `{ alwaysApprove: true }` and `{ alwaysReject: true }` stick for later calls to the same tool and survive state serialization. An exact decision for one call id overrides the sticky default.
- Rejection can include a message sent back to the model; otherwise a formatter or a default rejection text is used.
- You do not have to resolve every pending item in one pass. Unresolved items pause the run again.
- Input guardrails on function tools run after approval by default. A run option can also run them before the approval is shown.
- Computer-tool interruptions can batch several actions (for example move then click) into one approval. Serialized state keeps both the current computer tool name and the older preview name.
- Streaming runs expose interruptions after the stream completes. Sessions should be passed again on resume so the continued turn appends to session memory.

## How it works

1. The model proposes a tool call.
2. The SDK evaluates the approval rule after arguments parse into an object.
3. If approval is required, it records a tool-approval item and does not execute.
4. The result returns the pending interruptions. The app stores the run state (the guide’s CLI example writes it to a file; it warns browser and mobile UIs to keep snapshots on the server).
5. A person, or code, approves or rejects. Optional message, optional sticky decision, optional extra user input staged with `addInput` before resume.
6. The runner continues from the interrupted point, including nested agent-tool work.

Section outline a docs page could mirror: when to pause, defining the gate, what comes back in the interruption, resolving and resuming, nested agents and handoffs, sticky decisions, adding input while paused, programmatic callbacks versus a human, streaming and sessions.

## Implications for askmeapi.com / ui121

This SDK already pauses and resumes. It does not deliver the question to a person or validate a structured human answer. AskMeAPI can sit in the gap between “interruption returned” and “state.approve called”: route the tool name and arguments to Slack, email, or a generated page, then map the human’s typed decision back onto approve or reject. ui121 is the page that renders those arguments as a review form instead of a raw JSON dump, which the SDK explicitly leaves to the application.
