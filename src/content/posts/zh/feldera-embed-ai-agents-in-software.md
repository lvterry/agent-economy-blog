---
title: 'Feldera 认为 AI Agent 应嵌入软件而不是扮演同事'
excerpt: 'Feldera 提出，AI agent 的下一步不是更像人类同事，而是被嵌入软件系统，通过 CLI、声明式规格、协调循环和 CDC 数据流减少对话噪音。这个观点把 agent 产品设计从聊天界面拉回到系统接口。'
date: "2026-04-26"
tags: ["Agentic AI", "AI-Agents", "Infrastructure", "Coding", "Software-Design"]
source: "Feldera"
---

Feldera 的这篇文章提出了一个很清晰的反向判断：AI agent 不应该继续被设计成“数字同事”，而应该更深地嵌入软件本身。今天很多 agent 产品模仿人类协作方式，会解释、总结、追问、开长对话，也会误解需求或需要持续监督。问题是，这种交互方式把认知负担重新丢给了人。

文章借用 Mark Weiser 关于 calm technology 的观点：真正深刻的技术会融入日常生活，变得不再显眼。对 agent 来说，这意味着它们不该总是站在用户面前说话，而应该在后台接收清晰状态、响应变化、持续推进任务。更聪明的 prompt 不是根本解法，真正的解法是软件要给 agent 更合适的接口。

Feldera 总结了几个已经很有效的 agentic software patterns。CLI 让 agent 能以低 token 成本稳定操作系统；声明式规格、schema 和 manifest 让目标状态变得明确；类似 Kubernetes 的 reconciliation loop 则让系统不断向目标状态收敛，而不是靠人和 agent 来回商量每一步。

这其实是 agent 产品设计里很关键的一次视角转换。过去我们常问“agent 如何更像人协作”，但更好的问题可能是“软件如何变得更适合 agent 操作”。如果接口、状态和反馈机制设计得足够好，agent 就可以减少对话，更多依靠系统事件和目标状态推进工作。

Feldera 进一步把这个观点落到数据库和数据流上。传统系统通常给 agent 暴露表格、仪表盘或 CSV，agent 只能不断轮询、比较、猜测发生了什么。相比之下，CDC 可以把插入、更新、删除等变化以精确事件流的形式发给 agent。agent 不再反复问“现在状态是什么”，而是直接收到“这里发生了变化”。

这对实时风控之类的场景很有意义。agent 可以读取新闻、识别新的欺诈模式，并更新检测逻辑；数据库引擎则持续在实时数据上执行规则，只在可疑交易出现时发出变化事件。agent 负责解释新信息和调整逻辑，数据引擎负责稳定、低成本、连续地计算。

这个分工比“让 agent 看更多表、写更多 SQL、生成更多总结”更接近可部署的 agent 架构。真正有价值的 agent 未必需要更像同事，而是需要软件系统为它提供可操作、可观察、可收敛的环境。agent 的商业化可能不只发生在新的聊天入口里，也会发生在现有软件把接口重新设计给机器使用的过程中。

[阅读原文](https://www.feldera.com/blog/ai-agents-arent-coworkers-embed-them-in-your-software)
