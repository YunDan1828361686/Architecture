<template>
  <div>
    <h1>正在刷新-----</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Refresh',
  data () {
    return {
      from: null
    }
  },
  methods: {
    ...mapMutations(['closeTag'])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.name == 'home') {
        vm.$nextTick(function () {
          this.closeTag({
            name: 'Refresh'
          })
          this.$router.push({ name: from.name })
        })
        // 自动刷新的页面（无页面缓存）
      } else {
        vm.$nextTick(function () {
          this.closeTag({
            name: from.name,
            query: from.query,
            params: from.params
          })
          setTimeout(() => {
            this.closeTag({
              name: 'Refresh'
            })
            this.$router.push({
              name: from.name,
              query: from.query,
              params: from.params
            })
          }, 20)
        })
      }
    })
  }
}
</script>

<style lang="less" scoped>
</style>
