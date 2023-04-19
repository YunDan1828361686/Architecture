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
    console.log(
      this.$dayjs(Date.now() - 14 * 24 * 60 * 60 * 1000).format('YYYY-MM-DD 00:00:00')
    );
  },
  watch: {},
};
</script>
<style lang="less" scoped></style>
