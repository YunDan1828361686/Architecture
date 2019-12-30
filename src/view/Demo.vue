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
import { mapActions } from 'vuex'
// 哪个组件用  在哪引入echarts
// 浏览器窗口大小发生变化
import { on, off } from '@/libs/tools'
import echarts from 'echarts'
import tdTheme from '@/libs/echarts_them.json'
echarts.registerTheme('tdTheme', tdTheme)

export default {
  name: 'Demo',
  data () {
    return {
      myCharts_dom_1: [],
      echarts_data: Object
    }
  },
  created () {
    this.$axios('/node2/echarts1', 'post').then(res => {
      this.echarts_data = res.data.data
    })
  },
  mounted () {},
  methods: {
    resize () {
      if (this.$route.name == 'Demo') {
        {
          this.myCharts_dom_1.map(item => {
            item.resize()
          })
        }
      }
    },
    up_init () {
      const element = document.getElementById('echarts_index')
      const element_option = this.echarts_data
      console.log(element_option)
      let option = {
        title: {
          text: '同名数量统计',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          selected: element_option.selected,
          textStyle: {
            fontSize: 16
          }
        },
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: element_option.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      // 当数据更新了 在dom中渲染后 再去渲染echarts
      this.$nextTick(() => {
        // 存储已经init的echarts实例
        this.myCharts_dom_1.push(echarts.init(element, 'tdTheme'))
        this.myCharts_dom_1[0].setOption(option, true)
        // 窗口发生改变重新加载echarts
        on(window, 'resize', this.resize)
      })
    }
  },
  watch: {
    // echarts_data发生变化  当数据更新了 在dom中渲染后 再去执行this.up_init
    echarts_data: function () {
      this.$nextTick(() => {
        this.up_init()
      })
    }
  },
  beforeDestroy () {
    console.log('销毁')
    off(window, 'resize', this.resize)
  }
}
</script>

<style lang="less" scoped>
#echarts_index {
  height: 400px;
}
</style>
