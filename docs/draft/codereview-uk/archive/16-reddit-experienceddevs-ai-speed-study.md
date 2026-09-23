# Reddit r/ExperiencedDevs — 2026 update on the METR developer-speed study

- Source: https://www.reddit.com/r/ExperiencedDevs/comments/1tlqzld/update_study_2025_study_shows_experienced_devs/
- Fetched: 2026-09-23
- Status: ok

## Summary

The post is a May 2026 follow-up, not a new original study. The author points back at last year’s thread about METR’s early-2025 trial (experienced open-source developers expected AI to make them about 24% faster, still believed they were about 20% faster afterwards, and were measured about 19% slower) and then links METR’s February 2026 update: https://metr.org/blog/2026-02-24-uplift-update/. The title claims the 2026 update shows developers about 20% faster. The post body is short. Most of the substance is METR’s own caveat, which commenters quote, plus a long argument about whether that caveat makes the new number usable.

METR says the new experiment is a weak signal. More developers refused tasks that forbade AI, which METR thinks biases the speedup estimate downward. Pay dropped from $150/hour to $50/hour. Time tracking is unreliable when people run several agents at once. METR still thinks developers are more sped up in early 2026 than in early 2025, and calls the size of that change only weak evidence. Raw figures they publish: the 2025 result was tasks taking 19% longer (interval about +2% to +39%). Returning participants in the later study show an estimated 18% speedup (interval about −38% to +9%). Newly recruited developers show about a 4% speedup (interval about −15% to +9%). Those intervals cross zero, so the thread’s “~20% faster” headline is the point estimate for one subgroup, not a settled result.

The thread drew on the order of 380 points and about 300 comments. The highest-voted replies do not accept the title. They stress the recruitment change, the pay cut, and that METR itself called the 2026 data unreliable. A recurring theme is that any local speedup has not shown up as more software in the wider economy. Others say the interesting cost is not minutes per task but weaker understanding of the code over time, or that managers demand a reported 3× gain while the person doing the work feels a small one. A smaller set of comments treats AI as clearly useful for search, tests, and small fixes, and treats “percent faster” as the wrong metric. Sceptics also flag METR’s lab ties.

## Key facts

- Posted by u/RyanMan56, 23 May 2026, r/ExperiencedDevs. Roughly 384 points, 303 comments.
- Primary link: METR uplift update, 24 Feb 2026.
- 2025 METR RCT (restated in the thread): AI allowed → about 19% longer; forecast 24% faster; after the fact developers still believed they were about 20% faster.
- 2026 raw estimates quoted in comments: −18% time for returning developers, −4% for new recruits; confidence intervals include no effect. METR labels this weak evidence.
- Confounders named on the thread: refusal to work without AI, pay cut $150/hr → $50/hr, multi-agent timekeeping, possible junior mix at the lower rate.

## How it works

The original post is a pointer. It does not re-analyse the data. Readers are expected to open METR’s blog and then argue about selection bias. Commenters who paste METR’s own paragraphs are correcting the title: METR did not declare a reliable 20% speedup. Negative percentages in the quoted results mean less time, i.e. a speedup, and the top reply treats the intro as a warning that the estimate is not trustworthy.

## Implications for codereview.uk / ui121

Do not use the thread title as a statistic. The defensible line is the one METR and the top comments share: perceived speed and measured speed diverge, and the 2026 follow-up does not cleanly reverse the 2025 slowdown. For codereview.uk that still supports a review product. If generation feels faster while understanding gets thinner, the scarce step is a person looking at the change. The comment that a 10–30% coding speedup overflows the rest of the lifecycle is the same bottleneck the other notes in this archive describe. Cite METR’s own post for numbers, and this thread only as evidence that practitioners do not trust a headline speedup.
