# LangSmith — human-in-the-loop using the server API

Source: https://docs.langchain.com/langsmith/add-human-in-the-loop
Fetched: 2026-09-23
Status: ok

## Summary

LangSmith’s server guide shows how a deployed LangGraph agent pauses for a person and how a client resumes it over HTTP. The recommended path is a dynamic interrupt: the graph calls `interrupt` with any JSON-serializable payload, the run stops, and the wait response includes an `__interrupt__` entry with that payload, a resumable flag, a namespace, and when the pause happened. The client resumes by posting a command whose `resume` value becomes the return value of `interrupt` inside the graph.

The same page also documents static breakpoints (`interrupt_before` / `interrupt_after`), set either when the graph is compiled or on a single run. LangChain explicitly says static breakpoints are for debugging and testing, not for human-in-the-loop workflows. Resuming a static breakpoint is just another run on the same thread with empty input, which continues until the next breakpoint.

Examples are given three ways: Python and JavaScript LangGraph SDK clients, and raw cURL against the deployment. The flow is always create a thread, run until the interrupt, then run again with a resume command. A short graph sample shows a node that interrupts with the text to revise and writes the human’s string back into state.

## Key facts

- Dynamic interrupt payload is any JSON-serializable value.
- The wait response surfaces `__interrupt__` with `value`, `resumable`, `ns`, and `when`.
- Resume is `Command(resume=...)` in Python or `{ command: { resume } }` in JavaScript and cURL.
- Threads are created first (`POST /threads`); runs wait on `/threads/{id}/runs/wait`.
- Static breakpoints exist but are called out as the wrong tool for approval workflows.
- The page points onward to patterns for approving or rejecting actions, asking the user, reviewing tool calls, and validating human input.

## How it works

1. Deploy a graph whose node calls `interrupt(payload)`.
2. Create a thread on the Agent Server.
3. Start a run with the initial input. The call returns when the interrupt fires.
4. Show `value` to a reviewer.
5. Start another run on the same thread with a resume command. The human’s value is what `interrupt()` returns, and the node writes it into state.

## Implications for askmeapi.com / ui121

The server API is already “pause, return JSON, resume with JSON.” What it does not include is who the human is or which channel they answer on. AskMeAPI can be the system that receives that interrupt payload, renders it, and posts the resume command when a person answers. ui121 can be the review surface for the payload, especially when the value is a schema-shaped object rather than a single edited string.
