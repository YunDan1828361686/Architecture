<template>
  <div>
    <Row :gutter="20">
      <Col
        :xs="12"
        :md="8"
        :lg="4"
        v-for="(infor, i) in inforCardData"
        :key="`infor-${i}`"
        style="height: 120px;padding-bottom: 10px;"
      >
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style" />
          <p>{{ infor.title }}</p>
        </infor-card>
      </Col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px;">
      <Col :md="24" :lg="8" style="margin-bottom: 20px;">
        <div class="border-container">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <Card shadow>1111</Card>
        </div>
      </Col>
      <Col :md="24" :lg="16" style="margin-bottom: 20px;">
        <div class="border-container">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <Card shadow>2222</Card>
        </div>
      </Col>
    </Row>
    <Row>
      <div class="border-container">
        <span class="top-left border-span"></span>
        <span class="top-right border-span"></span>
        <span class="bottom-left border-span"></span>
        <span class="bottom-right border-span"></span>
        <Card shadow>3333</Card>
      </div>
    </Row>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo
  },
  data () {
    return {
      inforCardData: [
        {
          title: '新增用户',
          icon: 'md-person-add',
          count: 803,
          color: '#2d8cf0'
        },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
        {
          title: '新增问答',
          icon: 'md-help-circle',
          count: 142,
          color: '#ff9900'
        },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        {
          title: '新增互动',
          icon: 'md-chatbubbles',
          count: 12,
          color: '#E46CBB'
        },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ]
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style {
  font-size: 50px;
}
</style>
