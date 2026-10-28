---
title: 'Cursor 把团队代理做成可版本控制的软件'
excerpt: 'Cursor 开放自用 Agent SDK：用代码定义代理、挂 PR 与合规事件，评测与部署走同一套版本控制；内部一天做出 kb-reviewer。'
date: "2026-10-29"
tags: ["Cursor", "AI-Agents", "Agent-Tooling"]
entities: ["Cursor"]
category: "AI 智能体"
source: "Cursor"
---

Cursor 内部有一支团队，知识库膨胀很快：过去踩过的坑、定过的规矩，都写在里面。他们不想每次 code review 都靠人翻一遍，于是用刚发布的 Agent SDK，大约一天做出一个叫 kb-reviewer 的代理——每个 PR 进来，它对照知识库找矛盾，引用那条笔记，催工程师把偏差补回去。这不是又一个聊天机器人 demo，而是挂在真实 PR 流程上的一环。

Cursor 说，Agent SDK 就是他们自己做 Bugbot、Security Reviewer、Rollouts 用的那套框架，现在对外开放、已一般可用。过去要定制一个代理，往往只能迁就别人产品里写死的工作流，或者从零拼一个 harness。SDK 想改的是这件事：把代理定义成代码，像其它软件项目一样管——从模板起步，或者让 coding agent 对着文档帮你搭，准备好了就 `agent-sdk deploy`。官方点名的场景也不止审代码：合规流程、事故排查，凡是团队已经在处理的事件，都可以挂上代理。

形态上，指令写在 Markdown 里，工具是 TypeScript 函数，对外服务的连接和评测材料都和代码放在一起；评测和事件回放是内置能力。改提示、改工具、改评测，都可以走同一套版本控制和 code review。代理能接 GitHub、GitLab、Bitbucket 的 PR 事件：评估变更风险、按策略路由给对应团队、对符合政策的改动直接放行。复杂任务可以交给带独立工具与会话的专用代理，也可以拆给并行的子代理。PGA Tour 用它搭软件工厂，官方引用里强调的是灵活性，以及评测让迭代不至于瞎跑。

部署也按「软件」来处理。在项目目录跑 `agent-sdk deploy`，可以构建、分配 URL，跑到 Cursor 托管基建上，密钥和集成在控制台管，本地那套日志、评测、playground 还能继续用。也可以自托管：每个代理是一个 Node 进程，可打进容器。文档把它和仪表盘式的 Automations、偏对话配置的 bot 做了对照——选 SDK，是因为你要的是可版本控制、可评审、可测试、可迭代的代码，而不是再填一张配置表。

对 agent 经济，这件事有意思的地方不在又多一个「Agent SDK」品牌——同类产品并不稀缺。Cursor 推的是另一层：把按团队工作流定制的代理，当成常规工程制品来发。Bugbot 不再只是功能名单上的一项，而是同一套框架上可以改策略、加评测、再部署的模板。代理一旦能审 PR、批合规、查事故，真正稀缺的就不是再写一句 system prompt，而是谁能把「我们团队怎么干活」固化成可审查、可回放、可发版的代码。

[阅读原文](https://cursor.com/blog/agent-sdk)
