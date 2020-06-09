<template>
  <div style="margin-left: 20px;display:inline-block">
    <Select
      multiple
      filterable
      :max-tag-count="1"
      placeholder="请选择省份"
      @on-change="select_change"
      v-model="table_form_1.model2"
      @on-open-change="select_open_change"
      style="width:250px;margin-right:20px;"
    >
      <Option value="-1" key=" " :disabled="disabled_1">全选</Option>
      <Option
        v-for="(item, index) in Select_Cascader"
        :value="item.region_code"
        :key="item.region_code"
        :disabled="disabled_2"
      >{{item.region_name}}</Option>
    </Select>
    <cascaderMulti
      seach
      multiple
      v-if="cascaderMulti_if_"
      :data="cascaderMulti_data"
      :disabled="cascaderMulti_if"
      @on-change="cascaderMulti_onchange"
      placeholder="请选择厂家/型号/额定功率"
      style="display: inline-block;width:350px;margin-right:20px;"
    ></cascaderMulti>
  </div>
</template>

<script>
import { Spin } from 'view-design'
import city_data from '@/libs/city'
export default {
  name: 'More_seach',
  data () {
    return {
      // 判断省份多选是否发生变化
      before_data: [],
      // 判断省份多选框是否展开
      select_open_if: '',
      disabled_1: false,
      disabled_2: true,
      // 判断级联是否可以使用
      cascaderMulti_if: true,
      cascaderMulti_if_: true,
      table_form_1: {
        // 获取第几页的数据
        current_num: 1,
        // 分页的粒度
        limit: 10,
        // 检索
        model1: 'RRU',
        model2: ['-1'],
        model3: '',
        model4: '待选择数据',
        model5: '小时粒度',
        startTime: '',
        stopTime: ''
      },
      // 三级联动多选
      cascaderMulti_data: [
        {
          value: '第一级',
          label: '第一级',
          children: [
            {
              value: '第一级子1',
              label: '第一级子1',
              children: [
                {
                  value: '第一级子1-1',
                  label: '第一级子1-1'
                }
              ]
            },
            {
              value: '第一级子2',
              label: '第一级子2'
            },
            {
              value: '第一级子3',
              label: '第一级子3'
            }
          ]
        },
        {
          value: '第二级',
          label: '第二级',
          children: [
            {
              value: '第二级子1',
              label: '第二级子1',
              children: [
                {
                  value: '第二级子1-2',
                  label: '第二级子1-2'
                }
              ]
            },
            {
              value: '第二级子2',
              label: '第二级子2',
              children: [
                {
                  value: '第二级子2-1',
                  label: '第二级子2-1'
                },
                {
                  value: '第二级子2-2',
                  label: '第二级子2-2'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 省份多选筛选
    select_open_change (index) {
      this.select_open_if = index
      if (!index) {
        let alter_data = JSON.parse(JSON.stringify(this.table_form_1.model2))
        if (alter_data != '') {
          if (!this.before_data) {
          } else {
            if (
              this.before_data.sort().toString() != alter_data.sort().toString()
            ) {
            } else return
          }
          this.get_cascaderMulti_data()
          return
        }
        this.table_form_1.model3 = ''
        this.cascaderMulti_if_ = false
        this.$nextTick(() => {
          this.cascaderMulti_if_ = true
        })
        this.cascaderMulti_if = true
      } else {
        this.before_data = JSON.parse(JSON.stringify(this.table_form_1.model2))
      }
    },
    // 省份删除
    select_change () {
      var this_ = this
      if (!this.select_open_if) {
        if (!this.table_form_1.model2.length) {
          this.table_form_1.model3 = ''
          this.cascaderMulti_if_ = false
          this.$nextTick(() => {
            this.cascaderMulti_if_ = true
          })
          this.cascaderMulti_if = true
          this.disabled_1 = false
          this.disabled_2 = false
          return
        }
        this.get_cascaderMulti_data()
      } else {
        if (!this.table_form_1.model2.length) {
          this.disabled_1 = false
          this.disabled_2 = false
        } else {
          for (let i = 0; i < this.table_form_1.model2.length; i++) {
            const element = this.table_form_1.model2[i]
            if (element == '-1') {
              this_.disabled_1 = false
              this_.disabled_2 = true
            } else {
              this_.disabled_1 = true
              this_.disabled_2 = false
            }
          }
        }
      }
    },
    // 三级联动多选
    cascaderMulti_onchange (data) {
      this.table_form_1.model3 = data
      console.log(data)
    },
    // 加载三级联动数据
    get_cascaderMulti_data () {
      Spin.show()
      this.$Message.loading({
        content: '正在加载三级联动的数据，请稍后~',
        duration: 3
      })
      Spin.hide()
      this.cascaderMulti_if = false
    }
  },
  computed: {
    Select_Cascader () {
      let data = JSON.parse(JSON.stringify(city_data.city))
      return data
        .filter(item => {
          return item.parent_code === 0
        })
        .map(item => {
          return Object.assign(item, {
            value: item.region_code.toString(),
            label: item.region_name
          })
        })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
