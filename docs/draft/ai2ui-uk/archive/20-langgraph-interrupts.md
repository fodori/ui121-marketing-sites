# LangGraph interrupts reference

- **Source:** https://docs.langchain.com/oss/python/langgraph/interrupts
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The LangGraph interrupts reference is the plumbing manual behind the blog post and the middleware. Interrupts pause graph execution until external input arrives, which is how approval, review, and ask-human flows are implemented. Static breakpoints (`interrupt_before` and `interrupt_after`, at compile time or per run) are for stepping through a graph while debugging. The docs say they are not the recommended tool for human-in-the-loop. Use the `interrupt` function inside a node instead. Breakpoints still require a checkpointer. Resuming a breakpoint is done by invoking again with empty input on the same thread, which runs until the next breakpoint.

Dynamic interrupt is different. The node calls interrupt with a payload. That payload is what the caller sees. Resume passes a value back, and that value is what interrupt returns. The critical mechanic, repeated in the docs and in LangChain’s own skills notes, is that resume restarts the node from the beginning. Code before interrupt runs again. Side effects before the pause must be idempotent, or they must be moved after the pause. If one node interrupts more than once, resume values match by index order, so the order of interrupt calls is part of the contract.

Rules that matter for a gateway: a checkpointer is mandatory, a thread id identifies which paused run to resume, and the resume command is the input pattern meant for invoke. Passing other command shapes as if they were user input is a known way to look stuck. Several common patterns sit on this primitive: approve or reject a tool, let a person edit state, validate tool arguments inside the tool, and collect a free-text answer.

## Key facts

- Recommended HITL API: `interrupt(value)` plus `Command(resume=value)`.
- Static `interrupt_before` / `interrupt_after` are breakpoints. Docs steer production HITL away from them.
- Checkpointer required. Thread id required.
- On resume, the node re-executes from the start. Only interrupt calls that already have a resume value return immediately.
- Multiple interrupts in one node are index-matched.
- Debug resume of a static breakpoint uses an empty input, not a resume value.

## How it works

Compile the graph with a saver. Run it with a config that includes the thread id. When a node hits interrupt, the result surfaces the payload and the graph stops. The process can exit. Later, the same thread is invoked with a resume command. Execution enters the node again, replays up to the interrupt, receives the human value, and continues. If the node interrupts a second time, the next resume value is consumed. Callers inspect state to see which node is next when using breakpoints.

## Implications for ai2ui.uk / ui121

Every LangGraph product rebuilds three things this page does not give them: a place to render the payload, a way to notify a person who is not holding the thread id, and a safe resume that does not double-charge. ai2ui.uk should document the idempotency rule next to its LangGraph quickstart. The gateway stores the payload and the thread id, shows a human the question, and resumes with exactly one value in order. That is the difference between a docs primitive and a doorbell.
