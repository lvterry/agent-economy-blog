---
title: 'Z.ai 用 GLM 智能体自建十万卡国产芯片推理系统'
excerpt: '智谱披露 GLM-5.3-Flash 的全部生产推理跑在超过十万张国产加速器上，大量工程由 GLM-5.3 驱动的 Infra Agent 完成，不到两周把端到端吞吐提升到约三倍。'
date: "2026-09-18"
tags: ["GLM", "AI-Infrastructure", "AI-Agents", "Hardware"]
category: "AI Infra"
source: "Z.ai"
---

8 月我们报道过 GLM-5.3-Flash 开源，当时只提到它运行在国产芯片集群上。Z.ai 昨日补上了后半段：超过十万张国产 AI 加速器，GLM-5.3-Flash 的全部线上推理都跑在上面。此前没人在这类芯片上部署过这个量级的集群，显存与带宽有限、内核支持不全、文档缺失，许多细节只能靠猜。

更值得注意的是谁在干活。这套系统的相当一部分工程由 GLM-5.3 驱动的 Infra Agent 完成，从首个能跑的版本到承载生产流量不到两周，端到端吞吐提升约三倍。手段包括线性注意力与 LM Head 的节点内张量并行、ReplaySSM、W8A8 量化、INT8/FP8/BF16 混合精度缓存量化与 Layer Split，再叠加 Encode-Prefill-Decode 分离架构，最终硬件利用率与单 token 成本已接近主流 NVIDIA 方案。

Z.ai 把方法论归纳为“密集反馈”：反馈要足够局部，能落到具体内核与输入形状；要足够便宜及时，内核测试与微基准不必每次跑全量压测；还要可客观验证，靠对照实现与受控实验而非观察相关性下结论。端到端指标只能说明变慢了，说不出为什么——把可归因的反馈喂进智能体的迭代循环，才是持续优化的前提。

结果也印证了这一点。GLM-5.3-Flash 曾以匿名模型 Ox-Alpha 在 OpenCode 与 OpenRouter 上测试，一周内成为两个平台使用量最高的模型，六天处理超过 62 万亿 token。

Z.ai 称这是递归自我改进的早期形态，同时强调选择目标、划定边界、评估风险仍由人负责。措辞值得保留一分怀疑，但数字很实在：模型优化了系统，系统再运行模型。

[阅读原文](https://z.ai/blog/glm-built-its-inference-infrastructure)
