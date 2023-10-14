<script setup lang="ts">
defineProps<{
  link?: string;
}>();
</script>

<style scoped>
a {
  z-index: 9999;
  position: fixed;
  height: 70px;
  width: 70px;
  bottom: 3rem;
  right: 3rem;
  display: grid;
  place-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background-color: var(--vp-c-brand-lightest);
  border: solid 2px var(--vp-c-brand-lightest);
  border-radius: 50px;
  text-decoration: none;
  font-size: 2.2rem;
  transition: all 0.3s ease;
}

a:hover {
  background-color: white;
}
</style>

<template>
  <a :href="link" title="Documentation 📚" target="_blank" rel="noopener noreferrer">📖</a>
</template>
