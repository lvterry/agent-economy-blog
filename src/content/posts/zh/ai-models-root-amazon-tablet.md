---
title: 'GLM-5.3 一天破解亚马逊平板，中国模型完成 Claude 拒绝的任务'
excerpt: '一位有安全背景的工程师花 266 美元、用四个 AI 编码模型破解了自己的亚马逊平板。Claude 因护栏拒绝复盘，Kimi K3 挖出内核漏洞，GLM-5.3 一天收尾——中国模型在真实攻防任务上有了最直观的样本。'
date: "2026-08-24"
tags: ["AI-Agents", "Kimi", "GLM", "Claude-Code", "Security"]
category: "AI 智能体"
source: "Eric Pardee"
---

安全工程师 Eric Pardee 的亚马逊 Fire HD 10 平板频繁被系统强制关机——禁用相关服务需要 root，而这台 2021 款平板没有公开 root 方法。Claude Code 陪他缠斗数月，止步于受保护的系统包。

8 月 13 日，他在 opencode 里让 Kimi K3 找 root 漏洞。Kimi K3 先自行判断了合法性（美国有 DMCA 破解豁免），再从亚马逊 OTA 镜像中定位到 Mali 内核驱动的已知漏洞 CVE-2022-38181。30 小时、621 条消息、164 美元，它构建出了完整的 exploit 工具链。

同一时间，Claude 拒绝复盘他自己设备的旧会话——「safeguards flagged this message」，连委托给子代理也被拦截；Codex 同样拒绝回答一个纯内核问题。作者评价：美国前沿模型不肯帮忙，中国模型会帮忙，但会先斟酌该不该帮。

Kimi 撞墙后写下 HANDOFF.md 交接，GLM-5.2 花 21.9 美元排除了设计缺陷，GLM-5.3 在订阅第一天就用一天完成了最终 exploit。总花费 266.15 美元，比平板本身还贵，但作者说「值得」。

这是智能体编码模型从基准走向真实攻防任务的最直观样本：能力、成本与安全护栏三者如何平衡，正在成为开发者选择模型的新标尺。

[阅读原文](https://ericpardee.github.io/fire-hd-ownership/)
