<style scoped>
.expand-row {
  margin-bottom: 20px;
}
.expand-value {
  text-align: center;
}
</style>
<template>
  <div>
    <Modal v-model="modal1" width="540" @on-ok="modal1_ok" @on-cancel="modal1_cancel" title="修改">
      <Form :model="form_1" label-position="right" :label-width="120">
        <FormItem label="工作">
          <Input v-model="form_1.input1"></Input>
        </FormItem>
        <FormItem label="生日">
          <Input v-model="form_1.input2"></Input>
        </FormItem>
      </Form>
    </Modal>
    <Row
      class="expand-row"
      v-for="(item,index) in row.children"
      :key="index"
      type="flex"
      justify="space-around"
    >
      <Col span="6" class="expand-value">
        <span>{{ item.id }}</span>
      </Col>
      <Col span="6" class="expand-value">
        <span>{{ item.job}}</span>
      </Col>
      <Col span="6" class="expand-value">
        <span>{{ item.birthday}}</span>
      </Col>
      <Col span="6" class="expand-value">
        <span style="color: #2b85e4;cursor: pointer" @click="update(index)">修改</span>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  },
  data() {
    return {
      modal1: false,
      form_1: {
        input_id: "",
        input1: "",
        input2: ""
      }
    };
  },
  methods: {
    update(index) {
      this.form_1.input_id = this.row.children[index].id;
      this.form_1.input1 = this.row.children[index].job;
      this.form_1.input2 = this.row.children[index].birthday;
      this.modal1 = true;
    },
    modal1_ok() {
      console.log("子页面确定了");
      this.$emit("updatemsg");
    },
    modal1_cancel() {
      console.log("取消");
    }
  }
};
</script>