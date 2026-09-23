# Best form builders with MCP

Source: https://tally.so/help/best-mcp-form-builders
Fetched: 2026-09-23
Status: ok
Parent collection: https://tally.so/help/compare

## Summary

Marie Martens, updated 5 August 2026, defines MCP as the open way an assistant such as Claude, ChatGPT, Cursor, or Gemini calls an external tool in plain language. For forms, that means create, edit, and read submissions without opening the builder. Her checklist: how many actions exist, whether the free plan makes them usable, whether auth is OAuth, whether the feature is still beta, whether the model can delete data, which clients connect, and whether GDPR and token hygiene are sane.

Tally’s server, in this guide, exposes 20-plus tools, is free on every plan, uses OAuth, appears in the Claude and ChatGPT connector directories, and refuses deletion of forms or submissions. It also works with Claude Code, Cursor, Windsurf, and Goose. Jotform’s official server exposes about five tools (create, edit, list, create or get submissions), adds an MCP-app mode with richer UI inside some clients, and rate-limits at 60 requests a minute on free and 600 on enterprise. The free plan’s 5 forms and 100 submissions cap the usefulness. HIPAA data stays on HIPAA plans. Typeform has moved to OAuth only, is listed in the same directories, and is still labeled beta, with tools undocumented enough that she tells you to ask the assistant to list its actions. Per-tool permissions can be read-only. The free plan’s 10 responses a month limit the integration. Google Forms, SurveyMonkey, and Microsoft Forms have no official form MCP here. Fillout’s MCP, she says, targets the Zite database, not the form builder.

## Key facts

- Updated 5 August 2026.
- Tally: 20+ tools, deletion guardrail, free, OAuth.
- Jotform: about 5 tools, 60 req/min free, 600 enterprise.
- Typeform MCP: OAuth only, still beta, PAT removed.
- No official MCP for Google Forms, SurveyMonkey, or Microsoft Forms.
- Fillout MCP scoped to Zite, not forms, in this account.

## How it works

You add a server URL or click a directory connector, authorize with OAuth, and prompt the assistant to create or edit a form and to pull answers for charts or sentiment. The assistant is an author and an analyst. It is not described as the thing that replies to the respondent.

## Implications for pulsarform.com / ui121

ui121 already speaks MCP. This page shows form incumbents racing to let agents build and read forms, with safety (no delete) as a differentiator. Pulsarform’s MCP should expose the inbox: list open threads, draft a reply, assign a human. Building the form is table stakes. Operating the live submission is the unclaimed tool surface.

> “Your AI can create forms, edit live forms, and pull submission data, all from a plain-language prompt.” — paraphrased from Tally’s MCP guide, https://tally.so/help/best-mcp-form-builders
