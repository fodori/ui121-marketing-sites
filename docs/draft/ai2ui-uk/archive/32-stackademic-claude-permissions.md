# Stackademic: how Claude Code permission prompts work

- **Source:** https://blog.stackademic.com/stop-fighting-claude-codes-permission-prompts-here-s-how-the-system-actually-works-ae594e59fb13
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Toni Maxx’s 26 March 2026 essay explains Claude Code’s prompts as a fail-closed defence against prompt injection, not as a bug. The scene is a deployment where every SSH, copy, PHP, and database command stopped for a yes. The threat model: the agent reads a file, the file contains instructions disguised as comments, and the agent treats them as the user’s request. The author says Anthropic’s security notes treat prompt fatigue as a known design tension. Unmatched commands ask. Reads are the default freedom. Edits, tests, and shell commands ask until a rule allows them.

Rules are deny, ask, and allow, evaluated in that order. Deny wins. Patterns look like a tool name or a tool plus a specifier: all bash, bash commands that start with npm run, SSH to one host, reading a specific env file, fetching one domain. Wildcards and a colon form for commands such as SSH are described. This is a whitelist of what may run silently, not a list of bans.

Four scopes merge rather than replace for allow-lists: managed enterprise settings that the user cannot override, gitignored local project settings, committed project settings, and user-global settings. The author’s fix for a LAMP deploy puts curl and a specific host in the global file, SSH and database commands in the local file, and the same SSH family on a specialised subagent so that agent does not ask. A “nuclear” allow of all bash, edit, and write is described as acceptable only in a sandbox the author already trusts. Allowing every tool is called out as disabling the safety model.

Auto mode, newer than pattern lists, uses a classifier and prose rules: describe the environment, what is safe, and what should still ask. It can be selected with a permission-mode flag or by cycling modes, and it can be removed from the cycle entirely. The mental model is trust zones: global, project, personal, per-agent, and contextual classifier decisions. The goal is invisible safety, not zero safety.

## Key facts

- Published 26 March 2026. Author Toni Maxx.
- Rule order: deny, then ask, then allow. Default for unmatched commands is ask.
- Scopes: managed, local (gitignored), project (shared), user. Allow arrays merge across scopes.
- Example tools in patterns: Bash, Read, WebFetch, with specifiers.
- Auto mode: prose allow and soft-deny, classifier instead of only regex. Can be disabled.
- Anti-pattern: an allow rule of everything.

## How it works

A tool call is matched against merged rules. If a deny matches, it is blocked. If an allow matches and nothing denied it, it runs. Otherwise the user sees a prompt. Subagent frontmatter can carry its own allow list that applies when that agent is active. Auto mode interprets sentences such as “ask before destructive database operations” instead of requiring a pattern for every command. Managed settings sit above all of this for enterprises.

## Implications for ai2ui.uk / ui121

Today’s approval UX is a terminal yes/no plus JSON allow-lists. ai2ui.uk should not pretend to replace Claude Code’s policy engine. It can be where the remaining asks go when the person is away from the terminal, carrying the command and the matched rule so the decision is auditable. Marketing contrast: pattern whitelists reduce prompts; they do not explain a novel command. A human gateway is for the unmatched and the soft-deny cases, with the same fail-closed default. Auto mode is a competitor for the boring middle and a reminder to show why a prompt still fired.
