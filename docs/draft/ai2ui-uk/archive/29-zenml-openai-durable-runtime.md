# ZenML: OpenAI Agents SDK needs a durable runtime

- **Source:** https://www.zenml.io/blog/openai-agents-sdk-durable-runtime
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Alex Strick van Linschoten’s 27 May 2026 ZenML post, bylined under a Kitaru product frame, separates the OpenAI Agents SDK (the harness) from a production runtime. The SDK knows the model, the tools, when a tool needs approval, how handoffs work, how run state is represented, and how traces behave. That is enough on a laptop. Wrapping it in FastAPI, a worker, and Kubernetes with retries still does not answer where an interrupted approval lives, who owns the wait, what may be replayed, and what wakes the workflow when a reviewer replies tomorrow.

The failure mode is concrete. A support agent has already looked up order ORD-1007 and a shipping policy. The next step is a refund, a cancellation, an email, or account credit. The reviewer is at lunch or in another time zone. You do not want a pod parked for nineteen hours, and you do not want to restart the agent and risk duplicate side effects. OpenAI’s interruption and resumable run state are the right SDK primitive. Kitaru’s claim is to turn that interruption into a workflow wait so the worker can exit.

Two checkpoint strategies are described. `runner_call` wraps the whole SDK run as one boundary, which returns one clean result and replays the entire run if it never completed. `calls` checkpoints supported model calls and local function-tool calls separately, which helps when individual calls are expensive, but can make the flow’s final result ambiguous if several checkpoints look terminal. An example comparison run produced five terminal checkpoints and a named ambiguity error. The adapter serialises run state to JSON, wraps it with the SDK version, and on resume validates, loads, applies the decision, and hands state back to the SDK. It does not checkpoint every hosted tool, MCP call, or handoff. It defaults to failing if context cannot be reconstructed and if the SDK version differs. It does not make external side effects exactly-once: a charge that succeeded before a crash is still a charge. Capture policy can drop raw inputs when support messages are sensitive. An MCP server and skills are pitched so another agent can inspect waits, logs, and retries.

## Key facts

- Published 27 May 2026. Author Alex Strick van Linschoten. Product: Kitaru around OpenAI Agents SDK.
- Illustrative wait: a reviewer replying the next day; the post uses nineteen hours as the “do not hold a pod” picture.
- Strategies: `runner_call` (one outer checkpoint) and `calls` (per supported model and local tool call).
- Example order id in the walkthrough: ORD-1007. One sample runner_call checkpoint finished in about 24 seconds.
- Defaults mentioned: strict context, strict SDK version. Isolated runtime is rejected for adapter checkpoints because live SDK objects are not safe to ship.
- Side effects still need idempotency keys. The adapter will not undo a payment provider.

## How it works

The OpenAI runner returns an interrupted result. Kitaru stores an envelope around the serialised run state and opens a wait. The Python process can stop. A person approves or rejects. Kitaru builds a resume request, deserialises state, applies the decision, and asks the SDK to continue. Replay reuses completed checkpoints instead of repeating them. OpenAI tracing remains the view inside the SDK; Kitaru’s record is what completed, what is waiting, and what can resume.

## Implications for ai2ui.uk / ui121

The post is a clean split ai2ui.uk should repeat: the SDK pauses, something else must own the wait and the human. Kitaru owns workflow durability. It still needs a place the reviewer actually decides. ai2ui.uk can be that place, posting approve or reject into a wait that already knows how to resume OpenAI state. Marketing should not pretend a UI replaces idempotency. Say the gateway records who decided, while the runtime records that the run can continue, and the payment tool must still be safe to retry.
