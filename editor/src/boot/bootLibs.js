/* eslint-disable new-cap */
import { boot } from 'quasar/wrappers'
import { debounce } from 'quasar'
import likhaEditor from 'components/likhaEditor.vue'
import likhaIframe from 'components/likhaIframe.vue'
import draggable from 'vuedraggable'

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import JSON5 from 'json5'

// import Shell from 'shell.js'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.component('likha-editor', likhaEditor)
  app.component('likha-iframe', likhaIframe)
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('draggable', draggable)
  app.component(Splitpanes.name, Splitpanes)
  app.component(Pane.name, Pane)

  app.config.globalProperties.$debounce = debounce
  app.config.globalProperties.$JSON5 = JSON5
})
