---
title: GitHub Copilot moves to usage-based billing, replacing fixed plans with AI Credits
excerpt: GitHub announced Copilot will transition to usage-based billing on June 1, replacing premium request units with GitHub AI Credits. Base prices stay unchanged, but agentic usage patterns will now be priced by actual compute consumption.
date: "2026-04-27"
tags: ["GitHub", "Copilot", "Pricing", "Usage-Based"]
category: "商业 & 经济"
source: "GitHub"
---

GitHub announced a major pricing reform today: starting June 1, 2026, all GitHub Copilot plans will transition to usage-based billing.

The core change replaces premium request units (PRUs) with **GitHub AI Credits**, consumed based on token usage — including input, output, and cached tokens — at published API rates per model.

**Base prices are not changing:**
- Copilot Pro: $10/month, includes $10 in AI Credits
- Copilot Pro+: $39/month, includes $39 in AI Credits
- Copilot Business: $19/user/month, includes $19 in AI Credits
- Copilot Enterprise: $39/user/month, includes $39 in AI Credits

The difference is fundamental: previously, a fixed subscription covered unlimited usage. Now, heavy users will pay for what they consume beyond their included credits.

**What stays free?** Code completions and Next Edit Suggestions remain included in all plans and do not consume AI Credits. The change mainly affects Chat and Agent mode conversations.

**Why now?** As GitHub CPO Mario Rodriguez explains, Copilot has evolved from an in-editor assistant into an agentic platform capable of running long, multi-step coding sessions. A quick chat question and a multi-hour autonomous coding session previously cost the same — GitHub was absorbing escalating inference costs, which was no longer sustainable.

**For organizations:**
- Existing Business/Enterprise customers get promotional credits for June-August ($30 for Business, $70 for Enterprise)
- Pooled included usage across the organization eliminates stranded capacity
- Admins get budget controls at enterprise, cost center, and user levels
- Copilot code review will additionally consume GitHub Actions minutes

**Watch out:** The fallback experience is going away. Previously, users who exhausted their allowance would automatically drop to a cheaper model. Under the new model, usage is governed by available credits and admin budget controls.

A preview bill experience will launch in early May, letting users see projected costs before the June 1 transition.

[Read the full article](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
