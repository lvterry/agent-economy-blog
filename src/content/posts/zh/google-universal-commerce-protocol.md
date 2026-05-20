---
title: Google 发布 Universal Commerce Protocol 为 AI 原生商业铺路
excerpt: Google 推出开放标准 Universal Commerce Protocol，让 AI 搜索和 Gemini 可以直连商家完成交易，打通从对话到购买的最后一公里。
date: "2026-05-19"
tags: ["Google", "UCP", "Commerce Protocol", "AI Commerce", "AI Infra"]
category: "AI Infra"
source: "Google"
---

Google 正式发布了 Universal Commerce Protocol（UCP），一个面向 AI 时代商业场景的开放标准。核心使命很直白：让 AI 搜索和 Gemini 这类对话界面，能够直接帮用户完成购买。

UCP 不是什么框架，而是一套协议层的规范。商家按照这套标准接入后，用户在 Google AI Mode 或 Gemini 中问一句"帮我买 X"，AI 可以直接走完选品、下单、支付的全流程，而无需跳转到商家站点。

这对 Google 来说是个关键基础设施补位。搜索本身越来越"答案即终点"，但如果答案不能转化为交易，商业价值就留在了别处。UCP 补上了这个缺口——AI 作为交互层，UCP 作为交易层。

几个值得关注的设计选择：

**商家仍然是 Merchant of Record。** 这是一个聪明的平衡——Google 不抢客户关系，商家保留完整的用户数据和售后体验。这降低了商家对"AI 吃掉我流量"的恐惧，也绕开了数据所有权这个敏感话题。

**UCP 不是孤岛标准。** 它兼容 AP2（Agent Payments Protocol）、A2A（Agent2Agent）和 MCP（Model Context Protocol）。在协议层面做了互操作设计，而不是另起炉灶再造一个封闭体系。这对生态落地至关重要。

**两种集成路径。** Native Checkout（默认，直连 AI 界面）和 Embedded Checkout（iframe 方案，面向品牌定制需求）。后者需要 Google 审批，门槛更高，覆盖的是那些品牌感极强的商家场景。

再看 Roadmap，UCP 未来的方向包括多商品购物车、账号绑定（用于积分/会员体系）、以及售后追踪（物流/退货）。也就是说 Google 不止想做"一键下单"，而是想把整个购物生命周期都协议化。

从 AI Infra 的视角来看，UCP 的意义在于：**商业交易的协议化是 AI Agent 落地的关键工程杠杆。** 没有标准化的交易层，Agent 只能"看"不能"买"，商业闭环就卡在最后一厘米。UCP 和 A2A、MCP 一样，属于"让 AI 真正动手做事"的基础设施——只不过这次对准的是钱包。

[阅读原文](https://developers.google.com/merchant/ucp)
