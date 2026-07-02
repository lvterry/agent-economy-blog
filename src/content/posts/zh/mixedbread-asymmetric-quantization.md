---
title: 'Mixedbread 提出非对称量化：多向量检索存储降至 3%，质量近乎无损'
excerpt: 'Mixedbread 提出非对称量化方案，将查询向量保留 int8 精度而文档向量压缩为二值符号，使多向量文档存储从 393 KiB 降至 12.28 KiB（压缩 97%），召回质量仅下降 0.61 NDCG@10。'
date: "2026-07-02"
tags: ["Vector-Database", "RAG", "AI-Infrastructure", "Model-Compression", "Mixedbread"]
category: "AI Infra"
source: "Mixedbread"
---

晚交互（late interaction）检索模型如 ColBERT 和 Wholembed 能大幅提升召回精度，因为它们保留每个 token 的细粒度信息，而非将整篇文档压缩成一个向量。但代价是存储膨胀——一篇文档可能产生数百甚至数千个向量，每个都需要索引和读取。

Mixedbread Search 的检索引擎 silo 管理着超过 25 亿篇文档的向量数据，存储成本直接决定了系统的经济可行性。他们在技术博客中公布的非对称量化方案，巧妙地利用查询和文档的"不对称性"：查询只执行一次、生命周期极短；文档长期存储、反复读取。因此他们将文档向量压缩为 1-bit 二值符号（±1），而查询向量保持 int8 精度。

效果惊人：一篇 786 token 的多向量文档，从 fp32 的 393 KiB 降至 12.28 KiB，压缩率达 97%（32 倍），与单向量 fp32 嵌入的存储开销几乎持平。在内部基准测试中，NDCG@10 仅从 90.26 微降至 89.65，降幅 0.61。

对于构建大规模 RAG 或智能体记忆系统的团队而言，这意味着晚交互检索的生产化门槛大幅降低——存储成本不再是阻碍，你可以用接近单向量的开销获得多向量语义匹配的质量。

[阅读原文](https://www.mixedbread.com/blog/asymmetric-quant)
