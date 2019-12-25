<template>
  <div>
    <h1>路由相关方法</h1>
  </div>
</template>

<script>
export default {
  name: "Router_method",
  beforeRouteEnter(to, from, next) {
    console.log("进入当前组件之前，没有this");
    next();
    // next(vm => {
    //   if (!vm.$store.state.page.Double_amplification) {
    //     vm.$Message.error({
    //       content: "请重新选择要对比的RRU",
    //       duration: 3
    //     });
    //     vm.$router.push({
    //       name: "Tab_amplification"
    //     });
    //     return;
    //   }
    // });
  },
  beforeRouteLeave(to, from, next) {
    console.log("离开当前组件之前，有this");
    next();
  }
};
</script>

<style lang="less" scoped>
</style>