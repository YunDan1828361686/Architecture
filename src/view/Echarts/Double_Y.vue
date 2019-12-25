<template>
  <div>
    <Row style="margin-bottom:20px">
      <Col span="24">
        <div style="float: left;"></div>
        <div style="float: right;"></div>
      </Col>
    </Row>

    <!-- 优化Card加边框 -->
    <div
      style="width:50%;display: inline-block;"
      class="border-container"
      v-for="(item_1,index_1) in echarts_data"
      :key="index_1"
    >
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
// 哪个组件用  在哪引入echarts
var echarts = require("echarts");
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 浏览器窗口大小发生变化
import { on, off } from "@/libs/tools";
export default {
  name: "Double_Y",
  data() {
    return {
      myCharts_dom_1: [],
      echarts_data: []
    };
  },
  created() {
    // 获取echarts_data
    this.$axios("/node2/echarts1", "post").then(res => {
      this.echarts_data = res.data.data;
    });
  },
  mounted() {},
  watch: {
    // echarts_data发生变化  当数据更新了 在dom中渲染后 再去执行this.up_init
    echarts_data: function() {
      this.$nextTick(() => {
        this.up_init();
      });
    }
  },
  methods: {
    resize() {
      if (this.$route.name == "Double_Y") {
        {
          this.myCharts_dom_1.map(item => {
            item.resize();
          });
        }
      }
    },
    // 解决两个Y轴分隔线相同
    calMax(arr) {
      return Math.ceil(Math.max(...arr) / 10) * 10; // 找到最大值 除10 向上取整 乘10 输出最大值
    },
    up_init() {
      var myCharts = document.getElementsByClassName("echarts_index");
      for (let i = 0; i < myCharts.length; i++) {
        const element = myCharts[i];
        const element_option = this.echarts_data[i];
        let option = {
          //1、 格式化提示信息
          title: {
            left: "center",
            text: element_option.title_text
          },
          tooltip: {
            trigger: "axis",
            formatter: function(params) {
              var name = params[0].name + "<br/>"; //x轴名称
              var str = ""; //辅助变量，存储要展示的提示信息
              // 循环存储
              for (var i = 0; i < params.length; i++) {
                str =
                  str +
                  params[i].marker +
                  params[i].seriesName +
                  "：" +
                  params[i].value +
                  "人<br/>";
              }
              // 返回结果值
              return name + str;
            }
          },
          toolbox: {
            feature: {
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ["line", "bar"]
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          legend: {
            left: "10%",
            formatter: "{a|{name}}",
            textStyle: {
              rich: {
                a: {
                  fontSize: 12
                }
              }
            }
          },
          grid: {
            left: "5%",
            right: "5%",
            top: "15%",
            bottom: "10%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: element_option.xAxis_data,
              axisPointer: {
                type: "shadow"
              }
            }
          ],
          yAxis: element_option.yAxis_series.map(item => {
            return {
              type: "value",
              name: item.name,
              min: 0,
              max: this.calMax(item.data),
              splitNumber: 5,
              interval: this.calMax(item.data) / 5
            };
          }),
          dataZoom: [
            {
              start: 0,
              end: 30,
              startValue: "0"
            },
            {
              type: "inside"
            }
          ],
          series: element_option.yAxis_series
        };
        // 当数据更新了 在dom中渲染后 再去渲染echarts
        this.$nextTick(() => {
          // 存储已经init的echarts实例
          this.myCharts_dom_1.push(echarts.init(element));
          this.myCharts_dom_1[i].setOption(option, true);
          // 窗口发生改变重新加载echarts
          on(window, "resize", this.resize);
        });
      }
    }
  },
  beforeDestroy() {
    console.log("销毁");
    off(window, "resize", this.resize);
  }
};
</script>

<style lang="less" scoped>
.echarts_index {
  margin-top: 20px;
  height: 400px;
}
</style>
