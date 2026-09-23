# AG-UI state management

- Source: https://docs.ag-ui.com/concepts/state
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 06 (AG-UI docs)

## Summary

State in AG-UI is a structured object that survives across turns, is visible to both agent and frontend, and updates while the run is in progress. The agent reads it to decide; the UI reads it to render; either side can write. Two mechanisms: STATE_SNAPSHOT replaces the whole document (start of a run, reconnect, or a large change that should reset the baseline). STATE_DELTA is a list of JSON Patch operations (RFC 6902): add, remove, replace, move, copy, test, with a JSON Pointer path. Deltas are for small, frequent updates. The client applies them in order. If a patch fails, the reference implementation logs and skips rather than corrupting state, and the page says the client can ask for a fresh snapshot. Patches are applied atomically via a library such as fast-json-patch, without mutating the previous document in place.

Human-in-the-loop is a state pattern as much as a tool pattern. The agent writes a proposal (send this email to this person). The UI shows it. The user edits or rejects by writing state back. CopilotKit’s shared state, especially with LangGraph, is the worked example: `useCoAgent` on the client, `copilotkit_emit_state` on the agent. Best practice: snapshots rarely, deltas often, shape the object so patches stay small, resolve conflicts, resync on error, and do not put secrets in shared state.

## Key facts

- Snapshot replaces; delta is JSON Patch (RFC 6902).
- Both agent and UI may write.
- CopilotKit hooks named: useCoAgent, copilotkit_emit_state.
- Failed patches should not half-apply; resync with a snapshot.
- Secrets do not belong in shared state.

## How it works

The stream carries either a full document or a patch list. The UI reduces that into the object it renders. User edits go back on the next run input so the agent sees them. Blocks on screen can be pure functions of this object: a table is a view of `/items`, not a one-off tool payload that drifts from the task.

## Implications for generatedui / ui121

ui121’s task model should be this shared object. Blocks bind to paths in it, the way A2UI binds components to a data model. The agent proposes a change as a patch; the user confirms by editing state; MCP tools commit only what the state says was approved. That is more coherent than a chat log as the source of truth. The no-secrets rule is a compliance line for generativeui.uk.
