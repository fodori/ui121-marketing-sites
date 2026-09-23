# MCP apps in Microsoft 365 Copilot

- **Source:** https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Microsoft Learn (page context dated around 16 July 2026 in the research list) documents MCP apps as interactive widgets inside Microsoft 365 Copilot. Declarative agents go beyond text by attaching an MCP server whose tools return UI. Two authoring paths are accepted: the open MCP Apps extension, and the OpenAI Apps SDK, which builds on that standard and adds ChatGPT-specific behavior. Copilot supports both, with a large compatibility matrix of what actually works.

Prerequisites: the usual Copilot extensibility requirements, a remote MCP server you can modify, something like MCP Inspector to view responses, Visual Studio Code, and Microsoft 365 Agents Toolkit 6.12.0 or later. Auth is OAuth 2.1 or Microsoft Entra SSO. Anonymous auth is allowed only for development. Widget UI is hosted on `{hashed-mcp-domain}.widget-renderer.usercontent.microsoft.com`, where the hash is SHA-256 of the MCP server domain, and that origin must be allowed for CORS. OAuth redirect URIs are called out for Copilot (`teams.microsoft.com` platform paths) and for VS Code (`https://vscode.dev/redirect`). VS Code does not yet support SSO when fetching tools.

Testing is in https://m365.cloud.microsoft/chat: pick the agent, ask something that hits the server, approve the connection, confirm the widget. Dynamic tool discovery is the default, so UI tools appear at runtime; if tools are pinned, at least one must return a widget.

The capability matrix is the useful part for builders. Supported bridges include tool input and output, call tool, send a follow-up message, fullscreen display mode only, size changed, open link, theme, locale, user agent, and CSP connect/resource domains. Not supported in the extract: file upload and download URLs, request modal, partial tool input, tool cancelled, teardown, send log, and several OpenAI-only metadata fields such as destructive and open-world hints. `setWidgetState` has no direct twin; the page suggests `updateModelContext` and other mechanisms. Developers must feature-detect `window.openai.*` because unsupported APIs are `undefined`.

## Key facts

- Host: Microsoft 365 Copilot chat, via declarative agents.
- Accepts MCP Apps and OpenAI Apps SDK widgets, with gaps.
- Toolkit: Agents Toolkit 6.12.0+.
- Widget origin: hashed MCP domain under `widget-renderer.usercontent.microsoft.com`.
- Fullscreen is the only `requestDisplayMode` mode marked supported.
- Production auth: OAuth 2.1 or Entra SSO; anonymous is dev-only.

## How it works

An MCP server returns a UI resource from a tool. Copilot loads that UI in an isolated widget host and connects it to the agent. The widget reads tool results, calls tools, and can ask the host to go fullscreen or open a link when those APIs exist. If an API is missing, the widget is expected to degrade instead of throwing.

## Implications for ui-mcp.com / ui121

Copilot is the enterprise “any AI” host. A ui121 interface aimed at MCP Apps can appear in Copilot chat without a separate bot framework, but the matrix is the design constraint: no file bridge, no modal, fullscreen only, and no assumption that ChatGPT widget state exists. Product copy should say Microsoft 365 as a first-class surface and ship a reduced layout when the host cannot do something. The hashed widget origin is an implementation detail for anyone embedding third-party assets.

Docs outline: what MCP apps are, prerequisites, server requirements, UX and API detection, sideload and test, supported capability tables, FAQ distinguishing MCP Apps from the Apps SDK.
