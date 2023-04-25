<template>
  <div></div>
</template>

<script>
export default {
  name: "Time",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log("-----获取年", this.$dayjs().year()); // ==>> 2023
    console.log("-----获取月", this.$dayjs().month()); // 0到11的数字 ==>> 3
    console.log("-----获取星期", this.$dayjs().day()); // 0(星期日)到6(星期六)的数字 ==>> 3
    console.log("-----获取天", this.$dayjs().date()); // 1到31的数字 ==>> 20
    console.log("-----获取小时", this.$dayjs().hour()); // 0到23的数字 ==>> 16
    console.log("-----获取分钟", this.$dayjs().minute()); // 0到59的数字 ==>> 55
    console.log("-----获取秒", this.$dayjs().second()); // 0到59的数字 ==>> 55
    console.log("-----获取毫秒", this.$dayjs().millisecond()); // 0到999的数字 ==>> 333
    this.$dayjs().unix();
    this.$dayjs().valueOf();
    // this.$dayjs().format("YYYY-MM-DD")或"YYYY-MM-DD HH:mm:ss"
    // 输出结果为当前时间，格式为秒级时间戳，毫秒级时间戳，YYYY-MM-DD
    // 注意，毫秒级时间戳转YYYY-MM-DD时，需保证毫秒级时间戳是数字格式的

    // 获取当前时间的14天前的时间
    this.$dayjs(Date.now() - 14 * 24 * 60 * 60 * 1000).format(
      "YYYY-MM-DD 00:00:00"
    );
    this.$dayjs().subtract(14, "day").format("YYYY-MM-DD 00:00:00");

    // 获取当前时间的7天后的时间
    this.$dayjs(Date.now() + 7 * 24 * 60 * 60 * 1000).format(
      "YYYY-MM-DD 23:59:59"
    );
    this.$dayjs().add(7, "day").format("YYYY-MM-DD 23:59:59");

    // 获取当前时间的7天后的那周的第一天的时间（星期一）
    this.$dayjs().add(10, "day").startOf("week").format("YYYY-MM-DD 23:59:59");

    // 获取当前时间的20天前的那月的最后一天
    this.$dayjs()
      .subtract(20, "day")
      .endOf("month")
      .format("YYYY-MM-DD 00:00:00");

    // 获取两个时间相差多少天，拿第一个时间减去第二个时间，此实例为当前时间减去2023-06-05
    this.$dayjs().diff("2023-06-05", "day");

    // 获取当前月有多少天
    this.$dayjs().daysInMonth();

    // 判断两个日期是否相同
    // this.$dayjs('2022-04-20').isSame(dayjs('2022-04-20'))
    // 输出true

    // 判断一个日期是否在另外一个日期之前
    // this.$dayjs('2022-04-20').isBefore(dayjs('2022-04-21'))
    // 输出true

    // 判断一个日期是否在另外一个日期之后
    // this.$dayjs('2022-04-20').isAfter(dayjs('2022-04-21'))
    // 输出false

    // 判断一个日期是否在两个日期之间
    // 需要引入一个相关依赖插件，isBetween
    // // 引入插件
    // Vue.prototype.$dayjs = require('dayjs')
    // // 引入插件
    // import isBetween from 'dayjs/plugin/isBetween';
    // Vue.prototype.$dayjs.extend(isBetween);
    // this.$dayjs("2010-10-20").isBetween("2010-10-19", this.$dayjs("2010-10-25"))
    // 输出true

    // 当前时间为2023-04-17 14:12

    // 引入插件
    // Vue.prototype.$dayjs = require('dayjs')
    // // 引入插件
    // import relativeTime from 'dayjs/plugin/relativeTime';
    // // 引入中文
    // import 'dayjs/locale/zh-cn'
    // Vue.prototype.$dayjs.locale('zh-cn')
    // Vue.prototype.$dayjs.extend(relativeTime);

    // toNow()表示相对当前时刻
    // this.$dayjs("2023-04-16 18:22:32").toNow()
    // 输出为20 小时内

    // fromNow()表示距离当前时刻
    // this.$dayjs("2023-04-16 18:22:32").fromNow()
    // 输出为20 小时前
  },
  watch: {},
};
</script>
<style lang="less" scoped></style>
