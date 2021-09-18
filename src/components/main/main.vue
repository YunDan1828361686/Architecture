<template>
  <Layout style="height: 100%" class="main">
    <Sider
      collapsible
      :width="200"
      :collapsed-width="64"
      v-model="collapsed"
      class="left-sider"
      :style="{ overflow: 'hidden' }"
    >
      <side-menu
        accordion
        ref="sideMenu"
        :active-name="$route.name"
        :collapsed="collapsed"
        @on-select="turnToPage"
        :menu-list="menuList"
      >
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <div class="logo-con">
          <img
            v-show="!collapsed"
            :src="maxLogo"
            key="max-logo"
            style="height: 80%"
          />
          <img
            v-show="collapsed"
            :src="minLogo"
            key="min-logo"
            style="height: 60%"
          />
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <header-bar
          :collapsed="collapsed"
          @on-coll-change="handleCollapsedChange"
        >
          <user
            :message-unread-count="unreadCount"
            :user-avatar="userAvatar"
            :user-name="userName"
          />
          <fullscreen v-model="isFullscreen" style="margin-right: 10px" />
          <Refresh
            style="margin-right: 10px"
            @refresh_loading="refresh_loading"
          />
        </header-bar>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <div class="tag-nav-wrapper">
            <tags-nav
              :value="$route"
              @input="handleClick"
              :list="tagNavList"
              @on-close="handleCloseTag"
            />
          </div>
          <Content class="content-wrapper">
            <!-- <router-view :key="$route.fullPath" /> -->
            <div id="router_box">
              <transition
                name="fade-transform"
                mode="out-in"
                v-on:enter="enter"
              >
                <keep-alive :include="cacheList">
                  <router-view />
                </keep-alive>
              </transition>
            </div>
            <transition name="slide-fade">
              <Spin id="Spin_router" size="large" fix v-if="spinShow">
                <img :src="maxLogo" alt />
              </Spin>
            </transition>
            <ABackTop
              :height="100"
              :bottom="80"
              :right="50"
              container=".content-wrapper"
            ></ABackTop>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SideMenu from './components/side-menu'
import HeaderBar from './components/header-bar'
import TagsNav from './components/tags-nav'
import User from './components/user'
import ABackTop from './components/a-back-top'
import Fullscreen from './components/fullscreen'
import Refresh from './components/Refresh'
import { mapMutations, mapActions } from 'vuex'
import { getNewTagList, routeEqual } from '@/libs/util'
import routers from '@/router/routers'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import { on, off } from '@/libs/tools'
import { _debounce } from '@/libs/Perform_optimization.js'
import './main.less'
export default {
  name: 'Main',
  components: {
    SideMenu,
    HeaderBar,
    TagsNav,
    Refresh,
    Fullscreen,
    User,
    ABackTop
  },
  data () {
    return {
      spinShow: false,
      collapsed: false,
      minLogo,
      maxLogo,
      isFullscreen: false,
      now_padding: ''
    }
  },
  computed: {
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
    tagRouter () {
      return this.$store.state.app.tagRouter
    },
    userAvatar () {
      return this.$store.state.user.avatarImgPath
    },
    userName () {
      return this.$store.state.user.userName
    },
    cacheList () {
      const list = [
        'ParentView',
        ...(this.tagNavList.length
          ? this.tagNavList
            .filter(item => !(item.meta && item.meta.notCache))
            .map(item => item.name)
          : [])
      ]
      return list
    },
    menuList () {
      return this.$store.getters.menuList
    },
    unreadCount () {
      return this.$store.state.user.unreadCount
    },
    collapsed_ () {
      return this.$store.state.app.collapsed_
    },
    spinShow_ () {
      return this.$store.state.app.spinShow_
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb',
      'setTagNavList',
      'addTag',
      'setHomeRoute',
      'closeTag',
      'setCollapsed_'
    ]),
    turnToPage (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
    handleCollapsedChange (state) {
      this.collapsed = state
    },
    handleCloseTag (res, type, route) {
      if (type !== 'others') {
        if (type === 'all') {
          this.turnToPage(this.$config.homeName)
        } else {
          if (routeEqual(this.$route, route)) {
            this.closeTag(route)
          }
        }
      }
      this.setTagNavList(res)
    },
    handleClick (item) {
      this.turnToPage(item)
    },
    refresh_loading () {
      // 点击刷新修改全局logo遮罩的状态
      this.spinShow = true
      setTimeout(() => {
        this.spinShow = false
      }, 800)
    },
    style_padding_Y () {
      if (document.getElementById('app').clientWidth < 1400) {
        this.collapsed = true
      } else {
        this.collapsed = false
      }
      if (this.$route.name == 'login') return
      if (
        document.getElementById('router_box').scrollHeight >
        document.getElementById('router_box').clientHeight
      ) {
        // 有滚动条
        if (this.now_padding == '20px 0px 20px 10px') return
        document.getElementById('router_box').style.padding =
          ' 20px 0px 20px 10px'
        this.now_padding = '20px 0px 20px 10px'
      } else {
        // 没滚动条
        if (this.now_padding != '20px 0px 20px 10px') return
        document.getElementById('router_box').style.padding =
          ' 20px 10px 20px 10px'
        this.now_padding = '20px 10px 20px 10px'
      }
    },
    enter (el, done) {
      if (
        document.getElementById('router_box').childNodes[0].offsetHeight >
        document.getElementById('router_box').clientHeight
      ) {
        document.getElementById('router_box').style.padding =
          ' 20px 0px 20px 10px'
      } else {
        document.getElementById('router_box').style.padding =
          ' 20px 10px 20px 10px'
      }
    }
  },
  watch: {
    $route (newRoute) {
      const { name, query, params, meta } = newRoute
      this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      })
      this.setBreadCrumb(newRoute)
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
      this.$refs.sideMenu.updateOpenName(newRoute.name)
    },
    collapsed () {
      // 更改侧栏状态时，记录时间，启动全局logo遮罩，如若时间发生变化，记录时间，启动全局logo遮罩
      this.setCollapsed_(new Date())
      // this.refresh_loading();
    },
    spinShow_ (newVal) {
      // 监听vuex内  更新遮罩状态
      // this.spinShow = true;
      this.spinShow = newVal
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (
        document.getElementById('router_box').childNodes[0].offsetHeight >
        document.getElementById('router_box').clientHeight
      ) {
        document.getElementById('router_box').style.padding =
          ' 20px 0px 20px 10px'
      } else {
        document.getElementById('router_box').style.padding =
          ' 20px 10px 20px 10px'
      }
      on(window, 'resize', this.style_padding_Y)
    })
    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    this.setTagNavList()
    this.setHomeRoute(routers)
    const { name, params, query, meta } = this.$route
    this.addTag({
      route: { name, params, query, meta }
    })
    this.setBreadCrumb(this.$route)
    // 如果当前打开页面不在标签栏中，跳到homeName页
    if (!this.tagNavList.find(item => item.name === this.$route.name)) {
      this.$router.push({
        name: this.$config.homeName
      })
    }
  }
}
</script>
<style lang="less" scoped>
#router_box {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 10px 10px 10px 10px !important;
}
/* fade-transform */
.fade-transform-enter-active {
  transition: all 0.6s ease;
}
.fade-transform-leave-active {
  transition: all 0.2s ease-out;
}
.fade-transform-enter,
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  opacity: 0.5;
  transition: all 0.2s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
