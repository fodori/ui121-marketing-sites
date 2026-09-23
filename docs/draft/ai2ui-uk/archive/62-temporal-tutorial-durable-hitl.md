# Temporal tutorial: durable approval in a research app

- **Source:** https://learn.temporal.io/tutorials/ai/building-durable-ai-applications/human-in-the-loop/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Temporal’s learning tutorial, part of a series on durable AI applications, uses a research workflow that would otherwise email or attach a PDF with no pause. The lesson is to insert a human approval so the side effect does not fire on the model’s first draft. Signals are the mechanism. Because the approval is durable, a browser crash or a worker restart does not drop the pending decision. The tutorial contrasts that with a payment-style retry: retrying the activity must not ask the human again if they already approved. The UI or the client invokes the signal handler; the workflow does not poll a person.

The surrounding course is about building AI steps as activities inside a workflow so each step can retry, and so the human step can outlive the HTTP request that started the research. The concrete user-visible moment is “do not send the PDF until someone says so,” which is easier to explain than an abstract wait condition.

## Key facts

- Tutorial series: building durable AI applications. This part: human in the loop.
- Example side effect: sending a PDF from a research app.
- Mechanism: a Signal that survives crashes. The client or UI sends it.
- Retry rule: a later activity retry must not re-prompt after approval.
- Contrast: an in-process wait would lose the decision when the process dies.

## How it works

The workflow drafts the research output and reaches a send step. Instead of calling the send activity immediately, it waits for an approval signal. The application shows the draft to a person. Their action signals the workflow. Only then does the send activity run. If the send fails and retries, the workflow is already past the wait, so the person is not asked twice. If the process dies during the wait, replay restores the workflow to the same wait. The tutorial’s point is that durability and idempotency are different problems and the human step needs both.

## Implications for ai2ui.uk / ui121

The PDF example is a clean marketing story: the agent finished the work, and a person still releases it. ai2ui.uk can be the screen that shows the draft and sends the signal, including after the researcher closed the laptop. The double-ask bug is the failure mode to design against: once a card is approved, retries must not open a second card. Pair this note with the cookbook and with Teska’s essay. Together they say the engine waits, the tutorial shows a side effect worth gating, and the product still has to render the draft.
