# LangChain: human-in-the-loop middleware

- **Source:** https://docs.langchain.com/oss/python/langchain/human-in-the-loop
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

LangChain’s HITL middleware pauses selected tool calls and waits for a person. After the model responds, and before tools run, the middleware compares each call with an `interrupt_on` policy. If a call matches, it raises an interrupt. LangGraph’s checkpointer saves the graph so the process can stop and resume later. Production notes name persistent savers such as Postgres or Mongo; memory is for prototypes. Every invoke needs a thread id so the paused conversation can be found again.

Four decision types are first-class. Approve runs the original arguments. Edit changes arguments before execution, with a warning that large edits can make the model retry or change plan. Reject skips the tool and feeds feedback back; if you omit a message, a default tells the model not to retry the same call unless the user asks. Respond does not run the tool at all: the person’s message becomes the tool result. The docs are explicit that respond is for “ask user” tools whose real implementation is the human, and must not be used to deny a side effect, because the model will treat it as success.

Since langchain 1.3.3, a `when` predicate can interrupt only some calls, for example writes outside a workspace directory, or SQL that is not a read-only select. Several paused calls in one step need one decision each, in the same order. Streaming can surface tokens and then an interrupted flag.

## Key facts

- Decisions: approve, edit, reject, respond.
- `interrupt_on` values: true (default decisions), false (auto-approve), or a config with allowed decisions, a description, and an optional predicate.
- Checkpointer is mandatory. Thread id is mandatory to resume.
- Conditional interrupts require langchain 1.3.3 or newer.
- Resume payload is a command whose decisions line up with `action_requests`. Each action also has a `review_configs` entry listing allowed decisions.
- Lifecycle: model responds, middleware inspects tool calls, builds a request, interrupts, then executes or synthesises tool messages from the decisions.

## How it works

You attach `HumanInTheLoopMiddleware` when creating the agent and pass a checkpointer. A run proceeds until a gated tool is proposed. With the v2 result shape, interrupts are on the output. The application shows the action name, arguments, and description, collects decisions, and invokes again with a resume command on the same thread. Approved and edited calls execute. Rejected calls become feedback messages. Respond calls become a successful tool message containing the human’s reply. Custom policies can call the interrupt primitive directly if the four decisions are not enough.

## Implications for ai2ui.uk / ui121

The docs already name the ai2ui thesis: an ask-user tool whose implementation is the person. The middleware still assumes you render the card. ai2ui.uk can host that card, including edit and respond, and return the decision list in order. Marketing should warn, as the docs do, that respond is not a deny button. A product difference worth claiming: one hosted renderer for approve, edit, reject, and free-text answer, with the predicate (only interrupt this call) staying in the customer’s policy.
