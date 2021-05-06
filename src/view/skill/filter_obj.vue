<template>
  <div>
    <Row style="margin-bottom: 20px">
      <Col span="24">看源码就是数组判断取元素---判断删元素---检索元素的值包含某个字等等</Col>
      <Col span="24">看源码就是对象判断取元素---判断删元素---检索元素的值包含某个字等等</Col>
    </Row>
  </div>
</template>
<script>
// 遮罩
import { Spin } from "view-design";
export default {
  name: "filter_obj",
  data() {
    return {
      arr_1: [
        "apple",
        "strawberry",
        "banana",
        "pear",
        "apple",
        "orange",
        "orange",
        "strawberry"
      ],
      arr_2: ["A", "", "B", null, undefined, "C", "  "],
      arr_3: [
        { name: "小明", age: "18" },
        { name: "小红", age: "18" },
        { name: "小刚", age: "16" },
        { name: "小美", age: "17" },
        { name: "明美", age: "19" }
      ]
    };
  },
  methods: {},
  watch: {},
  computed: {},
  mounted() {
    // 去重，仅保留第一次出现的元素
    let arr_1_filte = this.arr_1.filter((element, index, self) => {
      return self.indexOf(element) === index;
    });
    // 去重，仅保留第一次出现的元素V2   .sort()给数组排序
    let arr_1_filte_v2 = [...new Set(this.arr_1)];
    // 删掉空字符串
    let arr_2_filte = this.arr_2.filter(item => item && item.trim());
    // 筛选出数组对象age=="18"的对象
    // 筛选出数组对象name包含"明"的对象
    let arr_3_filte = this.arr_3.filter(item => {
      // return item.age == "18";
      return item.name.indexOf("明") !== -1;
    });
    // 等于return item.name.indexOf("明") == -1;
    for (let i = 0; i < this.arr_1.length; i++) {
      let element = this.arr_1[i];
      if (element == "apple") {
        this.arr_1.splice(i, 1);
        i--;
      }
    }
    let test =
      '<p align="center"><img align="absmiddle"  width="750"  height="584"  src="/DSJPIC/MHSGBG_20210315/MHSGBG20003_25_1.jpg"/></p >';
    test = test.replace(
      /src=\"/g,
      `src="http://10.3.2.20/api/user/avatar?uid=200/xxxxxxxxxxxxxxxx`
    );
    console.log(test);
    // // 设备厂家
    // // 设备型号
    // // 额定功率（W）
    // let vender_if = [];
    // let equipType_if = [];
    // let ratedPower_if = [];
    // let if_length;
    // for (let i = 0; i < this.selectionData.length; i++) {
    //   const element = this.selectionData[i];
    //   vender_if.push(element.vender);
    //   equipType_if.push(element.equipType);
    //   ratedPower_if.push(element.ratedPower);
    // }
    // vender_if = [...new Set(vender_if)];
    // equipType_if = [...new Set(equipType_if)];
    // ratedPower_if = [...new Set(ratedPower_if)];
    // if_length = vender_if.length + equipType_if.length + ratedPower_if.length;
    // if (if_length > 3) {
    //   this.$Message.warning({
    //     content: "所勾选的数据不满足同型号展示的条件，请重新勾选",
    //     duration: 3,
    //   });
    // } else {
    //   this.$Message.warning({
    //     content: "设备厂家，设备型号，额定功率（W）完全相同",
    //     duration: 3,
    //   });
    // }
  }
};
</script>
<style lang="less" scoped>
</style>