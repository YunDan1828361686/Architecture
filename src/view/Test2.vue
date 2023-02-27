<template>
  <Layout>
    <Sider
      collapsed-width="0"
      hide-trigger
      breakpoint="sm"
      collapsible
      ref="side"
      width="200"
      v-model="isCollapsed"
    >
      <Menu width="auto" theme="light" active-name="" class="nesting_menu">
        <MenuItem name="1"> 连接异常 </MenuItem>
        <MenuItem name="2"> 一段文字一段文字一段文字 </MenuItem>
        <MenuItem name="3"> 一段文字一段文字一段文字 </MenuItem>
        <MenuItem name="4"> 连接正常 </MenuItem>
        <MenuItem name="5"> 一段文字一段文字一段文字 </MenuItem>
        <MenuItem name="6"> 一段文字一段文字一段文字 </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Card :padding="0" style="position: relative; width: 100%" class="Card_">
        <Button
          type="primary"
          icon="ios-menu"
          @click="toggleCollapse"
          :style="{
            width: '100px',
            position: 'absolute',
            top: '10px',
            left: '10px',
            'z-index': 10,
          }"
        >
          菜单
        </Button>
        <Button
          type="primary"
          :icon="$config.icon_refresh"
          @click="refresh_stats"
          :style="{
            width: '100px',
            position: 'absolute',
            top: '50px',
            left: '10px',
            'z-index': 10,
          }"
        >
          刷新状态
        </Button>
        <Card
          :padding="10"
          dis-hover
          :bordered="false"
          :style="{
            position: 'absolute',
            top: '10px',
            right: isCollapsed_right ? '10px' : '-320px',
            'z-index': '10',
            width: '320px',
            'background-color': 'aliceblue',
          }"
        >
          <div class="packUp" @click="packUp_btn" v-if="isCollapsed_right">
            收起
          </div>
          <div class="spread" @click="spread_btn" v-else>展开</div>
          <Row style="margin-bottom: 10px">
            <Col
              span="4"
              style="height: 33px; line-height: 33px; text-align: right"
            >
              层级：
            </Col>
            <Col
              span="20"
              style="
                height: 33px;
                display: flex;
                justify-content: space-between;
              "
            >
              <Button
                :type="btn_type_index_1 == 0 ? 'primary' : 'text'"
                style="margin-right: 5px; width: 100%"
                @click="btn_gy"
              >
                共享库
              </Button>
              <Button
                :type="btn_type_index_1 == 1 ? 'primary' : 'text'"
                style="width: 100%"
                @click="btn_rj"
              >
                软件库
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              span="4"
              style="height: 33px; line-height: 33px; text-align: right"
            >
              节点：
            </Col>
            <Col
              span="20"
              style="
                height: 33px;
                display: flex;
                justify-content: space-between;
              "
            >
              <Button
                :type="btn_type_index_2 == 0 ? 'primary' : 'text'"
                style="margin-right: 5px; width: 100%"
              >
                全部节点
              </Button>
              <Button
                :type="btn_type_index_2 == 1 ? 'primary' : 'text'"
                style="margin-right: 5px; width: 100%"
              >
                故障节点
              </Button>
              <Button
                :type="btn_type_index_2 == 2 ? 'primary' : 'text'"
                style="width: 100%"
              >
                正常节点
              </Button>
            </Col>
          </Row>
        </Card>
        <div id="echarts_index_1"></div>
      </Card>
    </Layout>
  </Layout>
</template>

<script>
import iconV1_1 from "@/assets/images/iconV1/icon1.png";
import iconV1_2 from "@/assets/images/iconV1/icon2.png";
import iconV1_3 from "@/assets/images/iconV1/icon3.png";
import iconV1_4 from "@/assets/images/iconV1/icon4.png";
import iconV1_5 from "@/assets/images/iconV1/icon5.png";
import iconV2_1 from "@/assets/images/iconV2/icon1.png";
import iconV2_2 from "@/assets/images/iconV2/icon2.png";
import iconV2_3 from "@/assets/images/iconV2/icon3.png";
import iconV2_4 from "@/assets/images/iconV2/icon4.png";
import iconV2_5 from "@/assets/images/iconV2/icon5.png";
import icon_node_add from "@/assets/images/node.png";
// 哪个组件用  在哪引入echarts
// 浏览器窗口大小发生变化
import { on, off } from "@/libs/tools";
import echarts from "echarts";
import { _debounce } from "@/libs/Perform_optimization.js";
export default {
  name: "Test2",
  components: {},
  props: ["isCollapsed_"],
  data() {
    return {
      isCollapsed: this.isCollapsed_,
      isCollapsed_right: true,
      btn_type_index_1: "0",
      btn_type_index_2: "0",
      // 节点
      dataInfo: [],
      dataLink_1: [],
      dataLink_2: [],
      // 目前的图例
      option: {},
      myCharts_dom_1: [],
      streamData: [],
    };
  },
  methods: {
    packUp_btn() {
      this.isCollapsed_right = false;
    },
    spread_btn() {
      this.isCollapsed_right = true;
    },
    refresh_stats() {
      this.$Spin.show();
      // 刷新上面的卡片数值
      this.$emit("refresh_dag_monitor");
      // 左边菜单
      this.isCollapsed = false;
      // 右边小菜单
      this.isCollapsed_right = true;
      // 刷新echarts
      this.btn_type_index_1 = 0;
      this.filters_data(this.btn_type_index_1);
      // 刷新echarts
      this.resize();
      setTimeout(() => {
        this.$Spin.hide();
      }, 500);
    },
    // echarts检测屏幕发生变化重新渲染
    resize: _debounce(function () {
      //  高频事件触发，在n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
      if (this.$route.name == "Test2") {
        {
          this.myCharts_dom_1.map((item) => {
            item.resize();
          });
        }
      }
    }, 300),
    toggleCollapse() {
      this.$refs.side.toggleCollapse();
      // 刷新echarts
      this.resize();
    },
    // 共享库
    btn_gy() {
      this.btn_type_index_1 = 0;
      this.filters_data(this.btn_type_index_1);
    },
    // 软件库
    btn_rj() {
      this.btn_type_index_1 = 1;
      this.filters_data(this.btn_type_index_1);
    },
    filters_data(hierarchy, node, Task) {
      // hierarchy层级
      // node节点
      // Task任务
      if (hierarchy == 0) {
        this.option.series[0].data = this.dataInfo.filter(
          (item) => item.category == 0
        );
        this.option.series[1].data = this.dataLink_2.filter(
          (item) => item.category == 0
        );
        this.option.grid[0].top = "100px";
      } else {
        this.option.series[0].data = this.dataInfo.filter(
          (item) => item.category >= 0
        );
        this.option.series[1].data = this.dataLink_2.filter(
          (item) => item.category >= 0
        );
        // this.option.series[1].data = [];
        this.option.grid[0].top = "100px";
      }
      this.myCharts_dom_1[0].clear();
      this.myCharts_dom_1[0].setOption(this.option, true);
    },
  },

  /**
   *@description  钩子函数
   */
  mounted() {
    // 节点图标
    let iconV1_1_Symbol = "image://" + iconV1_1;
    let iconV1_2_Symbol = "image://" + iconV1_2;
    let iconV1_3_Symbol = "image://" + iconV1_3;
    let iconV1_4_Symbol = "image://" + iconV1_4;
    let iconV1_5_Symbol = "image://" + iconV1_5;
    let iconV2_1_Symbol = "image://" + iconV2_1;
    let iconV2_2_Symbol = "image://" + iconV2_2;
    let iconV2_3_Symbol = "image://" + iconV2_3;
    let iconV2_4_Symbol = "image://" + iconV2_4;
    let iconV2_5_Symbol = "image://" + iconV2_5;
    let icon_node_add_ = "image://" + icon_node_add;
    // -- 断开异常图标
    let errorEffectSymbol =
      "path://M671.830688 511.699001l319.059377-319.059377c43.945914-43.945914 43.945914-115.583774 0-159.529688-43.945914-43.945914-115.583774-43.945914-159.529688 0l-319.059377 319.059377-319.059377-319.059377c-43.945914-43.945914-115.583774-43.945914-159.529688 0-43.945914 43.945914-43.945914 115.583774 0 159.529688l319.059377 319.059377-319.059377 319.059377c-43.945914 43.945914-43.945914 115.583774 0 159.529688 43.945914 43.945914 115.583774 43.945914 159.529688 0l319.059377-319.059377 319.059377 319.059377c43.945914 43.945914 115.583774 43.945914 159.529688 0 43.945914-43.945914 43.945914-115.583774 0-159.529688L671.830688 511.699001z";
    // 节点信息
    this.dataInfo = [
      // 第一级
      {
        name: "zqlz数据库",
        category: 0,
        symbolSize: 40,
        symbol: iconV1_1_Symbol,
        value: [0, 60],
      },
      {
        name: "1",
        category: 0,
        symbolSize: 22,
        symbol: "circle",
        value: [-1.2, 57.2],
        // 图形旁边的加号键
        hoverAnimation: false,
        correlation_: "zqlz数据库",
        position: "center",
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              padding: [0, 0, 2, 0],
            },
            formatter: () => "+",
          },
        },
      },
      {
        name: "zbhz数据共享",
        category: 0,
        symbolSize: 40,
        symbol: iconV1_2_Symbol,
        value: [20, 60],
      },
      {
        name: "2",
        category: 0,
        symbolSize: 22,
        symbol: "circle",
        value: [19.2, 57.2],
        // 图形旁边的加号键
        hoverAnimation: false,
        correlation_: "zbhz数据共享",
        position: "center",
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              padding: [0, 0, 2, 0],
            },
            formatter: () => "+",
          },
        },
      },
      {
        name: "zbsj共享",
        category: 0,
        symbolSize: 40,
        symbol: iconV1_3_Symbol,
        value: [40, 100],
      },
      {
        name: "3",
        category: 0,
        symbolSize: 22,
        symbol: "circle",
        value: [39.2, 97.2],
        // 图形旁边的加号键
        hoverAnimation: false,
        correlation_: "zbsj共享",
        position: "center",
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              padding: [0, 0, 2, 0],
            },
            formatter: () => "+",
          },
        },
      },
      {
        name: "hq数据共享",
        category: 0,
        symbolSize: 40,
        symbol: iconV1_4_Symbol,
        value: [40, 20],
      },
      {
        name: "4",
        category: 0,
        symbolSize: 22,
        symbol: "circle",
        value: [39.2, 17.2],
        // 图形旁边的加号键
        hoverAnimation: false,
        correlation_: "hq数据共享",
        position: "center",
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              padding: [0, 0, 2, 0],
            },
            formatter: () => "+",
          },
        },
      },
      {
        name: "yd数据库",
        category: 0,
        symbolSize: 40,
        symbol: iconV1_5_Symbol,
        value: [70, 60],
      },
      {
        name: "5",
        category: 0,
        symbolSize: 22,
        symbol: "circle",
        value: [69.2, 57.2],
        // 图形旁边的加号键
        hoverAnimation: false,
        correlation_: "yd数据库",
        position: "center",
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              padding: [0, 0, 2, 0],
            },
            formatter: () => "+",
          },
        },
      },
      // 二级
      {
        name: "zkhz值班",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_1_Symbol,
        form_: "zqlz数据库",
        value: [0, 80],
      },
      {
        name: "bldt",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_1_Symbol,
        form_: "zqlz数据库",
        value: [0, 40],
      },
      {
        name: "hzzb共享",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_2_Symbol,
        form_: "zbhz数据共享",
        value: [20, 80],
      },
      {
        name: "hzzb基础",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_2_Symbol,
        form_: "zbhz数据共享",
        value: [20, 40],
      },
      {
        name: "hcdy数据库",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_3_Symbol,
        form_: "zbsj共享",
        value: [34, 120],
      },
      {
        name: "rwyl",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_3_Symbol,
        form_: "zbsj共享",
        value: [40, 120],
      },
      {
        name: "sz",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_3_Symbol,
        form_: "zbsj共享",
        value: [46, 120],
      },
      {
        name: "wcjw",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_3_Symbol,
        form_: "zbsj共享",
        value: [28, 70],
      },
      {
        name: "dmzbwh",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_3_Symbol,
        form_: "zbsj共享",
        value: [36, 70],
      },
      {
        name: "dzzbsl",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_3_Symbol,
        form_: "zbsj共享",
        value: [44, 70],
      },
      {
        name: "hcdy",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_3_Symbol,
        form_: "zbsj共享",
        value: [52, 70],
      },
      {
        name: "jy数据库",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_4_Symbol,
        form_: "hq数据共享",
        value: [34, 45],
      },
      {
        name: "yt数据库",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_4_Symbol,
        form_: "hq数据共享",
        value: [40, 45],
      },
      {
        name: "dbts目标库",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_4_Symbol,
        form_: "hq数据共享",
        value: [46, 45],
      },
      {
        name: "zbjy数据库",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_4_Symbol,
        form_: "hq数据共享",
        value: [28, 0],
      },
      {
        name: "wq数据库",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_4_Symbol,
        form_: "hq数据共享",
        value: [36, 0],
      },
      {
        name: "fb数据库",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_4_Symbol,
        form_: "hq数据共享",
        value: [44, 0],
      },
      {
        name: "cw数据库",
        category: 1,
        symbolSize: 40,
        symbol: iconV2_4_Symbol,
        form_: "hq数据共享",
        value: [52, 0],
      },
    ];
    // link线表示连接关系
    this.dataLink_1 = [
      // 第一级之间的关系
      {
        source: "zbhz数据共享",
        value: "99999",
        target: "zqlz数据库",
        label: {
          show: true,
          formatter: "连接失败",
          padding: [0, 0, 5, 0],
          fontSize: 20,
        },
        lineStyle: {
          color: "red",
          curveness: 0,
        },
      },
      {
        source: "zbsj共享",
        value: "9933",
        target: "zbhz数据共享",
      },
      {
        source: "hq数据共享",
        value: "7788",
        target: "zbhz数据共享",
      },
      {
        source: "yd数据库",
        value: "7788",
        target: "hq数据共享",
      },
      // 第二级之间的关系
      {
        source: "hzzb共享",
        value: "7788",
        target: "zkhz值班",
      },
      {
        source: "hcdy数据库",
        value: "7788",
        target: "rwyl",
      },
      // 补充的
      {
        source: "zkhz值班",
        value: "7788",
        target: "zqlz数据库",
      },
      {
        source: "bldt",
        value: "7788",
        target: "zqlz数据库",
      },
      {
        source: "hzzb共享",
        value: "7788",
        target: "zbhz数据共享",
      },
      {
        source: "hzzb基础",
        value: "7788",
        target: "zbhz数据共享",
      },
    ];
    // 直角线
    this.dataLink_2 = [
      {
        source: "zbsj共享",
        value: "9933",
        target: "bldt",
        category: 1,
        coords: [
          [40, 100],
          [-3, 100],
          [-3, 40],
          [0, 40],
        ],
      },
      {
        source: "hzzb共享",
        value: "7788",
        target: "rwyl",
        category: 1,
        coords: [
          [20, 80],
          [20, 130],
          [40, 130],
          [40, 120],
        ],
      },
      {
        source: "hcdy数据库",
        value: "7788",
        target: "zbsj共享",
        category: 1,
        coords: [
          [34, 120],
          [34, 110],
          [40, 110],
          [40, 100],
        ],
      },
      {
        source: "rwyl",
        value: "7788",
        target: "zbsj共享",
        category: 1,
        coords: [
          [40, 120],
          [40, 100],
        ],
      },
      {
        source: "zbsj共享",
        value: "7788",
        target: "sz",
        category: 1,
        coords: [
          [40, 101],
          [46, 101],
          [46, 120],
        ],
      },
      {
        source: "wcjw",
        value: "7788",
        target: "zbsj共享",
        category: 1,
        coords: [
          [28, 70],
          [28, 80],
          [40, 80],
          [40, 100],
        ],
      },
      {
        source: "dmzbwh",
        value: "7788",
        target: "zbsj共享",
        category: 1,
        coords: [
          [36, 70],
          [36, 80],
          [40, 80],
          [40, 100],
        ],
      },
      {
        source: "dzzbsl",
        value: "7788",
        target: "zbsj共享",
        category: 1,
        coords: [
          [44, 70],
          [44, 80],
          [40, 80],
          [40, 100],
        ],
      },
      {
        source: "hcdy",
        value: "7788",
        target: "zbsj共享",
        category: 1,
        coords: [
          [52, 70],
          [52, 80],
          [40, 80],
          [40, 100],
        ],
      },
      {
        source: "jy数据库",
        value: "7788",
        target: "hq数据共享",
        category: 1,
        coords: [
          [34, 45],
          [34, 34],
          [40, 34],
          [40, 20],
        ],
      },
      {
        source: "yt数据库",
        value: "7788",
        target: "hq数据共享",
        category: 1,
        coords: [
          [40, 45],
          [40, 20],
        ],
      },
      {
        source: "zbsj共享",
        value: "7788",
        target: "dbts目标库",
        category: 1,
        coords: [
          [40, 99],
          [55, 99],
          [55, 45],
          [46, 45],
        ],
      },
      {
        source: "zbjy数据库",
        value: "7788",
        target: "hq数据共享",
        category: 1,
        coords: [
          [28, 0],
          [28, 10],
          [40, 10],
          [40, 20],
        ],
      },
      {
        source: "wq数据库",
        value: "7788",
        target: "hq数据共享",
        category: 1,
        coords: [
          [36, 0],
          [36, 10],
          [40, 10],
          [40, 20],
        ],
      },
      {
        source: "fb数据库",
        value: "7788",
        target: "hq数据共享",
        category: 1,
        coords: [
          [44, 0],
          [44, 10],
          [40, 10],
          [40, 20],
        ],
      },
      {
        source: "cw数据库",
        value: "7788",
        target: "hq数据共享",
        category: 1,
        coords: [
          [52, 0],
          [52, 10],
          [40, 10],
          [40, 20],
        ],
      },
    ];
    this.option = {
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
        text: "今日各系统数据推送状态",
        top: "20px",
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      grid: [
        {
          show: false,
          right: "0px",
          top: "0px",
          bottom: "100px",
          width: "100%",
          containLabel: true,
        },
      ],
      tooltip: {
        trigger: "item",
        // triggerOn: "mousemove",
        enterable: true, //鼠标是否可进入提示框浮层中
        position: (point) => {
          return [point[0] + 5, point[1] + 5];
        },
        formatter: function (params) {
          if (params.data.name == "") {
            return;
          }
          if (params.data.name) {
            // 是节点
            return (
              params.name +
              "<br/>" +
              params.marker +
              "随便写点啥：" +
              params.value
            );
          } else {
            // 是线
            if (!params.data.label) {
              return (
                "从" +
                params.data.source +
                "来，往" +
                params.data.target +
                "去：" +
                params.data.value
              );
            } else {
              return (
                "从" +
                params.data.source +
                "来，往" +
                params.data.target +
                "去：" +
                params.data.label.formatter
              );
            }
          }
        },
      },
      animationDuration: 1500,
      animationEasingUpdate: "quinticInOut",
      xAxis: {
        show: false,
        type: "value",
        min: -10,
        max: 80,
      },
      yAxis: {
        show: false,
        type: "value",
        min: -10,
        max: 140,
      },
      dataZoom: [
        {
          start: 0,
          end: 100,
          startValue: "0",
          left: 100,
          right: 100,
        },
        {
          type: "inside",
        },
      ],
      series: [
        {
          type: "graph",
          coordinateSystem: "cartesian2d",
          legendHoverLink: false,
          hoverAnimation: true,
          nodeScaleRatio: false,
          // 箭头
          edgeSymbol: ["circle", "arrow"],
          edgeSymbolSize: [2, 14],
          // edgeLabel: {
          //   show: false,
          //   normal: {
          //     show: true,
          //     position: "middle",
          //     textStyle: {
          //       fontSize: 12,
          //     },
          //     formatter: "{c}",
          //   },
          // },
          // 悬停展示相关的节点
          // focusNodeAdjacency: true,
          roam: false,
          nodeScaleRatio: 0.6,
          categories: [
            {
              name: "一级关系",
              itemStyle: {
                //可配置颜色
                normal: {
                  color: "red",
                },
              },
            },
            {
              name: "二级关系",
              itemStyle: {
                //可配置颜色
                normal: {
                  color: "black",
                },
              },
            },
            {
              name: "三级关系",
              itemStyle: {
                //可配置颜色
                normal: {
                  color: "blue",
                },
              },
            },
            {
              name: "四级关系",
              itemStyle: {
                //可配置颜色
                normal: {
                  color: "green",
                },
              },
            },
          ],
          //圆形上面的文字
          label: {
            normal: {
              // position: "bottom",
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 12,
                padding: [70, 0, 0, 0],
              },
            },
          },
          lineStyle: {
            normal: {
              opacity: 0.6,
              width: 2,
              curveness: 0,
            },
          },
          data: this.dataInfo,
          links: this.dataLink_1,
        },
        {
          type: "lines",
          polyline: true,
          coordinateSystem: "cartesian2d",
          lineStyle: {
            width: 2,
            opacity: 0.6,
            color: "#c3c3c3",
          },
          effect: {
            show: true,
            trailLength: 0,
            symbol: "arrow",
            color: "orange",
            symbolSize: 14,
          },
          data: this.dataLink_2,
        },
      ],
    };
    this.btn_type_index_1 = 0;
    this.option.series[0].data = this.dataInfo.filter(
      (item) => item.category == 0
    );
    this.option.series[0].links = this.dataLink_1;
    this.option.series[1].data = this.dataLink_2.filter(
      (item) => item.category == 0
    );
    this.option.grid[0].top = "100px";
    var myCharts = document.getElementById("echarts_index_1");
    // 当数据更新了 在dom中渲染后 再去渲染echarts
    this.$nextTick(() => {
      // 存储已经init的echarts实例，注意如果有多个echarts请用class，如触发时机不同，请关注this.myCharts_dom_1
      this.$set(this.myCharts_dom_1, "0", echarts.init(myCharts));
      this.myCharts_dom_1[0].on("click", (params) => {
        this.modal_1 = true;
        if (params.dataType == "node") {
          if (params.name == "") {
            // 要添加的节点
            let dataInfo_ = this.dataInfo.filter(
              (item) => item.form_ == params.data.correlation_
            );
            if (!dataInfo_.length) {
              this.$Message["warning"]({
                background: true,
                content: "未找到与本节点相关联的节点！",
                duration: 6,
              });
              return;
            }
            // 当前数据是否有这些要添加节点
            let newItem = this.option.series[0].data.find(
              (item) => item.name == dataInfo_[0].name
            );
            if (newItem) {
              this.$Message["warning"]({
                background: true,
                content: "已展开本节点！",
                duration: 6,
              });
            } else {
              // 添加直角线之前先把节点加上
              this.option.series[0].data.push(...dataInfo_);
              this.option.series[1].data = [];
              // 添加直角线
              let _this = this;
              // 所有的节点
              let node_now_all = _this.option.series[0].data.map(
                (item) => item.name
              );
              for (let i = 0; i < _this.dataLink_2.length; i++) {
                const element1 = _this.dataLink_2[i];
                if (
                  node_now_all.includes(element1.source) &&
                  node_now_all.includes(element1.target)
                ) {
                  this.option.series[1].data.push(element1);
                }
              }
              this.myCharts_dom_1[0].clear();
              this.myCharts_dom_1[0].setOption(this.option, true);
            }
          } else {
            // 点击节点
            this.$Modal.confirm({
              title: "点击节点？",
              okText: "确认",
              cancelText: "取消",
              onCancel: () => {},
              onOk: () => {},
            });
          }
        } else if (params.dataType == "edge") {
          // 点击异常的连接线
          if (params.color == "red") {
            this.$Modal.confirm({
              title: "点击异常的连接线？",
              okText: "确认",
              cancelText: "取消",
              onCancel: () => {},
              onOk: () => {},
            });
          } else {
            // 点击正常的连接线
            this.$Modal.confirm({
              title: "点击正常的连接线？",
              okText: "确认",
              cancelText: "取消",
              onCancel: () => {},
              onOk: () => {},
            });
          }
        }
      });
      // 让第一个加进去的渲染
      this.myCharts_dom_1[0].clear();
      this.myCharts_dom_1[0].setOption(this.option, true);
      // 窗口发生改变重新加载echarts
      on(window, "resize", this.resize);
    });
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  },
  watch: {
    isCollapsed_: {
      handler(newVal, oldVal) {
        if (this.isCollapsed) {
          this.$refs.side.toggleCollapse();
          // 刷新echarts
          this.resize();
        }
      },
      // 加上之后第一次定义时就会执行
      // immediate: true,
      // 深度监听即当要监听对象或数组的时候需要添加deep:true属性
      //  deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
#echarts_index_1 {
  width: 100%;
  height: 100%;
}
.nesting_menu {
  height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  /deep/ .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    display: none;
  }
}
.Card_ {
  height: ~"calc(100vh - 186px)";
  border: none;
  border-left: 1px solid #dcdee2;
  border-radius: 0px;
  /deep/ .ivu-card-head {
    display: none;
  }

  /deep/ .ivu-card-body {
    width: 100%;
    height: 100%;

    /deep/ .body {
      width: 100%;
      height: 100% !important;

      > div {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.packUp,
.spread {
  position: absolute;
  top: 40px;
  right: 321px;
  background-color: #3388ff;
  padding: 10px;
  font-size: 12px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: all 0.6s ease;
}
.packUp:hover {
  background-color: #006aff;
}
.spread:hover {
  background-color: #006aff;
}
</style>
