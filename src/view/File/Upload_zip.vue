<template>
  <div>
    <!-- action="/api/node1/Upload" -->
    <Upload
      style="margin-right: 20px; display: inline-block"
      action="/api/node1/Upload"
      :show-upload-list="false"
      accept=".zip"
      :format="['zip']"
      :on-success="upload_success"
      :on-error="upload_error"
      :before-upload="handleUpload"
      :data="{ dateType: '综资' }"
    >
      <Button type="primary" icon="ios-cloud-upload-outline">文件上传</Button>
    </Upload>
  </div>
</template>

<script>
import { Spin } from "view-design";
export default {
  name: "Upload_zip",
  data() {
    return {};
  },
  methods: {
    handleUpload(file) {
      Spin.show();
    },
    upload_success(res, file) {
      setTimeout(() => {
        if (res.code == "200") {
          Spin.hide();
          this.$Message.success("文件上传成功！");
        } else {
          Spin.hide();
          this.$Message.error("文件上传失败！");
        }
      }, 500);
    },
    upload_error(error, file) {
      Spin.hide();
      this.$Message.error("文件上传失败！");
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
</style>
