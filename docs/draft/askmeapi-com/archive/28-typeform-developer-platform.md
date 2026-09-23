# Typeform Developer Platform

Source: https://developer.typeform.com/
Fetched: 2026-09-23
Status: ok

## Summary

Typeform’s developer portal is a hub for collecting structured human answers without the Typeform builder. The headline is conversational data collection. Five entry points are linked from the page: an MCP server so an LLM client can operate a Typeform account, a Create API for forms, themes, and images, a Responses API for submissions on demand, a Webhooks API that pushes each submission to a URL, and an Embed SDK that drops a typeform into a site. The portal says hidden fields and other advanced features are available through the APIs as well.

Each card shows a tiny JSON sketch. MCP is a `tools/call` that creates a form titled for lead qualification in a workspace. Create is a form with a short-text field. Responses is an answers array with a text answer. Webhooks is a form id, tag, URL, enabled flag, and timestamps (the sample shows enabled false and a 2016 timestamp). Embed is `@typeform/embed`’s `createWidget` with hidden email, hidden headers and footer, and opacity. Child pages for those five areas are summarized under archive extras.

The business proof is indirect but strong: a large form company sells “humans answering structured questions” as an API, including to LLM clients via MCP. It is still pull-or-webhook oriented. Nothing on the portal describes a server blocking until a specific person completes a form that an agent just generated for one decision.

## Key facts

- Five surfaces: MCP, Create, Responses, Webhooks, Embed SDK.
- Positioning: do Typeform’s powerful features without the builder or a login to the main site.
- Embed package named on the hub: `@typeform/embed`.
- MCP example tool name on the hub: `forms-public_create_form`.
- Child docs were followed and saved as extras (no further pagination; the hub is a single landing page).

## How it works

You create or update a form through Create or MCP, embed it or send a link, then either poll Responses or receive a Webhook when someone submits. The human’s answers arrive as JSON fields. The MCP path lets an assistant do the account-side work (forms, automations, contacts, insights) over streamable HTTP, documented on the child page.

## Implications for askmeapi.com / ui121

Typeform proves the API business for structured human input, and its MCP server shows form vendors moving toward agents. The missing primitive is correlation: this submission belongs to this agent run, with a timeout and a typed tool result. AskMeAPI is that correlation layer; a Typeform-like form is the body. ui121 should study the embed and one-question conversational pattern as the answer UX, then POST a schema-valid payload back to the waiting caller instead of into a survey dashboard.
