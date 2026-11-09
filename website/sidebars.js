// @ts-check

/** @param {string} label */
const header = (label) => ({
  type: 'html',
  value: `<div>${label}</div>`,
  className: 'section-header',
});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  inlineDiffSidebar: [
    header('Getting Started'),
    { type: 'doc', label: 'Overview', id: 'inline-diff/overview' },
    { type: 'doc', label: 'Installation', id: 'inline-diff/install/installation' },
    header('Features'),
    { type: 'doc', label: 'Live Review', id: 'inline-diff/live-review' },
    { type: 'doc', label: 'Inline Compare', id: 'inline-diff/inline-compare' },
    { type: 'doc', label: 'Time Machine', id: 'inline-diff/time-machine' },
    header('Resources'),
    { type: 'doc', label: 'Getting Help', id: 'inline-diff/getting-help' },
    { type: 'doc', label: 'Changelog', id: 'inline-diff/changelog' },
    { type: 'doc', label: 'End User License Agreement', id: 'inline-diff/eula' },
  ],
  changeReviewSidebar: [
    header('Getting Started'),
    { type: 'doc', label: 'Overview', id: 'changereview/overview' },
    { type: 'doc', label: 'Installation', id: 'changereview/installation' },
    header('Features'),
    { type: 'doc', label: 'Agent Review', id: 'changereview/agent-review' },
    { type: 'link', label: 'Inline Diff features', href: '/inline-diff/' },
    header('Resources'),
    { type: 'link', label: 'Getting Help', href: '/inline-diff/getting-help' },
    { type: 'doc', label: 'Changelog', id: 'changereview/changelog' },
    { type: 'doc', label: 'End User License Agreement', id: 'changereview/eula' },
  ],
};

export default sidebars;
