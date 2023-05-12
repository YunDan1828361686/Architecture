<template>
  <div id="app">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {},
};
</script>

<style lang="less">
/* fade-transform */
.fade-transform-enter-active {
  transition: all 0.6s ease;
}
.fade-transform-leave-active {
  transition: all 0.2s ease;
}
.fade-transform-enter,
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-family: Microsoft YaHei,sans-serif;
}
#app {
  overflow: overlay;
  .size;
}
// 优化Card加边框
.border-container {
  position: relative;
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #808695;
}

.border-container span.border-span {
  display: block;
  position: absolute;
  width: 35px;
  height: 35px;
}

.border-container span.top-left {
  top: -4px;
  left: -4px;
  border-top: 3px solid #808695;
  border-left: 3px solid #808695;
}

.border-container span.top-right {
  top: -4px;
  right: -4px;
  border-top: 3px solid #808695;
  border-right: 3px solid #808695;
}

.border-container span.bottom-left {
  bottom: -4px;
  left: -4px;
  border-bottom: 3px solid #808695;
  border-left: 3px solid #808695;
}

.border-container span.bottom-right {
  bottom: -4px;
  right: -4px;
  border-bottom: 3px solid #808695;
  border-right: 3px solid #808695;
}
</style>
<style scoped>
#app >>> .ivu-spin-fix {
  z-index: 1000;
}
#app >>> .ivu-table-expanded-cell {
  padding: 0px 50px;
  padding-right: 0;
  padding-top: 20px;
}
#app >>> .Card_demo > .ivu-card-body {
  height: 100%;
}
#app >>> .ivu-tabs {
  overflow: visible;
}
</style>
