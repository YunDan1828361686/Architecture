<template>
  <div style="height:365px;display: flex;align-items: flex-end;padding-top: 17px;">
    <!-- 拼图验证码 -->
    <div v-show="flag" class="testCode">
      <p class="closeBtn">
        <i class="el-icon-close" @click="flag=!flag"></i>
      </p>
      <slide-verify :l="40" :r="20" :w="400" :h="200" slider-text="向右滑动" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :style="{width:'405'}" class="slide-box" ref="slideBlock" v-show="flag" :imgs="[Verify_img1,Verify_img2,Verify_img3,Verify_img4]"></slide-verify>
    </div>
  </div>
</template>

<script>
import Verify_img1 from "@/assets/images/Verify_img1.png";
import Verify_img2 from "@/assets/images/Verify_img2.png";
import Verify_img3 from "@/assets/images/Verify_img3.png";
import Verify_img4 from "@/assets/images/Verify_img4.png";

export default {
  data() {
    return {
      flag: false,
      Verify_img1,
      Verify_img2,
      Verify_img3,
      Verify_img4
    };
  },
  methods: {
    // 拼图成功
    onSuccess() {
      this.$emit("Verify_success");
    },
    // 拼图失败
    onFail() {
      this.$Message.warning({
        content: "请再试试吧！",
        background: true,
        duration: 3
      });
      this.$emit("Verify_fail");
    },
    // 拼图刷新
    onRefresh() {
      //   alert("拼图刷新");
    },
    // 点击登录校验-拼图出现
    submitForm(formName) {
      this.flag = true;
    }
  }
};
</script>

<style lang="less" scoped>
.testCode {
  height: 270px;
  overflow: hidden;
}
.slide-box {
  height: 300px;
  background-color: #fff;
}
</style>
