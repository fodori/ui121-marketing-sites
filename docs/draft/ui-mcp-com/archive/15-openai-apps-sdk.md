# OpenAI Apps SDK / plugins directory

- **Source:** https://developers.openai.com/apps-sdk/
- **Fetched:** 2026-09-23
- **Status:** partial

## Summary

The URL that used to introduce the Apps SDK now lands on a Plugins page. The visible pitch is to extend ChatGPT and Codex with reusable skills and connections to external services, and to publish once to a universal plugin directory. The extract shows a directory chrome (search, installed, public versus personal) and a featured set: Computer Use (Mac apps), Chrome, Spreadsheets, Presentations, Data Analytics, and GitHub (triage pull requests, issues, and CI). A line invites the reader to find concepts, walkthroughs, and guides for each stage of building a plugin, but the fetch did not return those child URLs, so this note does not invent a crawl of the hub.

What is still usable: OpenAI is framing distribution as one directory for both ChatGPT and Codex, and the featured plugins are interactive tools (control a browser, edit a deck, answer business questions) rather than text-only connectors. That matches the Apps SDK story even if the page title has shifted from “Apps SDK” to “Plugins.”

Because the long-form SDK tutorial is not what this URL returned, treat developer mechanics as coming from the ChatGPT UI page (source 12) and the October and December announcements (sources 14 and 16).

## Key facts

- Live page title area: Plugins, not a standalone Apps SDK essay.
- Promise: publish once to a universal plugin directory for ChatGPT and Codex.
- Featured examples: Computer Use, Chrome, Spreadsheets, Presentations, Data Analytics, GitHub.
- Child guide links were not present in the extract. Status is partial for that reason.

## How it works

A plugin packages a connection to an external service, and optionally a UI, and is listed so ChatGPT or Codex can install it. The page does not describe MCP metadata, iframes, or review. Those steps sit on the neighboring docs and the December submission announcement.

## Implications for ui-mcp.com / ui121

The directory is the distribution layer ui-mcp.com should acknowledge: building an MCP UI is not enough if the host hides it. ui121 can aim at the same jobs the featured plugins advertise — decks, sheets, analytics, repo triage — as chat-native screens, then publish where this directory sends developers. Do not cite a detailed SDK architecture from this URL alone.

No collection pages were saved from this hub because the fetch did not expose article links.
