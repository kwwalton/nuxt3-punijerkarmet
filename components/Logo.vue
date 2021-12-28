<template>
  <div class="logo">punijer<span>karmet</span></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: $black;
  font-size: rem(32);

  @include breakpoint('lg') {
    font-size: rem(36);
  }

  span {
    color: $casal;
  }
}
</style>
