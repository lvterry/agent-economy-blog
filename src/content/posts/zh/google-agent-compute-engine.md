---
title: 'Google 给 Agent 做了一台专用电脑'
excerpt: '谷歌在 AGNTCon 推出 Agent Compute Engine：每台 agent 一台可 checkpoint 的 microVM，已给干活的 Gemini agent 供电，预览几个月内开放；并扩展 Agent Gateway、Registry 与 SPIFFE 身份等治理能力到跨云和本机 coding agent。'
date: "2026-10-25"
tags: ["AI-Infrastructure", "AI-Agents", "Google", "Infrastructure"]
entities: ["谷歌"]
category: "AI Infra"
source: "Google Cloud"
---

普通虚拟机按「长期跑一个服务」来设计。Agent 不是这样：不停启停、等工具返回、等人审批，空转时还要占着整机就太贵。Google 说，把 Gemini 推到大规模 agent 之后，他们才确信：安全地跑自主 agent，本质上是个基础设施问题。

今天在 AGNTCon，Google 把这套能力拿出来卖，叫 Agent Compute Engine，已经在给「干活的 Gemini agent」供电，预览几个月内开放。每台 agent 分到一台 microVM：启动快；空闲时用 checkpoint 停掉，需要时再唤醒；写时复制共享同一份系统模板，好把多台 agent 塞进一台物理机。Titanium 硬件隔离、独立 guest 内核、短时凭证，出口策略走 Agent Gateway，凭证在 microVM 外注入。每台机器还有自己的 Hyperdisk，用来保住跨会话的工作区。

给已经押在 Kubernetes 上的团队，他们开源了 GKE 上的 Agent Substrate：同样是 agent 空闲就快照、机器还回池子。官方数字是相对传统算力最高约 10 倍密度，基准里 20 万 agent、每秒 500 次激活，挂起/恢复低于 500 毫秒。沙箱可选 microVM 或 gVisor，出口代理管网络策略。Nous Research 说 Hermes Enterprise 已经靠它做多租户隔离。

算力之外是治理。Agent Gateway 管流量与策略，Registry 记批准过的 agent、工具和 MCP，身份用 SPIFFE，可观测性跟 OpenTelemetry。覆盖面从 Cloud Run、GKE、Agent Compute Engine，扩到跨云混合，以及很快到来的本机 coding agent（Claude Code、Antigravity CLI）。本季度还要加 token 预算、按策略路由模型、以及和 Ping、SailPoint 等身份厂商对接。

OpenAI 刚公开怎么把训练场锁死；Google 则在卖「每台 agent 一台隔离电脑」。两边打的是同一件事：agent 一旦能写代码、开浏览器、碰企业数据，护栏就得落在运行时，而不是提示词里。

[阅读原文](https://cloud.google.com/blog/topics/ai-infrastructure/introducing-agent-compute-engine-and-expanded-agent-governance)
