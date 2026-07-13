---
title: 'Cloudflare 发布 Precursor，用行为信号检测 AI 代理流量'
excerpt: 'Cloudflare 推出 Precursor，一种基于客户端行为的持续检测系统，通过分析鼠标轨迹、键盘节奏等信号在整场会话中区分人类用户与 AI 代理流量。'
date: "2026-07-13"
tags: ["Cloudflare", "AI-Agents", "Security"]
category: "安全与隐私"
source: "Cloudflare"
---

Cloudflare 今日发布 Precursor，一套客户端、基于会话的验证系统，旨在通过连续收集用户行为信号来区分人类访问者与自动化流量。

Precursor 通过动态注入 JavaScript 监听指针移动、键盘活动、焦点切换及页面可见性等事件，将数据实时传回 Cloudflare 边缘节点分析。其核心逻辑基于一个事实：现代 AI 代理可以轻易通过单点验证（如 CAPTCHA），但难以在整场会话中持续模拟人类行为。

鼠标移动是典型例子。人类手腕的物理转动轨迹呈弧形，点击前存在认知延迟，即使最稳的手也有生理震颤频率。而自动工具的鼠标轨迹往往是直线或完美贝塞尔曲线，点击精度也远超人类。这些差异在单个交互中可能不明显，但在整场会话中会形成难以伪造的模式。

Precursor 的会话级检测意味着代理无法通过刷新页面重置行为信号。该系统的事件监听仅采集时序与节奏信息，不记录实际按键内容，且行为数据不会关联到用户身份。

Precursor 即日起开放免费使用，正式发布后收费。用户可在 Cloudflare 后台一键开启，无需修改应用程序代码。

在 AI 代理日益渗透互联网的时代，草率的验证已经不够了。Cloudflare 正在构筑的基础设施级防线，让代理必须像人类一样「表演」全场。

[阅读原文](https://blog.cloudflare.com/introducing-precursor/)
