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
        logo: '/assets/appwrite.svg',
        lastUpdatedText: 'Dernière mise à jour ',
        nav: [
          { text: 'Accueil 🏠', link: '/' },
          { text: 'Workshop 💼', link: '/workshop/introduction/rules' },
          { text: 'Créateurs 👨🏼‍💻', link: '/creators.md' },
        ],

        sidebar: [
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
              {
                text: 'Entrée de la Baie',
                link: '/workshop/configuration/introduction',
              },
              {
                text: 'Démarrer notre application',
                link: '/workshop/configuration/start-application',
              },
              { text: 'Configurer Appwrite Cloud', link: '/workshop/configuration/appwrite-configuration' },
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
              { text: 'BONUS - Options alternatives', link: '/workshop/authentication/other-auth-methods' },
            ],
          },
          {
            text: '️🌳 La Forêt des Databases',
            items: [
              { text: 'Découverte de la forêt', link: '/workshop/database/introduction' },
              { text: 'Préparation de la collection', link: '/workshop/database/create-collection' },
              { text: 'Plantation des documents', link: '/workshop/database/create-document' },
              { text: 'Récolte des documents', link: '/workshop/database/get-document' },
              { text: 'Désherbage de documents', link: '/workshop/database/delete-document' },
              { text: 'BONUS : Écoute de la forêt', link: '/workshop/database/realtime' },
            ],
          },
          {
            text: '🏔️ Les Montagnes du Storage',
            items: [
              { text: "Le début de l'ascension", link: '/workshop/storage/introduction' },
              {
                text: 'Récupérer toutes les pièces',
                link: '/workshop/storage/download-files',
              },
              {
                text: 'La réponse au puzzle',
                link: '/workshop/storage/send-files',
              },
            ],
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
        logo: '/assets/appwrite.svg',
        lastUpdatedText: 'Last update ',
        nav: [
          { text: 'Home 🏠', link: '/en/' },
          { text: 'Workshop 💼', link: '/en/workshop/introduction/rules' },
          { text: 'Creators 👨🏼‍💻', link: '/en/creators.md' },
        ],

        sidebar: [
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
              {
                text: 'Bay entrance',
                link: '/en/workshop/configuration/introduction',
              },
              {
                text: 'Start our application',
                link: '/en/workshop/configuration/start-application',
              },
              { text: 'Configure Appwrite Cloud', link: '/en/workshop/configuration/appwrite-configuration' },
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
              { text: 'BONUS - Other options', link: '/en/workshop/authentication/other-auth-methods' },
            ],
          },
          {
            text: '️🌳 The Database Forest',
            items: [
              { text: 'Forest discovery', link: '/en/workshop/database/introduction' },
              { text: 'Collection Preparation', link: '/en/workshop/database/create-collection' },
              { text: 'Planting Documents', link: '/en/workshop/database/create-document' },
              { text: 'Harvesting Documents', link: '/en/workshop/database/get-document' },
              { text: 'Weeding Out Documents', link: '/en/workshop/database/delete-document' },
              { text: 'BONUS: Listening to the Forest', link: '/en/workshop/database/realtime' },
            ],
          },
          {
            text: '🏔️ The Storage Mountains',
            items: [
              { text: 'The beginning of the ascent', link: '/en/workshop/storage/introduction' },
              {
                text: 'Retrieve all the pieces',
                link: '/en/workshop/storage/download-files',
              },
              {
                text: 'The answer to the puzzle',
                link: '/en/workshop/storage/download-files',
              },
            ],
          },
          {
            text: '☁️ The head in the Functions',
            items: [
              { text: 'Bursting through the clouds', link: '/en/workshop/functions/introduction' },
              { text: 'Create your own function', link: '/en/workshop/functions/create-function' },
              { text: 'Decrypt the destinations', link: '/en/workshop/functions/send-files' },
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
