---
title: 'GigaToken 将语言模型分词速度提升 1000 倍'
excerpt: '一款名为 GigaToken 的开源分词器利用 SIMD 和缓存层级优化，在 144 核服务器上实现最高 24 GB/s 的分词吞吐量，较 HuggingFace Tokenizers 提升约 1000 倍。'
date: "2026-07-23"
tags: ["LLM", "AI-Infrastructure", "Tokenization"]
category: "AI Infra"
source: "Marcel Rød"
---

AI 基础设施的每一次瓶颈突破都会为上层应用打开新可能。本周开源社区推出的 [GigaToken](https://github.com/marcelroed/gigatoken) 正是这样一次突破——它将语言模型中最基础也最频繁的操作之一「分词」的速度提升了三个数量级。

GigaToken 由 Marcel Rød 开发，基于 Rust 实现，核心优化策略包括 SIMD 指令集加速、高效利用 CPU 缓存层级，以及精心设计的预分词器缓存层次。在双路 AMD EPYC 9565（144 核）上，GPT-2 的分词吞吐量达到 24.53 GB/s，而 HuggingFace Tokenizers 仅 24.8 MB/s——差距近 1000 倍。在 Apple M4 Max 上，部分场景甚至达到 1268 倍。

GigaToken 兼容 HuggingFace Tokenizers 和 Tiktoken 的 API，只需替换 import 即可显著提速，无需修改现有代码。它还支持从文本文件直接读取数据的原生 API，进一步绕开 Python 对象开销。

对于任何处理海量文本数据的 AI 工作流——从训练数据预处理到推理时的实时分词——GigaToken 都意味着更低的延迟和更少的硬件投入。这是基础设施层面向效率的一次重要推进。

[阅读原文](https://github.com/marcelroed/gigatoken)
