# RescueTime — Tool debt

- Source: https://blog.rescuetime.com/tool-debt/
- Fetched: 2026-09-23
- Status: ok

## Summary

Katie Schuknecht’s RescueTime piece names a cost that stacks of workplace software create faster than teams simplify the work around them. The average knowledge worker, she writes, uses four times as many tools as in the early 2000s, and 96% of employees are dissatisfied with the tools they were given. New software arrives with a real benefit and the old software stays, so work has more places to get lost. That accumulation is tool debt, also called digital tool fatigue.

She is careful: the count of tools is not the debt. Her own blog workflow uses at least six tools with distinct jobs (Coda, Google Docs, Slack, WordPress, an email platform, Gmail). Debt starts when tools overlap, so people must decide where information lives, recreate it, or check several apps to stay current. A client workflow that dropped Asana because the document and email already carried the updates is her example of subtraction.

Hidden costs, with the sources she attaches: Hubstaff’s 2026 report says the average employee uses 18 workplace applications a day, and some roles such as SEO average 36. Workers switch apps and sites almost 1,200 times a day, about 10% of the day, and some estimates put context switching at up to 80% of productivity. After a meeting, the same notes get copied into a knowledge base, Asana, Jira, Slack, and email — she says the same information is expected to live on nine platforms, so nobody knows which copy is current. A Microsoft study she cites: 117 emails and 153 Teams messages a day, 270 notifications before calendar and project pings. Asana: knowledge workers spend more than 20% of time on coordination, search, and process. Feature bloat: almost 45% of features in a typical product are never used, and close to 20% are seldom used. Gartner: the average company wastes 30% of its SaaS budget on unused licenses, duplicates, and shadow IT.

Her remedies are an overlap check before a purchase, a full cost that includes learning and maintenance, and “one in, one out.” She reports 79% of employees feel their company has done nothing about tool fatigue. A CMO she profiles had 41 tools, 30% of them duplicative; inventory, scheduled check-ins, and killing nonessential notifications cut her context switching by 70% and returned nearly two hours a day. Ron Friedman in HBR, quoted in the piece, describes superteams that schedule focus blocks and meeting-free days.

## Key facts

- 4× the tools of the early 2000s; 96% of employees dissatisfied with workplace tools.
- Hubstaff 2026: 18 apps a day on average; some roles 36.
- About 1,200 app/site switches a day; ~10% of the day lost to reorienting.
- Microsoft figures she uses: 117 emails, 153 Teams messages, 270 notifications a day.
- Asana: more than 20% of time on “work about work.”
- Unused features ~45% never, ~20% seldom; Gartner ~30% of SaaS budget wasted.
- 79% say the company has not reduced tool fatigue.
- Case: 41 tools, 30% duplicate; −70% context switching and ~2 hours/day back.

## How it works

Tool debt is an organisational loop, not a personal failing. A leader adds a tool for a missing feature. Overlap appears. People duplicate updates. Notifications pull attention. Training and admin grow. The fix she describes is an inventory of purpose, retirement of overlaps, and notification design — measured by where time actually goes, which is the product RescueTime is selling (a Key Tools Report of time per app).

## Implications for ui1to1.com / ui121

This is the pain behind “one interface.” ui1to1.com should not claim people will use one vendor for everything. Schuknecht’s own six-tool blog is legitimate. The promise is one connected surface where the person’s work, messages, and decisions meet, so the same fact is not retyped into nine places. A JSONUI canvas can be that source of truth: the task arrives as an interface, the human acts once, and downstream systems update from that action instead of from another copy.

The 1,200 switches, 96% dissatisfaction, and 30% wasted SaaS budget are the statistics to keep, always attributed. The CMO story (41 tools, two hours back) is a consolidation narrative a UK buyer already understands. Human-in-the-loop matters here because a notification is another ping; a task on the canvas is the work itself.

> “We found that superteams intentionally carve out opportunities for focused work, regardless of where their members do their jobs.” — Ron Friedman, quoted via RescueTime from Harvard Business Review
