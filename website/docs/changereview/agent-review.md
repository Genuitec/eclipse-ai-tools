# Agent Review

Agent Review lets you check every edit GitHub Copilot's agent makes before you
keep it. Requires **GitHub Copilot for Eclipse**.

{/* TODO: Add a screenshot of an agent edit under review, showing the Keep / Undo widget and Keep All on the navigator. Suggested filename: agent-review.png. */}

## How it works

1. Ask Copilot's agent to make a change.
2. As the agent edits a file, its changes appear in the editor as inline diffs:
   added lines in green, deleted lines as red gaps.
3. Use **Keep** to accept a change, or **Undo** to restore the original text.
   Use **Keep All** on the floating navigator to accept the remaining changes.
4. Every version the agent writes is recorded in [Time Machine](/inline-diff/time-machine),
   so you can go back to it later.

{/* TODO: Verify the exact Keep / Undo / Keep All behavior and labels against the EA-2 build. */}

## Choose where to review

Open the **Agent Review** preference page under the **GitHub Copilot for Eclipse**
preferences and choose how to **Review agent changes**:

| Option | What you get |
|---|---|
| **In the editor, as inline diffs (Keep, Undo, Time Machine history)** | Review in place with Keep and Undo; agent versions are recorded in Time Machine. |
| **In the Compare editor, side by side** | Each agent change opens in Eclipse's Compare Editor. |

:::note Screenshot needed: Agent Review preferences
Show the **Agent Review** preference page, with the preferences tree expanded to
show its location under GitHub Copilot for Eclipse.
Suggested filename: **agent-review-preferences.png**.
:::

## The Agent baseline

In the Live Review menu (right-click the **Changes** status bar item, or
**Edit > Inline Diff**), choose the **Agent** baseline to compare the file with
the version before the agent's edits.

{/* TODO: Verify the Agent baseline's comparison point. */}

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
