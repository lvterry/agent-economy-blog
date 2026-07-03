---
title: 'WebKit 推出 Safari MCP 服务器，AI 智能体可直连浏览器调试'
excerpt: 'Apple 在 Safari Technology Preview 247 中内置了 MCP 服务器，允许 AI 智能体直接连接浏览器窗口进行 DOM 检查、网络请求分析和性能评测。这是主流浏览器首次原生支持 MCP 协议，智能体驱动的 Web 开发工作流迈出关键一步。'
date: "2026-07-03"
tags: ["MCP", "AI-Agents", "Agent-Tooling", "WebKit"]
category: "AI Infra"
source: "WebKit Blog"
---

Apple 本周在 Safari Technology Preview 247 中发布了 **Safari MCP 服务器**，这是首个由主流浏览器厂商原生实现的 Model Context Protocol 服务端。任何 MCP 兼容的客户端均可连接该服务器，让 AI 智能体直接操控一个 Safari 浏览器实例。

该服务器提供了十余项工具能力，包括：获取页面 DOM 结构和文本内容、执行 JavaScript 并返回结果、列出和查看网络请求详情、获取控制台日志、创建和关闭标签页、处理浏览器弹窗等。这意味着 AI 编程智能体可以不再「盲猜」代码渲染结果，而是直接通过浏览器验证布局、对比跨浏览器兼容性、检查无障碍缺陷，并分析页面性能瓶颈。

此前 Chrome 和 Firefox 已分别通过各自的 DevTools MCP 项目提供类似能力，但 Safari 的加入补上了跨浏览器测试的最后一块拼图。对于以 Web 为交互界面的 AI 智能体应用而言，这项能力尤其关键——智能体需要知道用户看到的页面究竟是什么样子，而不仅仅是代码层面的抽象描述。

MCP 协议正在从一个实验性标准，快速演变为浏览器厂商共同支持的基础设施层。当三大主流浏览器都提供了 MCP 接入点，智能体驱动的开发测试工作流就不再是小众玩法，而将成为 Web 开发的默认配置。

[阅读原文](https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/)
