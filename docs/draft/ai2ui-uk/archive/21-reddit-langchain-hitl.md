# Reddit: LangGraph human-in-the-loop thread

- **Source:** https://www.reddit.com/r/LangChain/comments/1s6qidj/how_i_implemented_humanintheloop_with_langgraphs/
- **Fetched:** 2026-09-23
- **Status:** partial

## Summary

The live thread did not load (timeout, then a blocked JSON endpoint). A later search returned indexed text of this same post, title “How I implemented human-in-the-loop with LangGraph's interrupt pattern — full breakdown.” The note below is that excerpt, not the full comment tree.

The author says the hard part of a production agent was the checkpoint, not the model. They compile the graph with `interrupt_before` set to a node they call the integrator. Execution stops before that node, so a real-world action does not fire. State is written to SQLite. An approve call resumes the same run. They warn that the checkpointer has to be the async SQLite saver. Without it, a later API call starts the graph over instead of continuing. The approval route then invokes the existing run with the stored thread config and does not re-run the earlier nodes.

The highest visible reply agrees the interrupt itself is the easy part. What hurts is state that outlives one process. The state schema becomes a product contract: a small change breaks resume for runs already stored. They version the shape and are careful about what is persisted versus recomputed. They also ask about idempotency on the integrator. The pause protects you before the action. After resume, a retry or a partial failure will run the external action twice unless that action is safe to repeat. The author replies that they had missed the async saver, that Pydantic models for state have held up, and that adding fields later still feels like a hack.

## Key facts

- Subreddit: r/LangChain. Post id `1s6qidj`. Live page blocked on 2026-09-23. Body from search excerpts of that URL.
- Pause point: `interrupt_before=["integrator"]` at compile time.
- Persistence they name: `AsyncSqliteSaver`. Without it, resume restarts.
- Resume: the approval endpoint continues the stored thread. Earlier nodes are not run again.
- Comment concerns: version the state schema, and make the side effect idempotent.

## How it works

The graph runs until the node that would touch the outside world. The checkpointer freezes the state. A person approves through an API. The same thread id is invoked again and the integrator runs once. If the process died in between, SQLite still has the checkpoint. If the integrator is not idempotent, a second resume can double-apply the action. Old checkpoints break if the state fields change underneath them.

## Implications for ai2ui.uk / ui121

This is the DIY version of the gateway. A developer wires a pause in front of the dangerous node, stores the run, and builds an approve button. The comments are the product requirements they hit next: the waiting state is a contract, and the human’s yes must not cause the action twice. ai2ui can sell that pause, the durable wait, and a single approval that is safe to retry, instead of leaving each team to discover the async saver and the idempotency bug.
