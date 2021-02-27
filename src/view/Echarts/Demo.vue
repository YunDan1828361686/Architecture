<template>
  <div>
    <!-- 优化Card加边框 -->
    <div class="border-container">
      <span class="top-left border-span"></span>
      <span class="top-right border-span"></span>
      <span class="bottom-left border-span"></span>
      <span class="bottom-right border-span"></span>
      <Card>
        <div id="echarts_index_1"></div>
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
import tdTheme from "@/libs/echarts_them.json";
import { _debounce } from "@/libs/Perform_optimization.js";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "Demo",
  data() {
    return {
      spinShow_1: false,
      myCharts_dom_1: [],
      echarts_data: [],
    };
  },
  created() {
    // 获取echarts_data
    this.$axios("/node2/echarts2", "post").then((res) => {
      this.echarts_data = res.data.data;
    });
  },
  methods: {
    resize: _debounce(function () {
      //  高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
      if (this.$route.name == "Demo") {
        {
          console.log("重新渲染了");
          this.myCharts_dom_1.map((item) => {
            console.log(item);
            item.resize();
          });
        }
      }
    }, 300),
    // 解决两个Y轴分隔线相同
    calMax(arr) {
      return Math.ceil(Math.max(...arr) / 10) * 10; // 找到最大值 除10 向上取整 乘10 输出最大值
    },
    up_init() {
      var myCharts = document.getElementById("echarts_index_1");
      let option = {
        // 1、 格式化提示信息
        title: {
          left: "center",
          text: this.echarts_data.title_text,
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
            data: this.echarts_data.xAxis_data,
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: this.echarts_data.yAxis_series.map((item) => {
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
        series: this.echarts_data.yAxis_series,
      };
      // 当数据更新了 在dom中渲染后 再去渲染echarts
      this.$nextTick(() => {
        // 存储已经init的echarts实例，注意如果有多个echarts请用class，如触发时机不同，请关注this.myCharts_dom_1
        this.$set(this.myCharts_dom_1, "0", echarts.init(myCharts, "tdTheme"));
        // 让第一个加进去的渲染
        this.myCharts_dom_1[0].setOption(option, true);
        // 窗口发生改变重新加载echarts
        on(window, "resize", this.resize);
      });
    },
  },
  computed: {
    collapsed_() {
      return this.$store.state.app.collapsed_;
    },
  },
  watch: {
    // echarts_data发生变化  当数据更新了 在dom中渲染后 再去执行this.up_init
    echarts_data: function () {
      this.$nextTick(() => {
        this.up_init();
      });
    },
    collapsed_() {
      setTimeout(() => {
        this.resize();
      }, 300);
    },
  },
  beforeDestroy() {
    console.log("销毁");
    off(window, "resize", this.resize);
  },
};
</script>
 
<style lang="less" scoped>
#echarts_index_1 {
  margin-top: 20px;
  height: 400px;
}
</style>