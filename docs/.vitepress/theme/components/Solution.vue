<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
  }>(),
  { title: 'Solution ✅' },
);
</script>

<style scoped>
details {
  border: 1px solid var(--vp-custom-block-solution-border);
  border-radius: 8px;
  padding: 16px 16px 8px;
  line-height: 24px;
  font-size: var(--vp-custom-block-font-size);
  font-weight: 400;
  color: var(--vp-custom-block-solution-text);
  background-color: var(--vp-custom-block-solution-bg);
}

details summary {
  margin: 0 0 8px !important;
  font-weight: 700;
  cursor: pointer;
}
</style>

<template>
  <details>
    <summary>{{ props.title }}</summary>
    <slot />
  </details>
</template>
