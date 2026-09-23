# MindStudio: Claude Code /fewer and allow lists

- **Source:** https://www.mindstudio.ai/blog/claude-code-fewer-permission-prompt-allow-list
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

MindStudio’s 9 July 2026 guide, edited by Luis Chavez-Mattos, describes Claude Code’s `/fewer` slash command as a way to build an allow list from what you actually approved, instead of flipping on auto-approve. Auto-approve is framed as too much trust for real work. Full interactive mode is the slow, safe end. Allow-list mode is the middle: named tools run, everything else still asks.

`/fewer` scans the current session’s tool calls and the approvals you gave, then proposes a minimal set. If you approved reads, edits, and only npm test commands, the suggestion should say that, not “all bash.” You review it, narrow anything too broad, add tools the session never exercised, and save it. A startup flag applies for one session. A project settings file persists it. The guide says syntax can change, so the official Claude Code docs win over the examples.

Patterns offered: a review list with read, search, and edit but no shell; a test loop whose bash is only test scripts; a docs sprint with write and no bash; a broader dev list scoped to npm and git. Failure modes: approving everything makes the suggestion broad; unused tools never appear; a list from one workflow blocks the next; bash strings are hard to scope, so “git commit but not git push” may need a hand edit. The command pays off on workflows you repeat. One-off trusted sandboxes can still use auto-approve. Sensitive repos should stay interactive. New workflows should be interactive first, then `/fewer`. Shared teams should commit the project file.

The rest of the page is a MindStudio pitch: a no-code agent runtime and an SDK so Claude Code can call hosted capabilities. That is adjacent marketing, not part of the permission mechanism.

## Key facts

- Edited by Luis Chavez-Mattos, Director of Product. Dated 9 July 2026.
- Three modes in the guide: interactive, auto-approve, allow list.
- Tools named: Bash, Read, Write, Edit, Glob, Grep, WebFetch, todo read/write.
- `/fewer` output is a draft of allowed tools or `--allowedTools` arguments, not an automatic change.
- Persistence: flag for one session, project config for reuse.
- Bash warning: unrestricted bash is close to auto-approve for shell. Prefer prefixes.

## How it works

Start interactive. Do a realistic task and approve deliberately. Run `/fewer`. Read the proposal against the risk you actually want. Apply a narrowed list. Re-run the command when the work changes, or keep separate configs per workflow. The model still prompts for anything outside the list, which is the point.

## Implications for ai2ui.uk / ui121

`/fewer` is prior art for risk-based auto-approval learned from behaviour, not only from a hand-written policy. ai2ui.uk can tell the same story at the human gateway: if reviewers always approve a class of actions unchanged, suggest moving that class to auto-approve, and keep prompting on the rest. The product difference is that the evidence is approval cards across agents, not one terminal session. Do not imply `/fewer` is an ai2ui feature. Cite it as the IDE-local version of “stop asking the questions you always answer yes to.”
