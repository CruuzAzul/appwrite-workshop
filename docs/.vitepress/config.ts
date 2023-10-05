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
            text: '🛫 Exemples (🗑️ après le dev)',
            items: [
              { text: 'Exemple en markdown', link: '/workshop/markdown-examples' },
              { text: "Exemples d'exécution API", link: '/workshop/api-examples' },
            ],
          },
          {
            text: '⛵︎ Introduction',
            items: [
              { text: 'Règles et explications', link: '/workshop/introduction/rules' },
              { text: "Début de l'aventure", link: '/workshop/introduction/beginning' },
            ],
          },
          {
            text: '🏖️ La Baie de la Configuration',
            items: [
              { text: 'Configurer Appwrite Cloud', link: '/workshop/configuration/appwrite-configuration' },
              {
                text: 'Configurer notre application',
                link: '/workshop/configuration/appwrite-configuration-local',
              },
              {
                text: 'Vérifier notre configuration',
                link: '/workshop/configuration/appwrite-configuration-verification',
              },
            ],
          },
          {
            text: "🏝️ L'Île de l'Authentification",
            items: [],
          },
          {
            text: '️🌳 La Forêt des Databases',
            items: [],
          },
          {
            text: '🏔️ Les Montagnes du Storage',
            items: [],
          },
          {
            text: '☁️ La tête dans les Fonctions',
            items: [],
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
            text: '🛫 Examples (🗑️ after dev)',
            items: [
              { text: 'Exemple en markdown', link: '/workshop/markdown-examples' },
              { text: "Exemples d'exécution API", link: '/workshop/api-examples' },
            ],
          },
          {
            text: '⛵︎ Introduction',
            items: [
              { text: 'Rules and explanations', link: '/workshop/introduction/rules' },
              { text: 'The adventure begins', link: '/workshop/introduction/beginning' },
            ],
          },
          {
            text: '🏖️ The Configuration Bay',
            items: [
              { text: 'Configure Appwrite Cloud', link: '/workshop/configuration/appwrite-configuration' },
              {
                text: 'Configure our application',
                link: '/workshop/configuration/appwrite-configuration-local',
              },
              {
                text: 'Check our configuration',
                link: '/workshop/configuration/appwrite-configuration-verification',
              },
            ],
          },
          {
            text: '🏝️ The Authentication Island',
            items: [],
          },
          {
            text: '️🌳 The Database Forest',
            items: [],
          },
          {
            text: '🏔️ The Storage Mountains',
            items: [],
          },
          {
            text: '☁️ The head in the Functions',
            items: [],
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
