import { boot } from 'quasar/wrappers'
// import { defineComponent } from 'vue'
import lkComponent from 'components/lkComponent.vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // const { $likhaAPI, $qs } = app.config.globalProperties
  app.component('lk-component', lkComponent)
  // something to do
  // const customComponents = [
  //   'q-btn'
  // ]
  // app.config.compilerOptions.isCustomElement = (tag) => customComponents.includes(tag)
})
