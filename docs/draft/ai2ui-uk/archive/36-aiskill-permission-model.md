# AI Skill Market: Claude Code permission model for skill builders

- **Source:** https://aiskill.market/blog/claude-code-permission-security-model-skill-safety
- **Fetched:** 2026-09-23
- **Status:** partial

## Summary

Duke Harewood’s 13 April 2026 article says skill builders lose users when every invocation raises permission prompts. It carries an important caveat: the architectural detail comes from community analysis of public Claude Code artifacts (the page says CCLeaks), the article is AI-generated, it may be wrong, and it is not endorsed by Anthropic. Treat the internal names as informed rumour that matches observable behaviour, not as vendor documentation. This note is marked partial for that reason.

The claimed cascade has three layers. A tool registry filter decides whether a tool exists in the session at all, which is why a missing MCP server feels like the tool vanished. A per-call check classifies the call. A third layer shows the approval dialog with context, affected files, and the command, and the user can approve, deny, or allow for the rest of the session. One prompt per session can build trust. A dozen prompts in one invocation destroys it.

Safety flags in the article: read-only versus destructive. Risk levels: low for reads and searches, which pass quietly; medium for reversible writes, which ask in the default mode; high for destructive shell, force flags, and system changes, which should always ask. Six modes are listed: default interactive, plan (batch the intended actions), bypass, don’t-ask (proceed but log), accept edits (file edits auto-approved, destructive bash still asks), and auto, where a classifier function the article names `classifyYoloAction` uses Claude to decide if a call is safe. Predictable skills get auto-approved more often. Ambiguous ones feel random.

Further claims: bash is parsed into a syntax tree so structure, not only strings, is inspected; long sleeps, force deletes, and network calls are watched; unicode sanitisation, subprocess isolation, tool-result size limits, and URL checks resist prompt injection; each hook needs a workspace approval because hooks are arbitrary code. Design advice: read and plan before any write so the user sees at most one approval; prefer built-in edit and search tools over custom shell; say what the destructive step will do before the prompt; handle denial without retrying; keep hook count low. The marketplace argument is that sandboxed consent is why strangers can install skills, analogous to mobile app stores.

## Key facts

- Published 13 April 2026. Author Duke Harewood, listed as Chief Content Officer.
- Source caveat on the page: community artifact analysis, AI-generated, not Anthropic.
- Three layers claimed: registry filter, per-call risk check, interactive prompt.
- Six modes claimed: default, plan, bypass, don’t ask, accept edits, auto classifier.
- Risk examples: low reads, medium reversible writes, high destructive bash.
- Patterns: read-first, predictable paths, minimal bash, explicit destructive intent, graceful denial.

## How it works

If the article’s model is right, every tool call must be registered, then scored against the current mode, then optionally shown to the user. Plan mode gathers intended actions for one approval. Accept-edits lets file changes through and still stops dangerous shell. Auto mode asks a classifier that never replaces the need to design for the default interactive user. Denial should produce an alternative path, not a crash or an immediate retry.

## Implications for ai2ui.uk / ui121

Even with the caveat, the anatomy of a permission prompt is the competitive UX: what will run, which files, allow once versus allow for the session, and a path when the user says no. ai2ui.uk should design the card for the default interactive user, because that is who feels the friction. Session-long allow is a fatigue feature that must be logged. Do not repeat internal function names in customer copy as if they were documented APIs. The trustworthy line is the page’s own disclaimer plus the observable product: prompts are the trust surface for third-party skills.
