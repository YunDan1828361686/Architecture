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
// 报错TypeError: Cannot read property 'clickRow' of undefined
// 找到tree-table-vue.js文件  1547行替换为
// return _this2.handleEvent($event, 'row', { row: row, rowIndex: rowIndex }, { clickRow: true });
import TreeTable from 'tree-table-vue'
import config from '@/config'
import { directive as clickOutside } from 'v-click-outside-x'
import './index.less'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
import Qs from 'qs'
import axios from 'axios'

// 警告Added non-passive event listener to a scroll-blocking 'mousewheel' event.
// cnpm i default-passive-events -S
// import 'default-passive-events'

Vue.use(iView)
Vue.use(VOrgTree)
Vue.use(TreeTable)

Vue.prototype.$Qs = Qs
Vue.prototype.$axios = function (url, method, data) {
  return new Promise(function (resolve, reject) {
    axios({ 'url': '/api' + url, method, data }).then(function (response) { resolve(response) }).catch(function (err) { reject(err) })
  })
}
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
