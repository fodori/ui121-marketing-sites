# Developers can submit apps to ChatGPT

- **Source:** https://openai.com/index/developers-can-now-submit-apps-to-chatgpt/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

On 17 December 2025 OpenAI opened app submission for review and publication, and put an app directory inside ChatGPT. Users find it from the tools menu or at chatgpt.com/apps. Developers can deep-link from other sites to their directory page. This follows the October DevDay launch of in-chat apps.

The post’s quality bar: start from a real user intent; keep the app tightly scoped; make it obvious in chat; either finish a workflow that began in conversation or do something that only makes sense with the model in the loop. The Apps SDK is described as now in beta. Resources named: submission guidelines, a best-practices piece on what makes a great ChatGPT app, open-source example apps, an open-source UI library for chat-native interfaces, a quickstart, and a developer resource hub.

A submission includes MCP connectivity details, testing guidelines, directory metadata, and country availability. Review status is tracked in the developer platform. The first approved apps were to roll out gradually in the new year. Apps that meet the quality and safety bar can be listed; apps people actually use may be featured or recommended in conversation. Recommendation signals mentioned: conversational context, usage patterns, and preferences, with a way for users to give feedback.

Early monetization is link-out: physical goods can be completed on the developer’s site or native app. Digital goods were still being explored. Connecting an app discloses data types and the privacy policy. Disconnect is immediate and cuts access. Apps must be appropriate for all audiences and must follow third-party terms when they pull in someone else’s content.

## Key facts

- Date: 17 December 2025.
- Directory: in-product, also chatgpt.com/apps, plus deep links.
- Submission payload includes MCP connectivity, test notes, directory metadata, country availability.
- SDK status in this post: beta.
- Physical-goods checkout may leave ChatGPT; in-chat digital goods were not opened yet.
- Triggers: @-mention, tools menu, and experiments with in-conversation suggestions.

## How it works

The developer builds a chat-native app on the Apps SDK, which rides MCP, then submits it. OpenAI reviews safety, privacy, and quality. Once published, the directory and the conversation itself are how people discover it. The MCP connection is part of the review packet, so a UI-bearing server is not an unofficial side door; it is what the submission form asks for.

## Implications for ui-mcp.com / ui121

Distribution is now a product surface, not only a protocol. ui121 should plan for directory metadata, country flags, a privacy policy, and a scoped job-to-be-done, because those are what get an interface recommended beside the chat. The “tightly scoped” rule argues for ui121 templates aimed at one workflow (approve a form, pick a variant, review a chart) rather than a full app shell inside ChatGPT.
