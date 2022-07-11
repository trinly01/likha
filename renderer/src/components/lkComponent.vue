<template>
  <component ref="refComp" :is="cmpt" v-bind="props"  />
</template>
<script>
/* eslint-disable no-new-func */
import { defineComponent, getCurrentInstance, ref } from 'vue'
import { useRoute } from 'vue-router'

// import { JSDOM } from 'jsdom'
// const document = new JSDOM('<!DOCTYPE html><p>Hello world</p>').window.document

// console.log('getCurrentInstance()', getCurrentInstance())

export default defineComponent({
  name: 'LkComponent',
  el: 'div',
  props: {
    name: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      default: () => ({})
    },
    class: [Object, String]
  },
  async setup (props) {
    const lkComponent = getCurrentInstance()
    const { $likhaAPI, $qs } = lkComponent.appContext.config.globalProperties
    const refComp = ref(null)

    const $route = useRoute()

    console.log('propsPogi', props)

    const query = $qs.stringify({
      filters: {
        name: {
          $eq: props.name
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

    try {
      const comp = (await $likhaAPI.get('/components?' + query)).data.data[0].attributes
      console.log('props.name', $route.path, comp)

      let env = $route.path.split('/')[1].split('-')[0]
      switch (env) {
        case 'dev':
          break
        case 'staging':
          break
        default:
          env = ''
          break
      }
      const Env = env.charAt(0).toUpperCase() + env.slice(1)
      console.log('env', Env, comp['data' + Env])

      const addReturnIfNeeded = str => {
        if (typeof str !== 'string') return 'return ' + str
        const firstToken = str.split(/\b\s+/)[0]
        if (firstToken.includes('return')) return str
        return 'return ' + str
      }

      const cmptStructure = {
        name: comp.name,
        template: `<div component="${comp.name}">${comp['template' + Env]}</div>`,
        props: (new Function(addReturnIfNeeded(comp['props' + Env])))(),
        emits: (new Function(addReturnIfNeeded(comp['emits' + Env])))(),
        data: (new Function(addReturnIfNeeded(comp['data' + Env]))),
        computed: (new Function(addReturnIfNeeded(comp['computed' + Env])))(),
        methods: (new Function(addReturnIfNeeded(comp['methods' + Env])))(),
        ...(new Function(addReturnIfNeeded(comp['lifeCycleEvents' + Env])))()
      }

      // console.log('lkComponent', lkComponent)

      const style = ref(comp['style' + Env])

      console.log('cmptStructure', cmptStructure)

      const cmpt = defineComponent(cmptStructure)

      console.log('cmpt', cmpt)

      console.log('process.env.CLIENT', process.env.CLIENT)

      return {
        refComp,
        cmpt,
        style
      }
    } catch (error) {
      let env = $route.path.split('/')[1].split('-')[0]
      switch (env) {
        case 'dev':
          break
        case 'staging':
          break
        default:
          env = ''
          break
      }
      const Env = env.charAt(0).toUpperCase() + env.slice(1)
      console.error('Component Error:', props.name)
      console.error('Env:', Env || 'Prod')
      console.error(error)
      return {
        refComp,
        cmpt: defineComponent({
          data: () => ({
            component: `<${props.name} />`
          }),
          template: '<div class="bg-red">{{component}}</div>',
          mounted () {

          }
        }),
        style: ''
      }
    }
  },
  mounted () {
    console.log('refComp', this.$refs.refComp)
    console.log('style', this.style)
    if (process.env.CLIENT) {
      const style = this.style
      const styleComp = document.createElement('style')
      styleComp.type = 'text/css'
      styleComp.setAttributeNode(document.createAttribute('scopped'))
      styleComp.setAttributeNode(document.createAttribute('scoped'))
      styleComp.appendChild(document.createTextNode(style))
      console.log('this.$refs.refComp', this.$refs.refComp)
      this.$refs.refComp.$el.appendChild(styleComp)
      console.log('this.$refs.refComp.$el', this.$refs.refComp.$el)

      // const env = this.$route.path.split('/')[1].split('-')[0]
      // const Env = env.charAt(0).toUpperCase() + env.slice(1)
      // console.log('env', Env)

      if (window.parent) {
        const getHeight = () => {
          const body = document.body,
            html = document.documentElement

          const height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight)

          let env = this.$route.path.split('/')[1].split('-')[0]
          switch (env) {
            case 'dev':
              break
            case 'staging':
              break
            default:
              env = ''
              break
          }

          return {
            height,
            name: this.name,
            env
          }
        }

        window.parent.postMessage(getHeight(), '*')
        console.log('getHeight()', getHeight())
        const observer = new ResizeObserver((entries) => {
          for (const entry of entries) {
            window.parent.postMessage(getHeight(entry), '*')
          }
        })

        observer.observe(document.body)
      }
    }
  }
})
</script>

<!--
  template

name --
props --
emits --

data --
computed --
watch --

methods --

Life cycle events
- beforeMount
- mounted

css
 -->
