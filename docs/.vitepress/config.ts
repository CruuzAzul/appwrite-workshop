import { defineConfig, HeadConfig } from 'vitepress';

interface LocaleSpecificConfig<ThemeConfig = any> {
  lang?: string;
  dir?: string;
  title?: string;
  titleTemplate?: string | boolean;
  description?: string;
  head?: HeadConfig[]; // will be merged with existing head entries, duplicate meta tags are automatically removed
  themeConfig?: ThemeConfig; // will be shallow merged, common stuff can be put in top-level themeConfig entry
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  locales: {
    root: {
      label: 'FR 🇫🇷',
      lang: 'fr',
      title: 'Workshop Appwrite',
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
              { text: 'Exemple en markdown', link: '/workshop/markdown-examples' },
              { text: "Exemples d'exécution API", link: '/workshop/api-examples' },
            ],
          },
          {
            text: '🌋 Aventure',
            items: [
              { text: 'Exemple en markdown', link: '/workshop/markdown-examples' },
              { text: "Exemples d'exécution API", link: '/workshop/api-examples' },
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
    },
    en: {
      label: 'EN 🇬🇧',
      lang: 'en',
      title: 'Appwrite Workshop',
      description: 'This is a workshop to learn the basics of Appwrite 🚀',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'https://seeklogo.com/images/A/appwrite-logo-D33B39992A-seeklogo.com.png',
        lastUpdatedText: 'Last update ',
        nav: [
          { text: 'Home 🏠', link: '/' },
          { text: 'Workshop 💼', link: '/workshop/markdown-examples' },
          { text: 'Creators 👨🏼‍💻', link: '/creators.md' },
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
            text: '🌋 Adventure',
            items: [
              { text: 'Markdown Examples', link: '/workshop/markdown-examples' },
              { text: 'Runtime API Examples', link: '/workshop/api-examples' },
            ],
          },
          {
            text: 'ℹ️ Informations',
            items: [{ text: 'Creators 👨🏼‍💻', link: '/creators.md' }],
          },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/CruuzAzul/appwrite-workshop' }],

        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2023-present Mickael Alves',
        },
      },
    },
  },
} as LocaleSpecificConfig);
