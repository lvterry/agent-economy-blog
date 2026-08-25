---
title: 'OpenAI 自研芯片 Jalapeño 经独立实测能效超越 Blackwell'
excerpt: 'SemiAnalysis 受邀进入 OpenAI 实验室实测 Jalapeño，称其在能效比上击败所有已测英伟达、AMD 与 Google 芯片，通用推理芯片路线获得验证。'
date: "2026-08-26"
tags: ["OpenAI", "Hardware", "AI-Infrastructure", "Broadcom", "GPU"]
category: "AI Infra"
source: "SemiAnalysis"
---

OpenAI 在 Hot Chips 上正式公开自研推理芯片 Jalapeño 的架构细节，SemiAnalysis 受邀进入实验室实测后给出惊人结论：在能效比（每兆瓦吞吐）上，Jalapeño 击败了所有他们测过的英伟达、AMD 与 Google 芯片。

六月我们报道过这款与 Broadcom 合作、为 LLM 推理从零设计的芯片，新信息显示其从建队到流片仅约 16 个月。实测中，并发为 1 的低延迟场景下 DeepSeek R1 可达每秒 700+ token，Kimi-K2.5 与 GPT-OSS 约 1400 token，且全程无需投机解码或 prefill-decode 分离——而对比图表上的对手都带着这些优化。更关键的是，这是一颗通用推理芯片而非 OpenAI 专属：官方甚至用它跑通了 Doom，移植代码由 Codex 生成。

保留意见同样明显：跑分数据由 OpenAI 提供，SemiAnalysis 只现场验证了部分基准；真正的对标应是刚出货的 Vera Rubin，而 Jalapeño 仍处于工程样品阶段。

对智能体经济而言，推理成本直接决定 agent 规模化后的毛利。Jalapeño 若如期部署，将显著压缩每 token 成本，并给英伟达在推理市场的定价带来真实压力——这正是「从芯片层改变 AI 成本结构」的具象化。

[阅读原文](https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia)
