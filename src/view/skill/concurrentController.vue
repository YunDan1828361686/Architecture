<template>
  <div></div>
</template>

<script>
  import { createConcurrency } from "@/libs/createConcurrency.js";
  export default {
    name: "concurrentController",
    components: {},
    props: {},
    data() {
      return {
        // 创建并发控制器实例（最大并发数2）
        controller: createConcurrency(1),
      };
    },
    computed: {},
    methods: {
      delayV1() {
        return new Promise((resolve) =>
          setTimeout(() => {
            console.log("任务1，2000ms");
            resolve("任务1完成");
          }, 2000),
        );
      },
      delayV2() {
        return new Promise((resolve) =>
          setTimeout(() => {
            console.log("任务2，1000ms");
            resolve("任务2完成");
          }, 1000),
        );
      },
      delayV3() {
        return new Promise((resolve, reject) =>
          setTimeout(() => {
            console.log("任务3，1500ms");
            reject("任务3失败");
          }, 1500),
        );
      },
      delayV4() {
        return new Promise((resolve) =>
          setTimeout(() => {
            console.log("任务4，3000ms");
            resolve("任务4完成");
          }, 3000),
        );
      },
      delayV5() {
        return new Promise((resolve) =>
          setTimeout(() => {
            console.log("任务5，1000ms");
            resolve("任务5完成");
          }, 1000),
        );
      },
    },
    mounted() {
      this.controller
        .addTask(() => this.delayV1())
        .then((result) => {
          console.log(result);
        });
      this.controller
        .addTask(() => this.delayV2())
        .then((result) => {
          console.log(result);
        });
      this.controller
        .addTask(() => this.delayV3())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      this.controller
        .addTask(() => this.delayV4())
        .then((result) => {
          console.log(result);
        });
      this.controller
        .addTask(() => this.delayV5())
        .then((result) => {
          console.log(result);
        });
    },
    watch: {},
  };
</script>
<style lang="less" scoped></style>
