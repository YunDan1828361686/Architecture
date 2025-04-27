<template>
  <div>
    <h1>路由相关方法</h1>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Router_method",
  methods: {
    ...mapMutations(["closeTag"]),
  },
  beforeRouteEnter(to, from, next) {
    console.log("进入当前组件之前，没有this");
    // next();
    next((vm) => {
      if (!vm.$store.state.page.Double_amplification) {
        vm.$Message.error({
          content: "不达成前置条件",
          duration: 3,
        });
        vm.$router.push({
          name: "Perform_optimization",
        });
        vm.closeTag({
          name: "Router_method",
        });
        return;
        // 因为不达成前置条件所以return，此时下面代码不执行
      }
      console.log("达成条件");
    });
  },
  beforeRouteLeave(to, from, next) {
    console.log("离开当前组件之前，有this");
    next();
  },
};
</script>

<style lang="less" scoped>
</style>
