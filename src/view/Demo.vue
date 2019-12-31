<template>
  <div>
    <h1>Demo</h1>
    <Row>
      <Col span="12">
        <div class="border-container">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <Card class="Card_demo" style="height:500px">
            <Tabs style="height:100%;">
              <TabPane label="1111">
                <div id="echarts_index"></div>
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </Col>
      <Col span="12">
        <div class="border-container">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <Card style="height:500px"></Card>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {},
  methods: {

  },
  watch: {

  }
}
</script>

<style lang="less" scoped>
#echarts_index {
  height: 400px;
}
</style>
