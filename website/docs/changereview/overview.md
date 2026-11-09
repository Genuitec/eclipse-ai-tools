---
title: ChangeReview for Eclipse
slug: /changereview/
hide_title: true
description: Review GitHub Copilot's agent changes before you keep them. Builds on Inline Diff for Eclipse.
---

import ChangeReviewIcon from '@site/static/img/changereview.svg';

<div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px'}}>
  <ChangeReviewIcon role="img" aria-label="ChangeReview product icon" width="128" height="128" style={{flexShrink: 0}} />
  <h1 style={{margin: 0}}>ChangeReview for Eclipse</h1>
</div>

Review GitHub Copilot's changes before you keep them. When Copilot's agent edits
your files, ChangeReview shows each change inline in the editor so you can keep
it or undo it, and records every agent version in Time Machine.

ChangeReview builds on the free [Inline Diff for Eclipse](/inline-diff/), which
is installed with it.

:::info 1.0 Early Access 2
ChangeReview 1.0 Early Access 2 is free to use during early access and does not
expire. Updates arrive through **Help > Check for Updates**.

Share your feedback in
[ChangeReview Early Access](https://github.com/Genuitec/eclipse-ai-tools/discussions/categories/changereview-early-access).
Your feedback helps shape the production release.
:::

[Install ChangeReview](./installation.md)

## Agent Review

Review the edits GitHub Copilot's agent makes, change by change, in the editor
or in the Compare Editor. Keep the changes you want and undo the rest.

[Use Agent Review](./agent-review.md)

## What ChangeReview adds to Inline Diff

| | Inline Diff | ChangeReview |
|---|:-:|:-:|
| Live Review, Inline Compare, Time Machine | ✓ | ✓ |
| Undo individual changes | ✓ | ✓ |
| Review GitHub Copilot agent changes | | ✓ |
| **Keep** and **Keep All** | | ✓ |
| **Agent** baseline and Time Machine agent history | | ✓ |

## Feedback and support

Questions, bugs, or ideas? Visit [Getting Help](/inline-diff/getting-help)
or the [Community Forum](https://github.com/Genuitec/eclipse-ai-tools/discussions).

Developed independently by [Genuitec](https://genuitec.com).
