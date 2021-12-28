<template>
  <div>
    {{ route }}
  </div>
</template>

<script lang="ts">
// Solves "Cannot Redeclare Block Scoped Variable Name" with route, same issue as emit, TS looking for export object
import { defineComponent } from 'vue'
export default defineComponent({ name: 'CategoryPage' })
</script>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>
