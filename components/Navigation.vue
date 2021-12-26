<template>
  <nav class="navigation">
    <ul class="container">
      <li><nuxt-link to="#">vegetables</nuxt-link></li>
      <li><nuxt-link to="#">fruits</nuxt-link></li>
      <li><nuxt-link to="#">flowers</nuxt-link></li>
      <li><nuxt-link to="#">herbs</nuxt-link></li>
      <li><nuxt-link to="#">farm seed</nuxt-link></li>
      <li><nuxt-link to="#">tools &amp; supplies</nuxt-link></li>
      <li><nuxt-link to="#">featured</nuxt-link></li>
      <li><nuxt-link to="#" class="sale">sale</nuxt-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  padding-top: rem(6);
  padding-bottom: rem(12);
  border-bottom: 1px solid $westar;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
      color: $shark;
      font-size: rem($font-size-base);
      font-weight: $font-weight-bold;
      padding: 0 0 rem(6) 0;
      margin: 0;

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
}
</style>
