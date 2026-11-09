# Live Review

Live Review shows your uncommitted changes directly in a text editor. Use it to
check your own edits or review an AI agent's work before committing.

![Live Review in Eclipse showing inline additions, deletions, and the floating change navigator.](/img/live-review.png)

## How to use it

1. Open the file you want to review.
2. Click **Show Changes** in the Eclipse status bar.
3. Use the floating navigator to step through each change.
4. Use the **Undo** action beside a change to restore that change's original text.

Click **Show Changes** again to turn off the review. Use **Refresh Changes**
to recompute the comparison after the file changes.

### Reading changes

- **Green backgrounds** mark added lines.
- **Red gaps** mark deleted lines where they used to be.
- **Gutter markers** identify changed lines beside your code.

Syntax coloring stays visible, and the review matches your editor's theme,
font, and line numbers. Inline Compare and Time Machine use the same display.

### Change actions

Each change has an **Undo** action that restores the original text of that
change only; the rest of your edits stay as they are.

With [ChangeReview](/changereview/) installed, reviewing GitHub Copilot's agent
changes also offers **Keep** and **Keep All**. See
[Agent Review](/changereview/agent-review).

{/* TODO: Verify the Undo widget behavior and the editor-undo note against the 1.0.0 build. */}

## Configuration

Right-click the **Changes** status bar item, or use **Edit > Inline Diff**, to open the review menu. The navigator's **⋮** button opens the same menu.

![Inline Diff status bar menu showing baseline choices and Inline Diff Preferences.](/img/review-ctx-menu.png)

{/* TODO: Retake this screenshot with the Inline Diff 1.0.0 menu labels. */}

### Choose a baseline

A baseline is the version you compare your current content against.

| Baseline | Shows |
|---|---|
| **Compare with Git HEAD** | Changes since the last commit, including unsaved edits. |
| **Compare with Last Saved** | Unsaved changes relative to the file on disk. |
| **Compare with History...** | Opens [Time Machine](./time-machine.md) to explore earlier versions. |

With ChangeReview and GitHub Copilot for Eclipse installed, an **Agent** baseline
is also available. See [Agent Review](/changereview/agent-review).

### Preferences

Select **Inline Diff Preferences...** from the status bar menu, or open
**General > Editors > Text Editors > Inline Diff - Live Review** in Eclipse
preferences. The top-level **Inline Diff** preference page links to all
Inline Diff settings.

![Live Review preferences showing default baseline, word highlighting, gutter markers, navigation, and automatic refresh settings.](/img/live-review-prefs.png)

Use this page to choose the default baseline and adjust:

- Word highlighting within replaced lines.
- Change markers in the editor's left margin.
- Automatic navigation to the next change after **Undo**.
- Automatic refresh after editing, and the refresh delay in milliseconds.

Use the **Annotations** link on this page to configure change colors and decorations.
