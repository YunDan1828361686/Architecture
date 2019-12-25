<template>
  <div class="Refresh-btn-con">
    <Tooltip content="刷新当前页面" placement="bottom">
      <Icon @click="refresh" type="md-refresh" :size="23" style="margin-top: 21px"></Icon>
    </Tooltip>
  </div>
</template>

<script>
export default {
  name: "Refresh",
  mounted() {},
  methods: {
    refresh() {
      this.$emit("refresh_loading");
      this.$router.replace({
        path: "/Refresh",
        query: {
          t: Date.now()
        }
      });
    }
  }
};
</script>

<style lang="less">
.Refresh-btn-con .ivu-tooltip-rel {
  height: 64px;
  line-height: 56px;
  i {
    cursor: pointer;
  }
}
</style>
