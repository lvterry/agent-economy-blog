---
title: "Team Distills Gemini Tool Calling into a 26M Parameter Model"
excerpt: "Cactus Compute releases Needle, a 26M parameter tool-calling model that runs on tiny devices like phones and watches, opening new possibilities for edge AI agent deployment."
date: "2026-05-13"
tags: ["Agent", "AI-Agents", "Tool-Calling", "Model-Distillation"]
category: "AI 模型"
source: "Cactus Compute"
---

Cactus Compute has open-sourced Needle, a project that distills Gemini 3.1's tool-calling capability into a mere 26 million parameters — making it one of the smallest functional tool-calling models ever released.

Architecturally, Needle uses a custom "Simple Attention Network" design with 12 encoder and 8 decoder layers. It was pretrained on 16 TPU v6e chips for 200 billion tokens (27 hours), followed by post-training on 2 billion tokens of single-shot function-call data (45 minutes). The entire dataset generation pipeline is also open-sourced.

In benchmark comparisons, Needle outperforms FunctionGemma-270M, Qwen-0.6B, Granite-350M, and LFM2.5-350M on single-shot function-call tasks — despite being far smaller than all of them. On Cactus hardware, it achieves 6,000 tokens/sec prefill and 1,200 tokens/sec decode speed.

All weights are available on Hugging Face, and users can fine-tune the model locally on their own Mac or PC to adapt it to custom tool sets. A web UI and CLI are included for easy experimentation.

The strategic implication is significant: tool calling — a core capability for AI agents — no longer requires a cloud-hosted frontier model. Needle brings it to phones, watches, glasses, and other edge devices, opening the door to privacy-preserving, low-latency agentic applications that work entirely offline.

[Read the full article](https://github.com/cactus-compute/needle)
