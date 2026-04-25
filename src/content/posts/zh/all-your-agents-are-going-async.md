---
title: 'AI Agents 全面走向异步化 传输层面临重构'
excerpt: 'AI agents 正从同步对话模式转向异步后台运行，这种转变打破了传统的 HTTP 传输层设计，需要新的 durable transport 和 durable state 解决方案。'
date: "2026-04-22"
tags: ["AI-Agents", "Async", "Transport", "Ably", "Architecture"]
source: "zknill.io"
---

过去，与 AI agent 交互意味着打开一个聊天窗口，输入提示词，等待 token 流式返回。这是 ChatGPT、Claude.ai 和 Claude Code 的工作方式，也是几乎所有 AI SDK 的演示模式。

但现在，agents 正在变得异步化。它们获得了 cron 定时任务、webhook 支持、WhatsApp 集成、手机远程控制、预定任务和工作流。agent 不再是需要人类坐在终端前监督的同步对话工具，而是在后台持续运行的自主系统。

**核心挑战**：传统 HTTP 请求-响应模型无法支撑这种异步架构：

- agent 可能比调用者存活更久（cron 触发，长时间运行，结果无处推送）
- agent 需要主动推送（工作完成后的通知、人工审批步骤）
- 调用者可能切换（从电脑开始，在手机上继续）
- 多用户场景（团队共享同一个 agent session）

**行业应对**：Anthropic 推出 Channels、/loop、/schedule、Routines 和 Remote Control；ChatGPT 上线定时任务；Cursor 推出后台 agent；Cloudflare 推出 Agents 平台和 Email for Agents。但它们主要解决的是 durable state，而非 durable transport——仍然依赖 HTTP GET 或轮询。

Ably 正在构建基于实时消息平台的 durable transport，将 session 作为一等公民，让人类和 agent 可以随时连接、断开，无需关心连接状态。这可能是 async agent 架构的完整解决方案。

[阅读原文](https://zknill.io/posts/all-your-agents-are-going-async/)
