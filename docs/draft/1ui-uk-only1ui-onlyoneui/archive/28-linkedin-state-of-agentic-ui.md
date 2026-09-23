# LinkedIn — The state of agentic UI (Alex Wang)

- **Source:** https://www.linkedin.com/posts/alexwang2911_the-state-of-agentic-ui-activity-7402300648782032896-gvL_
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Alex Wang’s LinkedIn post argues that most UI was designed before AI and cannot carry agentic systems. Going into 2026, he says, applications need patterns for real-time reasoning, interactive components, and human-in-the-loop work. Three breaks with classic request/response UI: agents reason across steps and tools; tools should return interface, not only text; models can emit structured layouts and components. He names three converging trends: AG-UI as the glue between agent backends and frontend apps; MCP Apps as a way for MCP tools to return dynamic UI (he describes iframes); and declarative generative UI, where agents assemble interface from their output.

Ecosystem momentum is a list of adopters and partners around AG-UI: LangGraph, Google’s ADK, Microsoft Agent Framework, Mastra, PydanticAI, CrewAI. CopilotKit is presented as the agentic frontend SDK covering those paradigms — shared state, visible activity, and human checkpoints — plus a short PDF report. The report’s takeaways, as he lists them: what agentic UI is, AG-UI as the application layer, tools that should return UI with their data, and model-generated UI still ahead. He points readers to copilotkit.ai.

Comments add practitioner gloss, not new studies. John Wernfeldt: today’s UI assumes the user clicks a path to value, and agents invert that. Dumitru Cilenov: the shift is from screens to behaviours. Refat Ametov: real-time reasoning in production exposes state and trust gaps, so AG-UI only helps when workflows are stable. Others call the static-frontend versus dynamic-agent split the year’s main builder friction.

The post is an announcement-style thread, not a paper. No original statistics are included.

Section outline: why pre-AI UI fails; three requirements; three protocols or trends; CopilotKit and the report; comment themes.

## Key facts

- Claim: agentic systems need UI for multi-step reasoning, tool-returned components, and human-in-the-loop control.
- Named pieces: AG-UI, MCP Apps, declarative generative UI, CopilotKit.
- AG-UI momentum list: LangGraph, Google ADK, Microsoft Agent Framework, Mastra, PydanticAI, CrewAI.
- CopilotKit role in the post: fullstack agentic UI SDK and author of a short “state of agentic UI” PDF.
- No sample size, benchmark, or customer metric in the post body.
- Comment caution: shared state and trust break if the underlying workflow is unstable.

## How it works

An agent backend emits events a frontend understands. A tool call can carry a UI payload so the result is a component. Declarative generation lets the model choose a layout from a vocabulary instead of returning prose. The human stays in the loop through visible state and explicit checkpoints. CopilotKit, in Wang’s account, packages interactivity and that shared state so teams are not inventing the event protocol per app.

## Implications for the one-UI domains / ui121

Wang’s post is the protocol-level version of the canvas: agents create interactive interface, not a transcript. ui121 already has that shape as a JSON renderer with a fixed catalogue, which is the declarative end of his spectrum and the safer one for enterprise tasks. 1ui.uk can say the ecosystem (AG-UI, MCP, CopilotKit) is standardising the pipe, and the missing product is the one surface those pipes render into — the same pages, forms, and charts for every agent, so “MCP Apps” do not become another app store of iframes. The comment about stable workflows is a useful caveat: generative UI on top of a messy process will not feel like one UI. The canvas assumes the task schema is the stable part.
