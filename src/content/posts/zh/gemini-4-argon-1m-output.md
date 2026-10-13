---
title: 'Gemini 4 Argon 发布，输出窗口拉到 100 万 token'
excerpt: 'DeepMind 把输出长度推到 100 万 token，让模型一次跑完整个仓库的重构。它在 DeepSWE 和长上下文上领先，却在 Terminal-bench 上输给 Claude Opus 5.5。'
date: "2026-10-14"
tags: ["Gemini", "AI-Model", "Coding", "Multimodal"]
category: "AI 模型"
source: "Google DeepMind"
---

DeepMind 在 10 月 13 日放出 Gemini 4 Argon，卖点从对话转向长时程工程任务。最硬的一条是输出窗口 100 万 token，可以一口气吐出 10 万 token 级别的推理轨迹、整仓代码生成和跨文件重构，不用再拼接被截断的响应。

官方给的落地案例比分数更能说明意图。Chrome 团队要从 Chromium 4000 万行代码里，把约 600 万行的旧浏览器特性目录剥离出去，Argon 批量推进干净改动，把数月的工作压进数周。Google 开源的 Agent Development Kit 团队只丢给它一份技能规则和一个段落的目标——消掉框架开销且不破坏现有应用，它整夜自主跑完，把长会话的内存准备时间砍掉 40%，冷启动导入快 21%，改动已合进 google/adk-python。

性能侧的账也清楚。借助 Argon，团队在 A100 上通过 vLLM 把 Gemma 4 E2B 的吞吐从每秒约 3.79 万 token 提到 10.8 万以上，2.85 倍，token 完全对齐，改动进了上游仓库。迁移 700 多个训练实验环境省下 955 个工程小时，原来每年约 540 小时的清理压缩成一次 3 小时的更新。

分数有赢有输。DeepSWE v1.1 拿到 77.9%，GPT-6 Astra 是 74.1%；长上下文 GraphWalks 在 256k 到 1M 区间 84.2%，对手最高 71.8%；CWE-Bench 漏洞修复 68%，与 Astra 并列第一；Harvey 法律 agent 基准 19.6%，对手都在个位数。但 Terminal-bench 4.0 只有 57.4%，落后 Claude Opus 5.5 的 66.4%。

安全叙事也换了重点。DeepMind 称它是自家抵御间接提示注入最强的模型，会对思维链和动作做错位监控，必要时中断执行。同天发布的机器人版本用纯推理在 ERQA 上拿到 87%。模型即日起对 Google AI Pro 和 Ultra 订阅用户开放。

HN 上有人实测后说是明确的一代跨步，写作和结构化推理尤其明显；也有人吐槽点进“Try in Gemini”默认还是旧模型，想试 4 得先升级。

[阅读原文](https://deepmind.google/models/gemini/)
