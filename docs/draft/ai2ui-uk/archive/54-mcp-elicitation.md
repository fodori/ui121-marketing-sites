# MCP elicitation (spec, 28 July 2026)

- **Source:** https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The Model Context Protocol specification dated 28 July 2026 defines elicitation as a way for a server to ask the user for more information in the middle of a tool call. There are two modes. Form mode asks the client to collect structured answers inside its own UI. URL mode sends the user to an external address for anything that should not be typed into the MCP client, especially secrets. Servers must not use form mode for passwords, API keys, tokens, or payment credentials, and must use URL mode for those. Ordinary contact details such as a name or email are not banned as a category; the spec leaves judgment to the server and the client. Clients must show which server is asking, must offer decline and cancel, must let the user review form answers before they are sent, and must show the URL host and get consent before navigating.

Capabilities are split: `elicitation.form` and `elicitation.url`. An empty elicitation capability object means form only, for backward compatibility. Servers must not send a mode the client did not advertise. The request is an `elicitation/create` message, including during tool execution when the result is that input is required. The spec does not mandate a widget. Each client chooses how to render the form or the link. That is the standards-level version of “the AI asks a human.” URL mode is the shape of a hosted ask page: the protocol carries the link, and the sensitive exchange happens out of band.

## Key facts

- Spec edition: 2026-07-28, client elicitation.
- Modes: form (in-client structured input) and URL (out-of-client, required for secrets and payment credentials).
- Form mode is forbidden for passwords, API keys, tokens, and payment credentials.
- Client duties: identify the server, allow decline and cancel, review before submit, disclose URL host and obtain consent.
- Capability keys: `elicitation.form`, `elicitation.url`. Empty object means form only.
- Message: `elicitation/create`, usable inside a tool call that returns an input-required result.

## How it works

A tool begins, discovers it needs a fact or a consent, and the server emits an elicitation request in a mode the client supports. In form mode the client renders fields, the user accepts, declines, or cancels, and the content returns to the server only on accept. In URL mode the client shows the host, the user consents to leave, and the server learns the outcome through the URL flow rather than through form fields that would sit in the client. The tool then completes or fails based on that outcome. A client with no elicitation support never receives the request; the server has to degrade.

## Implications for ai2ui.uk / ui121

This is the protocol ai2ui.uk should speak. Form mode is the in-app card. URL mode is the product: a page the gateway hosts, for approvals and for anything that must not enter the model context. Marketing can say MCP already standardised the ask, and most clients will render the smallest possible form. A dedicated page wins when the schema is richer than a client’s subset, when the reviewer is not the person sitting in the IDE, or when the data must stay out of the chat transcript. Docs outline: mode choice, what must never be a form field, decline versus cancel, how the tool resumes. Do not paste the spec. Link it.
