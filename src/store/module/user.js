import { setToken, getToken } from '@/libs/util'
import axios from 'axios'
import Qs from 'qs'
export default {
  state: {
    userName: '',
    userId: '',
    avatarImgPath: '',
    token: getToken(),
    Vuex_test1: 'Vuex数据',
    // 储存未处理时的路由
    menuListData: [],
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
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    updated_Vuex_test1(state, name) {
      state.Vuex_test1 = name
    },
    setMenuListData(state, list) {
      state.menuListData = list
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
          // url: '/logout',
          url: '/api/logout',
          method: 'post'
        }).then(() => {
          commit("setspinShow_", true)
          localStorage.removeItem("tagNaveList");
          commit('setToken', '')
          commit('setAvatar', '')
          commit('setUserId', '')
          commit('setUserName', '')
          commit('setMenuListData', [])
          resolve()
        }).catch(err => {
          commit("setspinShow_", true)
          localStorage.removeItem("tagNaveList");
          commit('setToken', '')
          commit('setAvatar', '')
          commit('setUserId', '')
          commit('setUserName', '')
          commit('setMenuListData', [])
          reject()
        })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo({ state, commit }, val) {
      return new Promise((resolve, reject) => {
        axios({
          url: val.HttpApi + '/login',
          method: 'post',
          data: val,
          // data: Qs.stringify(val),
        }).then(res => {
          // ~判断状态码后再加入缓存
          // 用户头像
          commit('setAvatar', res.data.avatar)
          // 用户ID
          commit('setUserId', res.data.user_id)
          // 用户名
          commit('setUserName', res.data.name)
          commit('setToken', res.data.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 服务器是否在线
    getifInline({ state, commit }) {
      return new Promise((resolve, reject) => {
        axios({
          // url: '/ifInline',
          url: '/api/ifInline',
          method: 'post',
        }).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
