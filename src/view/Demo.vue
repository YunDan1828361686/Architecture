<template>
  <div>
    <h1>Demo</h1>
    <div class="border-container">
      <span class="top-left border-span"></span>
      <span class="top-right border-span"></span>
      <span class="bottom-left border-span"></span>
      <span class="bottom-right border-span"></span>
      <Card>
        <div class="echarts_index"></div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {},
  watch: {}
}
</script>

<style lang="less" scoped>
.echarts_index {
  margin-top: 20px;
  height: 500px;
}
</style>
