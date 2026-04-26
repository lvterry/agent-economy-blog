---
title: 'OpenAI Codex Launches Chronicle Screen Context Memory'
excerpt: 'OpenAI unveils Chronicle for Codex as an opt-in research preview, using screen capture to build automatic work memories and reduce the need to restate context, while introducing new privacy and prompt injection risks.'
date: "2026-04-26"
tags: ["Agent", "Coding", "Security", "Privacy", "OpenAI", "Codex"]
source: "OpenAI"
---

OpenAI has officially detailed Chronicle in its developer documentation — a screen context memory feature for Codex. Currently available as an opt-in research preview, it is limited to ChatGPT Pro subscribers on macOS.

The idea is straightforward: Chronicle lets Codex "see" your screen while you work, extracting context and building memories from it. When you later interact with Codex, it no longer needs you to explain from scratch what you are doing, which tools you use, or which files you have open.

This is not simple screen recording. Chronicle runs sandboxed agents in the background that periodically capture screenshots, extract OCR text and timing information, and summarize these fragments into structured Markdown memory files stored under `~/.codex/memories_extensions/chronicle/`. Raw screenshots are deleted after less than six hours.

OpenAI highlights three key scenarios: Codex understands what is on your screen right now, fills in missing context you did not explicitly state, and remembers the tools and workflows you use regularly. When a specific file, Slack thread, or pull request is the better source, Chronicle identifies it and uses it directly rather than relying solely on blurry screen memories.

But the trade-offs are significant.

Privacy comes first. Chronicle requires macOS Screen Recording and Accessibility permissions. Screenshots can contain any sensitive information visible on your display. OpenAI states that screen captures are stored only temporarily on your local device, are not retained on servers after processing unless required by law, and are not used for training. However, the generated memory files are unencrypted Markdown, readable by any program with access to your machine.

Then there is prompt injection risk. If a malicious webpage or document containing hidden agent instructions appears on your screen, Codex might execute them. OpenAI is upfront about this, advising users to pause Chronicle before meetings or when viewing sensitive content.

There is also a practical pain point: Chronicle's background agents consume rate limits quickly.

Chronicle represents an aggressive step toward context-aware coding agents. It tackles a real problem — the biggest friction in human-AI agent collaboration is not model intelligence but the need to re-establish context in every conversation. However, a "see everything" approach via screen capture pushes privacy and security boundaries further than any coding assistant has gone before.

Notably, OpenAI chose to experiment with this direction first on Codex rather than in consumer-facing ChatGPT products. This suggests screen memory is currently more suited to professional developer workflows than everyday use — at least until the technology matures and risk controls catch up.

[Read the full article](https://developers.openai.com/codex/memories/chronicle)
