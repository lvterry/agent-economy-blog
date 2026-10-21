---
title: '两台 Mac Studio 就能跑起 Meta 新开源的 816B 智能体模型 Muse Spark Open'
excerpt: 'Meta 发布 Muse Spark Open 权重，称其为迄今最强的美国开放权重模型，816B 参数、100 万 token 上下文，两台 M5 Ultra Mac Studio 即可本地运行。'
date: "2026-10-16"
tags: ["Meta", "AI-Model", "AI-Agents", "Open-Source"]
entities: ["Meta"]
category: "AI 模型"
source: "Meta"
---

Meta 正式放出 Muse Spark Open 的权重，并称它是"迄今最强的美国开放权重模型"。这是一个原生多模态模型，总参数 816B、激活 42B，上下文窗口 100 万 token，主打编程与智能体任务，强调长程任务、复杂软件工程和多步推理。

最吸睛的是本地部署：借助最新版 MLX，两台 M5 Ultra Mac Studio 就能装下整个模型。每台机器的 GPU 最多可用 512GB 统一内存，两台合起来约 1TB，再加上 1.2TB/s 的内存带宽，足以支撑每个 token 只读取一小部分参数的推理。Meta 演示了完全在本地运行的智能体流程：用 Muse Code 给开源 Mastodon 客户端 Ice Cubes 修 bug、加功能并完成构建，以及端到端操控 DaVinci Resolve 逐帧挑选精彩片段并裁成竖屏。

生态铺得也很广：Together AI、Fireworks、Groq、Baseten、Modal、Nebius、OpenRouter 提供托管推理，权重可从 Hugging Face、SageMaker、Google Cloud Model Garden 和 Microsoft Foundry 下载，SGLang、vLLM、TensorRT-LLM、llama.cpp 等主流推理引擎均已支持。Meta 还随附了可自动调优的 Helion GPU 内核，在 NVIDIA 和 AMD GPU 上带来 1.03–3.95 倍的内核级加速。

需要留意的是许可：权重采用 Muse Model License，商用条款有限，并非完全开放的协议。安全方面，Meta 称模型额外做了安全后训练，并按其超级智能扩展框架完成评估、达到发布门槛，完整评估报告稍后公布。从 Glimmer 到 Spark Open，Meta 正把"在自己桌上跑前沿模型"从口号变成可交付的产品。

[阅读原文](https://research.meta.ai/blog/muse-spark-open)
