import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Workshop Appwrite",
  description: "Il s'agit d'un atelier pour apprendre les bases d'Appwrite 🚀",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './assets/appwrite.svg',
    nav: [
      { text: 'Accueil 🏠', link: '/' },
      { text: 'Workshop 💼', link: '/workshop/markdown-examples' },
      { text: 'Créateurs 👨🏼‍💻', link: '/creators.md' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/workshop/markdown-examples' },
          { text: 'Runtime API Examples', link: '/workshop/api-examples' },
          { text: 'Créateurs 👨🏼‍💻', link: '/creators.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CruuzAzul/appwrite-workshop' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Mickael Alves'
    }
  }
})
