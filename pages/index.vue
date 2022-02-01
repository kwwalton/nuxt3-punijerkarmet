<template>
  <div>
    <Hero />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log('mounted index')
  if (process.client) window.scrollTo(0, 0)
})
</script>

<style lang="scss" scoped></style>
