---
title: 'Reflection 发布 501B 开放权重模型 Beam 用推理效率切入智能体市场'
excerpt: 'Reflection 发布首个开放权重模型 Beam，501B 稀疏 MoE、每 token 仅激活 23B，官方称达到 GLM 5.2 相近水平只需三分之一到四分之一的推理算力，把开放权重竞赛的焦点从跑分推向单位 token 的经济性。'
date: "2026-10-06"
tags: ["Open-Source", "AI-Model", "Reasoning", "Agentic AI"]
category: "AI 模型"
source: "Reflection"
---

Reflection 发布了首个开放权重模型 Beam。这是一个稀疏混合专家模型，总参数 501B、每 token 激活 23B，预训练语料 23.8 万亿 token，场景明确指向编程、推理与智能体任务。

真正下注的是强化学习规模。官方称动用 10500 张 NVIDIA GB300 训练四周，生成超过 1 亿条 rollout，上下文上限 256K，训练与评分使用约 13 亿个沙箱、约 100 万个编程与 STEM 环境，并称这是迄今开放实验室中规模最大的 RL 训练之一。为处理长时 rollout 带来的策略陈旧问题，训练改为完全异步的策略梯度，即使样本落后当前策略一天、107 个权重版本，数值依然稳定，官方的说法是能力随 RL 算力增长仍未看到平台期。

能力上 Beam 没有追求绝对第一。SWE Bench Pro v2-Hard 得 77.2，Terminal Bench 2.1 得 80.1，优于同为开放权重的 Inkling，但在部分推理项目上仍落后 Kimi K3 等模型。它主打效率，官方称达到 GLM 5.2 相近水平只需三分之一到四分之一的推理算力，并把控制推理长度的参数交给用户。

对智能体经济而言这才是关键。跑分领先的边际价值在下降，单位 token 能买到多少可靠的行动力，才是成本结构的核心。权重与技术报告预计本月内释出，红队评估仍在进行。

[阅读原文](https://reflection.ai/blog/introducing-beam)
