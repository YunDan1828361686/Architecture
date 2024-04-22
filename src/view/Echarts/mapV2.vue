<template>
  <div>
    <Row :gutter="20" style="margin-top: 10px">
      <Col :md="24" :lg="24" style="margin-bottom: 20px">
        <Card>
          <div id="echarts_1"></div>
          <Spin size="large" fix v-if="spinShow_1"></Spin>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import echarts from "echarts";
import tdTheme from "@/libs/echarts_them.json";
echarts.registerTheme("tdTheme", tdTheme);
import DataV2 from "@/libs/DataV2.json";
export default {
  name: "mapV2",
  components: {},
  props: {},
  data() {
    return {
      spinShow_1: true,
      myCharts_dom: [],
      echarts_data_1: [],
      // 里面是echarts的实例
      myCharts_dom: [],
    };
  },
  computed: {},
  methods: {
    up_init_1() {
      var element = document.querySelector("#echarts_1");
      var ele_option = {
        // 背景
        backgroundColor: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#0f378f", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#00091a", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        title: {
          top: 20,
          // text: "中国地图",
          subtext: "",
          x: "center",
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (typeof params.value[2] == "undefined") {
              return "";
            } else {
              return params.name + " : " + params.value[2];
            }
          },
        },
        geo: {
          map: "china",
          show: true,
          roam: true,
          zoom: 1.5,
          top: "30%",
          left: "49%",
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#3a7fd5",
              borderColor: "#0a53e9", //线
              shadowColor: "#092f8f", //外发光
              shadowBlur: 20,
            },
            emphasis: {
              areaColor: "#0a2dae", //悬浮区背景
            },
          },
        },
        series: [
          {
            // 点
            symbolSize: 8,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "#fff",
              },
            },
            name: "light",
            type: "scatter",
            coordinateSystem: "geo",
            data: [],
          },
          {
            // 坐标点
            name: "Top 5",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: [50, 50],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 9,
                },
                formatter(value) {
                  return value.data.value[2];
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#D8BC37", //标志颜色
              },
            },
            data: [],
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            zlevel: 1,
          },
        ],
      };
      ele_option.series[0].data = this.echarts_data_1;
      ele_option.series[1].data = this.echarts_data_1;
      // 存储已经init的echarts实例
      this.myCharts_dom.push(echarts.init(element, "tdTheme"));
      // 再注册地图
      echarts.registerMap("china", DataV2);
      this.myCharts_dom[0].setOption(ele_option, true);
      this.spinShow_1 = false;
    },
  },
  created() {
    // 获取echarts_data_1
    this.echarts_data_1 = [
      { name: "东北地区", value: [128.1445, 45.5156, 42] },
      { name: "华北地区", value: [115.1551, 42.2539, 42] },
      { name: "华东地区", value: [119.4648, 29.2891, 42] },
      { name: "华南地区", value: [111.2813, 23.6426, 42] },
      { name: "华中地区", value: [112.8, 31.1572, 42] },
      { name: "西南地区", value: [97.5, 30.1904, 42] },
      { name: "西北地区", value: [91.5996, 39.6396, 42] },
    ];
  },
  mounted() {},
  watch: {
    // echarts_data_1发生变化  当数据更新了 在dom中渲染后 再去执行this.up_init_1
    echarts_data_1() {
      this.$nextTick(() => {
        this.up_init_1();
      });
    },
  },
};
</script>
<style lang="less" scoped>
#echarts_1 {
  margin-top: 20px;
  height: 500px;
}
</style>
