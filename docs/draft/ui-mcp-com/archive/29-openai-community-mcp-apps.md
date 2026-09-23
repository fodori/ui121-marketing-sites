# ChatGPT Apps SDK and MCP Apps standardization

- **Source:** https://community.openai.com/t/future-of-chatgpt-apps-sdk-with-mcp-apps-standardization/1372743
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

A short OpenAI developer-community thread opened by nico9 on 28 January 2026, two days after MCP Apps shipped. The question is what ChatGPT app builders should do now that the open extension exists and is described as supported by Claude, ChatGPT, Goose, and VS Code. The post notes that the official blog credits MCP-UI and the ChatGPT Apps SDK as foundations, and that Nick Cooper said OpenAI would support the open standard.

Three practical worries: will `@openai/apps-sdk` line up with `@modelcontextprotocol/ext-apps` (the example mismatch is `useToolOutput()` versus `app.ontoolresult`); should new apps start on the open package; and will widget state (`useWidgetState` / `setWidgetState`) exist in the standard. The goal is one UI that runs in both ChatGPT and Claude.

On 5 February 2026 the same author reports that the path is to migrate, and points at guidance for portable MCP Apps UIs in ChatGPT. On 11 February, agentsyxtech says a migration they completed was straightforward. There is no long official answer inside the thread itself. The thread is confirmation of cross-vendor convergence and of developer anxiety about two SDKs, not a spec.

## Key facts

- Opened: 28 January 2026. Follow-ups: 5 February and 11 February 2026.
- Hosts the opener lists for MCP Apps: Claude, ChatGPT, Goose, VS Code.
- API mismatch called out: Apps SDK hooks versus `app.ontoolresult`.
- Community conclusion in-thread: migrate to portable MCP Apps.
- Widget-state parity is asked and not answered in the posts that were captured.

## How it works

ChatGPT’s first UI path was the Apps SDK. MCP Apps is the shared extension. Portable apps declare a UI resource the open way and use the ext-apps client API. ChatGPT-only state and modals stay as optional extras. The thread does not include the migration steps; those live on OpenAI’s docs (source 12) and the MCP-UI adapter guide in `extra/`.

## Implications for ui-mcp.com / ui121

Developers are already asking how to stop maintaining two widget stacks. ui-mcp.com can answer in one line: build the MCP Apps UI, run it in every host that adopted the extension, and treat ChatGPT-only APIs as progressive enhancement. ui121 should default new interface work to `@modelcontextprotocol/ext-apps` (or MCP-UI’s renderer) so a Claude and a ChatGPT deployment are the same component. Mention widget state as a gap to design around — persist what matters in the tool result or model context — because this thread shows that feature was not obviously portable in January 2026.
