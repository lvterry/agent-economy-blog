---
title: "OpenAI 把 Codex 智能体的完整运行时开放成了 API"
excerpt: "OpenAI 推出 Agents API，把会话、编排、上下文压缩、故障恢复和沙箱交给托管的 Codex harness，开发者可以通过 API 构建可持续运行并调用工具的云端智能体。"
date: "2026-09-11"
tags: ["OpenAI", "AI-Agents", "Agent-Tooling", "MCP", "Durable-Execution"]
category: "AI 智能体"
source: "OpenAI"
---

OpenAI 上线 Agents API，让应用通过一个托管 API 使用 Codex 的完整智能体运行时。开发者定义模型、指令、工具和 MCP 服务器，并选择执行环境；OpenAI 负责会话、编排、上下文压缩与故障恢复。这里的基本单位不再只是一次模型请求，而是一个可以接收后续任务、保留状态并从中断处继续的 Session。

托管运行时能够在沙箱中执行命令、修改文件和生成产物，也能加载 Skills、连接外部工具或 MCP、在运行中接受用户转向，并把任务拆给多个子智能体。应用可以流式接收事件，也可以通过 webhook 等待完成或需要输入的通知。环境既可由 OpenAI 提供，也可连接开发者自己的沙箱；官方示例包括事故响应、Slack 助手、只读数据分析、GitHub 问题调查和文档审查。

这项 API 的意义在于，智能体平台竞争开始从“提供更强模型”推进到“提供可租用的完整工作进程”。过去团队需要自己拼接任务队列、会话持久化、上下文整理、工具路由和失败恢复，如今这些被收进统一接口。模型用量、OpenAI 工具和托管容器分别计费，也意味着产品成本将由 token、工具调用和运行环境共同决定，而不再只有单次推理价格。

它目前仍通过 beta 接口调用，也有重要的数据边界。Agents API 会保存会话状态，用户可以删除会话和已发布产物；但官方文档称现阶段只支持美国数据驻留，而且不支持零数据保留，即使选择自托管沙箱也不会获得 ZDR 资格。对企业智能体而言，自托管执行环境并不等于会话编排层也留在本地，采购时需要把代码、工具结果和长期上下文的数据流分别审查。

阅读完整文章：[https://developers.openai.com/api/docs/guides/agents-api/overview](https://developers.openai.com/api/docs/guides/agents-api/overview)
