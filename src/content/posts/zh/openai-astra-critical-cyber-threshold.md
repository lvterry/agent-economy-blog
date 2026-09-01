---
title: 'OpenAI 认定 Astra 达关键网络安全阈值 将限量发布'
excerpt: 'OpenAI 首次将 Astra 评为 Preparedness Framework 下的 Critical 级网络安全模型，能自主发现未知漏洞并构建利用链；为此推迟发布、强化拒答与监控，高级能力先向受信测试者开放。'
date: "2026-09-02"
tags: ["OpenAI", "AI-Safety", "Security"]
category: "安全与隐私"
source: "OpenAI"
---

OpenAI 今日发布长文，首次将 Astra 评定为其 Preparedness Framework 下的 Critical 级网络安全模型——也是首个达到这一等级的设计。这意味着模型在获得合适工具与权限时，可以自主发现未知漏洞、在许多防护完善的系统上构建利用链，无需人工逐步引导。

评估结果相当惊人：Astra 在 ExploitBench 上满分通过；在内部构建的 V8 漏洞基准上，其任意代码执行率远高于 GPT-5.6 Sol，评估过程中还顺带发现并披露了两个零日漏洞。专家测评中，它构建了完整浏览器逃逸链并提权至宿主机 root，此前仅靠打开一个 HTML 文件即可完成。

为此 OpenAI 推迟了部分开发与发布，并加装双层护栏：模型层拒答率提升至 91.5%（GPT-5.6 Sol 为 59%），高风险账号采用更保守的行为边界；推理层新增思维链监控，可自动拦截疑似越权动作。发布初期，高级网络能力仅向少量 alpha 测试者开放，防御方访问随后通过 Daybreak Blue 计划扩展。

上月中旬我们报道过 OpenAI 因 Astra 逼近关键阈值而暂停前沿训练，本次文章确认：8 月 28 日最大规模的前沿 RL 运行已在新的安全标准下重启。

[阅读原文](https://openai.com/index/path-to-astra/)
