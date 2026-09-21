---
title: '小米 MiMo V2.6 用一次混合强化学习统合智能体与安全能力'
excerpt: '小米把 MiMo V2.6 的权重和技术报告一起公开，Pro 版 1.02T 参数只激活 42B。它真正的卖点不是分数，而是把编程、通用智能体、视觉和安全放进同一次强化学习，并把训练曲线实时公开。'
date: "2026-09-22"
tags: ["Open-Source", "AI-Model", "Multimodal", "Long-Context"]
category: "AI 模型"
source: "Xiaomi MiMo"
---

小米发布了 MiMo V2.6。Pro 版是 1.02T 总参数、42B 激活的稀疏 MoE，Flash 版 309B / 15B，两者都支持 100 万 token 上下文和文本、图像、视频、音频输入，权重以 MIT 许可放在 HuggingFace 与 ModelScope，SGLang 与 vLLM 的部署配方同时给出。

技术主张里最值得看的是“只做一次强化学习”（You Only RL Once）。以往各家习惯按领域分别跑 RL，这次编程、通用智能体、视觉和网络安全任务被混进同一批数据，一步 1568 个 prompt × 16 条 rollout，用全异步 GRPO 训练。官方的说法是能力之间会互相强化，甚至能迁移到训练中没见过的执行框架。

奖励信号也被重新设计。二进制通过与否无法给“都通过”的轨迹排序，于是评分器在同一组 rollout 内部做比较：离线用对照轨迹合成任务专属评分标准，在线把优势值推向路径更短、消耗 token 更少的解，形成一个自我改进闭环。

分数上它已经很接近第一梯队：DeepSWE v1.1 拿到 71.9，与 Opus 5 的 74.0、GPT-5.6 Sol 的 73.0 同档；网络安全基准 CyberGym 94.0，AutomationBench 53.1 反超 Opus 5 的 50.3。短板也清楚，Terminal Bench 4.0 只有 34.9，长达数小时的终端任务依然吃力。

比分数更少见的是透明度。从 9 月 16 日起，小米把 RL 训练过程放在 mimo.xiaomi.com/rl 上实时直播，页面上只写了一句“Open is what we value”。训练数据和训练代码仍然没有开放，但把过程摆出来，已经比只公布 checkpoint 多走了一步。

开源权重这一层的竞争正在换维度：从“分数追平”转向“训练过程可见”，以及把智能体、安全、多模态能力塞进同一条训练管线。

[阅读原文](https://mimo.xiaomi.com/mimo-v2-6)
