---
title: 'Cloudflare 以量化优化把 Kimi 与 GLM 推理成本压低约三成'
excerpt: 'Cloudflare 公开了在 Workers AI 上规模化运行 Kimi K 系列与 GLM 的三项工程优化：FP8 量化 KV 缓存、INT4 权重压缩与缓存完整性校验，在不损失精度的前提下把单 token 成本降低约 30%。'
date: "2026-08-04"
tags: ["Cloudflare", "AI-Infrastructure", "Model-Compression"]
category: "AI Infra"
source: "Cloudflare"
---

Cloudflare 在 Agents Week 期间披露了边缘推理平台 Workers AI 规模化运行 Kimi K 系列与 GLM 的具体手法。这两款大参数 MoE 模型长上下文、显存压力大，该公司用三项优化把成本压了下来。

第一是 KV 缓存量化：把 BF16 缓存改为 FP8，容量直接减半，Kimi K2.6 可驻留上下文从约 68.6 万 token 翻倍到 137 万，64 路并发下吞吐提升约 41%，单 token 成本下降约 30%。第二是权重压缩：GLM 5.2 权重从 FP8 压到 INT4，检查点从 705GB 缩至 421GB，低并发解码速度提升 55%，基准测试精度与 FP8 几乎无差异。关键设计是预填充与解码分离，让两种量化各自用在擅长的阶段，而非二选一。

第三是 KV 缓存完整性校验：共享缓存让数百个请求复用同一显存页，Cloudflare 为每页加标签并在读取前校验映射，出错即中止请求，代价不足 1% 的吞吐。所有实验基于开源推理框架 SGLang，优化成果均已回馈上游。

对行业而言，推理成本下探不靠模型降价，而是靠服务层的工程优化持续发生；开源 MoE 模型在边缘规模化运行的经济性，正在被重新定义。

[阅读原文](https://blog.cloudflare.com/smaller-faster-safer-models/)
