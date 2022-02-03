<template>
  <div class="category-tile">
    <nuxt-link :to="category.url">
      <div class="category-tile__upper">
        <img :src="imageSource" />
      </div>
      <div class="category-tile__lower">
        <h2>{{ category.description }}</h2>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
// Solves "Cannot Redeclare Block Scoped Variable Name" with emit, TS looking for export object
import { defineComponent } from 'vue'
export default defineComponent({ name: 'CategoryTile' })
</script>

<script setup lang="ts">
const props = defineProps({
  category: {
    type: Object,
    default: () => ({
      description: 'description',
      url: '/'
    })
  }
})

const imageSource = computed(() => {
  return props.category.image
    ? props.category.image
    : 'https://via.placeholder.com/150'
})
</script>

<style lang="scss" scoped>
.category-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  height: calc(100% - 40px);

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &__upper {
    img {
      width: 100%;
    }
  }
}
</style>
