<template>
  <div class="header-search-overlay">
    <button class="close-this-thing" @click="handleClose">
      close this thing
    </button>
    <div class="container">
      <div>
        <h3>featured</h3>
        <ul class="header-search-overlay__vertical-list">
          <li><nuxt-link to="#">vegetables</nuxt-link></li>
          <li><nuxt-link to="#">fruits</nuxt-link></li>
          <li><nuxt-link to="#">flowers</nuxt-link></li>
          <li><nuxt-link to="#">herbs</nuxt-link></li>
          <li><nuxt-link to="#">farm seed</nuxt-link></li>
        </ul>
      </div>
      <div>
        <h3>brands</h3>
        <ul class="header-search-overlay__vertical-list">
          <li><nuxt-link to="#">Johnny's Selected Seeds</nuxt-link></li>
          <li><nuxt-link to="#">Burpee Seeds</nuxt-link></li>
          <li><nuxt-link to="#">Baker Creek Heirlom Seeds</nuxt-link></li>
          <li><nuxt-link to="#">Hudson Valley Seeds</nuxt-link></li>
          <li><nuxt-link to="#">Pinetree Garden Seeds</nuxt-link></li>
        </ul>
      </div>
      <div>some products</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])

const handleClose = () => {
  console.log('close this up')
  emit('close')
}
</script>

<style lang="scss" scoped>
.header-search-overlay {
  position: absolute;
  top: calc(100% - 1px);
  width: 100%;
  background-color: $white;
  border-top: 1px solid $mercury;
  border-bottom: 1px solid $mercury;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0 28px 20px -17px rgb(0 0 0 / 8%);

  .container {
    display: grid;
    grid-template-columns: 0.75fr 1.25fr 3fr;
    grid-gap: 40px;
  }

  h3 {
    font-weight: $font-weight-bold;
    font-size: rem(20);
  }

  &__vertical-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 10px 0 10px -10px;
    }

    a {
      display: block;
      letter-spacing: 0.5px;
      color: $ship-gray;
      text-decoration: none;
      font-weight: $font-weight-normal;
      padding: 6px 10px;
      border-radius: $border-radius-pill;

      &:hover {
        color: $shark;
        background-color: $athens-gray;
      }
    }
  }
  .close-this-thing {
    position: absolute;
    right: 20px;
  }
}
</style>
