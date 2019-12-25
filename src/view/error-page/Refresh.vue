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
      vm.from = from
      vm.$nextTick(function () {
        setTimeout(() => {
          this.closeTag({
            name: 'Refresh',
            query: {
              t: this.$route.query.t
            }
          })
          this.$router.replace(this.from)
        }, 500)
      })
    })
  }
}
</script>

<style lang="less" scoped>
</style>
