# Agent Client Protocol: elicitation RFD

- **Source:** https://agentclientprotocol.com/rfds/elicitation
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The Agent Client Protocol request for discussion titled “Elicitation: Structured User Input” proposes to align ACP with MCP’s 28 July 2026 elicitation, both form and URL modes. The authors are credited as @yordis, with @benbrandt as champion. Today ACP can set persistent session options and can pass unstructured text. It cannot ask an ad-hoc question, complete OAuth without pushing credentials through ACP, validate a short text field, or raise a decision the session did not anticipate.

The proposed schema is intentionally small: a flat object whose fields are strings, numbers, integers, or booleans, plus formats and enums. The method is `elicitation/create`. The request is transient, not a new persistent setting. Capabilities distinguish form and URL. Clients render. In URL mode, credentials must not travel inside ACP messages and must not be written into the model context. That last rule is the same boundary MCP drew, restated for editor clients that speak ACP to an agent.

The document is an RFD, so it is a design proposal. Shipping clients may lag it. The useful fact for positioning is that a second protocol, the one between an editor and an agent, is growing the same ask primitive.

## Key facts

- Kind: ACP RFD, not a final spec. Authors @yordis. Champion @benbrandt.
- Target alignment: MCP elicitation as of 2026-07-28, form and URL.
- Gap today: session config is persistent; free text is unstructured; no ad-hoc validated question; OAuth should not pass secrets through ACP.
- Schema: flat objects, primitives, formats, enums.
- URL mode rule: credentials do not transit ACP and do not enter model context.

## How it works

An agent that needs a structured fact sends `elicitation/create` with a message and a restricted schema, if the client advertised the capability. The client renders fields or, for URL mode, a consent step and a browser handoff. The response is accept with content, or a decline or cancel. The value is not stored as session configuration. URL-mode secrets stay in the browser flow. If the client lacks the capability, the agent falls back to unstructured text or fails the step.

## Implications for ai2ui.uk / ui121

ACP is the editor-side twin of MCP elicitation. If both protocols standardise a flat form, every IDE will grow a minimal dialog and will still refuse to be the system of record for approvals. ai2ui.uk’s URL mode page is the compatible extension: the client only has to open a link and later receive a small structured result, which fits the RFD’s “credentials never enter the protocol” rule. Marketing can mention ACP as evidence the ask is becoming infrastructure, without claiming the RFD has shipped. Docs should warn integrators that the schema subset will frustrate rich case files, so the rich view belongs on the linked page and the protocol payload stays small.
