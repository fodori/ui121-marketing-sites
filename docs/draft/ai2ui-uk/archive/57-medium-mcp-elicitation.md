# Medium: a first MCP elicitation form

- **Source:** https://medium.com/@alessandro.a.pagliaro/hello-mcp-elicitation-request-additiona-info-to-the-user-e9ad55a5fc57
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Alessandro Pagliaro’s 25 January 2026 tutorial is a form-mode walkthrough written when FastMCP did not yet expose URL mode, even though URL mode had entered the spec on 25 November 2025. He states that limit. The sample server has two tools. One deletes all notes and asks for a boolean confirmation. The other deletes notes containing a given string, then confirms. Both use elicitation actions: accept, decline, and cancel. He tested the prompts in MCP Inspector and in GitHub Copilot Chat. The repository he points at is `paaxel/mcp-starter-examples`, folder `4-elicitation`.

The article is a confirmation dialog, not a study of out-of-band secrets. Its value is the smallest loop a developer copies: tool starts a destructive action, schema is a boolean, three outcomes, and two real clients that already render the form. The destructive example also shows the risk of treating elicitation as a speed bump. A boolean “are you sure” is exactly the prompt people click through.

## Key facts

- Published 25 January 2026. Author Alessandro Pagliaro.
- Mode covered: form only. Author notes URL mode was not in FastMCP then; spec URL mode date he is consistent with is 2025-11-25.
- Tools: delete all notes with a boolean confirm; delete notes matching text, then confirm.
- Actions: accept, decline, cancel.
- Clients used: MCP Inspector and GitHub Copilot Chat.
- Code: github.com/paaxel/mcp-starter-examples, path `4-elicitation`.

## How it works

The tool is invoked with whatever arguments it needs, then calls elicit with a short schema before it deletes. Accept continues the deletion. Decline or cancel returns without deleting. The client draws the fields because it advertised form elicitation. There is no second channel, no reviewer other than the person in that client, and no durable record beyond the chat. URL mode is acknowledged as future relative to his library, not implemented in the sample.

## Implications for ai2ui.uk / ui121

Developers’ first elicitation is a yes/no on a delete. That is both the onboarding demo and the fatigue problem. ai2ui.uk should offer that demo and then show the next step: a page that names the notes, the count, and the requester, so accept is informed. Copilot and Inspector already render flat forms, so the gateway is not required for the boolean. It is required when the confirmer is not in the IDE, or when the schema outgrows the client. Do not reprint his deletion handlers. Point at the repo and describe the three outcomes.
