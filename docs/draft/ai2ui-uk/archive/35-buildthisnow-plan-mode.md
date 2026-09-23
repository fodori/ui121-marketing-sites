# Build This Now: Claude Code plan mode

- **Source:** https://www.buildthisnow.com/blog/guide/mechanics/planning-modes
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

This 28 July 2026 handbook page, by speedy_devv, treats Claude Code plan mode as a read-only permission mode that separates investigation from edits. Claude may read the repo, trace dependencies, inspect history, and run exploratory commands, then present a plan. It may not change source until the plan is approved. The author argues the expensive mistake is often the wrong boundary, not a bad line.

Entry points: start the CLI in plan permission mode, cycle with Shift+Tab until the status shows plan, prefix one turn with `/plan`, or pass the same mode to a non-interactive prompt. Desktop, VS Code, and the web client expose a mode control. Use it for auth, schema migrations, framework upgrades, features that cross UI, API, database, and jobs, unproven performance work, unfamiliar refactors, and anything painful to roll back. Skip it for typos, tiny components, and obvious test fixes. Rule of thumb: if you cannot name the files and invariants, plan first.

A useful brief states the outcome, what to inspect, constraints, and success checks, and it says not to change code yet. A good plan has seven parts: current behaviour with file evidence, the proposed boundary, concrete files, data flow, failure cases, verification, and rollout with rollback. If it only restates the prompt, keep planning. Adversarial questions cover breakage, unverified assumptions, a simpler design, double or out-of-order events, and tests that would pass if the feature were still broken. The client can keep refining, approve into a chosen permission mode, or leave without approving. Ctrl+G opens the plan in an editor.

The two-pass workflow is plan, then implement against the plan with an instruction to stop if the repo contradicts it. Afterward, read the diff and run the checks named in the plan. Teams can default a repo to plan mode in settings, and can write planning expectations into CLAUDE.md. The permission mode controls whether Claude can act; the instructions improve the plan. Pitfalls: dictating filenames before inspection, accepting a file list as a plan, no verification path, treating the plan as immutable, and using plan mode instead of version control. Plan mode does not make later deploys or remote calls safe.

## Key facts

- Published and updated 28 July 2026. Author speedy_devv. About 10 minutes.
- Mode name: plan. Read-only until approval, then the user picks the execution mode.
- Entry: CLI flag, Shift+Tab, `/plan`, editor mode control.
- Seven plan contents: current behaviour, boundary, files, data flow, failures, verification, rollout and rollback.
- Project default: permissions.defaultMode set to plan.
- Official behaviour is described as Anthropic’s permission-mode docs; this page is a practitioner guide.

## How it works

The session is held in research until the user accepts a plan or exits. Read-only exploration can include commands that do not modify source; anything with side effects should stay out of the planning pass. Approval ends plan mode and switches to the selected permission mode for implementation. The user can still review edits, continue planning, or leave. A second prompt binds the agent to the approved plan and tells it to stop on contradictory evidence.

## Implications for ai2ui.uk / ui121

This is the “approve a plan before execution” story in operational detail. ai2ui.uk can host that approval when the planner and the approver are not the same person: the plan’s seven sections become the form, and approve, revise, or reject are the decisions. Marketing should repeat the guide’s limit: a read-only planning phase does not secure the later deploy. The gateway’s job is the decision point between the two passes, with the plan text and the rollback visible on the card.
