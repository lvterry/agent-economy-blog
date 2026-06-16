---
title: "SubQ 发布 1.1 Small，支持 1200 万 token 上下文的亚二次注意力模型"
excerpt: "SubQ 发布 Subquadratic Sparse Attention（SSA）模型 1.1 Small，在 1200 万 token 上下文长度上实现近乎完美的检索能力，计算量仅为传统密集注意力的 1/64。"
date: "2026-06-16"
tags: ["AI-Model", "Infrastructure", "SubQ", "Long-Context"]
category: "AI 模型"
source: "SubQ"
---

SubQ 今日发布了 Subquadratic Sparse Attention（SSA）模型的第二代产品——SubQ 1.1 Small。该模型在 1200 万（12M）token 上下文长度上的 Needle-in-a-Haystack 测试中取得近乎完美的检索成绩，同时实现了显著的计算效率提升：在 100 万 token 时，计算量仅为密集注意力的 1/64，推理速度比 FlashAttention-2 快 56 倍。

SubQ 1.1 Small 在多项基准上表现强劲：GPQA Diamond 达到 85.4%，LiveCodeBench v6 pass@4 达到 89.7%，在长上下文代理基准 RULER（128K）上达到 99.12%。这些成绩使其接近前沿模型，但在长上下文场景下拥有巨大的成本优势。

SSA 的核心创新在于用内容感知的稀疏注意力替换了传统 Transformer 的密集注意力机制，将注意力计算从 O(n²) 降至 O(n)。这意味着随着上下文长度增长，计算成本线性增加而非平方级爆炸——对企业级智能体处理完整代码库、金融文档和法律合同等场景，这是一个基础性的突破。

SubQ 表示正与首批设计合作伙伴开展部署，计划今年晚些时候发布更多规格的模型版本。

[阅读原文](https://subq.ai/subq-1-1-small-technical-report)
