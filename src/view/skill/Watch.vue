<template>
  <div>
    <Row style="margin-bottom: 20px">
      <Col span="24">
        <Input v-model="Input_value_1" style="width: 300px" />
      </Col>
    </Row>
  </div>
</template>
<script>
// 遮罩
import { Spin } from "view-design";
export default {
  name: "Watch",
  data() {
    return {
      Input_value_1: ""
    };
  },
  methods: {},
  watch: {
    // 简单使用的写法
    // Input_value_1(newVal, oldVal) {
    //   console.log(newVal, oldVal);
    // },
    // Plus写法
    Input_value_1: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      // 加上之后第一次定义时就会执行
      immediate: true,
      // 深度监听即当要监听对象或数组的时候需要添加deep:true属性
      deep: true
    }
  },
  computed: {},
  mounted() {
    // 展开收起逻辑详解
    [
      {
        title: "标题",
        list: [{ title: "子级标题1" }, { title: "子级标题2" }]
      }
    ];
    // H5循环数组渲染出所有行
    // 在H5中子级添加ref，循环数组，给每行的ref添加原高度（即展开的高度），和一行的高度（即收起的高度）
    // 重新渲染添加高度后的数组
    // 重新刷新组件
    this.dataSearch = res.data.data.standList;
    this.dataSearch.map(item => {
      item.isOpen = false;
    });
    this.$nextTick(() => {
      const _dom = this.$refs.wrap;
      let _list = this.dataSearch;
      // 循环源数据，给每行数据添加原高度
      for (let i = 0; i < this.dataSearch.length; i++) {
        _list[i].openH = `${_dom[i].clientHeight}px`;
        _list[i].closeH = "25px";
      }
      // 重新渲染
      this.dataSearch = _list;
      // 重新刷新组件
      this.$forceUpdate();
    });
    // 渲染后查看没有展开的高度是多少，判断是否等于这个高度判断是否展示（展开收起按钮）
  }
};
</script>
<style lang="less" scoped></style>
