<template>
  <div>
    <Row style="margin-bottom:20px">
      <Col span="24" style="text-align: right;">
        <Tooltip content="新增" placement="bottom-start">
          <Button type="info" icon="md-add"></Button>
        </Tooltip>
        <Tooltip content="删除" placement="bottom-start" style="margin-left: 20px">
          <Button type="error" icon="md-trash"></Button>
        </Tooltip>
        <Dropdown style="margin-left: 20px" placement="bottom-start" @on-click="Dropdown_change_1">
          <Button type="primary">
            更多操作
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list" style="text-align:left;">
            <DropdownItem name="1">刷新</DropdownItem>
            <DropdownItem name="2" divided>导出全部数据（csv）</DropdownItem>
            <DropdownItem name="3" divided>导出所选数据（csv）</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
    <!-- 表格 -->
    <Table
      border
      stripe
      ref="table1"
      :loading="loading_1"
      highlight-row
      :data="tableData_1"
      :columns="tableColumns_1"
      @on-sort-change="changeSort"
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
    <!-- 导出全部数据 -->
    <Modal v-model="modal_1" width="540">
      <p slot="header">
        <span>确认导出全部 {{table_total_1}} 条数据</span>
      </p>
      <Form :model="export_csv_1" label-position="right" :label-width="100">
        <FormItem label="导出文件名">
          <Input v-model="export_csv_1.name"></Input>
        </FormItem>
        <FormItem label="自定义导出列">
          <Checkbox-group v-model="export_csv_1.Columns">
            <Checkbox
              v-for="(item,index) in this.export_csv_1.Columns_if"
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
      <Form :model="export_csv_1" label-position="right" :label-width="100">
        <FormItem label="导出文件名">
          <Input v-model="export_csv_1.name"></Input>
        </FormItem>
        <FormItem label="自定义导出列">
          <Checkbox-group v-model="export_csv_1.Columns">
            <Checkbox
              v-for="(item,index) in this.export_csv_1.Columns_if"
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
import { getTable1Data } from "@/api/data";
export default {
  name: "Table-csv",
  data() {
    return {
      // 导出全部表格数据
      modal_1: false,
      // 导出所选表格数据
      modal_2: false,
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
          minwidth: 100,
          // 排序
          sortable: "custom"
        },
        {
          title: "姓名",
          key: "name",
          align: "center",
          width: 200,
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
        page_size: ""
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
    // 表格勾选的数据函数
    Selected_change_1(selection, row) {
      this.selectedData_1 = selection;
    },
    // 表数据
    mockTableData_1() {
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
    changeSort(column, key, order) {
      console.log(column, key, order);
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
    // 更多操作
    Dropdown_change_1(index) {
      // 刷新
      if (index == 1) {
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
      let columns = [];
      if (this.export_csv_1.Columns.length == 0) {
        this.$Message.warning({
          content: "请先勾选自定义导出列！",
          duration: 3
        });
        return;
      }
      // 获取选取的表头按原本的顺序排
      this.export_csv_1.Columns.sort(function(a, b) {
        return a - b;
      });
      // columns为排序后取出来对应索引的表头
      for (let i = 0; i < this.export_csv_1.Columns.length; i++) {
        const element = this.export_csv_1.Columns[i];
        columns.push(this.export_csv_1.Columns_if[element]);
      }
      // 赋值全部的表格数据
      this.export_csv_1.Data = this.tableData_1;
      // 导出csv文件
      this.$refs.table1.exportCsv({
        filename: this.export_csv_1.name,
        columns: columns,
        data: this.export_csv_1.Data
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
      let columns = [];
      if (this.export_csv_1.Columns.length == 0) {
        this.$Message.warning({
          content: "请先勾选自定义导出列！",
          duration: 3
        });
        return;
      }
      // 获取选取的表头按原本的顺序排
      this.export_csv_1.Columns.sort(function(a, b) {
        return a - b;
      });
      // columns为排序后取出来对应索引的表头
      for (let i = 0; i < this.export_csv_1.Columns.length; i++) {
        const element = this.export_csv_1.Columns[i];
        columns.push(this.export_csv_1.Columns_if[element]);
      }
      // 赋值全部的表格数据
      this.export_csv_1.Data = this.selectedData_1;
      // 导出csv文件
      this.$refs.table1.exportCsv({
        filename: this.export_csv_1.name,
        columns: columns,
        data: this.export_csv_1.Data
      });
      this.modal_2 = false;
    },
    // 导出所选数据 取消
    cancel_2() {
      this.modal_2 = false;
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

