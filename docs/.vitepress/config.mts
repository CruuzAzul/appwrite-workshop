import { defineConfig, HeadConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';

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
      lang: 'fr-FR',
      title: 'Workshop Appwrite',
      titleTemplate: ':title - Workshop Appwrite 🏝️',
      description: "Il s'agit d'un atelier pour apprendre les bases d'Appwrite 🚀",
      head: [['link', { rel: 'icon', href: '/assets/appwrite.svg' }]],
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
                link: '/workshop/configuration/app-configuration',
              },
              {
                text: 'Lier AppVenture à Appwrite',
                link: '/workshop/configuration/link-application',
              },
            ],
          },
          {
            text: "🏝️ L'Île de l'Authentification",
            items: [
              { text: "Votre arrivée sur L'Île", link: '/workshop/authentication/introduction' },
              { text: 'Inscription des voyageurs', link: '/workshop/authentication/register' },
              { text: 'La porte de connexion secrète', link: '/workshop/authentication/login' },
              { text: 'Rencontrer les voyageurs', link: '/workshop/authentication/users' },
              { text: 'Les chemins alternatifs', link: '/workshop/authentication/social-login' },
            ],
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
            items: [
              { text: 'L’envol vers les nuages', link: '/workshop/functions/introduction' },
              { text: 'Créer votre première fonction', link: '/workshop/functions/create-function' },
              { text: 'Décrypter les destinations', link: '/workshop/functions/develop-function' },
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
      lang: 'en-US',
      title: 'Appwrite Workshop',
      titleTemplate: ':title - Appwrite Workshop 🏝️',
      description: 'This is a workshop to learn the basics of Appwrite 🚀',
      head: [['link', { rel: 'icon', href: '/assets/appwrite.svg' }]],
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'https://seeklogo.com/images/A/appwrite-logo-D33B39992A-seeklogo.com.png',
        lastUpdatedText: 'Last update ',
        nav: [
          { text: 'Home 🏠', link: '/en/' },
          { text: 'Workshop 💼', link: '/en/workshop/markdown-examples' },
          { text: 'Creators 👨🏼‍💻', link: '/en/creators.md' },
        ],

        sidebar: [
          {
            text: '🛫 Examples (🗑️ after dev)',
            items: [
              { text: 'Exemple en markdown', link: '/en/workshop/markdown-examples' },
              { text: "Exemples d'exécution API", link: '/en/workshop/api-examples' },
            ],
          },
          {
            text: '⛵︎ Introduction',
            items: [
              { text: 'Rules and explanations', link: '/en/workshop/introduction/rules' },
              { text: 'The adventure begins', link: '/en/workshop/introduction/beginning' },
            ],
          },
          {
            text: '🏖️ The Configuration Bay',
            items: [
              { text: 'Configure Appwrite Cloud', link: '/en/workshop/configuration/appwrite-configuration' },
              {
                text: 'Configure our application',
                link: '/en/workshop/configuration/app-configuration',
              },
              {
                text: 'Link AppVenture to Appwrite',
                link: '/en/workshop/configuration/link-application',
              },
            ],
          },
          {
            text: '🏝️ The Authentication Island',
            items: [
              { text: 'Your arrival on the Island', link: '/en/workshop/authentication/introduction' },
              { text: 'Registration of travelers', link: '/en/workshop/authentication/register' },
              { text: 'The secret login gate', link: '/en/workshop/authentication/login' },
              { text: 'Meet the travelers', link: '/en/workshop/authentication/users' },
              { text: 'Alternative paths', link: '/en/workshop/authentication/social-login' },
            ],
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
            items: [
              { text: 'Bursting through the clouds', link: '/en/workshop/functions/introduction' },
              { text: 'Create your own function', link: '/en/workshop/functions/create-function' },
              { text: 'Decrypt the destinations', link: '/en/workshop/functions/develop-function' },
            ],
          },
          {
            text: 'ℹ️ Informations',
            items: [{ text: 'Creators 👨🏼‍💻', link: '/en/creators.md' }],
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
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
} as LocaleSpecificConfig);
