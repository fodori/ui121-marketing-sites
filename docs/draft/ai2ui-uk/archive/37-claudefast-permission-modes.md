# ClaudeFast: safe versus fast permission modes

- **Source:** https://claudefa.st/blog/guide/development/permission-management
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

This ClaudeFast guide is a configuration map for Claude Code permissions. The problem statement is flow: a prompt on every edit and command burns time. The quick control is Shift+Tab, cycling normal, auto-accept edits, and plan mode, with a note that the binding can be remapped. Five modes are documented. Normal prompts for edits, shell, system operations, and directory changes. Auto-accept edits removes prompts for file edits for the session. Plan mode is read-only exploration. Don’t-ask denies anything not on an allow list, with no prompt, which suits CI. Bypass skips checks entirely and matches a dangerous CLI flag; the guide says to use it only in containers, VMs, or ephemeral runners, and administrators can disable it in managed settings.

A persistent default lives in settings. An interactive `/permissions` command edits allow and deny lists without a restart and shows which file each rule came from. Rule syntax is a tool or a tool plus specifier. Evaluation order is deny, then ask, then allow, and the first match wins, so deny always beats allow. Bash wildcards respect word boundaries and shell operators, so a rule for a safe command does not match that command chained to another. The guide warns that trying to constrain curl arguments with bash patterns is fragile; use WebFetch domain rules instead. Read and edit patterns follow gitignore-style paths, and a leading slash is relative to the settings file, not the filesystem root, unless you use a double slash. MCP tools can be allowed per server or per tool. Subagents can be denied by name. Hooks can approve, deny, or rewrite a call before the static rules; the site sells an LLM-powered hook as a product.

Sandboxing is a second layer, OS-level, for bash and its children (Seatbelt on macOS, bubblewrap and socat on Linux). Permissions decide which tools may be attempted. The sandbox limits what a bash process can touch if the model is injected into trying anyway. Managed settings on system paths can force only admin rules and can disable bypass. The recommended pairing is normal mode while learning a codebase, auto-accept during a planned implementation, and plan mode for review.

## Key facts

- Modes: default, acceptEdits, plan, dontAsk, bypassPermissions.
- Cycle: Shift+Tab across normal, auto-accept edits, and plan.
- Rule order: deny, ask, allow. First match wins.
- Bash patterns understand shell operators; argument filters are called fragile.
- Path pitfall: `/Users/...` in a pattern is not absolute. `//Users/...` is.
- Sandbox: `/sandbox` command. macOS Seatbelt. Linux needs bubblewrap and socat.
- Managed disable switch: `disableBypassPermissionsMode` set to disable. `allowManagedPermissionRulesOnly` ignores user and project rules.
- Managed file locations are given for macOS, Linux, and Windows under system directories.

## How it works

The session starts in the default mode from settings. Each tool call is matched against merged rules unless the mode bypasses or auto-accepts a class of edits. Plan mode refuses modifications. Don’t-ask silently denies unknowns. Hooks can short-circuit before those rules. The sandbox wraps bash even after a permission allow. Org admins drop a managed file that users cannot override.

## Implications for ai2ui.uk / ui121

The friction-versus-trust trade-off is the user’s daily experience, and the controls are mode switches plus pattern files. ai2ui.uk is not a replacement for those files. It is a better prompt for the calls that still ask: show the specifier that matched, the command, and whether deny would have been safer. Enterprise copy can mention that a gateway decision should respect managed deny rules rather than offering a bypass the admin turned off. Developer docs should repeat the shell-operator and path-prefix footguns so approval cards do not display a misleading “this is allowed” summary.
