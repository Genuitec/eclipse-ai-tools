# Time Machine

Time Machine lets you browse a file's history on a timeline and inspect past
versions with changes highlighted inline.

It uses its own copy of the content. Exploring history leaves your editor buffer
and the file on disk untouched, even while an AI agent is writing to the file.

![Time Machine showing a selected historical version, inline changes, and the history timeline.](/img/time-machine.png)

{/* TODO: Retake without ChangeReview installed: current image shows the Agent filter chip. */}

## How to use it

1. Open the file you want to explore.
2. Choose **Compare with History...** from the Inline Diff status bar menu
   or **Edit > Inline Diff**.
3. Select a version on the timeline to inspect its content and changes.
4. Use the floating navigator to step through the highlighted changes.

Added lines appear in green, and deleted lines appear as red gaps, just as in
Live Review and Inline Compare. The viewer's navigator has the same **⋮** menu.

{/* TODO: Verify the comparison direction (selected version against what?) and describe it in one sentence. */}

## Configuration

Use the filter chips above the timeline to choose which versions it shows:

- **● Developer** – versions you saved.
- **◆ Commit** – Git commits.
The review appearance follows your Eclipse editor's theme and font.

### Time Machine preferences

Open **General > Editors > Text Editors > Inline Diff - Live Review > Time Machine**
in Eclipse preferences.

Time Machine keeps its own copies of versions written by AI agents, so this
history can survive Eclipse's local-history cleanup. Set **Maximum agent history per file (MB)** and **Maximum agent history
total (MB)** to limit how much agent content is retained.

![Time Machine preferences showing agent-history storage limits and a link to Eclipse Local History preferences.](/img/time-machine-prefs.png)

{/* TODO: Retake without ChangeReview installed: current image shows the old page names, the 'Change Review' and 'Agent Review' pages, and 'Change Reviews' in the page text. */}

Your own saved versions are kept by Eclipse's Local History. If they disappear
from the timeline sooner than expected, adjust **General > Workspace > Local History**.
The Time Machine preference page includes a link to those settings.

{/* TODO: Restore actions and Git History links need verification before they are documented. */}
