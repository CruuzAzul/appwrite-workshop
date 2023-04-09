import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Workshop Appwrite',
  lastUpdated: true,
  lang: 'fr-FR',
  description: "Il s'agit d'un atelier pour apprendre les bases d'Appwrite 🚀",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://seeklogo.com/images/A/appwrite-logo-D33B39992A-seeklogo.com.png',
    lastUpdatedText: 'Dernière mise à jour ',
    nav: [
      { text: 'Accueil 🏠', link: '/' },
      { text: 'Workshop 💼', link: '/workshop/markdown-examples' },
      { text: 'Créateurs 👨🏼‍💻', link: '/creators.md' },
    ],

    sidebar: [
      {
        text: '🛫 Introduction',
        items: [
          { text: 'Markdown Examples', link: '/workshop/markdown-examples' },
          { text: 'Runtime API Examples', link: '/workshop/api-examples' },
        ],
      },
      {
        text: '🌋 Aventure',
        items: [
          { text: 'Markdown Examples', link: '/workshop/markdown-examples' },
          { text: 'Runtime API Examples', link: '/workshop/api-examples' },
        ],
      },
      {
        text: 'ℹ️ Informations',
        items: [{ text: 'Créateurs 👨🏼‍💻', link: '/creators.md' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/CruuzAzul/appwrite-workshop' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Mickael Alves',
    },
  },
});
