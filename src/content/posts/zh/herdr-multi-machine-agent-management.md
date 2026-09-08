---
title: 'Herdr 让一块终端同时管理多台电脑上的智能体'
excerpt: 'Herdr 0.9 可以通过 SSH 把本地电脑、服务器和 Mac mini 上的工作区与智能体汇入同一个终端界面，让执行留在远端持续运行；跨机器协作与无感连接仍在后续路线图中。'
date: "2026-09-09"
tags: ["Agent-Tooling", "AI-Agents", "Coding", "Durable-Execution"]
category: "AI 智能体"
source: "Herdr"
---

Herdr 0.9 新增多机器支持，让一个终端界面同时管理本地和远端电脑上的工作区、标签页与智能体。用户运行 `herdr machine add workbox` 并提供 SSH 目标后，远端会话就会和本地会话出现在同一套 TUI 中；切换机器不再需要另开客户端，断开连接后，智能体仍留在原机器继续工作。Herdr 称目前已有超过 70 万次下载和接近 1000 个插件。

为此，Herdr 调整了自身架构。此前一个客户端只能连接一个服务器，整个界面也由服务器渲染；0.9 将外层 UI 移到客户端，各服务器继续掌管自己的终端与智能体会话，再把视图提供给客户端统一组合。远端机器目前需要能通过 SSH 访问，可以位于局域网、公网或 Tailscale 网络中。

这一版本仍有明确边界：TUI 能看见多台机器，智能体 CLI 却仍只能在单个服务器内工作，暂时无法发现另一台机器上的智能体或与之协作。Herdr 计划随后补上跨机器协作，并通过 Herdr Cloud 简化网络连接；Cloud 只充当端到端加密的连接层，计算和智能体仍运行在用户自己的设备上。更远的设想还包括把运行中的智能体会话迁移到另一台机器。

它反映出编码智能体工作流正在形成新的控制面：随身电脑逐渐成为客户端，耗时任务被放到常开的 VPS、工作站或 Mac mini 上执行。多机管理解决了“任务在哪里运行、如何找回来”的问题，但身份认证、权限审批、跨项目路由和会话迁移仍决定这类工具能否从远程终端成长为真正的智能体调度系统。Hacker News 讨论中，开发者也把远程认证视为尚未完全解决的难点，并将 Herdr 与 Orca、Cyrus 等不同层级的控制工具进行比较。

阅读完整文章：[https://herdr.dev/blog/connecting-the-machines/](https://herdr.dev/blog/connecting-the-machines/)

Hacker News 讨论：[https://news.ycombinator.com/item?id=49612818](https://news.ycombinator.com/item?id=49612818)
