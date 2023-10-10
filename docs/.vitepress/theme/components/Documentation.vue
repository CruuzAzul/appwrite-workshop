<script setup lang="ts">
defineProps<{
  link?: string;
}>();
</script>

<style scoped>
a {
  z-index: 9999;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background-color: var(--vp-c-brand-lightest);
  border: solid 2px var(--vp-c-brand-lightest);
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.8rem;
  padding: 0.8rem 1rem;
  transition: all 0.3s ease;
}

a:hover {
  background-color: white;
}

span {
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 900;
  transition: all 0.3s ease;
}

a:hover span {
  color: var(--vp-c-brand-lightest);
}

@media (max-width: 768px) {
  span {
    display: none;
  }
}
</style>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">📖 <span>Documentation</span></a>
</template>
