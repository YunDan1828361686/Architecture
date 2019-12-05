<template>
  <div>
    <h1>demo</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.$axios(
      '/node/post',
      'post',
      this.$Qs.stringify({ aaa: 111, bbb: 222 })
    ).then(res => {
      console.log(res, '!!!!!!')
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
