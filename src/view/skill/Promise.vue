<template>
  <div>
    <h1>Promise,async-await各种接口或事件执行顺序或写法</h1>
    <pre>
      <code>
          const this_ = this;
          async function Promise1() {
            return this_.$axios("/node2/test1", "post").then(res => {
              let data = res.data;
              return data;
            });
          }
          async function Promise2() {
            return this_.$axios("/node2/test2", "post").then(res => {
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
              .then(res => {
                let data = res.data;
                resolve(data);
              })
              .catch(err => {
                reject(err);
              });
          });
          let pB = new Promise((resolve, reject) => {
            this.$axios("/node2/test2", "post")
              .then(res => {
                let data = res.data;
                resolve(data);
              })
              .catch(err => {
                reject(err);
              });
          });
          Promise.all([pA, pB]).then(result => {
            let pAres = result[0];
            let pBres = result[1];
            console.log(pAres, pBres);
          });

          function timeoutA() {
            return new Promise((resolve, reject) => {
              setTimeout(function() {
                console.log(1);
                resolve(1);
              }, 1000);
            });
          }

          function timeoutB(val) {
            return new Promise((resolve, reject) => {
              setTimeout(function() {
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
            .then(res => console.log(res))
            .catch(err => console.log(err));
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "Promise",
  data() {
    return {};
  },
  methods: {},
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

<style lang="less" scoped>
</style>
