---
title: "When You Delegate to LLMs, Your Documents Get Corrupted"
excerpt: "A new benchmark shows that even frontier models like Gemini 3.1 Pro, Claude 4.6 Opus, and GPT 5.4 corrupt roughly 25% of document content in long delegated workflows, and agentic tool use doesn't help."
date: "2026-05-10"
tags: ["Agent", "AI-Agents", "Trust", "LLM", "AI-Safety"]
category: "AI 智能体"
source: "arXiv"
---

Can you trust an AI agent to edit your documents? A new paper from arXiv offers an unsettling answer: not yet.

Titled "LLMs Corrupt Your Documents When You Delegate," researchers Philippe Laban, Tobias Schnabel, and Jennifer Neville introduce DELEGATE-52, a benchmark simulating long delegated workflows across 52 professional domains — from coding and crystallography to music notation.

The results are striking: even the most advanced frontier models — Gemini 3.1 Pro, Claude 4.6 Opus, and GPT 5.4 — corrupted an average of 25% of document content by the end of long workflows. Weaker models fared worse.

## Key findings

Three counterintuitive results stand out:

**Errors are sparse but catastrophic.** Models don't degrade through "death by a thousand cuts." Instead, they maintain near-perfect reconstruction in most rounds, then suddenly lose 10–30 percentage points of content in a single round. This failure mode makes the problem especially hard to detect.

**Agentic tool use doesn't help.** Giving models access to external tools (file read/write, search) did not improve performance on DELEGATE-52. The issue isn't about capabilities — it's about fundamental reasoning reliability.

**Long context amplifies the problem.** Larger documents, more interaction rounds, and more distractor files all worsen degradation. The more you ask an LLM to do, the more likely it breaks something.

## Implications for the agent economy

This paper strikes at the core trust issue of the agent economy. If AI agents can't even preserve document integrity during delegated editing, the risks multiply for payments, contracts, code review, and other critical workflows.

The takeaway: builders of agent systems need to rethink verification. It's not enough to check whether a task was completed — you also need to check for collateral damage. The "delegate and trust" interaction pattern requires much stronger auditing and rollback capabilities.

[Read the full article](https://arxiv.org/abs/2604.15597)
