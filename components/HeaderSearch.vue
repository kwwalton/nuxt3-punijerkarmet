<template>
  <form class="header-search" role="search" @submit.prevent="handleSubmit">
    <label for="header-search" class="sr-only">search punijerkarmet</label>
    <div class="relative">
      <input
        id="header-search"
        name="header-search"
        type="search"
        v-model="search"
        placeholder="Search punijerkarmet..."
        aria-label="Search punijerkarmet..."
        autocomplete="off"
        @focus="handleFocus"
      />
      <button type="submit" class="absolute">
        <!-- TODO: handle fill and size through css -->
        <Icon fill="#1d1d1f" :size="16" name="search" />
      </button>
    </div>
    <button class="sr-only">Search!</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['focus'])

const search = ref('')
const handleSubmit = () => {
  console.log('submit')
}
const handleFocus = () => {
  console.log('focus')
  emit('focus')
}
</script>

<style lang="scss" scoped>
.header-search {
  input[type='search'] {
    padding: rem(16) rem(20) rem(16) rem(40);
    background-color: transparent;
    border-radius: $border-radius-pill;
    border: 1px solid $mercury;
    width: rem(400);
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);

    &:hover {
      box-shadow: 0 2px 8px 1px rgb(64 60 67 / 24%);
    }

    + button {
      left: rem(10);
      top: 50%;
      transform: translateY(-50%);
      border: transparent;
      border: 1px solid transparent;
      background-color: transparent;
      cursor: pointer;
      padding-top: rem(4);

      &:hover {
        border-bottom: 1px solid $blue-stone;

        svg {
          fill: $blue-stone;
        }
      }
    }
  }
}
</style>
