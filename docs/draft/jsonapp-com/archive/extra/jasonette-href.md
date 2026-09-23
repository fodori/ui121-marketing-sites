# Jasonette href

- Title: Jasonette links between views
- Source URL: https://jasonelle-archive.github.io/docs/legacy/href/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 05

## Summary

`href` is how one Jasonette view opens another. It can sit on the header menu, section items, layers, and other controls that already look tappable, such as chat-input buttons. A vertical section item with href shows a disclosure chevron; the chevron colour follows the item’s colour style. If you need a link without the chevron, the docs say to use the `$href` action instead.

Attributes: `url`, `view`, `options`, `transition`, `loading` (deprecated in favour of preload), and `preload`. `view` defaults to `jason`, which loads another JSON document. `web` opens an in-app browser. `app` launches an external scheme such as mailto, sms, or a third-party app URL. `options` is any JSON object passed to the next view. The next view reads it as `$params` inside a template, so the destination must be rendered dynamically to use the payload. Transitions are `push` (default, from the right), `modal`, and `replace`. Preload is a partial view (style and layers, no head) shown during the fetch so the transition is not blank. The first screen cannot be preloaded by an href; Android always shows a loader; iOS uses a plist flag. Loading-as-a-boolean is marked deprecated.

## Key facts

- Default view type: `jason` (another JSON URL). Also `web` and `app`.
- Params: `options` on the link, `$params` in the next template.
- Transitions: push, modal, replace.
- Preload: temporary JSON view without a head, for the in-between frame.
- Disclosure indicator is automatic on vertical items unless you use the action form.

## How it works

A tap requests the next URL and presents it with the chosen transition. While it loads, preload markup is on screen. If the next document’s template references `$params`, those fields were set by the link, not by the server. External apps are just another view type, so leaving the runtime is still data.

## Implications for jsonapp.com / ui121

Multi-page JSON apps need an explicit link object: destination, presentation, and a typed params bag. ui121 navigation can stay simpler (task to task, or section to section) and still copy preload and "unknown route prompts an update," which ClearTax handled separately. External schemes should be an allow-list, not a free `view: app`, or a JSON document becomes an open-redirect.
