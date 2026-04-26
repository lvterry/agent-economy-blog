---
title: 'LLMs make surface quality unreliable in knowledge work'
excerpt: 'One Happy Fellow argues that LLMs break the proxy measures organizations use to judge knowledge work. When spelling, formatting, review rituals, and professional tone can be generated cheaply, teams need better ways to verify whether work is actually true, useful, and decision-grade.'
date: "2026-04-25"
tags: ["LLM", "Future-of-Work", "Knowledge-Work", "AI-Agents", "Risk-Assessment"]
source: "One Happy Fellow"
---

This essay raises a problem that is easy to underestimate: once LLMs can reliably generate output that looks like high-quality work, many of the old proxy signals for judging knowledge work stop working.

The author starts with a market analysis report. What matters is whether the report reflects reality and helps a decision. But that is expensive to check quickly. So people use cheaper surface-level signals instead: whether the date is correct, whether the writing has typos, whether the charts are mislabeled, whether the formatting looks professional. These signals are not the real target, but historically they correlated well enough with care and quality.

Knowledge work has always depended on this kind of proxy evaluation. Clean code, complete documentation, professional writing, and visible review rituals are not the final value, but they help organizations assess output without redoing the work. The problem is that LLMs are very good at simulating those surface characteristics.

That creates what the author calls a simulacrum of knowledge work. A worker can generate a market report that sounds like a consulting deliverable. A software engineer can produce thousands of lines of code that look good on a quick skim, run an AI code review, fix the issues it finds, and preserve the ritual of professional engineering. The process still looks right, but the underlying quality may not be there.

The incentive problem makes this worse. Workers rationally optimize for the dimensions on which they are measured. If organizations reward surface quality, speed, and visible deliverables, then producing LLM-generated work that looks right is a predictable outcome. Reviewers, overwhelmed by more output, become more likely to skim, approve, and move on.

The author also points out that LLMs themselves suffer from a similar proxy problem. Training does not directly optimize for “is this answer true” or “is this answer useful.” It optimizes for answers that resemble the training corpus or satisfy RLHF judges. In other words, we are optimizing models to produce the appearance of high-quality output, not always quality itself.

The essay is not an argument against AI tools. It is a warning that organizations cannot keep relying on old evaluation habits. LLMs make surface signals too cheap, which accelerates Goodhart’s law. The scarce capability in the next phase of AI adoption may not be producing more text, code, and analysis. It may be building systems that verify truth, runtime behavior, and decision value.

[Read the full article](https://blog.happyfellow.dev/simulacrum-of-knowledge-work/)
