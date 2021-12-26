<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :style="styleObject"
  >
    <use :href="icon"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: 'search'
  },
  size: {
    type: Number,
    default: 16
  },
  fill: {
    type: String,
    default: '#1d1d1f'
  }
})
const icon = `#juniper-${props.name}`
const iconSource = computed(
  () => '../assets/images/icons/icon-' + icon + '.svg'
)
const styleObject = computed(() => ({
  height: `${props.size}px`,
  width: `${props.size}px`,
  fill: props.fill
}))
</script>

<style scoped></style>
