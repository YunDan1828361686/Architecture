<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <div class="form-con">
        <div class="login_logo">
          <a href="#">
            <img src="../../assets/images/login-Avatar.png" />
          </a>
        </div>
        <div class="login_name">
          <p>会员登录</p>
        </div>
        <form id="form_login">
          <div>
            <input
              id="user_name"
              name="user_name"
              class="input_lab"
              required
              type="text"
              autocomplete="off"
            />
            <label alt="请输入账号" placeholder="账号"></label>
          </div>
          <div>
            <input
              id="user_password"
              name="user_password"
              class="input_lab"
              required
              type="password"
              autocomplete="off"
            />
            <label alt="请输入密码" placeholder="密码"></label>
          </div>
          <div style="display:flex;">
            <div style="margin-right:30px;">
              <input id="verVal" class="input_lab" required type="text" />
              <label alt="请输入验证码" placeholder="验证码"></label>
            </div>
            <div>
              <canvas width="100" height="40" id="verifyCanvas"></canvas>
              <img id="code_img" />
            </div>
          </div>
          <div style="display:flex;justify-content: space-around;">
            <!--  -->
            <Button type="success" long ref="click1" @click="login_btn" :loading="login_spin">登录</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";
export default {
  data() {
    return {
      login_spin: false,
      // 生成验证码的函数
      verificationCode: "",
      // 验证码
      verVal: ""
    };
  },
  components: {},
  mounted() {
    // 验证码
    var that = this;
    this.verificationCode = {
      init() {
        var nums = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z"
        ];
        var str = "";
        that.verVal = drawCode();
        // 绘制验证码
        function drawCode(str) {
          var canvas = document.getElementById("verifyCanvas"); // 获取HTML端画布
          var context = canvas.getContext("2d"); // 获取画布2D上下文
          context.fillStyle = "cornflowerblue"; // 画布填充色
          context.fillRect(0, 0, canvas.width, canvas.height); // 清空画布
          context.fillStyle = "white"; // 设置字体颜色
          context.font = "25px Arial"; // 设置字体
          var rand = new Array();
          var x = new Array();
          var y = new Array();
          for (var i = 0; i < 4; i++) {
            rand.push(rand[i]);
            rand[i] = nums[Math.floor(Math.random() * nums.length)];
            x[i] = i * 20 + 10;
            y[i] = Math.random() * 20 + 20;
            context.fillText(rand[i], x[i], y[i]);
          }
          str = rand.join("").toUpperCase();
          // 画3条随机线
          for (var i = 0; i < 3; i++) {
            drawline(canvas, context);
          }

          // 画30个随机点
          for (var i = 0; i < 30; i++) {
            drawDot(canvas, context);
          }
          convertCanvasToImage(canvas);
          return str;
        }
        // 随机线
        function drawline(canvas, context) {
          context.moveTo(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height)
          ); // 随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
          context.lineTo(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height)
          ); // 随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
          context.lineWidth = 0.5; // 随机线宽
          context.strokeStyle = "rgba(50,50,50,0.3)"; // 随机线描边属性
          context.stroke(); // 描边，即起点描到终点
        }
        // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
        function drawDot(canvas, context) {
          var px = Math.floor(Math.random() * canvas.width);
          var py = Math.floor(Math.random() * canvas.height);
          context.moveTo(px, py);
          context.lineTo(px + 1, py + 1);
          context.lineWidth = 0.2;
          context.stroke();
        }
        // 绘制图片
        function convertCanvasToImage(canvas) {
          document.getElementById("verifyCanvas").style.display = "none";
          var image = document.getElementById("code_img");
          image.src = canvas.toDataURL("image/png");
          return image;
        }
        // 点击图片刷新
        document.getElementById("code_img").onclick = function() {
          resetCode();
        };
        function resetCode() {
          $("#verifyCanvas").remove();
          $("#code_img").before(
            '<canvas width="100" height="40" id="verifyCanvas"></canvas>'
          );
          that.verVal = drawCode();
        }
      }
    };
    this.verificationCode.init();
    // console.log("vue已经被挂载出来了");
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    login_btn() {
      this.login_spin = true;
      this.$Message.loading({
        content: "正在验证信息...",
        duration: 0
      });
      if (
        document.querySelector("#user_name").value == "" ||
        document.querySelector("#user_password").value == ""
      ) {
        // 账号密码未输入
        this.$Message.destroy();
        // this.$Loading.error();
        this.$Message.warning("账号或密码未输入！");
        this.login_spin = false;
      }
      // else if (
      //   $("#verVal")
      //     .val()
      //     .toUpperCase() != this.verVal
      // ) {
      //   this.$Message.destroy();
      //   this.$Loading.error();
      //   this.$Message.error("验证码错误！");
      //   // 更新验证码
      //   $("#code_img").click();
      //   this.login_spin = false;
      // }
      else {
        let userName = $("#user_name")
          .val()
          .trim();
        let password = $("#user_password").val();
        // 模拟接口延迟
        setTimeout(() => {
          const USER = {
            super_admin: {
              name: "super_admin",
              user_id: "1",
              access: ["super_admin", "admin"],
              token: "super_admin",
              avatar:
                "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
            },
            admin: {
              name: "admin",
              user_id: "2",
              access: ["admin"],
              token: "admin",
              avatar:
                "https://avatars0.githubusercontent.com/u/20942571?s=460&v=4"
            }
          };
          // 本地保存Token   Vuex保存Token
          this.$store.commit("setToken", USER[userName].token);
          this.getUserInfo(this.$store.state.user.token)
            .then(res => {
              this.$Message.destroy();
              this.$router.push({
                name: this.$config.homeName
              });
              this.login_spin = false;
            })
            .catch(res => {
              this.login_spin = false;
            });
          // let pA = new Promise((reslove, reject) => {
          //   this.$axios("url", "post")
          //     .then(res => {
          //       reslove(res);
          //     })
          //     .catch(err => {
          //       reject(err);
          //     });
          // });
          // let pB = new Promise((reslove, reject) => {
          //   this.$axios("url", "post")
          //     .then(res => {
          //       reslove(res);
          //     })
          //     .catch(err => {
          //       reject(err);
          //     });
          // });
          // Promise.all([pA, pB]).then(result => {
          //   let pAres = result[0].data.list;
          //   let pBres = result[1].data.list;
          // });
        }, 500);
      }
    }
  }
};
</script>
