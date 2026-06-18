---
title: 'Browser Use 用 Firecracker 微虚拟机将浏览器 Agent 成本降低三分之二'
excerpt: 'Browser Use 团队重构了云浏览器基础设施，在普通 EC2 实例上运行 Firecracker 微虚拟机，将浏览器冷启动时间压缩至 400ms 以下、每小时成本降至 2 美分——为 AI 浏览器 Agent 的大规模部署提供了新的效率标杆。'
date: '2026-06-18'
tags: ['AI-Infrastructure', 'Infrastructure', 'Agentic AI', 'Computer-Use', 'Browser-Use']
category: 'AI Infra'
source: 'Browser Use'
---

Browser Use 团队近日分享了他们在云浏览器基础设施上的重构过程。为了同时满足快速启动、强隔离和低成本三个目标，他们放弃了此前使用的 Unikraft 方案，转而采用 Firecracker 微虚拟机，并在普通 EC2 实例上（而非通常所需的裸金属服务器）运行这套系统。

每个浏览器 Agent 会话都在一个独立的微虚拟机中运行。团队通过 2MB 大页内存映射、自定义缺页处理、CPU 两阶段调度（启动时不固定核心、就绪后固定）以及实时优先级设置，将冷启动时间压缩到 400ms 以下。端到端浏览器创建延迟仅 825ms（p50），同时实现了业界最高的无头浏览器隐身通过率 81%。

成本方面，从每小时 6 美分降至 2 美分，在 BrowserArena 独立基准测试中获得综合评分第一。这套基础设施目前已在 Browser Use Cloud 上线运行，下一阶段计划在 Chromium 启动完成后拍摄快照，进一步跳过浏览器启动环节。

这篇文章对 AI Agent 基础设施的构建者尤其有价值——嵌套虚拟化、自定义调度和隐身浏览器的技术方案，展示了在成本、速度和隔离性三者之间取得平衡的工程设计思路。

[阅读原文](https://browser-use.com/posts/firecracker-browser-infra)
