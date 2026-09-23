# RentAHuman docs: framework integrations

- **Source:** https://rentahuman.ai/docs/integrations
- **Fetched:** 2026-09-23
- **Status:** ok
- **Collection:** sibling of https://rentahuman.ai/docs

## Summary

This page is a menu of integration guides, each promising step-by-step code for hiring humans for physical tasks. The frameworks named are Claude (Desktop, Code, and the API via native MCP), the OpenAI Agents SDK, LangChain (Python and JavaScript), CrewAI, Microsoft AutoGen, the Vercel AI SDK for Next.js apps, Google Gemini and Vertex via function calling, Cursor and Windsurf and similar IDE agents via MCP, Hugging Face transformer agents, and a custom Python or TypeScript path through the REST API. Tags on the cards repeat the same job: tool use that ends in a real-world task.

The page itself is a directory. It does not embed the full guides in the extract. The strategic fact is coverage: they claim every popular agent stack, not only MCP.

## Key facts

- Named stacks: Claude, OpenAI Agents SDK, LangChain, CrewAI, AutoGen, Vercel AI SDK, Gemini/Vertex, Cursor, Windsurf, Hugging Face, raw REST.
- Job described on every card: physical-world tasks.
- MCP is the path for Claude and IDE agents; function calling or tool wrappers for the others.

## How it works

The developer picks a framework, follows that guide, and exposes RentAHuman actions as tools the agent can call. MCP clients get the server config. Everyone else wraps HTTP.

## Implications for helpexpert.me / newhuman.store

When a help API exists, the launch list should look like this menu or agents will not find it. Priority is the same: MCP for Claude and Cursor, then one Python and one TypeScript REST example. Do not write ten framework guides before the ask/answer tool is stable. The copy difference is the verb: they say “hire for a physical task”; a help brand says “ask a person and get a structured answer.” Matching their framework list without matching their errand metaphor is the positioning task.
