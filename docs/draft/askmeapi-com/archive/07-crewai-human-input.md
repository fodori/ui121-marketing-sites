# CrewAI — human input on execution

Source: https://docs.crewai.com/en/learn/human-input
Fetched: 2026-09-23
Status: partial

The listed URL returned the CrewAI documentation home, not a human-input article. The mechanism below is from the live guide at https://docs.crewai.com/en/learn/human-input-on-execution, which the docs index describes as human input during task execution.

## Summary

CrewAI’s basic human-input feature is a flag on a task, not a tool-approval gate. Set `human_input=True` and, before the agent delivers its final answer, the runtime prompts a person. The prompt is for extra context, clarification, or a check that the draft is acceptable. The docs frame this as useful when a decision is complex or the agent does not have enough detail to finish.

The published example is a two-agent crew: a research analyst and a tech writer, both with `human_input=True`, run sequentially with memory and planning turned on. The research task’s description even tells the agent to check with a human before finalizing. There is no schema for the human’s reply, no approve/edit/reject enum, and no channel other than whatever the local runtime uses to ask.

A separate enterprise guide (saved under archive extras) adds webhook pause-and-resume for production. This page is the local, synchronous version: the human is in the process that called `kickoff`.

## Key facts

- Flag: `Task(..., human_input=True)`. Default in the task concept docs is false.
- Timing: before the agent’s final answer, not before each tool call.
- Purpose stated on the page: extra context, ambiguity, or validation of the output.
- Example stack: `crewai` plus `crewai_tools`, Serper search, OpenAI, `Crew.kickoff()`.
- The docs home that the original URL returned also points at tasks, flows, and “human-in-the-loop triggers” as part of the task/process model, without documenting them on that landing page.

## How it works

1. Define a task with the human-input flag.
2. Kick off the crew.
3. When that task is ready to finish, execution asks a person.
4. The person’s text is incorporated and the task completes.
5. Later tasks can consume that output as context.

## Implications for askmeapi.com / ui121

CrewAI’s built-in ask is “review this draft in the terminal,” which is a weak fit for a server or an unattended agent. AskMeAPI can replace that prompt with a durable question to a named person, and return text or a structured verdict the task can store. ui121 is a better review surface for a long research report than a stdin prompt: the human edits or approves sections, and the API returns the result to `kickoff` / resume. The enterprise webhook flow shows CrewAI already expects an external system to hold the pending review.
