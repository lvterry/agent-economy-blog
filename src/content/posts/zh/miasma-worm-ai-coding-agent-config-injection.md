---
title: "Miasma 蠕虫利用 AI 编程智能体配置文件发起供应链攻击"
excerpt: "安全研究机构 SafeDep 披露 Miasma 蠕虫通过 GitHub 仓库中的配置文件，在 Claude Code、Cursor 和 Gemini CLI 启动时自动执行恶意代码，已感染 121 个仓库。"
date: "2026-06-08"
tags: ["Security", "AI-Agents", "Coding", "Supply-Chain"]
category: "安全与隐私"
source: "SafeDep"
---

安全研究机构 SafeDep 披露了一种名为 Miasma 的新型供应链攻击方式。攻击者将恶意代码隐藏在仓库中的工具配置文件里——包括 `.claude/settings.json`、`.cursor/rules/*.mdc`、`.gemini/settings.json` 以及 `.vscode/tasks.json`——当开发者克隆仓库并用 VS Code 打开文件夹或启动 AI 编程智能体时，这些配置会自动执行嵌入的 shell 命令，加载一个 4.3MB 的凭证窃取器，扫描 AWS、Azure、GCP、Kubernetes 和 GitHub 密钥并外传。

该蠕虫利用了行业的一个盲点：开发者通常不会审查 `.claude/`、`.cursor/` 或 `.vscode/` 等目录中的配置文件，而这些文件在现代开发工具中拥有执行原语的权限。Claude Code 的 `SessionStart` 钩子在信任一次后便静默运行；Cursor 的项目规则相当于提交到仓库中的提示注入；VS Code 的 `tasks.json` 可在文件夹打开时自动触发。Composer（PHP）和 Bundler（Ruby）的生命周期钩子甚至没有任何信任提示。

涉及 121 个仓库的 Miasma 攻击表明，随着 AI 编程智能体的普及，工具配置文件的攻击面正在急剧扩大。一个仓库中的 `.cursor/rules/*.mdc` 文件，本质上就是一个让 AI 智能体执行任意代码的提示注入载体。SafeDep 建议将编辑器与包管理器的配置文件视为可信计算基的一部分，在克隆陌生仓库时先 grep 检查自动执行行为，再进行打开操作。

[阅读原文](https://safedep.io/config-files-that-run-code/)
