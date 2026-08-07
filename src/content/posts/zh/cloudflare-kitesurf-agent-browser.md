---
title: 'Cloudflare 发布智能体浏览器 Kitesurf，成本远低于 Chromium'
excerpt: 'Cloudflare 推出专为 AI 智能体设计的浏览器 Kitesurf，完全跑在 Workers 的 V8 隔离环境中，CPU 与内存消耗远低于 Chromium，直击智能体访问网页的成本与安全痛点。'
date: "2026-08-08"
tags: ["Agent", "AI-Agents", "Cloudflare"]
category: "AI 智能体"
source: "Cloudflare"
---

Kitesurf 是 Cloudflare 在 Agents Week 发布的智能体浏览器，完全运行在 Workers 的 V8 隔离沙箱中，针对 AI 模型的真实需求重新设计：智能体不需要标签页、主题和同步，它关心的是 token 数量、上下文窗口、扩展成本与并发规模。相比 Chromium，Kitesurf 在截图和 HTML 提取等常见智能体任务上 CPU 与内存消耗显著更低——「每个智能体一个浏览器实例」一直是规模化部署的瓶颈，Kitesurf 试图把它抹平。

实现上，Cloudflare 用 Rust 直接编译到 WebAssembly，借鉴了无依赖的 headless 引擎 obscura，并借助 Web Platform Tests 与真实站点的 Puppeteer 视觉回归测试来驱动 AI 代理写代码。安全模型按「每个页面都是不可信输入」设计，组件级隔离加无状态优先，天然契合 Workers 的安全边界，同时把提示注入等威胁纳入威胁模型。

Kitesurf 的意义不止于一个产品：它标志着浏览器正从「人类的操作系统」演变为「智能体的运行时」，也为智能体批量访问网页提供了更低成本、更可控的路径。

[阅读原文](https://blog.cloudflare.com/kitesurf/)
