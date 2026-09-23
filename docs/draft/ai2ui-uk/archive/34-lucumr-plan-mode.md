# Armin Ronacher: what plan mode actually is

- **Source:** https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Armin Ronacher’s 17 December 2025 note is a code-reading exercise, not a tutorial. He had avoided Claude Code’s plan mode because, in an early version, it did not inherit the broad permissions he uses and kept asking. His own substitute was to iterate with the agent on a markdown handoff he could edit. Friends who like plan mode sent him back to the implementation.

What he found: a plan is a markdown file written into Claude’s plans folder. It has no extra schema. The agent is reminded that plan mode is read-only except for that file, and that it must not run non-readonly tools, change config, or commit. He quotes the injected line that plan mode means the user does not want execution yet. The edit tool is still present and appears to be how the agent updates the plan file. Entering and exiting plan mode is itself a tool, so the agent can enter it, which has the same effect as the keyboard shortcut. There is a short phased prompt: understand the request and the code, design an approach, review alignment and ask remaining questions, then write a concise final plan that names critical files and includes only the recommended approach. Exit does not receive the plan as an argument. It reads the file and signals that the user should review it. The exit tool’s description tells the agent not to use it for pure research, and to resolve ambiguity before asking for approval.

Ronacher’s conclusion is that most of the behaviour is prompt and a bit of UX, not a hard tool lock. You could paste a similar prompt yourself and get similar text, but you would not get the confirmation screen that only appears when exit runs against the file in the expected place. He prefers a visible file he can edit over a hidden plan and a mode switch. He is interested in which parts of an agent UX must be enforced by the harness and which the model will do from language alone. A footnote says the confirmation screen can appear with an error that no plan exists, unprompted, because the agent can enter the mode itself.

## Key facts

- Written 17 December 2025.
- Plan artifact: markdown in a plans folder, no additional structure beyond text.
- Enforcement he observed: recurring read-only reminders and a workflow prompt, plus an exit tool that reads the file. Not a removal of edit/read tools.
- Phases in the injected prompt: understand, design, review (including clarifying questions), final plan.
- Exit tool: signals readiness; the user sees the file contents; not for research-only tasks.
- Author’s preference: an editable file on disk over a hidden plan UI.

## How it works

The user switches mode or the agent calls the enter tool. Extra instructions land in context. The agent explores with read-only intent, writes the plan by editing the plan file, then calls exit. The client shows the file and asks the user to approve before implementation. Leaving the mode without that tool does not raise the same approval UI. Because the reminder is prompt text, a determined or confused model can still be pointed at other tools; the harness’s distinctive piece is the approval screen tied to the file.

## Implications for ai2ui.uk / ui121

Plan mode is approval-before-action as a UX pattern: inspect, write a plan a human can read, then execute. Ronacher’s critique is useful product design. If the plan is hidden, power users will recreate it as a file. ai2ui.uk should show the plan as an editable structured page, not only a modal, and the approve action should be a real gate the harness enforces, not only a sentence in the prompt. One short attributed line is enough if quoted: the injected instruction that the user does not want execution yet. Paraphrase the rest. Marketing angle: “approve the plan” is a human gateway moment even inside a coding agent.
