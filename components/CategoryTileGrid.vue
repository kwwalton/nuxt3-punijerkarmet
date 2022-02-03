<template>
  <ul>
    <li v-for="(item, index) in categories" :key="index">
      <CategoryTile :category="item" />
    </li>
  </ul>
</template>

<script setup language="ts">
const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
