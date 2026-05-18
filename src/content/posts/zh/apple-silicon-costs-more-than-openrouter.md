---
title: "Apple Silicon 本地推理成本高于云端 API 三倍"
excerpt: "数据分析显示，在 Apple M5 Max 上运行本地 LLM 推理，每百万 token 成本约为云端推理的 3 倍，速度慢 3-7 倍——对开发者而言，租比买更划算。"
date: "2026-05-18"
tags: ["AI-Infrastructure", "Infrastructure", "Hardware"]
category: "AI Infra"
source: "William Angel"
---

威廉·安吉尔（William Angel）发表了一篇数据驱动的分析文章，直接比较了在 Apple Silicon 上运行本地 LLM 推理与通过 OpenRouter 使用云端 API 的真实成本。结论出乎许多本地优先倡导者的意料：云端更便宜，也更快。

以一台搭载 M5 Max 芯片、64GB 内存、售价 4299 美元的 MacBook Pro 为例，安吉尔按 3 年、5 年、10 年三个寿命周期进行摊销。在 Gemma 4 31B 模型上，本地推理速度约为 10-40 token/秒，每百万 token 的综合成本（电费加硬件折旧）约在 0.40 美元到 4.79 美元之间。而 OpenRouter 上同级别模型的价格仅为 0.38-0.50 美元/百万 token，推理速度可达 60-70 token/秒。

关键放大因素在于人的时间成本。对于一个年薪数十万美元的工程师来说，本地推理缓慢的速度意味着开发周期延长，远远抵消了 token 本身的边际成本。正如安吉尔所言：「向 Anthropic 花钱比等待本地推理更合理。」

这篇文章的价值在于它用实际数据挑战了「本地更省钱」的直觉。对于 AI 基础设施采购决策、开发者工具链设计以及模型部署策略而言，这种成本透明度至关重要——尤其是在智能体应用日益依赖高频推理调用的当下。

[阅读原文](https://www.williamangel.net/blog/2026/05/17/offline-llm-energy-use.html)
