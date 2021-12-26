<template>
  <div>
    <IconLibrary />
    <Header />
    <Navigation />
    <div class="main-content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Christmas Eve 2021',
  script: {
    src: '/scripts/focus-visible.min.js',
    body: true,
    async: true,
    defer: true
  }
})
</script>

<style lang="scss" scoped>
.main-content {
  // TODO: figure out the height for each breakpoint
  // so we can push the footer down
  $headerAndNavigationHeight: 110px;
  min-height: calc(100vh - $headerAndNavigationHeight);
}
</style>
