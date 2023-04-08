import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Appwrite Workshop",
  description: "This is a workshop to learn basics of Appwrite 🚀",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './assets/appwrite.svg',
    nav: [
      { text: 'Home 🏠', link: '/' },
      { text: 'Workshop 💼', link: '/workshop/markdown-examples' },
      { text: 'Creators 👨🏼‍💻', link: '/creators.md' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/workshop/markdown-examples' },
          { text: 'Runtime API Examples', link: '/workshop/api-examples' },
          { text: 'Creators 👨🏼‍💻', link: '/creators.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CruuzAzul/appwrite-workshop' }
    ]
  }
})
