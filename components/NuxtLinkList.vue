<template>
  <ul class="nuxt-link-list">
    <li v-for="(item, index) in list" :key="index">
      <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array,
    default: () => ['nothing']
  }
})
</script>

<style lang="scss" scoped>
// TODO: move the styling to a mixin so we can use it here or in other places
ul.nuxt-link-list {
  display: block;
  //   column-count: 6;
  //   column-gap: 40px;

  li {
    margin: 0 0 10px -10px;
    display: inline-block;
    width: 100%;
  }

  a {
    display: block;
    letter-spacing: 0.5px;
    color: $ship-gray;
    text-decoration: none;
    font-weight: $font-weight-normal;
    line-height: 120%;
    padding: 6px 10px;
    border-radius: $border-radius-pill;
    border: none;

    &:hover {
      color: $shark;
      background-color: $athens-gray;
    }
  }
}
</style>
