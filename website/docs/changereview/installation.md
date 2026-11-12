# Installation

Install ChangeReview from Eclipse Marketplace, then restart Eclipse.
[Inline Diff for Eclipse](/inline-diff/) is installed with it.

## Prerequisites

- An Eclipse IDE or Eclipse-based product running on Java 17 or later.
- **GitHub Copilot for Eclipse**, for Agent Review.
- Windows 11 or 10, macOS, or Linux.

{/* TODO: Confirm the minimum Eclipse version, which follows GitHub Copilot for Eclipse's own requirements. */}

## Install

1. Open **Help > Eclipse Marketplace**.
2. Search for **ChangeReview** and click **Install**.
3. Follow the prompts, review and accept the licenses, and finish installation.
4. Restart Eclipse when prompted.

After restarting, open **Window > Preferences > ChangeReview** to check the
installation, then see [Agent Review](./agent-review.md) to get started.

## Updating from Early Access 1

Open **Help > Check for Updates** and install the ChangeReview update. The update
also installs Inline Diff. Your settings are kept. Restart Eclipse to complete
the update.

Early Access 2 does not expire, so the 45-day limit from Early Access 1 no
longer applies.

## Uninstalling

Open **Help > About Eclipse IDE > Installation Details**. Select ChangeReview
on the **Installed Software** tab, click **Uninstall**, and follow the prompts.
Restart Eclipse when prompted.

What happens to Inline Diff depends on how it was installed:

- **Installed with ChangeReview** (you installed only ChangeReview): uninstalling
  ChangeReview removes Inline Diff too.
- **Installed on its own first:** Inline Diff stays installed when you uninstall
  ChangeReview.

If Inline Diff was removed and you still want it, reinstall it from Eclipse
Marketplace.

Need assistance? See [Getting Help](/inline-diff/getting-help).
