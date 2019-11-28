// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 4.x
import iView from 'view-design'
// import style
import 'view-design/dist/styles/iview.css'
import TreeTable from 'tree-table-vue'
import config from '@/config'
import { directive as clickOutside } from 'v-click-outside-x'
import './index.less'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
import Qs from 'qs'

// 警告Added non-passive event listener to a scroll-blocking 'mousewheel' event.
// cnpm i default-passive-events -S
// import 'default-passive-events'
// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView)
Vue.use(VOrgTree)
Vue.use(TreeTable)

Vue.prototype.$Qs = Qs
/**
 * @description 注册admin内置插件
 */
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
Vue.directive('clickOutside', clickOutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
