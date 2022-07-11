/* eslint-disable no-new-func */
import { boot } from 'quasar/wrappers'
import { defineComponent } from 'vue'
import { orderBy } from 'lodash'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router }) => {
  // something to do
  const { $likhaAPI, $qs } = app.config.globalProperties

  const query = $qs.stringify({
    populate: ['component']
  }, {
    encodeValuesOnly: true
  })

  const routes = (await $likhaAPI.get('/pages?' + query)).data.data.map((p) => {
    const { name, path, components } = p.attributes

    const component = defineComponent({
      name: 'lk-' + name + '-page',
      data: () => ({
        components: orderBy((new Function('return ' + components))(), ['index'], ['asc'])
      }),
      mounted () {
        console.log('page components', this.components)
      },
      template: `
        <div>
          <lk-component  v-for="(c, i) in components" :key="c.name+'-'+i" :name="c.name" :class="c.class" :props="c.props" />
        </div>
      `
    })

    const r = {
      path,
      name: path,
      component
    }
    const rStaging = {
      path: '/staging-env' + path,
      name: '/staging-env' + path,
      component
    }
    const rDev = {
      path: '/dev-env' + path,
      name: '/dev-env' + path,
      component
    }

    router.addRoute(r)
    router.addRoute(rStaging)
    router.addRoute(rDev)

    return r
  })
  console.log('routes', routes)
  // router

  // PREVIEW

  const component = defineComponent({
    name: 'lk-preview',
    mounted () {
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
      const Env = env.charAt(0).toUpperCase() + env.slice(1)
      console.log('lk-preview ' + Env, this.$route.params.name)
    },
    template: `
      <div>
        <lk-component :name="$route.params.name" />
      </div>
    `
  })

  const path = '/lk-preview/:name'

  const r = {
    path,
    name: path,
    component
  }
  const rStaging = {
    path: '/staging-env' + path,
    name: '/staging-env' + path,
    component
  }
  const rDev = {
    path: '/dev-env' + path,
    name: '/dev-env' + path,
    component
  }

  router.addRoute(r)
  router.addRoute(rStaging)
  router.addRoute(rDev)
})
