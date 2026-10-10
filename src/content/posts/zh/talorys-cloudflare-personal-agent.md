---
title: 'Talorys 把个人 AI 助手装进你自己的 Cloudflare 账号'
excerpt: '一个开源个人 agent，一条命令部署到自己的 Cloudflare 账号：聊天、记忆、任务和定时提醒都在里面，开发者服务器不碰你的数据。'
date: "2026-10-11"
tags: ["AI-Agents", "Agent-Tooling", "Cloudflare", "Open-Source"]
category: "AI 智能体"
source: "Talorys"
---

Talorys 是个开源的个人 AI 助手，整个跑在你自己的 Cloudflare 账号里。装它只有一条命令：`npx create-talorys@latest`。

它把隐私做成了默认设置。浏览器只跟你的 `*.pages.dev` 站点通信，`/api` 请求经 Pages Function 通过 service binding 转给后端 Worker；那个 Worker 部署时关掉了 `workers_dev` 和 `preview_urls`，没有公开地址。登录和鉴权都在 Worker 里完成，不在前端。

数据全落进一个 Durable Object 里的 SQLite：对话、记忆、任务、笔记、项目、自动化、会话、设置、用量。提醒和循环调度交给 Durable Object 的 alarm，不需要任何常驻服务。推理走 Workers AI 上的 GLM-4.7-flash，额度按天发放。整套只用免费套餐内的服务，不碰 R2、D1、KV、Vectorize 这些付费件。

单用户设计，没有注册、团队和账号体系。安装时设一个 owner 密码，PBKDF2-SHA256 哈希后只作为 Cloudflare secret 存在你自己的账号里。代码里没有遥测、分析或广告，也不向开发者回传任何东西。AI 额度用完时，任务、笔记、记忆、提醒照常工作。

HN 上的争议集中在 “self-hosted” 这个词。有人吐槽跑在 Cloudflare 上算什么自托管；也有人反驳，代码开源，把模型调用换成自建推理服务用不到二十分钟。

[阅读原文](https://github.com/rociiu/talorys)
