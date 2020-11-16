<template>
  <div>
    <Row style="margin-bottom: 20px">
      <Col span="24"> </Col>
    </Row>
  </div>
</template>
<script>
// 遮罩
import { Spin } from "view-design";
export default {
  name: "Equipment_power_measurement_5",
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
        "strawberry",
      ],
      arr_2: ["A", "", "B", null, undefined, "C", "  "],
      arr_3: [
        { name: "小明", age: "18" },
        { name: "小红", age: "18" },
        { name: "小刚", age: "16" },
        { name: "小美", age: "17" },
        { name: "明美", age: "19" },
      ],
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
    let arr_2_filte = this.arr_2.filter((item) => item && item.trim());
    // 筛选出数组对象age=="18"的对象
    // 筛选出数组对象name包含"明"的对象
    let arr_3_filte = this.arr_3.filter((item) => {
      // return item.age == "18";
      return item.name.indexOf("明") !== -1;
    });
    console.log(arr_1_filte);
  },
};
</script>
<style lang="less" scoped>
</style>