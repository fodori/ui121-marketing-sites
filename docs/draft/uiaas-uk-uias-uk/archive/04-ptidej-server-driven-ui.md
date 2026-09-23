# An introduction to server-driven UI — Ptidej

- Source: https://www.ptidej.net/blog/an-introduction-to-server-driven-ui/
- Fetched: 2026-09-23
- Status: ok

## Summary

A 3 December 2025 developer note that treats server-driven UI as a practical pattern, then names it UI-as-a-Service in the close. The client stops owning screens. It asks the server for a layout, receives a structured description of components and actions, and paints that description with native widgets. The same description can drive Android, iOS, and web, so a layout change does not need a store release.

The post is a teaching sketch, not a production system. It shows a small tree of list, text, image, and button nodes, then a Flutter function that switches on a type field and builds widgets. The point for a marketer is the sentence that closes the argument: the backend is the brain and the client is the renderer.

## Key facts

- Dated 3 December 2025. Author contact on the page: Henrique (email and LinkedIn `hdfs05`).
- Fit: catalogues and news that change often, one design shared across platforms, and server-side experiments.
- Limits called out: the server now owns presentation as well as data; native motion and accessibility are harder; huge nested payloads can be slow; offline needs a cached schema; bugs move from client commits to server payloads, so version logging matters.

> “Think of SDUI as UI-as-a-Service — your backend becomes the brain, your client the renderer, and your users benefit from an app that never feels outdated.”

## How it works

1. The app requests a named screen.
2. The server returns a schema: component type, properties, children, and an action name.
3. A client renderer maps each type to a real widget and routes the action.

The Flutter sketch is intentionally tiny: column, image, text, button. Unknown types render nothing. That is the contract a product has to harden: a versioned schema, a closed set of components, validation before send, and a cache so the last good layout still works offline.

Section outline: definition; request and response; why teams want it; when to use it; a worked renderer; limitations; the UI-as-a-service close.

## Implications for uiaas.uk / ui121

This is the cleanest public line that equates SDUI with UI-as-a-Service. ui121 already ships a server-described interface and a client that renders it. The post’s warning list is the product spec: schema versions, offline cache, and a renderer that stays accessible. Position `uiaas.uk` as that service sold to other teams, not as another tutorial on writing a switch statement.
