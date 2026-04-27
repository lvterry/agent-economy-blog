---
title: 'OpenAI drops SWE-bench Verified after finding widespread contamination'
excerpt: 'OpenAI found that SWE-bench Verified suffers from flawed test cases and training data contamination across all major models, and is now recommending SWE-bench Pro instead.'
date: "2026-02-23"
tags: ["AI-Model", "Coding", "OpenAI"]
source: "OpenAI"
---

OpenAI released SWE-bench Verified in August 2024 to fix the original SWE-bench dataset's problems — brittle tests, vague task descriptions, and environment-dependent failures. Three independent experts reviewed each of the 1,699 original problems, producing a curated set of 500. It quickly became the standard metric for autonomous coding capability, reported in every major model launch.

Now OpenAI says it is time to stop using it. Two reasons, both fatal.

First, the tests themselves are broken. OpenAI audited 138 problems that models consistently failed across 64 independent runs, and found that 59.4% had material issues. Some tests are too "narrow" — 35.5% enforce arbitrary implementation details, rejecting functionally correct solutions. In one case, the test imports a function by name that was never mentioned in the problem description. If the model does not guess that name, it fails. Others are too "wide" — 18.8% check for additional functionality never specified in the task. One problem about a `nthroot_mod` function described only a single bug, but the tests also required fixes for two other issues from the same PR.

In other words, a model can produce a perfectly valid solution and still fail because it did not guess the exact implementation the test expected.

The second problem is more damning: training data contamination. Every SWE-bench problem is sourced from open-source GitHub repositories — code that almost certainly appears in the training data of every major model. OpenAI ran a red-teaming experiment where GPT-5 probed GPT-5.2, Claude Opus 4.5, and Gemini 3 Flash with minimal hints. All three models could reproduce exact gold patches for certain tasks. Claude Opus 4.5 even quoted inline comments from the diff verbatim.

This means models are not solving problems — they are recalling answers. More importantly, OpenAI found evidence that models exposed to the solutions during training score higher specifically because they possess the extra information needed to pass the underspecified tests. The benchmark no longer measures coding ability; it measures memorization.

OpenAI has stopped reporting SWE-bench Verified scores and recommends other developers do the same. The current alternative is SWE-bench Pro, which OpenAI admits is not perfect but empirically shows far less contamination — in the red-teaming tests, no model could produce a complete verbatim gold patch for Pro tasks. OpenAI is also building new evaluations like GDPVal, where problems are privately authored by domain experts and graded holistically by trained reviewers rather than brittle automated tests.

The deeper lesson: when models become powerful enough and training data broad enough, the "public dataset plus automated scoring" paradigm itself becomes a security problem. The evaluation is the attack surface.

[Read the full article](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/)
