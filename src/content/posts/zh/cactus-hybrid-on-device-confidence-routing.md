---
title: 'Cactus Hybrid 教 Gemma 4 判断自己是否知道答案'
excerpt: 'Cactus 团队对 Gemma 4 进行后训练改造，让模型每次输出都附带一个置信度分数，仅需路由 15–35% 的查询到云端即可匹配 Gemini 3.1 Flash-Lite 性能。'
date: "2026-07-23"
tags: ["AI-Infrastructure", "AI-Agents"]
category: "AI Infra"
source: "Cactus Compute"
---

端侧模型快而私密但有时会犯错，云端模型准确但昂贵。[Cactus Compute](https://github.com/cactus-compute/cactus-hybrid) 的解决方案是在两者之间架起智能桥梁——让模型自己知道什么时候可能错了。

Cactus Hybrid 的核心是一个仅 68k 参数的探测层，它读取 Gemma 4 的中间隐藏状态来预测输出错误的概率。每个回答都附带 0 到 1 的置信度分数，以结构化数据返回，无需从文字中解析。在 12 个保留基准上，探测层的平均 AUROC 达到 0.814，远超 token 熵值法的 0.549。最令人信服的证据是：探测层在零音频训练数据的情况下，在四个音频基准上达到 0.79–0.88 AUROC——它学到的是跨模态的正确性信号，而非记忆训练模式。

开发者只需设置一个阈值（如 0.85），当置信度低于阈值时自动将请求路由到 Gemini 3.1 Flash-Lite。实测仅需路由 15–35% 的查询，即可匹配 Flash-Lite 的全面性能。模型权重和代码均已开源（MIT 协议），支持 Transformers、MLX 和 llama.cpp 集成。

对智能体经济而言，这种按置信度路由的思路尤为关键。在 Agent 需要执行大量工具调用和多步推理的场景中，能够智能地在成本与准确性之间取得平衡，是基础设施走向成熟的重要一步。

[阅读原文](https://github.com/cactus-compute/cactus-hybrid)
