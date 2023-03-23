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
    async function Promise1() {
      return this_.$axios("/node2/test1", "post").then((res) => {
        let data = res.data;
        return data;
      });
    }
    async function Promise2() {
      return this_.$axios("/node2/test2", "post").then((res) => {
        let data = res.data;
        return data;
      });
    }
    async function fn() {
      console.log("前面");
      let result1 = await Promise1();
      let result2 = await Promise2();
      console.log(result1);
      console.log(result2);
      console.log("后面");
    }
    fn();

    let pA = new Promise((resolve, reject) => {
      this.$axios("/node2/test1", "post")
        .then((res) => {
          let data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    let pB = new Promise((resolve, reject) => {
      this.$axios("/node2/test2", "post")
        .then((res) => {
          let data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    Promise.all([pA, pB]).then((result) => {
      let pAres = result[0];
      let pBres = result[1];
      console.log(pAres, pBres);
    });

    let pC = new Promise((resolve, reject) => {
      request({
        url: "datas/dsDataSource/countSourcesNum",
        method: "post",
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
    let pD = new Promise((resolve, reject) => {
      request({
        url: "datas/dsTransferJobLog/queryListCurrentDay",
        method: "post",
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
    Promise.all(
      [pC, pD].map((p) => {
        return p.then((e) => p).catch((err) => "0");
      })
    )
      .then((result) => {
        let pAres = result[0];
        let pBres = result[1];
        console.log(pAres, pBres);
      })
      .catch((error) => {
        console.log(error);
      });

    function timeoutA() {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          console.log(1);
          resolve(1);
        }, 1000);
      });
    }

    function timeoutB(val) {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          console.log(2);
          resolve(2 + val);
        }, 1000);
      });
    }

    async function asyncFun() {
      try {
        let a = await timeoutA();
        let b = await timeoutB(a);
        return a + b + "resolve";
      } catch (err) {
        return err + "reject";
      }
    }
    asyncFun()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="less" scoped></style>
