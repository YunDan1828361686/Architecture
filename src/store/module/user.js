import { setToken, getToken } from '@/libs/util'
import axios from 'axios'
export default {
  state: {
    userName: '',
    userId: '',
    avatarImgPath: '',
    token: getToken(),
    access: '',
    hasGetInfo: false,
    Vuex_test1: 'Vuex数据'
  },
  mutations: {
    setAvatar(state, avatarPath) {
      state.avatarImgPath = avatarPath
    },
    setUserId(state, id) {
      state.userId = id
    },
    setUserName(state, name) {
      state.userName = name
    },
    setAccess(state, access) {
      state.access = access
    },
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo(state, status) {
      state.hasGetInfo = status
    },
    updated_Vuex_test1(state, name) {
      state.Vuex_test1 = name
    },
  },
  getters: {
    Vuex_test2(state, getters) {
      return "getters+" + state.Vuex_test1
    }
  },
  actions: {
    // 退出登录
    handleLogOut({ state, commit }) {
      return new Promise((resolve, reject) => {
        axios({
          url: 'api/logout',
          method: 'post'
        }).then(() => {
          commit('setToken', '')
          commit('setAccess', [])
          resolve()
        }).catch(err => {
          reject(err)
        })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo({ state, commit }, val) {
      return new Promise((resolve, reject) => {
        axios({
          url: 'api/login',
          method: 'post',
          data: val
        }).then(res => {
          // 判断状态码后再加入缓存
          commit('setAvatar', res.data.avatar)
          commit('setUserId', res.data.user_id)
          commit('setUserName', res.data.name)
          commit('setAccess', res.data.access)
          commit('setToken', res.data.token)
          commit('setHasGetInfo', true)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
