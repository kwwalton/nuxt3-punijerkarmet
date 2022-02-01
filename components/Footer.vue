<template>
  <footer>
    <div class="footer-upper">
      <div class="container">
        <div>
          <h6>customer support</h6>
          <NuxtLinkList :list="customerSupportMenu" />
        </div>
        <div>
          <h6>grower's library</h6>
          <NuxtLinkList :list="growersLibraryMenu" />
        </div>
        <div>
          <nuxt-link to="/" class="logo-link">
            <Logo />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="footer-lower">
      <div class="container">
        <div class="footer-lower__left">
          Not Copyrighted &copy; 2021 Nuxt 3 and Composition API practice.
        </div>
        <div class="footer-lower__right">
          <ul class="footer-lower__right-list">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Do Not Sell My Information</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const customerSupportMenu = reactive([
  {
    name: 'contact us',
    url: '/contact-us'
  },
  {
    name: 'satisfaction guarantee',
    url: '/satisfaction-guarantee'
  },
  {
    name: 'shipping',
    url: '/shipping'
  },
  {
    name: 'returns and refunds',
    url: '/returns-refunds'
  },
  {
    name: 'FAQ',
    url: '/faq'
  }
])

const growersLibraryMenu = reactive([
  {
    name: 'vegetable growing resources',
    url: '/vegeteable-growing-resources'
  },
  {
    name: 'instructional videos',
    url: '/instructional-videos'
  },
  {
    name: 'planning tools and calculators',
    url: '/planning-tools-and-calculators'
  },
  {
    name: 'hardiness zones',
    url: '/hardiness-zones'
  },
  {
    name: 'ask a grower',
    url: '/ask-a-grower'
  }
])
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  //background-color: $athens-gray;
  border-top: 1px solid $mercury;

  .footer-upper {
    .container {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding-top: 20px;
      padding-bottom: 20px;

      @include breakpoint('lg') {
        flex-direction: row;
      }

      div {
        flex: 1;

        &:last-child {
          flex: 1;
          display: flex;

          @include breakpoint('lg') {
            justify-content: flex-end;
          }
        }
      }
    }
  }

  .footer-lower {
    background-color: $casal;
    color: $white;
    font-size: rem(14);
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;

    @include breakpoint('lg') {
      padding-top: 10px;
    }

    .container {
      display: flex;
      flex-direction: column;

      @include breakpoint('lg') {
        flex-direction: row;
      }
    }

    &__left {
      flex: 1;
    }
    &__right {
      flex: 1;
      margin-top: 20px;

      @include breakpoint('lg') {
        margin-top: 0;
      }

      ul {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;

        @include breakpoint('lg') {
          flex-direction: row;
        }

        li {
          margin-bottom: 10px;
          @include breakpoint('lg') {
            margin-bottom: 0;
          }
        }

        li:not(:first-child) {
          @include breakpoint('lg') {
            margin-left: 10px;
          }
        }

        a {
          color: $white;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .logo-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    @include breakpoint('lg') {
      margin-bottom: 0;
    }

    &:hover {
      text-decoration: underline;
      color: $casal;
    }
  }

  ::v-deep(ul.nuxt-link-list) {
    margin-right: -20px;
    margin-bottom: 20px;

    @include breakpoint('lg') {
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
}
</style>
