---
title: 'LongCat-2.0：美团开源 1.6T 参数模型，全程国产芯片训练'
excerpt: '美团发布 LongCat-2.0，1.6 万亿参数 MoE 模型，使用 5 万块华为昇腾芯片完成预训练和推理，成为首个在国产芯片上完成全流程训练的万亿级开源模型，面向智能体编程场景设计。'
date: "2026-06-30"
tags: ["AI-Infrastructure", "Hardware", "AI-Model", "Foundation Model", "LongCat"]
category: "AI Infra"
source: "Meituan"
---

美团今日开源了 LongCat-2.0，一个 1.6 万亿总参数、约 480 亿激活参数的 MoE 模型，支持 100 万 token 上下文窗口，采用 MIT 许可证。这不仅是目前最大的中国开源模型之一，更关键的是：它的训练和推理全部运行在国产芯片上。

LongCat-2.0 搭建在数万台华为昇腾 910C 芯片构成的 ASIC SuperPod 集群上，通过华为 HCCL 库协调芯片间通信——架构上对标 NVIDIA 的 NCCL 生态。研发团队为此设计了 LongCat Sparse Attention（LSA）机制，使百万级 token 的注意力计算保持高效。

在 Terminal-Bench 2.1 和 SWE-Bench Pro 上，LongCat-2.0 超过了 Google Gemini 3.1 Pro，但在最前沿的 Agent 和推理任务上仍落后 OpenAI GPT-5.5 和 Anthropic Opus 4.8。分析师认为，这一成果证明在国产芯片上训练前沿模型已技术可行，中国 AI 算力自立的进度可能比预期更快。

[阅读原文](https://longcat.chat/blog/longcat-2.0/)
