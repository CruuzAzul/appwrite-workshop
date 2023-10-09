// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
import './style.css';
import Solution from './components/Solution.vue';
import Hero from './components/Hero.vue';
import Image from './components/Image.vue';
import InfoBonus from './components/InfoBonus.vue';
import Documentation from './components/Documentation.vue';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, siteData }) {
    app.component('Solution', Solution);
    app.component('Hero', Hero);
    app.component('Image', Image);
    app.component('InfoBonus', InfoBonus);
    app.component('Documentation', Documentation);
    siteData;
    enhanceAppWithTabs(app);
  },
};
