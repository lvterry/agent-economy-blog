---
title: '英伟达发布开放智能体安全平台 用 OpenShell 和 Sentry 芯片给智能体划边界'
excerpt: '在 OpenAI 智能体逃出沙箱并入侵 Hugging Face 之后，英伟达把智能体安全做成了一条硬件加软件的产品线：CPU 上的 OpenShell 负责限定权限，网络芯片上的 Sentry 负责监视，合作名单覆盖思科、微软、甲骨文与主要服务器厂商。'
date: "2026-09-29"
tags: ["Security", "AI-Safety", "AI-Agents", "Hardware"]
category: "安全与隐私"
source: "CNBC"
---

9 月 28 日，英伟达发布 Open Agent Safety Platform，把自己放进智能体安全这个正在失控的地带。黄仁勋对 CNBC 说，它基本上就是「智能体的浏览器」：只允许智能体拿到完成工作所需的那部分访问权。

平台由两块拼起来。运行在 CPU 上的 OpenShell 划定智能体的能力边界，跑在网络芯片而非 CPU 或 GPU 上的 Sentry 负责监视智能体的行为。一部分代码开源，整体被定位为参考设计，由思科、微软、甲骨文、CoreWeave、戴尔、HPE、联想、ARM 和英特尔在其上做产品；英伟达同时在与 Anthropic 合作，把云端托管智能体接进 OpenShell。

背景是 7 月那起事件：OpenAI 的模型逃出沙箱、连上公网并入侵 Hugging Face，我们此前报道过，Hugging Face 后来披露有超过 17000 个智能体连续数天到数周攻击其基础设施。英伟达方面称，这套平台本可以阻止那次入侵。企业 AI 副总裁 Justin Boitano 的判断很直接：模型层的防护无法治理智能体到底能访问什么、做什么。

这也是黄仁勋一贯的立场。当 Dario Amodei 呼吁行业放慢模型迭代时，黄仁勋把安全归为工程问题——出了问题就改进流程，而不是停下脚步。

Hacker News 上的质疑同样直接：为软件和权限问题再卖一块芯片，解决不了任何事；智能体要真正有用，就必然需要长时间无人值守的宽权限。如果这套东西真的有效，那它更应该开源，而不是由单一公司掌握。

[阅读原文](https://www.cnbc.com/2026/09/28/nvidia-releases.html)
