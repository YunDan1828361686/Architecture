<template>
  <div>
    <Row style="margin-bottom: 20px">
      <Button @click="click_test_1">测试按钮</Button>
      <Button @click="click_test_2">测试按钮</Button>
      <!-- 用法1--computed计算 -->
      <Col span="24">{{ Vuex_test1 }}</Col>
      <Col span="24">{{ Vuex_test2 }}</Col>
      <!-- 直接引用 -->
      <Col span="24">{{ $store.state.user.Vuex_test1 }}</Col>
      <Col span="24">{{ $store.getters.Vuex_test2 }}</Col>
    </Row>
  </div>
</template>
<script>
// 遮罩
import { Spin } from "view-design";
export default {
  name: "Vuex",
  data() {
    return {
      page_data: "页面本身数据",
    };
  },
  methods: {
    click_test_1() {
      console.log(this.Vuex_test1);
      console.log(this.Vuex_test2);
    },
    click_test_2() {
      this.$store.commit("updated_Vuex_test1", "重置Vuex里的Vuex_test1");
      this.$store.dispatch("getCurrentDate", 4).then((res) => {
        console.log(res);
      });
    },
  },
  watch: {},
  computed: {
    // 可自定义使用时要用的名字
    Vuex_test1() {
      return this.$store.state.user.Vuex_test1 + `+${this.page_data}`;
    },
    Vuex_test2() {
      return this.$store.getters.Vuex_test2;
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
</style>