<template>
  <div>
    <Row style="padding-bottom: 20px" class="ExportedEle">
      <Col span="24">
        <div style="float: left">
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
        <div style="float: right">
          <Drawer_add
            ref="Drawer_add"
            @formCustom_1_click="formCustom_1_click"
          ></Drawer_add>
          <Tooltip content="新增" placement="bottom-start">
            <Button type="info" icon="md-add" @click="add_1"></Button>
          </Tooltip>
          <Tooltip
            content="删除"
            placement="bottom-start"
            style="margin-left: 20px"
          >
            <Button type="error" icon="md-trash" @click="removes_1"></Button>
          </Tooltip>
          <Button
            type="info"
            icon="md-add"
            @click="handleWatermarkAdd"
            style="margin-left: 20px"
          >
            添加水印
          </Button>
          <Button
            type="info"
            icon="md-add"
            @click="handleWatermarkDelete"
            style="margin-left: 20px"
          >
            去除水印
          </Button>
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
      height="522"
      highlight-row
      class="ExportedEle"
      :data="tableData_1"
      :loading="loading_1"
      :columns="tableColumns_1"
      @on-sort-change="changeSort_1"
      @on-select="handleSelectRow_1"
      @on-select-all="handleSelectAll_1"
      @on-select-cancel="handleCancelRow_1"
      @on-select-all-cancel="handleSelectAll_1"
    ></Table>
    <Row class="ExportedEle">
      <Col span="24">
        <div
          style="
            margin: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div>
            <span style="margin-right: 10px">共{{ table_total_1 }}条记录</span>
            <span>已勾选{{ selectedSum_1 }}条记录</span>
          </div>
          <div>
            <Page
              show-sizer
              show-elevator
              :total="table_total_1"
              :current="table_current_1"
              @on-change="table_Pagechange_1"
              :page-size="this.table_form_1.page_size"
              @on-page-size-change="table_PageSizechange_1"
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
import More_excel from "./More_excel.vue";
import { _debounce, _throttle } from "@/libs/Perform_optimization.js";
import {
  WatermarkAdd,
  WatermarkDelete,
  Save_PDF_Horizontal,
  Save_PDF_Vertical,
} from "@/libs/ToPdf.js";

export default {
  name: "Table_excel",
  components: { Drawer_add, More_excel },
  data() {
    return {
      // 表格的loading
      loading_1: true,
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
          align: "center",
        },
        {
          title: "序号",
          key: "num_id",
          align: "center",
          width: 120,
          // 排序
          sortable: "true",
          renderHeader(h, params) {
            return h(
              "tooltip",
              {
                props: {
                  transfer: true,
                  placement: "top",
                  "max-width": "240", //设最大宽度，添加此属性后文字太长会换行，否则浮窗里只会显示一些文字，多余的文字在浮窗外且看不见
                },
              },
              [
                h("span", [
                  //原title在这里写
                  h("span", "标题"),
                  //图标，无需图标注释即可
                  h("Icon", {
                    // 这里注释是显示 问号图标形式触发
                    props: {
                      type: "md-help-circle",
                      color: "#c8c8c8",
                      size: "16",
                    },
                    style: {
                      "margin-left": "5px",
                    },
                  }),
                ]),
                h(
                  "div",
                  {
                    slot: "content",
                  },
                  [
                    //换行多个提示就增加数组元素
                    h("p", "1、XXXXXXXXXX"),
                    h("p", "2、YYYYYYYYYY"),
                    h("p", "3、ZZZZZZZZZZ"),
                  ]
                ),
              ]
            );
          },
        },
        {
          title: "姓名",
          key: "name",
          align: "center",
          minWidth: 200,
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person",
                },
              }),
              h("strong", params.row.name),
            ]);
          },
        },
        {
          title: "年龄",
          key: "age",
          align: "center",
          minWidth: 200,
          ellipsis: true,
          tooltip: true,
        },
        {
          title: "地址",
          key: "address",
          align: "center",
          // ellipsis: true,
          // tooltip: true,
          minWidth: 200,
          render: (h, params) => {
            return h("div", [
              h(
                "Tooltip",
                {
                  props: {
                    // 设置属性--但是placement不定义，则为自动
                    // placement: "bottom",
                  },
                },
                [
                  h(
                    "span",
                    {
                      style: {
                        display: "inline-block",
                        width: params.column._width * 0.9 + "px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      },
                    },
                    params.row.address
                  ), // 表格显示文字
                  h(
                    "div",
                    {
                      slot: "content",
                      style: {
                        whiteSpace: "normal",
                      },
                    },
                    params.row.address // 气泡内的文字
                  ),
                ]
              ),
            ]);
          },
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
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      this.show_1(params.index);
                    },
                  },
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                  },
                  on: {
                    click: () => {
                      this.remove_1(params);
                    },
                  },
                },
                "删除"
              ),
            ]);
          },
        },
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
        page_current: "1",
        // 分页的粒度
        page_size: 10,
        // 检索
        age: "",
        search_select_1: "全部",
      },
      // 导出数据时用的
      export_excel_1: {
        name: "用户数据",
        // 默认可下载的表头
        Columns: [
          {
            title: "序号",
            key: "num_id",
          },
          {
            title: "姓名",
            key: "name",
          },
          {
            title: "年龄",
            key: "age",
          },
          {
            title: "地址",
            key: "address",
          },
        ],
        Columns_if: [],
        Data: [],
      },
    };
  },
  methods: {
    // 添加水印的按钮点击
    handleWatermarkAdd() {
      Spin.show();
      // 添加水印
      WatermarkAdd(
        "测试水印第一行",
        "测试水印第二行",
        this.$refs.table1.$el
      ).then(() => {
        // ExportedEle为要转pdf的元素class，测试为导出的文件名
        // Horizontal是横，Vertical是竖
        // Save_PDF_Horizontal("ExportedEle", "测试");
        Save_PDF_Vertical("ExportedEle", "测试", 60).finally(() => {
          // 清除水印
          this.handleWatermarkDelete();
          Spin.hide();
        });
      });
    },
    // 去除水印的按钮点击
    handleWatermarkDelete() {
      // 去除水印
      WatermarkDelete();
    },
    //  选中某一行
    handleSelectRow_1(selection, row) {
      this.selectedData_1.add(row.num_id);
      this.selectedData_2.add(row);
      this.selectedSum_1 = this.selectedData_1.size;
    },
    //  取消某一行
    handleCancelRow_1(selection, row) {
      this.selectedData_1.delete(row.num_id);
      this.selectedData_2.forEach((item) => {
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
        data.forEach((item) => {
          if (this.selectedData_1.has(item.num_id)) {
            this.selectedData_1.delete(item.num_id);
            this.selectedData_2.forEach((item_) => {
              if (item_.num_id == item.num_id) {
                this.selectedData_2.delete(item_);
              }
            });
          }
        });
      } else {
        selection.forEach((item) => {
          this.selectedData_1.add(item.num_id);
          this.selectedData_2.forEach((item_) => {
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
    TableData_1: _debounce(function () {
      // console.log(this.table_form_1);
      // Spin.show();
      this.loading_1 = true;
      this.$axios(
        "/node1/table",
        "post",
        this.$Qs.stringify(this.table_form_1)
      ).then((res) => {
        // 总页数
        this.table_total_1 = res.data.total;
        // 当前页码
        this.table_current_1 = res.data.current;
        // 当前粒度
        this.table_form_1.page_size = res.data.size;
        // 序号
        res.data.TableData.map((item, index) => {
          item.index_ =
            this.table_form_1.page_size * (this.table_current_1 - 1) +
            index +
            1;
        });
        // 表数据
        this.tableData_1 = res.data.TableData;
      });
    }, 200),
    // 切换页码
    table_Pagechange_1(index) {
      this.table_form_1.page_current = index;
      this.loading_1 = true;
      // 翻页 滚动到顶部
      setTimeout(() => {
        //这里要延迟下滚动
        document.getElementsByClassName("ivu-table-body")[0].scroll(0, 0);
      }, 400);
      this.TableData_1();
    },
    // 切换每页显示数量
    table_PageSizechange_1(index) {
      this.table_form_1.page_size = index;
      this.loading_1 = true;
      this.TableData_1();
    },
    // 排序
    changeSort_1(index) {
      this.loading_1 = true;
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
        content: `序号：${this.tableData_1[index].num_id}<br>姓名：${this.tableData_1[index].name}<br>年龄：${this.tableData_1[index].age}<br>地址：${this.tableData_1[index].address}`,
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
          background: true,
          duration: 3,
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
        this.loading_1 = true;
        this.TableData_1();
      }
      // 导出全部数据
      else if (index == 2) {
        // 请求接口获取该表格全部数据
        this.export_excel_1.Data = [
          {
            num_id: "6",
            name: "John Brown",
            age: 18,
            address: "写死的测试用的",
          },
          {
            num_id: "8",
            name: "Jim Green",
            age: 24,
            address: "写死的测试用的",
          },
          {
            num_id: "10",
            name: "Joe Black",
            age: 30,
            address: "写死的测试用的",
          },
        ];
        this.$refs.More_excel.modal_1 = true;
      }
      // 导出所选数据
      else if (index == 3) {
        // 如果没有勾选数据
        if (this.selectedSum_1 == 0) {
          this.$Message.warning({
            content: "请先勾选要导出的数据！",
            duration: 3,
          });
          return;
        }
        this.export_excel_1.Data = [...this.selectedData_2];
        this.$refs.More_excel.modal_2 = true;
      }
    },
    // 检索搜索框
    search_input_change_1(index) {
      // 需先重置参数如分页倒序检索条件
      this.selectedData_1 = new Set();
      this.selectedData_2 = new Set();
      this.selectedSum_1 = this.selectedData_1.size;
      this.table_form_1.age = index;
      this.loading_1 = true;
      this.TableData_1();
    },
    // 检索选择框
    search_select_change_1(index) {
      console.log(index);
      // 需先重置参数如分页倒序检索条件
      this.selectedData_1 = new Set();
      this.selectedData_2 = new Set();
      this.selectedSum_1 = this.selectedData_1.size;
      this.loading_1 = true;
      this.TableData_1();
    },
  },
  watch: {
    tableData_1: function () {
      // 给表格数据赋值后并渲染完成表格后执行
      this.$nextTick(function () {
        // Spin.hide();
        this.setChecked();
        this.loading_1 = false;
      });
    },
  },
  mounted() {
    // 获取表格数据
    this.loading_1 = true;
    this.TableData_1();
  },
};
</script>
