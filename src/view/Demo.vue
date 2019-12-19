<template>
  <div>
    <h1>Demo</h1>
    <div class="border-container" v-for="(item_1,index_1) in echarts_data" :key="index_1">
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
export default {
  name: "Demo",
  data() {
    return {
      echarts_data: [{}, {}]
    };
  },
  created() {},
  mounted() {
    var myCharts = document.getElementsByClassName("echarts_index");
    for (let i = 0; i < myCharts.length; i++) {
      const element = myCharts[i];
      const element_option = this.echarts_data[i];
      let option = {
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
        grid: {
          left: "5%",
          right: "5%",
          top: "15%",
          bottom: "10%",
          containLabel: true
        },
        legend: {
          // left: "5%",
          // top: "6%",
          // formatter: "{a|{name}}",
          // textStyle: {
          //   rich: {
          //     a: {
          //       fontSize: 11,
          //       // width: 180,
          //       height: 10,
          //     //   align: "center"
          //     }
          //   }
          // }
          // // bottom: "10%",
        },
        xAxis: [
          {
            type: "category",
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
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "电量",
            min: 0,
            max: this.calMax([
              10,
              20,
              30,
              40,
              50,
              60,
              70,
              80,
              90,
              100,
              110,
              120
            ]),
            splitNumber: 5,
            interval:
              this.calMax([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]) /
              5,
            splitLine: {
              show: true
            },
            axisLabel: {
              formatter: "{value} kwh"
            }
          },
          {
            type: "value",
            name: "连接数",
            min: 0,
            max: this.calMax([
              1.1,
              2.2,
              3.3,
              4.4,
              5.5,
              6.6,
              7.7,
              8.8,
              9.9,
              10.1,
              20.4,
              30.5
            ]),
            splitNumber: 5,
            interval:
              this.calMax([
                1.1,
                2.2,
                3.3,
                4.4,
                5.5,
                6.6,
                7.7,
                8.8,
                9.9,
                10.1,
                20.4,
                30.5
              ]) / 5,
            splitLine: {
              show: true
            },
            axisLabel: {
              formatter: "{value} 个"
            }
          }
        ],
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
            dataZoom: {
              yAxisIndex: "none"
            }
          }
        },
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
        series: [
          {
            name: "电量1",
            type: "line",
            color: "black",
            yAxisIndex: "0",
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
          },
          {
            name: "连接数1",
            type: "line",
            color: "red",
            yAxisIndex: "1",
            data: [
              1.1,
              2.2,
              3.3,
              4.4,
              5.5,
              6.6,
              7.7,
              8.8,
              9.9,
              10.1,
              20.4,
              30.5
            ]
          }
        ]
      };
      this.$nextTick(() => {
        echarts.init(element).setOption(option, true);
      });
    }
  },
  methods: {
    calMax(arr) {
      return Math.ceil(Math.max(...arr) / 10) * 10; // 找到最大值 除10 向上取整 乘10 输出最大值
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.echarts_index {
  margin-top: 20px;
  height: 500px;
}
</style>
