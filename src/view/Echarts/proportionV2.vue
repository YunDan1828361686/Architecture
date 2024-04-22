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
export default {
  name: "proportionV2",
  components: {},
  props: {},
  data() {
    return {
      spinShow_1: true,
      myCharts_dom: [],
      echarts_data_1: {},
      // 里面是echarts的实例
      myCharts_dom: [],
    };
  },
  computed: {},
  methods: {
    up_init_1() {
      var element = document.querySelector("#echarts_1");
      var ele_option = {
        legend: {
          show: true,
          icon: "circle",
          bottom: "1%",
          width: "auto",
          right: "center",
        },
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                width: "68",
                height: "68",
              },
              left: "center",
              top: "center",
            },
          ],
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            hoverAnimation: true,
            label: {
              normal: {
                position: "",
              },
            },
            labelLine: {
              length: 10,
              length2: 10,
            },
            itemStyle: {
              normal: {
                borderColor: "black",
                borderWidth: 1,
              },
            },
            data: null,
          },
        ],
      };
      ele_option.series[0].data = this.echarts_data_1;
      ele_option.series[0].itemStyle.normal.borderWidth = 5;

      ele_option.series[0].labelLine.show = false;
      ele_option.series[0].radius = "68%";
      ele_option.legend.show = true;
      ele_option.legend.width = "200";
      ele_option.series[0].label.normal.position = "inner";
      ele_option.series[0].label.normal.formatter = "{c}个\n\n占比{d}%";

      // ele_option.series[0].radius = "68%";
      // ele_option.series[0].center = ["40%", "50%"];
      // ele_option.legend.width = "10%";
      // ele_option.legend.right = "5";
      // ele_option.legend.top = "5";
      // ele_option.series[0].label.normal.formatter = "{c}个";

      // ele_option.series[0].radius = "80%";
      // ele_option.series[0].center = ["40%", "50%"];
      // ele_option.legend.width = "10%";
      // ele_option.legend.right = "5";
      // ele_option.legend.top = "5";
      // ele_option.series[0].label.normal.position = "inner";
      // ele_option.series[0].label.normal.formatter = "{c}个\n\n占比{d}%";

      // 存储已经init的echarts实例
      this.myCharts_dom.push(echarts.init(element, "tdTheme"));
      this.myCharts_dom[0].setOption(ele_option, true);
      this.spinShow_1 = false;
    },
  },
  created() {
    // 获取echarts_data_1
    this.echarts_data_1 = [
      {
        name: "可维修",
        value: 20392,
      },
      {
        name: "不可维修",
        value: 29100,
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
  height: 400px;
}
</style>
