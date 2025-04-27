<template>
  <div>
    <Row style="margin-bottom: 20px">
      <Col span="24">
        <div style="float: left">左边</div>
        <div style="float: right">右边</div>
      </Col>
    </Row>
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
import DataV1 from "@/libs/DataV1.json";
export default {
  name: "mapV1",
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
          left: "36%",
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
      echarts.registerMap("china", DataV1);
      this.myCharts_dom[0].setOption(ele_option, true);
      this.spinShow_1 = false;
    },
  },
  created() {
    // 获取echarts_data_1
    this.echarts_data_1 = [
      {
        name: "天津",
        value: [117.4219, 39.4189, 42],
      },
      {
        name: "河北",
        value: [114.4995, 38.1006, 102],
      },
      {
        name: "山西",
        value: [112.3352, 37.9413, 81],
      },
      {
        name: "内蒙古",
        value: [110.3467, 41.4899, 47],
      },
      {
        name: "辽宁",
        value: [123.1238, 42.1216, 67],
      },
      {
        name: "吉林",
        value: [125.8154, 44.2584, 82],
      },
      {
        name: "黑龙江",
        value: [127.9688, 45.368, 123],
      },
      {
        name: "上海",
        value: [121.4648, 31.2891, 24],
      },
      {
        name: "江苏",
        value: [118.8062, 31.9208, 92],
      },
      {
        name: "浙江",
        value: [119.5313, 29.8773, 114],
      },
      {
        name: "安徽",
        value: [117.29, 32.0581, 109],
      },
      {
        name: "福建",
        value: [119.4543, 25.9222, 116],
      },
      {
        name: "江西",
        value: [116.0046, 28.6633, 91],
      },
      {
        name: "山东",
        value: [117.1582, 36.8701, 119],
      },
      {
        name: "河南",
        value: [113.4668, 34.6234, 137],
      },
      {
        name: "湖北",
        value: [114.3896, 30.6628, 116],
      },
      {
        name: "湖南",
        value: [113.0823, 28.2568, 114],
      },
      {
        name: "重庆",
        value: [108.384366, 30.439702, 91],
      },
      {
        name: "四川",
        value: [103.9526, 30.7617, 125],
      },
      {
        name: "贵州",
        value: [106.6992, 26.7682, 62],
      },
      {
        name: "云南",
        value: [102.9199, 25.4663, 83],
      },
      {
        name: "西藏",
        value: [91.11, 29.97, 9],
      },
      {
        name: "陕西",
        value: [109.1162, 34.2004, 80],
      },
      {
        name: "甘肃",
        value: [103.5901, 36.3043, 56],
      },
      {
        name: "青海",
        value: [101.4038, 36.8207, 10],
      },
      {
        name: "宁夏",
        value: [106.3586, 38.1775, 18],
      },
      {
        name: "新疆",
        value: [87.9236, 43.5883, 180],
      },
      {
        name: "广东",
        value: [113.12244, 23.009505, 123],
      },
      {
        name: "广西",
        value: [108.479, 23.1152, 59],
      },
      {
        name: "海南",
        value: [110.3893, 19.8516, 14],
      },
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
