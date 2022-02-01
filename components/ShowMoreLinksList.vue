<template>
  <div class="show-more-links-list">
    <h2>{{ title }}</h2>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'is-hidden': index > amountToShow }"
      >
        <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
      </li>
      <li v-if="items.length > minToShow">
        <button @click="showMoreOrLess">{{ buttonText }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// Solves "Cannot Redeclare Block Scoped Variable Name" with emit, TS looking for export object
import { defineComponent } from 'vue'
export default defineComponent({ name: 'ShowMoreLinksList' })
</script>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: () => 'Title'
  },
  items: {
    type: Array,
    default: () => []
  }
})

const minToShow = 5
const amountToShow = ref(minToShow)

const showMoreOrLess = () => {
  if (amountToShow.value < props.items.length) {
    amountToShow.value = props.items.length
  } else {
    amountToShow.value = minToShow
  }
}

const buttonText = computed(() => {
  return amountToShow.value < props.items.length ? 'Show more' : 'Show less'
})
</script>

<style lang="scss" scoped>
.show-more-links-list {
  h2 {
    font-size: rem(18);
  }
}
</style>
