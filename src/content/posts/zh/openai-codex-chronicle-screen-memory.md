---
title: 'OpenAI Codex 推出 Chronicle 屏幕上下文记忆功能'
excerpt: 'OpenAI 为 Codex 发布 Chronicle 研究预览，通过屏幕捕捉自动构建工作记忆，减少重复描述上下文的负担，同时带来隐私与注入攻击的新挑战。'
date: "2026-04-26"
tags: ["Agent", "Coding", "Security", "Privacy", "OpenAI", "Codex"]
source: "OpenAI"
---

OpenAI 在其开发者文档中正式披露了 Chronicle——一个面向 Codex 的屏幕上下文记忆功能。目前处于 opt-in 研究预览阶段，仅对 ChatGPT Pro 订阅用户开放，且限定 macOS 平台。

Chronicle 的核心思路很直接：让 Codex 在你工作时"看到"你的屏幕，从中提取上下文并构建记忆。当你之后与 Codex 交互时，它不再需要你从头解释你在做什么、用什么工具、打开哪些文件。

这不是简单的屏幕录制。Chronicle 在后台运行沙箱 agent，定期捕获屏幕画面，提取 OCR 文本和时间信息，然后将这些片段总结为结构化的 Markdown 记忆文件，存储在 `~/.codex/memories_extensions/chronicle/` 下。原始屏幕截图只会保存不到 6 小时即被删除。

OpenAI 展示了三个典型场景：Codex 能理解你当前正在看什么界面，自动补全你遗漏的上下文信息，以及记住你惯用的工具和工作流。当需要具体文件、Slack 线程或 Pull Request 时，Chronicle 会识别出正确来源并直接使用，而不是只依赖模糊的屏幕记忆。

但这带来的代价也不小。

首先是隐私问题。Chronicle 需要 macOS 的屏幕录制和辅助功能权限。截屏内容会包含屏幕上可见的任何敏感信息。OpenAI 强调截屏仅暂存在本地设备，处理后不会保存在服务器上（除非法律要求），且不会用于训练。生成的记忆文件也是不加密的 Markdown，任何能访问你电脑的程序都能读取。

其次是 prompt 注入风险。如果屏幕上出现恶意网页或文档，其中隐藏的 agent 指令可能被 Codex 执行。OpenAI 对此毫不掩饰，建议用户在开会或查看敏感内容时主动暂停 Chronicle。

还有一个实际痛点：Chronicle 的后台 agent 会快速消耗 Codex 的速率配额。

Chronicle 是 AI 编码助手向"上下文感知"迈出的激进一步。它本质上在试图解决一个真实问题——人类与 AI agent 协作时最大的摩擦并非模型不够聪明，而是每轮对话都要重新描述一遍上下文。但屏幕捕获这种"看见一切"的解决方案，也把隐私和安全边界推到了前所未有的位置。

值得关注的是，OpenAI 选择先在自己的 Codex 上实验这个方向，而非在 ChatGPT 的消费端产品中推出。这说明屏幕记忆目前更适配专业开发者的工作场景，而非普通用户的日常使用——至少在技术成熟度和风险控制达到平衡之前。

[阅读原文](https://developers.openai.com/codex/memories/chronicle)
