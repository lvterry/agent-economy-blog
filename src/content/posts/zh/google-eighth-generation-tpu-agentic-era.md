---
title: 'Google 发布第八代 TPU 用双芯片架构押注智能体时代'
excerpt: 'Google 推出 TPU 8t 和 TPU 8i，把训练和推理拆成两条更清晰的路线，这反映出智能体时代的基础设施已经需要更强的分工与系统级优化。'
date: "2026-04-22"
tags: ["Google", "TPU", "AI-Infrastructure", "Hardware", "Data-Center", "Agentic-AI"]
category: "AI Infra"
source: "Google Cloud Blog"
---

Google 发布第八代 TPU，并首次明确把训练和推理拆成两条更清晰的产品路线：TPU 8t 面向大规模训练，TPU 8i 面向低延迟推理。这个决策很有代表性，因为它说明 AI 基础设施已经不再适合“一颗芯片包打天下”的叙事，尤其是在智能体工作负载开始快速增长之后。

智能体时代的计算需求和传统模型推理不同。它不仅要回答问题，还要持续规划、调用工具、反复推理，并在多 agent 协作中承受更高的延迟放大效应。Google 这次把 TPU 8i 设计成更强调带宽、片上 SRAM、互联和集合通信加速，本质上是在为这类长链路、低容错的工作负载做专门优化。

而 TPU 8t 则继续强化大规模训练集群的核心指标，包括更高的 pod 级算力、更大的共享高带宽内存、更强的互联，以及对大规模训练 goodput 的强调。Google 很清楚，前沿模型竞争仍然是平台实力的根基，所以训练路线不能放松；但要想真正接住 agent 时代，推理基础设施必须单独升级。

从产业角度看，这篇文章真正重要的不是单点规格，而是 Google 在重复一套已经越来越清晰的系统战略：自研芯片、自研网络、自研 CPU、自研软件栈，再加上对 JAX、PyTorch、vLLM、SGLang 的开放支持，尽量让开发者留在 Google 的全栈环境里。它卖的不是单颗 TPU，而是完整 AI Hypercomputer 叙事。

如果说上一代基础设施竞争是在比谁能训练出最强模型，那么这一代竞争更像是在比谁能同时养得起训练、推得动推理、并承受 agent 系统带来的复杂协同负载。TPU 8t 和 8i 的双路线，正说明 Google 认为未来的 AI 平台必须原生为这种分化需求设计。

[阅读原文](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)
