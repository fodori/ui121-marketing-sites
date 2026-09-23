# Code execution with MCP

- **Source:** https://www.anthropic.com/engineering/code-execution-with-mcp
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Published 4 November 2025 by Adam Jones and Conor Kelly, this engineering post argues that direct tool calls waste context once an agent is wired to many MCP servers. Since the November 2024 launch, the community has built thousands of servers and the industry treats MCP as the default way to connect agents to tools. The new problem is scale: clients that load every tool definition up front, and that pass every intermediate result back through the model, get slow and expensive.

Two failure modes are spelled out. Tool definitions can consume hundreds of thousands of tokens before the model reads the user’s request. Intermediate results are worse: a meeting transcript pulled from Drive and written into Salesforce passes through the model twice. A two-hour sales meeting is used as a 50,000-token illustration, and large documents can break the workflow or be copied incorrectly.

The proposed fix is to present MCP servers as code APIs. The agent writes a short program that calls only the tools it needs and filters data in the execution environment. One worked example drops a Google Drive-to-Salesforce flow from 150,000 tokens to 2,000 tokens, a 98.7% reduction. Cloudflare’s similar pattern is cited as “Code Mode.”

Further benefits: progressive disclosure (browse a file tree or call `search_tools` with a detail level), filtering a 10,000-row sheet down to a handful of rows before the model sees them, loops and conditionals in code instead of extra model turns, PII tokenization so emails and phone numbers move between tools without entering the model, and saved skills (a folder with a script plus a SKILL.md) that the agent can reuse. The post is explicit about the cost: agent-generated code needs a sandbox, resource limits, and monitoring.

## Key facts

- Date: 4 November 2025. Authors: Adam Jones and Conor Kelly.
- Ecosystem claim: thousands of community MCP servers since November 2024.
- Worked token cut: 150,000 to 2,000 (98.7%) on a Drive-to-Salesforce example.
- Spreadsheet illustration: 10,000 rows filtered in code; model sees five.
- Transcript illustration: about 50,000 extra tokens if the full text is copied through the model twice.

## How it works

The client still speaks MCP, but the model does not see every tool schema on every turn. Tools are exposed as importable functions. The model reads the definitions it needs, writes code that calls them, and logs or returns only the slice that matters. Sensitive fields can be replaced with tokens inside the harness and restored when the next tool call is made, so the real values never sit in the prompt.

## Implications for ui-mcp.com / ui121

Interactive UI is a second way to keep bulk data out of the transcript: a chart or table can live in the iframe while the model sees a short summary. ui-mcp.com can pair that with this post’s efficiency story. A ui121 interface should be a high-level tool, not a dump of every API field, or it will hit the same context tax the post is trying to escape. Sandboxed execution and sandboxed iframes are the same product promise: rich behavior with a hard boundary.

> “Direct tool calls consume context for each definition and result.” — Anthropic engineering, 4 November 2025
