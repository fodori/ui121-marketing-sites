# Medium: interrupts, persistence, and state in LangGraph

- **Source:** https://medium.com/data-science-collective/architecting-human-in-the-loop-agents-interrupts-persistence-and-state-management-in-langgraph-fa36c9663d6f
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Burak Degirmencioglu’s 4 December 2025 essay argues that human-in-the-loop in production is a state-management problem, not an error handler. The middleware picture matches LangChain’s tool policy: interrupt on sensitive calls such as SQL, file writes, and payments, with approve, edit, or reject. The stronger claim is that persisted graph state lets a person change the trajectory mid-flight, so the human co-authors the outcome.

Static breakpoints pause at node boundaries chosen in advance. `interrupt()` pauses inside a node when a runtime condition is true. Technically it stops the node, surfaces a payload, and continues when a resume command arrives, as if the node had been awaiting a call. The cost is idempotency. Resume re-runs the node from the top, so a paid API call or a database write placed before the interrupt can happen twice.

Checkpointers store a snapshot at each super-step: channel values, next nodes, config, metadata, and pending tasks. The thread id is the key that reloads that snapshot. The same mechanism supports time travel: start again from a checkpoint id, fork, or try another branch without deleting the original. Three patterns are spelled out. Approval before a critical tool. Direct state edits via an update that is attributed to a node so reducers stay consistent. Interrupts inside tools so argument checks are reusable.

Streaming is treated as a trust feature. If the agent is silent for a long stretch and then suddenly demands a decision, the person has no context. Values mode is heavy. Updates mode sends deltas. Message mode streams tokens. Custom writers can emit progress such as “scanning clauses” before the interrupt, so the reviewer knows why they were summoned.

Memory is split. The checkpointer is short-term and scoped to the thread, which is what makes a pause of hours or days possible. A separate store is long-term, namespaced by user, and can be searched semantically so later threads inherit preferences and past corrections. The author suggests that memory of past human fixes should reduce how often you need to interrupt.

## Key facts

- Published 4 December 2025 in Data Science Collective. Author Burak Degirmencioglu.
- Snapshot fields named: values, next, config, metadata, tasks.
- Time travel uses a checkpoint id to fork from a prior state.
- Streaming modes: values, updates, messages, plus custom events from a stream writer.
- Long-term store examples: in-memory and Postgres, with namespaces such as user id plus “memories”.
- Idempotency warning: code before interrupt re-executes on resume.

## How it works

A node or middleware calls interrupt with the proposed action. The checkpointer has already saved the thread. The client shows the payload. Resume re-enters the node, returns the human value from interrupt, and continues. If the person must correct a hallucination, they update state as if a node had written it. Tools can contain their own interrupt so every caller of that tool gets the same validation. Custom stream events fill the wait so the UI is not a sudden modal.

## Implications for ai2ui.uk / ui121

The DIY cost is visible: checkpointer, thread ids, idempotent nodes, a store for cross-thread memory, and a streaming UX so the interrupt is not a jump scare. ai2ui.uk does not replace the checkpointer. It is the client that renders the payload, collects the edit, and can show progress events while the human is thinking. Marketing line: framework pauses are cheap to call and expensive to operate; the human gateway is the part teams should not rebuild per graph. Mention time-travel only as a developer benefit of LangGraph, not as an ai2ui feature unless forking is actually offered.
