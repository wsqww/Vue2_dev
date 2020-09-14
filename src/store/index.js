import Vue from 'vue'
import Vuex from 'vuex'


import user from '@/store/modules/user'
import nav from '@/store/modules/nav'
import toolsPage from '@/store/modules/toolsPage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    nav,
    toolsPage
  }
})
