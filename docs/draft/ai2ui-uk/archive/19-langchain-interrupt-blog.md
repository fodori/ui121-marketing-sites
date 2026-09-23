# LangChain blog: the interrupt primitive

- **Source:** https://www.langchain.com/blog/making-it-easier-to-build-human-in-the-loop-agents-with-interrupt
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

On 14 December 2024 the LangChain team announced `interrupt` as an easier way to pause a LangGraph agent for a person. They argue LangGraph was built for human-in-the-loop from the start, which is why persistence is a first-class step: every super-step reads and writes a checkpoint of everything the agent needs. That checkpoint is described as a scratchpad shared by the human and the agent. You can pause halfway, resume later, or let a person edit the checkpoint and continue from the edit.

Older options, breakpoints and a node-interrupt exception, were not enough once developers wanted more complicated pauses. `interrupt` is meant to feel like Python’s `input`, which blocks a terminal and returns whatever was typed. The terminal version cannot run in production because it holds the process and only works on a command line. `interrupt` pauses the graph, marks the thread interrupted, and stores the payload. A later invoke resumes with a command carrying the person’s response. It does not behave exactly like `input`: work in that node before the interrupt runs again on resume, earlier nodes do not. The benefit claimed is that a paused thread costs storage, not a live process, and can be resumed months later on another machine.

Workflows they list: approve or reject before an API call, review and edit graph state, review tool calls from the model before they run, and multi-turn conversation inside a multi-agent graph so one agent can gather facts from a person. They mention a Replit fireside conversation with Michele Catasta as evidence that human checkpoints were central to Replit Agent’s design, without quoting him here.

## Key facts

- Published 14 December 2024 by the LangChain team.
- Primitive: `interrupt` to pause; `Command(resume=...)` to continue on the same thread.
- Persistence model: checkpoint after steps, so pause and edit are possible.
- Resume reruns the node up to the interrupt. It does not rerun previous nodes.
- Paused threads are stored, not kept as running processes.
- Patterns: approve/reject, edit state, review tool calls, multi-turn human conversation in a larger graph.

## How it works

Call interrupt inside a node with the question or the proposed action. The runtime saves state and returns control. The application reads the thread, sees it is interrupted, shows the payload, and invokes again with the resume value. Because the node restarts, anything before the interrupt must be safe to repeat. The human’s value comes back as the return of interrupt, and the node continues.

## Implications for ai2ui.uk / ui121

This is the canonical framework-side pause. It solves durability and explicitly does not solve the production UI: there is no terminal text box. ai2ui.uk is the thing you invoke instead of `input`. Copy can use their own contrast, paraphrased: a local input call is easy and useless in production; a durable interrupt is the right primitive and still needs a human surface, notification, and audit. Mention the node-rerun rule in developer docs so integrators do not put a payment before the interrupt.
