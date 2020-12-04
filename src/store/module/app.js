import {
  getBreadCrumbList,
  setTagNavListInLocalstorage,
  getMenuByRouter,
  getTagNavListFromLocalstorage,
  getHomeRoute,
  getNextRoute,
  routeHasExist,
  routeEqual,
  getRouteTitleHandled
} from '@/libs/util'
import router from '@/router'
import routers from '@/router/routers'
import config from '@/config'
const { homeName } = config

const closePage = (state, route) => {
  const nextRoute = getNextRoute(state.tagNavList, route)
  state.tagNavList = state.tagNavList.filter(item => {
    return !routeEqual(item, route)
  })
  router.push(nextRoute)
}

export default {
  state: {
    breadCrumbList: [],
    tagNavList: [],
    homeRoute: {},
    collapsed_: String,
    spinShow_: false
  },
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access)
  },
  mutations: {
    setBreadCrumb(state, route) {
      state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
    },
    setHomeRoute(state, routes) {
      state.homeRoute = getHomeRoute(routes, homeName)
    },
    setTagNavList(state, list) {
      let tagList = []
      if (list) {
        tagList = [...list]
      } else tagList = getTagNavListFromLocalstorage() || []
      if (tagList[0] && tagList[0].name !== homeName) tagList.shift()
      let homeTagIndex = tagList.findIndex(item => item.name === homeName)
      if (homeTagIndex > 0) {
        let homeTag = tagList.splice(homeTagIndex, 1)[0]
        tagList.unshift(homeTag)
      }
      state.tagNavList = tagList
      setTagNavListInLocalstorage([...tagList])
    },
    closeTag(state, route) {
      let tag = state.tagNavList.filter(item => routeEqual(item, route))
      route = tag[0] ? tag[0] : null
      if (!route) return
      closePage(state, route)
    },
    addTag(state, { route, type = 'unshift' }) {
      let router = getRouteTitleHandled(route)
      if (!routeHasExist(state.tagNavList, router)) {
        if (type === 'push') state.tagNavList.push(router)
        else {
          if (router.name === homeName) state.tagNavList.unshift(router)
          else state.tagNavList.splice(1, 0, router)
        }
        setTagNavListInLocalstorage([...state.tagNavList])
      }
    },
    setCollapsed_(state, payload) {
      state.collapsed_ = payload
    },
    setspinShow_(state, payload) {
      // 因跳转速度过快  延迟半秒钟关闭遮罩
      if (!payload) {
        setTimeout(() => {
          state.spinShow_ = payload
        }, 500);
      } else {
        state.spinShow_ = payload
      }
    },
  },
  actions: {
    // 获取当前时间
    getCurrentDate({ state, commit }, index) {
      return new Promise((resolve, reject) => {
        try {
          var timeStr = '-'
          var curDate = new Date()
          var curYear = curDate.getFullYear() // 获取完整的年份(4位,xxxx-????)
          var curMonth = curDate.getMonth() + 1 // 获取当前月份(0-11,0代表1月)
          if (curMonth < 10) {
            curMonth = '0' + curMonth
          }
          var curDay = curDate.getDate() // 获取当前日(1-31)
          if (curDay < 10) {
            curDay = '0' + curDay
          }
          var curWeekDay = curDate.getDay() // 获取当前星期X(0-6,0代表星期天)
          if (curWeekDay == 0) {
            curWeekDay = '7'
          }
          var curHour = curDate.getHours() // 获取当前小时数(0-23)
          if (curHour < 10) {
            curHour = '0' + curHour
          }
          var curMinute = curDate.getMinutes() // 获取当前分钟数(0-59)
          if (curMinute < 10) {
            curMinute = '0' + curMinute
          }
          var curSec = curDate.getSeconds() // 获取当前秒数(0-59)
          if (curSec < 10) {
            curSec = '0' + curSec
          }
          var Current1 = curYear + timeStr + curMonth + timeStr + curDay
          var Current2 = curYear + timeStr + curMonth + timeStr + curDay + ' ' + curHour
          var Current3 = curYear + timeStr + curMonth + timeStr + curDay + ' ' + curHour + ':' + curMinute
          var Current4 = curYear + timeStr + curMonth + timeStr + curDay + ' ' + curHour + ':' + curMinute + ':' + curSec
          if (index == 1) {
            resolve(Current1)
          } else if (index == 2) {
            resolve(Current2)
          } else if (index == 3) {
            resolve(Current3)
          } else if (index == 4) {
            resolve(Current4)
          }
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
