import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'view-design'
import { getToken, canTurnTo, setTitle } from '@/libs/util'
import config from '@/config'
const { homeName } = config

Vue.use(Router)
// 左键点击tab报错
// cnpm i vue-router@3.0 -S
// 此方法也行但是首页还是会存在些许问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes,
  mode: 'hash'
})
const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
  else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
}

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  // 路由跳转修改vuex为true，监听并打开全局logo遮罩
  // store.commit("setspinShow_", true)
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    store.dispatch("handleLogOut").then(() => {
      setTimeout(() => {
        next({
          name: LOGIN_PAGE_NAME // 跳转到登录页
        })
      }, 300);
      iView.Message["warning"]({
        background: true,
        content: "当前登录状态已失效！",
        duration: 3,
      });
    }).catch(() => {
      next({
        name: LOGIN_PAGE_NAME // 跳转到登录页
      })
      iView.Message["warning"]({
        background: true,
        content: "服务器连接超时，请联系管理员！！",
        duration: 3,
      });
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    })
  } else {
    // 判断服务器上此token是否处于登录状态
    store.dispatch("getifInline").then((res) => {
      // 判断是否拥有页面权限
      turnTo(to, store.state.user.access, next)
    }).catch(() => {
      iView.Message["warning"]({
        background: true,
        content: "当前登录状态已失效！",
        duration: 3,
      });
      localStorage.removeItem("tagNaveList");
      store.commit('setToken', '')
      store.commit('setAccess', [])
      store.commit('setAvatar', '')
      store.commit('setUserId', '')
      store.commit('setUserName', '')
      store.commit('setHasGetInfo', true)
      setTimeout(() => {
        location.reload();
      }, 300);
    })
  }
})

router.afterEach(to => {
  // 路由跳转修改vuex为false，监听并关闭全局logo遮罩
  // store.commit("setspinShow_", false)
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
