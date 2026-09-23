# Spec-driven development in 2025

- Title: Spec-Driven Development in 2025: The Complete Guide to Using AI to Write Production Code
- Source URL: https://www.softwareseni.com/spec-driven-development-in-2025-the-complete-guide-to-using-ai-to-write-production-code/
- Fetched: 2026-09-23
- Status: ok

## Summary

James A. Wondrasek, SoftwareSeni, 30 September 2025, argues that chatting with a model ("vibe coding") is fine for prototypes and bad for production. Spec-driven development makes a written specification the source of truth. The loop he uses is Specify, Plan, Tasks, Implement. Traditional delivery is requirements, design, hand coding, tests. His version is requirements, a detailed spec, AI generation, validation. Humans keep architecture, requirements, and review. Errors go back into the spec, not only into a follow-up prompt.

He says this works now because context windows of 200K+ tokens can hold a real spec, and models already understand OpenAPI, JSON Schema, and structured docs. Strategic reasons: the spec is reusable across tools, so you are less locked to one IDE; documentation is the spec; decisions are explicit; review happens on the spec; history is an audit trail. Quality gates exist before code: tests, security, performance, and "done" are written first. ROI framing: hours of spec versus days or weeks of implementation, plus reuse. Examples he cites: Google’s AI toolkit with 80% of landed migration edits AI-authored and about 50% less migration time; Airbnb migrating 3,500 test files in six weeks versus an estimated 1.5 years.

Tools he sorts into AI IDEs (AWS Kiro’s specify-plan-execute, Windsurf Cascade, Cursor at $20/month), CLIs (Claude Code, Aider, Amazon Q for Java upgrades), IDE add-ons (GitHub Copilot at a 33% suggestion acceptance rate and $19/user/month business, plus GitHub Spec Kit’s four-phase flow), and enterprise wrappers (HumanLayer, Tessl, Lovable for UI). A good spec, in his outline, has purpose, constraints, functional and non-functional requirements, edge cases, tests, and examples. He sizes them from 100–200 words for a function to 1,000–2,000 for an architecture. He wants output format named as JSON Schema or TypeScript, negative examples, and existing patterns to copy. A vague "build auth" prompt is contrasted with a JWT spec that includes bcrypt cost, token lifetimes, rate limits, Joi validation, and cookie rules.

Limits he states: 67% of developers using AI tools spend extra time debugging while learning; models hallucinate dependencies, miss edge cases, and emit injection bugs; specs take hours and go stale; brownfield support is uneven; teams fear replacement; ROI shows up in 3–6 months. Spec-driven work struggles at research, fast-changing requirements, novel algorithms, hand-tuned performance, and visual taste. He tells teams to keep specs in OpenAPI, JSON Schema, and Markdown so they survive a tool change.

## Key facts

- Date: 30 September 2025. Author: James A. Wondrasek. Publisher: SoftwareSeni.
- Workflow: Specify, Plan, Tasks, Implement. GitHub Spec Kit is described as a four-phase reference.
- Portable formats he names: OpenAPI, JSON Schema, Markdown.
- Stats in the article: 200K+ token context; Google migration 80% of landed edits AI-authored and ~50% less time; Airbnb 3,500 test files in six weeks vs ~1.5 years; Copilot 33% acceptance; 67% of AI-tool users debug more during learning; ROI horizon 3–6 months.
- Prices mentioned: Cursor $20/month; Copilot business $19/user/month.
- Spec length guide: 100–200 words (function), 300–500 (endpoint), 500–800 (component), 1,000–2,000 (architecture).

## How it works

People write a spec that includes examples and acceptance checks. A tool turns it into a plan and tasks, then into code. CI runs security, tests, complexity, and performance gates as if a human had typed the code. The spec is stored in a standard format so another model can implement it later. The article’s code is ordinary application code. The spec is the portable object.

## Implications for jsonapp.com / ui121

For a JSON app, the spec and the implementation can be the same file. That is the shortcut this guide does not quite take: if the deliverable is a schema-valid UI document, "implement" is "render," and review is a diff of JSON. OpenAPI and JSON Schema are exactly the formats he says survive vendor churn. ui121 should describe its model as that kind of spec: human-readable, machine-validated, not a proprietary project file.

Use his limits in the pitch. AI-written UI still needs validation, versioned schemas, and a human review. The jsonapp.com promise is that those checks are structural (the schema) rather than a hope that generated Swift is fine.

> "Use standard specification formats like OpenAPI, JSON Schema, and Markdown for portability."
