# VentureBeat on the Apps SDK launch

- **Source:** https://venturebeat.com/technology/openai-announces-apps-sdk-allowing-chatgpt-to-launch-and-run-third-party
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Carl Franzen’s VentureBeat report, filed 6 October 2025 from OpenAI DevDay, covers the same Apps SDK launch as OpenAI’s own post, with more demo detail. Sam Altman is quoted in paraphrase as making it possible to build apps inside ChatGPT, including paid apps, using the Agentic Commerce Protocol. The framing is that people can use third-party software without leaving the chat, sign into those accounts, and ask the model to go beyond what the app does alone.

Altman’s line, kept short below, calls the result interactive, adaptive, and personalized. The SDK was in preview; listing and charging were “later this year.” Consumer access was Free, Plus, Go, and Pro outside the EU, with business tiers later.

The report is explicit that the SDK sits on MCP, which it attributes to Anthropic about a year earlier. Alexi Christakis is described demonstrating that the model stays current with what the user is doing in the app. Three layouts: inline cards or carousels, fullscreen for maps and menus and slides, and picture-in-picture for video, games, or quizzes.

Demos: Coursera (login in the chat, video pinned while the user asks about “what they’re saying right now”), Canva (a dog-walking poster, then a slide deck, from an older chat plus memory), Zillow (an interactive map, filters, tours and agent contact, plus a follow-up such as distance to a dog park). Search can be combined with the app’s data. Partners named beyond the keynote demos: Booking.com, Expedia, Figma, Spotify, and upcoming AllTrails, Peloton, OpenTable, Target, theFork, and Uber.

Safety notes match OpenAI’s bar: clear purpose, predictable behavior, safe for teens 13–17, minimum data, privacy policy, consent, and labeling of actions that change external data. Design must follow ChatGPT’s visual system, accessibility, and a tone the docs summarize as conversational, intelligent, simple, responsive, and accessible. Logos and accent colors are allowed; the core ChatGPT chrome is not redesigned for ads.

Open questions the reporter could not close: whether app data is available for training, and what happens to the older GPT Store.

## Key facts

- Published 6 October 2025, DevDay coverage.
- Presenter named for the demos: Alexi Christakis.
- Layouts: inline, fullscreen, picture-in-picture.
- Extra upcoming partners: AllTrails, Peloton, OpenTable, Target, theFork, Uber.
- Audience rule reported: appropriate for teens 13–17.
- Unresolved in the piece: training use of app data, and the fate of the GPT Store.

## How it works

A user names an app or accepts a suggestion. ChatGPT connects, shows a login if needed, and renders the partner UI in one of three frames. The Apps SDK feeds the model what is on screen, so a follow-up question can refer to the video or the listing without the user restating it. Actions that change data elsewhere must be identifiable.

## Implications for ui-mcp.com / ui121

Third-party reporting is useful for the demo narrative and for the design constraints (ChatGPT visual system, teen-safe, no promotional chrome). ui121 layouts should assume inline first, fullscreen for maps and editors, and a pinned panel when something must stay visible while the chat continues. The training-data question is a trust issue to answer in ui-mcp.com’s own privacy story, because VentureBeat left it open.

> “This will enable a new generation of apps that are interactive, adaptive and personalized, that you can chat with.” — Sam Altman, as reported by VentureBeat, 6 October 2025
