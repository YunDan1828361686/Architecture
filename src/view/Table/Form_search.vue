<template>
  <div>
    <Row style="margin-bottom:20px">
      <Col span="24">
        <!-- ref="form_search_1"绑定Form -->
        <Form
          inline
          :label-width="80"
          ref="form_search_1"
          :rules="form_rules_1"
          :model="form_search_1"
          label-position="right"
        >
          <!-- prop的值要与v-model的值相同便于重置 -->
          <FormItem label="用户名" prop="input1">
            <Input v-model="form_search_1.input1" placeholder="请输入用户名" style="width:200px"></Input>
          </FormItem>
          <FormItem label="年龄" prop="input2">
            <Input v-model="form_search_1.input2" placeholder="请输入年龄" style="width:200px" number></Input>
          </FormItem>
          <!-- 仅设置mode="out-in即可但样式与fade有一点点不同 -->
          <transition name="fade" mode="out-in">
            <span v-if="search_span_1">
              <FormItem label="邮箱" prop="input3">
                <Input v-model="form_search_1.input3" placeholder="请输入邮箱" style="width:200px"></Input>
              </FormItem>
              <FormItem label="手机号" prop="input4">
                <Input v-model="form_search_1.input4" placeholder="请输入手机号" style="width:200px"></Input>
              </FormItem>
              <FormItem label="性别" prop="input5">
                <Input v-model="form_search_1.input5" placeholder="请输入性别" style="width:200px"></Input>
              </FormItem>
              <FormItem label="用户类型" prop="input6">
                <Input v-model="form_search_1.input6" placeholder="请输入用户类型" style="width:200px"></Input>
              </FormItem>
              <FormItem label="用户状态" prop="input7">
                <Input v-model="form_search_1.input7" placeholder="请输入用户状态" style="width:200px"></Input>
              </FormItem>
              <FormItem label="创建时间" prop="input8">
                <Input v-model="form_search_1.input8" placeholder="请输入创建时间" style="width:200px"></Input>
              </FormItem>
            </span>
          </transition>
          <FormItem>
            <Button
              type="primary"
              shape="circle"
              icon="ios-search"
              style="margin-left:-40px"
              @click="handleSubmit('form_search_1')"
            >搜索</Button>
            <Button @click="handleReset('form_search_1')" style="margin-left: 8px">重置</Button>
            <Button type="text" shape="circle" @click="myclick">
              {{search_val_1.span}}
              <Icon :type="search_val_1.icon"></Icon>
            </Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
    <!-- JS 控制不能输入特殊字符
    <input
      type="text"
      class="domain"
      onkeyup="this.value=this.value.replace(/[^u4e00-u9fa5w]/g,'')"
      ；this.value="this.value.replace(/[^u4e00-u9fa5w]/g,'')"
      &#x26;#x26;#x26;#x26;#x26;#x26;#x26;#x26;#x26;#x26;#x26;#x26;#x3C;br
    />
    JS 控制文本框只能输入数字
    <input
      onkeyup="value=value.replace(/[^0-9]/g,'')"
      onpaste="value=value.replace(/[^0-9]/g,'')"
      oncontextmenu="value=value.replace(/[^0-9]/g,'')"
    />
    JS 控制文本框只能输入数字、小数点
    <input
      onkeyup="value=value.replace(/[^\0-9\.]/g,'')"
      onpaste="value=value.replace(/[^\0-9\.]/g,'')"
      oncontextmenu="value=value.replace(/[^\0-9\.]/g,'')"
    />
    JS 控制文本框只能输入英文
    <input
      onkeyup="value=value.replace(/[^\a-\z\A-\Z]/g,'')"
      onpaste="value=value.replace(/[^\a-\z\A-\Z]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z]/g,'')"
    />
    JS 控制文本框只能输入英文、数字
    <input
      onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9]/g,'')"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9]/g,'')"
    />
    JS 控制文本框只能输入中文
    <input
      onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')"
      onpaste="value=value.replace(/[^\u4E00-\u9FA5]/g,'')"
      oncontextmenu="value=value.replace(/[^\u4E00-\u9FA5]/g,'')"
    />
    JS 控制文本框只能输入中文、英文、数字
    <input
      onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
    />
    JS 控制文本框只能输入中文、英文、数字、空格
    <input
      onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\ ]/g,'')"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\ ]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\ ]/g,'')"
    />
    JS 控制文本框只能输入中文、英文、数字、小数点
    <input
      onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.]/g,'')"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.]/g,'')"
    />-->
  </div>
</template>

<script>
export default {
  name: 'Form_search',
  data () {
    return {
      search_span_1: false,
      search_val_1: {
        span: '展开',
        icon: 'ios-arrow-down'
      },
      form_search_1: {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: ''
      },
      form_rules_1: {
        input1: [
          {
            required: true,
            message: '请输入用户名!',
            trigger: 'blur'
          }
        ],
        input2: [
          {
            required: true,
            // blur失去焦点时触发  change数据发生改变时触发
            trigger: 'blur',
            validator: (rule, value, callback) => {
              if (!value) {
                return callback(new Error('请输入年龄！'))
              }
              if (!Number.isInteger(value)) {
                console.log(typeof value)
                callback(new Error('必须输入整数！'))
              } else {
                if (value < 18) {
                  callback(new Error('必须大于18岁！'))
                } else {
                  callback()
                }
              }
            }
          }
        ],
        input3: [
          {
            required: true,
            message: '请输入邮箱！',
            trigger: 'blur'
          },
          { type: 'email', message: '邮箱格式错误！', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {},
  methods: {
    myclick () {
      this.search_span_1 = !this.search_span_1
      if (this.search_span_1) {
        // 修改data内对象的标准方法
        this.$set(this.search_val_1, 'span', '收起')
        this.$set(this.search_val_1, 'icon', 'ios-arrow-up')
      } else {
        this.$set(this.search_val_1, 'span', '展开')
        this.$set(this.search_val_1, 'icon', 'ios-arrow-down')
      }
    },
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('表单验证通过!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    handleReset (name) {
      // 重置$refs为form_search_1的表单数据
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  display: none;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
