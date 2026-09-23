# Introducing apps in ChatGPT

- **Source:** https://openai.com/index/introducing-apps-in-chatgpt/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

On 6 October 2025 OpenAI announced apps you can talk to inside ChatGPT, built with an Apps SDK that was released as an open standard on the Model Context Protocol. Apps show up when ChatGPT suggests one or when the user names one. They answer in natural language and include interactive UI in the chat. The distribution claim is reach to more than 800 million ChatGPT users at the moment the conversation needs the app.

Availability at launch: logged-in users on Free, Go, Plus, and Pro, outside the European Economic Area, Switzerland, and the United Kingdom. A 13 November 2025 update on the page says apps were in preview for Business, Enterprise, and Edu. Pilot partners live that day, in markets where their services already operate, in English: Booking.com, Canva, Coursera, Figma, Expedia, Spotify, and Zillow. More partners were promised later, and EU access was expected soon.

Developers could build and test immediately in Developer Mode. Submission, a directory, and monetization were scheduled for later in the year. The Agentic Commerce Protocol is named as the path to instant checkout. First connect shows what data may be shared; finer data-category controls were promised later. Apps must follow usage policies, be appropriate for a general audience, collect the minimum, and publish a privacy policy.

Examples of the blend: Spotify builds a playlist from a sentence; Zillow shows listings on a map inside the chat; Canva turns an outline into slides; Coursera plays a lesson while ChatGPT explains a moment in the video. Developers keep their own backend login for existing customers.

## Key facts

- Date: 6 October 2025. SDK in preview, built on MCP, described as open.
- Reach figure: more than 800 million ChatGPT users.
- Launch partners: Booking.com, Canva, Coursera, Figma, Expedia, Spotify, Zillow.
- Not in EEA, Switzerland, or the UK at the initial consumer rollout.
- Business, Enterprise, and Edu preview noted as of 13 November 2025.
- Monetization hook named: Agentic Commerce Protocol.

## How it works

The Apps SDK extends MCP so a developer defines both logic and interface. ChatGPT connects to the app’s server, passes conversational context, and renders the interactive surface in the thread. The user connects once. Later, naming the app or accepting a suggestion brings it back. The page does not spell the iframe bridge; that is in the developer docs.

## Implications for ui-mcp.com / ui121

ChatGPT apps are the consumer proof that MCP can carry a UI, and the 800 million figure is the distribution number to use carefully (it is OpenAI’s reach claim, not a count of MCP App users). ui121 interfaces — maps, decks, course players, listing browsers — match the pilot jobs. ui-mcp.com should stress that the same MCP backbone is what makes an app portable beyond ChatGPT, which this launch post only hints at by calling the SDK an open standard.

> “A new generation of apps you can chat with, right inside ChatGPT.” — OpenAI, 6 October 2025
