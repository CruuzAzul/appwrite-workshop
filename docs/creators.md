---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://pbs.twimg.com/profile_images/1635742650090283013/9qflRryB_400x400.jpg',
    name: 'Mickaël Alves',
    title: 'Créateur',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/CruuzAzul' },
      { icon: 'github', link: 'https://github.com/CruuzAzul' }
    ]
  },
{
    avatar: 'https://pbs.twimg.com/profile_images/1522619252267753473/uKOozDft_400x400.jpg',
    name: 'Lucas Audart',
    title: 'Créateur',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/Slocalyy' },
      { icon: 'github', link: 'https://github.com/Slocaly' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Créateurs
    </template>
    <template #lead>
      Le développement de ce workshop a été créé par deux Appwrite Heroes 🦸🏼‍♂️
    </template>
  </VPTeamPageTitle>
  <img src="https://pbs.twimg.com/media/FrXROJMWwBsAALU?format=jpg&name=4096x4096" alt="Appwrite Banner" class="VPTeamPageBanner" />
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<style>
  .VPTeamPageTitle .title {
    font-weight: 900;
    text-transform: uppercase;
  }

  .VPTeamPageTitle .lead {
    max-width: unset;
  }

  .VPTeamPageBanner {
    min-width: 60%;
    max-width: 90%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    margin: auto auto 3rem;
  }
</style>