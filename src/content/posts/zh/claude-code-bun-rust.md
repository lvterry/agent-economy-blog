---
title: Claude Code 改用 Rust 版 Bun 运行时
excerpt: Simon Willison 发现 Anthropic 的 AI 编程助手 Claude Code 已内置 Rust 重写的 Bun v1.4.0 运行时，二进制文件中包含 563 个 .rs 源文件，标志着 AI 智能体工具基础设施的系统级优化。
date: "2026-07-20"
tags: ["Claude-Code", "Anthropic", "Agent-Tooling", "AI-Infrastructure"]
category: "AI 智能体"
source: "Simon Willison"
---

Claude Code 是 Anthropic 推出的终端 AI 编程助手。Simon Willison 通过分析其二进制文件发现，Claude Code 已经内置了 Rust 重写版的 Bun 运行时（版本号 v1.4.0，尚未公开发布）。在 binary 中搜索 `.rs` 文件名，返回了 563 条结果，证实了 Bun 团队「Rust 版 Bun 已在数百万设备上运行」的说法。

这一变化的意义在于：Bun 从 Zig 重写为 Rust 后，对 Claude Code 这样的关键下游用户来说是零感知升级——用户无需安装 Bun，甚至无需知道它的存在。Anthropic 选择将运行时直接打包进 Claude Code 二进制，意味着 AI 智能体工具正在向「自包含、零依赖」的方向发展，这对部署可靠性和性能一致性都有实际益处。

对于关注 AI 智能体工具链的读者来说，这是一个值得追踪的信号：当主流 AI 编程助手的底层运行时开始进行系统级优化，行业的竞争已从「模型能力」延伸到「基础设施质量」。

[阅读原文](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/)
