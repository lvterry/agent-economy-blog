---
title: 'OpenAI 发布 GPT-6 Sol 和 Luna 并把 API 价格砍掉一半'
excerpt: '同一天里 OpenAI 把 Sol 与 Luna 的 token 价格减半，Anthropic 也下调了 Opus 5.5 的定价。前沿模型开始按每任务成本而不是能力上限竞争。'
date: "2026-09-23"
tags: ["OpenAI", "GPT", "AI-Model", "Market-Analysis"]
category: "商业 & 经济"
source: "OpenAI"
---

OpenAI 在 9 月 22 日发布 GPT-6 家族的两个新成员：中间层 Sol 和廉价层 Luna，同时把两者的 API 价格减半。Sol 是输入 2 美元、输出 10 美元每百万 token，比上一代 GPT-5.6 Sol 的 4 美元和 20 美元正好便宜一半；Luna 是 0.1 美元和 0.5 美元，输出价格降了 58%。缓存读取便宜 90%，但超过 272K 输入 token 的长上下文请求要按两倍输入价计费。

这次的重点不在能力上限。OpenAI 自己的图表显示，在 DeepSWE 和 OSWorld 2.0 上，GPT-6 Sol 最好成绩（68.8% 和 64.4%）反而低于 GPT-5.6 Sol（72.7% 和 66.2%），升级买到的是每任务成本更低而不是分数更高。对照表里放的还是 Claude Opus 5，没有同日发布的 Opus 5.5。

真正改变曲线的是 Luna。在 Agents' Last Exam 上它拿到 50.9%，与上一代 Luna 的 50.4% 基本持平，但每个任务从 2.57 美元降到 0.15 美元，约合 6%；事实性错误率 7.6% 也优于 GPT-5.6 Sol 的 8.5%，而单次成本只有后者的约七十分之一。代价是低推理档位基本不能用于智能体任务，DeepSWE 只有 2.4%，且档位并非越高越好，Luna 在 medium 上反而比 high 得分更高。

Anthropic 当天发布 Opus 5.5，输入输出定价 4 美元和 20 美元，缓存读取 0.2 美元、比 Opus 5 低 60%，输出速度提升 30% 以上，官方称整体运行成本比 Opus 5 低 40%。两家在同一天做出同样的动作，说明竞争已经从能力榜转向每任务成本。

对做智能体的人来说，单步推理的价格正在变得可以忽略，真正的差异回到了工具接口、上下文管理和批处理与缓存这些定价细节上——把模型当成可替换组件，比押注某一家的榜单更划算。

[阅读原文](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
