<template>
  <div class="header-user-info">
    <nuxt-link to="/" class="header-user-info__link button__outline">
      sign in
    </nuxt-link>
    <nuxt-link to="/" class="header-user-info__link button__filled">
      sign up
    </nuxt-link>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-user-info {
  $base-class: &;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;

  @include breakpoint('lg') {
    margin-top: 0;
    justify-content: flex-end;
  }

  #{$base-class}__link:first-child {
    margin-right: rem(20);
  }
}
</style>
