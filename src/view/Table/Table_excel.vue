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
          <More_excel
            ref="More_excel"
            @Dropdown_change_1="Dropdown_change_1"
            :table_total_1="table_total_1"
            :export_excel_1="export_excel_1"
          ></More_excel>
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
      @on-selection-change="Selected_change_1"
    ></Table>
    <Row>
      <Col span="24">
        <div style="margin:20px;display: flex;justify-content: space-between;align-items: center;">
          <div>共{{table_total_1}}条记录</div>
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
  </div>
</template>
<script>
import { Spin } from "iview";
import { getTable1Data } from "@/api/data";
import Drawer_add from "./Drawer_add.vue";
import More_excel from "./More_excel.vue";

export default {
  name: "Table_excel",
  components: { Drawer_add, More_excel },
  data() {
    return {
      // 表格的loading
      loading_1: false,
      // 新增的抽屉
      Drawer_1: false,
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
      selectedData_1: [],
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
    // 表格勾选的数据函数
    Selected_change_1(selection, row) {
      this.selectedData_1 = selection;
    },
    // 表数据
    mockTableData_1() {
      // console.log(this.table_form_1);
      // Spin.show();
      this.loading_1 = true;
      // 重置选中的数据
      this.selectedData_1 = [];
      getTable1Data().then(res => {
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
        // 请求接口获取该表格全部数据
        this.export_excel_1.Data = [
          {
            num_id: "6",
            name: "John Brown",
            age: 18,
            address:
              "New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1"
          },
          {
            num_id: "8",
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park"
          },
          {
            num_id: "10",
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park"
          }
        ];
        this.$refs.More_excel.modal_1 = true;
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
        this.export_excel_1.Data = this.selectedData_1;
        this.$refs.More_excel.modal_2 = true;
      }
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

