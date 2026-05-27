---
title: "Agent Memory: An Anatomy — From Cognitive Science to Engineering"
excerpt: "A deep technical analysis of AI agent memory systems, breaking down the extractor, store, and retriever components, and identifying where the field's terminology outpaces its engineering."
date: "2026-05-27"
tags: ["Agent", "AI-Agents", "Memory", "Agent-Memory", "LLM"]
category: "AI 智能体"
source: "brgsk.xyz"
---

Every agent memory library uses the same words — *episodic*, *semantic*, sometimes *procedural*. They're borrowed from cognitive science, lifted into the API. But the engineering often isn't lifted with them.

A new essay titled *Agent Memory: An Anatomy* by brgsk.xyz provides the clearest framework yet for understanding what these systems actually do and where they fall short. It decomposes agent memory into three components — **extractor**, **store**, and **retriever** — and tests each against cognitive science's canonical taxonomy.

The extractor's central question is timing: extract eagerly after every message and you spend tokens on small talk that goes nowhere. Extract lazily at session end and the context needed to resolve a pronoun is already gone. Coreference cues, temporal anchors ("yesterday"), and disambiguating local context are common casualties of whichever choice you make.

The store's hardest problem isn't where to put things — it's handling contradiction. The user lived in Paris until April, then moved to Amsterdam. Overwrite? Append? Keep both with the old marked superseded? A store that can't answer "what did I believe last month?" isn't a memory system — it's a snapshot with a timestamp.

The retriever is structurally RAG, with the user's accumulated statements as the corpus. Vector similarity as baseline, keyword search on top, reranker as the standard third layer. Some advanced implementations add time filters and presupposition checks — detecting when a question assumes a stale fact.

The essay's most pointed critique: most "procedural memory" implementations are just semantic memory with a metadata label. Mem0's `procedural` path differs from its semantic path only in `metadata.memory_type = "procedural"`. Procedural memory executed as behavioral disposition (LangMem's evolving system prompt from scored trajectories) is rare. Prospective memory — remembering to do something in the future — is nearly absent from production systems.

Production consolidation systems like Anthropic's *Dreams* and Letta's *sleep-time compute* represent the leading edge: offline passes that revisit stored material, deduplicate, resolve contradictions, and surface cross-session patterns.

For any team building or evaluating agent memory systems, this essay's analytical framework is more valuable than any single product's documentation.

[Read the full article](https://brgsk.xyz/agent-memory-anatomy/)
