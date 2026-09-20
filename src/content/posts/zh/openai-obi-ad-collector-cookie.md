---
title: 'OpenAI 广告采集器把站外浏览接回 ChatGPT 账号'
excerpt: '安全研究者 Jamie Larson 完整复现了 OpenAI 广告采集器的链路，一枚 __obi Cookie 让 OpenAI 能把你在商家网站上的行为对齐到 ChatGPT 账号，而它在 Cookie 政策里被登记为分析类。'
date: "2026-09-21"
tags: ["OpenAI", "ChatGPT", "AI-Advertising", "Privacy"]
category: "安全与隐私"
source: "Buchodi"
---

今年 2 月 OpenAI 开始在 ChatGPT 里测试广告时，官方承诺广告主看不到聊天记录，只能拿到聚合的投放效果。安全研究者 Jamie Larson 用一部安卓手机把投放链路完整复现了一遍，发现聚合背后还有一层更细的东西：一枚叫 __obi 的 Cookie。

ChatGPT 客户端生成 16 字节随机数，向 bzr.openai.com 换回一枚一分钟后过期的 JWT，里面同时装着账号标识和 obi 标识。换来的 __obi 被写在 .openai.com 域上，有效期一年、SameSite=None，是唯一能在跨站请求里被带上的 OpenAI 标识。bzr 是 OpenAI 内部对广告平台 “bazaar”的称呼。

在 ChatGPT 上买广告的商家会在自己网站里嵌入 OpenAI 的像素脚本，和装 Meta、Google 的追踪代码是同一件事。脚本一加载，浏览器就把 __obi 发回 OpenAI；即使脚本自己走了不带凭证的分支，Cookie 也已经在 script 标签的请求里泄露了。Larson 在自己设备上看到，同一个 __obi 值被送到了 Chewy、Wayfair、Eventbrite、Coursera 等 12 个商家。

同一套 SDK 还会抓取身份。被爬取的字段（表单、页面文本、标签管理器总线）比广告主主动传入的多出近三倍；邮箱、电话、姓名先做 SHA-256，邮政编码、城市、地区则明文发送。URL 会砍掉查询串但保留路径，采集到的路径里出现过医疗状况、债务重组和法律求助页面。

OpenAI 的 Cookie 政策把 __obi 列在“分析”一栏，而分析同意与营销同意是两个独立开关。Larson 发信询问后只收到客服确认函，两个问题都没被回答。这个机制在 iOS 上并不成立（WebKit 拦截第三方 Cookie），他是在安卓版 Chrome 上观测到的，也承认没看到服务端把事件与账号真正合并的那一步。

结构上这并不新鲜，Meta 多年前就这么做过。新鲜的是它落在聊天产品上：人们会向 ChatGPT 说不会发到社交网络上的事，而它正越来越多地替人行动。

[阅读原文](https://www.buchodi.com/chatgpt-now-knows-what-you-do-on-other-websites-via-ad-collector/)
