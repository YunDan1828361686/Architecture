import { setToken, getToken } from '@/libs/util'
import axios from 'axios'
export default {
  state: {
    userName: '',
    userId: '',
    avatarImgPath: '',
    token: getToken(),
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setAvatar (state, avatarPath) {
      state.avatarImgPath = avatarPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  getters: {
  },
  actions: {
    // 退出登录
    handleLogOut ({ state, commit }) {
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
    getUserInfo ({ state, commit }, token) {
      const USER = {
        super_admin: {
          name: 'super_admin',
          user_id: '1',
          access: ['super_admin', 'admin'],
          token: 'super_admin',
          avatar: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
        },
        admin: {
          name: 'admin',
          user_id: '2',
          access: ['admin'],
          token: 'admin',
          avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
        }
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            let data = USER[token]
            commit('setAvatar', data.avatar)
            commit('setUserName', data.name)
            commit('setUserId', data.user_id)
            commit('setAccess', data.access)
            commit('setHasGetInfo', true)
            resolve(data)
          } catch (error) {
            reject(error)
          }
        }, 2000)
      })
    }
  }
}
