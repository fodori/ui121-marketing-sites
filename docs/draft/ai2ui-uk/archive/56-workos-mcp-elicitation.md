# WorkOS: MCP elicitation, June 2025

- **Source:** https://workos.com/blog/mcp-elicitation
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Maria Paktiti’s WorkOS post from 20 June 2025 explains elicitation as it stood in the MCP spec around 18 June 2025. A server sends an elicitation request with a message and a requested schema. The user accepts and returns content, rejects explicitly, or cancels by dismissing. The page’s security table tells clients not to collect PII, secrets, or credentials through elicitation. That wording is stronger than the 28 July 2026 spec, which reserves the hard ban for secrets and payment credentials and leaves ordinary contact details to discretion. Do not merge the two editions into one rule.

A banner on the article notes that URL-mode elicitation was added after publication, for interactions that cannot safely happen inside the client. That banner is the correction. The body is still useful as the mental model many developers learned first: in-client forms, three actions, and a warning not to pipe sensitive data through the chat client.

Client advice in the post: show which server is asking, validate the schema, rate-limit requests, and degrade cleanly if the user rejects. Examples: confirm a delete, redirect for auth, pick a subscription, collect a project’s inputs step by step, or ask a question about a device. Those examples are the product surface, described before URL mode existed as the official escape hatch.

## Key facts

- Published 20 June 2025. Author Maria Paktiti. Describes the spec edition of about 18 June 2025.
- Request fields: message and requested schema. Method discussed as elicitation create.
- Actions: accept with content, explicit reject, cancel on dismiss.
- Security guidance in the article: do not use elicitation for PII, secrets, or credentials. Later spec narrowed the hard ban; a banner points at URL mode.
- Client duties named: identify the server, validate schema, rate-limit, handle rejection.

## How it works

During a tool, the server asks the client to render a schema. The client shows the server identity and the fields. Accept posts the content back. Reject is a deliberate no. Cancel is the user walking away. The server continues, aborts, or asks differently. If the client has no elicitation UI, the tool must still finish in some defined way. URL mode, added later, moves the dangerous cases off this path; this article does not specify that flow beyond the banner.

## Implications for ai2ui.uk / ui121

WorkOS taught the market the in-client form. ai2ui.uk should cite the article’s date and then the spec’s URL mode, so buyers do not think secrets belong in a chat form because a 2025 blog allowed a confirmation dialog. The examples (delete confirm, which subscription, progressive project inputs) are the templates for gateway pages. Reject and cancel must stay distinct in the product: one is a decision, the other is an abandoned tab. A single attributed sentence is optional; the three-action model is the part worth paraphrasing.
