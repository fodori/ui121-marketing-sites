# SOURCES.md — ui-mcp.com research (MCP bridging AI to UIs)

Compiled Sep 2026. All URLs fetched via web search/extract during research. Notes are the specific claims each source supports.

## The site itself

1. **https://ui-mcp.com** — *Coming Soon* (Squarespace parking page). The domain/brand is reserved but unbuilt — naming opportunity is open. Verified by direct extraction.

## MCP fundamentals (the standard)

2. **https://www.anthropic.com/news/model-context-protocol** — Anthropic launch announcement (25 Nov 2024). Open-sourced MCP as "a new standard for connecting AI assistants to the systems where data lives." Key quote: models "trapped behind information silos and legacy systems; every new data source requires its own custom implementation." Created by David Soria Parra & Justin Spahr-Summers; early adopters Block, Apollo, Zed, Replit, Codeium, Sourcegraph.

3. **https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro** — Official MCP docs. "Think of MCP like a USB-C port for AI applications." Lists enabled use cases (Calendar/Notion assistants, Figma→web app, multi-DB enterprise chatbots, Blender/3D printing). Ecosystem support: Claude, ChatGPT, VS Code, Cursor, MCPJam.

4. **https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture** — Architecture overview: AI applications fetch tools from all connected MCP servers into a unified tool registry the model uses.

5. **https://www.anthropic.com/engineering/code-execution-with-mcp** — Anthropic engineering (4 Nov 2025). MCP client loads tool definitions into model context; thousands of community MCP servers since Nov 2024; agents use context more efficiently by loading tools on demand.

6. **https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation** — Anthropic (9 Dec 2025). MCP donated to the new Agentic AI Foundation; "adopted by ChatGPT, Cursor, Gemini, Microsoft Copilot, Visual Studio Code, and other popular AI products."

## UI over MCP — the core angle

7. **https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/** — MCP Apps proposal (SEP-1865, 21 Nov 2025). Co-authored by OpenAI, Anthropic maintainers + MCP-UI creators. Documents the text-only problem ("awkward exchanges of text prompts and responses", client-rendering burden), the `ui://` URI scheme, `text/html` in sandboxed iframes, JSON-RPC over postMessage, security layers (pre-declared templates, auditable messages, user consent), backward compatibility. Calls the extension "an agentic app runtime."

8. **https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/** — MCP Apps live as the **first official MCP extension** (26 Jan 2026): tools can return interactive UI components rendered directly in conversation.

9. **https://github.com/modelcontextprotocol/ext-apps** — Official repo for the MCP Apps spec & SDK; `create-mcp-app` scaffolding, `migrate-oai-app` converter.

10. **https://github.com/MCP-UI-Org/mcp-ui** — MCP-UI project (5.2k stars, 398 forks). "Pioneered the concept of interactive UI over MCP"; patterns directly influenced the MCP Apps spec. Hosts supported: MCPJam, Postman, Goose (Block), LibreChat, Smithery, fast-agent; ChatGPT via Apps SDK adapter. Adopted at Shopify, Hugging Face, ElevenLabs. Sandboxed-iframe security model; roadmap includes declarative UI and generative UI. SDKs for TS, Ruby, Python. Site: mcpui.dev.

11. **https://workos.com/blog/mcp-ui-a-technical-deep-dive-into-interactive-agent-interfaces** — WorkOS deep dive (8 Sep 2025). UIResource protocol, three rendering approaches (inline HTML, external URL, Shopify Remote DOM), structured UIAction events (tool/intent/prompt/notify/link), Shopify commerce components (variant pickers, inventory, add-to-cart intents), "breaking down the text wall." Frames it as "a fundamental shift toward interactive, context-aware AI."

12. **https://developers.openai.com/plugins/build/chatgpt-ui** — OpenAI developer docs: add UI to your MCP server; server returns UI resources rendered in iframes in ChatGPT via the MCP Apps bridge.

13. **https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps** — Microsoft Learn (16 Jul 2026). MCP Apps in Microsoft 365 Copilot: interactive UI widgets let declarative agents "go beyond text responses" in Copilot chat.

## OpenAI Apps SDK (ChatGPT apps with MCP backbone)

14. **https://openai.com/index/introducing-apps-in-chatgpt/** — OpenAI (6 Oct 2025). "A new generation of apps you can chat with, right inside ChatGPT," built with the Apps SDK (MCP-based).

15. **https://developers.openai.com/apps-sdk/** — OpenAI Apps SDK docs: build rich, interactive applications inside ChatGPT using MCP as the backbone.

16. **https://openai.com/index/developers-can-now-submit-apps-to-chatgpt/** — OpenAI (17 Dec 2025). App submission/review + in-product directory — distribution layer for UI-bearing MCP servers.

17. **https://venturebeat.com/technology/openai-announces-apps-sdk-allowing-chatgpt-to-launch-and-run-third-party** — VentureBeat coverage (6 Oct 2025) of the Apps SDK launch: enterprises building interactive experiences inside ChatGPT.

## MCP vs API / function calling (the problem framing)

18. **https://www.dash0.com/knowledge/mcp-vs-api** — Dash0 (21 Aug 2026). The M×N connector problem: "M models and N tools requires M×N custom connectors. MCP collapses that to M+N… HTTP did the same."

19. **https://atlan.com/know/when-to-use-mcp-vs-api/** — Atlan (16 Mar 2026). "Before MCP, connecting five AI agents to ten tools required fifty bespoke integrations."

20. **https://jamwithai.substack.com/p/when-to-use-mcp-vs-api-vs-functiontool** — Substack (23 Apr 2026). MCP vs raw function calling: MCP adds dynamic tool discovery at runtime, standardized descriptions, and decoupling from prompts.

## Adoption, ecosystem, cutting edge

21. **https://nevermined.ai/blog/model-context-protocol-adoption-statistics** — 45 MCP adoption statistics (1 Apr 2026). Server downloads grew from ~100K (Nov 2024) to 8M+ (Apr 2025) — an 8,000% surge.

22. **https://growthmethod.com/is-mcp-dead/** — (7 Sep 2026). Ecosystem by the numbers: 17,000+ MCP servers and 143,000 indexed executable AI components as of Q1 2026; addresses "MCP is dead" backlash.

23. **https://www.practical-devsecops.com/mcp-security-statistics-2026-report/** — MCP security statistics 2026. ~28% of Fortune 500 companies had production MCP servers by early 2026 (Truto); CVEs and security posture data.

24. **https://workos.com/blog/everything-your-team-needs-to-know-about-mcp-in-2026** — WorkOS (26 Mar 2026). MCP adoption timeline from Nov 2024 developer tool to mainstream platform capability.

25. **https://lenses.io/blog/mcp-server-production-security-challenges** — Lenses.io (11 Mar 2026). Productionizing MCP servers: security, auth, and trust challenges as 2026's frontier.

26. **https://glama.ai/mcp/servers** — Glama open-source MCP server directory; evidence of server ecosystem breadth (plus registries: Smithery, PulseMCP, mcp.so, official registry).

27. **https://medium.com/mcp-server/the-rise-of-mcp-protocol-adoption-in-2026-and-emerging-monetization-models-cb03438e985c** — (22 Feb 2026). Adoption growth and emerging MCP monetization models; notes structural tensions behind server-count headlines.

28. **https://medium.com/@Treze413/generative-ui-the-interface-is-starting-to-build-itself-10110a762fa8** — Generative UI trend (11 Sep 2026): "the interface is starting to build itself" — dynamic, agent-generated interfaces as the next UX shift.

29. **https://community.openai.com/t/future-of-chatgpt-apps-sdk-with-mcp-apps-standardization/1372743** — OpenAI community (28 Jan 2026): MCP Apps extension supported by Claude, ChatGPT, Goose, and VS Code — cross-vendor convergence confirmation.

30. **https://mcpui.dev/** — MCP-UI documentation hub (client/server SDKs, Apps SDK adapter guide, interactive playground).
