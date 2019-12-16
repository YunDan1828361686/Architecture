<template>
  <div>
    <div>
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
  </div>
</template>

<script>
// 哪个组件用  在哪引入echarts
var echarts = require("echarts");
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
export default {
  name: "Double_Y",
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.up_init();
  },
  methods: {
    calMax(arr) {
      for (var i = 1; i < arr.length; i++) {
        // 求出一组数组中的最大值
        if (arr[0] < arr[i]) {
          arr[0] = arr[i];
        }
      }
      return Math.ceil(arr[0] / 10) * 10; //向上取整 输出最大值
    },
    up_init() {
      let option = {
        //1、 格式化提示信息
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
          data: ["注册", "活跃"]
        },
        grid: {
          left: "5%",
          right: "5%",
          top: "15%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "注册",
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
              120,
              130
            ]),
            splitNumber: 5,
            interval:
              this.calMax([
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
                120,
                130
              ]) / 5
          },
          {
            type: "value",
            name: "活跃",
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
              ]) / 5
          }
        ],
        series: [
          {
            name: "注册",
            type: "line",
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
          },
          {
            name: "活跃",
            type: "line",
            yAxisIndex: 1,
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
      var myCharts = document.getElementsByClassName("echarts_index");
      for (let i = 0; i < myCharts.length; i++) {
        const element = myCharts[i];
        this.$nextTick(() => {
          echarts.init(element).setOption(option, true);
        });
      }
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.echarts_index {
  margin-top: 20px;
  height: 400px;
}
</style>
