<template>
  <header v-click-outside="handleClickOutside">
    <div class="header-content container">
      <!-- Visible mobile and desktop -->
      <div class="header-content__mobile-and-desktop">
        <nuxt-link to="/" class="logo-link"><Logo /></nuxt-link>
        <ButtonMobileMenu @toggle-menu="toggleMenu" />
      </div>
      <!-- Visible desktop -->
      <div class="header-content__desktop">
        <HeaderSearch @focus="handleFocus" />
        <div class="user-info">
          <nuxt-link to="/" class="user-info-link button__outline">
            sign in
          </nuxt-link>
          <nuxt-link to="/" class="user-info-link button__filled">
            sign up
          </nuxt-link>
        </div>
      </div>
    </div>
    <Navigation />
    <HeaderSearchOverlay
      v-show="isOkToShowOverlay"
      :is-visible="isOkToShowOverlay"
      @close="isOkToShowOverlay = false"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOkToShowOverlay = ref(false)
const handleFocus = () => (isOkToShowOverlay.value = true)
const handleClickOutside = () => {
  if (isOkToShowOverlay.value) {
    isOkToShowOverlay.value = false
  }
}
const isMenuOpen = ref(false)
const toggleMenu = (event: boolean) => {
  console.log('toggle menu', event)
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  background-color: $white;
  padding-top: 30px;
  padding-bottom: 30px;
  z-index: 4;

  @include breakpoint('lg') {
    padding-bottom: 0;
  }

  .container {
    display: flex;
    justify-content: space-between;

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
    }
  }

  .desktop-hidden {
    @include breakpoint('lg') {
      display: none;
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

  .user-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .user-info-link:first-child {
      margin-right: rem(20);
    }
  }
}
</style>
