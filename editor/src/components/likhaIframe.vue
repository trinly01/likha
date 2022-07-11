<template>
    <div class="column"
      :class="{
        border: showToolbar // ? '2px solid #1976d2 !important' : '',
      }"
      @mouseover="showToolbar = true"
      @mouseleave="showToolbar = false"
    >
      <iframe ref="iframeDev" :height="height" style="border:none;"
        v-if="env === '/dev-env'"
        class="shadow-transition"
        :class="{
          'shadow-24': showToolbar
        }"
        :src="$previewHost + env + '/lk-preview/' + component.name" frameborder="0"></iframe>
      <iframe ref="iframeStaging" :height="height" style="border:none;"
        v-else-if="env === '/staging-env'"
        class="shadow-transition"
        :class="{
          'shadow-24': showToolbar
        }"
        :src="$previewHost + env + '/lk-preview/' + component.name" frameborder="0"></iframe>
      <iframe ref="iframe" :height="height" style="border:none;"
        v-else
        class="shadow-transition"
        :class="{
          'shadow-24': showToolbar
        }"
        :src="$previewHost + env + '/lk-preview/' + component.name" frameborder="0"></iframe>
      <!-- <div v-show="showToolbar" class="absolute">header</div> -->
      <q-bar v-show="component.name && (showToolbar || dragging)" dark class="handle bg-dark text-white absolute"
        style="width: calc(100% - 300px) !important;"
      >
        <!-- <q-icon name="laptop_chromebook" /> -->
        <q-btn dense flat icon="settings" />
        <div>
          {{ component.name }} {{component.order}}
        </div>

        <q-space />
        <q-btn dense flat icon="settings" />
        <q-btn dense flat icon="delete" @click="$emit('remove', component.name, component.order)" />
      </q-bar>
    </div>
</template>

<script>

export default {
  props: ['component', 'dragging', 'env'],
  emits: ['remove'],
  watch: {
    async env (newEnv, oldEnv) {
      await this.$nextTick()
      this.height = 0
      await this.$nextTick()
    }
  },
  unmounted () {
    window.removeEventListener('message', this.listener)
  },
  async beforeMount () {
    this.listener = async (event) => {
      if (event.data.height && event.data.name === this.component.name) {
        console.log('message', event.data)
        console.log('this.$refs', this.$refs)

        switch (event.data.env) {
          case 'dev':
            this.$refs.iframeDev.style.height = event.data.height + 'px'
            this.$refs.iframeDev.height = event.data.height
            break
          case 'staging':
            this.$refs.iframeStaging.style.height = event.data.height + 'px'
            this.$refs.iframeStaging.height = event.data.height
            break
          default:
            this.$refs.iframe.style.height = event.data.height + 'px'
            this.$refs.iframe.height = event.data.height
            break
        }
        this.height = event.data.height
        // console.log('height changed', this.$refs.iframe.height)
      }
    }
    window.addEventListener('message', this.listener)
  },
  data () {
    return {
      showToolbar: false,
      height: 0
    }
  }
}
</script>

<style>
iframe {
  margin: 0;
  padding: 0;
  border: 0;
}

.handle {
  cursor: move; /* fallback if grab cursor is unsupported */
  /* cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab; */
}

/* .handle:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
} */

.border {
  border: 1px solid rgba(255, 0, 0, .5);
    -webkit-background-clip: padding-box; /* for Safari */
    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
}
</style>
