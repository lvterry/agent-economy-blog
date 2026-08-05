---
title: 'Cloudflare 开源 Cloudflare OS，企业智能体平台全面开放'
excerpt: 'Cloudflare 将内部运行数月、数千员工日常使用的智能体工作平台 Cloudflare OS 开源，核心是把安全治理内建到智能体与应用的每一次访问中。'
date: "2026-08-06"
tags: ["Cloudflare", "AI-Agents", "Agent-Tooling", "MCP"]
category: "AI 智能体"
source: "Cloudflare"
---

Cloudflare 于 8 月 5 日的 Agents Week 开源了 Cloudflare OS——一个面向全体员工的企业智能体工作平台。今年 5 月起 Cloudflare 内部已投入使用，数千名非工程岗位员工每天靠它写文档、做幻灯片、自动化重复任务、搭建数据可视化小应用。

平台由三部分组成：基于公司上下文与技能库的智能体工作区、一套新的安全治理框架、以及人人可改的轻量应用平台。每个"文件"都可以是一个由智能体写出的全栈应用，运行时基于 Dynamic Worker 与 Durable Object Facet，自带 SQLite 状态，支持多人协作与"蓝图"复制。

安全模型是这次最值得关注的部分。智能体默认零权限，访问任何资源都要通过 Gatekeeper 获得能力绑定，凭证与生成的代码完全隔离；平台还会记录智能体观察过的每个资源，做到"策略跟随所见"——防止敏感数据经共享应用泄露给无权查看的人。这正面回应了 MCP 只约束"能调用哪些工具"、却管不住"看到哪些数据"的盲区。

配合 AI Gateway 做模型路由与成本控制，并通过 MCP Server Portal 接入企业既有工具。源码已在 GitHub 开源，Presidio 与 Happy Cog 负责企业定制落地。企业级智能体平台的"操作系统"之争，Cloudflare 正式下场。

[阅读原文](https://blog.cloudflare.com/cloudflare-os/)
