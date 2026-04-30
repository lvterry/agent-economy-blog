---
title: "Agent Runtime 之争"
date: "2026-04-30"
tags: ["agents", "infrastructure", "platforms"]
---

短短三周内，Anthropic、OpenAI（经由 AWS）、微软、Google 几乎同时推出了各自的托管 agent runtime。这种集中并非巧合。过去一年里，企业 agent 落地普遍卡在同样三件事上——长任务的状态管理、沙箱隔离、可观测性。行业最终给出了同一个答案：不再卖 token，改卖 agent-小时。

模型厂在自家 coding agent 上打磨成熟的 harness 与沙箱层，被重新打包成带 IAM 与审计的标准采购项。两条路线由此成形：模型厂想自己托管，把利润留在贴近模型的一侧；云厂想做中立的运行层，让任何模型都能跑在自己的算力之上。这是云时代价值沉淀之争的高一层重演。

到 2027 年，运行一个 agent 或许会像运行一个容器一样被彻底商品化——届时企业要回答的问题，将不再是用哪个模型，而是把 agent 跑在哪个 runtime 上。
