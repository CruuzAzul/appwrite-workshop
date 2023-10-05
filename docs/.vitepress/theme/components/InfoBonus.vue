<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
  }>(),
  { title: '' },
);
</script>

<style scoped>
details {
  border: 1px solid var(--vp-custom-block-info-bonus-text);
  border-radius: 8px;
  padding: 16px 16px 8px;
  line-height: 24px;
  font-size: 1rem;
  font-weight: 400;
  color: var(--vp-custom-block-info-bonus-text);
  background-color: var(--vp-c-info-bonus-bg-opacity);
}

details summary {
  margin: 0 0 8px !important;
  font-weight: 700;
  cursor: pointer;
}
</style>

<template>
  <details>
    <summary>💟 Info Bonus : {{ props.title }}</summary>
    <slot />
  </details>
</template>
