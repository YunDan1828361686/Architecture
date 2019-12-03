import Vue from 'vue'
import Vuex from 'vuex'

import app from './module/app'
import user from './module/user'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    app,
    user,
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer(val) { // 如果只想持久化某几个模块中的数据
      return {
        app: val.app,
        user: val.user
      }
    }
  })]
})
