---
title: 'Cloudflare 发布智能体原生 CLI cf 一次覆盖全部三千多项 API'
excerpt: 'Wrangler 的智能体使用率上周达到 48%，但只有约 280 条命令。Cloudflare 干脆用 OpenAPI 模式生成了一整条新 CLI，把 3000 多项操作、默认 JSON 输出和自然语言找命令的能力一起交给智能体。'
date: "2026-09-29"
tags: ["Agent-Tooling", "Cloudflare", "AI-Infrastructure"]
category: "AI 智能体"
source: "Cloudflare"
---

9 月 28 日，Cloudflare 发布 cf，一条从零为智能体设计的命令行工具，开放 beta。

数字先说话：2026 年 3 月，智能体贡献了 Wrangler 四分之一的用量，一年前还只有个位数百分比；上周这个比例到了 48%。智能体每天使用的命令种类几乎是人类的两倍，用到六条以上命令的概率接近人类的四倍。而 Wrangler 只覆盖约 280 项操作，Cloudflare 的 API 有几千项。

做法不是手写命令，而是让一条叫 Forge 的管线从 OpenAPI 模式直接生成 CLI，命令数从 280 扩到 3000 以上。这样智能体可以只用一条工具就建好 Worker、部署、观测、加访问控制、买域名、再挂上 WAF。

真正有意思的是那些面向智能体的取舍。JSON 成为默认输出，人类看到的是美化版，智能体拿到的是压缩版，省的是上下文；新增的 cf cli search 让智能体用自然语言检索命令，而不是把三千条命令一次性灌进上下文。配置格式换成 cloudflare.config.ts，用 TypeScript 给人和智能体同时提供类型约束，Claude Code、Codex 这类走 LSP 的智能体可以直接读懂配置，Cloudflare 内部有些五千行的配置被压缩了四成。默认构建工具也从 esbuild 换成 Vite，并提供 cf migrate 迁移。

配套姿态同样明确：beta 结束后 Wrangler 还会继续维护 18 个月，cf 本身开源。评论区的总结很简洁——如今最好的产品发布会，越来越像是 CLI 的发布会。

[阅读原文](https://blog.cloudflare.com/cloudflare-cf-cli-launch/)
