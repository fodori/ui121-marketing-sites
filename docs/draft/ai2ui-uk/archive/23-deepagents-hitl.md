# Deep Agents: human-in-the-loop

- **Source:** https://docs.langchain.com/oss/python/deepagents/human-in-the-loop
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Deep Agents, LangChain’s longer-running agent stack, does not invent a second approval system. It reuses LangGraph interrupts. You pass an `interrupt_on` map into `create_deep_agent`. When that map is set, human-in-the-loop middleware is added. If a run is cancelled or interrupted before a tool returns, a patch middleware in the same stack repairs the message history so a dangling tool call does not poison the next step.

Configuration matches the LangChain middleware page. True means pause with the default decisions: approve, edit, reject, and respond. False means that tool never pauses. A richer config limits which decisions are allowed. In Python, a `when` predicate can pause only some calls. A checkpointer is still required; the docs show an in-memory saver for the basic example and expect a durable saver in production.

The flow diagram on the page is the product in one picture. The agent proposes a tool. If no interrupt is configured, it executes and loops. If an interrupt fires, a human approves or edits (then execute) or rejects or responds (then a tool message goes back to the agent without execution). Respond remains the ask-user path. Reject is the deny path.

This page matters less as new mechanics and more as evidence that each new agent framework in the LangChain family grows an HITL chapter that points at the same interrupt. Builders following Deep Agents still supply the UI.

## Key facts

- Entry point: `interrupt_on` on `create_deep_agent`.
- Middleware added automatically: human-in-the-loop middleware. Related: patch-tool-calls middleware repairs history if a tool never returns.
- Decision set: approve, edit, reject, respond.
- Conditional `when` predicates are documented for Python, consistent with langchain 1.3.3-era middleware.
- Checkpointer still required. Memory saver is the local example.

## How it works

Name the sensitive tools in `interrupt_on`. The agent runs until it wants one of those tools. The middleware interrupts. The caller presents the proposed call, returns a decision, and the stack either executes, executes the edited call, or inserts a tool message for reject or respond. History repair runs if the tool call would otherwise be left incomplete. Resume rules are the LangGraph rules: same thread, checkpoint, and idempotent work before the interrupt.

## Implications for ai2ui.uk / ui121

Framework proliferation is the point of this page. Deep Agents, LangChain middleware, and raw LangGraph interrupts are three docs for one pause. ai2ui.uk should offer one integration that all three can call, because the human decision payload is the same shape. Marketing: “another framework, same missing screen.” Developer docs can say Deep Agents customers pass decisions back through the existing resume command; the gateway only hosts the question and stores the audit.
