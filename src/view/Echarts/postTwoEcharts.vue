<template>
  <div>
    <Row style="margin-bottom: 20px">
      <Col span="24">
        <div style="float: left">左边</div>
        <div style="float: right">右边</div>
      </Col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px">
      <Col
        :md="24"
        :lg="12"
        style="margin-bottom: 20px"
        v-for="(item_1, index_1) in echarts_data"
        :key="index_1"
      >
        <Card>
          <div class="echarts_index"></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import echarts from "echarts";
import tdTheme from "@/libs/echarts_them.json";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "postTwoEcharts",
  components: {},
  props: {},
  data() {
    return {
      myCharts_dom: [],
      echarts_data: [],
    };
  },
  computed: {},
  methods: {
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
          // 1、 格式化提示信息
          title: {
            left: "center",
            text: element_option.title_text,
          },
          tooltip: {
            trigger: "axis",
            formatter: function (params) {
              var name = params[0].name + "<br/>"; // x轴名称
              var str = ""; // 辅助变量，存储要展示的提示信息
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
            },
          },
          toolbox: {
            feature: {
              dataView: {
                show: true,
                readOnly: false,
              },
              magicType: {
                show: true,
                type: ["line", "bar"],
              },
              restore: {
                show: true,
              },
              saveAsImage: {
                show: true,
              },
            },
          },
          legend: {},
          grid: {
            left: "5%",
            right: "5%",
            top: "15%",
            bottom: "10%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: element_option.xAxis_data,
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: element_option.yAxis_series.map((item) => {
            return {
              type: "value",
              name: item.name,
              min: 0,
              max: this.calMax(item.data),
              splitNumber: 5,
              interval: this.calMax(item.data) / 5,
            };
          }),
          dataZoom: [
            {
              start: 0,
              end: 30,
              startValue: "0",
            },
            {
              type: "inside",
            },
          ],
          series: element_option.yAxis_series,
        };
        // 当数据更新了 在dom中渲染后 再去渲染echarts
        this.$nextTick(() => {
          // 存储已经init的echarts实例
          this.myCharts_dom.push(echarts.init(element, "tdTheme"));
          this.myCharts_dom[i].setOption(option, true);
          // // 可以重新渲染图表
          // this.myCharts_dom.map(item => {
          //   item.resize();
          // });
        });
      }
    },
  },
  created() {
    // 获取echarts_data
    this.echarts_data = [
      {
        title_text: "双Y刻度相同",
        xAxis_data: [
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
          "12月",
        ],
        yAxis_series: [
          {
            name: "注册",
            type: "line",
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          },
          {
            name: "活跃",
            type: "line",
            yAxisIndex: 1,
            data: [
              1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.1, 20.4, 30.5,
            ],
          },
        ],
      },
      {
        title_text: "双Y刻度相同",
        xAxis_data: [
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
          "12月",
        ],
        yAxis_series: [
          {
            name: "注册",
            type: "bar",
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          },
          {
            name: "活跃",
            type: "bar",
            yAxisIndex: 1,
            data: [
              1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.1, 20.4, 30.5,
            ],
          },
        ],
      },
    ];
  },
  mounted() {},
  watch: {
    // echarts_data发生变化  当数据更新了 在dom中渲染后 再去执行this.up_init
    echarts_data() {
      this.$nextTick(() => {
        this.up_init();
      });
    },
  },
};
</script>
<style lang="less" scoped>
.echarts_index {
  margin-top: 20px;
  height: 400px;
}
</style>
