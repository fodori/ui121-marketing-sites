# MCP — Build an MCP App

- Source: https://modelcontextprotocol.io/extensions/apps/build
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The build guide is a getting-started path for interactive UI on top of MCP tools and resources. It expects Node.js 18 or newer and familiarity with those primitives, because an app is a tool that points at a UI resource plus an HTML view of the tool’s data. Two setup styles are described: hand the design to an AI coding agent that already knows the MCP app patterns, or follow a manual scaffold.

The tutorial splits server and UI. The server declares the tool and the resource the host will iframe. The UI is the page that receives tool results and sends user actions back. Testing is first-class: try the app inside Claude, and try it in a basic host that is not a full assistant, so the view can be debugged without the model in the way. The page points onward to the apps documentation and invites feedback. It is a tutorial, so this note stays at the shape of the work and does not copy steps or sample code.

## Key facts

- Prerequisite called out: Node.js 18+.
- Two start paths: an AI coding agent, or manual setup.
- Implementation split: MCP server (tool + UI resource) and a separate UI.
- Test surfaces named: Claude, and a basic host.
- Apps are an extension; the guide assumes tools and resources from the core spec.

## How it works

You implement a server that can list and call a tool and can serve the HTML resource that tool names. The UI speaks the app dialect to the host, renders the payload, and requests further calls when the person interacts. A basic host loads the same resource without a conversational model, which isolates layout and messaging bugs. An assistant host adds the model’s choice of when to show the app. The guide’s point is that both halves are required: a protocol server and a view.

## Implications for ui1to1.com / ui121

The tutorial shows how much custom UI an MCP app still demands: a server, a bundled page, a host that sandboxes it, and a test harness. ui121’s one-to-one canvas is the alternative for business workflows that should not each become an HTML app inside a chat. JSONUI lets the same human task render in the person’s interface, generated per context, without a new iframe per tool. Where a customer already lives in Claude, MCP Apps are the integration path; where the human’s work lives in ui121, the canvas is the app. Human-in-the-loop testing against a “basic host” is a useful analogy for a deterministic task UI that does not depend on the model to draw.
