---
title: 'Google 发布 Gemini 3.8 Flash，并推出网络安全专用 Flash Cyber'
excerpt: '六周内第三次迭代，3.8 Flash 以 3.7 的价位逼近旗舰模型的长程编程表现，Cyber 版则将自动漏洞发现与修复带到前沿水平，仅向可信防御方开放。'
date: "2026-09-03"
tags: ["Gemini", "Security", "Agentic AI"]
category: "AI 模型"
source: "Google"
---

Google 发布 Gemini 3.8 Flash 与 3.8 Flash Cyber，这是六周内 Flash 系列的第三次更新。3.8 Flash 保持 3.7 的定价（每百万输入 tokens 0.75 美元、输出 3.75 美元），推理与编程能力却明显上探：在长程软件工程基准 DeepSWE v1.1 上超越多数更大的旗舰模型，HLE-Verified 得分 54.9%，并在金融与法律智能体基准（Vals Finance Agent V2、Harvey Legal）上领先。官方解释是模型“更勤奋”——复杂任务上会多走推理步骤、迭代调用工具，开发者可用 effort 档位控制 token 开销。

更值得关注的是 Flash Cyber。它专为防御方设计，优先修漏洞而非利用漏洞：CWE-Bench 自动修补 pass@1 达 47.2%，逼近顶尖模型；Chrome 安全团队称其产出的正确补丁是体积大得多的商用模型的 2.6 倍。该模型仅通过 Fairwind 计划向政府、关键基础设施运营者与软件维护者开放，并在发布前已用于修复 Google 自身代码。

六周一次的 Flash 迭代说明 Google 正在把“蒸馏旗舰、低价高频”变成稳定的市场节奏。对智能体开发者而言，这类模型在可验证、可重试的任务上已能替代昂贵旗舰——agent 的单位成本曲线正被快速拉低。

[阅读原文](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
