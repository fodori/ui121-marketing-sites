# Microsoft Agent Framework: function tools that need approval

- **Source:** https://learn.microsoft.com/en-us/agent-framework/agents/tools/tool-approval
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Microsoft’s Agent Framework tutorial treats human approval as a normal tool property, not a custom workflow. A function is wrapped so the model may propose it, but the runtime will not execute it until the caller supplies an approval. The sample is a weather lookup that does nothing risky; the point is the control shape, which is the same shape you would put on refunds, file writes, or production changes.

When the agent needs a person, the run does not finish with an answer. It finishes with a response that contains approval-request content. The application is expected to show the function name and arguments, collect yes or no, and start another run on the same session with that decision attached. Microsoft is explicit that the caller owns the human interface. The SDK pauses; it does not render a review screen.

The tutorial also warns that the convenient local credential used in samples is a poor production default, because credential probing and latency become real once the agent is deployed. Approval and identity are adjacent problems: the person who clicks approve should be a known principal, and the agent should not be holding a broad fallback identity.

## Key facts

- Pattern name in the docs: human-in-the-loop, implemented by wrapping an `AIFunction` in `ApprovalRequiredAIFunction`.
- Sample model in the walkthrough: `gpt-4o-mini`, via Azure AI Projects.
- A run that needs input returns `ToolApprovalRequestContent` instead of a final answer. The proposed call is on `ToolCall`.
- The host app must pass the user’s decision back as a new agent run on the same `AgentSession`.
- Docs flag `DefaultAzureCredential` as a development convenience, and suggest a specific credential such as managed identity in production.

## How it works

1. The developer marks selected functions as approval-required and passes them into the agent with the other tools.
2. The model may emit a call to that function. The framework records a tool-approval request instead of invoking the function.
3. Application code scans the response for those requests and shows name plus arguments.
4. The user approves or rejects. The app sends that decision into a follow-up run so the function either executes or the agent continues without it.

The human is outside the agent process. Any Slack button, email link, or hosted page can sit in that gap, as long as it can round-trip the approval into the session.

## Implications for ai2ui.uk / ui121

Microsoft has standardised the pause, and left the screen as an exercise. ai2ui.uk can be the missing screen: show the tool name, arguments, and blast radius, then return a typed approve or reject into the session the SDK already expects. Marketing should say “works with Agent Framework approvals” rather than “replaces Microsoft’s agent runtime.” The gateway is the human port the tutorial assumes the caller will build.
