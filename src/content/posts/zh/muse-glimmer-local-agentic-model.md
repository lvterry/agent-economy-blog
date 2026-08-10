---
title: 'Meta 开源 Muse Glimmer，一个能跑在消费级 GPU 上的智能体模型'
excerpt: 'Meta 开源 30B 参数智能体模型 Muse Glimmer，一张消费级 GPU 即可运行，专为常驻本地的智能体工作流设计。'
date: "2026-08-11"
tags: ["Meta", "AI-Model", "AI-Agents", "Open-Source"]
category: "AI 智能体"
source: "Meta"
---

Meta 超级智能实验室正式开源 Muse Glimmer，一个 30B 参数的智能体模型，采用 Apache 2.0 许可，专为"常驻本地"的智能体工作流设计。量化后权重压缩到 20GB 以内，一张 24-32GB 的消费级 GPU 即可运行，配合投机解码保证响应速度，覆盖本地智能体、函数调用、本地编程和 LLM 裁判等场景。

这是 Meta 继四月发布 Muse Spark 之后在个人 AI 方向的关键一步：Glimmer 通过蒸馏继承更大规模教师模型的智能体推理能力，训练侧重长程任务执行、可靠工具调用、失败恢复与多模态输入，在 SWE-Bench、MCP-Atlas 等智能体基准上对标 Gemma4-31B 与 Qwen3.6-27B。llama.cpp、MLX、ExecuTorch 的优化集成将在未来几天落地。

值得关注的信号：当 API 商业模式可靠性存疑时，行业正回到"桌子底下的服务器"时代。Meta 同期预告开源 Muse Spark 1.2 权重，持续加注开放权重路线，让本地智能体从极客玩具走向可规模化的产品形态。

[阅读原文](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)