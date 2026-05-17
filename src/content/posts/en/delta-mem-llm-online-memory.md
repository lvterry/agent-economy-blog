---
title: "δ-mem Brings Efficient Online Memory to Large Language Models"
excerpt: "A new lightweight memory mechanism using only an 8×8 state matrix gives frozen LLMs associative memory through delta-rule learning, boosting agent benchmark performance by up to 31% without full fine-tuning."
date: "2026-05-17"
tags: ["Agent", "LLM", "AI-Agents"]
category: "AI 智能体"
source: "arXiv"
---

One of the key bottlenecks for large language models in long-running conversations and agent systems is effectively accumulating and reusing historical information. Simply expanding the context window is costly and often fails to guarantee that the model can actually utilize the extended context.

Researchers from multiple institutions have proposed δ-mem, a lightweight memory mechanism that addresses this challenge. δ-mem augments a frozen full-attention backbone with a compact associative memory state — just an 8×8 matrix — that compresses and updates historical information through delta-rule learning.

During generation, δ-mem reads from this memory state and produces low-rank corrections to the backbone's attention computation. The key advantage: no full fine-tuning, backbone replacement, or explicit context extension is required.

The results are significant. With only an 8×8 memory state, δ-mem improves the frozen backbone's average score to 1.10×, and achieves 1.15× over the strongest non-δ-mem memory baseline. On memory-intensive benchmarks, the gains are even larger: 1.31× on MemoryAgentBench and 1.20× on LoCoMo, while largely preserving general capabilities.

For agent developers, this research demonstrates a promising "compact and efficient" approach to memory: rather than enormous context windows or expensive fine-tuning, a well-designed compact online state can deliver meaningful performance improvements. This opens a practical path toward long-horizon agent systems that can continuously learn and remember.

[Read the full article](https://arxiv.org/abs/2605.12357)
