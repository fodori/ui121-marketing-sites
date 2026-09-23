# Microsoft Agent Framework — Human-in-the-loop workflows

- Source: https://learn.microsoft.com/en-us/agent-framework/workflows/human-in-the-loop
- Fetched: 2026-09-23
- Status: ok

## Summary

Microsoft Learn’s Agent Framework workflows page formalises human-in-the-loop as request and response. An executor inside a workflow can send a request outside the workflow and wait. External systems — a person, or any other async actor — handle the request and send a response. The framework routes that response back to the executor that asked. The page is one article with C#, Python, and Go pivots, not a blog index, so it was not expanded as a collection.

The C# shape is a `RequestPort`, a typed channel. The sample is a number-guessing loop: a port carries a `NumberSignal` in and an integer out. A `JudgeExecutor` holds the target, counts tries, and either yields “found” or sends “above” or “below,” which leads to another request. The workflow is a graph of edges between the port and the judge. A streaming run emits `RequestInfoEvent`. The host reads the event, obtains a guess from a person or another system, and calls `SendResponseAsync`. A `WorkflowOutputEvent` ends the loop.

Python does not require a separate port object. The executor calls `ctx.request_info()` with the request data and the response type. A method marked `@response_handler` receives the original request and the human’s response; the framework matches them by type. The host watches a stream for `request_info` events, collects responses by request id, and calls `run` again with those responses. State persists across runs. Go binds a `RequestPort` with request and response types, pauses on the port, and resumes with `CreateResponse`.

For agent orchestrations (sequential, concurrent, group chat), tool approval uses the same pause. When an agent calls a tool that requires approval, the workflow emits a request whose payload is tool-approval content rather than a custom type. If the agent needs a free-form conversation, not only yes/no on a tool, the page points at handoff orchestration, which returns control to the user between turns. The other orchestration styles do not pause for open input unless you add a request port in a custom workflow. Checkpoints store pending requests. Restoring a checkpoint re-emits them as request events, and a resume can carry both a checkpoint id and the responses.

## Key facts

- HITL mechanism: request/response that pauses the workflow until an external answer arrives.
- C# / Go: `RequestPort`. Python: `ctx.request_info` and `@response_handler`.
- Host contract: listen for a request event, collect the human input, send a typed response, continue.
- Agent tools: approval-required tools pause with a tool-approval payload.
- Handoff orchestration is the path for multi-turn user input; sequential, concurrent, and group chat are not interactive by themselves.
- Checkpoints persist pending requests and re-emit them on restore.

## How it works

The workflow runs until an executor asks the outside world for something. Execution suspends. The application is responsible for showing the request to a person and returning a value of the declared type. The framework delivers that value to the waiting handler, which continues the graph. Nothing in the page builds the user interface; the events are the integration point. Durability comes from checkpoints: a pending question survives a restart and is asked again. Tool approval is the same pause, specialised to “may this function run?”

## Implications for ui1to1.com / ui121

Microsoft has made “the workflow waits for a human” a framework feature, and left the interface to the application. That gap is the one-to-one canvas. ui121 can be the surface that receives the `RequestInfoEvent`: a live UI for this person, with the question, the hint, and the actions, not a console prompt. JSONUI is a natural rendering of a typed request — the schema of the response is the form.

Checkpoints match an always-connected but not always-online human: the ask is still there when they return. Tool approval is the agent-era version of human-in-the-loop; the canvas is where approve or reject happens, then the agent resumes. Marketing should describe this as the mainstream orchestration pattern, and ui121 as the human side of the port. Do not copy the sample code.
