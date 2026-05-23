---
title: "Glasswing 项目结果更新：AI 已发现超万枚高危漏洞"
excerpt: "Anthropic 的 Project Glasswing 发布首月数据：Mythos Preview 模型已发现超过一万枚高危漏洞，漏洞发现的瓶颈从「找到漏洞」转向了「修复漏洞」。"
date: "2026-05-23"
tags: ["Security", "AI-Safety", "Anthropic", "Cyber-Security", "AI-Agents"]
category: "安全与隐私"
source: "Anthropic"
---

Anthropic 今天发布了 Project Glasswing 的首批结果更新。这个旨在用前沿 AI 保护关键软件安全的研究项目，在一个月内发现了**超过一万枚高危及严重级漏洞**。

从 Cloudflare 到 Mozilla 再到 Palo Alto Networks，Glasswing 的合作方反馈显示，这一方法的漏洞发现效率远远超出了传统手段。Cloudflare 在关键路径系统中找到了 2,000 个漏洞（其中 400 个为高危及严重级），其误报率甚至优于人类测试员。Mozilla 在测试中发现了 271 个 Firefox 漏洞，是此前用 Claude Opus 4.6 的十倍以上。

最有启发性的数字来自一个具体案例：在 wolfSSL——一个被全球数十亿设备使用的开源加密库——中，Mythos Preview 构造出了一个能伪造银行级证书的利用程序（CVE-2026-5194）。这个威胁此前未被发现，现在已被修复。

**但关键瓶颈已经转移。**

Anthropic 明确表示，找到漏洞已经不再是问题——真正的问题是修复速度。一个典型的高危漏洞平均需要两周才能完成补丁。一些开源维护者甚至请求 Anthropic 放慢披露节奏，因为他们根本来不及修复。Palo Alto Networks 的最近一次更新包含的补丁数量是平时的五倍；微软也表示补丁数量将「继续增长一段时间」。

这意味着什么？在 Mythos 级别的 AI 能力面前，安全行业正在经历一次根本性转变：攻击者将能以极低成本找到并利用漏洞，而防御者必须从根本上压缩补丁周期。Anthropic 的建议直截了当——缩短补丁周期、缩短部署窗口、加固基础防御配置。

Project Glasswing 还扫描了超过 1,000 个开源项目，发现约 6,200 个高危漏洞，其中 90.6% 被第三方安全公司确认为有效。Anthropic 同时开放了扫描结果追踪面板，并推出了 Claude Security 产品帮助企业自行扫描代码库。

这是 AI 安全从「可能性讨论」走向「现实数据」的关键一步。当一款模型在首个合作月就做到这件事，整个软件供应链的安全模型都需要重新思考。

[阅读原文](https://www.anthropic.com/research/glasswing-initial-update)
