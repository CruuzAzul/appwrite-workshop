<script setup lang="ts">
defineProps<{
  title: string;
  image?: string;
  imageAlt?: string;
  description?: string;
}>();
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0 0 16px;
  text-align: center;
  color: var(--vp-c-brand-light);
  text-transform: uppercase;
  text-wrap: balance;
  line-height: 3rem;
}

img {
  box-shadow: 0 0 8px 0 var(--vp-c-brand-light);
}

p {
  font-weight: 600;
  text-align: center;
}
</style>

<template>
  <section>
    <h1>{{ title }}</h1>
    <img :src="image" :alt="imageAlt" />
    <p>{{ description }}</p>
    <slot />
  </section>
</template>
