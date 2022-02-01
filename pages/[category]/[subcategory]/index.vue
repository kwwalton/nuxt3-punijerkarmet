<template>
  <div>
    {{ route }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

onMounted(() => {
  console.log('mounted index')
  if (process.client) window.scrollTo(0, 0)
})
</script>

<style scoped></style>
