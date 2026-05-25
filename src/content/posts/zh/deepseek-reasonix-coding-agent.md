---
title: "Reasonix 为 DeepSeek 打造缓存优先的编程智能体"
excerpt: "一款围绕 DeepSeek 前缀缓存机制设计的开源终端智能体，在长会话中实现了 94% 的缓存命中率，将输入令牌成本降至常规用量的约五分之一。"
date: "2026-05-25"
tags: ["Agent", "AI-Agents", "MCP"]
category: "AI 智能体"
source: "Reasonix"
---

一款名为 Reasonix 的新型开源编程智能体正在 Hacker News 上引发关注。它的策略与主流做法截然不同：不是构建一个兼容任意模型的通用智能体，而是专门为 DeepSeek 单一后端深度优化，将其整个架构围绕该模型的缓存机制展开。

核心逻辑很直接。DeepSeek API 使用字节稳定前缀缓存（byte-stable prefix cache）——它从第 0 字节开始对提示词进行指纹识别，跨请求缓存前缀部分。大多数编程智能体（如 Aider、Cline、Continue）会不断修改对话历史以管理上下文，这恰恰破坏了缓存前缀。Reasonix 反其道而行之：采用仅追加的（append-only）消息循环，历史记录从不重排或压缩。结果是长会话中达到 94% 的缓存命中率，输入令牌价格从 $0.07/Mtok 降至 $0.014/Mtok，约为未缓存价格的五分之一。

除了缓存创新，Reasonix 还提供了相当成熟的完整功能集。它原生支持 MCP（Model Context Protocol），通过 stdio、SSE 和 Streamable HTTP 三种传输协议，通过 `--mcp` 参数即可接入外部工具服务器并统一注册。它还包含可组合的技能系统（基于 Markdown 前言的剧本）、`/plan` 审计门控（写入前只读审核）、限定在项目目录内的沙箱工具执行，以及完整的会话回放与成本分析功能。

定价层面的吸引力足以改变用户行为。以 $0.014/Mtok 缓存价计算，一个在通用工具上需要 $2-3 的重度编程会话，在 Reasonix 上可能只需 $0.40-0.60。对于规模化使用智能体工具的团队来说，这一差距会快速累积。

[阅读原文](https://esengine.github.io/DeepSeek-Reasonix/)
