Full research notes: [archive/INDEX.md](archive/INDEX.md).

# SOURCES — jsonapp.com / "Build Apps as JSON UI" research

All URLs retrieved and verified via live web search/extraction on 2026-09-22. Notes capture what each source contributed.

## The site itself

1. **jsonapp.com — JSONApp site**
   https://www.jsonapp.com/
   Primary source. Verbatim pitch: "Markup language in JSON to define a full featured application, like a Browser. Simple as that." Features list: data-driven application, component-driven UI, in-app navigation (pages), i18n, data store, data management, HTTP + MQTT communication, module structure, theme-able styles. Target uses: prototypes, API testers, mobile apps. Contact: support@jsonapp.com. Links its Android viewer on Google Play.

2. **Json App (com.jsonapp.viewer) — Google Play**
   https://play.google.com/store/apps/details?id=com.jsonapp.viewer
   The jsonapp.com runtime: a single generic Android viewer that renders the JSON app format as a native application. Confirms the "one viewer, many JSON apps" delivery model.

## The "browser for JSON apps" lineage

3. **freeCodeCamp — How to build cross-platform mobile apps using nothing more than a JSON markup (Jasonette)**
   https://www.freecodecamp.org/news/how-to-build-cross-platform-mobile-apps-using-nothing-more-than-a-json-markup-f493abec1873/
   Jasonette expresses functions, templates, and styles as JSON markup; the result is native apps from a single JSON document. Direct precedent for jsonapp.com's model.

4. **Bram.us — Jasonette: build cross-platform mobile apps using JSON**
   https://www.bram.us/2017/02/21/jasonette-build-cross-platform-mobile-apps-using-json/
   Key framing: "just like how web browsers turn HTML into a web page, Jasonette turns JSON into iOS native components." The browser analogy central to ui121's positioning.

5. **Jasonette docs (Jsonelle archive) — Getting started**
   https://jasonelle-archive.github.io/docs/legacy/
   "Instead of programming an app on the device, you simply write a JSON file hosted on a server, and the Jasonette apps fetch and use it to build themselves on-device." Apps as server-hosted data.

6. **freeCodeCamp/Medium — How to turn your website into a mobile app with 7 lines of JSON**
   https://medium.com/free-code-camp/how-to-turn-your-website-into-a-mobile-app-with-7-lines-of-json-631c9c9895f5
   Demonstrates extreme simplicity of the markup: a working app in 7 lines of JSON. Great marketing artifact for "apps as data".

7. **Medium — Build a QR/barcode scanning app with 26 lines of JSON (Jasonette)**
   https://medium.com/@gliechtenstein/build-a-qrcode-barcode-scanning-app-with-26-lines-of-json-b83453d39197
   Native device capabilities (camera/QR) invoked purely via JSON instructions — shows the format can reach hardware features, not just static screens.

## Server-driven UI (SDUI) at scale

8. **Airbnb Engineering — A deep dive into Airbnb's server-driven UI system**
   https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5
   Canonical SDUI write-up (Ghost Platform): backend publishes UI structure, clients render natively. Proof that apps-as-data works at web scale.

9. **Airbnb Tech Blog index — front-end development**
   https://medium.com/airbnb-engineering/all?topic=front-end-development
   "How Airbnb ships features faster across web, iOS, and Android using a server-driven UI system named Ghost Platform" — cross-platform shipping advantage of SDUI.

10. **Medium (Aubrey Haskett) — Server-driven UI: what Airbnb, Netflix, and Lyft learned building dynamic mobile experiences**
    https://medium.com/@aubreyhaskett/server-driven-ui-what-airbnb-netflix-and-lyft-learned-building-dynamic-mobile-experiences-20e346265305
    Industry-wide validation: three household-name companies converged on the same JSON-defined-UI pattern.

11. **GitHub — MobileNativeFoundation discussion #47: Server-driven UI strategies**
    https://github.com/MobileNativeFoundation/discussions/discussions/47
    Practitioner debate on SDUI tradeoffs (where it works, where it doesn't) — useful for honest positioning.

12. **DEV Community — Server Driven UI (Nishant Keshav)**
    https://dev.to/nishant_keshav/server-driven-ui-3l0p
    "Build the UI to render dynamically based on JSON responses from the server" — accessible explainer of the concept.

13. **Medium (Eric O Martin) — Dynamic UI for mobile engineers: a practical guide to server-driven interfaces**
    https://medium.com/@ericomartin.0785/dynamic-ui-for-mobile-engineers-a-practical-guide-to-server-driven-interfaces-e3016709178e
    Modern (Dec 2025) practical guide: backend publishes a JSON/protobuf description of screens and components — the contract model.

14. **Medium (Vectoreman) — Server-driven UI with React Native: a comprehensive guide**
    https://medium.com/@vectoreman67/server-driven-ui-with-react-native-a-comprehensive-guide-45f7d1ae5943
    RN client parses server JSON config and renders on the fly; benefits: faster iteration, no releases.

15. **BDUI Go — Server-driven UI runner (Google Play)**
    https://play.google.com/store/apps/details?id=io.bdui.go&hl=en_GB
    "Opens apps described by JSON schemas and renders them natively — like a browser, but for mobile." A current-generation jsonapp.com analogue; evidence the category is reviving in 2026.

16. **StemJSON — Mobile apps that build themselves**
    https://stemjson.com/
    "Open declarative JSON specification for AI-generated, server-driven, end-user-customizable native mobile apps." The most explicit AI+JSON-apps positioning found; key competitive/validating signal.

## Declarative JSON UI standards

17. **Microsoft Learn — Adaptive Cards overview**
    https://learn.microsoft.com/en-us/adaptive-cards/
    "A whole new way to deliver UI: Adaptive Cards are platform-agnostic snippets of UI, authored in JSON, that apps and services can openly exchange." Proves JSON UI works across a huge ecosystem (Teams, Outlook, Windows widgets).

18. **Microsoft Learn — Windows widgets via Adaptive Cards Designer**
    https://learn.microsoft.com/en-us/windows/apps/develop/widgets/widgets-create-a-template
    "The Card Payload Editor contains the JSON definition of your widget's UI" — JSON-defined UI embedded in the OS itself.

19. **Slack Developer Docs — Block Kit**
    https://docs.slack.dev/block-kit/ and JSON block reference: https://docs.slack.dev/reference/block-kit/blocks
    Rich app surfaces (messages, modals, Home tabs) authored entirely as JSON payloads. Massive-scale JSON UI in production.

20. **JSON Forms — More forms, less code**
    https://jsonforms.io/ and docs: https://jsonforms.io/docs/
    "Declarative framework for building form-based web UIs" from a JSON Schema — data binding, validation, rule-based visibility out of the box; React/Angular/Vue renderers. The enterprise form slice of JSON-defined UI.

21. **Postman Blog — What is JSON Schema?**
    https://blog.postman.com/what-is-json-schema/
    JSON Schema as a declarative, standardized validation language — the safety mechanism that makes user/AI-editable app JSON trustworthy.

## JSON-driven UI in production apps

22. **ClearTax Engineering — A brief introduction to BLACK app's JSON-driven UI in React Native**
    https://medium.com/cleartax-engineering/a-brief-introduction-to-black-apps-json-driven-ui-in-react-native-5fd4903d97ac
    Whole screens defined as JSON "so that anyone in the team can change the layout of the screen" without an app release.

23. **VThink — Building a JSON-based dynamic UI in React Native**
    https://www.vthink.co.in/blogs/building-a-json-based-dynamic-ui-in-react-native
    Practical pattern: structure UI as a JSON object and render components dynamically instead of hardcoding JSX.

24. **Shopify — remote-dom (GitHub)**
    https://github.com/Shopify/remote-dom/
    "Render a tree of DOM elements created in a sandboxed environment ... in a different JavaScript context" — Shopify's remote UI architecture, the extensions/API-platform variant of server-defined UI. Related: https://shopify.dev/docs/api/polaris

## Low-code landscape & the AI shift

25. **Retool**
    https://retool.com/
    Flagship low-code internal-tools platform (connect any DB/API/LLM, visual builder). Represents the proprietary-canvas incumbent ui121's portable-JSON approach challenges.

26. **Reflex blog — Reflex vs Retool vs Superblocks**
    https://reflex.dev/blog/reflex-vs-retool-vs-superblocks/
    Market snapshot of internal-app builders; frames what "apps from configuration" means commercially.

27. **Whatnot Engineering — From low code to vibe code: bridging the gap for internal tools**
    https://medium.com/whatnot-engineering/from-low-code-to-vibe-code-how-we-bridged-the-gap-a71bd3b11ddc
    Real company (Nov 2025) moving from Retool to AI-generated code — shows the low-code paradigm is actively in flux and AI-defined apps are the next step.

28. **Hacker News — "RIP Low-Code 2014–2025"**
    https://news.ycombinator.com/item?id=46767440
    Community debate (late 2025) declaring the low-code era's decline in the AI era; notes schema.json/graphql as the AI-friendly artifacts. Directly supports "JSON-defined apps succeed low-code" positioning.

29. **SoftwareSeni — Spec-driven development in 2025: the complete guide**
    https://www.softwareseni.com/spec-driven-development-in-2025-the-complete-guide-to-using-ai-to-write-production-code/
    Spec-driven development with JSON Schema and Markdown for portability — the broader movement toward machine-readable app definitions that AI writes.

30. **Rayven — What is a low-code platform?**
    https://www.rayven.io/blog/what-is-a-low-code-platform
    Gartner's observation that "half of all new low-code clients will come from business buyers outside IT" — demand-side evidence that non-engineers want to build apps (which JSON UI + AI serves better than visual canvases).
