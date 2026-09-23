# Jasonette actions

- Title: Jasonette actions
- Source URL: https://jasonelle-archive.github.io/docs/legacy/actions/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 05

## Summary

The actions reference is the controller chapter. A view in JSON is not enough; an action is a function expressed as JSON, from a network call to camera or address book, composable, with inline JavaScript allowed inside expressions. An action has `type` (a static string, not a template), optional `options`, optional `success`, and optional `error`. Success and error are themselves actions, so work chains. The return value of the current action is visible to the next as `$jason`. A geolocation example reads `$jason.coord` inside the success banner.

Actions can sit inline on a control, or live in a registry and be started with `trigger` by name, including from system events. Inline is for a one-off tap. The registry is for reuse and for events. Attachment points that accept actions include the header menu, footer tabs, footer input buttons, the top of a section item, a layer item, and button components. Plain labels and images do not. `$require` pulls in shared action definitions. Functional helpers include `$lambda` and success or error returns.

The built-in catalog, from the page’s headings, covers view control (`$reload`, `$render`, `$snapshot`, `$href`, `$back`, `$ok`, `$scroll`), network (`$network.request`, `$network.upload`), session (`$session.set`, `$session.reset`), variables (`$set`, `$get`), cache (separate from local variables, with read, write, and reset), globals, script include and clear, UI utilities (banner, toast, alert, share, picker, date picker), address book, and media (`$media.camera`, `$media.picker`, `$media.play`, `$vision.scan`). A typical chain is `$network.request` whose success is `$render` and whose error is a banner.

## Key facts

- Action fields: type, options, success, error. Type cannot be a template expression.
- Next action reads the previous result as `$jason`.
- Two call styles: inline object, or named trigger from a registry.
- Not every component accepts an action. Buttons do; plain images do not.
- Device and UI side effects are action types, not plugins: camera, vision scan, address book, network upload, banners.
- Cache and local variables are documented as different stores.

## How it works

The runtime interprets `type`, passes `options`, and continues down success or error. Rendering the current view from fetched JSON is `$render`. Replacing the whole document is `$reload`. Navigation can be an action (`$href`) as well as an href attribute. Because success is just another action, a form post, a reload, and an error toast are one tree.

## Implications for jsonapp.com / ui121

This is the difference between a form schema and an app. ui121 submits a task to a server; Jasonette also chains device actions in the document. A jsonapp.com runtime that claims "full application" needs a named action catalog with success and error, and a rule that type names are not executable strings. ui121 can keep actions fewer and server-side (submit, webhook, navigate) and still use the same chain shape. Unknown action types should fail closed, which this reference assumes the shell implements.
