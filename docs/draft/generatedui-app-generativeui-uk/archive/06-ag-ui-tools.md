# AG-UI concepts — Tools

- Source: https://docs.ag-ui.com/concepts/tools
- Fetched: 2026-09-23
- Status: ok

## Summary

This concept page defines tools as the way an AG-UI agent reaches outside pure conversation: fetch information, act in another system, ask a human to confirm, or use a specialised capability. The important split is who owns the tool. Backend tools stay in the agent or framework configuration. Client tools are passed on the run input (`RunAgentInput.tools`) so the agent can call back into the application — navigate, approve, or run some other UI-mediated step. The page warns not to dump every backend tool schema into that client list.

A tool is a name, a human-readable description, and a JSON Schema for parameters. The agent uses the schema to form a call; the frontend uses it to validate arguments. Because the frontend sends the list at run time, capabilities can change with permissions, screen, or application state. Sensitive operations stay under application control.

The call lifecycle is three streamed events, then a result. ToolCallStart names the call and the tool, optionally tying it to a parent message. ToolCallArgs streams partial JSON. ToolCallEnd closes the call. The frontend concatenates the deltas, runs the tool, and returns a tool-role message with the same toolCallId. An `error` field marks failure; without it, the agent cannot tell a failed tool from a successful one whose content happens to describe a problem. Metadata can accumulate on the tool call itself so that several calls under one assistant message do not overwrite each other.

Human-in-the-loop is the worked pattern: the agent calls something like confirmAction, the UI shows a dialog, the user’s choice returns as the tool result, and the agent continues. CopilotKit’s `useCopilotAction` is the React shorthand for the same idea. Example tool shapes on the page: confirmation, data retrieval, navigation, and image generation. Best practice is action-oriented names, precise schemas, required fields only when truly required, and UI that gives the human enough context to decide.

The page sits in the AG-UI docs. Closely linked concept and spec pages are under archive/extra/. This page itself is a single concept article, not a blog index.

## Key facts

- Client tools travel on `RunAgentInput.tools`; backend tools do not belong in that list.
- Parameter contract: JSON Schema.
- Lifecycle events: ToolCallStart, ToolCallArgs (streamed deltas), ToolCallEnd, then a tool message.
- Failure is a distinct `error` field on the tool result, not a convention inside `content`.
- CopilotKit hook named on the page: `useCopilotAction`.
- HITL examples: approval, data verification, joint decisions, supervised feedback.

## How it works

The application advertises what the agent may ask the user or the UI to do. The agent selects a tool and streams arguments. The client executes and answers. That answer is just another message in the history, so the next model turn can use it. For generative UI, this is the “controlled” pattern: the tool name is the pre-built block, the arguments are the data, and the render function is ordinary application code. The agent never receives permission to invent a component.

Section outline: what tools are; tool structure; frontend-defined tools; call lifecycle and metadata; results and errors; human-in-the-loop; CopilotKit; four examples; best practices.

## Implications for generatedui / ui121

ui121’s pre-built blocks map directly onto client tools. Each block is a tool with a schema; the agent fills it; the runtime renders the approved component. That is the safe end of generative UI and the one enterprise buyers can audit. actionResponse-style A2UI and AG-UI tool results are the same loop with different envelopes: the human’s click is structured data back to the agent, not free text. Marketing should show one approval or form block end to end, because this page’s whole argument is that human judgment belongs inside the tool lifecycle.
