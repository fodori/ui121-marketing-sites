# Yjs — Realtime collaboration library

- Source: https://yjs.dev
- Fetched: 2026-09-23
- Status: ok

## Summary

The Yjs homepage presents a library for building collaborative applications. Shared types are manipulated like ordinary data structures, and they sync on their own. The three promises at the top are automatic syncing, offline support, and network independence. Offline means the shared data can live in a local database such as IndexedDB, so the app renders what it already has and syncs when a connection returns. Network independence means coordination does not require one central server; the project describes decentralised systems as faster, easier to scale, and more fault tolerant.

The page organises an ecosystem rather than a single tutorial. The client layer is shared types, an Awareness CRDT for presence-style features, and bindings that make existing UI libraries and rich-text editors collaborative. The connection layer is pluggable: y-websocket, y-webrtc, matrix-crdt, and others. The persistence layer stores shared state in y-indexeddb, y-leveldb, y-redis, and similar adapters. Ports listed to other languages and runtimes include Yrs, Yrb, Yswift, Yffi, Ywasm, Y_ex, pycrdt, Y-Octo, ydotnet, yr, ykt, and ygo. Sponsors are acknowledged; the page does not state a license in the fetched body. The homepage is a product landing page with ecosystem links, not a multi-article blog, so no extra collection was expanded from it.

## Key facts

- Shared types sync automatically and are used like normal data types.
- Offline: local persistence (IndexedDB given as the example) and sync later.
- No required central coordination server; transports are pluggable.
- Awareness CRDT is the named presence mechanism.
- Editor and UI-framework bindings are how existing interfaces become multiplayer.
- Cross-language ports are part of the public ecosystem list on the homepage.

## How it works

Application state that must be shared is held in CRDT-backed types. Local edits apply immediately. A provider ships the updates over whatever network the product chooses. Peers merge without a single lock-step server. If the device is offline, the local database is the source the UI renders, and the provider catches up later. Awareness is a separate shared structure for ephemeral facts such as who is here. Bindings translate those shared types into the document model of a specific editor or component library, so the collaboration layer is not a new UI toolkit.

## Implications for ui1to1.com / ui121

A one-to-one interface that is also “always connected” and real-time has to survive the expectations Yjs represents: live updates, more than one person on the same surface, and a usable screen when the network drops. ui121 does not have to claim it embeds Yjs. It has to claim the same class of behaviour. JSONUI is the description of the canvas; a sync layer of this kind is how that canvas stays coherent when two humans, or a human and an automated update, change it together.

The offline line matters for the human-in-the-loop story. A workflow that pauses for a person cannot assume they are online at the pause. Local state that renders now and syncs later is the difference between a live canvas and a page that spins. Marketing can cite Yjs as the open reference for “shared types that sync,” then describe ui121’s canvas as the single interface those updates land on — personal to the user, shared when the work is shared.

The homepage did not display a license statement in the fetched text, so this note does not treat the library text as reusable source.
