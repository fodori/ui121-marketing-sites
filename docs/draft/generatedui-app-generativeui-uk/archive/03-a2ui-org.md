# A2UI — protocol for agent-driven interfaces

- Source: https://a2ui.org/
- Fetched: 2026-09-23
- Status: ok

## Summary

A2UI is an open protocol, created by Google with CopilotKit and the wider community, for agents that need to send rich interfaces across a trust boundary. The agent does not ship HTML or JavaScript. It sends declarative component descriptions. The client renders those descriptions with its own native widgets. The project frames the problem as: how can an agent safely deliver a rich UI when it is not allowed to execute code inside the host.

The homepage organises the work as specifications, client renderers, and transports. Renderers named on the page include Angular, Flutter, Lit, and React, plus a Markdown path. Transports include Agent-to-Agent (A2A). The design pillars are security (only catalog components), an LLM-friendly flat JSON shape that can be streamed, framework independence (one payload, many native renderers), and progressive rendering so the user sees the surface assemble.

Version status on the homepage, as fetched: v0.8 is legacy; v0.9 is the previous stable release and the “prompt-first” shift (createSurface, client-side functions, custom catalogs, modular schemas); v0.9.1 is the current production release (application/a2ui+json, looser surfaceId rules); v1.0 is a release candidate, previously drafted as v0.10, adding client-to-server actionResponse, action IDs, and a rename of theme to surfaceProperties. The project is Apache 2.0.

Getting-started paths on the site are a restaurant-finder demo (Gemini ADK agent plus a Lit renderer), scaffolding via AG-UI, a no-install A2UI Composer that emits JSON from a visual editor, an A2UI Theater that steps through streaming scenarios on Lit, React, and Angular, plus concept docs and the specs. Demo narratives on the page: a landscape-architect flow where a photo becomes a custom form, and an agent that chooses a chart for a numeric question and a map for a location question, both as client-offered custom components.

The homepage is a documentation hub. Closely linked concept and spec pages are saved under archive/extra/.

> “A2UI enables AI agents to generate rich, interactive user interfaces that render natively across web, mobile, and desktop—without executing arbitrary code.” — a2ui.org

## Key facts

- License: Apache 2.0. Origin: Google, with CopilotKit and community contributions.
- Current production spec: v0.9.1. Release candidate: v1.0 (actionResponse, action IDs, surfaceProperties).
- Renderers called out: Angular, Flutter, Lit, React, Markdown.
- Transport called out: A2A, with AG-UI as the practical host-app path.
- Tools: Composer (visual JSON), Theater (multi-renderer playback), restaurant-finder quickstart.
- Four pillars: catalog-only security, flat streaming JSON, one payload across frameworks, progressive render.

## How it works

A typical turn on the homepage: the user messages an agent; the agent streams A2UI messages that describe structure and data; the client maps those messages onto native components; the user acts (button, field, choice); the action goes back to the agent; the agent streams an updated surface. The client owns styling and the allowlist. The agent can only request components the catalog already contains, so a prompt injection cannot invent a new widget that executes code.

The flat adjacency-list model (detailed on the concept pages) is the reason streaming works: components are a list with IDs, not a nested tree the model must close perfectly in one shot.

Section outline of the site, for a marketer skimming docs: version table; problem statement; four pillars; five-minute start (demo, any-agent via AG-UI, Composer, Theater, concepts, guides, specs); six-step interaction loop; three product demos.

## Implications for generatedui / ui121

A2UI is the clearest public statement of ui121’s angle: UI as data, rendered by pre-built blocks, safe across trust boundaries. generatedui.app / generativeui.uk should talk like this protocol, not like a prompt-to-HTML generator. The practical difference to sell: A2UI is a spec and a set of renderers; ui121 can be the product layer — a branded catalog, a composer, and an MCP-facing runtime that businesses actually operate. v1.0’s actionResponse matters for forms and human approval: the block does not just display, it asks the agent for a typed answer and continues.
