---
title: 'Claude 开始留下可共享的工作文件'
excerpt: 'Anthropic 11 月 10 日宣布，在所有付费方案中推出测试版 Claude Whiteboards 和 Claude Sheets，并把 10 月上线的测试版 Claude Dashboards 转为正式发布，改名为 Claude Data。'
date: "2026-11-11"
tags: ["Anthropic"]
entities: ["Anthropic"]
category: "行业动态"
source: "Anthropic"
---

Anthropic 11 月 10 日宣布，在所有付费方案中推出测试版 Claude Whiteboards 和 Claude Sheets，并把 10 月上线的测试版 Claude Dashboards 转为正式发布，改名为 Claude Data。和 Claude 一起做完的内容，此前常常要再搬到别的工具里，后面的修改它也就跟不上。这次的变化是，白板、表格和数据看板可以留在 Claude 里，由团队继续一起改。

白板可以和 Claude 以及同事实时共创。比如复盘时，大家把想法写上去，Claude 按主题归类，并起草待办。框选一块区域后，也可以只针对这部分提问。整理结束后，可以把白板转成文档或演示文稿，或导出到 Lucid、Miro、Vani by Zoho。表格能按提示生成带标签页、公式、格式和下拉选项的表格，Claude 改单元格时会标出改动，团队也可以一起编辑。官方写明，目前只覆盖常见表格功能；需要完整 Excel 能力时，可导出为 .xlsx 或 CSV，或改用 Claude for Excel。帮助文档还补充，表格目前不能从已连接的应用拉取实时数据，也不能作为文档、演示文稿或看板的数据源，移动端目前主要是只读。

Claude Data 需要先连接数仓或 CRM 等数据源，例如 Amazon Redshift、BigQuery、ClickHouse。正式发布后，新增的认证查询和实时分享仍是测试功能。数据团队可以把应统一使用的查询认证下来，基于这些指标的图表会带有认证标记；按帮助文档，对一份 Data 文件有写权限的人就可以认证。这表示查询口径经过批准，并不保证数字不会算错，也不等于 Claude 之后不会用错。实时分享打开后，组织内的同事打开共享看板时，就能看到更新后的数字，即使他们没有底层连接器的权限。帮助文档写得更清楚：若未打开实时分享，共享看板会按每位查看者自己的连接取数；打开之后，展示的是分享者已批准、看板所需的那些查询结果，查询未经编辑者同意不能改，查看者也不能用分享者的权限另跑别的查询。这是在分发已批准的结果，不是把底层数据权限转给对方。

这些功能可在网页端、桌面端使用，移动端也提供不同程度的支持。Team 方案中，三项默认开启，认证查询和实时分享也默认打开。Enterprise 方案中，白板和表格默认关闭；Claude Data 将于 11 月 19 日默认开启，但如果管理员已经保存过设置，则不会被自动改掉。即便到了那天，认证查询和实时分享在 Enterprise 上仍默认关闭。管理员可随时在 Organization settings > Artifacts 中调整，也可以用自定义角色只向部分小组开放。

聊天里的回答通常只对提问的人有用。一份可以共同编辑的文件，才比较容易进入团队的工作流程。对公司里的数据来说，更要紧的往往不是又多了一块看板，而是指标口径能否被认证，以及分享时只交出批准过的查询结果，而不是底层连接。这些文件会不会取代 Excel 或 Miro，现在还谈不上。它先要证明的是，团队愿不愿意信任它们，并在可控的范围内继续使用。

来源：[Anthropic 公告](https://claude.com/resources/articles/sheets-whiteboards-data) · [Claude Data 帮助文档](https://support.claude.com/en/articles/17454700-get-started-with-claude-data) · [Claude Sheets 帮助文档](https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets) · [Hacker News 讨论](https://news.ycombinator.com/item?id=50443716)
