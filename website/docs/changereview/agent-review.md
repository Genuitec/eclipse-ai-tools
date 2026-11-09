# Agent Review

Agent Review lets you check every edit GitHub Copilot's agent makes before you
keep it. Requires **GitHub Copilot for Eclipse**.

{/* TODO: Add a screenshot of an agent edit under review, showing the Keep / Undo widget and Keep All on the navigator. Suggested filename: agent-review.png. */}

## How it works

1. Ask Copilot's agent to make a change.
2. As the agent edits a file, its changes appear in the editor as inline diffs:
   added lines in green, deleted lines as red gaps.
3. Use **Keep** beside a change to accept it, or **Undo** to restore the text
   from before the agent's edit. **Keep All** and **Undo All** on the floating
   navigator do the same for every remaining change. Kept changes stop being
   shown; the navigator counts them (**N kept**).
4. Every version the agent writes is recorded in [Time Machine](/inline-diff/time-machine),
   so you can go back to it later.


## Choose where to review

Open the **Agent Review** preference page under the **GitHub Copilot for Eclipse**
preferences and choose how to **Review agent changes**:

| Option | What you get |
|---|---|
| **In the editor, as inline diffs (Keep, Undo, Time Machine history)** | Review in place with Keep and Undo; agent versions are recorded in Time Machine. |
| **In the Compare editor, side by side** | Each agent change opens in Eclipse's Compare Editor. |

{/* TODO: Screenshot of the Agent Review preference page, with the preferences tree expanded to show its location under GitHub Copilot for Eclipse. Suggested filename: agent-review-preferences.png. */}

## The Agent baseline

While an agent review is open, the status bar shows **Changes ✓ (Agent Review)**.
If you switch to another baseline, choose **Compare with Agent Baseline** in the
Live Review menu (right-click the status bar item, or **Edit > Inline Diff**) to
return to the review: it compares the file with its content from before the
agent's edits. The entry is available only while a review is outstanding.

## Agent history in Time Machine

Time Machine shows the agent's versions alongside your own saves. Use the
**Agent** filter on the timeline to show only agent versions.

Agent versions are stored by Time Machine, separately from Eclipse's Local
History. Limit how much is kept under **General > Editors > Text Editors >
Inline Diff - Live Review > Time Machine** with **Maximum agent history per file
(MB)** and **Maximum agent history total (MB)**.

## Preferences

The top-level **ChangeReview** preference page shows the installed release and
links to the Agent Review and Inline Diff settings.
