<template>
  <router-view v-slot="{ Component }">
    <suspense>
      <div>
        <component :is="Component" />
      </div>
    </suspense>
  </router-view>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
