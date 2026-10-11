---
title: 'DHH 让 AI 重写 Campfire 结果证明人还得读懂代码'
excerpt: 'DHH 让 AI 智能体把 Campfire 从 Rails 重写成 Rust、Elixir 和 Go。有人逐条对比后发现，提示词没写清的地方模型全靠猜，压力测试也只测了一个指标。'
date: "2026-10-12"
tags: ["Agent-Tooling", "AI-Coding"]
category: "AI 智能体"
source: "It's all about the bit"
---

Rails 作者 DHH 用 AI 智能体把 Campfire 从 Ruby on Rails 重写成 Rust，之后又补了 Elixir 和 Go 版本。他自己不读也不写 Rust，直接把活交给模型。Piotr Sarnacki 把这三次重写逐条拆开，得到一个不太让人安心的结论。

第一个问题是提示词没写清的地方，模型只能靠猜。要不要向后兼容、延迟和吞吐哪个优先、崩溃时丢消息能不能接受，这些问题没有唯一答案。Rust 版为了缓存方便砍掉了 CSRF token，还用进程内队列替掉 Redis；Elixir 版反而更接近 Rails 原版。这些差异跟语言无关，只跟当初需求有多模糊有关。

第二个问题是基准测试本身就不牢。DHH 公布的对比只测吞吐量，Zach Daniels 补测了高负载下的通知送达率，Rust 版只有 1%。可 DHH 那套是闭环压测，每个客户端收到回应才发下一条。换成固定到达率，结论又变了：每秒 100 个 POST 时 Rust 送达约 14%，Elixir 约 60%，可 Elixir 有 23% 的 HTTP 请求超时，Rust 一个都没错。

Sarnacki 追到了根因。Rust 版用 tokio 的 broadcast channel 广播事件，容量设成 256，接收端跟不上就丢消息。一行改动把容量提到 16384，送达率从 14% 跳到 90%，代价是最坏延迟从 11 秒涨到 130 秒以上。他反而认为原版更好：让客户端断开重连、顺便拉取最新消息，比干等三分钟强。

他的结论很直接，编程没有被解决，你还是得知道自己在干什么。单个指标讲不出完整故事，而基准测试比想象中难做。

[阅读原文](https://itsallaboutthebit.com/i-am-sorry-but-you-still-have-to-think/)
