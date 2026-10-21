---
title: 'Codex CLI 默认拉起一个自更新守护进程 官方没给关闭开关'
excerpt: '从 0.157.0 起，打开一次交互式 Codex 会话就会常驻一个后台 daemon，它复制一份 374 MB 的运行时、每小时自我更新，还能打断正在执行的任务。'
date: "2026-10-13"
tags: ["OpenAI", "Security", "Agent-Tooling", "AI-Agents", "Privacy"]
entities: ["OpenAI"]
category: "安全与隐私"
source: "OpenAI"
---

一份 GitHub issue（openai/codex#48195）指出，从 CLI 0.157.0 开始，只要打开一次交互式 `codex` 会话，就会自动拉起 `codex app-server --managed-daemon`。这个进程没有 TTY，Codex 窗口全部关掉之后依然活着，被 PID 1 接管，直到手动 stop 或者重启机器。

它顺手做三件事。把整个平台包拷进 `~/.codex/packages/app-server-daemon/releases/<版本>/`，约 374 MB，含 codex、code-mode host 和自带的 bwrap、zsh、rg，然后从这份副本运行——后端版本就此和你用 npm 装的 CLI 脱钩。启动一个独立的 `pid-update-loop`，开机 5 分钟后查一次更新，之后每小时一次，下载新版本并重启后端，重启可能杀掉正在进行的回合。最后把第一个会话的环境钉死：有开发者用包装脚本给每次调用单独设 `HTTPS_PROXY`，daemon 只认最早那一份，后续会话的代理配置形同虚设。

官方的文档里没有关闭方式。社区自己摸出来的路径是改 `~/.codex/config.toml` 的 feature flag，再手动 pkill 更新循环，最后删掉 `~/.codex/packages/app-server-daemon`——`daemon stop` 并不会停掉 updater，发帖人实测 70 秒后它还在跑。

HN 上的反馈更直接。有人说旧版本堆到 12 GB，有人碰到自动更新改坏文件权限、`.git` 变只读，任务每隔几小时就卡死一次。也有人觉得这没什么：浏览器早就在后台自我更新，工具链跟上很正常。

争议点不在自动更新，而在默认值和知情同意。后台常驻进程意味着它能在你不知情时替换运行时、切换版本、继承凭据和代理。给命令行工具装一个不随窗口退出的后端，等于把用户机器的控制面交出去一部分。对每天都跑 agent 的开发者来说，这已经不是编辑器偏好问题，而是执行环境的边界问题。

[阅读原文](https://github.com/openai/codex/issues/48195)
