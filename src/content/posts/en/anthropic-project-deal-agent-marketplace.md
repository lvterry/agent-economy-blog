---
title: 'Anthropic Project Deal tests AI agents negotiating real marketplace trades'
excerpt: 'Anthropic let Claude agents represent employees in an internal classifieds market, producing 186 real-world deals worth more than $4000. The experiment shows agent-to-agent commerce is already plausible, but stronger models create measurable negotiation advantages that users may not notice.'
date: "2026-04-26"
tags: ["Agent", "Agent-Economy", "Business", "Security"]
category: "AI 智能体"
source: "Anthropic"
---

Anthropic’s Project Deal reads like a small rehearsal for an agent-mediated economy. The company let AI agents represent real people in an internal classifieds market, negotiate with each other, and produce deals that humans later carried out with physical goods.

The experiment involved 69 Anthropic employees. Each person first completed a Claude-led interview about what they wanted to sell, what they might buy, acceptable prices, and how they wanted their agent to behave. Anthropic turned those preferences into custom system prompts, gave each participant a $100 budget, and placed the agents into a Slack-based marketplace.

Once the market began, humans stopped intervening. Agents did not ask their owners to approve deals or steer bidding wars. They listed goods, found possible matches, proposed prices, countered offers, and closed transactions on their own. In the real run, 69 agents completed 186 deals with a total transaction value of just over $4000. Items ranged from a snowboard and books to a lab-grown ruby and a plastic bag of ping-pong balls.

The first takeaway is simple: AI representatives can already conduct a surprising amount of commercial exchange on behalf of humans. The setup did not require a purpose-built negotiation protocol or a conventional ecommerce backend. With enough preference data, budget constraints, and a communication environment, agents could operate inside a natural-language market.

But the more important result came from Anthropic’s hidden parallel experiment. The company compared outcomes when participants were represented by Claude Opus 4.5, its then-frontier model, versus Claude Haiku 4.5, a smaller model. Model quality clearly changed the economics of representation.

Opus users completed about two more deals on average than Haiku users. When selling the same items, Opus agents earned more. When buying, they paid less. In a market where the median item price was only $12, a few dollars of advantage per transaction is meaningful.

The uncomfortable part is that users often did not perceive the disadvantage. Surveyed participants rated deal fairness almost identically whether their agent was Opus or Haiku. In other words, people represented by weaker agents could get objectively worse outcomes while still feeling that the experience was fair.

That is the real signal for the agent economy. If AI agents start handling procurement, contracts, insurance, advertising, recruiting, financial products, or routine business negotiation, access to a stronger agent may become a quiet market advantage. The gap may not feel obvious to the people losing value, especially when the agent produces a plausible narrative and completes the task smoothly.

Project Deal also complicates the common belief that better prompting is the main lever. Participants gave their agents different negotiation styles, from friendly and cooperative to aggressive and lowballing. In this pilot, those instructions had limited measurable impact. Model capability mattered more than the human’s requested bargaining persona.

The experiment also shows why agent commerce will need new trust and safety infrastructure. Claude sometimes made uncanny matches, such as buying a snowboard for someone who already owned the same model. It also produced odd role-play-like confabulations in some negotiations. Anthropic notes that real markets could create incentives to optimize for AI agents’ attention, much as today’s platforms optimize for human attention. Prompt injection, unauthorized disclosure, and unclear delegation boundaries become commercial risks, not just interface bugs.

Project Deal is not a full blueprint for AI-mediated trade. It is a controlled office experiment with self-selected participants and low-stakes goods. But that is exactly why it is useful. It shows the shape of the problem before the stakes become large: agents can transact, stronger agents can win, weaker users may not notice, and the policy framework for delegated machine commerce is still mostly missing.

[Read the full article](https://www.anthropic.com/features/project-deal)
