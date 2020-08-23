module.exports = {
  title: 'InboxSDK',
  tagline: 'Build apps inside of Gmail',
  url: 'https://inboxsdk.github.io',
  baseUrl: '/inboxsdk-docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'InboxSDK', // Usually your GitHub org/user name.
  projectName: 'inboxsdk-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'InboxSDK Documentation',
      logo: {
        href: "/getting-started",
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/InboxSDK/inboxsdk-docs',
          label: 'Edit on GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'getting-started',
            },
            {
              label: 'API Reference',
              to: 'api-reference',
            },
            {
              label: 'Resources',
              to: 'resources',
            },
            {
              label: 'Changelog',
              to: 'changelog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Google Group',
              href: 'https://groups.google.com/forum/?nomobile=true#!forum/inboxsdk',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/inboxsdk',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/inboxsdk/inboxsdk-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rewardly, Inc. Brought to you by <a href="www.streak.com">Streak</a>`,
    },
    sidebarCollapsible: false,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', 
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docs/getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/InboxSDK/inboxsdk-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};