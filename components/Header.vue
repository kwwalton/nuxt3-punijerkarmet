<template>
  <header v-click-outside="handleClickOutside">
    <div class="header-content container">
      <!-- Visible mobile and desktop -->
      <div class="header-content__mobile-and-desktop">
        <nuxt-link to="/" class="logo-link"><Logo /></nuxt-link>
        <ButtonMobileMenu @toggle-menu="toggleMenu" />
        <!-- <button
          @click="toggleMenu"
          class="button-mobile-menu"
          :class="{ open: isMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button> -->
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
    <HeaderSearchOverlay
      v-show="isOkToShowOverlay"
      :is-visible="isOkToShowOverlay"
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
  display: flex;
  justify-content: center;
  position: sticky;
  padding-top: 30px;
  padding-bottom: 30px;
  z-index: 4;

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

  // .button-mobile-menu {
  //   width: 40px;
  //   height: 40px;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   border-radius: 10px;
  //   background-color: transparent;
  //   border: none;
  //   position: relative;
  //   justify-self: end;

  //   @include breakpoint('lg') {
  //     display: none;
  //   }
  // }

  // .button-mobile-menu span {
  //   height: 3px;
  //   width: 20px;
  //   background-color: $casal;
  //   border-radius: 3px;
  //   transition: all 0.3s ease-in-out;
  //   position: absolute;
  // }

  // .button-mobile-menu span:first-child {
  //   top: 25%;
  // }

  // .button-mobile-menu span:nth-child(2) {
  //   top: 50%;
  // }

  // .button-mobile-menu span:last-child {
  //   top: 75%;
  // }

  // .button-mobile-menu.open span:first-child {
  //   position: absolute;
  //   transform: rotate(45deg);
  //   width: 30px;
  //   top: 50%;
  // }

  // .button-mobile-menu.open span:nth-child(2) {
  //   background-color: transparent;
  // }

  // .button-mobile-menu.open span:last-child {
  //   position: absolute;
  //   transform: rotate(-45deg);
  //   width: 30px;
  //   top: 50%;
  // }
}
</style>
