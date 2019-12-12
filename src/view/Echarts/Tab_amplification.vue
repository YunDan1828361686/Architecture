<template>
  <div>
    <Row>
      <Col span="24">
        <Card v-for="(item_1,index_1) in echarts_data" :key="index_1">
          <Tabs @on-click="tab_change(index_1,$event)" :value="Tabs">
            <TabPane
              :label="item_2"
              :name="item_2"
              v-for="(item_2,index_2) in item_1.RRUname"
              :key="index_2"
            ></TabPane>
          </Tabs>
          <div class="echarts_index"></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
// 哪个组件用  在哪引入echarts
var echarts = require("echarts");
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
export default {
  name: "Tab_amplification",
  data() {
    return {
      Tabs: "false",
      echarts_data: []
    };
  },
  methods: {
    tab_change(index, name) {
      console.log(this.echarts_data[index].title, name);
      this.$store.commit("Double_amplification_click", {
        BBU: this.echarts_data[index].title,
        RRU: name
      });
      this.$nextTick(function() {
        this.$router.push({
          name: "Double_amplification"
        });
      });
    },
    up_init() {
      var myCharts = document.getElementsByClassName("echarts_index");
      for (let i = 0; i < myCharts.length; i++) {
        const element = myCharts[i];
        const element_option = this.echarts_data[i];
        let echarts_option = {
          title: {
            left: "center",
            text: element_option.title
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999"
              }
            },
            formatter: function(params) {
              var relVal = params[0].name;
              for (var i = 0, l = params.length; i < l; i++) {
                if (i === 0) {
                  relVal +=
                    "<br/>" +
                    params[i].marker +
                    params[i].seriesName +
                    "：" +
                    params[i].value +
                    " " +
                    " kwh";
                } else {
                  relVal +=
                    "<br/>" +
                    params[i].marker +
                    params[i].seriesName +
                    "：" +
                    params[i].value +
                    " " +
                    " 个";
                }
              }
              return relVal;
            }
          },
          legend: {
            left: "10%",
            formatter: "{a|{name}}",
            textStyle: {
              rich: {
                a: {
                  fontSize: 12
                }
              }
            }
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ["line", "bar"] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          xAxis: {
            data: element_option.xAxis
          },
          yAxis: {
            type: "value",
            name: "电量",
            splitLine: {
              show: true
            },
            axisLabel: {
              formatter: "{value} kwh"
            }
          },
          dataZoom: [
            {
              startValue: "2"
            },
            {
              type: "inside"
            },
            {
              show: true,
              yAxisIndex: 0,
              filterMode: "empty",
              width: 30,
              height: "50%",
              showDataShadow: false
            }
          ],
          grid: {
            left: "5%",
            right: "5%",
            top: "15%",
            bottom: "10%",
            containLabel: true
          },
          series: element_option.yAxis
        };
        this.$nextTick(() => {
          echarts.init(element).setOption(echarts_option, true);
        });
      }
    }
  },
  created() {
    this.$axios("/node2/echarts", "post").then(res => {
      this.echarts_data = res.data.data;
    });
  },
  watch: {
    echarts_data: function() {
      this.$nextTick(() => {
        this.up_init();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.echarts_index {
  margin-top: 20px;
  height: 400px;
}
</style>