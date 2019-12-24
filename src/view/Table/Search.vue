<template>
  <div>
    <Row style="margin-bottom:20px">
      <Col span="24">
        <!-- ref="form_search_1"绑定Form -->
        <Form
          ref="form_search_1"
          :model="form_search_1"
          label-position="right"
          :label-width="70"
          inline
        >
          <!-- prop的值要与v-model的值相同便于重置 -->
          <FormItem label="用户名称" prop="input1">
            <Input v-model="form_search_1.input1" placeholder="请输入用户名" style="width:200px"></Input>
          </FormItem>
          <FormItem label="部门" prop="input2">
            <Input v-model="form_search_1.input2" placeholder="请输入部门" style="width:200px"></Input>
          </FormItem>
          <!-- 仅设置mode="out-in即可但样式与fade有一点点不同 -->
          <transition name="fade" mode="out-in">
            <span v-if="search_span_1">
              <FormItem label="手机号" prop="input3">
                <Input v-model="form_search_1.input3" placeholder="请输入手机号" style="width:200px"></Input>
              </FormItem>
              <FormItem label="邮箱" prop="input4">
                <Input v-model="form_search_1.input4" placeholder="请输入邮箱" style="width:200px"></Input>
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
            <Button style="margin-left:-40px" type="primary" shape="circle" icon="ios-search">Search</Button>
            <Button @click="handleReset('form_search_1')" style="margin-left: 8px">重置</Button>
            <Button type="text" shape="circle" @click="myclick">
              {{search_val_1.span}}
              <Icon :type="search_val_1.icon"></Icon>
            </Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search_span_1: false,
      search_val_1: {
        span: "展开",
        icon: "ios-arrow-down"
      },
      form_search_1: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
        input7: "",
        input8: ""
      }
    };
  },
  mounted() {},
  methods: {
    myclick() {
      this.search_span_1 = !this.search_span_1;
      if (this.search_span_1) {
        // 修改data内对象的标准方法
        this.$set(this.search_val_1, "span", "收起");
        this.$set(this.search_val_1, "icon", "ios-arrow-up");
      } else {
        this.$set(this.search_val_1, "span", "展开");
        this.$set(this.search_val_1, "icon", "ios-arrow-down");
      }
    },
    handleReset(name) {
      // 重置$refs为form_search_1的表单数据
      this.$refs[name].resetFields();
    }
  }
};
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