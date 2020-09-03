<template>
  <div>
    <Button type="primary" @click="Download_template" style="margin-right:20px;">
      <Icon type="ios-download-outline"></Icon>文件下载
    </Button>
  </div>
</template>

<script>
import { Spin } from 'view-design'
export default {
  name: 'Download',
  data () {
    return {}
  },
  methods: {
    Download_template () {
      Spin.show()
      this.$axios({
        url: 'url',
        method: 'post',
        data: this.$Qs.stringify({
          dataType: '综资'
        }),
        responseType: 'blob'
      })
        .then(result => {
          // http://tools.jb51.net/table/http_content_type/
          let blob = new Blob([result.data], { type: 'application/zip' })
          let downloadElement = document.createElement('a')
          let href = window.URL.createObjectURL(blob) // 创建下载的链接
          downloadElement.href = href
          downloadElement.download = '综资导入模板.zip' // 下载后文件名
          document.body.appendChild(downloadElement)
          downloadElement.click() // 点击下载
          document.body.removeChild(downloadElement) // 下载完成移除元素
          window.URL.revokeObjectURL(href) // 释放blob对象
          setTimeout(() => {
            Spin.hide()
          }, 500)
        })
        .catch(err => {
          setTimeout(() => {
            Spin.hide()
            this.$Message.error('文件下载失败！')
          }, 500)
        })
    }
  },
  mounted () {}
}
</script>

<style lang="less" scoped>
</style>
