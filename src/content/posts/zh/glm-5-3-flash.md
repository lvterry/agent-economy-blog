---
title: 'GLM-5.3-Flash 开源，18B 激活参数逼近 Claude Opus 4.8'
excerpt: '智谱发布 GLM-5.3-Flash，320B 总参数仅激活 18B，编码与智能体基准逼近 Claude Opus 4.8，成本约为十分之一，并全程跑在中国自研芯片集群上。'
date: "2026-08-27"
tags: ["GLM", "Open-Source", "LLM", "Multimodal"]
category: "AI 模型"
source: "Z.ai"
---

Z.ai 8 月 26 日发布 GLM-5.3-Flash，这是 GLM-5 系列首个原生多模态模型，权重已开源到 Hugging Face。它总参数 320B、每次只激活 18B，用稀疏与线性注意力混合架构（并引入 IndexPool 压缩索引）大幅压低长上下文推理成本，KV 缓存相比 GLM-5.3 缩减约 4.4 倍。

价格是这次发布最锋利的部分：在 Artificial Analysis 智能指数上拿到 57 分、每任务成本约 0.045 美元，约为此前同等智能水平价格的十分之一。编码与智能体基准上它全面超过 GLM-5.2，DeepSWE v1.1 从 46.2 跳到 63.4，AutomationBench 翻倍至 48.8，整体逼近 Claude Opus 4.8。

更值得注意的是算力底座：发布前一周，该模型的全部流量都跑在中国 AI 芯片集群上。Z.ai 为此定制了 SGLang 推理引擎，端到端性能提升 3 倍，单 token 成本与 NVIDIA GPU 持平。工程师甚至让 GLM-5.3 驱动的智能体参与优化这套推理栈——模型在帮助优化服务自身的系统。

当开源模型、国产芯片与激进定价形成闭环，"前沿智能很贵"的假设正在被逐层拆掉。

[阅读原文](https://z.ai/blog/glm-5.3-flash)
