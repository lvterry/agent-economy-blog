---
title: 'Claude Code 源代码泄露：社区深度分析汇总'
excerpt: 'npm source map 导致 51.2 万行代码泄露，揭示虚假工具、沮丧检测正则、BUDDY 虚拟伙伴、KAIROS/ULTRAPLAN 模式等内部功能。'
date: "2026-04-01"
tags: ["AI-Agents", "Security", "Claude", "Developer-Tools"]
source: "Community / nblintao"
---

2026年3月31日，安全研究员 Chaofan Shou 发现 Anthropic 在 Claude Code 的 npm 包中意外包含了一个 source map 文件，导致约 1,900 个文件、51.2 万行 TypeScript 源代码被完全暴露。

## 泄露内容亮点

- **虚假工具 (Fake Tools)** — 用于特定场景的内部工具
- **沮丧检测正则** — 用正则表达式而非模型检测用户情绪
- **卧底模式 (Undercover Mode)** — 内部开发模式
- **BUDDY 系统** — 即将发布的 Tamagotchi 风格虚拟伙伴（愚人节彩蛋）
- **KAIROS 模式** — "始终在线"的主动式助手
- **ULTRAPLAN 模式** — 30分钟远程编排模式
- **模型代号** — Tengu、Fennec、Capybara 等内部模型变体

## 技术架构洞察

- 基于 Bun + React + Ink 的终端 UI
- Zod v4 用于类型安全
- 三层上下文压缩管道（MicroCompact → AutoCompact → Full Compact）
- AutoDream 四阶段记忆整合流程
- 自定义 Bun 运行时和 Zig 编译的 token 生成

## 根本原因

可能是 Bun 构建工具的一个 bug 导致 source map 文件被包含在发布的 npm 包中。

社区分析汇总：[https://github.com/nblintao/awesome-claude-code-postleak-insights](https://github.com/nblintao/awesome-claude-code-postleak-insights)
