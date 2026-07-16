---
title: 'xAI 开源 Grok Build：一个全功能的终端 AI 编程智能体'
excerpt: 'xAI 在 GitHub 上开源了 Grok Build（即 grok CLI），一个基于 Rust 构建的全功能终端 AI 编程智能体，支持 TUI 交互、MCP 服务扩展、沙箱执行和无需人工的 headless 模式。'
date: "2026-07-16"
tags: ["Agent-Tooling", "AI-Coding", "Open-Source"]
category: "AI 智能体"
source: "xAI"
---

xAI 今日在 GitHub 开源了 Grok Build（简称 `grok`），一个基于 Rust 构建的全功能终端 AI 编程智能体。该项目包含完整的 CLI/TUI 界面和智能体运行时，支持交互式、headless 脚本和 ACP（Agent Client Protocol）嵌入三种运行模式。

Grok Build 的核心能力包括：理解代码库、编辑文件、执行 Shell 命令、搜索网络，以及管理长时间运行的后台任务。它内置了 MCP（Model Context Protocol）服务扩展框架、技能/插件系统和沙箱执行环境，架构设计颇具前瞻性，直接对标 Cursor 和 Claude Code 等主流编程智能体。

项目仓库清晰展示了模块化设计：TUI 层、智能体运行时、工具实现集（终端、文件编辑、搜索等）、工作区管理（文件系统、版本控制、执行沙箱）各有独立 crate。这种架构使其既是 xAI 的官方 CLI 工具，也可作为第三方构建智能体应用的参考实现。

值得注意的是，xAI 明确表示该仓库会从内部 monorepo 定期同步，意味着它将持续演进。对于关注 AI 智能体工具链发展的开发者而言，Grok Build 的开源提供了一个难得的"生产级 AI 编程智能体"参考实现。

[阅读原文](https://github.com/xai-org/grok-build)
