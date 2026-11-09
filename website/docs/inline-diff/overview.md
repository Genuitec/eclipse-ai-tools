---
title: Inline Diff for Eclipse
slug: /inline-diff/
hide_title: true
description: Inline diffs for Eclipse, at last. Read changes top to bottom in the Compare editor and in every Eclipse text editor. Free.
---

import productIcon from '@site/static/img/changes_256-rounded.png';

<div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px'}}>
  <img src={productIcon} alt="Inline Diff product icon" width="128" height="128" style={{flexShrink: 0}} />
  <h1 style={{margin: 0}}>Inline Diff for Eclipse</h1>
</div>

For more than 20 years, Eclipse's Compare editor has shown changes one way:
side by side, in two panes you read back and forth. **Inline Diff for Eclipse**
adds the view most other IDEs have had for years: a single, inline diff you
read from top to bottom.

And it goes further. Inline Diff brings the same view into **every Eclipse text
editor**, so you can review changes right where you write code, without
opening a comparison at all.

Inline Diff is free and works with recent Eclipse releases.

[Install Inline Diff](./install/installation.md)

## Why inline?

A side-by-side comparison asks you to read two columns at once, matching lines
across panes and scrolling both. An inline diff reads like the file itself:
deleted lines appear as red gaps where they were, added lines in green, all in
one top-to-bottom pass with full syntax coloring. For most reviews that is
simply faster. When you do want two panes, side by side is one click away.

## Live Review

See uncommitted changes directly in any text editor. Step through them, hide
the ones you've checked, filter out whitespace-only edits, dim everything but
the change you're on, and undo individual changes.

![Live Review in Eclipse showing inline additions, deletions, and the floating change navigator.](/img/live-review.png)

{/* TODO: Retake with the current navigator (Undo All, ¶, ⋮). */}

[Use Live Review](./live-review.md)

## Inline Compare

Read any Eclipse comparison top to bottom in a single pane. Switch back to the
side-by-side view with the same button.

![Inline Compare in Eclipse showing a single-pane diff and the Side-by-Side button.](/img/inline-compare-small.png)

{/* TODO: Retake with the current navigator (⋮ menu). */}

[Use Inline Compare](./inline-compare.md)

## Time Machine

Browse a file's history on a timeline and inspect past versions with inline
changes. Exploring history leaves your editor buffer and file on disk untouched.

![Time Machine showing a selected historical version, inline changes, and the history timeline.](/img/time-machine.png)

{/* TODO: Retake without ChangeReview installed: current image shows the Agent filter chip. Also show the current navigator. */}

[Use Time Machine](./time-machine.md)

All three tools match your editor's theme (light or dark) and font, and share
the same floating navigator to move between changes.

## Feedback and support

Questions, bugs, or ideas? Visit [Getting Help](./getting-help.md)
or the [Community Forum](https://github.com/Genuitec/eclipse-ai-tools/discussions).

Developed independently by [Genuitec](https://genuitec.com).
