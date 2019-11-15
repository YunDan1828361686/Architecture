<template>
  <div>
    <Row style="margin-bottom:20px">
      <Col span="24">
        <div style="float: left;">
          <Input @on-search="search_input_change_1" search enter-button>
            <Select
              v-model="table_form_1.search_select_1"
              slot="prepend"
              style="width: 80px"
              @on-change="search_select_change_1"
            >
              <Option value="全部">全部</Option>
              <Option value="未成年">未成年</Option>
              <Option value="已成年">已成年</Option>
            </Select>
            <!-- <Button slot="append" icon="ios-search"></Button> -->
          </Input>
        </div>
        <div style="float: right;">
          <Drawer_add ref="Drawer_add" @formCustom_1_click="formCustom_1_click"></Drawer_add>
          <Tooltip content="新增" placement="bottom-start">
            <Button type="info" icon="md-add" @click="add_1"></Button>
          </Tooltip>
          <Tooltip content="删除" placement="bottom-start" style="margin-left: 20px">
            <Button type="error" icon="md-trash" @click="removes_1"></Button>
          </Tooltip>
          <Dropdown
            style="margin-left: 20px"
            placement="bottom-start"
            @on-click="Dropdown_change_1"
          >
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
        </div>
      </Col>
    </Row>
    <!-- 表格 -->
    <Table
      border
      stripe
      ref="table1"
      highlight-row
      :data="tableData_1"
      :loading="loading_1"
      :columns="tableColumns_1"
      @on-sort-change="changeSort_1"
      @on-select="handleSelectRow_1"
      @on-select-all="handleSelectAll_1"
      @on-select-cancel="handleCancelRow_1"
      @on-select-all-cancel="handleSelectAll_1"
    ></Table>
    <Row>
      <Col span="24">
        <div style="margin:20px;display: flex;justify-content: space-between;align-items: center;">
          <div>
            <span style="margin-right:10px">共{{table_total_1}}条记录</span>
            <span>已选择{{selectedSum_1}}条记录</span>
          </div>
          <div>
            <Page
              :total="table_total_1"
              :current="table_current_1"
              @on-change="table_Pagechange_1"
              @on-page-size-change="table_PageSizechange_1"
              show-sizer
              show-elevator
            ></Page>
          </div>
        </div>
      </Col>
    </Row>
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
        <span>确认导出全部 {{selectedData_1.length}} 条数据</span>
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
import { Spin } from "iview";
import { getTable2Data } from "@/api/data";
import Drawer_add from "./Drawer_add.vue";
import excel from "@/libs/excel";
export default {
  name: "Table_pagination",
  components: { Drawer_add },
  data() {
    return {
      // 导出全部表格数据
      modal_1: false,
      // 导出所选表格数据
      modal_2: false,
      // 表格的loading
      loading_1: false,
      // 总页数
      table_total_1: 1,
      // 当前页码
      table_current_1: 1,
      // 表格表头
      tableColumns_1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "序号",
          key: "num_id",
          align: "center",
          width: 80,
          // 排序
          sortable: "true"
        },
        {
          title: "姓名",
          key: "name",
          align: "center",
          minwidth: 200,
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "年龄",
          key: "age",
          align: "center",
          minwidth: 200
        },
        {
          title: "地址",
          key: "address",
          align: "center",
          ellipsis: true,
          tooltip: true,
          minwidth: 200
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show_1(params.index);
                    }
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove_1(params);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      // 表格数据
      tableData_1: [],
      // 表格勾选的数据函数
      selectedData_1: new Set(),
      //选中的总数量
      selectedSum_1: 0,
      // 获取表格数据时用到的参数
      table_form_1: {
        // 获取第几页的数据
        page_current: "",
        // 分页的粒度
        page_size: "",
        // 检索
        age: "",
        search_select_1: "全部"
      },
      // 导出数据时用的
      export_excel_1: {
        name: "用户数据",
        // 默认可下载的表头
        Columns_if: [
          {
            title: "序号",
            key: "num_id"
          },
          {
            title: "姓名",
            key: "name"
          },
          {
            title: "年龄",
            key: "age"
          },
          {
            title: "地址",
            key: "address"
          }
        ],
        Columns: [],
        Data: []
      }
    };
  },
  methods: {
    //  选中某一行
    handleSelectRow_1(selection, row) {
      this.selectedData_1.add(row.num_id);
      this.selectedSum_1 = this.selectedData_1.size;
      console.log(this.selectedSum_1, this.selectedData_1);
    },
    //  取消某一行
    handleCancelRow_1(selection, row) {
      this.selectedData_1.delete(row.num_id);
      this.selectedSum_1 = this.selectedData_1.size;
      console.log(this.selectedSum_1, this.selectedData_1);
    },
    handleSelectAll_1(selection) {
      // 取消全选 数组为空
      if (selection.length === 0) {
        let data = this.$refs.table1.data;
        data.forEach(item => {
          if (this.selectedData_1.has(item.num_id)) {
            this.selectedData_1.delete(item.num_id);
          }
        });
      } else {
        selection.forEach(item => {
          this.selectedData_1.add(item.num_id);
        });
      }
      //同步
      this.selectedSum_1 = this.selectedData_1.size;
      console.log(this.selectedSum_1, this.selectedData_1);
    },
    setChecked() {
      // 找到绑定的table的ref对应的dom，找到table的objData对象，objData保存的是当前页的数据
      let objData = this.$refs.table1.objData;
      console.log(objData);
      for (let index in objData) {
        if (this.selectedData_1.has(objData[index].num_id)) {
          objData[index]._isChecked = true;
        }
      }
    },
    // 表数据
    mockTableData_1() {
      // console.log(this.table_form_1);
      // Spin.show();
      this.loading_1 = true;
      getTable2Data(this.table_form_1).then(res => {
        // 总页数
        this.table_total_1 = res.data.total;
        // 当前页码
        this.table_current_1 = res.data.current;
        // 表数据
        this.tableData_1 = res.data.TableData;
      });
    },
    // 切换页码
    table_Pagechange_1(index) {
      this.table_form_1.page_current = index;
      this.mockTableData_1();
    },
    // 切换每页显示数量
    table_PageSizechange_1(index) {
      this.table_form_1.page_size = index;
      this.mockTableData_1();
    },
    // 排序
    changeSort_1(index) {
      if (index.order == "normal") {
        index.order = "";
      }
      console.log(index);
      // key为以哪个基准进行排序
      // order为normal  默认
      // order为asc     小到大 正序
      // order为desc    大到小 倒序
    },
    // 表格行查看
    show_1(index) {
      this.$Modal.info({
        title: "详情",
        content: `序号：${this.tableData_1[index].num_id}<br>姓名：${this.tableData_1[index].name}<br>年龄：${this.tableData_1[index].age}<br>地址：${this.tableData_1[index].address}`
      });
    },
    // 表格行删除
    remove_1(index) {
      console.log(index);
    },
    // 新增
    add_1() {
      this.$refs.Drawer_add.Drawer_1 = true;
    },
    // 子传父自定义事件
    formCustom_1_click(data) {
      console.log(data);
      this.$Message.success("Success!");
      // 请求后再关闭抽屉并清空input
      // this.$refs.Drawer_add.Drawer_1 = false;
      // this.$refs.Drawer_add.$refs[data.element_form].resetFields();
    },
    // 表格多选删除
    removes_1() {
      if (this.selectedData_1.length == 0) {
        this.$Message.warning({
          content: "请先勾选要删除的数据！",
          duration: 3
        });
        return;
      }
      console.log(this.selectedData_1);
    },

    // 更多操作
    Dropdown_change_1(index) {
      // 刷新
      if (index == 1) {
        // 需先重置参数如分页倒序检索条件
        this.mockTableData_1();
      }
      // 导出全部数据
      else if (index == 2) {
        this.modal_1 = true;
      }
      // 导出所选数据
      else if (index == 3) {
        // 如果没有勾选数据
        if (this.selectedData_1.length == 0) {
          this.$Message.warning({
            content: "请先勾选要导出的数据！",
            duration: 3
          });
          return;
        }
        this.modal_2 = true;
      }
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
      // title,key为排序后取出来对应索引的表头
      for (let i = 0; i < this.export_excel_1.Columns.length; i++) {
        const element = this.export_excel_1.Columns[i];
        title.push(this.export_excel_1.Columns_if[element].title);
        key.push(this.export_excel_1.Columns_if[element].key);
      }
      // 赋值全部的表格数据
      this.export_excel_1.Data = this.tableData_1;
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
      // title,key为排序后取出来对应索引的表头
      for (let i = 0; i < this.export_excel_1.Columns.length; i++) {
        const element = this.export_excel_1.Columns[i];
        title.push(this.export_excel_1.Columns_if[element].title);
        key.push(this.export_excel_1.Columns_if[element].key);
      }
      // 赋值勾选的表格数据
      this.export_excel_1.Data = this.selectedData_1;
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
    },
    // 检索搜索框
    search_input_change_1(index) {
      this.table_form_1.age = index;
      this.mockTableData_1();
    },
    // 检索选择框
    search_select_change_1(index) {
      this.mockTableData_1();
    }
  },
  watch: {
    tableData_1: function() {
      // 给表格数据赋值后并渲染完成表格后执行
      this.$nextTick(function() {
        // Spin.hide();
        this.setChecked();
        this.loading_1 = false;
      });
    }
  },
  mounted() {
    // 获取表格数据
    this.mockTableData_1();
  }
};
</script>

