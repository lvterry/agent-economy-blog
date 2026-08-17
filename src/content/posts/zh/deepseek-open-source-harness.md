---
title: 'DeepSeek 开源智能体 Harness 一切能力皆插件'
excerpt: 'DeepSeek 发布 Harness 智能体框架开发者预览版，源码以 MIT 许可证公开，模型、工具、会话、UI 等一切能力皆可插拔替换，并强制记录模型可见的全部轨迹。'
date: "2026-08-14"
tags: ["Agent", "AI-Agents", "Agent-Tooling"]
category: "AI 智能体"
source: "DeepSeek"
---

深度求索今日发布 DeepSeek Harness 开发者预览版，源码以 MIT 许可证公开。这个智能体框架的核心主张是「一切皆插件」：模型、工具、技能、会话、沙箱、存储、循环、调度乃至 UI，所有能力均可独立替换或重组，底层由 Cordis 插件内核统一管理装载、卸载与依赖。

与多数框架不同，Harness 有两处设计值得注意。其一是强制可追溯：模型看到的一切——系统提示、推理过程、工具调用与结果、子智能体调度——都写入追加式会话日志，Trajectory 视图可按来源回放、续跑与分叉。有 HN 用户直言这是美国模型厂商不会开放的能力。其二是插件热卸载：Cordis 在运行时卸载插件时会回滚其产生的全部副作用，允许会话中途清理不再需要的中间插件。

此前我们梳理 Lilian Weng 的 Harness 工程长文时指出，围绕模型的外围系统正成为新的竞争层。DeepSeek 以开源方式入场，与 OpenAI、Anthropic 的闭源智能体产品形成路线对照；而插件生态的治理与兼容性，将决定这套框架能否真正跑赢这场「Harness 之战」。

[阅读原文](https://deepseek.com/harness/en/)