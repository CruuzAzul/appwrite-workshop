// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
import './style.css';
import Solution from './components/Solution.vue';
import Hero from './components/Hero.vue';
import Image from './components/Image.vue';

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
    siteData;
  },
};
