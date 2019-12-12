<template>
  <div>
    <Row>
      <Col span="24">
        <Card style="width:100%">
          <div class="echarts_index"></div>
          <div style="display:flex;margin-top:20px;justify-content: center;">
            <Radio v-model="BBU_Battery">电量</Radio>
            <RadioGroup v-model="RRU_Battery" @on-change="handleGetVertical($event)">
              <Radio
                v-for="(item_1,index_1) in echarts.tabs"
                :key="index_1"
                :label="index_1"
                v-if="index_1"
              >{{item_1}}</Radio>
            </RadioGroup>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import { log } from "util";
// 哪个组件用  在哪引入echarts
var echarts = require("echarts");
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
export default {
  name: "Double_amplification",
  data() {
    return {
      // 第一个
      BBU_Battery: true,
      // 第二个
      RRU_Battery: 1,
      echarts: {
        tabs: [
          "电量",
          "有效RRC链接平均数",
          "语音话务量",
          "数据流量",
          "利用率/占用率"
        ]
      }
    };
  },
  methods: {
    handleGetVertical(val) {
      console.log(val);
    }
  },
  mounted() {
    var myCharts = document.getElementsByClassName("echarts_index");
    for (let i = 0; i < myCharts.length; i++) {
      const element = myCharts[i];
      let color = [
        "#2d8cf0",
        "#19be6b",
        "#ff9900",
        "#E46CBB",
        "#9A66E4",
        "#ed3f14"
      ];
      let echarts_option = {
        title: [
          {
            left: "center",
            text: "BBU"
          },
          {
            top: "55%",
            left: "center",
            text: "RRU"
          }
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          },
          formatter: function(params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              if (i === 0) {
                relVal +=
                  "<br/>" +
                  params[i].marker +
                  params[i].seriesName +
                  "：" +
                  params[i].value +
                  " " +
                  " kwh";
              } else {
                relVal +=
                  "<br/>" +
                  params[i].marker +
                  params[i].seriesName +
                  "：" +
                  params[i].value +
                  " " +
                  " 个";
              }
            }
            return relVal;
          }
        },
        legend: {
          left: "5%",
          top: "0%",
          formatter: "{a|{name}}",
          textStyle: {
            rich: {
              a: {
                fontSize: 11,
                height: 10
              }
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: [
          {
            data: [
              "测试1",
              "测试2",
              "测试3",
              "测试4",
              "测试5",
              "测试6",
              "测试7",
              "测试8",
              "测试9",
              "测试10",
              "测试11",
              "测试12",
              "测试13",
              "测试14",
              "测试15"
            ]
          },
          {
            data: [
              "测试1",
              "测试2",
              "测试3",
              "测试4",
              "测试5",
              "测试6",
              "测试7",
              "测试8",
              "测试9",
              "测试10",
              "测试11",
              "测试12",
              "测试13",
              "测试14",
              "测试15"
            ],
            gridIndex: 1
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "电量",
            splitLine: {
              show: true
            },
            axisLabel: {
              formatter: "{value} kwh"
            }
          },
          {
            type: "value",
            name: "电量",
            splitLine: {
              show: true
            },
            axisLabel: {
              formatter: "{value} kwh"
            },
            gridIndex: 1
          },
          {
            type: "value",
            splitLine: {
              show: true
            },
            axisLabel: {
              formatter: "{value} "
            },
            gridIndex: 1
          }
        ],
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
          },
          {
            type: "inside",
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
          }
        ],
        grid: [
          {
            bottom: "60%"
          },
          {
            top: "60%"
          }
        ],
        series: [
          {
            name: "电量1",
            type: "line",
            color: color[0],
            yAxisIndex: "0",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return item + 1;
              }
            )
          },
          {
            name: "电量2",
            type: "line",
            color: color[1],
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return item + 3;
              }
            )
          },
          {
            name: "连接数1",
            type: "line",
            color: color[2],
            xAxisIndex: 1,
            yAxisIndex: 2,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return item + 5;
              }
            )
          },
          {
            name: "连接数2",
            type: "line",
            color: color[3],
            xAxisIndex: 1,
            yAxisIndex: 2,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return item + 7;
              }
            )
          },
          {
            name: "连接数3",
            type: "line",
            color: color[4],
            xAxisIndex: 1,
            yAxisIndex: 2,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return item + 9;
              }
            )
          },
          {
            name: "连接数4",
            type: "line",
            color: color[5],
            xAxisIndex: 1,
            yAxisIndex: 2,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return item + 11;
              }
            )
          }
        ]
      };
      this.$nextTick(() => {
        echarts.init(element).setOption(echarts_option, true);
      });
    }
  },
  created() {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.$store.state.page.Double_amplification) {
        vm.$Message.error({
          content: "请重新选择要对比的RRU",
          duration: 3
        });
        vm.$router.push({
          name: "Tab_amplification"
        });
        return;
      }
    });
  }
};
</script>

<style lang="less" scoped>
.echarts_index {
  height: 600px;
}
</style>