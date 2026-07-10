---
title: 'Colibrì 让 744B 参数模型跑在 25GB 笔记本上——纯 C 实现、零依赖'
excerpt: '开源项目 Colibrì 通过磁盘流式传输专家层，在仅 25GB 内存的笔记本上运行 GLM-5.2（744B MoE），推理引擎仅 2400 行 C 代码——本地 AI 部署的成本门槛再次被拉低。'
date: "2026-07-10"
tags: ["GLM", "Open-Source", "AI-Infrastructure", "Hardware", "Model-Compression"]
category: "AI Infra"
source: "GitHub / JustVugg"
---

开源社区再次刷新了本地大模型运行的成本下限。开发者 JustVugg 发布 Colibrì——一个纯 C 实现的推理引擎，能在 25GB 内存的普通笔记本上运行 GLM-5.2（744B 参数的混合专家模型）。

原理巧妙：GLM-5.2 虽是 744B 参数，但每次推理只激活约 40B 参数——其中 17B 的稠密部分（注意力机制、共享专家）常驻 9.9GB 内存，其余 21,504 个路由专家（约 370GB）存放在磁盘上按需流式加载，配合逐层 LRU 缓存和操作系统页缓存作为免费二级缓存。单次推理速度约 0.1 token/秒，但对开发者而言意义远不止于此。

对智能体生态而言，这个项目的隐含信号比速度数字重要得多：如果 744B 级别的模型能在 25GB 硬件上运行，本地智能体就不再受限于小模型的能力天花板。Colibrì 采用了 MLA 注意力压缩（KV 缓存从 32K 压缩至 576 tokens）和原生 MTP（多 token 预测）投机解码，这些优化意味着即使没有 GPU，消费级硬件也能运行前沿模型。

项目引擎仅 2400 行 C 代码、零外部依赖——不做 BLAS、不用 Python、不需要 GPU。这是一个 solo 开发的成果，但它展示的方向可能改变自托管推理的可行性地图。

[阅读原文](https://github.com/JustVugg/colibri)
