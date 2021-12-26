<template>
  <button
    @click="handleClick"
    class="button-mobile-menu"
    :class="{ open: isMenuOpen }"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const emit = defineEmits(['toggle-menu'])
const handleClick = () => {
  isMenuOpen.value = !isMenuOpen.value
  emit('toggle-menu', isMenuOpen.value)
}
</script>

<style lang="scss" scoped>
.button-mobile-menu {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  position: relative;
  justify-self: end;

  @include breakpoint('lg') {
    display: none;
  }
}

.button-mobile-menu span {
  height: 3px;
  width: 20px;
  background-color: $casal;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  position: absolute;
}

.button-mobile-menu span:first-child {
  top: 25%;
}

.button-mobile-menu span:nth-child(2) {
  top: 50%;
}

.button-mobile-menu span:last-child {
  top: 75%;
}

.button-mobile-menu.open span:first-child {
  position: absolute;
  transform: rotate(45deg);
  width: 30px;
  top: 50%;
}

.button-mobile-menu.open span:nth-child(2) {
  background-color: transparent;
}

.button-mobile-menu.open span:last-child {
  position: absolute;
  transform: rotate(-45deg);
  width: 30px;
  top: 50%;
}
</style>
