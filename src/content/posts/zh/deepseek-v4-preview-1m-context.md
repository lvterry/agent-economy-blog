---
title: 'DeepSeek V4 预览版把百万上下文带入开源模型竞争'
excerpt: 'DeepSeek 发布并开源 V4 预览版，提供 Pro 与 Flash 两个模型，并把 1M 上下文作为官方服务标配。这不仅是一次模型升级，也是在用成本和长上下文能力重新定义开源模型的 agent 场景。'
date: "2026-04-24"
tags: ["DeepSeek", "AI-Model", "Agentic AI", "Coding", "Long-Context"]
category: "AI 智能体"
source: "DeepSeek"
---

DeepSeek 发布 V4 预览版，并同步开放权重。相比单纯追求更高分数，这次发布更值得关注的是两个方向：百万上下文成为默认能力，以及模型开始围绕 agent 工作流做系统优化。

DeepSeek-V4-Pro 是主力模型，官方披露为 1.6T 总参数、49B 激活参数。DeepSeek 称它在 Agentic Coding、世界知识、数学、STEM 和代码评测中达到当前开源模型领先水平，并在部分指标上接近顶级闭源模型。更有意思的是，DeepSeek 明确提到 V4 已经成为公司内部员工使用的 agentic coding 模型，这说明它不只是 demo 型发布，而是在真实工程流程里接受检验。

DeepSeek-V4-Flash 则是更偏产品化和成本效率的版本，284B 总参数、13B 激活参数。它在简单 agent 任务上接近 V4-Pro，但在复杂任务上仍有差距。这个分层很重要，因为 agent 产品最终不是只看最强模型，而是要在响应速度、上下文长度、推理质量和 API 成本之间找到可规模化的组合。

这次最关键的基础设施信号，是 DeepSeek 把 1M 上下文作为官方服务标配。其背后是 token 维度压缩与 DSA 稀疏注意力机制，目标是在长上下文场景下降低计算和显存成本。对 agent 来说，长上下文不是简单的“塞更多资料”，而是让模型能处理更长项目历史、更完整代码库、更复杂文档和更持续的任务状态。

DeepSeek 还强调 V4 针对 Claude Code、OpenClaw、OpenCode、CodeBuddy 等主流 agent 产品做了适配优化。这透露出一个趋势：模型厂商开始把 agent 框架当成核心分发入口，而不是只服务聊天产品。未来模型能力的评估，也会越来越多发生在真实工具链里，而不是孤立的问答界面中。

API 已经同步上线，base_url 不变，模型名切换为 `deepseek-v4-pro` 或 `deepseek-v4-flash` 即可调用。两个模型都支持 OpenAI ChatCompletions 与 Anthropic API，并支持非思考和思考模式。旧模型名 `deepseek-chat` 与 `deepseek-reasoner` 将在 2026 年 7 月 24 日停止使用，目前分别路由到 V4-Flash 的非思考和思考模式。

如果 V4 的实际体验能接近官方描述，它会让开源模型在 agent 应用里的竞争位置进一步前移。闭源模型仍可能在最复杂推理上保持领先，但当长上下文、开放权重和较低成本同时出现时，很多企业和开发者会重新计算“默认模型”的选择。

[阅读原文](https://api-docs.deepseek.com/news/news260424)
