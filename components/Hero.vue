<template>
  <div class="hero">
    <div class="container">
      <div class="left">
        <h2 class="large">now open for business</h2>
        <p class="large">
          Find best-selling products from trusted brands and discover something
          new. Anytime. Everywhere.
        </p>
        <button class="button__filled">sign up</button>
      </div>
      <div class="right">
        <div class="homepage-hero-graphic-wrapper">
          <div
            class="homepage-hero-graphic homepage-hero-graphic-1"
            style="background-image: url('/images/growers-favorite-sq.jpg')"
          ></div>
          <div
            class="homepage-hero-graphic homepage-hero-graphic-2"
            style="background-image: url('/images/new-og-sq.jpg')"
          ></div>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="163.333px"
            height="267.047px"
            viewBox="218.167 106.476 163.333 267.047"
            enable-background="new 218.167 106.476 163.333 267.047"
            xml:space="preserve"
            class="homepage-hero-graphic-separator"
          >
            <path
              fill="#326D62"
              d="M220.001,290c0,29.971,6.949,58.314,19.308,83.523C320.334,351.809,380,277.877,380,190
	c0-29.97-6.949-58.314-19.309-83.524C279.666,128.192,220.001,202.123,220.001,290z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero {
  background-color: $athens-gray;
  padding: 20px 0;

  overflow: hidden;

  @include breakpoint('lg') {
    height: 360px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .left {
      flex: 1;

      h2 {
        color: $casal;
      }

      button {
        margin-top: rem(20);
      }
    }
    .right {
      flex: 1;

      // copied and pasted
      .homepage-hero-graphic-wrapper {
        transform: scale(0.8);
        margin-top: -70px;
        height: 480px;
        width: 600px;
        flex-shrink: 0;
        position: relative;
        margin-right: -50px;
      }

      .homepage-hero-graphic {
        height: 380px;
        width: 380px;
        border-radius: 50%;
        background-size: cover;
        position: absolute;
      }

      .homepage-hero-graphic-1 {
        top: 0;
        left: 0;
        box-shadow: 0 1px 2px 0 rgb(64 60 67 / 30%);
        border: 1px solid $casal;
      }

      .homepage-hero-graphic-2 {
        bottom: 0;
        right: 0;
        box-shadow: 0 1px 2px 0 rgb(64 60 67 / 30%);
        border: 1px solid $casal;
      }

      .homepage-hero-graphic-separator {
        position: absolute;
        left: 135px;
        top: -27px;
        transform: translate(50%, 50%);
      }
    }
  }
}
</style>
