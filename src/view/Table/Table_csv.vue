<template>
  <div>
    <Row style="margin-bottom:20px">
      <Col span="24">
        <div style="float: left;">
          <Input @on-search="search_input_change_1" search enter-button>
            <div slot="prepend" style="width: 160px;display: flex;justify-content: space-around;">
              <Select
                v-model="table_form_1.search_select_1"
                style="width: 80px;border-right:2px solid #e8eaec;"
                @on-change="search_select_change_1"
              >
                <Option value="全部">全部</Option>
                <Option value="未成年">未成年</Option>
                <Option value="已成年">已成年</Option>
              </Select>
              <Select
                v-model="table_form_1.search_select_2"
                style="width:80px;"
                @on-change="search_select_change_2"
              >
                <Option value="全部">全部</Option>
                <Option value="男">男</Option>
                <Option value="女">女</Option>
              </Select>
            </div>
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
          <More_csv
            ref="More_csv"
            @Dropdown_change_1="Dropdown_change_1"
            :table_total_1="table_total_1"
            :export_csv_1="export_csv_1"
            :element="this.$refs.table1"
          ></More_csv>
        </div>
      </Col>
    </Row>
    <!-- 表格 -->
    <Table
      border
      stripe
      ref="table1"
      height="518"
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
  </div>
</template>
<script>
// 遮罩
import { Spin } from "view-design";
import Drawer_add from "./Drawer_add.vue";
import More_csv from "./More_csv.vue";
export default {
  name: "Table_csv",
  components: { Drawer_add, More_csv },
  data() {
    return {
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
          width: 90,
          // 排序
          sortable: "custom"
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
      // 表格勾选的数据ID
      selectedData_1: new Set(),
      // 表格勾选的数据
      selectedData_2: new Set(),
      // 选中的总数量
      selectedSum_1: 0,
      // 获取表格数据时用到的参数
      table_form_1: {
        // 获取第几页的数据
        page_current: "",
        // 分页的粒度
        page_size: "",
        // 检索
        age: "",
        search_select_1: "全部",
        search_select_2: "全部"
      },
      // 导出数据时用的
      export_csv_1: {
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
      this.selectedData_2.add(row);
      this.selectedSum_1 = this.selectedData_1.size;
    },
    //  取消某一行
    handleCancelRow_1(selection, row) {
      this.selectedData_1.delete(row.num_id);
      this.selectedData_2.forEach(item => {
        if (item.num_id == row.num_id) {
          this.selectedData_2.delete(item);
        }
      });
      this.selectedSum_1 = this.selectedData_1.size;
    },
    handleSelectAll_1(selection) {
      // 取消全选 数组为空
      if (selection.length === 0) {
        let data = this.$refs.table1.data;
        data.forEach(item => {
          if (this.selectedData_1.has(item.num_id)) {
            this.selectedData_1.delete(item.num_id);
            this.selectedData_2.forEach(item_ => {
              if (item_.num_id == item.num_id) {
                this.selectedData_2.delete(item_);
              }
            });
          }
        });
      } else {
        selection.forEach(item => {
          this.selectedData_1.add(item.num_id);
          this.selectedData_2.forEach(item_ => {
            if (item_.num_id == item.num_id) {
              this.selectedData_2.delete(item_);
            }
          });
          this.selectedData_2.add(item);
        });
      }
      // 同步
      this.selectedSum_1 = this.selectedData_1.size;
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
    TableData_1() {
      // console.log(this.table_form_1);
      // Spin.show();
      this.loading_1 = true;
      this.$axios(
        "/node1/table",
        "post",
        this.$Qs.stringify(this.table_form_1)
      ).then(res => {
        console.log(res);
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
      this.TableData_1();
    },
    // 切换每页显示数量
    table_PageSizechange_1(index) {
      this.table_form_1.page_size = index;
      this.TableData_1();
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
      if (this.selectedSum_1 == 0) {
        this.$Message.warning({
          content: "请先勾选要删除的数据！",
          duration: 3
        });
        return;
      }
      console.log(this.selectedData_2);
    },
    // 更多操作 与子组件相互联系
    Dropdown_change_1(index) {
      // 刷新
      if (index == 1) {
        // 需先重置参数如分页倒序检索条件
        this.selectedData_1 = new Set();
        this.selectedData_2 = new Set();
        this.selectedSum_1 = this.selectedData_1.size;
        this.TableData_1();
      }
      // 导出全部数据
      else if (index == 2) {
        // 请求接口获取该表格全部数据
        this.export_csv_1.Data = [
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
        // 然后弹出模态框
        this.$refs.More_csv.modal_1 = true;
      }
      // 导出所选数据
      else if (index == 3) {
        // 如果没有勾选数据
        if (this.selectedSum_1 == 0) {
          this.$Message.warning({
            content: "请先勾选要导出的数据！",
            duration: 3
          });
          return;
        }
        this.export_csv_1.Data = [...this.selectedData_2];
        this.$refs.More_csv.modal_2 = true;
      }
    },
    // 检索搜索框
    search_input_change_1(index) {
      // 需先重置参数如分页倒序检索条件
      this.selectedData_1 = new Set();
      this.selectedData_2 = new Set();
      this.selectedSum_1 = this.selectedData_1.size;
      this.table_form_1.age = index;
      this.TableData_1();
    },
    // 检索选择框
    search_select_change_1(index) {
      console.log(index);
      // 需先重置参数如分页倒序检索条件
      this.selectedData_1 = new Set();
      this.selectedData_2 = new Set();
      this.selectedSum_1 = this.selectedData_1.size;
      this.TableData_1();
    },
    // 检索选择框
    search_select_change_2(index) {
      console.log(index);
      // 需先重置参数如分页倒序检索条件
      this.selectedData_1 = new Set();
      this.selectedData_2 = new Set();
      this.selectedSum_1 = this.selectedData_1.size;
      this.TableData_1();
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
    this.TableData_1();
  }
};
</script>
