import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
import './router/guard'

// 重置 样式
import '@/style/reset.css'

// elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 代码 高亮
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/monokai-sublime.css'
Vue.use(VueHighlightJS)

// 去除警告
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
