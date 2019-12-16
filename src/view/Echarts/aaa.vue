<template>
  <div>
    <Row>
      <Col span="24">
        <Card style="width:100%">
          <div id="echarts_index"></div>
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
      },
      echarts_data: []
    };
  },
  methods: {
    handleGetVertical(val) {
      console.log(val);
    },
    up_init() {
      var myCharts = document.getElementById("echarts_index");
      let op_data_A = this.echarts_data[0].data[0];
      let op_data_B = this.echarts_data[1].data;
      op_data_A.yAxis.map(item => {
        item.xAxisIndex = 1;
        item.yAxisIndex = 1;
        return item;
      });
      // xAxisIndex: 1
      // yAxisIndex: 0
      let series = op_data_A.yAxis.concat(op_data_B.yAxis);
      console.log(op_data_A, op_data_B, series);
      let echarts_option = {
        title: [
          {
            left: "center",
            text: op_data_A.title
          },
          {
            top: "55%",
            left: "center",
            text: op_data_B.title
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
            data: op_data_A.xAxis
          },
          {
            data: op_data_B.xAxis,
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
        series
      };
      this.$nextTick(() => {
        echarts.init(myCharts).setOption(echarts_option, true);
      });
    }
  },
  created() {
    let pA = new Promise((resolve, reject) => {
      this.$axios("/node2/echarts1", "post")
        .then(res => {
          let data = res.data;
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
    let pB = new Promise((resolve, reject) => {
      this.$axios("/node2/echarts2", "post")
        .then(res => {
          let data = res.data;
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
    Promise.all([pA, pB]).then(result => {
      if (result[0].code || result[1].code) {
        this.$Message.success({
          content: "未知异常！",
          duration: 3
        });
        return;
      }
      this.echarts_data = result;
    });
  },
  mounted() {},
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
  },
  watch: {
    echarts_data: function() {
      this.$nextTick(() => {
        this.up_init();
      });
    }
  }
};
</script>

<style lang="less" scoped>
#echarts_index {
  height: 600px;
}
</style>