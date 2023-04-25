<template>
  <div>
    <!-- 优化Card加边框 -->
    <div class="border-container">
      <span class="top-left border-span"></span>
      <span class="top-right border-span"></span>
      <span class="bottom-left border-span"></span>
      <span class="bottom-right border-span"></span>
      <Card>
        <div ref="echarts_index_2" id="echarts_index_2"></div>
        <Spin size="large" fix v-if="spinShow_1"></Spin>
      </Card>
    </div>
  </div>
</template>

<script>
// 哪个组件用  在哪引入echarts
// 浏览器窗口大小发生变化
import { on, off } from "@/libs/tools";
import echarts from "echarts";
// import DataV from "@/libs/DataV.json";
import DataV from "@/libs/DataV2.json";
import tdTheme from "@/libs/echarts_them.json";
import { _debounce } from "@/libs/Perform_optimization.js";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "Map2",
  data() {
    return {
      spinShow_1: true,
      myCharts_dom: [],
      // Map_data: [
      //   { name: "天津", value: [117.4219, 39.4189, 42] },
      //   { name: "河北", value: [114.4995, 38.1006, 102] },
      //   { name: "山西", value: [112.3352, 37.9413, 81] },
      //   { name: "内蒙古", value: [110.3467, 41.4899, 47] },
      //   { name: "辽宁", value: [123.1238, 42.1216, 67] },
      //   { name: "吉林", value: [125.8154, 44.2584, 82] },
      //   { name: "黑龙江", value: [127.9688, 45.368, 123] },
      //   { name: "上海", value: [121.4648, 31.2891, 24] },
      //   { name: "江苏", value: [118.8062, 31.9208, 92] },
      //   { name: "浙江", value: [119.5313, 29.8773, 114] },
      //   { name: "安徽", value: [117.29, 32.0581, 109] },
      //   { name: "福建", value: [119.4543, 25.9222, 116] },
      //   { name: "江西", value: [116.0046, 28.6633, 91] },
      //   { name: "山东", value: [117.1582, 36.8701, 119] },
      //   { name: "河南", value: [113.4668, 34.6234, 137] },
      //   { name: "湖北", value: [114.3896, 30.6628, 116] },
      //   { name: "湖南", value: [113.0823, 28.2568, 114] },
      //   { name: "重庆", value: [108.384366, 30.439702, 91] },
      //   { name: "四川", value: [103.9526, 30.7617, 125] },
      //   { name: "贵州", value: [106.6992, 26.7682, 62] },
      //   { name: "云南", value: [102.9199, 25.4663, 83] },
      //   { name: "西藏", value: [91.11, 29.97, 9] },
      //   { name: "陕西", value: [109.1162, 34.2004, 80] },
      //   { name: "甘肃", value: [103.5901, 36.3043, 56] },
      //   { name: "青海", value: [101.4038, 36.8207, 10] },
      //   { name: "宁夏", value: [106.3586, 38.1775, 18] },
      //   { name: "新疆", value: [87.9236, 43.5883, 180] },
      //   { name: "广东", value: [113.12244, 23.009505, 123] },
      //   { name: "广西", value: [108.479, 23.1152, 59] },
      //   { name: "海南", value: [110.3893, 19.8516, 14] },
      // ],
      Map_data: [
        { name: "东北地区", value: [128.1445, 45.5156, 998] },
        { name: "华北地区", value: [115.1551, 42.2539, 42] },
        { name: "华东地区", value: [119.4648, 29.2891, 42] },
        { name: "华南地区", value: [111.2813, 23.6426, 42] },
        { name: "华中地区", value: [112.8, 31.1572, 42] },
        { name: "西南地区", value: [97.5, 30.1904, 42] },
        { name: "西北地区", value: [91.5996, 39.6396, 42] },
      ],
    };
  },
  mounted() {
    var option = {
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
        text: "中国地图",
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
        zoom: 1.2,
        top: 160,
        left: "50%",
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
          data: this.Map_data,
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
          data: this.Map_data,
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          hoverAnimation: true,
          zlevel: 1,
        },
      ],
    };
    // 如果有别的事件导致这个echarts重新setOption了，就会导致这个echarts的click或别的事件多次执行，所以要清理并销毁
    if (this.myCharts_dom[0]) {
      // 清理并销毁echarts的init实例
      this.myCharts_dom[0].clear();
      this.myCharts_dom[0].dispose();
    }
    // 当数据更新了 在dom中渲染后 再去渲染echarts
    // var myCharts = this.$refs.echarts_index_2;
    var myCharts = document.getElementById("echarts_index_2");
    // 存储已经init的echarts实例
    this.$set(this.myCharts_dom, "0", echarts.init(myCharts, "tdTheme"));
    this.$nextTick(() => {
      echarts.registerMap("china", DataV);
      // 让第一个加进去的渲染
      this.myCharts_dom[0].setOption(option, true);
      // 添加点击事件
      this.EchartsClick();
      // 窗口发生改变重新加载echarts
      on(window, "resize", this.resize);
      setTimeout(() => {
        this.spinShow_1 = false;
      }, 300);
    });
  },
  methods: {
    resize: _debounce(function () {
      //  高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
      if (this.$route.name == "Map2") {
        {
          this.myCharts_dom.map((item) => {
            console.log(item);
            item.resize();
          });
        }
      }
    }, 300),
    EchartsClick() {
      this.myCharts_dom[0].on("click", (params) => {
        console.log(params);
      });
    },
  },
  computed: {
    collapsed_() {
      return this.$store.state.app.collapsed_;
    },
  },
  watch: {
    collapsed_() {
      setTimeout(() => {
        this.resize();
      }, 300);
    },
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  },
};
</script>

<style lang="less" scoped>
#echarts_index_2 {
  height: 800px;
}
</style>
