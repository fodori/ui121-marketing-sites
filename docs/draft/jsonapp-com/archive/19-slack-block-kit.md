# Slack Block Kit

- Title: Slack Block Kit
- Source URL: https://docs.slack.dev/block-kit/
- Also fetched: https://docs.slack.dev/reference/block-kit/blocks
- Fetched: 2026-09-23
- Status: ok

## Summary

Slack’s Block Kit is the layout system for app surfaces: Home tabs, messages, and modals. Everything the user sees in those surfaces is a stack of blocks, and the stack is JSON. The intro page says an app "sculpts specially-structured JSON" and that the building experience is the same whether the surface is a modal, a message, or a tab. A visual Block Kit Builder lets you drag blocks and preview them; the reference is there if you skip the builder.

Limits on the intro page: up to 50 blocks in a message, and 100 in a modal or Home tab. Some blocks only work on some surfaces. A block is a JSON object with a `type` plus fields. The section example is markdown text and a link. Stacking is an array in visual order: a header, then sections whose `fields` are two-column facts (type of request, creator, dates), then a link. Interactive pieces are block elements inside blocks. A section can carry an accessory button with plain text, a value, and an `action_id`. Once a button exists, the app must handle the interaction payload and respond. Accessibility: screen readers use the top-level message `text`, not the interior blocks, unless you omit `text` and let Slack build a readout from supported blocks.

The blocks reference (second URL) is the catalog as of the fetch. Names include actions, alert, card, carousel, container, context, context actions, data table, data visualization (pie, bar, area, line), divider, file, header, image, input, markdown, plan, rich text, section, table, task card, and video. That is an application surface vocabulary: tables, charts, tasks, and inputs, not only chat bubbles.

The Block Kit intro is a docs hub. Element and composition-object catalogs are saved as extras. View objects and the interaction guide were linked but not given their own notes, to stay inside the extra cap.

## Key facts

- Surfaces: Home tab, messages, modals. Same `blocks` array.
- Caps: 50 blocks per message, 100 per modal or Home tab.
- Composition: blocks contain elements; elements are built from composition objects (text, options, confirm dialogs).
- Button identity: `action_id` plus `value`.
- Accessibility: top-level `text` is what many screen readers speak; omitting it lets Slack assemble text from blocks.
- Block types in the reference include data table, charts, input, task card, plan, carousel, and video.
- Tool: Block Kit Builder for preview without posting.

## How it works

The app sends JSON. Slack’s clients map `type` to native controls and route element interactions back to the app by `action_id`. The app does not draw pixels. It does own the response: a button does nothing useful until the app handles the payload. Layout is order in the array, plus a few blocks that have their own internal layout (fields, accessories). Richer blocks (tables, charts, task cards) show the catalog growing toward mini-apps inside chat.

## Implications for jsonapp.com / ui121

Block Kit is the highest-volume JSON UI in daily work tools. The marketing line is not "Slack is low-code." It is "a JSON array of typed blocks is how a platform lets thousands of apps share one renderer." ui121’s component catalog is the same idea aimed at tasks rather than messages.

Copy the operational details that keep JSON UI from becoming a junk drawer: a documented block list, per-surface compatibility, a hard cap, action ids instead of code, and a builder that round-trips the JSON. The accessibility note is a product requirement: a JSON UI still needs a text fallback that is not an accident of the visual tree.

> "Your app will be sculpting specially-structured JSON to express itself."
