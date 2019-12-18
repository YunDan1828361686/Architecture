<template>
  <div>
    <h1>路由相关方法</h1>
  </div>
</template>

<script>
export default {
  name:"Router_method"
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     if (!vm.$store.state.page.Double_amplification) {
  //       vm.$Message.error({
  //         content: "请重新选择要对比的RRU",
  //         duration: 3
  //       });
  //       vm.$router.push({
  //         name: "Tab_amplification"
  //       });
  //       return;
  //     }
  //   });
  // },
};
</script>

<style lang="scss" scoped>
</style>