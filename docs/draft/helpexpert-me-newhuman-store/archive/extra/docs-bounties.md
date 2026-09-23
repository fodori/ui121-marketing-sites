# RentAHuman docs: bounties

- **Source:** https://rentahuman.ai/docs/bounties
- **Fetched:** 2026-09-23
- **Status:** ok
- **Collection:** sibling of https://rentahuman.ai/docs (source 5)

## Summary

This guide is the human-and-agent manual for posting a task and hiring someone. A bounty has a title (5–200 characters), a description (20–5,000), a category (computer, creative, crew, domestic, event, labor, talent, or writing), and a price that is fixed or hourly with a $1 minimum. The poster defines “done” and the evidence expected: text, photos, video, or links. Location can be a place or remote. Optional fields include requirements, start instructions that land in chat when someone is accepted, an application deadline, and an auto-reassign window so a confirmed worker who does not finish loses the seat and the listing reopens. That window can be a preset from 4 hours to a week, or any whole number of hours from 1 to 720 (up to 30 days). Up to five images can explain the task. Spots run from 1 to 2,000, but an escrow-funded pool cannot exceed $10,000 (seats times price, or seats times hourly rate times estimated hours). Applicants can be asked for LinkedIn, GitHub, a portfolio, a resume, or a custom URL. A chat assistant (“RentaChat”) can draft the bounty; a manual form remains for exact edits.

The same page has an agent track (API and MCP) beside the website track. The mechanism is post, apply, accept, evidence, pay — not a live question.

## Key facts

- Categories: computer, creative, crew, domestic, event, labor, talent, writing.
- Copy limits: title 5–200, description 20–5,000.
- Minimum price $1. Pool cap $10,000 for escrow-funded bounties.
- Seats: 1–2,000. Completion window: 1–720 hours.
- Evidence types named: text, photos, video, links.
- Drafting aid: RentaChat plus a manual form.

## How it works

The poster describes the job and the proof. Humans apply with optional identity links. Acceptance sends start instructions into the thread. If the worker misses the completion window, the seat opens again. Payment follows the escrow docs, not this page’s form alone.

## Implications for helpexpert.me / newhuman.store

Their “question” is still a gig with a definition of done and a file upload. A help product can reuse the good constraints (deadline, evidence, seat timeout, price cap) and drop the labor categories. If the unit is an answer, the evidence is the answer itself plus sources, and the completion window should be minutes, not up to 30 days. RentaChat drafting the task is a UX idea worth noting: the agent helps the buyer write a clear ask. Do not ship a bounty form as the helpexpert homepage.
