---
title: "Reasonix brings a cache-first coding agent built for DeepSeek"
excerpt: "A new open-source terminal agent engineered around DeepSeek's prefix cache achieves 94% cache hit rates in long sessions, collapsing input token costs to roughly one-fifth of typical usage."
date: "2026-05-25"
tags: ["Agent", "AI-Agents", "MCP"]
category: "AI 智能体"
source: "Reasonix"
---

A new open-source coding agent called Reasonix is making waves on Hacker News for taking a contrarian approach: instead of building a general-purpose agent that works with any model, it couples tightly to a single backend — DeepSeek — and engineers its entire architecture around that model's specific caching mechanics.

The premise is straightforward. DeepSeek's API uses a byte-stable prefix cache — it fingerprints prompts starting from byte 0 and caches the prefix across requests. Most coding agents (Aider, Cline, Continue) constantly mutate their conversation history to manage context, which destroys the cache prefix. Reasonix takes the opposite approach: it uses an append-only message loop where history is never reordered or compacted. The result is a 94% cache hit rate in long sessions, which drops input token costs from $0.07/Mtok to $0.014/Mtok — roughly one-fifth of the uncached rate.

Beyond the caching innovation, Reasonix ships with a full feature set that feels mature for a v0.50 release. It supports MCP (Model Context Protocol) as a first-class citizen through stdio, SSE, and Streamable HTTP transports — any external tool server wired in via `--mcp` merges into the same unified tool registry. It includes a composable skills system (Markdown playbooks with frontmatter), a `/plan` audit gate for read-only review before executing writes, sandboxed tool execution scoped to the project directory, and full session replay and cost analytics.

The pricing math is compelling enough to change user behavior. At $0.014/Mtok cached, a heavy coding session that would cost $2-3 on generic tooling might run $0.40-0.60 on Reasonix. For teams running agents at scale, that difference adds up fast.

[Read the full article](https://esengine.github.io/DeepSeek-Reasonix/)
