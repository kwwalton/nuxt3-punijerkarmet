import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const clickOutside = {
    beforeMount: (el, binding) => {
      el.clickOutsideEvent = (event) => {
        // here I check that click was outside the el and his children
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          console.log('click outside')
          binding.value()
        }
      }
      document.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted: (el) => {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  }
  nuxtApp.vueApp.directive('click-outside', clickOutside)
})
