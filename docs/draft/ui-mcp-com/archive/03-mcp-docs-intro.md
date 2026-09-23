# What is the Model Context Protocol? (official docs)

- **Source:** https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The current getting-started page (spec line 2026-07-28) defines MCP as an open-source standard for connecting AI applications to external systems. Claude or ChatGPT can reach data sources such as local files and databases, tools such as search or calculators, and workflows such as specialized prompts. The page’s teaching metaphor is a USB-C port: one standard plug for many peripherals.

Concrete scenarios on the page: an agent that reads Google Calendar and Notion; Claude Code turning a Figma design into a web app; an enterprise chatbot spanning several databases; a model that creates a design in Blender and sends it to a 3D printer.

Benefits are split by audience. Developers spend less time building or integrating an agent. AI applications gain a catalog of data, tools, and apps. End users get assistants that can use their data and act when needed. Named clients include Claude, ChatGPT, Visual Studio Code, Cursor, and MCPJam, with the explicit payoff “build once and integrate everywhere.”

The page is a hub into the rest of the docs. Linked paths are build a server, build a client, build MCP Apps, and learn the concepts. Those siblings are saved under `archive/extra/`. The docs index also repeats the same outline for older spec dates; those version copies were not saved separately.

## Key facts

- Docs revision cited: 2026-07-28.
- Metaphor: USB-C for AI applications.
- Example jobs: calendar and Notion, Figma to web app, multi-database chat, Blender plus 3D print.
- Named supporters: Claude, ChatGPT, VS Code, Cursor, MCPJam.
- Onward links: servers, clients, MCP Apps, architecture concepts.

## How it works

An AI application connects to external systems through MCP instead of a bespoke integration for each system. The page stays at the product level: the application discovers data, tools, and prompts, then uses them to answer or act. It does not walk the JSON-RPC messages; that lives on the architecture page.

## Implications for ui-mcp.com / ui121

“Build once, integrate everywhere” is the distribution line for ui-mcp.com. The intro already lists MCP Apps as a first-class build path next to servers and clients, so interactive UI is part of the official on-ramp, not a side project. ui121 can position designed interfaces as what a team ships on that path so the same UI appears in every host the intro names.

> “Think of MCP like a USB-C port for AI applications.” — Model Context Protocol docs, getting started
