<template>
  <div>
    <Row :gutter="20">
      <Col
        :xs="12"
        :md="8"
        :lg="4"
        v-for="(infor, i) in inforCardData"
        :key="`infor-${i}`"
        style="height: 120px;padding-bottom: 10px;"
      >
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style" />
          <p>{{ infor.title }}</p>
        </infor-card>
      </Col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px;">
      <Col :md="24" :lg="10" style="margin-bottom: 20px;">
        <div class="border-container">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <Card shadow style="height:500px;">
            <Tabs style="height:500px;">
              <TabPane :label="tab_label_1">
                <div class="echarts_1"></div>
              </TabPane>
              <!-- 插槽代替尾部元素 -->
              <div slot="extra">
                <span>
                  <DatePicker
                    type="date"
                    :clearable="false"
                    :value="tab_label_1"
                    format="yyyy-MM-dd"
                    style="width: 200px"
                    placement="bottom-end"
                    placeholder="请输入查询时间"
                    @on-change="DatePicker_change_1"
                  ></DatePicker>
                </span>
              </div>
            </Tabs>
            <Spin size="large" fix v-if="spinShow_1"></Spin>
          </Card>
        </div>
      </Col>
      <Col :md="24" :lg="14" style="margin-bottom: 20px;">
        <div class="border-container">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <Card shadow style="height:500px;">
            <Tabs style="height:500px;">
              <TabPane :label="tab_label_2">
                <div class="echarts_1"></div>
              </TabPane>
              <!-- 插槽代替尾部元素 -->
              <div slot="extra">
                <span>
                  <DatePicker
                    type="date"
                    :clearable="false"
                    :value="tab_label_2"
                    format="yyyy-MM-dd"
                    style="width: 200px"
                    placement="bottom-end"
                    placeholder="请输入查询时间"
                    @on-change="DatePicker_change_2"
                  ></DatePicker>
                </span>
              </div>
            </Tabs>
            <Spin size="large" fix v-if="spinShow_2"></Spin>
          </Card>
        </div>
      </Col>
    </Row>
    <Row>
      <div class="border-container">
        <span class="top-left border-span"></span>
        <span class="top-right border-span"></span>
        <span class="bottom-left border-span"></span>
        <span class="bottom-right border-span"></span>
        <Card shadow>3333</Card>
      </div>
    </Row>
  </div>
</template>

<script>
import InforCard from "_c/info-card";
import CountTo from "_c/count-to";
import { mapActions } from "vuex";
// 哪个组件用  在哪引入echarts
// 浏览器窗口大小发生变化
import { on, off } from "@/libs/tools";
import echarts from "echarts";
import tdTheme from "@/libs/echarts_them.json";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "home",
  components: {
    InforCard,
    CountTo
  },
  data() {
    return {
      inforCardData: [
        {
          title: "新增用户",
          icon: "md-person-add",
          count: 803,
          color: "#2d8cf0"
        },
        { title: "累计点击", icon: "md-locate", count: 232, color: "#19be6b" },
        {
          title: "新增问答",
          icon: "md-help-circle",
          count: 142,
          color: "#ff9900"
        },
        { title: "分享统计", icon: "md-share", count: 657, color: "#ed3f14" },
        {
          title: "新增互动",
          icon: "md-chatbubbles",
          count: 12,
          color: "#E46CBB"
        },
        { title: "新增页面", icon: "md-map", count: 14, color: "#9A66E4" }
      ],
      // tab页的label名称
      tab_label_1: "",
      tab_label_2: "",
      // tab页的loading
      spinShow_1: false,
      spinShow_2: false,
      // 代表echarts的dom元素
      myCharts_dom_1: [],
      // echarts的数据
      echarts_data_1: [],
      echarts_option_1: [
        {
          title: {
            text: "同名数量统计",
            subtext: "纯属虚构",
            x: "center"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            type: "scroll",
            orient: "vertical",
            right: 10,
            top: 70,
            bottom: 20,
            textStyle: {
              fontSize: 16
            }
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
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        },
        {
          // 1、 格式化提示信息
          title: {
            left: "center"
            // text: element_option.title_text
          },
          tooltip: {
            trigger: "axis",
            formatter: function(params) {
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
          legend: {},
          grid: {
            left: "5%",
            right: "5%",
            top: "15%",
            bottom: "10%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              // data: element_option.xAxis_data,
              axisPointer: {
                type: "shadow"
              }
            }
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
              startValue: "0"
            },
            {
              type: "inside"
            }
          ]
          // series: element_option.yAxis_series
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getCurrentDate"]),
    // 时间切换
    DatePicker_change_1(index) {
      // console.log("弹框出现");
      this.spinShow_1 = true;
      this.tab_label_1 = index;
    },
    DatePicker_change_2(index) {
      // console.log("弹框出现");
      this.spinShow_2 = true;
      this.tab_label_2 = index;
    },
    resize() {
      if (this.$route.name == "home") {
        {
          this.myCharts_dom_1.map(item => {
            item.resize();
          });
        }
      }
    },
    // 解决两个Y轴分隔线相同
    calMax(arr) {
      return Math.ceil(Math.max(...arr) / 10) * 10; // 找到最大值 除10 向上取整 乘10 输出最大值
    },
    up_init() {
      const myCharts = document.getElementsByClassName("echarts_1");
      const myCharts_option = this.echarts_data_1.map(_ => _.data);
      for (let i = 0; i < myCharts.length; i++) {
        const element = myCharts[i];
        const ele_option = this.echarts_option_1[i];
        const element_option = myCharts_option[i];
        if (!i) {
          ele_option.legend.selected = element_option.selected;
          ele_option.series[0].data = element_option.seriesData;
        } else if (i == 1) {
          ele_option.title.text = element_option.title_text;
          ele_option.xAxis[0].data = element_option.xAxis_data;
          ele_option.yAxis = element_option.yAxis_series.map(item => {
            return {
              type: "value",
              name: item.name,
              min: 0,
              max: this.calMax(item.data),
              splitNumber: 5,
              interval: this.calMax(item.data) / 5
            };
          });
          ele_option.series = element_option.yAxis_series;
        }
        this.$nextTick(() => {
          // 存储已经init的echarts实例
          this.myCharts_dom_1.push(echarts.init(element, "tdTheme"));
          this.myCharts_dom_1[i].setOption(ele_option, true);
          if (!i) {
            this.spinShow_1 = false;
          } else {
            this.spinShow_2 = false;
          }
          // 窗口发生改变重新加载echarts
          on(window, "resize", this.resize);
        });
      }
    }
  },
  mounted() {
    //
  },
  created() {
    // 获取当前时间
    this.getCurrentDate(1).then(res => {
      // console.log("弹框出现");
      this.spinShow_1 = true;
      this.spinShow_2 = true;
      this.tab_label_1 = res;
      this.tab_label_2 = res;
      let pA = new Promise((resolve, reject) => {
        this.$axios("/node2/echarts1", "post")
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(err);
          });
      });
      let pB = new Promise((resolve, reject) => {
        this.$axios("/node2/echarts2", "post")
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(err);
          });
      });
      Promise.all([pA, pB]).then(result => {
        this.echarts_data_1 = result;
      });
    });
  },
  watch: {
    // 监听时间的切换
    tab_label_1: function(newval, oldval) {
      if (!oldval) {
        return;
      }
      console.log("11111111", newval, oldval);
      this.$axios("/node2/echarts1", "post").then(res => {
        this.$set(this.echarts_data_1, "0", res.data);
      });
    },
    // 监听时间的切换
    tab_label_2: function(newval, oldval) {
      if (!oldval) {
        return;
      }
      console.log("22222222", newval, oldval);
      this.$axios("/node2/echarts2", "post").then(res => {
        this.$set(this.echarts_data_1, "1", res.data);
      });
    },
    // echarts_data_1发生变化  当数据更新了 在dom中渲染后 再去执行this.up_init
    echarts_data_1: function(newval, oldval) {
      console.log("33333333", newval, oldval);
      this.$nextTick(() => {
        this.up_init();
      });
    }
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
    console.log("销毁", window);
  }
};
</script>

<style lang="less">
.count-style {
  font-size: 50px;
}
.echarts_1 {
  height: 400px;
}
</style>
