---
title: "Claude Opus 4.8 Launches with Major Agent Improvements, Dynamic Workflows, and Effort Control"
excerpt: "Anthropic releases Claude Opus 4.8 with across-the-board benchmark improvements, a new dynamic workflows feature for parallel subagent orchestration, and user-controlled effort settings — making Claude a more reliable and capable collaborator."
date: "2026-05-28"
tags: ["Anthropic", "Claude", "AI-Model", "Agent", "AI-Agents"]
category: "AI 模型"
source: "Anthropic"
---

Anthropic today released Claude Opus 4.8, an upgrade to its flagship Opus model line with significant benchmark improvements across coding, agentic tasks, and professional knowledge work. Alongside the model, the company launched two important product features: Dynamic Workflows and Effort Control.

## Measurable Improvements Across the Board

Opus 4.8 outperforms its predecessor Opus 4.7 on a wide range of evaluations. Cursor reported more efficient tool calling using fewer steps for the same intelligence. Databricks' Genie AI agent described a "step change in agentic reasoning" unlocking deeper, multi-step questions. Hebbia noted better citation precision and token efficiency on financial document retrieval.

Perhaps most notably, early testers consistently praised the model's improved judgment and honesty. Anthropic's evaluations show Opus 4.8 is roughly four times less likely than Opus 4.7 to let flaws in its code go unremarked. The model proactively flags uncertainties in its work rather than making unsupported claims.

## Agent Capabilities Take a Leap

Multiple testers reported substantial gains in agentic settings. A legal AI benchmark recorded the highest score ever with Opus 4.8. On Online-Mind2Web, a browser-agent benchmark, Opus 4.8 scored 84%, beating GPT-5.5. Devin reported cleaner tool use and more consistent instruction following compared to Opus 4.7.

## Two New Features

**Dynamic Workflows**, available as a research preview in Claude Code, allows Claude to plan work and then run hundreds of parallel subagents in a single session. It can handle codebase-scale migrations across hundreds of thousands of lines of code, from kickoff to merge, using the existing test suite as its quality bar.

**Effort Control** gives users a slider alongside the model selector to choose how much effort Claude puts into a response. Higher effort means deeper thinking and better results; lower effort means faster responses and slower rate limit consumption.

The Messages API now also accepts system entries inside the messages array, letting developers update instructions mid-task without breaking the prompt cache — useful for updating permissions, token budgets, or environment context as an agent runs.

## Pricing and Availability

Opus 4.8 is available today at the same pricing as Opus 4.7: $5/M input tokens and $25/M output tokens. Fast mode (2.5x speed) is priced at $10/$50 per million tokens. Developers can access it via the `claude-opus-4-8` model ID.

Anthropic also previewed Mythos-class models under Project Glasswing, with higher intelligence than Opus, currently being used by select organizations for cybersecurity work, expected to be generally available in the coming weeks.

[Read the full article](https://www.anthropic.com/news/claude-opus-4-8)
