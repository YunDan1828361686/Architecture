<template>
  <div>
    <Row style="margin-bottom: 20px">
      <Col span="24">
        <Input v-model="Input_value_1" style="width: 300px" />
      </Col>
    </Row>
  </div>
</template>
<script>
// 遮罩
import { Spin } from "view-design";
export default {
  name: "Watch",
  data() {
    return {
      Input_value_1: "",
    };
  },
  methods: {},
  watch: {
    // 简单使用的写法
    // Input_value_1(newVal, oldVal) {
    //   console.log(newVal, oldVal);
    // },
    // Plus写法
    Input_value_1: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      // 加上之后第一次定义时就会执行
      immediate: true,
      // 深度监听即当要监听对象或数组的时候需要添加deep:true属性
      deep: true,
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
</style>