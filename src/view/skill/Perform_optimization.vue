<template>
  <div>
    <Row style="margin-bottom:20px">
      <Col span="12" style="text-align: center">
        <Button @click="myclick_1">函数防抖,鼠标快速点击我10次</Button>
        <p>高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间</p>
      </Col>
      <Col span="12" style="text-align:center">
        <Button @click="myclick_2">函数节流,鼠标快速点击我10次</Button>
        <p>高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则不会再次执行</p>
      </Col>
    </Row>
  </div>
</template>
 
<script>
import { _debounce, _throttle } from "@/libs/Perform_optimization.js";
export default {
  name: "Perform_optimization",
  data() {
    return {
      name: "一个data值"
    };
  },
  mounted() {},
  methods: {
    myclick_1: _debounce(function() {
      //  高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
      console.log(this.name);
    }, 1000),
    myclick_2: _throttle(function() {
      //  高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则不会再次执行
      console.log(this.name);
    }, 1000)
  }
};
</script>
 
<style lang="less" scoped>
</style>