<template>
  <div class="col bg-grey window-height">
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>

      <q-toolbar-title>
        <q-select
          ref="qSelect"
          dark
          filled
          v-model="componentName"
          :options="components"
          use-input
          hide-selected
          fill-input
          :loading="loading"
          @filter="filterComponents"
          @input-value="getComponents"
          style="max-width: 300px;"
          @update:model-value="(val) => {
            getComponent(val)
            $refs.qSelect.blur()
            $updateURL('/component-editor/' + val)
            getComponents()
          }"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-toolbar-title>

      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
    <div class="row bg-pink" style="height: calc(100vh - 56px); max-height: calc(100vh - 56px);">
      <splitpanes class="default-theme">
        <pane min-size="20">
          <splitpanes horizontal>
            <pane min-size="20">
              <!-- {{ component.id }} -->
              <likha-editor v-if="code1.length" :modelValue="code1" height="100%" :component="component" @saved="reloadPreview()" />
            </pane>
            <pane min-size="20">
              <!-- {{component}} -->
              <likha-editor v-if="code2.length" :modelValue="code2" height="100%" :component="component" @saved="reloadPreview()" />
            </pane>
          </splitpanes>
        </pane>
        <pane min-size="20">
          <splitpanes horizontal>
            <pane min-size="20" size="30">
              <likha-editor v-if="code3.length" :modelValue="code3" height="100%" :component="component" @saved="reloadPreview()" />
            </pane>
            <pane min-size="20" class="bg-dark">
              <q-input dark dense v-model="query" label="query params" />
              <!-- <div class="text-white"> {{ '/dev-env/lk-preview/' + component.name + '?' + query }} </div> -->
              <iframe v-if="component" ref="iframe" :src="$previewHost + '/dev-env/lk-preview/' + component.name + '?' + query" class="fit bg-white" frameborder="0"></iframe>
            </pane>
          </splitpanes>
        </pane>
      </splitpanes>
      <!-- <div class="col">
        <likha-editor height="calc((100vh - 56px)/2);" resize="vertical" />
        <likha-editor height="calc((100vh - 56px)/2);" resize="vertical" />
      </div> -->
      <!-- <div style="overflow: auto; height: 100%; resize:horizontal" :style="{ width }" ref="editor"></div> -->
      <!-- <div class="col">{{ width }}</div> -->
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
// const likhaEditor = import('components/likhaEditor.vue')

export default defineComponent({
  components: {
    // likhaEditor
  },
  unmounted () {
    this.debounce.cancel()
  },
  async beforeMount () {
    const { name } = this.$route.params
    await this.getComponent(name)
    this.getComponents()
    // const { id, attributes } = (await this.$likhaAPI.get('/components?' + query)).data
    // this.components = await this.$likhaAPI.get('/components?' + query)).data
  },
  data: () => ({
    loading: true,
    width: '50%',
    component: null,
    componentName: '',
    code1: [],
    code2: [],
    code3: [],
    components: ['asd', 'qwe'],
    code: '{}',
    query: ''
  }),
  methods: {
    async getComponents (name) {
      this.loading = true
      const filters = {}
      if (name) {
        filters.$or = [
          {
            name: { $containsi: name }
          },
          {
            templateDev: { $containsi: name }
          },
          {
            templateStaging: { $containsi: name }
          },
          {
            template: { $containsi: name }
          }
        ]
      }
      const query = this.$qs.stringify({
        filters,
        sort: ['name:desc'],
        pagination: {
          start: 0,
          limit: 10
        }
      })
      this.debounce = this.$debounce(async () => {
        this.components = (await this.$likhaAPI.get('/components?' + query)).data.data.map(c => c.attributes.name)
        console.log('getComponents', this.components)
      }, 1250)
      this.debounce()
      this.loading = false
    },
    async getComponent (name) {
      this.component = null
      this.code1 = []
      this.code2 = []
      this.code3 = []
      this.loading = true
      if (name) {
        const query = this.$qs.stringify({
          filters: {
            name: {
              $eq: name
            }
          },
          populate: ['components'],
          pagination: {
            start: 0,
            limit: 10
          }
        }, {
          encodeValuesOnly: true
        })
        const { id, attributes } = (await this.$likhaAPI.get('/components?' + query)).data.data[0]
        const comp = this.component = { id, ...attributes }
        this.componentName = comp.name
        console.log('Code Component', this.component)

        const getLangByProp = (key) => {
          switch (key) {
            case 'template':
              return 'html'
            case 'style':
              return 'css'
            default:
              return 'javascript'
          }
        }
        const Env = 'Dev'
        const getByProps = (keys) => keys.map(key => ({
          prop: key,
          value: comp[key + Env] || '',
          language: getLangByProp(key)
        }))

        this.code1 = getByProps(['template', 'data'])
        console.log('this.code1', this.code1)
        this.code2 = getByProps(['methods', 'computed', 'lifeCycleEvents'])
        console.log('this.code2', this.code2)
        this.code3 = getByProps(['props', 'emits', 'style'])
      }
      this.loading = false
    },
    reloadPreview () {
      console.log('iframe this.$refs', this.$refs)
      const previousPage = this.$refs.iframe.src
      this.$refs.iframe.src = ''
      this.$refs.iframe.src = previousPage
    },
    filterComponents (val, update, abort) {
      // update(() => {
      //   const needle = val.toLocaleLowerCase()
      //   this.components = this.components.filter(v => v.toLocaleLowerCase().indexOf(needle) > -1)
      // })
      update(() => {
        // this.components = this.components
      })
    }
  }
})
</script>

<style>
.splitpanes--vertical > .splitpanes__splitter {
  border: 0px !important;
  background-color: var(--q-primary) !important;
}

.splitpanes--horizontal > .splitpanes__splitter {
  border: 0px !important;
  background-color: var(--q-primary) !important;
}

.shell__status-bar {
  display: none !important;
}
</style>
