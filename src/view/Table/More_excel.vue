<template>
  <div style="margin-left: 20px;display:inline-block">
    <Dropdown placement="bottom-start" @on-click="Dropdown_change_1">
      <Button type="primary">
        更多操作
        <Icon type="ios-arrow-down"></Icon>
      </Button>
      <DropdownMenu slot="list" style="text-align:left;">
        <DropdownItem name="1">刷新</DropdownItem>
        <DropdownItem name="2" divided>导出全部数据（excel）</DropdownItem>
        <DropdownItem name="3" divided>导出所选数据（excel）</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <!-- 导出全部数据 -->
    <Modal v-model="modal_1" width="540">
      <p slot="header">
        <span>确认导出全部 {{table_total_1}} 条数据</span>
      </p>
      <Form :model="export_excel_1" label-position="right" :label-width="100">
        <FormItem label="导出文件名">
          <Input v-model="export_excel_1.name"></Input>
        </FormItem>
        <FormItem label="自定义导出列">
          <Checkbox-group v-model="export_excel_1.Columns">
            <Checkbox
              v-for="(item,index) in this.export_excel_1.Columns_if"
              :key="index"
              :label="index"
            >{{item.title}}</Checkbox>
          </Checkbox-group>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="cancel_1">取消</Button>
        <Button type="primary" size="large" @click="ok_1">确定</Button>
      </div>
    </Modal>
    <Modal v-model="modal_2" width="540">
      <p slot="header">
        <span>确认导出全部 {{export_excel_1.Data.length}} 条数据</span>
      </p>
      <Form :model="export_excel_1" label-position="right" :label-width="100">
        <FormItem label="导出文件名">
          <Input v-model="export_excel_1.name"></Input>
        </FormItem>
        <FormItem label="自定义导出列">
          <Checkbox-group v-model="export_excel_1.Columns">
            <Checkbox
              v-for="(item,index) in this.export_excel_1.Columns_if"
              :key="index"
              :label="index"
            >{{item.title}}</Checkbox>
          </Checkbox-group>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="cancel_2">取消</Button>
        <Button type="primary" size="large" @click="ok_2">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import excel from "@/libs/excel";
export default {
  props: ["table_total_1", "export_excel_1"],
  data() {
    return {
      // 导出全部表格数据
      modal_1: false,
      // 导出所选表格数据
      modal_2: false
    };
  },
  methods: {
    Dropdown_change_1(index) {
      // 通知父组件
      this.$emit("Dropdown_change_1", index);
    },
    // 导出全部数据 确定
    ok_1() {
      // 表头
      let title = [];
      let key = [];
      if (this.export_excel_1.Columns.length == 0) {
        this.$Message.warning({
          content: "请先勾选自定义导出列！",
          duration: 3
        });
        return;
      }
      // 获取选取的表头按原本的顺序排
      this.export_excel_1.Columns.sort(function(a, b) {
        return a - b;
      });
      // 根据表数据里的num_id排序
      this.export_excel_1.Data.sort(function(a, b) {
        return a.num_id - b.num_id;
      });
      // title,key为排序后取出来对应索引的表头
      for (let i = 0; i < this.export_excel_1.Columns.length; i++) {
        const element = this.export_excel_1.Columns[i];
        title.push(this.export_excel_1.Columns_if[element].title);
        key.push(this.export_excel_1.Columns_if[element].key);
      }
      // 导出excel文件
      excel.export_array_to_excel({
        title,
        key,
        data: this.export_excel_1.Data,
        autoWidth: true,
        filename: this.export_excel_1.name
      });
      this.modal_1 = false;
    },
    // 导出全部数据 取消
    cancel_1() {
      this.modal_1 = false;
    },
    // 导出所选数据 确定
    ok_2() {
      // 表头
      let title = [];
      let key = [];
      if (this.export_excel_1.Columns.length == 0) {
        this.$Message.warning({
          content: "请先勾选自定义导出列！",
          duration: 3
        });
        return;
      }
      // 获取选取的表头按原本的顺序排
      this.export_excel_1.Columns.sort(function(a, b) {
        return a - b;
      });
      // 根据表数据里的num_id排序
      this.export_excel_1.Data.sort(function(a, b) {
        return a.num_id - b.num_id;
      });
      // title,key为排序后取出来对应索引的表头
      for (let i = 0; i < this.export_excel_1.Columns.length; i++) {
        const element = this.export_excel_1.Columns[i];
        title.push(this.export_excel_1.Columns_if[element].title);
        key.push(this.export_excel_1.Columns_if[element].key);
      }
      // 导出excel文件
      excel.export_array_to_excel({
        title,
        key,
        data: this.export_excel_1.Data,
        autoWidth: true,
        filename: this.export_excel_1.name
      });
      this.modal_2 = false;
    },
    // 导出所选数据 取消
    cancel_2() {
      this.modal_2 = false;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
