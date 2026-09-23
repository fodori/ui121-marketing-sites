# Temporal Learn — durable human-in-the-loop

Source: https://learn.temporal.io/tutorials/ai/building-durable-ai-applications/human-in-the-loop/
Fetched: 2026-09-23
Status: ok

## Summary

This is part 2 of Temporal’s “foundations of durable AI” tutorial, dated in the source list as November 2025. Part 1 made a research workflow survive crashes. Part 2 says autonomy is the gap: the app would generate research, make a PDF, and send it with no chance to edit. Human input creates a new failure mode. If the site dies while someone is approving a payment, a non-durable system must either ask again (confusing if they already approved) or assume approval (dangerous). Temporal stores the signal in workflow history, so a crash after approval does not re-ask, and a later payment retry does not need a second click.

The tutorial implements a feedback loop on research text. The LLM drafts from the current prompt. The workflow waits. A `keep` signal leaves the loop and builds the PDF. An edit signal changes the prompt and generates again. A query lets the UI read the current draft at any time. The architecture is three pieces: a client sends the signal from the UI, a `@workflow.signal` handler writes state variables, and the main loop waits on those variables. The page stresses that the user can close the laptop; the workflow keeps running on the server. Approved work is not repeated. Failed downstream steps retry without a new human decision.

The lesson is pedagogical rather than a product. It assumes you already run Temporal and an OpenAI key, and it uses a research-and-PDF app as the story. The durable-wait claim matches the cookbook: write code that waits; the platform handles recovery.

## Key facts

- Part 2 of a durable-AI tutorial. Requires part 1 and an OpenAI API key.
- Signals used in the story: `keep` to accept, and an edit path that rewrites the prompt and loops.
- Query: read current LLM output without changing the workflow.
- Payment anecdote: approval stored once; gateway timeouts retry the charge, not the question.
- Handler decorator: `@workflow.signal`. State variables drive the main loop.

## How it works

1. User starts the workflow with a research request.
2. An activity produces a draft.
3. Workflow waits for a signal.
4. UI queries state to render the draft.
5. Keep continues to the PDF. Edit updates the prompt and returns to generation.
6. If the process restarts, history replay restores the wait or the already-recorded decision.

## Implications for askmeapi.com / ui121

The tutorial’s UI is “show the draft, collect keep or edit.” That is a form with two outcomes and a text field, which is ui121’s surface, while Temporal remains optional infrastructure. AskMeAPI can offer the same keep/edit contract over HTTP for teams that do not want a workflow cluster: the caller gets a typed decision, and durability is the API’s problem. The payment story is the sales line for an audit log: the human must not be asked twice for one approval after a crash.
