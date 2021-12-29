<template>
  <nav class="navigation" @click.passive="handleClick">
    <ul class="container">
      <li @mouseover="isShowing = true" @mouseout="isShowing = false">
        <nuxt-link to="/vegetables">vegetables</nuxt-link>
        <div class="subcategories" v-show="isShowing">
          <div class="container">
            <h3>vegetables</h3>
            <NuxtLinkList :list="vegetables" />
          </div>
        </div>
      </li>
      <li><nuxt-link to="/fruits">fruits</nuxt-link></li>
      <li><nuxt-link to="#">flowers</nuxt-link></li>
      <li><nuxt-link to="#">herbs</nuxt-link></li>
      <li><nuxt-link to="#">farm seed</nuxt-link></li>
      <li><nuxt-link to="#">tools &amp; supplies</nuxt-link></li>
      <li><nuxt-link to="#">featured</nuxt-link></li>
      <li><nuxt-link to="#" class="sale">sale</nuxt-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import vegetablesList from '~/constants/vegetables-list'
const vegetables = reactive(vegetablesList)
const isShowing = ref(false)
const temp = true

const emit = defineEmits(['navigated'])
const handleClick = () => {
  emit('navigated', true)
  // TODO: problem is what if we click something that is not a link or in naviagation, like the logo link
  // and tell the menu mobile button to close
  // maybe a case for the new useState hook
}
</script>

<style lang="scss" scoped>
.navigation {
  display: none;

  &.menu-toggled {
    @include breakpoint('lg', 'max') {
      display: block;
      position: absolute;
      background-color: $white;
      width: 100%;
      top: 100%;
      padding-bottom: 15px;
    }
  }

  @include breakpoint('lg') {
    display: flex;
    justify-content: center;
    padding-top: rem(6);
    padding-bottom: rem(12);
    margin-top: rem(30);
  }

  ul {
    @include breakpoint('lg') {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      padding: 10px 0;
      @include breakpoint('lg') {
        padding: 0;
      }
    }

    a {
      text-decoration: none;
      color: $shark;
      font-size: rem($font-size-base);
      font-weight: $font-weight-bold;

      @include breakpoint('lg') {
        padding: 0 0 rem(6) 0;
        margin: 0;
      }

      &.sale {
        color: $crimson;

        &:hover {
          color: $monarch;
          border-bottom: 4px solid $monarch;
        }
      }

      &:hover {
        color: $blue-stone;
        border-bottom: 4px solid $casal;
      }
    }
  }

  .subcategories {
    position: absolute;
    top: calc(100% - 1px);
    width: 100%;
    left: 0;
    right: 0;
    background-color: $white;
    border-top: 1px solid $mercury;
    border-bottom: 1px solid $mercury;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 0 28px 20px -17px rgb(0 0 0 / 8%);

    .container {
      h3 {
        color: $casal;
      }
    }
  }
  ::v-deep(ul.nuxt-link-list) {
    display: block;
    column-count: 6;
    column-gap: 40px;
  }
}
</style>
