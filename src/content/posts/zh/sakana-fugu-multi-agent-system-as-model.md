---
title: 'Sakana Fugu 发布：将多智能体编排封装为一个模型 API'
excerpt: '日本 AI 实验室 Sakana AI 推出 Fugu，将多模型动态编排与角色分配内化为一个 API，基于 ICLR 2026 论文 TRINITY 和 Conductor，实现从"手动编排"到"学习编排"的转变。'
date: "2026-06-22"
tags: ["AI-Agents", "Agent", "Agentic AI", "AI-Infrastructure"]
category: "AI 智能体"
source: "Sakana AI"
---

Sakana AI 正式发布 Fugu，一个将多智能体系统封装为单一 API 的产品。与传统的"人工定义模型协作流程"不同，Fugu 通过学习动态组合和协调多种模型——系统自动为每个任务分配 Thinker（思考者）、Worker（执行者）、Verifier（验证者）角色，而非依赖人工预设的工作流。

Fugu 基于 Sakana 在 ICLR 2026 发表的两篇论文：TRINITY（进化型 LLM 协调器）和 Conductor（用强化学习发现自然语言协作策略）。产品提供 Fugu（均衡性能与延迟）和 Fugu Ultra 两个级别，兼容 OpenAI API 协议。用户还可按隐私与合规需求，屏蔽特定模型或供应商参与任务池。目前 Fugu 尚未在欧盟及 EEA 区域上线，正在推进 GDPR 合规。

Sakana AI 总部位于东京，此前以进化型 AI 方法闻名。Fugu 的思路——把"如何编排多个模型"这一工程难题变成模型自我学习的能力——对智能体基础设施的演进方向是一个重要提示。

[阅读原文](https://sakana.ai/fugu/)
