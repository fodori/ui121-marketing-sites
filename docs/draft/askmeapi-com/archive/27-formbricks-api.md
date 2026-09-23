# Formbricks — API documentation

Source: https://formbricks.com/docs/api-documentation
Fetched: 2026-09-23
Status: partial

The listed URL returned the Formbricks docs welcome, not an API reference. The welcome describes the product and links onward to API usage. The API specifics below are from that linked reference: https://formbricks.com/docs/api-reference/rest-api. No permissive license was stated on either page.

## Summary

Formbricks presents itself as an open-source experience-management suite. The welcome page’s loop is Ask (surveys), Analyze (unified feedback and dashboards), and Act (workflows). It targets customers, users, and employees, from simple forms to a self-hosted install, with APIs and SDKs for programmatic access. The tone is product and research feedback, not agents waiting on a tool call.

The REST reference splits into two APIs. The Public Client API is what the SDKs use. It is unauthenticated so it can run in the browser without exposing secrets. Methods named: Displays (mark a survey displayed, or tie a display to a response) and Responses (create and update a response for a survey). The Management API is the backend key: a personal API key from the app’s settings, full access to account data. Methods named: action classes (create, list, delete), contact attribute keys (list), contacts (list), me (account info), responses (list, list by survey, update, delete), surveys (list, create, update, generate single-use ids, delete), and webhooks (list, create, delete). Details live in linked Postman-style pages. Help is GitHub Discussions.

So the platform can create surveys and read structured answers over HTTP, and can push results to a webhook. It does not describe a caller that blocks a server until one named human submits, nor approve/deny semantics, nor an agent tool schema.

## Key facts

- Product frame: Ask / Analyze / Act. Open source, self-hostable, surveys as the collection unit.
- Public Client API: no auth; displays and responses.
- Management API: personal API key; surveys, responses, contacts, webhooks, action classes.
- Webhooks can be created via the management API.
- The docs welcome is a hub; the REST page is the actual API map. Individual endpoint pages were not expanded (OpenAPI-style reference, not articles).

## How it works

1. Create a survey (UI or management API).
2. Deliver it through the product’s survey channels or the client API.
3. Responses land as structured data. Client API can create or update them; management API can list, filter by survey, update, and delete.
4. Optional webhooks notify your URL.
5. Workflows and dashboards are the “act” and “analyze” halves, outside this API overview.

## Implications for askmeapi.com / ui121

Formbricks is the “human answers as data” neighbor that is built for product teams, not for a function call. AskMeAPI can contrast itself: one question tied to a running request, a timeout, a callback into an agent, not a survey program. ui121 is closer to Formbricks’ answer surface than to its analytics suite. If a customer already stores feedback in Formbricks, the integration story is “agent asks via AskMeAPI, ui121 renders the question, response can also be copied into a survey record,” not “replace Formbricks.”
