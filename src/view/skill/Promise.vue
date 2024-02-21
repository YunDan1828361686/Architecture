<template>
  <div></div>
</template>

<script>
  export default {
    name: "Promise",
    data() {
      return {
        list: [1, 2, 3],
      };
    },
    methods: {
      // 多个不同的参数（同步）按顺序执行一个异步方法（接口）去执行一些事情，且同步执行回调函数
      getload(item, index) {
        return new Promise((resolve, reject) => {
          setTimeout(function () {
            console.log(2);
            resolve(2 + item);
          }, 1000);
        });
      },
      async loadData() {
        for (let index = 0; index < this.list; index++) {
          const item = this.list[index];
          //获取审核员
          await this.getload(item, index).then((data) => {
            console.log(data);
          });
        }
      },
    },
    mounted() {
      const this_ = this;
      // 第一个
      function Promise1() {
        return this_.$axios("/node2/test1", "post").then((res) => {
          console.log("222");
          let data = res.data;
          return data;
        });
      }
      function Promise2() {
        return this_.$axios("/node2/test2", "post").then((res) => {
          console.log("444");
          let data = res.data;
          return data;
        });
      }
      async function fn() {
        console.log("111");
        let result1 = await Promise1();
        console.log("333");
        let result2 = await Promise2();
        console.log("555");
        console.log(result1, "666");
        console.log(result2, "777");
        console.log("888");
      }
      fn();
      function fn() {
      }
      // 第二个
      // function Promise1() {
      //   return this_.$axios("/node2/test1", "post").then((res) => {
      //     console.log("222");
      //     return res.data;
      //   });
      // }
      // function Promise2() {
      //   return this_.$axios("/node2/test2", "post").then((res) => {
      //     console.log("777");
      //     return res.data;
      //   });
      // }
      // async function fn() {
      //   console.log("111");
      //   await Promise1()
      //     .then((res) => {
      //       console.log(res, "333");
      //       return res;
      //     })
      //     .then((res) => {
      //       console.log(res, "444");
      //     })
      //     .then(() => {
      //       console.log("555");
      //     });
      //   console.log("666");
      //   await Promise2()
      //     .then((res) => {
      //       console.log(res, "888");
      //     })
      //     .then(() => {
      //       console.log("999");
      //     });
      //   console.log("101010");
      // }
      // fn();

      // 第三个
      // let pA = new Promise((resolve, reject) => {
      //   this.$axios("/node2/test1", "post")
      //     .then((res) => {
      //       resolve(res.data);
      //     })
      //     .catch((err) => {
      //       reject(err);
      //     });
      // });
      // let pB = new Promise((resolve, reject) => {
      //   this.$axios("/node2/test2", "post")
      //     .then((res) => {
      //       // resolve(res.data);
      //       reject("报错了");
      //     })
      //     .catch((err) => {
      //       reject(err);
      //     });
      // });
      // // Promise.all([pA, pB])
      // //   .then((result) => {
      // //     let pAres = result[0];
      // //     let pBres = result[1];
      // //     console.log(pAres, pBres);
      // //   })
      // //   .catch((err) => {});
      // Promise.all(
      //   [pA, pB].map((p) => {
      //     return p.then((res) => res).catch((err) => err);
      //   })
      // )
      //   .then((result) => {
      //     let pAres = result[0];
      //     let pBres = result[1];
      //     console.log(pAres, pBres);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      // 第四个
      // function timeoutA() {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(function () {
      //       console.log(111);
      //       resolve("timeoutA执行完毕");
      //     }, 1000);
      //   });
      // }

      // function timeoutB(val) {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(function () {
      //       console.log(222, val);
      //       resolve("timeoutB执行完毕");
      //     }, 1000);
      //   });
      // }

      // async function asyncFun() {
      //   try {
      //     let a = await timeoutA();
      //     let b = await timeoutB(a);
      //     console.log(333, b);
      //     return 444;
      //   } catch (err) {
      //     return err + "reject";
      //   }
      // }
      // asyncFun().then((res) => {
      //   console.log(res);
      // });
    },
  };
</script>

<style lang="less" scoped></style>
