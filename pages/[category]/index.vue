<template>
  <div class="category container">
    <div v-if="resData?.category">
      <h1>{{ resData.category.name }}</h1>
      <img :src="resData.category.image" />
      <p>{{ resData.category.description }}</p>
      <ul v-if="resData.category?.subcategories?.length">
        <li
          v-for="(subcategory, index) in resData.category.subcategories"
          :key="index"
        >
          <nuxt-link :to="subcategory.url">
            {{ subcategory.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No data.</p>
    </div>

    <ShowMoreLinksList
      v-if="!isLoading && resData?.category?.subcategories?.length"
      :title="'All ' + resData.category.name"
      :items="resData.category.subcategories"
    />
  </div>
</template>

<script lang="ts">
// Solves "Cannot Redeclare Block Scoped Variable Name" with route, same issue as emit, TS looking for export object
import { defineComponent } from 'vue'
export default defineComponent({ name: 'CategoryPage' })
</script>

<script setup lang="ts">
import { computed } from 'vue'
const route = useRoute()
const { category } = route.params
let resData: any = reactive({})
const isLoading = ref(false)

// Somehow resData is null when changing routes
const hasData = computed(
  () => resData.value && Object.keys(resData.value).length > 0
)

// NOTE: this works for setup/created
// useFetch only working during setup/created, not in lifecycle hooks even though docs say it should
// also seems like we need to get the data for the server side rendering and then also in mounted for client
// useFetch only works on hard refresh and initial startup, much like asyncData in Nuxt 2, so having to use mounted hook also
// useFetch is working server side, but not client side
try {
  console.log('created')
  isLoading.value = true
  const { data } = await useFetch(`/api/category/${category}`)
  console.log(data)
  resData = data
  //resData = data
} catch (error) {
  console.error(error)
} finally {
  isLoading.value = false
}

onMounted(async () => {
  console.log('mounted')
  isLoading.value = true
  if (process.client) window.scrollTo(0, 0)
  try {
    resData.value = await fetch(`/api/category/${category}`).then((res) =>
      res.json()
    )
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
    if (process.client) window.scrollTo(0, 0)
  }
})
</script>

<style lang="scss" scoped>
.category {
  h1 + img {
    width: 100%;
    height: auto;
  }
}
</style>
