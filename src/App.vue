<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Layout from './components/Layout/index.vue'

export default {
  name: 'App',
  components: {
    Layout
  },
  setup() {
    const route = useRoute()
    
    // 不需要布局的页面（登录、注册）
    const noLayoutPages = ['/login', '/register']
    const needLayout = computed(() => !noLayoutPages.includes(route.path))
    
    return {
      needLayout
    }
  }
}
</script>

<template>
  <Layout v-if="needLayout" />
  <router-view v-else />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

#app {
  width: 100%;
  height: 100vh;
}
</style>
