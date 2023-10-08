<script setup lang="ts">
defineProps<{
  src?: string;
  imageAlt?: string;
  withSpacing?: boolean;
  withoutShadow?: boolean;
}>();
</script>

<style scoped>
.withShadow {
  box-shadow: 0 0 8px 0 var(--vp-c-brand-light);
}

.withSpacing {
  margin: 2rem 0;
}
</style>

<template>
  <img :src="src" :alt="imageAlt" :class="{ withSpacing, withShadow: !withoutShadow }" />
</template>
