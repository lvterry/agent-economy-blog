---
title: "NVIDIA 发布 SkillSpector 智能体技能安全扫描器"
excerpt: "NVIDIA 开源了 SkillSpector，一个专门扫描 AI 智能体技能（skills）安全性的工具，可检测 64 种漏洞模式，涵盖提示注入、数据泄露、权限提升和供应链攻击等 16 个类别。"
date: "2026-06-13"
tags: ["Agent", "Security", "NVIDIA", "AI-Safety"]
category: "安全与隐私"
source: "NVIDIA"
---

NVIDIA 开源了 SkillSpector，一个面向 AI 智能体技能安全性的静态分析工具。它能扫描 Claude Code、Codex CLI、Gemini CLI 等平台使用的技能文件，检测 64 种漏洞模式，涵盖提示注入、数据泄露、权限提升、供应链攻击、过度权限（excessive agency）和 MCP 最低权限检查等 16 个类别。

研究数据显示，26.1% 的智能体技能存在安全漏洞，5.2% 有恶意意图。SkillSpector 采用两级分析：快速静态扫描 + 可选的 LLM 语义评估，输出格式支持终端、JSON、Markdown 和 SARIF（便于 CI/CD 集成）。它还通过 OSV.dev 实时查询已知 CVE 数据，并内置离线回退。

智能体技能的安全问题正在从边缘话题走向行业焦点。此前社区主要依赖手动审查和信任传播，NVIDIA 的入局意味着这一领域正在标准化。对于运行大量第三方技能的团队来说，SkillSpector 提供了一条可自动化的安全检查基线。

[阅读原文](https://github.com/NVIDIA/SkillSpector)
