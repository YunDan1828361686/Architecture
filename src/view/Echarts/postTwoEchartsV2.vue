<template>
  <div>
    <Row style="margin-bottom: 20px">
      <Col span="24">
        <div style="float: left">左边</div>
        <div style="float: right">右边</div>
      </Col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px">
      <Col :md="24" :lg="12" style="margin-bottom: 20px">
        <Card>
          <div id="echarts_1"></div>
          <Spin size="large" fix v-if="spinShow_1"></Spin>
        </Card>
      </Col>
      <Col :md="24" :lg="12" style="margin-bottom: 20px">
        <Card>
          <div id="echarts_2"></div>
          <Spin size="large" fix v-if="spinShow_2"></Spin>
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
  name: "postTwoEchartsV2",
  components: {},
  props: {},
  data() {
    return {
      spinShow_1: true,
      spinShow_2: true,
      myCharts_dom: [],
      echarts_data_1: {},
      echarts_data_2: {},
      // 里面是echarts的实例
      myCharts_dom: [],
    };
  },
  computed: {},
  methods: {
    // 解决两个Y轴分隔线相同
    calMax(arr) {
      return Math.ceil(Math.max(...arr) / 10) * 10; // 找到最大值 除10 向上取整 乘10 输出最大值
    },
    up_init_1() {
      var element = document.querySelector("#echarts_1");
      var ele_option = {
        title: {
          text: "同名数量统计",
          subtext: "纯属虚构",
          x: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 70,
          bottom: 20,
          textStyle: {
            fontSize: 16,
          },
          // selected: data.selected
        },
        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "55%",
            center: ["30%", "55%"],
            // data: data.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      ele_option.legend.selected = this.echarts_data_1.selected;
      ele_option.series[0].data = this.echarts_data_1.seriesData;
      // 存储已经init的echarts实例
      this.myCharts_dom.push(echarts.init(element, "tdTheme"));
      this.myCharts_dom[0].setOption(ele_option, true);
      this.spinShow_1 = false;
    },
    up_init_2() {
      var element = document.querySelector("#echarts_2");
      var ele_option = {
        // 1、 格式化提示信息
        title: {
          left: "center",
          // text: element_option.title_text
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
            // data: element_option.xAxis_data,
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        // yAxis: element_option.yAxis_series.map(item => {
        //   return {
        //     type: "value",
        //     name: item.name,
        //     min: 0,
        //     max: this.calMax(item.data),
        //     splitNumber: 5,
        //     interval: this.calMax(item.data) / 5
        //   };
        // }),
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
        // series: element_option.yAxis_series
      };
      ele_option.title.text = this.echarts_data_2.title_text;
      ele_option.xAxis[0].data = this.echarts_data_2.xAxis_data;
      ele_option.yAxis = this.echarts_data_2.yAxis_series.map((item) => {
        return {
          type: "value",
          name: item.name,
          min: 0,
          max: this.calMax(item.data),
          splitNumber: 5,
          interval: this.calMax(item.data) / 5,
        };
      });
      ele_option.series = this.echarts_data_2.yAxis_series;
      // 存储已经init的echarts实例
      this.myCharts_dom.push(echarts.init(element, "tdTheme"));
      this.myCharts_dom[1].setOption(ele_option, true);
      this.spinShow_2 = false;
    },
  },
  created() {
    // 获取echarts_data_1
    this.echarts_data_1 = {
      seriesData: [
        {
          name: "喻蒋梁·贾柳孔",
          value: 13799,
        },
        {
          name: "傅卞",
          value: 28654,
        },
        {
          name: "滕李谈雷朱·任",
          value: 33383,
        },
        {
          name: "魏邬葛",
          value: 20193,
        },
        {
          name: "孔季方",
          value: 79526,
        },
        {
          name: "卫麻乐",
          value: 36989,
        },
        {
          name: "吴季",
          value: 51801,
        },
        {
          name: "尤窦路",
          value: 57258,
        },
        {
          name: "沈庞萧",
          value: 57126,
        },
        {
          name: "危熊郎",
          value: 76408,
        },
        {
          name: "狄薛皮·严成韩",
          value: 21106,
        },
        {
          name: "倪周",
          value: 8884,
        },
        {
          name: "朱常",
          value: 35613,
        },
        {
          name: "彭钱彭·贾",
          value: 15817,
        },
        {
          name: "岑郎黄",
          value: 37114,
        },
        {
          name: "米伏",
          value: 43496,
        },
        {
          name: "伏蒋范",
          value: 72791,
        },
        {
          name: "钱韦韩",
          value: 204,
        },
        {
          name: "韩纪罗",
          value: 11932,
        },
        {
          name: "庞花",
          value: 50086,
        },
        {
          name: "蒋邹",
          value: 18029,
        },
        {
          name: "姚施强",
          value: 8958,
        },
        {
          name: "水米·卞苗熊",
          value: 58881,
        },
        {
          name: "麻彭柏湛·强茅臧",
          value: 14554,
        },
        {
          name: "沈孟·郑邹毛",
          value: 30871,
        },
        {
          name: "汪罗朱·谈郎时",
          value: 65523,
        },
        {
          name: "宋席邹窦·计毕",
          value: 2670,
        },
        {
          name: "魏杨",
          value: 35229,
        },
        {
          name: "郝范",
          value: 51481,
        },
        {
          name: "强阮郝",
          value: 93228,
        },
        {
          name: "娄屈水·伏季伍",
          value: 75895,
        },
        {
          name: "华毛花",
          value: 54587,
        },
        {
          name: "狄项董·褚费袁",
          value: 25083,
        },
        {
          name: "贝郎许苏沈·时毛强",
          value: 54141,
        },
        {
          name: "屈安凤",
          value: 9638,
        },
        {
          name: "熊平毕",
          value: 46397,
        },
        {
          name: "卞",
          value: 10383,
        },
        {
          name: "董沈贺",
          value: 83008,
        },
        {
          name: "严唐云",
          value: 67090,
        },
        {
          name: "时谢王",
          value: 71662,
        },
        {
          name: "伍卜尹花韦·戚邵强",
          value: 55911,
        },
        {
          name: "廉秦",
          value: 64663,
        },
        {
          name: "冯阮·季殷",
          value: 15218,
        },
        {
          name: "梁姜伏",
          value: 5067,
        },
        {
          name: "舒昌倪",
          value: 21143,
        },
        {
          name: "倪黄俞",
          value: 47793,
        },
        {
          name: "范华",
          value: 98913,
        },
        {
          name: "郑元齐",
          value: 85580,
        },
        {
          name: "元蒋狄",
          value: 43735,
        },
        {
          name: "成茅",
          value: 95721,
        },
      ],
      selected: {
        "喻蒋梁·贾柳孔": true,
        傅卞: true,
        "滕李谈雷朱·任": true,
        魏邬葛: true,
        孔季方: true,
        卫麻乐: true,
        吴季: false,
        尤窦路: false,
        沈庞萧: false,
        危熊郎: false,
        "狄薛皮·严成韩": false,
        倪周: false,
        朱常: false,
        "彭钱彭·贾": false,
        岑郎黄: false,
        米伏: false,
        伏蒋范: false,
        钱韦韩: false,
        韩纪罗: false,
        庞花: false,
        蒋邹: false,
        姚施强: false,
        "水米·卞苗熊": false,
        "麻彭柏湛·强茅臧": false,
        "沈孟·郑邹毛": false,
        "汪罗朱·谈郎时": false,
        "宋席邹窦·计毕": false,
        魏杨: false,
        郝范: false,
        强阮郝: false,
        "娄屈水·伏季伍": false,
        华毛花: false,
        "狄项董·褚费袁": false,
        "贝郎许苏沈·时毛强": false,
        屈安凤: false,
        熊平毕: false,
        卞: false,
        董沈贺: false,
        严唐云: false,
        时谢王: false,
        "伍卜尹花韦·戚邵强": false,
        廉秦: false,
        "冯阮·季殷": false,
        梁姜伏: false,
        舒昌倪: false,
        倪黄俞: false,
        范华: false,
        郑元齐: false,
        元蒋狄: false,
        成茅: false,
      },
    };
    // 获取echarts_data_2
    this.echarts_data_2 = {
      title_text: "双Y刻度相同",
      xAxis_data: [
        "1点",
        "2点",
        "3点",
        "4点",
        "5点",
        "6点",
        "7点",
        "8点",
        "9点",
        "10点",
        "11点",
        "12点",
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
          data: [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.1, 20.4, 30.5],
        },
      ],
    };
  },
  mounted() {},
  watch: {
    // echarts_data_1发生变化  当数据更新了 在dom中渲染后 再去执行this.up_init_1
    echarts_data_1() {
      this.$nextTick(() => {
        this.up_init_1();
      });
    },
    // echarts_data_2发生变化  当数据更新了 在dom中渲染后 再去执行this.up_init_2
    echarts_data_2() {
      this.$nextTick(() => {
        this.up_init_2();
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
#echarts_2 {
  margin-top: 20px;
  height: 400px;
}
</style>
