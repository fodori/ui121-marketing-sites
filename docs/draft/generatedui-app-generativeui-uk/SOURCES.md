Full research notes: [archive/INDEX.md](archive/INDEX.md).

# SOURCES — generatedui.app + generativeui.uk (Data-Driven UI + MCP / Generative UI)

_All URLs fetched/verified 22 Sep 2026. Angle: runtime UI as data — pre-built blocks, declarative JSON, MCP/agent-driven interfaces._

## The two target domains (status)

1. **https://generatedui.app** — Squarespace "Coming Soon" parking page. No product content; noted as empty/unlaunched.
2. **https://generativeui.uk** — Squarespace "Coming Soon" parking page. No product content; noted as empty/unlaunched.

## Core specs & protocols

3. **https://a2ui.org/** — A2UI: open protocol for agent-driven interfaces, created by Google + CopilotKit (Apache 2.0). Key notes: declarative component descriptions, not executable code; "how can AI agents safely send rich UIs across trust boundaries"; flat streaming JSON (adjacency-list model); renderers for Angular/Flutter/Lit/React; progressive streaming rendering; v0.9.1 current, **v1.0 release candidate** (adds `actionResponse` RPC, action IDs, `surfaceProperties`); transports incl. A2A.
4. **https://developers.googleblog.com/introducing-a2ui-an-open-project-for-agent-driven-interfaces/** — Google's launch post for A2UI (15 Dec 2025); situates A2UI among host-app UI, MCP Apps "UI as resource", and platform ecosystems; confirms AG-UI fully supports A2UI for declarative generative UIs.
5. **https://github.com/ag-ui-protocol/ag-ui** — AG-UI: Agent-User Interaction Protocol. ~16k stars, MIT, event-based protocol standardizing agent↔frontend connections; client integrations incl. CopilotKit, React Native, Slack/Teams (channels-sdk); A2UI integration skill in-repo; biweekly working group; ag-ui.com.
6. **https://docs.ag-ui.com/concepts/tools** — AG-UI tools concept: agents call tools and fold human judgment into the loop; foundation for tool→UI mapping.
7. **https://www.copilotkit.ai/ag-ui** — CopilotKit's AG-UI overview: "general-purpose, bi-directional connection between a user-facing application and any agentic backend."
8. **https://www.copilotkit.ai/blog/introducing-ag-ui-the-protocol-where-agents-meet-users** — AG-UI announcement (12 May 2025).
9. **https://www.copilotkit.ai/blog/the-developer-s-guide-to-generative-ui-in-2026** — CopilotKit developer guide (Jan 2026): frames the three practical approaches via **UI specs like A2UI, Open-JSON-UI, and MCP Apps** — best single survey of the spec landscape.
10. **https://github.com/CopilotKit/generative-ui** — CopilotKit's examples repo: "Generative UI examples for AG-UI, A2UI/Open-JSON-UI, and MCP Apps"; defines generative UI as UI generated/selected/controlled by an agent at runtime rather than fully static.
11. **https://github.com/modelcontextprotocol/ext-apps** — Official MCP Apps spec & SDK repo ("standard for UIs embedded in AI chatbots, served by MCP servers"). ~2.9k stars, active (700+ commits). This is the MCP-native UI standard.
12. **https://github.com/MCP-UI-Org/mcp-ui** (was idosal/mcp-ui) — MCP-UI: "UI over MCP" protocol + SDKs. ~5.2k stars, 334 commits.
13. **https://workos.com/blog/mcp-ui-a-technical-deep-dive-into-interactive-agent-interfaces** — WorkOS technical deep dive (8 Sep 2025) on MCP-UI: incremental adoption — existing MCP servers can add UI per-tool without refactoring.

## Framework / SDK evidence

14. **https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces** — Vercel AI SDK docs: generative UI = connecting tool-call results to React components; model chooses tools from context, output renders as pre-built components (weather/stock examples). Confirms the "tools → blocks" pattern in mainstream SDKs.
15. **https://ai-sdk.dev/docs/ai-sdk-core/mcp-apps** — Vercel AI SDK MCP Apps support (linked in nav; evidence MCP Apps is a first-class SDK concept).
16. **https://getsyntux.com/** — syntux: `<GeneratedUI value hint components>` React component; "LLM describes the UI with JSON… robust · flexible · secure"; React Interface Schema JSON-DSL; explicitly "optimized for websites, not chatbots." Productised pre-built-block generative UI.
17. **https://github.com/puffinsoft/syntux** — syntux source (v1.0.0, MIT), Next.js/React Router/Astro support.

## Frontier / research

18. **https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/** — Google Research (18 Nov 2025): fully generated interactive HTML/CSS/JS experiences in Gemini app and Search AI Mode; paper + project page (generativeui.github.io). The free-form pole of the spectrum.
19. **https://generativeui.github.io/** — Google GenUI project page (linked from #18).
20. **https://cloud.google.com/blog/topics/developers-practitioners/guide-to-gemini-enterprise-and-a2ui-integration** — Google Cloud guide (29 May 2026): agent returns JSON payload describing a UI tree (Card, Text, Button, ChoicePicker) instead of text/HTML; Gemini Enterprise adoption evidence.
21. **https://codelabs.developers.google.com/next26/adk-a2ui** — Google codelab: ADK agent returning A2UI JSON rendered as interactive components; data-vs-renderer separation shown explicitly.
22. **https://blogs.oracle.com/developers/develop-a2ui-and-mcp-apps-with-oracle-ai-database-and-the-java-mcp-toolkit-running-in-google-gemini-enterprise-app-chatgpt-and-claude** — Oracle (2 Sep 2026): A2UI v0.9.1 transported via AG-UI CUSTOM events; same payload targets Gemini Enterprise, ChatGPT, Claude — interoperability proof.
23. **https://medium.com/data-science-collective/googles-a2ui-the-new-standard-for-agent-generated-interfaces-6e3dcf54e1ae** — practitioner walkthrough (29 Dec 2025): A2UI's declarative nature vs imperative code; building an agent that emits A2UI JSON.
24. **https://a2aprotocol.ai/blog/a2ui-introduction** — A2UI intro (16 Dec 2025): real-world usage in Google Opal, Gemini Enterprise, Flutter GenUI SDK.

## Commercial "generate software" pole (context & contrast)

25. **https://v0.dev/** — v0 by Vercel: "Build full-stack web apps with AI" — prompt → deployed app with templates (apps/games, dashboards, landing pages), iOS app. Code-artifact generation, not runtime UI-as-data.
26. **https://www.lovable.dev/** — Lovable: describe → production-grade full-stack app; hosting/payments/infrastructure included; stats: 60M projects, 1.2M new/week, 900M monthly visits to Lovable-built projects; enterprise customers (adidas, Asana, Nvidia).

## Industry commentary

27. **https://tatlirumeysa.medium.com/the-generative-ui-spectrum-how-to-build-ai-agents-that-actually-feel-like-software-f8b5ae547672** — "The Generative UI Spectrum": generative UI is a continuum of techniques, not one method.
28. **https://dev.to/ipt/generative-ui-the-future-of-human-ai-interaction-5eol** — Generative UI as next evolution beyond text; role of MCP servers.
29. **https://www.hobo-web.co.uk/what-is-generative-user-interface-optimization-guio/** — "GUIO": generative UI forces outcome-oriented design methodology.
30. **https://foolproof.co.uk/journal/what-is-gen-ui-and-does-it-matter** — UX-agency view (9 May 2024): generative UI will dynamically create customised interfaces in real time.
31. **https://www.thedrum.com/opinion/the-screen-s-days-are-numbered-genui-will-be-the-next-big-leap-customer** — The Drum (5 Jun 2025): genUI as the next customer-experience leap.
32. **https://www.griffiths-waite.co.uk/insights/article/generative-ui-a-first-look-at-v0** — UK consultancy first-look at v0 (Nov 2023) — useful for "generative UI" narrative history.
33. **https://research-information.bris.ac.uk/en/publications/generative-ui-reshapes-design-practice-not-design-relevance/** — University of Bristol position paper: generative UI reshapes design _practice_, not relevance.

## Notes on coverage

- All 33 entries are real URLs; 20+ were fetched directly during research, remainder surfaced via search with verifiable titles/descriptions.
- Deliberate contrast pairs: free-form code generation (Google GenUI, v0, Lovable) vs. declarative data-driven UI (A2UI, MCP Apps, MCP-UI, AG-UI, syntux, AI SDK tool→component) — the research angle's core distinction.
- Open-JSON-UI is referenced via CopilotKit's guide (#9) and examples repo (#10); its own site could not be fetched (blocked) during this session.
