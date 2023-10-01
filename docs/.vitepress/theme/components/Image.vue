<script setup lang="ts">
defineProps<{
  src?: string;
  imageAlt?: string;
}>();
</script>

<style scoped>
img {
  box-shadow: 0 0 8px 0 var(--vp-c-brand-light);
}
</style>

<template>
  <img :src="src" :alt="imageAlt" />
</template>
