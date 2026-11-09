# Inline Compare

Inline Compare displays an Eclipse comparison in a single pane, so you can read
changes from top to bottom. Switch between inline and side-by-side views with
one command.

![Inline Compare in Eclipse showing a single-pane diff and the Side-by-Side button.](/img/inline-compare-small.png)

{/* TODO: Retake with the current navigator (⋮ menu). */}

## How to use it

1. Open a comparison in Eclipse's Compare Editor.
2. Click **Inline Diff** in the Compare Editor's toolbar to switch to a single pane.
3. Read added lines in green and deleted lines as red gaps. Use the floating
   navigator to move between changes.
4. Click **Side-by-Side** (the same button) to return to the two-pane view.

The inline view keeps syntax coloring and matches your editor's theme and font.

The [focus tools](./live-review.md#focusing-on-what-matters) from Live Review work here too: hide changes, filter whitespace-only changes with **¶**, and dim changes not in focus.

{/* TODO: Verify hide / ¶ / dim in the Compare Editor's inline view. */}

The floating navigator's **⋮** button lets you show or hide changes and open
Inline Diff settings. In the inline view, right-click the text and choose
**Show Inline Diff Markers (+/-/~)** to mark changed lines in the margin.

## Configuration

The review appearance follows your Eclipse editor settings, including the theme,
font, and line numbers.

### Preferences

Open **General > Compare/Patch > Inline Diff - Compare** in Eclipse preferences.

Enable **Open Compare Editor in inline diff mode by default** to start new
comparisons in the single-pane view.

![Inline Compare preferences showing the option to open Compare Editor in inline diff mode by default.](/img/inline-compare-prefs.png)

{/* TODO: Retake without ChangeReview installed: current image shows the old 'Inline Diffs' page name and the 'Change Review' and 'Agent Review' pages. */}

The link on this page opens the [Live Review preferences](./live-review.md#preferences)
for additional editor review settings.
