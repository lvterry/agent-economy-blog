---
title: 'Coasts：为 Git Worktree 提供本地服务隔离与编排'
excerpt: 'CLI 工具 + 本地 UI，在单台机器运行多个隔离开发环境。支持 Docker Compose，AI 工具无关，离线优先。'
date: "2026-03-31"
tags: ["AI-Development", "Developer-Tools", "Git", "Docker"]
source: "Coast Guard"
---

Coasts（Containerized Hosts）是一个 CLI 工具，附带本地可观测性 UI，用于在单台机器上运行多个隔离的完整开发环境实例。它与现有设置无缝集成：无需修改应用代码，只需在仓库根目录添加一个 Coastfile。

## 核心特性

- **一次构建，多实例运行**：支持任意数量的实例，可配置不同的卷和网络拓扑
- **Git Worktree 原生支持**：一次检出一个 coast 绑定到主机的标准端口，使用动态端口查看任意 worktree 的进度
- **Docker Compose 兼容**：可直接从现有的 docker-compose.yml 启动
- **AI 工具无关**：不绑定特定 AI 提供商或 Agent 框架，支持 Claude Code、Codex、Cursor 等
- **离线优先**：无托管服务依赖，无供应商锁定风险

## 使用场景

特别适合 AI 辅助开发场景：

- 同时运行多个 Agent 工作区，互不干扰
- 每个 worktree 拥有独立的开发环境
- 通过本地 UI 监控所有运行中的服务
- 支持 HTTPS 本地开发（自动管理 Caddy 证书）

## 快速开始

`eval "$(curl -fsSL https://coasts.dev/install)"`
访问 [coasts.dev](https://coasts.dev) 获取完整文档和安装说明。

GitHub: [https://github.com/coast-guard/coasts](https://github.com/coast-guard/coasts)
