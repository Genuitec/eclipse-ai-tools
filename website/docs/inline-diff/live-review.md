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

The **Undo** button beside the current change restores that change to the
baseline's text; the rest of your edits stay as they are. **Undo All** on the
navigator does the same for every visible change.

### The navigator

The floating navigator at the bottom of the editor shows where you are
(for example **2 of 5**), with arrows to move to the previous or next change.
It also has:

- **Undo All**, while there are changes and the file is editable.
- **¶**, which hides whitespace-only changes; the number beside it counts
  them. **N hidden** shows all hidden changes again.
- **⋮**, which opens the Inline Diff menu. Right-clicking the navigator opens it too.

Drag the navigator to move it; double-click it to put it back.



## Configuration

Right-click the **Changes** status bar item, or use **Edit > Inline Diff**, to open the review menu. The navigator's **⋮** button opens the same menu.

![Inline Diff status bar menu showing baseline choices and Inline Diff Preferences.](/img/review-ctx-menu.png)

{/* TODO: Retake without ChangeReview installed: current image shows 'Compare with Agent Baseline' and 'Change Review Preferences...'. */}

### Choose a baseline

A baseline is the version you compare your current content against.

| Baseline | Shows |
|---|---|
| **Compare with Git HEAD** | Changes since the last commit, including unsaved edits. |
| **Compare with Last Saved** | Unsaved changes relative to the file on disk. |
| **Compare with History...** | Opens [Time Machine](./time-machine.md) to explore earlier versions. |

### Preferences

Select **Inline Diff Preferences...** from the status bar menu, or open
**General > Editors > Text Editors > Inline Diff - Live Review** in Eclipse
preferences. The top-level **Inline Diff** preference page links to all
Inline Diff settings.

![Live Review preferences showing default baseline, word highlighting, gutter markers, navigation, and automatic refresh settings.](/img/live-review-prefs.png)

{/* TODO: Retake without ChangeReview installed: current image shows the old 'Review Mode - Inline Diffs' name, the 'Change Review' and 'Agent Review' pages, and the 'Compare with Agent Review' baseline. */}

Use this page to choose the default baseline and adjust:

- Word highlighting within replaced lines.
- Change markers in the editor's left margin.
- Automatic navigation to the next change after **Undo**.
- Automatic refresh after editing, and the refresh delay in milliseconds.

Use the **Annotations** link on this page to configure change colors and decorations.
