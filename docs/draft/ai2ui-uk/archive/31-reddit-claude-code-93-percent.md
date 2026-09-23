# Reddit: Claude Code users approve 93% of prompts

- **Source:** https://www.reddit.com/r/ClaudeCode/comments/1t5fe77/claude_code_users_approve_93_of_permission/
- **Fetched:** 2026-09-23
- **Status:** partial

## Summary

The Reddit page itself timed out, and the public JSON endpoint did not return the thread. What follows is limited to the title, search snippets that quote the same URL, and Anthropic’s own engineering post that the thread is reacting to. It is not a full paraphrase of every comment.

The post title says Claude Code users approve 93% of permission prompts and calls that horrifying. Snippets of the discussion argue that a user click is not the same as a real review, and that the useful question is whether a specific action is safe in this context, not whether the agent may use a tool in general. One visible reply distinguishes boring actions that should disappear into policy, dangerous actions that should fail closed, and an ambiguous middle that still needs enough context to be a real decision. The same reply keeps lower layers — isolation, least privilege, no raw secrets in the model context, protected paths, git checkpoints — and says those answer “is this capability allowed?” more than “is the agent using an allowed capability for the wrong reason?” Another snippet jokes that a large share of posts in the subreddit are themselves model-written. That joke is colour, not a statistic to reuse.

Anthropic’s engineering article on Claude Code auto mode, which search results attach to this claim, states that users approve 93% of permission prompts. It describes manual prompts as the middle of a trade-off between a high-maintenance sandbox and a flag that skips permissions entirely. Anthropic built classifiers to auto-decide some prompts, and published a 0.4% false-positive rate on blocking legitimate work and a 17% miss rate on “real overeager” actions. Whether 17% is acceptable depends on the baseline: better than skipping all prompts, worse than a careful human who actually reads. The auto mode is aimed at people who were going to rubber-stamp, and it does not remove human review for every case.

## Key facts

- Thread body: not loaded. Status partial.
- Title: users approve 93% of permission prompts.
- Figure origin to cite in copy: Anthropic’s auto-mode engineering post, not an anonymous comment. Anthropic states users accept 93% of prompts.
- Classifier figures from that Anthropic post, via search snippets: about 0.4% false positives; about 17% of overeager actions missed.
- Comment theme visible in snippets: capability allow-lists are coarser than per-action, per-context review.

## How it works

Not fully visible. The underlying product behaviour, from Anthropic’s post rather than from the unread thread, is that each potentially dangerous tool call raises a prompt, most prompts are accepted, and an optional classifier can take some of those decisions with a known miss rate. Sandboxing isolates tools but breaks when the task needs network or host access. Skipping permissions removes the prompts and the protection.

## Implications for ai2ui.uk / ui121

The 93% line is the prompt-fatigue stat, and it should be attributed to Anthropic. The product response is not “remove prompts.” It is fewer, richer prompts: auto-approve the boring policy matches, fail closed on obviously destructive calls, and put the ambiguous middle on a card that shows the command, the args, and the user’s task. ai2ui.uk can be that middle card, including for people who are not in the terminal. Do not cite individual Reddit comments as research until the thread is read in full. Do not claim a gateway beats a 17% classifier miss rate without its own evaluation.
