# LEADERS.md — Market-Leader Voices on MCP, AI-Tool Integration & MCP Apps

Collected verbatim from primary sources (Sept 2026). For ui121 positioning: note how every leader frames MCP as _the_ standard way to "connect AI to tools/data," and how the newest frontier is interactive UI inside the chat (MCP Apps).

---

## 1. Anthropic (MCP creator)

**Website:** anthropic.com · **Source:** https://www.anthropic.com/news/model-context-protocol

> "Today, we're open-sourcing the Model Context Protocol (MCP), a new standard for connecting AI assistants to the systems where data lives, including content repositories, business tools, and development environments."

> "MCP addresses this challenge. It provides a universal, open standard for connecting AI systems with data sources, replacing fragmented integrations with a single protocol. The result is a simpler, more reliable way to give AI systems access to the data they need."

> "Early adopters like Block and Apollo have integrated MCP into their systems… enabling AI agents to better retrieve relevant information to further understand the context around a coding task and produce more nuanced and functional code with fewer attempts."

_Note:_ The creator's framing is "universal, open standard replacing fragmented integrations" — connectivity without bespoke glue.

**Adopter quote embedded in Anthropic's post (Block):**

> "Open technologies like the Model Context Protocol are the bridges that connect AI to real-world applications, ensuring innovation is accessible, transparent, and rooted in collaboration." — Dhanji R. Prasanna, CTO at Block

**Claude Code docs (anthropic's SDK voice):** https://code.claude.com/docs/en/mcp

> "Claude Code can connect to hundreds of external tools and data sources through the Model Context Protocol (MCP), an open source standard for AI-tool integrations. MCP servers give Claude Code access to your tools, databases, and APIs. Connect a server when you find yourself copying data into chat from another tool… Once connected, Claude can read and act on that system directly instead of working from what you paste."

---

## 2. OpenAI (ChatGPT / Agents SDK / Apps)

**Website:** openai.com · **Source (Agents SDK):** https://openai.github.io/openai-agents-python/mcp/

> "MCP is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools."

> "The Agents Python SDK understands multiple MCP transports. This lets you reuse existing MCP servers or build your own to expose filesystem, HTTP, or connector backed tools to an agent."

**API docs voice:** https://developers.openai.com/api/docs/mcp/

> "Your remote MCP server permits others to connect OpenAI to your services and allows OpenAI to access, send and receive data, and take action in these services."

**Apps/Plugins (UI-in-chat frontier):** https://developers.openai.com/apps-sdk/

> "Extend ChatGPT and Codex with reusable skills and connections to external services. Publish once to the universal plugin directory."

_Note:_ OpenAI's signature metaphor is the "USB-C port for AI applications" — connectivity as pluggable hardware.

---

## 3. Google (Gemini / ADK)

**Website:** google.com · **Source (ADK docs):** https://adk.dev/tools-custom/mcp-tools/

> "The Model Context Protocol (MCP) is an open standard designed to standardize how Large Language Models (LLMs) like Gemini and Claude communicate with external applications, data sources, and tools. Think of it as a universal connection mechanism that simplifies how LLMs obtain context, execute actions, and interact with various systems."

> "MCP follows a client-server architecture, defining how **data** (resources), **interactive templates** (prompts), and **actionable functions** (tools) are exposed by an MCP server and consumed by an MCP client (which could be an LLM host application or an AI agent)."

> "1. **Using Existing MCP Servers within ADK:** An ADK agent acts as an MCP client, leveraging tools provided by external MCP servers. 2. **Exposing ADK Tools via an MCP Server:** Building an MCP server that wraps ADK tools, making them accessible to any MCP client."

_Note:_ Google leans on "universal connection mechanism" — same interoperability claim, framed for agent builders (ADK).

---

## 4. Microsoft (Copilot Studio MCP)

**Website:** microsoft.com · **Source:** https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/introducing-model-context-protocol-mcp-in-copilot-studio/

> "At Microsoft, we believe in creating tools that empower you to work smarter and more efficiently. That's why we're thrilled to announce the first release of Model Context Protocol (MCP) support in Microsoft Copilot Studio. With MCP, you can easily add AI apps and agents into Copilot Studio with just a few clicks."

> "Model Context Protocol enables makers to connect to existing knowledge servers and APIs directly from Copilot Studio. When connecting to an MCP server, actions and knowledge are automatically added to the agent and updated as functionality evolves. This simplifies the process of building agents and reduces time spent maintaining the agents."

> "**Easily connect to data sources:** Whether you have a custom internal API or external data providers, the MCP protocol enables smooth and reliable integration into Copilot Studio."

_Note:_ Microsoft's pitch is low-code scale: MCP = "a few clicks," auto-synced actions, enterprise governance via connector infrastructure.

---

## 5. MCP Apps (official spec extension, modelcontextprotocol.io)

**Website:** modelcontextprotocol.io · **Source:** https://modelcontextprotocol.io/extensions/apps/overview

> "Text responses can only go so far. Sometimes users need to interact with data, not just read about it. MCP Apps let servers return interactive HTML interfaces (data visualizations, forms, dashboards) that render directly in the chat."

> "**Context preservation.** The app lives inside the conversation. Users don't switch tabs, lose their place, or wonder which chat thread had that dashboard. The UI is right there, alongside the discussion that led to it."

> "**Bidirectional data flow.** Your app can call any tool on the MCP server, and the host can push fresh results to your app… **Security guarantees.** MCP Apps run in a sandboxed iframe controlled by the host. They can't access the parent page, steal cookies, or escape their container."

_Note:_ The spec names the exact wedge ui121 sits on: interactive UIs rendered in-chat, with bidirectional tool calls and sandboxed iframes.

---

## 6. MCP-UI (community SDK → standardized into MCP Apps)

**Website:** mcpui.dev · **Source:** https://mcpui.dev/

> "🎉 MCP-UI is now standardized into MCP Apps!"

> "MCP Apps is the official standard for interactive UI in MCP. The MCP-UI packages implement the spec, and serve as a community playground for future enhancements."

> "Build rich, dynamic interfaces for AI tools using the MCP Apps standard. … All remote code executes in sandboxed iframes, ensuring host and user security while maintaining rich interactivity."

> "**Client Side** — Render tool UIs with `AppRenderer` … **Server Side** — Create a tool with an interactive UI using `_meta.ui.resourceUri`."

_Note:_ MCP-UI is the grassroots project whose approach became the MCP Apps standard — proof the interactive-UI layer has an adopted spec path.

---

## 7. Block (MCP early adopter, Square/Cash App)

**Website:** block.xyz · **Source:** https://www.anthropic.com/news/model-context-protocol (Block's CTO quoted)

> "At Block, open source is more than a development model—it's the foundation of our work and a commitment to creating technology that drives meaningful change and serves as a public good for all."

> "Open technologies like the Model Context Protocol are the bridges that connect AI to real-world applications… We are excited to partner on a protocol and use it to build agentic systems, which remove the burden of the mechanical so people can focus on the creative."

_Note:_ Adopter language: MCP as "bridges" — agentic systems free people from mechanical work.

---

## 8. Postman (API platform / MCP catalog & servers)

**Website:** postman.com · **Source:** https://blog.postman.com/sdk-vs-cli-vs-mcp-a-dev-story/

> "Door three: connect the GitHub MCP server and let it call tools."

> "A command-line interface (CLI) wraps the same API in commands you run from a terminal… it works before anyone writes integration code. Claude Code was already fluent in it… The terminal is the interface agents already have, so there's no adapter to write and nothing to configure."

> "I picked door one, then door three, then changed my mind again. What finally settled it wasn't a benchmark. It was noticing I'd been asking the wrong question. … Those three callers want different things, which is the part I missed."

_Note:_ Postman's dev voice frames MCP as one of three integration doors (SDK / CLI / MCP server) and blogs heavily about building AI-ready MCP tooling.

---

## 9. Shopify (commerce MCP)

**Website:** shopify.com · **Source:** https://shopify.dev/docs/apps/build/storefront-mcp

> "Connect any AI assistant to real-time commerce data from Shopify stores with Model Context Protocol (MCP) servers. Help customers search, ask, and buy in natural language."

> "The Model Context Protocol (MCP) standardizes how applications provide context to AI models. It creates a consistent way for AI systems to access Shopify's commerce data and features."

> "This approach lets you connect any AI model to Shopify without custom integration."

_Note:_ Shopify's tagline is nearly verbatim ui121's domain angle: "Connect **any** AI assistant… without custom integration."

---

## Voice summary (for ui121 copy)

- **Shared metaphor:** USB-C / universal bridge / standard protocol — MCP ends per-integration glue.
- **Payoff vocabulary:** "connect any AI," "read and act directly," "a few clicks," "without custom integration," "build once, integrate everywhere."
- **UI frontier (MCP Apps):** "Interactive HTML interfaces that render directly in the chat," "context preservation," "bidirectional data flow," "sandboxed iframe security."
