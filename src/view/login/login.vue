<style lang="less">
  @import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <div class="form-con">
        <div
          style="
            position: fixed;
            height: 440px;
            width: 400px;
            right: 50px;
            top: 50px;
            z-index: 10;
          "
          v-if="Verify_if">
          <Verify
            ref="Verify_if_"
            @Verify_success="Verify_success"
            @Verify_fail="Verify_fail" />
        </div>
        <div class="login_name">
          <h1>用户登录</h1>
        </div>
        <form
          id="form_login"
          autocomplete="off"
          @submit.prevent="onSubmit">
          <div>
            <input
              id="user_name"
              name="user_name"
              class="input_lab"
              required
              type="text"
              autocomplete="off"
              @change="user_name_change" />
            <label
              alt="请输入手机号"
              placeholder="手机号"></label>
          </div>
          <div style="position: relative">
            <div
              style="
                position: absolute;
                right: 0px;
                top: 0px;
                height: 40px;
                width: 40px;
                line-height: 40px;
                text-align: center;
                cursor: pointer;
              ">
              <Icon
                v-if="see_password"
                @click="see_password = false"
                type="ios-eye-off-outline" />
              <Icon
                v-if="!see_password"
                @click="see_password = true"
                type="ios-eye-outline" />
            </div>
            <input
              id="user_password"
              name="user_password"
              class="input_lab"
              required
              :type="see_password ? 'password' : 'text'"
              autocomplete="off" />
            <label
              alt="请输入密码"
              placeholder="密码"></label>
          </div>
          <div style="display: flex; justify-content: space-around">
            <input
              type="submit"
              style="
                display: block;
                overflow: hidden;
                width: 0px;
                height: 0px;
                position: absolute;
                bottom: 0;
                opacity: 0;
              " />
            <Button
              html-type="submit"
              type="primary"
              long
              :loading="login_spin"
              :disabled="login_disabled"
              >登录</Button
            >
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-top: 15px;
            ">
            <p
              class="password_hover"
              style="cursor: pointer"
              @click="password_hover_click">
              忘记密码？
            </p>
            <a @click="no_user">立即注册</a>
          </div>
        </form>
      </div>
    </div>
    <img
      style="
        width: 560px;
        height: 40px;
        position: absolute;
        top: 12%;
        left: 10%;
      "
      src="../../assets/images/logo-bg.png"
      alt="" />
    <div
      style="
        text-align: center;
        position: absolute;
        width: 100%;
        bottom: 50px;
        color: #2d8cf0;
        font-size: 18px;
      ">
      Copyright　©　2022　航空领域特殊过程评价中心　版权所有
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import { Spin } from "view-design";
  import Verify from "@/view/login/Verify.vue";
  import $ from "jquery";
  import { loadMenu } from "@/libs/router-util";
  export default {
    data() {
      return {
        Verify_if: false,
        login_disabled: true,
        login_spin: false,
        // 路由列表
        res_list: [],
        see_password: true,
      };
    },
    components: { Verify },
    mounted() {
      if (this.$store.state.user.login_obj == "Message") {
        setTimeout(() => {
          this.$Message.destroy();
          this.$Message.warning({
            content: "自动登录验证失败,请输入手机号及密码登录！",
            background: true,
            duration: 3,
          });
          this.$store.commit("setlogin_obj", "");
          Spin.hide();
        }, 300);
      }
    },
    methods: {
      ...mapActions(["getUserInfo"]),
      no_user() {
        this.$router.push("register");
      },
      password_hover_click() {
        this.$router.push("First_step");
      },
      user_name_change() {
        this.login_disabled = true;
        let username = $("#user_name").val().trim();
        if (username) {
          // ~假判断
          if (username != "admin" && username != "system") {
            this.$axios("/open/validUsername", "GET", { phoneNumber: username })
              .then((res) => {
                if (!res.data.length) {
                  setTimeout(() => {
                    this.$Message["warning"]({
                      background: true,
                      content: "您的手机号还未注册，快点击立即注册按钮注册吧～",
                      duration: 3,
                    });
                    this.login_disabled = true;
                  }, 1000);
                } else {
                  this.login_disabled = false;
                }
              })
              .catch((err) => {
                setTimeout(() => {
                  this.$Message["warning"]({
                    background: true,
                    content: "您的手机号还未注册，快点击立即注册按钮注册吧～",
                    duration: 3,
                  });
                  this.login_disabled = true;
                }, 1000);
              });
          } else {
            this.login_disabled = false;
          }
        }
      },
      onSubmit() {
        this.login_btn();
      },
      Verify_success() {
        this.Verify_if = false;
        document.querySelector("#user_password").value = "";
        setTimeout(() => {
          document.getElementById("user_password").focus();
        }, 300);
      },
      Verify_fail() {},
      login_btn() {
        this.login_spin = true;
        Spin.show();
        this.$Message.destroy();
        this.$Message.loading({
          content: "正在验证信息...",
          duration: 0,
        });
        if (
          document.querySelector("#user_name").value == "" ||
          document.querySelector("#user_password").value == ""
        ) {
          // 手机号密码未输入
          this.$Message.destroy();
          this.$Message.warning("手机号或密码未输入！");
          this.$Loading.error();
          this.login_spin = false;
          Spin.hide();
        } else {
          let username = $("#user_name").val().trim();
          let password = $("#user_password").val();
          // 模拟接口延迟
          this.getUserInfo({
            username,
            password,
          })
            .then((res) => {
              setTimeout(() => {
                this.$Message.destroy();
                this.$Message.loading({
                  content: "正在获取侧栏...",
                  duration: 0,
                });
                this.getmenu();
              }, 300);
            })
            .catch((res) => {
              // 关闭系统遮罩
              Spin.hide();
              // 关闭全局提示
              this.$Message.destroy();
              // 是否禁用登录按钮
              this.login_spin = false;
              // 项目内部自定义遮罩
              this.$store.commit("setspinShow_", false);
              if (res.data) {
                if (res.data.code == 401) {
                  // 当前重试次数较多，已被锁定！
                  this.$Message["error"]({
                    background: true,
                    content: "当前重试次数较多，已被锁定！",
                    duration: 3,
                  });
                  return;
                }
              }
              if (res.response) {
                if (res.response.data.status == 500) {
                  this.$Message["error"]({
                    background: true,
                    content: "请输入正确的手机号和密码,或者联系管理员",
                    duration: 3,
                  });
                  this.Verify_if = true;
                  this.$nextTick(() => {
                    this.$refs.Verify_if_.submitForm();
                  });
                } else {
                  this.$Message["error"]({
                    background: true,
                    content: "未知异常，请联系管理员！",
                    duration: 3,
                  });
                }
              }
            });
        }
      },
      getmenu() {
        this.$axios(
          "/getmenu",
          "post",
          this.$Qs.stringify({
            userId: this.$store.state.user.userId,
          }),
        ).then((res) => {
          setTimeout(() => {
            // 储存未处理时的路由
            this.$store.commit("setMenuListData", res.data);
            // 获取处理后的路由
            let list = loadMenu();
            // 用处理好的路由更新路由表
            this.$store.commit("updateMenuList", list);
            this.$Message.destroy();
            this.$Message.success({
              content: "登录成功！",
              background: true,
              duration: 3,
            });
            // 登录按钮是否禁用
            this.login_spin = false;
            // 项目内部自定义遮罩
            this.$store.commit("setspinShow_", false);
            // 最外层遮罩用路由跳转里的路由守卫取消
            this.$router.push({
              name: this.$config.homeName,
            });
          }, 300);
        });
      },
    },
  };
</script>
