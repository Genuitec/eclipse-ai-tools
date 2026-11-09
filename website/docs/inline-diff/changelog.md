# Changelog

## 1.0.0

*November 2026*

{/* TODO: Set the release date. */}

First production release. For the first time, Eclipse gets a true inline diff:
in the Compare editor and in every text editor.

### Review tools

- **Live Review:** review uncommitted changes inline in any Eclipse text editor,
  against Git HEAD, the last saved version, or any point in the file's history.
- **Inline Compare:** switch Eclipse's Compare Editor between side-by-side and a
  single-pane inline view, or make inline the default.
- **Time Machine:** explore past file versions on a timeline without changing
  your editor buffer or the file on disk.

### Focus tools

- **Hide changes:** hide a change you've checked with one click, or Alt+click to
  hide every other change. Hidden changes leave a margin marker; **N hidden** on
  the navigator shows them all again.
- **Hide whitespace-only changes:** the **¶** toggle on the navigator filters out
  re-indents, trailing spaces, and blank-line edits, with a preference to hide
  them by default.
- **Dim Changes Not in Focus:** draw every change except the current one in
  faint colors.
- **Word highlighting** within replaced lines.

### Navigator and menus

- A floating navigator with **Undo** per change and **Undo All**, the ¶ filter,
  hidden-change count, and a **⋮** menu. Drag it anywhere; double-click to reset.
- The navigator and its **⋮** menu also appear in the Compare Editor and the
  Time Machine viewer.
- The Inline Diff menu is available from the navigator, the status bar, and
  **Edit > Inline Diff**.

### Look and settings

- Light and dark theme support for the navigator, change widgets, and Time Machine.
- Syntax coloring, line numbers, and change markers in every view.
- A top-level **Inline Diff** preference page that links to all Inline Diff
  settings.

Share feedback and report issues on the
[Community Forum](https://github.com/Genuitec/eclipse-ai-tools/discussions).
