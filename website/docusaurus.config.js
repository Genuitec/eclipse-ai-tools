// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Genuitec Eclipse AI Tools',
  tagline: 'Documentation for Inline Diff for Eclipse and ChangeReview',
  //favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.TARGET_URL || 'https://genuitec.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: process.env.TARGET_BASE_URL || '/eclipse-ai-tools/',
  organizationName: 'Genuitec',
  projectName: 'eclipse-ai-tools',
  // GitHub Pages adds a trailing slash; keep it explicit so links and
  // emitted files agree.
  trailingSlash: true,
  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      // 'warn' while assets are still being produced. Consider raising this to
      // 'throw' before launch so a missing image can't ship unnoticed.
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Product sections live at /inline-diff/ and /changereview/.
          routeBasePath: '/',
          editUrl: 'https://github.com/Genuitec/eclipse-ai-tools/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Eclipse AI Tools',
        logo: {
          alt: 'Genuitec Eclipse AI Tools',
          src: 'img/changes_256-rounded.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'inlineDiffSidebar',
            label: 'Inline Diff',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'changeReviewSidebar',
            label: 'ChangeReview',
            position: 'left',
          },
          {
            href: 'https://github.com/Genuitec/eclipse-ai-tools/discussions',
            label: 'Community',
            position: 'right',
          },
          {
            to: "https://genuitec.com",
            label: "genuitec.com",
            position: "right",
            target: '_self',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Genuitec, LLC. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
