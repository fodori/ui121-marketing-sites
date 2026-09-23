# Elastic: LangGraph HITL with Elasticsearch

- **Source:** https://www.elastic.co/search-labs/blog/human-in-the-loop-hitllanggraph-elasticsearch
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Jeffrey Rengifo’s 29 January 2026 Elastic Search Labs post builds a human-in-the-loop flow on LangGraph, with Elasticsearch as the retrieval layer. The stated requirements are Node.js 18 or newer, an OpenAI key, and Elasticsearch 8.x or newer. The thesis is that conditional edges are not enough when the user must choose and correct. HITL here means a person can add context, judge a draft, edit it, or ask for more, especially where errors are expensive: compliance, decisions, and content.

The article is careful about when to interrupt. Validation should be reactive, triggered when information is missing or ambiguous, not a mandatory stop on every step. The familiar picture is a coding assistant asking before a shell command, or showing a plan before it edits files.

The worked example is a lawyer asking about a new case. The graph searches a set of legal precedents in Elasticsearch, shows the closest cases in natural language, lets the lawyer pick, then drafts an analysis. If the draft is complete, it finishes. If not, it pauses for clarification and regenerates with that context. The point of the demo is the shape: retrieve, let a human disambiguate, draft, pause again if the draft is thin, then answer. Elastic also points readers at its Agent Builder, which is a separate product pitch.

## Key facts

- Published 29 January 2026. Author Jeffrey Rengifo.
- Stack: LangGraph for the workflow, Elasticsearch as vector and full-text store, OpenAI for the model, Node.js 18+.
- Sample domain: legal precedents about service delays, with metadata such as case id, contract type, delay, outcome, and reasoning.
- HITL moments: the lawyer selects which precedents matter, and later supplies missing facts before a final analysis.
- Design rule on the page: interrupt when the system detects a gap, not on every node.

## How it works

A question enters the graph. A retrieval node queries Elasticsearch. A human-selection step presents candidates and waits for a choice in natural language. A draft node writes an analysis from the chosen precedents plus the question. A check either routes to the final answer or to a clarification interrupt. After the person replies, the draft runs again with the extra facts. LangGraph’s checkpointing is what makes those waits possible; Elasticsearch does not itself pause the agent. The article points to a repository for the full sample. This note does not copy that code.

## Implications for ai2ui.uk / ui121

This is evidence that teams hand-build the same pause twice in one flow: pick among options, then fill a gap. ai2ui.uk can render both as structured questions (a choice list, then a short form) instead of hoping the lawyer types into a chat transcript. Retrieval stays in Elasticsearch or wherever the customer already searches. The gateway only owns the human turns. Docs outline: when to interrupt, what the reviewer sees (candidates plus why they matched), how an edited clarification re-enters the graph.
