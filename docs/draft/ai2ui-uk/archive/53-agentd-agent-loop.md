# agentd: the agent loop and parked asks

- **Source:** https://agentd.dev/docs/agent-loop/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

agentd’s loop documentation separates a supervisor, which owns durable state, from a child process that runs the model and MCP tools. Tools that change state round-trip to the supervisor so there is one writer. `ask_human` is a deferred internal tool. It parks the turn, in the same family as sleep, await, a sub-agent run, a workflow wait, a think step, and context compaction. A parked turn spends no tokens and no CPU, but it still occupies a parallel-turn slot and holds the context lock, so “waiting for a human” is not free in the scheduler even when it is free in the model bill.

Defaults published on the page, useful as a concrete reference rather than as universal constants: at most 4 parallel turns; 500 steps per run; 2,000,000 tokens; a 3600-second deadline; a 4096-token completion cap; two schema re-asks; four loop repeats; 600 seconds for an MCP call; 120 seconds for a model call; compaction when context hits 0.7 of the window, keeping the last 12 items; at most 8 skills loaded. A preflight “think” child classifies intent as chat, question, status, command, task, steer, or clarify, and it can run automatically when a message is longer than 280 characters or contains work verbs. A clarify intent short-circuits the heavier loop. The only door for a root turn is an A2A inbox message. MCP calls carry an idempotency key. Finishing a round does not abort work already in flight. Token estimates use a rough characters-divided-by-four heuristic.

The marketer’s slice is smaller than the architecture: asking a human parks the turn against a durable inbox, the supervisor remains the writer, and the wait is designed to survive without burning model calls.

## Key facts

- Roles: supervisor owns state; child runs model and MCP; mutating tools return to the supervisor.
- `ask_human` parks the turn. Parked turns use no tokens or CPU and still consume a parallel slot and the context lock.
- Defaults: 4 parallel turns, 500 steps, 2,000,000 tokens, 3600s deadline, 4096 completion cap, 2 schema re-asks, 4 loop repeats, MCP 600s, model 120s, compact at 0.7 keeping 12, 8 skills.
- Preflight intents: chat, question, status, command, task, steer, clarify. Auto-think if the message exceeds 280 characters or looks like work.
- Inbox: `a2a_message` is the only root-turn entry. MCP calls are idempotent by key.

## How it works

A message arrives on the inbox and becomes a root turn. Preflight may classify it and, for clarify, stop early. Otherwise the child calls the model. If the model calls `ask_human`, the supervisor parks the turn and waits for a later inbox message carrying the answer. Resume continues with the stored context. Idempotency keys stop a retried tool call from doubling a side effect while the human was away. Compaction can shrink context before or after the wait so the resume still fits.

## Implications for ai2ui.uk / ui121

agentd already models the durable wait: park, don’t poll the model, resume from an inbox. ai2ui.uk is the human-facing half of that inbox. The product requirement that follows from their scheduler note: a pending ask must be visible as occupying capacity, with an owner and a deadline, not as an invisible block. Defaults like a one-hour run deadline mean a human gateway has to complete or explicitly extend before the runtime gives up. Marketing: “the agent parks; the person gets a page; the inbox resumes.” Do not copy their limit table into a spec. Use it to show that serious runtimes already budget for the wait.
