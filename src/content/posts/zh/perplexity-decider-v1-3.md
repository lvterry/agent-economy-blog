---
title: '判断模型正在变成可替换的组件'
excerpt: 'Perplexity 11 月 12 日发布 Decider v1.3 以及由它蒸馏得到的 Decider Flash v1.3，两款模型不生成自由文本，而是对已经给出的选项返回概率。'
date: "2026-11-14"
tags: ["AI-Model", "Open-Source", "LLM"]
entities: ["Perplexity"]
category: "AI 模型"
source: "Perplexity"
---

代理在工作中要做大量封闭判断：这条查询要不要搜得更深，这个页面值不值得索引，这一步该不该继续。过去常把这类问题交给聊天模型，再从生成文本里把答案解析出来。Perplexity 11 月 12 日发布 Decider v1.3，以及由它蒸馏得到的 Decider Flash v1.3。两款模型不生成自由文本，而是对已经给出的选项返回概率。权重按 Apache 2.0 许可证放在 Hugging Face，也可通过 OpenRouter 和 Perplexity 的 Decisions API 调用。近日 Google 也推出了面向封闭选择的 Gemini Decisions API。判断正在被做成一类可以单独调用、也可以替换实现的组件。

一次请求提交一份共享输入，再附上多道是非题、选择题或量表题，模型一次计算便可给出各题的概率。新增的 locate 则从文本中抽出原文片段，返回字符位置和分数，没有匹配就返回空列表。它与普通判断题混用时，需要分开计算；也不能用于图像或与网页检索同时使用。较大模型基于 Qwen3.8-27B，再蒸馏到基于 Qwen3.5-4B 的 Flash。公司称，双向注意力和问题隔离设计改善了答案稳定性，但文档也承认，各题仍可能通过共享输入轻微相互影响。这里的“一次判断多道题”，不意味着每道题都完全独立。

更值得看的是它把哪些训练和评测约束写进了说明。通用训练阶段排除基准训练集，并声称删掉了可能与评测重叠的样本；之后用加权合并的 LoRA 做领域和视觉特化，并明确更看重留出指标，而不是域内分数。评测自称全部 zero-shot。公司也引用了 Hugging Face Decision Index、Vals AI 的 ClaimBench 和 Artificial Analysis Decision Index，同时提醒这些榜单即使含有未公开题目，仍可能因反复提交和调参而被抬高，因此又用内部生产任务和留出的非基准数据做对照。生产侧从 Decisions API 上线后的前 18 天里抽取了 100 万条去重请求、共 2,318,887 道题，v1.3 与前沿模型评审员给出的参考答案一致率为 93.98%。这是与模型评审的吻合度，不是对真实标签的准确率。厂商自测的分类、检索和抽取分数，同样不宜直接外推到其他任务。模型卡还提醒，单一温度无法让所有任务都校准得当，应用应在自己的样本上设定阈值。

Perplexity 说，自己已用它在抓取时判断页面质量，并在同一次计算里识别领域、受众，以及有害、非法或个人身份信息；浏览器代理可以把每一步的截图送进去，询问页面状态和各动作的预期结果；也可以在搜索开始前估计该搜到多深。这些都是公司对内部用法的自述。官方示例同样写明：模型只给出概率，比较阈值、再去点击、滚动或停下的，是外层代码。它做的是窄的打分和抽取，并不是自行规划并完成任务的执行器。返回的概率也只是分类或定位上的把握，不能当成事实判定，更不能当成安全结论。

开放权重让团队多了一种选择：把高频判断放到自己的部署里，而不是把每一步都交给通用模型接口。但替换模型只是开始。真正决定它能否进入生产的，是团队有没有代表实际流量的测试样本，能否接受误判，以及低于什么把握时必须交给其他模型或人工。模型可以成为组件，验收标准仍要由使用它的人来定。

来源：[Perplexity 官方博客](https://www.perplexity.ai/hub/blog/perplexity-decider) · [Decisions API 文档](https://docs.perplexity.ai/docs/decisions/quickstart) · [pplx-decider-v1.3 模型卡](https://huggingface.co/perplexity-ai/pplx-decider-v1.3) · [pplx-decider-flash-v1.3 模型卡](https://huggingface.co/perplexity-ai/pplx-decider-flash-v1.3) · [Hacker News 讨论](https://news.ycombinator.com/item?id=50488464)
