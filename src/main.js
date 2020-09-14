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

// 封装 请求函数
import $http from '@/api'
Vue.prototype.$http = $http

// 自定义表单 插件
// import FormMaking from 'form-making'
// import 'form-making/dist/FormMaking.css'
// Vue.use(FormMaking)

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
