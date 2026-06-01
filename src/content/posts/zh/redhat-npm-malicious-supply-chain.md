---
title: "Red Hat 云服务遭恶意 npm 包入侵，供应链安全再敲警钟"
excerpt: "Red Hat 云服务的 npm 包仓库被发现包含恶意代码，影响多个企业级 JavaScript 客户端库。事件再次凸显开源供应链中信任机制的脆弱性。"
date: "2026-06-01"
tags: ["Security", "Supply-Chain", "Privacy"]
category: "安全与隐私"
source: "Red Hat"
---

Red Hat 云服务团队今日披露了一起严重的供应链安全事件：在其 `@redhat-cloud-services/` 命名空间下的 npm 包仓库中检测到多个恶意版本。受影响的是 Red Hat Insights 平台的 JavaScript 客户端库，被广泛用于企业级云管理工具。

这起攻击延续了近年来 npm 生态系统的典型入侵模式——攻击者获取了发布权限后，向已被广泛信赖的包中注入恶意代码，从而感染下游用户。HN 社区对此反应强烈，许多人呼吁业界采用"依赖冷却期"机制，即忽略发布不足数日的新版本包，因为大多数 npm 供应链攻击在数小时内即被检测并下架。

值得注意的是，就在同一天，Red Hat 和 IBM 还联合发布了 Project Lightwell——一个旨在帮助检测和修复供应链漏洞的工具。当安全工具与安全事件同日出现，反而更凸显了当前防御体系的被动性。对于 AI 时代的软件构建而言，如何建立可信的依赖分发机制，已成为比模型能力更紧迫的基础设施问题。

[阅读原文](https://github.com/RedHatInsights/javascript-clients/issues/492)
