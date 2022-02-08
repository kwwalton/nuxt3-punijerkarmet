<template>
  <div class="subcategory container">
    <div v-if="resData?.description">
      <h1>{{ resData.description }}</h1>
      <img :src="resData.image" />
    </div>
    <div v-else>
      <h1>{{ subcategory }}</h1>
      <p>No data found.</p>
    </div>
  </div>
</template>

<script lang="ts">
// Solves "Cannot Redeclare Block Scoped Variable Name" with route, same issue as emit, TS looking for export object
import { defineComponent } from 'vue'
export default defineComponent({ name: 'SubcategoryPage' })
</script>

<script setup lang="ts">
const route = useRoute()
const { category } = route.params
const { subcategory } = route.params
let resData: any = reactive([])

try {
  console.log('created')
  const { data } = await useFetch(
    `/api/category/subcategory/${category}/${subcategory}`
  )
  console.log(data)
  resData = data
} catch (error) {
  console.error(error)
} finally {
}

onMounted(async () => {
  console.log('mounted index')
  if (process.client) window.scrollTo(0, 0)

  resData.value = await fetch(
    `/api/category/subcategory/${category}/${subcategory}`
  ).then((res) => res.json())
})
</script>

<style scoped></style>
