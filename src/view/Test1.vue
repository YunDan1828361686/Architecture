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
    var nodes = [
      {
        nodeName: "新能源",
        value: [-10, 100],
        symbolSize: 50,
        symbol:
          "image://data:image/png;base64,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ckz5IUxmpj+kDfFiyug6J1+zvALQt5hXaIbVCsYg36BQrk5EtV+4bbWYDACH1cBiSB6vpTVWkwDWum27QNwzCcoTelY83ZwxZ/X9e7/r4vWGmGMBT0Ch7u7AbgAgoi9S2GeLSHK9bOWgdr2znn3wloPbdf/FZuvK2XHtKS8GgpiOgMP1nVxiLaAQJ8fxLqA1pDLiFkWBCZsFq6pJNgTYEqwq3f8mSzBUEzYEEQSDTRAELAhE2IQFAQHB1RGTzE4BBcKmapM6DwgotrBolIkqCOzcLnY1TDUvAKx8PvUTQF1MWwv49bSLhy9ocrIW4DOUEqqBxZCMaznWFfROxsUsRq3u9e8+V6/TphaO1ctAKwvnl4FeZYBKJBACmDXr4tEAF1Pc8TQDVBKBEEBnddGTulAAUqE6T/+fMbaxsTEQb4wMhADYKv6y7mPlqEBkgUAIQFGKzgCACMZEMBACcLrMqzeqYocZQBqKqAH0YHtQDaxEAiGAkq7ri7h9PJQJhACohMoeu3xDqFIJhAAAx8vBvujB4SRQIoo/mou6eziEkV4AjY2XDwMwpoSuYQaQgT1KV6lHcpgBZMA2S9yRHt8SrhSkF0AJ9wG6ISgnzr7C84WvfiO9AJQyCjqWKqTPAtILgMso6Li5OrhSkV4AKKOgE4RikPwCcPBamPxdQwEMeaiEItDnBKAaKL0AGIVfCpEPCkAtQHoBFLMauC8cgGqg1AJYsGCBWuZDrGEGGMq89X51eUdwAKqBUgvAUstb1kUBeEBEagGwVd4RzMCwGY2XH+J3HF4itQAUpfwjmIUtdRaQWgCOXg5dyEaZp5FKR2oBlFMF7EGVvBootwDKqQL2WJC8Gii1AJy8HLoQsq8NlFoA5ZSBexkJM8DQhWeUa4FcmEhWMpILwBXO9dsBL/k/nnIngCzJppEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDEtMDRUMTc6Mjg6NTcrMDg6MDDCK2WzAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAxLTA0VDE3OjI4OjU3KzA4OjAws3bdDwAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAxMjhDfEGAAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADEyONCNEd0AAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTY0MTI4ODUzNyu8vIMAAAASdEVYdFRodW1iOjpTaXplADQyMzVCQu9ZZpsAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjQxMjY0OTk5MzgwMDE0OV8zNV9bMF2/69mpAAAAAElFTkSuQmCC",
        label: {
          fontSize: 17,
          color: "#00a660",
        },
      },
      {
        nodeName: "xnyz" + " kWh",
        value: [50, 120],
        symbolSize: 0.0001,
        label: {
          fontSize: 12,
        },
      },
      {
        nodeName: "燃煤",
        value: [-10, 300],
        symbolSize: 50,
        symbol:
          "image://data:image/png;base64,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/Wff+9OU/wGwCKZ7FbnDDAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMS0wNFQxNzozODozOCswODowMDOCwx0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDEtMDRUMTc6Mzg6MzgrMDg6MDBC33uhAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADEyOEN8QYAAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTQx/wsO/wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjQxMjg5MTE4NoAMKQAAABJ0RVh0VGh1bWI6OlNpemUAMzM0OUJCW/G+TgAAAEd0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2NDEyNTgxMTIwNzM0MTIwXzM2OV9bMF1fWrzOAAAAAElFTkSuQmCC",
        label: {
          fontSize: 17,
          color: "#d7d7d7",
        },
      },
      {
        nodeName: "leftMT" + " kWh",
        value: [50, 300],
        symbolSize: 0.0001,
        label: {
          fontSize: 12,
        },
      },
      {
        nodeName: "天然气",
        value: [-10, 400],
        symbolSize: 50,
        symbol:
          "image://data:image/png;base64,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",
        label: {
          fontSize: 17,
          color: "#d9001b",
        },
      },
      {
        nodeName: "leftTRQ" + " kWh",
        value: [60, 380],
        symbolSize: 0.0001,
        label: {
          fontSize: 12,
        },
      },
      {
        nodeName: "净调入",
        value: [-10, 200],
        symbolSize: 50,
        symbol:
          "image://data:image/png;base64,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",
        label: {
          fontSize: 17,
          color: "#009dd9",
        },
      },
      {
        nodeName: "allJDRD" + " kWh",
        value: [50, 200],
        symbolSize: 0.0001,
        label: {
          fontSize: 12,
        },
      },
      {
        nodeName: "仪征变",
        value: [140, 300],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "312.30",
        symbol:
          "path://M488 1254 c-173 -41 -342 -180 -419 -342 -128 -272 -49 -599 189 -774 127 -94 264 -134 431 -126 77 4 111 11 174 36 199 80 341 239 392 437 20 78 20 233 0 309 -61 232 -247 414 -473 461 -84 18 -219 18 -294 -1z m337 -55 c39 -13 104 -46 145 -74 295 -200 346 -609 110 -877 -57 -65 -172 -140 -261 -169 -105 -34 -253 -34 -358 0 -232 76 -392 281 -408 522 -19 290 174 548 462 615 84 19 222 12 310 -17z M482 1136 c-139 -46 -239 -132 -303 -261 -94 -191 -76 -387 52 -558 50 -67 158 -145 241 -173 80 -29 273 -26 349 4 140 56 255 172 306 312 25 66 28 89 27 185 0 95 -4 119 -27 178 -43 111 -112 196 -208 258 -85 54 -144 71 -259 76 -91 3 -115 0 -178 -21z m38 -51 c0 -14 7 -28 15 -31 8 -4 15 -15 15 -25 0 -10 -7 -19 -15 -19 -8 0 -15 -4 -15 -9 0 -5 7 -11 15 -15 8 -3 15 -12 15 -21 0 -9 -7 -18 -15 -21 -8 -4 -15 -10 -15 -15 0 -5 7 -9 15 -9 21 0 19 -30 -2 -46 -16 -12 -12 -13 30 -14 26 0 47 5 47 10 0 6 -4 10 -10 10 -14 0 -13 37 1 42 9 3 8 10 -2 25 -11 18 -10 24 2 39 11 13 11 18 2 21 -18 6 -16 38 2 53 8 7 15 21 15 31 0 12 7 19 20 19 14 0 20 -7 20 -24 0 -13 7 -26 15 -30 8 -3 15 -15 15 -26 0 -11 -7 -20 -15 -20 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 21 0 19 -37 -2 -49 -17 -9 -17 -10 0 -16 9 -4 17 -14 17 -22 0 -9 -8 -22 -17 -29 -16 -12 -11 -13 37 -13 48 0 53 1 38 13 -22 16 -24 46 -3 46 8 0 15 4 15 9 0 5 -7 11 -15 15 -8 3 -15 12 -15 21 0 9 7 18 15 21 8 4 15 10 15 15 0 5 -7 9 -15 9 -8 0 -15 9 -15 19 0 10 7 21 15 25 8 3 15 17 15 31 0 33 36 35 46 3 3 -13 14 -31 23 -41 15 -17 14 -20 -3 -32 -17 -13 -17 -15 -2 -31 16 -15 16 -18 0 -35 -16 -18 -16 -20 2 -34 18 -14 18 -16 2 -29 -10 -7 -18 -16 -18 -19 0 -4 41 -8 91 -9 75 -2 94 -6 103 -20 14 -23 -3 -52 -33 -56 -21 -3 -21 -6 -21 -212 0 -206 0 -209 21 -212 27 -4 44 -30 36 -52 -6 -14 -42 -16 -360 -16 -298 0 -356 2 -367 15 -18 22 -3 55 26 55 l24 0 0 209 0 209 -30 11 c-19 6 -30 17 -30 28 0 35 21 43 112 43 48 0 88 3 88 6 0 4 -8 13 -17 20 -17 13 -17 15 1 29 18 14 18 16 2 34 -16 17 -16 20 0 35 15 16 15 18 -2 31 -17 12 -18 15 -3 32 9 10 20 28 23 41 10 32 46 30 46 -3z M556 720 c-76 -49 -94 -155 -40 -232 16 -24 39 -45 49 -47 17 -3 15 0 -6 18 -54 42 -75 132 -44 190 8 16 29 41 46 55 38 32 35 43 -5 16z M624 710 c-41 -68 -74 -129 -74 -134 0 -3 18 -6 41 -6 38 0 41 -2 36 -22 -22 -87 -35 -149 -30 -144 3 3 39 56 78 118 l73 113 -47 5 -46 5 -5 50 -5 50 -21 -35z M733 709 c48 -39 67 -77 67 -131 0 -72 -46 -128 -117 -143 -18 -4 -33 -11 -33 -16 0 -28 100 19 134 63 38 51 44 115 16 173 -13 26 -37 55 -54 66 -48 29 -55 23 -13 -12z",
        itemStyle: {
          color: "#D9001B",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "江都变",
        value: [140, 200],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "1120.08",
        symbol:
          "path://M488 1254 c-173 -41 -342 -180 -419 -342 -128 -272 -49 -599 189 -774 127 -94 264 -134 431 -126 77 4 111 11 174 36 199 80 341 239 392 437 20 78 20 233 0 309 -61 232 -247 414 -473 461 -84 18 -219 18 -294 -1z m337 -55 c39 -13 104 -46 145 -74 295 -200 346 -609 110 -877 -57 -65 -172 -140 -261 -169 -105 -34 -253 -34 -358 0 -232 76 -392 281 -408 522 -19 290 174 548 462 615 84 19 222 12 310 -17z M482 1136 c-139 -46 -239 -132 -303 -261 -94 -191 -76 -387 52 -558 50 -67 158 -145 241 -173 80 -29 273 -26 349 4 140 56 255 172 306 312 25 66 28 89 27 185 0 95 -4 119 -27 178 -43 111 -112 196 -208 258 -85 54 -144 71 -259 76 -91 3 -115 0 -178 -21z m38 -51 c0 -14 7 -28 15 -31 8 -4 15 -15 15 -25 0 -10 -7 -19 -15 -19 -8 0 -15 -4 -15 -9 0 -5 7 -11 15 -15 8 -3 15 -12 15 -21 0 -9 -7 -18 -15 -21 -8 -4 -15 -10 -15 -15 0 -5 7 -9 15 -9 21 0 19 -30 -2 -46 -16 -12 -12 -13 30 -14 26 0 47 5 47 10 0 6 -4 10 -10 10 -14 0 -13 37 1 42 9 3 8 10 -2 25 -11 18 -10 24 2 39 11 13 11 18 2 21 -18 6 -16 38 2 53 8 7 15 21 15 31 0 12 7 19 20 19 14 0 20 -7 20 -24 0 -13 7 -26 15 -30 8 -3 15 -15 15 -26 0 -11 -7 -20 -15 -20 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 21 0 19 -37 -2 -49 -17 -9 -17 -10 0 -16 9 -4 17 -14 17 -22 0 -9 -8 -22 -17 -29 -16 -12 -11 -13 37 -13 48 0 53 1 38 13 -22 16 -24 46 -3 46 8 0 15 4 15 9 0 5 -7 11 -15 15 -8 3 -15 12 -15 21 0 9 7 18 15 21 8 4 15 10 15 15 0 5 -7 9 -15 9 -8 0 -15 9 -15 19 0 10 7 21 15 25 8 3 15 17 15 31 0 33 36 35 46 3 3 -13 14 -31 23 -41 15 -17 14 -20 -3 -32 -17 -13 -17 -15 -2 -31 16 -15 16 -18 0 -35 -16 -18 -16 -20 2 -34 18 -14 18 -16 2 -29 -10 -7 -18 -16 -18 -19 0 -4 41 -8 91 -9 75 -2 94 -6 103 -20 14 -23 -3 -52 -33 -56 -21 -3 -21 -6 -21 -212 0 -206 0 -209 21 -212 27 -4 44 -30 36 -52 -6 -14 -42 -16 -360 -16 -298 0 -356 2 -367 15 -18 22 -3 55 26 55 l24 0 0 209 0 209 -30 11 c-19 6 -30 17 -30 28 0 35 21 43 112 43 48 0 88 3 88 6 0 4 -8 13 -17 20 -17 13 -17 15 1 29 18 14 18 16 2 34 -16 17 -16 20 0 35 15 16 15 18 -2 31 -17 12 -18 15 -3 32 9 10 20 28 23 41 10 32 46 30 46 -3z M556 720 c-76 -49 -94 -155 -40 -232 16 -24 39 -45 49 -47 17 -3 15 0 -6 18 -54 42 -75 132 -44 190 8 16 29 41 46 55 38 32 35 43 -5 16z M624 710 c-41 -68 -74 -129 -74 -134 0 -3 18 -6 41 -6 38 0 41 -2 36 -22 -22 -87 -35 -149 -30 -144 3 3 39 56 78 118 l73 113 -47 5 -46 5 -5 50 -5 50 -21 -35z M733 709 c48 -39 67 -77 67 -131 0 -72 -46 -128 -117 -143 -18 -4 -33 -11 -33 -16 0 -28 100 19 134 63 38 51 44 115 16 173 -13 26 -37 55 -54 66 -48 29 -55 23 -13 -12z",
        itemStyle: {
          color: "#D9001B",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "将王变",
        value: [310, 300],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "",
        symbol:
          "path://M488 1254 c-173 -41 -342 -180 -419 -342 -128 -272 -49 -599 189 -774 127 -94 264 -134 431 -126 77 4 111 11 174 36 199 80 341 239 392 437 20 78 20 233 0 309 -61 232 -247 414 -473 461 -84 18 -219 18 -294 -1z m337 -55 c39 -13 104 -46 145 -74 295 -200 346 -609 110 -877 -57 -65 -172 -140 -261 -169 -105 -34 -253 -34 -358 0 -232 76 -392 281 -408 522 -19 290 174 548 462 615 84 19 222 12 310 -17z M482 1136 c-139 -46 -239 -132 -303 -261 -94 -191 -76 -387 52 -558 50 -67 158 -145 241 -173 80 -29 273 -26 349 4 140 56 255 172 306 312 25 66 28 89 27 185 0 95 -4 119 -27 178 -43 111 -112 196 -208 258 -85 54 -144 71 -259 76 -91 3 -115 0 -178 -21z m38 -51 c0 -14 7 -28 15 -31 8 -4 15 -15 15 -25 0 -10 -7 -19 -15 -19 -8 0 -15 -4 -15 -9 0 -5 7 -11 15 -15 8 -3 15 -12 15 -21 0 -9 -7 -18 -15 -21 -8 -4 -15 -10 -15 -15 0 -5 7 -9 15 -9 21 0 19 -30 -2 -46 -16 -12 -12 -13 30 -14 26 0 47 5 47 10 0 6 -4 10 -10 10 -14 0 -13 37 1 42 9 3 8 10 -2 25 -11 18 -10 24 2 39 11 13 11 18 2 21 -18 6 -16 38 2 53 8 7 15 21 15 31 0 12 7 19 20 19 14 0 20 -7 20 -24 0 -13 7 -26 15 -30 8 -3 15 -15 15 -26 0 -11 -7 -20 -15 -20 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 21 0 19 -37 -2 -49 -17 -9 -17 -10 0 -16 9 -4 17 -14 17 -22 0 -9 -8 -22 -17 -29 -16 -12 -11 -13 37 -13 48 0 53 1 38 13 -22 16 -24 46 -3 46 8 0 15 4 15 9 0 5 -7 11 -15 15 -8 3 -15 12 -15 21 0 9 7 18 15 21 8 4 15 10 15 15 0 5 -7 9 -15 9 -8 0 -15 9 -15 19 0 10 7 21 15 25 8 3 15 17 15 31 0 33 36 35 46 3 3 -13 14 -31 23 -41 15 -17 14 -20 -3 -32 -17 -13 -17 -15 -2 -31 16 -15 16 -18 0 -35 -16 -18 -16 -20 2 -34 18 -14 18 -16 2 -29 -10 -7 -18 -16 -18 -19 0 -4 41 -8 91 -9 75 -2 94 -6 103 -20 14 -23 -3 -52 -33 -56 -21 -3 -21 -6 -21 -212 0 -206 0 -209 21 -212 27 -4 44 -30 36 -52 -6 -14 -42 -16 -360 -16 -298 0 -356 2 -367 15 -18 22 -3 55 26 55 l24 0 0 209 0 209 -30 11 c-19 6 -30 17 -30 28 0 35 21 43 112 43 48 0 88 3 88 6 0 4 -8 13 -17 20 -17 13 -17 15 1 29 18 14 18 16 2 34 -16 17 -16 20 0 35 15 16 15 18 -2 31 -17 12 -18 15 -3 32 9 10 20 28 23 41 10 32 46 30 46 -3z M556 720 c-76 -49 -94 -155 -40 -232 16 -24 39 -45 49 -47 17 -3 15 0 -6 18 -54 42 -75 132 -44 190 8 16 29 41 46 55 38 32 35 43 -5 16z M624 710 c-41 -68 -74 -129 -74 -134 0 -3 18 -6 41 -6 38 0 41 -2 36 -22 -22 -87 -35 -149 -30 -144 3 3 39 56 78 118 l73 113 -47 5 -46 5 -5 50 -5 50 -21 -35z M733 709 c48 -39 67 -77 67 -131 0 -72 -46 -128 -117 -143 -18 -4 -33 -11 -33 -16 0 -28 100 19 134 63 38 51 44 115 16 173 -13 26 -37 55 -54 66 -48 29 -55 23 -13 -12z",
        itemStyle: {
          color: "#3b80c3",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "横沟变",
        value: [310, 200],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "1936.48",
        symbol:
          "path://M488 1254 c-173 -41 -342 -180 -419 -342 -128 -272 -49 -599 189 -774 127 -94 264 -134 431 -126 77 4 111 11 174 36 199 80 341 239 392 437 20 78 20 233 0 309 -61 232 -247 414 -473 461 -84 18 -219 18 -294 -1z m337 -55 c39 -13 104 -46 145 -74 295 -200 346 -609 110 -877 -57 -65 -172 -140 -261 -169 -105 -34 -253 -34 -358 0 -232 76 -392 281 -408 522 -19 290 174 548 462 615 84 19 222 12 310 -17z M482 1136 c-139 -46 -239 -132 -303 -261 -94 -191 -76 -387 52 -558 50 -67 158 -145 241 -173 80 -29 273 -26 349 4 140 56 255 172 306 312 25 66 28 89 27 185 0 95 -4 119 -27 178 -43 111 -112 196 -208 258 -85 54 -144 71 -259 76 -91 3 -115 0 -178 -21z m38 -51 c0 -14 7 -28 15 -31 8 -4 15 -15 15 -25 0 -10 -7 -19 -15 -19 -8 0 -15 -4 -15 -9 0 -5 7 -11 15 -15 8 -3 15 -12 15 -21 0 -9 -7 -18 -15 -21 -8 -4 -15 -10 -15 -15 0 -5 7 -9 15 -9 21 0 19 -30 -2 -46 -16 -12 -12 -13 30 -14 26 0 47 5 47 10 0 6 -4 10 -10 10 -14 0 -13 37 1 42 9 3 8 10 -2 25 -11 18 -10 24 2 39 11 13 11 18 2 21 -18 6 -16 38 2 53 8 7 15 21 15 31 0 12 7 19 20 19 14 0 20 -7 20 -24 0 -13 7 -26 15 -30 8 -3 15 -15 15 -26 0 -11 -7 -20 -15 -20 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 21 0 19 -37 -2 -49 -17 -9 -17 -10 0 -16 9 -4 17 -14 17 -22 0 -9 -8 -22 -17 -29 -16 -12 -11 -13 37 -13 48 0 53 1 38 13 -22 16 -24 46 -3 46 8 0 15 4 15 9 0 5 -7 11 -15 15 -8 3 -15 12 -15 21 0 9 7 18 15 21 8 4 15 10 15 15 0 5 -7 9 -15 9 -8 0 -15 9 -15 19 0 10 7 21 15 25 8 3 15 17 15 31 0 33 36 35 46 3 3 -13 14 -31 23 -41 15 -17 14 -20 -3 -32 -17 -13 -17 -15 -2 -31 16 -15 16 -18 0 -35 -16 -18 -16 -20 2 -34 18 -14 18 -16 2 -29 -10 -7 -18 -16 -18 -19 0 -4 41 -8 91 -9 75 -2 94 -6 103 -20 14 -23 -3 -52 -33 -56 -21 -3 -21 -6 -21 -212 0 -206 0 -209 21 -212 27 -4 44 -30 36 -52 -6 -14 -42 -16 -360 -16 -298 0 -356 2 -367 15 -18 22 -3 55 26 55 l24 0 0 209 0 209 -30 11 c-19 6 -30 17 -30 28 0 35 21 43 112 43 48 0 88 3 88 6 0 4 -8 13 -17 20 -17 13 -17 15 1 29 18 14 18 16 2 34 -16 17 -16 20 0 35 15 16 15 18 -2 31 -17 12 -18 15 -3 32 9 10 20 28 23 41 10 32 46 30 46 -3z M556 720 c-76 -49 -94 -155 -40 -232 16 -24 39 -45 49 -47 17 -3 15 0 -6 18 -54 42 -75 132 -44 190 8 16 29 41 46 55 38 32 35 43 -5 16z M624 710 c-41 -68 -74 -129 -74 -134 0 -3 18 -6 41 -6 38 0 41 -2 36 -22 -22 -87 -35 -149 -30 -144 3 3 39 56 78 118 l73 113 -47 5 -46 5 -5 50 -5 50 -21 -35z M733 709 c48 -39 67 -77 67 -131 0 -72 -46 -128 -117 -143 -18 -4 -33 -11 -33 -16 0 -28 100 19 134 63 38 51 44 115 16 173 -13 26 -37 55 -54 66 -48 29 -55 23 -13 -12z",
        itemStyle: {
          color: "#3b80c3",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "扬州电厂(煤电)",
        value: [310, 460],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "",
        symbol:
          "path://M488 1254 c-173 -41 -342 -180 -419 -342 -128 -272 -49 -599 189 -774 127 -94 264 -134 431 -126 77 4 111 11 174 36 199 80 341 239 392 437 20 78 20 233 0 309 -61 232 -247 414 -473 461 -84 18 -219 18 -294 -1z m337 -55 c39 -13 104 -46 145 -74 295 -200 346 -609 110 -877 -57 -65 -172 -140 -261 -169 -105 -34 -253 -34 -358 0 -232 76 -392 281 -408 522 -19 290 174 548 462 615 84 19 222 12 310 -17z M482 1136 c-139 -46 -239 -132 -303 -261 -94 -191 -76 -387 52 -558 50 -67 158 -145 241 -173 80 -29 273 -26 349 4 140 56 255 172 306 312 25 66 28 89 27 185 0 95 -4 119 -27 178 -43 111 -112 196 -208 258 -85 54 -144 71 -259 76 -91 3 -115 0 -178 -21z m38 -51 c0 -14 7 -28 15 -31 8 -4 15 -15 15 -25 0 -10 -7 -19 -15 -19 -8 0 -15 -4 -15 -9 0 -5 7 -11 15 -15 8 -3 15 -12 15 -21 0 -9 -7 -18 -15 -21 -8 -4 -15 -10 -15 -15 0 -5 7 -9 15 -9 21 0 19 -30 -2 -46 -16 -12 -12 -13 30 -14 26 0 47 5 47 10 0 6 -4 10 -10 10 -14 0 -13 37 1 42 9 3 8 10 -2 25 -11 18 -10 24 2 39 11 13 11 18 2 21 -18 6 -16 38 2 53 8 7 15 21 15 31 0 12 7 19 20 19 14 0 20 -7 20 -24 0 -13 7 -26 15 -30 8 -3 15 -15 15 -26 0 -11 -7 -20 -15 -20 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 21 0 19 -37 -2 -49 -17 -9 -17 -10 0 -16 9 -4 17 -14 17 -22 0 -9 -8 -22 -17 -29 -16 -12 -11 -13 37 -13 48 0 53 1 38 13 -22 16 -24 46 -3 46 8 0 15 4 15 9 0 5 -7 11 -15 15 -8 3 -15 12 -15 21 0 9 7 18 15 21 8 4 15 10 15 15 0 5 -7 9 -15 9 -8 0 -15 9 -15 19 0 10 7 21 15 25 8 3 15 17 15 31 0 33 36 35 46 3 3 -13 14 -31 23 -41 15 -17 14 -20 -3 -32 -17 -13 -17 -15 -2 -31 16 -15 16 -18 0 -35 -16 -18 -16 -20 2 -34 18 -14 18 -16 2 -29 -10 -7 -18 -16 -18 -19 0 -4 41 -8 91 -9 75 -2 94 -6 103 -20 14 -23 -3 -52 -33 -56 -21 -3 -21 -6 -21 -212 0 -206 0 -209 21 -212 27 -4 44 -30 36 -52 -6 -14 -42 -16 -360 -16 -298 0 -356 2 -367 15 -18 22 -3 55 26 55 l24 0 0 209 0 209 -30 11 c-19 6 -30 17 -30 28 0 35 21 43 112 43 48 0 88 3 88 6 0 4 -8 13 -17 20 -17 13 -17 15 1 29 18 14 18 16 2 34 -16 17 -16 20 0 35 15 16 15 18 -2 31 -17 12 -18 15 -3 32 9 10 20 28 23 41 10 32 46 30 46 -3z M556 720 c-76 -49 -94 -155 -40 -232 16 -24 39 -45 49 -47 17 -3 15 0 -6 18 -54 42 -75 132 -44 190 8 16 29 41 46 55 38 32 35 43 -5 16z M624 710 c-41 -68 -74 -129 -74 -134 0 -3 18 -6 41 -6 38 0 41 -2 36 -22 -22 -87 -35 -149 -30 -144 3 3 39 56 78 118 l73 113 -47 5 -46 5 -5 50 -5 50 -21 -35z M733 709 c48 -39 67 -77 67 -131 0 -72 -46 -128 -117 -143 -18 -4 -33 -11 -33 -16 0 -28 100 19 134 63 38 51 44 115 16 173 -13 26 -37 55 -54 66 -48 29 -55 23 -13 -12z",
        itemStyle: {
          color: "#FFFF00",
        },
        label: {
          fontSize: 15,
          color: "#FFFF00",
        },
      },
      {
        nodeName: "yzdcMD" + " kWh",
        value: [310, 390],
        symbolSize: 0.0001,
        label: {
          fontSize: 12,
        },
      },
      {
        nodeName: "扬州电厂(天然气)",
        value: [470, 460],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "",
        symbol:
          "image://data:image/png;base64,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",
        label: {
          color: "#d9001b",
          fontSize: 15,
        },
      },
      {
        nodeName: "yzdcrq" + " kWh",
        value: [470, 390],
        symbolSize: 0.0001,
        label: {
          fontSize: 12,
        },
      },
      {
        nodeName: "广陵变",
        value: [470, 300],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "",
        symbol:
          "path://M488 1254 c-173 -41 -342 -180 -419 -342 -128 -272 -49 -599 189 -774 127 -94 264 -134 431 -126 77 4 111 11 174 36 199 80 341 239 392 437 20 78 20 233 0 309 -61 232 -247 414 -473 461 -84 18 -219 18 -294 -1z m337 -55 c39 -13 104 -46 145 -74 295 -200 346 -609 110 -877 -57 -65 -172 -140 -261 -169 -105 -34 -253 -34 -358 0 -232 76 -392 281 -408 522 -19 290 174 548 462 615 84 19 222 12 310 -17z M482 1136 c-139 -46 -239 -132 -303 -261 -94 -191 -76 -387 52 -558 50 -67 158 -145 241 -173 80 -29 273 -26 349 4 140 56 255 172 306 312 25 66 28 89 27 185 0 95 -4 119 -27 178 -43 111 -112 196 -208 258 -85 54 -144 71 -259 76 -91 3 -115 0 -178 -21z m38 -51 c0 -14 7 -28 15 -31 8 -4 15 -15 15 -25 0 -10 -7 -19 -15 -19 -8 0 -15 -4 -15 -9 0 -5 7 -11 15 -15 8 -3 15 -12 15 -21 0 -9 -7 -18 -15 -21 -8 -4 -15 -10 -15 -15 0 -5 7 -9 15 -9 21 0 19 -30 -2 -46 -16 -12 -12 -13 30 -14 26 0 47 5 47 10 0 6 -4 10 -10 10 -14 0 -13 37 1 42 9 3 8 10 -2 25 -11 18 -10 24 2 39 11 13 11 18 2 21 -18 6 -16 38 2 53 8 7 15 21 15 31 0 12 7 19 20 19 14 0 20 -7 20 -24 0 -13 7 -26 15 -30 8 -3 15 -15 15 -26 0 -11 -7 -20 -15 -20 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 21 0 19 -37 -2 -49 -17 -9 -17 -10 0 -16 9 -4 17 -14 17 -22 0 -9 -8 -22 -17 -29 -16 -12 -11 -13 37 -13 48 0 53 1 38 13 -22 16 -24 46 -3 46 8 0 15 4 15 9 0 5 -7 11 -15 15 -8 3 -15 12 -15 21 0 9 7 18 15 21 8 4 15 10 15 15 0 5 -7 9 -15 9 -8 0 -15 9 -15 19 0 10 7 21 15 25 8 3 15 17 15 31 0 33 36 35 46 3 3 -13 14 -31 23 -41 15 -17 14 -20 -3 -32 -17 -13 -17 -15 -2 -31 16 -15 16 -18 0 -35 -16 -18 -16 -20 2 -34 18 -14 18 -16 2 -29 -10 -7 -18 -16 -18 -19 0 -4 41 -8 91 -9 75 -2 94 -6 103 -20 14 -23 -3 -52 -33 -56 -21 -3 -21 -6 -21 -212 0 -206 0 -209 21 -212 27 -4 44 -30 36 -52 -6 -14 -42 -16 -360 -16 -298 0 -356 2 -367 15 -18 22 -3 55 26 55 l24 0 0 209 0 209 -30 11 c-19 6 -30 17 -30 28 0 35 21 43 112 43 48 0 88 3 88 6 0 4 -8 13 -17 20 -17 13 -17 15 1 29 18 14 18 16 2 34 -16 17 -16 20 0 35 15 16 15 18 -2 31 -17 12 -18 15 -3 32 9 10 20 28 23 41 10 32 46 30 46 -3z M556 720 c-76 -49 -94 -155 -40 -232 16 -24 39 -45 49 -47 17 -3 15 0 -6 18 -54 42 -75 132 -44 190 8 16 29 41 46 55 38 32 35 43 -5 16z M624 710 c-41 -68 -74 -129 -74 -134 0 -3 18 -6 41 -6 38 0 41 -2 36 -22 -22 -87 -35 -149 -30 -144 3 3 39 56 78 118 l73 113 -47 5 -46 5 -5 50 -5 50 -21 -35z M733 709 c48 -39 67 -77 67 -131 0 -72 -46 -128 -117 -143 -18 -4 -33 -11 -33 -16 0 -28 100 19 134 63 38 51 44 115 16 173 -13 26 -37 55 -54 66 -48 29 -55 23 -13 -12z",
        itemStyle: {
          color: "#3b80c3",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "李典变",
        value: [470, 200],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "790.9",
        symbol:
          "path://M488 1254 c-173 -41 -342 -180 -419 -342 -128 -272 -49 -599 189 -774 127 -94 264 -134 431 -126 77 4 111 11 174 36 199 80 341 239 392 437 20 78 20 233 0 309 -61 232 -247 414 -473 461 -84 18 -219 18 -294 -1z m337 -55 c39 -13 104 -46 145 -74 295 -200 346 -609 110 -877 -57 -65 -172 -140 -261 -169 -105 -34 -253 -34 -358 0 -232 76 -392 281 -408 522 -19 290 174 548 462 615 84 19 222 12 310 -17z M482 1136 c-139 -46 -239 -132 -303 -261 -94 -191 -76 -387 52 -558 50 -67 158 -145 241 -173 80 -29 273 -26 349 4 140 56 255 172 306 312 25 66 28 89 27 185 0 95 -4 119 -27 178 -43 111 -112 196 -208 258 -85 54 -144 71 -259 76 -91 3 -115 0 -178 -21z m38 -51 c0 -14 7 -28 15 -31 8 -4 15 -15 15 -25 0 -10 -7 -19 -15 -19 -8 0 -15 -4 -15 -9 0 -5 7 -11 15 -15 8 -3 15 -12 15 -21 0 -9 -7 -18 -15 -21 -8 -4 -15 -10 -15 -15 0 -5 7 -9 15 -9 21 0 19 -30 -2 -46 -16 -12 -12 -13 30 -14 26 0 47 5 47 10 0 6 -4 10 -10 10 -14 0 -13 37 1 42 9 3 8 10 -2 25 -11 18 -10 24 2 39 11 13 11 18 2 21 -18 6 -16 38 2 53 8 7 15 21 15 31 0 12 7 19 20 19 14 0 20 -7 20 -24 0 -13 7 -26 15 -30 8 -3 15 -15 15 -26 0 -11 -7 -20 -15 -20 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 21 0 19 -37 -2 -49 -17 -9 -17 -10 0 -16 9 -4 17 -14 17 -22 0 -9 -8 -22 -17 -29 -16 -12 -11 -13 37 -13 48 0 53 1 38 13 -22 16 -24 46 -3 46 8 0 15 4 15 9 0 5 -7 11 -15 15 -8 3 -15 12 -15 21 0 9 7 18 15 21 8 4 15 10 15 15 0 5 -7 9 -15 9 -8 0 -15 9 -15 19 0 10 7 21 15 25 8 3 15 17 15 31 0 33 36 35 46 3 3 -13 14 -31 23 -41 15 -17 14 -20 -3 -32 -17 -13 -17 -15 -2 -31 16 -15 16 -18 0 -35 -16 -18 -16 -20 2 -34 18 -14 18 -16 2 -29 -10 -7 -18 -16 -18 -19 0 -4 41 -8 91 -9 75 -2 94 -6 103 -20 14 -23 -3 -52 -33 -56 -21 -3 -21 -6 -21 -212 0 -206 0 -209 21 -212 27 -4 44 -30 36 -52 -6 -14 -42 -16 -360 -16 -298 0 -356 2 -367 15 -18 22 -3 55 26 55 l24 0 0 209 0 209 -30 11 c-19 6 -30 17 -30 28 0 35 21 43 112 43 48 0 88 3 88 6 0 4 -8 13 -17 20 -17 13 -17 15 1 29 18 14 18 16 2 34 -16 17 -16 20 0 35 15 16 15 18 -2 31 -17 12 -18 15 -3 32 9 10 20 28 23 41 10 32 46 30 46 -3z M556 720 c-76 -49 -94 -155 -40 -232 16 -24 39 -45 49 -47 17 -3 15 0 -6 18 -54 42 -75 132 -44 190 8 16 29 41 46 55 38 32 35 43 -5 16z M624 710 c-41 -68 -74 -129 -74 -134 0 -3 18 -6 41 -6 38 0 41 -2 36 -22 -22 -87 -35 -149 -30 -144 3 3 39 56 78 118 l73 113 -47 5 -46 5 -5 50 -5 50 -21 -35z M733 709 c48 -39 67 -77 67 -131 0 -72 -46 -128 -117 -143 -18 -4 -33 -11 -33 -16 0 -28 100 19 134 63 38 51 44 115 16 173 -13 26 -37 55 -54 66 -48 29 -55 23 -13 -12z",
        itemStyle: {
          color: "#3b80c3",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "",
        value: [390, 250],
        symbolSize: 70,
        clfx: "单向",
        tpfl: "790.9",
        symbol:
          "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACPCAMAAAD0vXihAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAANlBMVEX///8Cp/BvzfZYxfUhsvI/vPTa8v3///+k3/rj9f31/P7H7Py96Pvs+P6y5PrR7/yU2vmD1PjqeS/1AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfmARUFMTpQ9MDJAAAFCElEQVR42u2Z2ZajIBCGWwQUEMT3f9mhqgDBLJqk58z06fovumNQ+KyNJV9fLBaLxWKxWCwWi8VisVgs1i/W8H+JeZiHeZiHeX4wjxBjcyWFUH2r7G/X0zT9NR45m9T9ZB0NqhYPlz7kZrXCpREPeWy6KG8T02f3IQ8Oj0RglNGWS4Ot9To+4nHpYs6fgX37kAdINI6q05UA22gkAAtJaDCm0N7j2So79fWpv6YVrD0DgQKekP5KeGmfvg708qH3Qx8/lp7MaCfuOueJu9tSkIwUCmqiIT1hyYx3l8dVbzrq4zOeZoymL+IZ09+ltKruXoDWSQKtshZL+bNxLvLIqRtxI4PEEqtLR5t5dHYPOAySs9J/A8/SRGWSoa5DwQhdhhEPhJyR+dkt/x/PBrrGA4ZoDACBYOWBJ9Rm5FHJLBaHH7Od/AV3XeLBdNpNrbBAbsNzHr3XGo9prq646wrPiOOXmjZsEA+2Yjzw19wQUnTNXQS+zzPu44PQdYY6DsUG4SaeLXmUekDLmC4C3+ZBHF1nzNi6LhYjrDf53pVIiBzZ2vgDHtMVVYjS3TNjKS3+th6a5sYlA56765Rn6xN96YPSUwrH/lvkAVY77tzX3HXK46ZdopntqeTBS/s423vzaSj1ZyiPXXDXKY/ueaaeB73yaL3ReBqn40kO5/qQR1K7jcdnspcyJ86/6wWcU55R7JKwNt2VbwghRHnzTPmfIwjuvxDNP3Q9zzz/jZiHeZjnn/CIEB7s3mjuGBTNASpNGLVpyxNWHN7TE56Ai78YGuWWvDqlG2BPr8sz0k9+HpRr1h9dB4eO3uDRxyn9Kc+Cyxw1NV91HRw6+ts8ZTW5NLuLb+IRIi0NnVC04JhxkzGf8Izl8En6fYmm4YTmqNd58ouEYqo0qGra7vEgBTE3azGNdy1lp6yXp8vEKzy4IazGERtsXYQckWecK49qtyKxAiGPK3TpGf9sE/+QR2vYxOh4YxyKh9RIDdOYedBZpr68Kyt44BHl1eCDVe/wFHfQbnnNa1QFhtO0fREB/y3EE3ucDLRKsg9ush0xb2/5K/PI0OVFgDeEr1IGLXCDnQzyYOykrxpZSjaKH9rmmu7c4XUe4+cjT7re0tgpszXwQGCgffaT1yqPrtE5CPPW7d3zXhXRUUKE1OEaUm8Oe07fYjwbtFNIMCvFT4xHHjFvQ+UZJPZ3tkd9xCO6PekIf8B1QUGXEMUO4wiubcl3jTkwYYExUznx6Hns+B4P5bveMHMN1BMDrhIy+ABtw7zODkZatna+WMsJszjyqLyVteJNHuuxIzjRiDABLJAxtM/LBf/O/KXL5yMPVQN33Fpf59lyfhnMHgs+03mImE9X7vDUgI09D51iyeEU6CTfwcrJ5UvJXBzC5b34LU89AMZaKSsPJin+IoNA27s8Kx0/CXqpzAPGmu/yjPtvA6FO4sAD1SkfELm+ar5oH5x3AADy1BPPnCfxGx6qefTw0vGk6lOd5J5WoCc8C06EkRI1CLGSC2TN756HKnmqgFq7sNj6Uw6tN0xdauCn5WUe083ugbLVD+0vGR0Pzl9YXsoZ1Vp5bqVf5qmZQCeldG4XKf/1cMuDVsRqlwFK5fsmnlCfEtbhpYXqCAOXBUPUsBwZ9vUG/aY5o1tcWVXcXc/Hl3nU/ivtIR3kg5J/7QDsRD9oP8g8zMM8zPO7eFgsFovFYrFYLBaLxWKxWKxfrD+gSWZ9hWvdmQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMS0yMFQyMTo0OTo1OCswODowMO+dkmEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDEtMjBUMjE6NDk6NTgrMDg6MDCewCrdAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADE0M4L0P44AAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTQzEQVv0wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjQyNjg2NTk4C0pmIAAAABJ0RVh0VGh1bWI6OlNpemUANjUyOEJCoNXvtgAAAEZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2NDI2ODEzOTgxOTMyNzUxXzcwX1swXfizBx0AAAAASUVORK5CYII=",
        itemStyle: {
          color: "#3b80c3",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "",
        value: [143, 355],
        symbolSize: 50,
        clfx: "单向",
        tpfl: "790.9",
        symbol:
          "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAMAAADx2D+RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAANlBMVEX////ZABvmV2npbn3iPVLeHzf52t7////zsbn1vMP+9fb87O7xo6340db74+bvk573x83sgo9R2/DLAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmARUFNCjeOkXEAAACAUlEQVRo3u2V2W7EIAxFW5aEAQLJ//9ssbEDDEylkVqpqnwfEhCEY7zl40MkEolEIpFI9O/1+dsSghCEIIQfJCht+qnWdlzf9n1/h7CzHE7tw5dxiLRqDlhK+iUBdisa5zI+J4IdCTbRrO5Unqb5FeEsEzYHrLkmgh4J8HWAB261AEgA9eYF4YIdzR3+c0nQKEOzo75CmbpqoOtuP8UBjDA37FwT2vaTtqf6DhVkCbgknLcPYaRnQu5uhgbhlR1+psrzwWeaZ4LZijRafvDHzY5GKGdt98Tw7gvjkjmKj946JmzkFHAT5PNtz0zAfHTssntw4ppuVxoJEb6yhL/orV4T6u6BsI0ENxJMMd3jgYruEoZgNcJxZ+v5FmFruR8wlGZw0nPXqJVr3/BS7Jg1SnHIhrkvJdyl2Y6KcmynmyINPuJ2VUOcWuUtCfUMs1NmRTQ6s6HHlK1DEUIEbNc9lgSqFk/VUStPcfKGueJS57gHIc2SUC+v6GjqY4aaTagJmMcgIgHoXjU3PTmpI5RKuC7s2I78711OFAAwLOToV53PcT2QJaOTesJdD/eFu+7NvXzVvVMLRdx3KuwFgX8Afeo1p1hs5LvvAUxQjQxepea0iLR2RVfjm+hcbD5RZTWPv1FVWj2/KRLc/b/JpR+XEIQgBCH8OYJIJBKJRCKR6N/rC3B+JvvSzu1SAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAxLTIwVDIxOjUyOjQwKzA4OjAwKbb4rwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMS0yMFQyMTo1Mjo0MCswODowMFjrQBMAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAOTeiceTxAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADk3Wt4kfAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjQyNjg2NzYwgY0mswAAABJ0RVh0VGh1bWI6OlNpemUANDM5NkJCv8IRFgAAAEV0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2NDI2Njg3MTQzNTUzMDUzXzVfWzBdrUwV6AAAAABJRU5ErkJggg==",
        itemStyle: {
          color: "#3b80c3",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "国信燃机",
        value: [310, 40],
        symbolSize: 30,
        clfx: "双向",
        tpfl: "",
        symbol:
          "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5gEFASgob13n2gAAH9BJREFUeNrlXXl8VNW9/547mSSTkH1fSAiBsBOQIJDMBCIiImpBRB6tW6FV37PWpbW1KkwScHm2dFNa9Cl1QakFlPpAREQgmQn7jmSBkASy7/s2mXveH5AIM+fM3Jm5s+D7fj5+JPece+6Z+/ves/02QinFDxFp7xxXetd0JBJ4J4CIiaBiogBBRUH9KIifAPhRUD8QogIlBgraRChppAJtIiCNFKRRoGKTQaksPPTijDp3/x5ngfwQCKDO1seKRLxVgDAboDMBJACIlfERzSAoBEURISikIikUSeehAu38Znf/dkdxUxIgY21BMkQxU6BIo0A6gClu6sopgOynEA9DoTiqfzm91N3vxlbcNARQZ+tjKaF3E9CFFORuAgju7hMD5wD6FaiwTZedccjdnZECjyZATg6Er2n+jwnB3QBZCGCYu/skHeRrArqtv69v2+FX5za5uzfcXnoiAeb/4Yx/Z1f7SkKxAgSpjrYX4q9EeIA3QvyVCFAp4eetgI9SgJdAQAAYKUX/gIiefhEdvQNo7TKgqbMf9W19kOHt1IFiK1HgH/mr1Mfd/W5N4VEEyMrZH95PvK4KHkix9f6IAG+MjQ3A6Gh/JEX6ISFchbgQFXyV9s0WlALVLb243NSDsvouXKjrQlF1J6409djXHvCOIOAdTyKCRxBgZvbhQAXpe45QYQUIhku9L8RfienJIZg2IgipiYGID1W5pL9Nnf04XdGOE+WtOFLaiuqWXpvu9yQiuJ0A6lz9SoA+C4oJUupHBflg9rgwaMaEYeqIILf2fRBF1Z3IL27CgfNNKG/stuFO8qagFF/Le1FT466+u40A6bn58xUieZYSzJdSf96kCMyfFImZo0Pc0l+pOFXRht1nGrDrVB0GRAnvlqAUlL6u02redUd/XU6Ama8ejvIyGF4BsNJa3bBh3liUFo17b4lGWIC3O96P3ejqG8AXx+uw/VgNqqRNEZ9TQXhNvyr9qCv76VICZGTn3UGI8HsAky3Viw3xxbKZcVhya4xDz2vvGUBlcw8qm3tR2dSDnn4juvuN6Ok3oqdfRHe/EUoFgcpbAV9vASqlAipvBQJVXogPVSE+1BfxoSr42LmIHMSOk3X49FAVyuqtTA8EfZSKr+u1mdnOeP/MR7qKAOoc/a8B+ntLdUL8lXhIMxwPzLDvFPe7yg4UXGjG0dJWVDb3oL1nQJa+RwR6Iz5UhbSkYKQmBmJ8XAC8vWwnxb+P1+LD/Cuoa+uzWI9SbAYRntFr0+tl+QEW4HQCzHz1cJTSYPg9BR6yVO8nGfH46ewEm7ZsHb0DOHKxBScr2nDwQovVFysXfJUCpiQGYXxcADRjwzA62l/yvZQCGw9cxj8OXLZckeA4RDyjy1brnPlbnEoAdbZODYL1sDDkzxgVgifmjpD8EgeMFPqSZhRcaEZBSTNaugzOfD+ScGtyCDRjQ6EZE4ZwiWuV8oZubNhbDl2xRX1SJ4j4jG515nvO6rvTCKDO1S+DSN8GAXOvJhCCX96ZhPtvlTbcF9d04stT9SgoaUZNq237blfB30eB2yZEYOHUKEyMD5B0z/Zjtfjr7kvoHxAtVXtdp1X/zhl9dgoBNDm6xyjwNq986oggPHdXMpIi/Ky2VVzTiX8fr8UXx2ud8fudhnmTIrBwShTSRgZbrXulqQfrvizFsUutlqp9otOqfyJ3P2UngDo3/3lQ8gavfHl6HJ6cl2S1nZKaTmy/CQVv9j7GhGHJ9BhMTw62WnfD3nJs0lVaqqLTadUaOfsnKwHU2boXQPAar/ylRSlYkBppsY2uPiM2F1Ric0EV+iwPizcVFqXFYHl6HOJCfC3W232mHmu3l8CCWC7rtOpEufolGwE0OfofU9CPWWVRQT7Q3jcGkxMCLbbx5ak6bD4oYb9sB/7z9hH46nQ9yhrkb1sqQocpsXxWPJanx1msd+5KO7I/K0ZtK39Xo9OqiRx9koUAmlzdUkrxL1bZ2NhhWLN0LGKC+cyvae3FW1+X4UCh89TmOq0aAJBX1IQ9Zxuw73yj055lDdOTg/HkvCSMiuLvfGpb+7BqSyEKqzt5Vc7otGqHVeUOE8CS8KclBeMPP5kApYJP1oKSZrz5dZndKlap2PHrGQj2Vw79XdbQjX3fNWLLkWp0yHRgZAtChynx5LwkzJ/MnxJFkeLZTedwvKyNWU6Aj/K16ocd6YdDBLAk/BnJIXjjx+OhEPjC36SvxIZvyh16kVKx8bEpSIkxNyi60tSDrUeqse2IexRy1hbFRpHi+U/O40hpC7OcUqzTZ6t/be/z7SZAxpoD04ko7AJImGlZ2shg/PHBCRAIX/hrPi/B7jNOP+kcwuv/MR7qMaHc8nNX2rHlSA32nmtwWZ8GkZESiv9ePp5bbhQpntv0HY6XtXJq0DU6rWa1Pc+2S8sxM/twoCAq/swS/sT4APzpoYkWhf/UB2ddKnwAqG+3fEw8cXggcpaMwSsPjIPKW+HSvulLmvHzd09zyxUCwbqfTMD4ON7hElmlydUttefZdhHAi/T/5Zo59g2ID1VhzdJxsLQ8Xf7WcZwsb4Or0SrxyHj2uDD87aeTERno49L+FVZ1YMmf+ZpgLwXBmqVjEcvZRlKKtVnZh+Ntfa7NBFBn614AyKOm1729BGQvGYOIQP5Z+B2vHXT6Yk8OjI72x0f/dQuSo6QreeRAXVsfstbqueVRQT7IXjIGXux1VYqBGF6x9Zk2ESA9J38R76Dn5cUpGBvLt9q+641D6O43OuvdyQ5/HwU+eGIqUhNda3ZmMFIs/tMRbvn4uAC8vJhrL/uwOjv/CVueJ5kAWTn7gwUQLatsxZwE3DY+nHvvY++elk0372qsf3SSxfWMM9DQ3o+nPjjLLb99YgQeyeTYzgrCWs0aneTzAckEMECpBcMFKyMlFCtmJ3DvW7WlCOerOlzx3pwG7ZIxLn/myfI2rNpSxC3/eVYiZo5i2EdSGkZFvCj1OZIIkJ6Tvwigz5heD1R54VcLk7n3rdpS5NYTt+uRFGld88jD3AnhuOeWaJf3ed/5RqzdXsIt/9XCZPj5MHcsD6hz9Y9IeYZVAlga+p++cyR3tbxJX+kxwgeAERJUz5bw23tGSdbxy4mvTtfj82PsQ6qYYF88fedI9o2U/i7zxfwIa+1bJQBv6J83KYJ7jHmyvA3v7K1w+cviwd9HIcn2wBoe0kj2WZEV7+ytQEkNWyewcEoUstjrrzHUh7xgrW2LBNCs0aVS0F+aXvf2EvDE3BHMe/oHRLzzbQVED/A4GsTISHm2cxkpochICXW8IRvR0TuAt7/lf1D/efsI5pE7BZ7LzM2fa6ltyyOAiBUsN+yfZyUiKog99L/9bQXOXml3+UuyBM1Y+YR27zTXrwUA4PDFFmzczzYkjQ3xxc+y2CYCRkp+YaldLgE0OboUSqmZ80ZylD9Xn328rBWfHqxyywviwVcpWNyi2gp3jQIA8H7eFZy5zP64HlLHIzHc3DeSAIvUa/RcKyJLI8AKEGI2dj5sYR7cXOBZwgeArAnhiA72dbyh6+CuUUCkFO/nXeGWc2UjUu6OgEmA2a/kDacM163UhEDMncD+mr44XotDF9kqS3dCzq9/EBkpoS4/Jh7EkdIW7oc2f3IkJrB2KgQPZ+bkM9WNTAIMDGAlALM39x+z2EN/a7cBmz1s6AeuCmrWaOcM16lWzNuciffzLuNCbRezbBlLRhRKCsIcBZgEIBCWmF4b9IJhYfuxWo9U8jhzqHa1juB6dPUZ8cUJtrX0bePDmYYvAB5mnQuYEUCTq1sMYKLp9fumsx01O3oHsPOk54XRc/ZizZ0jAADsPFmHCk4sApasKBAtept/2GYEoBT3m16LDPTBnRxz7p0n6zzOU8ffR+H0Q5vwAG+bfALlRv+AyP3w7p4ahdBh5mp5SqiZbG8gQMaqgmQQmLHkrils4Q8YKXae8ryv/6n5I11ybOvuCCU7T9ZxHWJZMiPA3PScvBsMeW4cAbyMS0BhdsLDO/LdearOKTb8jmDZzDjcPTXKJc9KCHNNTCIe2nr40++dHJkpTNZ3NxCAEGGR6Q3TkoIxnPNDPUnZAwCZY8Pw1HzrbmdyISpI3vMFe5BfzPalGBHhhymMhSoF7s/K2T+0ShwiQOZL+TGgdJbpDXPGs1f+xTWd1pwZXYqRkX54eZHNkeUcQnSQa+0GWbhQ28U1Gc9iyy5hgHgtGPxjiABGH0U6q3YmZ+uXX+RZwS/XPTiRpxt3GqKC3U8AAMgvYscY4G3bqfj9hz5EACIaM0wrpiYGImwY28gzv9hzAmW/vTIVEW4IIuV3LZ6Qu5Ff3ISuPnN7y8hAH0waztiuCsLMoX+yLg7i1mR2SLbDpS0orWOfRLkabz4yiX386SJEecA00NjRj8OcY/hbWW7plM5Ke+GbIOAaAdIeP65kzf/TkoKZjZ697H51b9gwb7z5yCS3b8WG+bp/BACAMxwVPE+Gvr7eGcA1Aqhie8yGf5W3gruXPuNmAoyPC8B/Lx/vduHzMHVEEN58ZBKeXZDseGMSwfsoJycEMgNvESKkA8BV+hJMMw2LzRO+wUjdavAxf3IknrlzJAI8YO5lISnCD28+MgnAVSKMiFDh6Q/POf25xTWdaO0y3OABPYiJwwPNdmwU+H4EEEVMM71pbCzv62+Dwegec6+fZSVi1eIUjxU+ADx5x43nENOSgqG9zzVm5ac5owDHYScBuEYAQswJwDvnPl3hnq8/5/4xeDTTPUaZUvHAzFimrf68SREuOaDi+V+kRDMIcC0qu5f6t/oA+JnH5h/JsaOvbHat2lepIHh7ZSpPxekxiA72xS/nj+SWL5sZh65eIzZaCxDpAHiyYcqSQpn5Un6MF/Gj00wHdAIgMZxHANdp/kZF+ePvKya73F3bVrxw72hJ+ocVc656UDmLBDzZJIT7gQBm2U8GvDHci7UAjA31Bc8dzlUjwNwJ4ci5f6xLnuUIBhd8UuFMEvBkI5CrMq0yIQghiuECFYmZDRHvcKO9Z8AlTp4rZifcFMK3+/fNScCiNMciobPQZxDR0N7PLItmKK4IjAkCJdTM9i88gE0AV3z9906LHvpKfsh4ct4I9jGtg+DJiBXDmFASLRBGmJcQPyWzEWd//Vnjw/Gbu0c59RmeApW3Av81b4Ts65seTgyGEMb5gAiECwTmIwBvn93jxAAPWePDsWbpD3fYZ2HS8EA8mGFzVBeL6DGwo6uyZEpAwwXKMP/247DSWQT4/yj8QSy5NUZWyyKejNgyJWECCMymAF6KlF6D/LF7/z8LH7iqTFoiMWS+FPAIwJFpuEApzM58OUGIZB8BwoZ54/G5ssU9thmdvZ4RtmbJrTFIlsmDmScjjkzDBAJItuqUWwfwkCbeZckeTaEvaeZ617gD8yZZjeXgDIQLYBDAyMl35yfjinXmqBDJ2ULkRP+AiPV7yvDbzedd/mxLmDcpAsN8HFdy8XYVRvbs3SgAxIwAvPQlKm/5Mra7I9rG0dJW/OL9sx7pxRwV5CPLKMAjAEemTQJAzQjAi+cn1571IfVwl7tWvbuvAs9uOufREcvmyODJrLJtB9foBcDs6KiDsziSYwoYHe2PhzXy7n0toW9ARO5nxU7NRSAXpiUFISnCz6GkFirODo4tU9rEXAPw4urKMQLMHBXiMu1eR88AXvpX4U0h/EFkOTgK8N4tS6YUpFEAUGZa0NTJVijIsWK/ZUSwDK/JOho7+rHyf07h0AXPC1phCczgjzaAJ6NGhkwFoNELFIWm4b15DocRgd7wUQros/NAyN9HgalJzjfkrGrpxbK/HnP6c5yB2BD73c18lAI3WDdTpgSXBSrQQtPr1RayXTsyCkxPDuEeMsmFk+VtkoXvjrD11hDsr7R7rWVJNiyZilQoFARKzAhgMFIz44HvH2I/Q6dLSKLoCE6Wt1kMsmyKix7i3GIKe0cBnmyqW3qZ20CF0lgo5GvVJSAw2yNcamC/HIdGACcSoLSuCzmfFdt0T0FJs1vTyPEQZqebG082LBd+Smlb3ouamqt7BgqzsNQXOcek1nL/8eCrFBya36zhn4eq0NjRb9M9AyLFV6ddm7pGCuz1NuLJ5gJjpCPk6sh/bdNIzHKVFHHy1U2004oliGNkIgeOXmrFrlP2CXLX6XquGZW7EOBr3xqAJ5uiavPDLwJ8TwAK8YBphXOV7BOzIJWXXeFXglTOI8DWI9V239vc2e/Q/c6APSPAxPgABHEMec5dMZclpfQMMEQA4yHTCm3dBq62zJ5pIMjPOd485yo7oHfQVX3rkWqP8XYGYC2VPBPc4b+2C63djEMgotgPXCNAgXZOEUDKTSvx8tSNi7NjBHDSFPCNDHn++gwiNukrHW5HLtS09tl8D08mJ9gybNVr008BN8QIEnWmtY6WMm9G2shgppGhJThjBOjsHZAt0eOesw3YsLdc9j7ag1obw+6FB3hzYzkcYciQAPsH/z1EAMpYCB4ubWFGngjw9UK6jUEYnbEGOFnehhaJ+QClYJOukpudw5WwdQTQjAmDPyM8TlffAA4z4geJBENT/hABFFAcYjXOiwWUbmMMXn7aU/tx1AlBqtbtLEXBBfeFv2ns6LfZVI2XDyGPEzsIVBz62IcIkKeddQSAWdbC/YXsUHAZKaEWU8Kb4lxlBwZkNin71klh6tbtLEVpvXsWhcU1nTbVHx3tzx3+97PeD0EDUSnMCQAAoNhhWl9X3Mw8YPFSEJumAaNIZR0FuvqMktPB2oq6tj6s21mKzj7XG41etNFOUTOGHQmsoaMf+hLGCEDpNt1vMob2hTcQQFSIO1mN8RI980LI8nBaxtAybd3OEf4gzlxux7qdpU59BgvljdKPpoNUXljI8UrezTnhFAi23vD39X8UrMo8C+Ab05u+5JyyjYkZZlNIdjnNsZxNAMD1OwOjSHG+Uvo7Wjg1iuvI+yUjhjMBCvJWa/Zef83MfogQ82mgorGbG5L0RzYSoLnTs45drcGVOwN9STOqWqRtAb29BO7Xf6CwCZcZ+RtEYJvpNTMCGPsVWwGYffKfHWW/BFtGge4+I3bJpHxxpm7BFOt2lrpEdayz4URz4dQobhAPjqw6Cb1x+AcYBChYO6sKIO+ZXj9a2ooTHAOKxWkxzH0oC7tO1cNgdNzFzJUEAPjrILlQ397HXrQx4OMl4B7O13/0UitzsU2AzbpstVlUCqYJqQjDRlCYTUa8lHCjo/3xaKY0n/7yxm67NXfXw99HwYx/5yzsPlPvVPf4Tw9WS17XLE+P48ZM+idHRpSSjazrzDdYoJ1zEYSajQL6kmbm0eJgp3j7UVPINQ3IkQ5WKpo7DU7LinausgOfHpLmrJIU6Yfl6Wyz+oKSZk7IWLJJl53BPOjjfkKikW4EYEb5D/P5eesezRwOgVi3+Tt7pV2WXAMjHMgIbg8OOemE0JZkm8tnxXGn2w94siHYyGuPS4CC3MyzAMxGgVMVbdwsFZMTAiXH8pNjFBgb49og0d85wato+7EayR/D7HFhuGtKFLed75hbSLJNtzpjH69Ni5OoAPpXAGanN+/uq0Cvge0+tmJOAmZIsG0vKGnG3/aUWa1nCeoxrk3hWtXca7PZmSWcvdKO9XvKJdUdHqbCL+5gB5ts7xnA/+zjRB2jxo0WmrVMgDyt5jyF+CfT6w0d/fj7N/yOP35bIgIkWLV8UlCF7cdqrdbjISrIx+mWxqaQK0NaT78Rf9tTLjnmwlN3JHF1Lxu+KectID/RZWd+aaldq8toI/X5Iwi+M72+7UgNDnLmxJSYYXhMYuCHP+y86JBWb/Y4+VPDWkLoMHkSU6zfUy456PYTt4/g6l3yipp4SSRbKYTXrLVtlQCHsme0A+RPrLK/fFXGDRuzOC2Gm2vQFM9+dE7yCZgpFkyJdGn2rlAbDWFY2H6sBtslni7OnxzJDSTV0TuAv3x1iVlGQV/Ta9OthimXtJHWrc54j1DsNr1e2dyDdTsvcu97/u5RGC/RfMxeVy4fLwELprgmTVxsiK/Djq2HL7bgDxKVTOPjAvCbe/hh89btLGW6fBGCA3qt5g0pz5B8kmIkYi4AM2X1rtP1XKtaHy8Bry4bJzmvjjpHh73f2b49XJAaabOJmj2Y5qBf44f5V/Crj7+TVDdQ5YVXl42DjxdbRJsPVvHtISlel9onyQQo0GYWgJLnWWV/3nWJm0IuPMAbbz06WfJL0m4tgnabbR4+4QHeWCBxunEEvPQr1jBgpPjdPwvxzrcVku9569HJzOieAHDoYgvWf83eQRHgjXyt+iupz7HpLFWXnbEBoBtYZWu3l3Dn8ZGRflhvAwn2nmvAindOocQG65gFqVFQONHxNCnCz64IHqcq2vDExtNcbSoL6x+dzA3XX9HYgzWfl3DupP/O16p/a0v/bD5MV8L4PAEKTK83dvQje1sxd1GYmhiIrU+nSVYaldR04sn3z2KHxMzkSZF+WDxd/gDMg7gzNdJmz+ZNuko8/eE5rpeVKfx9FNj6dBpSE9k2/p29A8jZVsTc8hGgkHopnrb1dxFKbbfTS8/JSxcg7AZgppGYNToEv//xBO69rd0G5H5Wws12ycKPpkVj8fQYjIqyHEuvucuAx949bbNZtTVEBHjjvcemSN4CFld3YuOBy5K1e8DVFH2r70tBsAUt57MfnWNumSkggooL9NmZX9v62+wiAABocgt+SqnIPGWyFv2zb0DE2s9LbNIHKBUEi9NisGi65dCqu07X45XtJZLblYLHb0uUFNXs7JV27DhRZ3NG9azx4Xh5cQp3wQcAL35aiDxutlbylE6b8ZY9v81uAgBARk5eNoGgZZXdPjEC2UssJ0vauP+yzYkT/H0UWJwWg8XTY7jmUM9/cp57SGUPdr8wy+LUdbysFTtO1mHPWdudVFbMTrAaHv/lLUVsC18MLfpsmvdvuN8RAgBARo7uPQKsYJXNHheGVx4YZ/H+vKImrP+6zOaDoBB/JRanxSBtZLCZX9yl+m48/PcTDv2uQfwsK5Gr4Dp4oQU7TtbaFYQqLsQXT96RxM3NPIgX/nmeaylEgY16rXqlI7/PYQIAgDpX9wUo7mGVTR8ZjNylYy3qBqpaerH+6zILQ5xlhAd4I21kMJIj/RE6TImoIB8UlDTjExkCQuatzrhBxX3sUiuOXmrFsUutNtvwDyJzbBievCMJcRbiJbR1G7BqSxHXCgugX+i0mh85+vtkIQAAqHN0ewDczipLjvKH9r4x3K3NIP73RC026Su54WlsgcpbAZW3gOZO+62H70yNRFKEH0rrulBa3+2wB3FcqC8ezIjHPbdYtqG8WNeFnG3FlqKX7Ndp1VkOvyTISADA8nTg76PAS4tSrA55TZ392KSrxJbDnuWz7yiWzojFg+p4bjb2QRwobMLa7SWWtITf6LTqeXL1S1YCAEBGrk5LKLJ55Zbm1Otx7FIrthyutmkr5YnISAnF0hmxSJOgtv7Hgct4bz9/USzHnG8K2QkAWN4dDL6U5+5KlpR6XV/SjC+O1950RMhICcW906KRIcF9rq6tD3/8stTib6QQc/TazGy5++kUAgDWSTDM1wtPzU/CQomavJuFCLYIHrjqwfPX3WUWPYKdJXzAiQQAAE2ubimlWAuYp6YdxJxxYXh87ggMl6jTL63rQn5xM/KLmuxehcuNKYlBSE8JRUZKCNdZwxRVzb3YsLfc6mGYM4UPOJkAAJCVfTjeQAyvAHjYUr2VcxLw09m25Qs8dqkVBy+04MyVdhS6MAy8j5eASQmBmDw8EOkpobzs3Fx8kHcF7+6vgJVXX0IIXs5frd7izN/idAIMQp2d/wQEYS0o5W4DYoJ98ZAmHvfeIt3fcBBNnf04c7kdpyvacb6qA5XNPbI5ckQEeiM+VIXUhEBMTghCakIgN7GWJew4WYeP8q9IOfT6UEmVL+3LnuH0wEUuIwAAaNboUiEimwKLLNUbGemHZTPjuM6PUtHeM4DK5h5UNveisqkHPQYjevpF9PQbr/5nMIJg8MxAAb9r/w9UeSE+VIX4UF/Eh6rsEvb12HWqHp8eqrLuX0hIE0TxZV22ZoO0lh2HSwkwCHV2/jMgRAsg2FK9uBBfLEqLwb3ToiWrkT0F3X1GfHGiFtuP1UpNufsvIuDV/FXq067sp1sIAAAZOQVTBIhaa6MBcDXl2YIpUbhjUgSmjnB+uHlHcLqiDbvPNmDXqTqpWdaKQchrutUZH7ijv24jwCCujQbPA5CUQiwhTIXZ48KhGRsq2eDU2Siq7kR+cRP2n29ChQ0RPgjwR9JHX897VSNPrDs74HYCAEDmq/kxRgN9nED4OSQSAfjeMeSWpGCkJgRKOliSAw0d/Thd0YYT5W04Wtpqj7PIZwKhfzON1uEOeAQBBmEvEQYRE+KLsTHDMDraH0kRfkgIVyE2RAWlwj5bQaNIUd3Si8tNPSir78aFui4UV3eg0j5lVTNAPyZG8nF+rvqwa98sHx5FgEEMEYEKi0CQ6mh74QHeCBvmjRB/JQJ8vaDyUcDHSxgyIjWKFP0DV3cHHb0DaO0yoLHTgIZ220O2MnCGQviYepGPC16a5XEJCz2SANdDnZ13FyHCIgosBiPTuUeCwEAotolE2Kpfnb7N8Qad2FVPJ8AgsnL2h/cTxWJChUUAVQNwbeZJaTgOQrcpBLr1wMuZF9zdGSm4aQhwPdJydvj5igEZVCAZAhVmUoJZcA8h2gnFQZGIhyghBwtWa3Y73qRrcVMSgIX0NXlTFaIwiQLjADIOoONgQQllB7oJQQWl9AIF9AoB+rxVGr3jzboXPxgCsPDAA1sU1ZNix4IigYpimCCQMEppGAUJI6BhAAmjlBoJEboAdFPQbnI1l3I3qNAAGC8ThVDhJaoq9mmnOScwsZvxfxBALoeMhdc7AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAxLTA0VDE3OjQwOjQwKzA4OjAwMETRFAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMS0wNFQxNzo0MDo0MCswODowMEEZaagAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMTI4Q3xBgAAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxMjjQjRHdAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2NDEyODkyNDBHas4HAAAAEnRFWHRUaHVtYjo6U2l6ZQA4OTY1QkLYlWfDAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTY0MTI2NjYyODIzMDM0MzBfNzBfWzBdss85vgAAAABJRU5ErkJggg==",
        label: {
          fontSize: 15,
          color: "#d9001b",
        },
      },
      {
        nodeName: "gxrj" + " kWh",
        value: [310, 100],
        symbolSize: 0.0001,
        label: {
          fontSize: 12,
        },
      },
      {
        nodeName: "华电燃机",
        value: [470, 40],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "",
        symbol:
          "image://data:image/png;base64,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",
        label: {
          fontSize: 15,
          color: "#d9001b",
        },
      },
      {
        nodeName: "hdrj" + " kWh",
        value: [470, 100],
        symbolSize: 0.0001,
        label: {
          fontSize: 12,
        },
      },
      {
        nodeName: "",
        value: [630, 295],
        symbolSize: 50,
        clfx: "单向",
        tpfl: "790.9",
        symbol:
          "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXCAMAAABGFileAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAANlBMVEX///9LeQJ2mT+Zs29hiSGIp1jl7Nr///++z6T4+vXQ3L3f59Hr8OOzxpTX4sfy9ezI1rKnvYN8Q6u+AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmARUFORqjQ2oJAAABpklEQVRYw+2VfXODIAzGO15ELSp+/y+7BBICs17tdbvbdnn+qFDgl/gQ8HZTqVQqlUql+iX6+BkpV7n/g2usdc2At7bp9WOgIYRwiTtOIQjJzc06c4dOiPaUC0uDp/YC7ZW5btlwKa80CWfyOp87oOWMu0JnpDbmsBM30UorQ8J1OBgj/EzmhLvjDGrjPPZhCB03dNxUkknl/R77i6FNDbE23Dm23GkULji0YdqhPB9y1+rSSpjMHReXJxJ33kvOxV1ozEwyX7lmANmc5Z0z37p6aLjsRd3fvCdzN4G4A702GuHaLJ5yE/+fuoooXLQrOgq609O/zk0910Cak2e3VtmMN7kDZVmAUF6GbXjLh7GJVNwf695e4u5dgDodXeBro2xYrOfjUj3kpO6HOuuOCjrr5Dw/5Xouze14LmJjzUyBzEUu8rB0lrolwsWYkxcjxIYLXExiW/AaPd47ieuX4su19pyb3/bsnoxicb5SgrvOdeW6m1osc73Ew9qlS6Llwnen/dZAT6L4lNLSf4g8jePTyxJz4H6zlKvcP81VqVQqlUqlelGfmgIfWbTMKYwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDEtMjBUMjE6NTc6MjYrMDg6MDBqIA9WAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAxLTIwVDIxOjU3OjI2KzA4OjAwG3236gAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA4N7tq1bAAAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAODdDxRU9AAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2NDI2ODcwNDbnK5DkAAAAEnRFWHRUaHVtYjo6U2l6ZQA0MDc4QkISIzH/AAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTY0MjY4MTM5ODE5MzI3NTFfNDZfWzBd8WeAEwAAAABJRU5ErkJggg==",
        itemStyle: {
          color: "#3b80c3",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "董王变",
        value: [630, 250],
        symbolSize: 30,
        clfx: "单向",
        tpfl: "790.9",
        symbol:
          "path://M488 1254 c-173 -41 -342 -180 -419 -342 -128 -272 -49 -599 189 -774 127 -94 264 -134 431 -126 77 4 111 11 174 36 199 80 341 239 392 437 20 78 20 233 0 309 -61 232 -247 414 -473 461 -84 18 -219 18 -294 -1z m337 -55 c39 -13 104 -46 145 -74 295 -200 346 -609 110 -877 -57 -65 -172 -140 -261 -169 -105 -34 -253 -34 -358 0 -232 76 -392 281 -408 522 -19 290 174 548 462 615 84 19 222 12 310 -17z M482 1136 c-139 -46 -239 -132 -303 -261 -94 -191 -76 -387 52 -558 50 -67 158 -145 241 -173 80 -29 273 -26 349 4 140 56 255 172 306 312 25 66 28 89 27 185 0 95 -4 119 -27 178 -43 111 -112 196 -208 258 -85 54 -144 71 -259 76 -91 3 -115 0 -178 -21z m38 -51 c0 -14 7 -28 15 -31 8 -4 15 -15 15 -25 0 -10 -7 -19 -15 -19 -8 0 -15 -4 -15 -9 0 -5 7 -11 15 -15 8 -3 15 -12 15 -21 0 -9 -7 -18 -15 -21 -8 -4 -15 -10 -15 -15 0 -5 7 -9 15 -9 21 0 19 -30 -2 -46 -16 -12 -12 -13 30 -14 26 0 47 5 47 10 0 6 -4 10 -10 10 -14 0 -13 37 1 42 9 3 8 10 -2 25 -11 18 -10 24 2 39 11 13 11 18 2 21 -18 6 -16 38 2 53 8 7 15 21 15 31 0 12 7 19 20 19 14 0 20 -7 20 -24 0 -13 7 -26 15 -30 8 -3 15 -15 15 -26 0 -11 -7 -20 -15 -20 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 21 0 19 -37 -2 -49 -17 -9 -17 -10 0 -16 9 -4 17 -14 17 -22 0 -9 -8 -22 -17 -29 -16 -12 -11 -13 37 -13 48 0 53 1 38 13 -22 16 -24 46 -3 46 8 0 15 4 15 9 0 5 -7 11 -15 15 -8 3 -15 12 -15 21 0 9 7 18 15 21 8 4 15 10 15 15 0 5 -7 9 -15 9 -8 0 -15 9 -15 19 0 10 7 21 15 25 8 3 15 17 15 31 0 33 36 35 46 3 3 -13 14 -31 23 -41 15 -17 14 -20 -3 -32 -17 -13 -17 -15 -2 -31 16 -15 16 -18 0 -35 -16 -18 -16 -20 2 -34 18 -14 18 -16 2 -29 -10 -7 -18 -16 -18 -19 0 -4 41 -8 91 -9 75 -2 94 -6 103 -20 14 -23 -3 -52 -33 -56 -21 -3 -21 -6 -21 -212 0 -206 0 -209 21 -212 27 -4 44 -30 36 -52 -6 -14 -42 -16 -360 -16 -298 0 -356 2 -367 15 -18 22 -3 55 26 55 l24 0 0 209 0 209 -30 11 c-19 6 -30 17 -30 28 0 35 21 43 112 43 48 0 88 3 88 6 0 4 -8 13 -17 20 -17 13 -17 15 1 29 18 14 18 16 2 34 -16 17 -16 20 0 35 15 16 15 18 -2 31 -17 12 -18 15 -3 32 9 10 20 28 23 41 10 32 46 30 46 -3z M556 720 c-76 -49 -94 -155 -40 -232 16 -24 39 -45 49 -47 17 -3 15 0 -6 18 -54 42 -75 132 -44 190 8 16 29 41 46 55 38 32 35 43 -5 16z M624 710 c-41 -68 -74 -129 -74 -134 0 -3 18 -6 41 -6 38 0 41 -2 36 -22 -22 -87 -35 -149 -30 -144 3 3 39 56 78 118 l73 113 -47 5 -46 5 -5 50 -5 50 -21 -35z M733 709 c48 -39 67 -77 67 -131 0 -72 -46 -128 -117 -143 -18 -4 -33 -11 -33 -16 0 -28 100 19 134 63 38 51 44 115 16 173 -13 26 -37 55 -54 66 -48 29 -55 23 -13 -12z",
        itemStyle: {
          color: "#3b80c3",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "新能源",
        value: [740, 480],
        symbolSize: 40,
        clfx: "单向",
        tpfl: "112.37",
        symbol:
          "image://data:image/png;base64,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ckz5IUxmpj+kDfFiyug6J1+zvALQt5hXaIbVCsYg36BQrk5EtV+4bbWYDACH1cBiSB6vpTVWkwDWum27QNwzCcoTelY83ZwxZ/X9e7/r4vWGmGMBT0Ch7u7AbgAgoi9S2GeLSHK9bOWgdr2znn3wloPbdf/FZuvK2XHtKS8GgpiOgMP1nVxiLaAQJ8fxLqA1pDLiFkWBCZsFq6pJNgTYEqwq3f8mSzBUEzYEEQSDTRAELAhE2IQFAQHB1RGTzE4BBcKmapM6DwgotrBolIkqCOzcLnY1TDUvAKx8PvUTQF1MWwv49bSLhy9ocrIW4DOUEqqBxZCMaznWFfROxsUsRq3u9e8+V6/TphaO1ctAKwvnl4FeZYBKJBACmDXr4tEAF1Pc8TQDVBKBEEBnddGTulAAUqE6T/+fMbaxsTEQb4wMhADYKv6y7mPlqEBkgUAIQFGKzgCACMZEMBACcLrMqzeqYocZQBqKqAH0YHtQDaxEAiGAkq7ri7h9PJQJhACohMoeu3xDqFIJhAAAx8vBvujB4SRQIoo/mou6eziEkV4AjY2XDwMwpoSuYQaQgT1KV6lHcpgBZMA2S9yRHt8SrhSkF0AJ9wG6ISgnzr7C84WvfiO9AJQyCjqWKqTPAtILgMso6Li5OrhSkV4AKKOgE4RikPwCcPBamPxdQwEMeaiEItDnBKAaKL0AGIVfCpEPCkAtQHoBFLMauC8cgGqg1AJYsGCBWuZDrGEGGMq89X51eUdwAKqBUgvAUstb1kUBeEBEagGwVd4RzMCwGY2XH+J3HF4itQAUpfwjmIUtdRaQWgCOXg5dyEaZp5FKR2oBlFMF7EGVvBootwDKqQL2WJC8Gii1AJy8HLoQsq8NlFoA5ZSBexkJM8DQhWeUa4FcmEhWMpILwBXO9dsBL/k/nnIngCzJppEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDEtMDRUMTc6Mjg6NTcrMDg6MDDCK2WzAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAxLTA0VDE3OjI4OjU3KzA4OjAws3bdDwAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAxMjhDfEGAAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADEyONCNEd0AAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTY0MTI4ODUzNyu8vIMAAAASdEVYdFRodW1iOjpTaXplADQyMzVCQu9ZZpsAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjQxMjY0OTk5MzgwMDE0OV8zNV9bMF2/69mpAAAAAElFTkSuQmCC",
        label: {
          fontSize: 17,
          color: "#00a660",
        },
      },
      {
        nodeName: "gljdxny" + " kWh",
        value: [740, 400],
        symbolSize: 0.0001,
        label: {
          fontSize: 12,
        },
      },
      {
        nodeName: "广陵基地",
        value: [750, 245],
        symbolSize: 50,
        clfx: "单向",
        tpfl: "112.37",
        symbol:
          "path://M1073.695609 574.711126L1014.196104 507.098052V314.738858L996.954771 304.258831l-154.833939-69.979531L526.367778 338.065368v672.750083h315.753054v-709.937273l107.166722 48.681413v178.498514l8.113568 9.46583 60.851767 67.613074v418.862991H1081.809178v-439.484979z m-425.286233-213.995378l44.624629-11.832288v70.993727l-44.624629 8.7897z m-78.0931 18.593595l38.201387-9.803896v67.613074l-38.201387 7.775503z m0 99.391218L608.517663 473.291515v67.613074l-38.201387 3.718719zM608.517663 642.324199h-37.187191v-64.23242H608.517663z m38.877517-179.850775l44.624629-7.099373v74.712446l-44.624629 4.732915z m45.638825 107.166721V642.324199h-43.272367v-69.641465l44.286563-3.042589z m45.638824-119.337075l51.724002-8.789699v78.769231l-51.724002 5.07098z m52.738198 113.251899V642.324199h-50.709805v-75.726642l51.724001-3.380654z m0-242.730935v77.755035l-51.724002 10.480026V334.684714l51.724002-13.86068z M636.577088 107.166722L430.695279 0 0 137.93067V1010.815451h430.695279V69.979531l157.538462 84.516342v123.055794h64.570485V116.294487zM110.885441 554.765269H59.161439v-87.896996l51.724002-3.380653z m0-138.606801l-51.724002 5.070981v-87.896996l51.724002-8.113569z m0-140.635193l-51.724002 10.480026V197.76824l51.724002-13.86068z m114.60416 282.960713H165.313965v-94.996368l60.175636-5.070981z m0-152.467481l-60.175636 6.085177V315.753054l60.175636-9.803896z m0-153.143612l-60.175636 11.832288V169.032684l60.175636-15.889072z m135.226147 304.258832H289.383955v-101.419611l71.331793-4.732915z m0-165.313965l-71.331793 7.099372V296.145262l71.331793-11.832287z m0-165.990096l-71.331793 14.198745v-101.41961l71.331793-18.593595z",
        itemStyle: {
          color: "#0faaff",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "gljd" + " kWh",
        value: [750, 195],
        symbolSize: 0,
        label: {
          fontSize: 16,
          color: "#0faaff",
        },
      },
      {
        nodeName: "",
        value: [730, 130],
        symbolSize: 130,
        clfx: "单向",
        tpfl: "790.9",
        symbol:
          "image://data:image/png;base64,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",
        itemStyle: {
          color: "#3b80c3",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "allMD" + " kWh",
        value: [755, 168],
        symbolSize: 0.0001,
        label: {
          fontSize: 10,
        },
      },
      {
        nodeName: "allXNYD" + " kWh",
        value: [755, 148],
        symbolSize: 0.0001,
        label: {
          fontSize: 10,
        },
      },
      {
        nodeName: "allRQD" + " kWh",
        value: [755, 125],
        symbolSize: 0.0001,
        label: {
          fontSize: 10,
        },
      },
      {
        nodeName: "allJDRD" + " kWh",
        value: [755, 106],
        symbolSize: 0.0001,
        label: {
          fontSize: 10,
        },
      },
      {
        nodeName: "空调",
        value: [850, 380],
        symbolSize: 40,
        clfx: "单向",
        symbol:
          "path:// M1192.463515 145.190788v77.575757H172.838788v-77.575757z M1192.463515 211.657697v77.575758H172.838788v-77.575758zM913.935515 670.999273c20.076606 0 36.615758 15.266909 38.570667 34.816l0.217212 3.971879v258.172121a38.787879 38.787879 0 0 1-77.389576 3.940848l-0.186182-3.971879v-258.172121c0-21.410909 17.37697-38.787879 38.787879-38.787879z M770.699636 754.65697a38.787879 38.787879 0 0 1 49.338182-15.732364l3.723637 1.923879 219.632484 129.08606a38.787879 38.787879 0 0 1-35.560727 68.825213l-3.754667-1.95491-219.601454-129.08606a38.787879 38.787879 0 0 1-13.777455-53.061818z M1004.078545 740.848485a38.787879 38.787879 0 0 1 42.821819 64.54303l-3.506425 2.358303-219.601454 129.086061a38.787879 38.787879 0 0 1-42.821818-64.543031l3.506424-2.358303 219.601454-129.08606zM327.773091 670.409697a38.787879 38.787879 0 0 1 44.869818 26.189576l1.024 3.847757 17.066667 81.764849c5.988848 29.168485-4.654545 61.129697-28.175515 77.606788l-2.513455 1.582545 23.676121 98.800485a38.787879 38.787879 0 0 1-24.855272 45.614545l-3.816728 1.117091a38.787879 38.787879 0 0 1-45.614545-24.855272l-1.148121-3.816728-23.893334-99.669333c-7.850667-32.985212 5.988848-69.911273 36.336485-83.843879l-4.778667 2.389334a3.971879 3.971879 0 0 0-1.179151 0.775757l-17.066667-81.609697a38.787879 38.787879 0 0 1 30.068364-45.924848zM478.083879 670.409697a38.787879 38.787879 0 0 1 44.900848 26.220606l0.99297 3.816727 17.066667 81.733818c6.019879 29.168485-4.654545 61.129697-28.144485 77.637819l-2.544485 1.582545 23.676121 98.800485a38.787879 38.787879 0 0 1-24.886303 45.614545l-3.816727 1.117091a38.787879 38.787879 0 0 1-45.614546-24.855272l-1.117091-3.816728-23.893333-99.669333c-7.850667-32.985212 5.988848-69.911273 36.336485-83.812848l-4.778667 2.358303-1.179151 0.837818-17.066667-81.671758a38.787879 38.787879 0 0 1 30.099394-45.924848zM628.363636 670.409697a38.787879 38.787879 0 0 1 44.900849 26.189576l0.99297 3.847757 17.066666 81.733818c6.081939 29.354667-4.747636 61.595152-28.609939 77.979152l-2.048 1.272242 23.676121 98.769455a38.787879 38.787879 0 0 1-24.855273 45.614545l-3.816727 1.117091a38.787879 38.787879 0 0 1-45.614545-24.855272l-1.148122-3.816728-23.893333-99.669333c-7.881697-32.985212 5.988848-69.911273 36.336485-83.843879l-4.778667 2.389334a4.096 4.096 0 0 0-1.179151 0.775757l-17.066667-81.609697a38.787879 38.787879 0 0 1 30.037333-45.924848zM1015.125333 566.30303v77.575758H328.021333v-77.575758z M1212.043636 23.272727H131.10303C71.400727 23.272727 23.303758 73.231515 23.303758 133.740606L23.272727 544.519758c0 57.219879 44.931879 110.467879 95.449212 110.467878l178.672485-0.06206-0.03103-140.101818H1045.721212v140.101818l178.734546 0.03103c50.517333 0 95.449212-53.21697 95.449212-110.467879L1319.873939 133.740606c0-60.509091-48.09697-110.467879-107.861333-110.467879zM131.10303 100.848485H1212.043636c16.228848 0 30.285576 14.584242 30.285576 32.892121v410.779152l-0.217212 3.878787c-1.768727 15.484121-13.498182 28.982303-17.625212 28.982303l-101.158788-0.03103v-65.473939c0-40.804848-32.550788-74.596848-73.293576-74.596849H293.174303l-5.08897 0.155152c-38.322424 2.668606-68.266667 35.374545-68.266666 74.472727l-0.031031 65.442909-101.096727 0.03103c-4.468364 0-17.842424-15.856485-17.842424-32.892121L100.879515 133.740606c0-18.307879 14.025697-32.892121 30.254546-32.892121z",
        itemStyle: {
          color: "#0faaff",
        },
        label: {
          fontSize: 15,
        },
      },
      {
        nodeName: "智能插座",
        value: [850, 100],
        symbolSize: 40,
        clfx: "单向",
        symbol:
          "path://M192 128h128v85.333H192z M602.88 42.667a143.787 143.787 0 0 1 142.933 128h64.854a64 64 0 0 1 64 64v682.666a64 64 0 0 1-64 64H640a64 64 0 0 1-64-64V234.667a64 64 0 0 1 64-64h62.784a101.12 101.12 0 0 0-200.875 11.136l-0.106 4.629v661.333a133.547 133.547 0 0 1-267.051 4.907l-0.085-4.907V253.867a106.71 106.71 0 0 1-85.334-104.534v-42.666a21.333 21.333 0 0 1 21.334-21.334H192V64a21.333 21.333 0 1 1 42.667 0v21.333h42.666V64A21.333 21.333 0 0 1 320 64v21.333h21.333a21.333 21.333 0 0 1 21.334 21.334v42.666a106.71 106.71 0 0 1-85.312 104.534l-0.022 593.92a90.88 90.88 0 0 0 181.696 4.394l0.107-4.416V186.432A143.787 143.787 0 0 1 602.88 42.667z m207.787 170.666H640a21.333 21.333 0 0 0-21.333 21.334v682.666A21.333 21.333 0 0 0 640 938.667h170.667A21.333 21.333 0 0 0 832 917.333V234.667a21.333 21.333 0 0 0-21.333-21.334z m-64 640a21.333 21.333 0 0 1 0 42.667H704a21.333 21.333 0 0 1 0-42.667h42.667z m0-85.333a21.333 21.333 0 0 1 0 42.667H704A21.333 21.333 0 0 1 704 768h42.667z m0-85.333a21.333 21.333 0 0 1 0 42.666H704a21.333 21.333 0 0 1 0-42.666h42.667z m-64-128A21.333 21.333 0 0 1 704 576v42.667a21.333 21.333 0 0 1-42.667 0V576a21.333 21.333 0 0 1 21.334-21.333z m85.333 0A21.333 21.333 0 0 1 789.333 576v42.667a21.333 21.333 0 0 1-42.666 0V576A21.333 21.333 0 0 1 768 554.667z m-85.333-128A21.333 21.333 0 0 1 704 448v42.667a21.333 21.333 0 0 1-42.667 0V448a21.333 21.333 0 0 1 21.334-21.333z m85.333 0A21.333 21.333 0 0 1 789.333 448v42.667a21.333 21.333 0 0 1-42.666 0V448A21.333 21.333 0 0 1 768 426.667zM725.333 256a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m0 42.667a21.333 21.333 0 1 0 0 42.666 21.333 21.333 0 0 0 0-42.666zM320 128H192v21.333a64 64 0 0 0 128 0V128z",
        itemStyle: {
          color: "#0faaff",
        },
        label: {
          fontSize: 15,
        },
      },
    ];
    var charts = {
      nodes: [],
      linesData: [
        {
          lineStyle: {
            type: "dashed",
            width: 1,
            color: "#d9001b",
            curveness: 0.3,
          },
          effect: {
            show: true,
            symbolSize: 0.0001,
          },
          name: "12",
          coords: [
            [95, 320],
            [115, 340],
            [170, 340],
            [190, 320],
            [190, 160],
            [170, 140],
            [115, 140],
            [95, 160],
            [95, 320],
          ],
        },
        {
          lineStyle: {
            type: "dashed",
            width: 1,
            color: "#02a7f0",
            curveness: 0.3,
          },
          effect: {
            show: true,
            symbolSize: 0.0001,
          },
          name: "12",
          coords: [
            [260, 320],
            [280, 340],
            [500, 340],
            [520, 320],
            [520, 160],
            [500, 140],
            [280, 140],
            [260, 160],
            [260, 320],
          ],
        },
        {
          lineStyle: {
            type: "dashed",
            width: 1,
            color: "#7ec907",
            curveness: 0.3,
          },
          effect: {
            show: true,
            trailLength: 0.5,
            symbolSize: 0.0001,
          },
          name: "12",
          coords: [
            [595, 270],
            [605, 280],
            [655, 280],
            [665, 270],
            [665, 210],
            [655, 200],
            [605, 200],
            [595, 210],
            [595, 270],
          ],
        },
        {
          lineStyle: {
            type: "dashed",
            width: 1,
            color: "#b8dbf6",
            curveness: 0.3,
          },
          effect: {
            show: true,
            trailLength: 0.5,
            symbolSize: 0.0001,
          },
          name: "12",
          coords: [
            [310, 300],
            [310, 200],
            [470, 200],
            [470, 300],
            [310, 300],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#4b7902",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [-10, 100],
            [95, 170],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#00ffff",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [-10, 200],
            [95, 200],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#7f7f7f",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [-10, 300],
            [95, 300],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#d9001b",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [-10, 400],
            [95, 310],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#4b7902",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [190, 170],
            [260, 170],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#00ffff",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [190, 215],
            [260, 215],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#7f7f7f",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [190, 260],
            [260, 260],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#d9001b",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [190, 305],
            [260, 305],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#7b7e85",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [310, 460],
            [310, 340],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#d9001b",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [470, 460],
            [470, 340],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#d9001b",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [310, 40],
            [310, 140],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#d9001b",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [470, 40],
            [470, 140],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#4b7902",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [520, 210],
            [595, 210],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#00ffff",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [520, 230],
            [595, 230],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#7f7f7f",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [520, 250],
            [595, 250],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#d9001b",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [520, 270],
            [595, 270],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#4b7902",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [665, 222],
            [730, 222],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#00ffff",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [665, 235],
            [730, 235],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#7f7f7f",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [665, 245],
            [730, 245],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#d9001b",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [665, 260],
            [730, 260],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#d9001b",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [665, 260],
            [730, 260],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#4b7902",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [740, 480],
            [740, 250],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#65a6d7",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [740, 250],
            [820, 250],
            [820, 380],
            [850, 380],
          ],
        },
        {
          lineStyle: {
            width: 2,
            color: "#65a6d7",
            curveness: 0.3,
          },
          name: "12",
          coords: [
            [740, 250],
            [820, 250],
            [820, 100],
            [850, 100],
          ],
        },
      ],
    };
    this.option = {
      backgroundColor: "#0b1c58",
      tooltip: {
        //弹窗
        enterable: true, //鼠标是否可进入提示框浮层中
        backgroundColor: "rgba(11,28,88,0.8)", //背景颜色（此时为默认色）
        borderRadius: 8, //边框圆角
        borderColor: "#00fcfd",
        borderWidth: 2,
        formatter: function (params) {
          if (params.componentSubType == "graph") {
            if (params.data.nodeName != "" && params.data.clfx != undefined) {
              var showText =
                "<div style='color:#fff' >名称：" +
                params.data.nodeName +
                "<br/>";
              if (params.color == "#D9001B") {
                showText += "电压等级：550kV <br/>";
              } else if (params.color == "#FFFF00") {
                showText += "电压等级：220 kV <br/>";
              } else if (
                params.color == "rgba(66, 255, 0, 0.996078431372549)"
              ) {
                showText += "电压等级：110kV <br/>";
              } else if (params.color == "#3b80c3") {
                showText += "电压等级：220kV <br/>";
              }
              showText += "潮流方向：" + params.data.clfx + " <br/>";
              if (params.data.tpfl != undefined && params.data.tpfl != "") {
                showText += "流入量：  " + params.data.tpfl + " kj/kg</div>";
              }

              return showText;
            }
          }
        }, //修改鼠标悬停显示的内容
      },
      xAxis: {
        min: 0,
        max: 840,
        show: false,
        type: "value",
      },
      yAxis: {
        min: 0,
        max: 520,
        show: false,
        type: "value",
      },
      series: [
        {
          type: "graph",
          coordinateSystem: "cartesian2d",
          label: {
            show: true,
            position: "bottom",
            color: "#ffffff",
            formatter: function (item) {
              return item.data.nodeName;
            },
          },
          data: nodes,
        },
        {
          type: "lines",
          polyline: true,
          coordinateSystem: "cartesian2d",
          lineStyle: {
            type: "solid",
            width: 2,
            color: "#65a6d7",
            curveness: 0.3,
          },
          effect: {
            show: true,
            trailLength: 0.1,
            symbol: "arrow",
            color: "orange",
            symbolSize: 8,
          },
          data: charts.linesData,
        },
      ],
    };
    // this.btn_type_index_1 = 0;
    // this.option.series[0].data = this.dataInfo.filter(
    //   (item) => item.category == 0
    // );
    // this.option.series[0].links = this.dataLink_1;
    // this.option.series[1].data = this.dataLink_2.filter(
    //   (item) => item.category == 0
    // );
    // this.option.grid[0].top = "100px";
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
