# LangChain Python — human-in-the-loop middleware

Source: https://docs.langchain.com/oss/python/langchain/human-in-the-loop
Fetched: 2026-09-23
Status: ok

## Summary

LangChain’s HITL middleware sits after the model responds and before tools run. It checks each proposed tool call against a policy. If a call needs a person, the middleware raises an interrupt, LangGraph’s checkpointer saves the graph, and execution waits. A human decision then decides the fate of that call. Production is expected to use a durable checkpointer such as Postgres or Mongo; an in-memory saver is only for prototypes. Every invoke needs a thread id so the same conversation can pause and resume.

Four decision types are built in. Approve runs the tool with the original arguments. Edit replaces the tool name and arguments before execution. Reject skips the tool and feeds a message back to the model. Respond does not run the tool at all; the human’s message is returned as a successful tool result, which is the “ask the user” pattern. The docs warn not to use respond to deny a side-effecting tool, because the model will treat it as success. Decisions for a batch must be returned in the same order as the actions. Large edits can make the model reconsider and call the tool again, so edits should stay conservative.

Policy is a map from tool name to `True` (all decisions), `False` (auto-approve), or a config listing allowed decisions, a description, and an optional `when` predicate. The predicate, available from LangChain 1.3.3, sees the tool-call request and can interrupt only some calls, for example writes outside a workspace directory or SQL that is not a read-only select. Calls that do not match are omitted from the review batch.

## Key facts

- Hook point is `after_model`, before tool execution.
- Decisions: `approve`, `edit`, `reject`, `respond`.
- Resume shape is `Command(resume={"decisions": [...]})` on the same thread, with `version="v2"` in the examples.
- Interrupt value includes `action_requests` (name, arguments, description) and `review_configs` (allowed decisions per action).
- A checkpointer is mandatory. Thread id is mandatory.
- `when` predicates require `langchain>=1.3.3`.
- Streaming can watch `stream.interrupted` and `stream.interrupts`, then resume under the same streaming API.
- Default rejection text tells the model the tool did not run and not to retry unless the user asks. Side-effecting tools should send a domain-specific message instead.

## How it works

1. Model proposes one or more tool calls.
2. Middleware builds a review request for calls that match policy.
3. Graph interrupts and persists.
4. Reviewer returns one decision per action, in order.
5. Approved and edited calls execute. Rejected calls become feedback tool messages. Respond calls become the human’s text as a tool result.
6. The agent continues.

## Implications for askmeapi.com / ui121

This is the closest framework primitive to “ask a human as a tool,” especially `respond`. The middleware still assumes the caller is sitting on the thread and will supply the decision object. AskMeAPI can collect that decision out of band (email, Slack, a form) and submit it later. ui121 maps cleanly onto the four outcomes: yes, edited fields, no-with-reason, and a free-text answer when the human is the tool. The `when` predicate is a reminder that routing rules (amount, path, query shape) belong in policy, not in the form.
