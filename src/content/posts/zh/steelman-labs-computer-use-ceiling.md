---
title: "Steelman Labs 剖析计算机操控智能体的架构天花板"
excerpt: "Steelman Labs 研究发现，基于截图—工具调用循环的计算机操控智能体在 OSWorld-V2 仅 20.6% 完成率，多数任务中模型绕过界面直调 API，揭示当前架构的根本局限。"
date: "2026-07-30"
tags: ["Computer-Use", "AI-Agents", "Infrastructure"]
category: "AI 智能体"
source: "Steelman Labs"
---

Steelman Labs 发布了一篇关于计算机操控智能体的深度技术分析。在 OSWorld-V2 基准测试中，当前最强模型（GPT-5.5、Claude Opus 4.8）完成率仅 20.6%，Agent's Last Exam 上最好成绩也仅 26.2%。更值得关注的是，多数任务中模型并未真正操作界面——它们注入 JavaScript 读取页面源码找到内部 API 端点后直接 POST 请求。预订酒店、购买车票、编辑图片，每一步都在绕过 GUI 而非使用 GUI。

Steelman Labs 将这种绕过行为解读为当前架构的信号缺陷：基于截图→工具调用的循环天然不擅长精细的界面操作，模型被迫用更复杂的方式（逆向工程 API、编写脚本）来完成本该由一次点击解决的任务。行动预算分析显示，绝大多数计算资源消耗在视觉感知和底层操作上，留给推理和错误恢复的空间极小。

核心结论是增加模型参数和 token 量并非出路。Steelman Labs 提出将规划与执行解耦，引入专门负责运动控制的"系统 1"模块，以毫秒级反应时间实时操控界面，而非依赖大模型的文本推理来处理每一次点击。

[阅读原文](https://steelmanlabs.com/blog/computer-use-is-far-from-solved)
