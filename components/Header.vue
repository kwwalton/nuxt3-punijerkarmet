<template>
  <header v-click-outside="handleClickOutside">
    <div class="header-content container">
      <!-- Visible mobile and desktop -->
      <div class="header-content__mobile-and-desktop">
        <nuxt-link to="/" class="logo-link" @click.passive="handleClickOutside">
          <Logo />
        </nuxt-link>
        <ButtonMobileMenu
          @toggle-menu="toggleMenu"
          :is-menu-open="isMenuOpen"
        />
      </div>
      <!-- Visible desktop, mobile when menu is open -->
      <div
        class="header-content__desktop"
        :class="{ 'menu-toggled': isMenuOpen }"
      >
        <HeaderSearch @focus="handleFocus" />
        <HeaderUserInfo />
      </div>
    </div>
    <Navigation
      :class="{ 'menu-toggled': isMenuOpen }"
      @navigated="toggleMenu"
    />
    <HeaderSearchOverlay
      v-show="isOkToShowOverlay"
      :is-visible="isOkToShowOverlay"
      @close="isOkToShowOverlay = false"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// search overlay
const isOkToShowOverlay = ref(false)
const handleFocus = () => (isOkToShowOverlay.value = true)
const handleClickOutside = () => {
  // search overlay
  if (isOkToShowOverlay.value) {
    isOkToShowOverlay.value = false
  }
  // navigation
  if (isMenuOpen.value) toggleMenu(false)
}
// navigation
const isMenuOpen = ref(false)
const toggleMenu = (event: boolean) => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  background-color: $white;
  border-bottom: 1px solid $westar;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 4;

  @include breakpoint('lg') {
    padding-bottom: 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @include breakpoint('lg') {
      flex-direction: row;
      align-items: center;
    }

    .header-content__mobile-and-desktop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
    }

    .header-content__desktop {
      display: none;
      @include breakpoint('lg') {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 3;
        padding-left: rem(30);
      }

      // need a way to show when menu is toggled on at mobile
      &.menu-toggled {
        display: block;

        @include breakpoint('lg') {
          display: flex;
        }
      }
    }
  }

  .logo-link {
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
      color: $casal;
    }
  }
}
</style>
