# Medium — LangGraph part 4, human-in-the-loop

Source: https://medium.com/@sitabjapal03/langgraph-part-4-human-in-the-loop-for-reliable-ai-workflows-aa4cc175bce4
Fetched: 2026-09-23
Status: ok

## Summary

Sitabja Pal’s 1 May 2025 article, the fourth in a LangGraph series, treats human-in-the-loop as a way to absorb model mistakes. Reasons to involve a person: review tool calls before they run, validate generated text, supply missing context in a multi-turn chat, and pause on high-stakes actions such as email or a payment. The building blocks are LangGraph breakpoints, `interrupt`, and `Command`.

Breakpoints (`interrupt_before` / `interrupt_after`) pause around a node at compile time or run time and need a checkpointer plus a thread id. Resume is another invoke with null input, optionally after `update_state`. `interrupt` pauses inside a node and ships any JSON-serializable value to the client; the resume value comes back as the function’s result. `Command` can both update state and jump to another node.

Three patterns are sketched. Approve or reject: interrupt with a question and a preview, then `Command(goto="proceed")` or abort. Human edit: interrupt with the current summary and write the corrected text into state. Multi-turn: each interrupt appends a human message and the graph can ask again. The full example is a weather tool on Groq (`llama-3.1-8b-instant`) with a memory saver. If the model emitted tool calls, routing goes to a human-review node; otherwise the graph ends. The interrupt shows the tool call. Resume actions are `continue` (run the tool), `update` (replace arguments, keeping the same message id so it does not duplicate), and `feedback` (a tool message back to the model). The sample stream shows a tool call for city `sf` and a human update to `San Francisco, USA` before the tool runs. Token counts in the pasted run are small (on the order of a few hundred total tokens per call).

## Key facts

- Published 1 May 2025. Author: Sitabja Pal. Series part 4.
- Primitives: `interrupt_before` / `interrupt_after`, `interrupt(...)`, `Command(update, goto)`, `MemorySaver`, thread id.
- Review actions in the example: `continue`, `update`, `feedback`.
- Model: Groq `llama-3.1-8b-instant`, temperature 0.3. Tool: `weather_search`.
- Feedback is inserted as a tool message so the transcript stays valid after an assistant tool call.
- Static breakpoints are shown as step-debugging; the weather example uses `interrupt` for the actual review.

## How it works

1. LLM node runs with tools bound.
2. Router sends tool calls to human review and plain answers to the end.
3. Human node calls `interrupt` with the proposed tool call.
4. Client resumes with an action. Continue runs the tool. Update rewrites arguments then runs it. Feedback returns to the LLM node.
5. Tool results go back to the LLM node, which may answer or request another review.

## Implications for askmeapi.com / ui121

This is the same pause/resume contract as the LangChain middleware notes, written as a blog with an explicit continue/update/feedback enum. AskMeAPI can return that enum plus the edited arguments. ui121 is the weather-style review only when the payload is small; the more important pattern is `update`, where the human fixes fields instead of rejecting the whole step. Preserving message identity when editing is a framework detail; the product equivalent is “edit this proposal in place,” which a form does naturally.
