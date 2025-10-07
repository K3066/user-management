<script setup lang="ts">
interface Props {
  icon: string
  size?: number | string
  color?: string
}

const props = defineProps<Props>()
</script>

<template>
  <svg
    :width="size || 20"
    :height="size || 20"
    :fill="color || '#000'"
    aria-hidden="true"
  >
    <use :href="`#${props.icon}`" />
  </svg>
</template>
