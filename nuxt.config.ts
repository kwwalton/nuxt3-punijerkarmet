import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    // CSS files
    '@/assets/css/reset.css',
    // SCSS file in the project root
    '@/assets/scss/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/variables.scss";\n
            @import "@/assets/scss/utilities.scss";\n
            @import "@/assets/scss/media-queries.scss";\n`
        }
      }
    }
  },
  vue: {
    compilerOptions: {
      directiveTransforms: {
        clickOutside: () => ({
          props: [],
          needRuntime: true
        })
      }
    }
  }
})
