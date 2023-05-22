<template>
  <div class="gantt-warpper" :style="{ height: height }">
    <div ref="gantt" class="gantt-container"></div>
  </div>
</template>

<script>
import gantt from "dhtmlx-gantt"; // 引入模块
import "dhtmlx-gantt/codebase/dhtmlxgantt.css"; //皮肤
import "./index.less";
export default {
  name: "gantt",
  components: {},
  props: {
    // 容器高度
    height: {
      type: String,
      default: "400px",
    },
    // 左侧表格表头
    ganttColumns: {
      type: Array,
      default: () => [],
    },
    // 网格区域自定义线
    ganttMarkerData: {
      type: Array,
      default: () => [],
    },
    // 甘特图数据
    ganttTasks: {
      type: Object,
      default: () => {
        return {
          data: [],
          links: [],
        };
      },
    },
    // 设置表格行的默认高度
    row_height: {
      type: Number,
      default: 30,
    },
    // 顶部表头的高度
    scale_height: {
      type: Number,
      default: 120,
    },
    // 设置时间轴区域中列的最小宽度
    min_column_width: {
      type: Number,
      default: 40,
    },
    // 是否开启悬浮框功能
    ganttTooltip: {
      type: Boolean,
      default: false,
    },
    // 表格单元格和任务单元格的悬浮框
    ganttTooltipTextFun: {
      type: Function,
      default: (start, end, task) => {},
    },
    // 任务链路的悬浮框
    ganttTooltipLinkFun: {
      type: Function,
      default: (event, node) => {},
    },
    // 父项图标
    grid_folderFun: {
      type: Function,
      default: (item) => {},
    },
    // 子项图标
    grid_fileFun: {
      type: Function,
      default: (item) => {},
    },
    // 打开或关闭的图标
    grid_openFun: {
      type: Function,
      default: (item) => {},
    },
    // 设置单元格样式
    task_classFun: {
      type: Function,
      default: (event, node) => {},
    },
    // 是否开启全屏功能
    ganttFullscreen: {
      type: Boolean,
      default: false,
    },
    // 全屏按钮的icon，即class
    ganttFullscreenIcon: {
      type: String,
      default: "",
    },
    // 给网格区域单元格添加右侧的注释
    rightside_textFun: {
      type: Function,
      default: (start, end, task) => {},
    },
    // 网格区域单元格任务上显示的字
    task_textFun: {
      type: Function,
      default: (start, end, task) => {
        return task.text;
      },
    },
    // 右键事件，左侧表格和右侧网格都适用
    onContextMenuFun: {
      type: Function,
      default: (start, end, task) => {},
    },
    // 重置类型
    ganttTypes: {
      type: Array,
      required: true,
      default: () => {
        return [];
      },
    },
    // 出现弹窗之前
    onBeforeLightboxFun: {
      type: Function,
      default: (id) => {},
    },
    // 排序
    ganttSort: {
      type: String,
      default: "",
    },
    // 新增任务
    taskCreateFun: {
      type: Function,
      default: (data) => {},
    },
    // 更新任务
    taskUpdateFun: {
      type: Function,
      default: (data, id) => {},
    },
    // 删除任务
    taskDeleteFun: {
      type: Function,
      default: (id) => {},
    },
    // 新增链接
    linkCreateFun: {
      type: Function,
      default: (data) => {},
    },
    // 更新链接
    linkUpdateFun: {
      type: Function,
      default: (data, id) => {},
    },
    // 删除链接
    linkDeleteFun: {
      type: Function,
      default: (id) => {},
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    init() {
      var this_ = this;
      gantt.plugins({
        // 全屏插件
        fullscreen: this_.ganttFullscreen,
        // 悬浮框
        tooltip: this_.ganttTooltip,
        // 线段
        marker: this_.ganttMarkerData.length ? true : false,
      });
      // 中文
      gantt.i18n.setLocale("cn");
      // 关闭所有错误提示信息，gantt有自己的异常消息，如果不关闭可能页面会弹出异常消息
      gantt.config.show_errors = false;
      // 自适应甘特图的尺寸大小, 使得在不出现滚动条的情况下, 显示全部任务
      gantt.config.autosize = false;
      // 自动延长时间刻度
      gantt.config.fit_tasks = true;
      // 允许拖放
      gantt.config.drag_project = true;
      // 允许拖动任务
      gantt.config.drag_move = true;
      // 允许拖动任务进度
      gantt.config.drag_progress = false;
      // 启用在任务栏中显示进度
      gantt.config.show_progress = false;
      // 是否可以添加Link
      gantt.config.drag_links = true;
      // 只读模式：打开后不可以操作甘特图
      gantt.config.readonly = false;
      //是否显示左侧树表格
      gantt.config.show_grid = true;
      // 周末样式突出
      gantt.config.work_time = true;
      // 设置表格行的默认高度
      gantt.config.row_height = this_.row_height;
      // 顶部表头的高度
      gantt.config.scale_height = this_.scale_height;
      // 设置时间轴区域中列的最小宽度
      gantt.config.min_column_width = this_.min_column_width;
      // 在调整列大小时保留初始网格的宽度
      gantt.config.keep_grid_width = false;
      // 通过拖动右侧网格的边框来调整网格的大小
      gantt.config.grid_resize = true;
      // 设置时间线区域是否最初滚动以显示最早的任务
      gantt.config.initial_scroll = false;
      // 将新增的弹窗的节点及其标签设置在同一行
      gantt.config.wide_form = true;
      // 设置任务的持续时间为工作时间而不是日历时间
      gantt.config.work_time = false;
      // 显示指定日期范围之外的任务
      gantt.config.show_tasks_outside_timescale = true;
      // 设置用于解析数据集中的数据并将日期发送回服务器的日期格式
      gantt.config.date_format = "%Y-%m-%d";
      // 是否开启全屏功能
      if (this_.ganttFullscreen) {
        // 全屏
        gantt.attachEvent("onTemplatesReady", function () {
          var toggle = document.createElement("i");
          toggle.className = this_.ganttFullscreenIcon;
          toggle.style.fontSize = "35px";
          gantt.toggleIcon = toggle;
          gantt.$container.appendChild(toggle);
          toggle.onclick = function () {
            gantt.ext.fullscreen.toggle();
          };
        });
      }
      // 绘制线
      if (this_.ganttMarkerData.length) {
        for (let i = 0; i < this_.ganttMarkerData.length; i++) {
          const element = this_.ganttMarkerData[i];
          gantt.addMarker({
            start_date: new Date(element.start_date),
            text: element.text,
            css: element.cssClass,
          });
        }
      }
      // 定义时间格式
      gantt.config.scales = [
        { unit: "month", step: 1, format: "%Y年%F" },
        {
          unit: "week",
          step: 1,
          format: (date) => {
            var dateToStr = gantt.date.date_to_str("%F%d日");
            var endDate = gantt.date.add(
              gantt.date.add(date, 1, "week"),
              -1,
              "day"
            );
            return dateToStr(date) + " 至 " + dateToStr(endDate);
          },
        },
        {
          unit: "day",
          step: 1,
          format: "周%D",
          css: (date) => {
            if (date.getDay() === 0 || date.getDay() === 6) {
              return "weekend";
            }
            return "";
          },
        },
      ];
      // 悬浮框
      if (this_.ganttTooltip) {
        // 悬浮框的时间格式
        gantt.templates.tooltip_date_format =
          gantt.date.date_to_str("%Y年%m月%d日");
        // 悬浮框
        gantt.attachEvent("onGanttReady", () => {
          var tooltips = gantt.ext.tooltips;
          // 表格单元格和任务单元格的悬浮框
          gantt.templates.tooltip_text = this_.ganttTooltipTextFun;
          // 任务链路的悬浮框
          tooltips.tooltipFor({
            selector: ".gantt_task_link",
            html: this_.ganttTooltipLinkFun,
          });
        });
      }
      // 父项图标
      gantt.templates.grid_folder = this_.grid_folderFun;
      // 子项图标
      gantt.templates.grid_file = this_.grid_fileFun;
      // 打开或关闭的图标
      gantt.templates.grid_open = this_.grid_openFun;
      // 设置网格区域单元格样式
      gantt.templates.task_class = this_.task_classFun;
      // 给网格区域单元格添加右侧的注释
      gantt.templates.rightside_text = this_.rightside_textFun;
      // 网格区域单元格任务上显示的字
      gantt.templates.task_text = this_.task_textFun;
      // 右键事件，左侧表格和右侧网格都适用
      gantt.attachEvent("onContextMenu", this_.onContextMenuFun);
      // 设置左侧表格表头
      gantt.config.columns = this_.ganttColumns;
      // 重置类型
      let configTypes = {};
      for (let i = 0; i < this_.ganttTypes.length; i++) {
        const element1 = this_.ganttTypes[i];
        configTypes[element1.typeName] = element1.typeName;
        // 设置增加的类型的label
        gantt.locale.labels["type_" + element1.typeName] = element1.optionName;
        // 设置的弹窗的表单项的label
        for (let k = 0; k < element1.popupForm.length; k++) {
          const element2 = element1.popupForm[k];
          gantt.locale.labels["section_" + element2.name] = element2.labelName;
        }
        if (i == 0) {
          gantt.config.lightbox.sections = element1.popupForm;
        } else {
          gantt.config.lightbox[element1.typeName + "_sections"] =
            element1.popupForm;
        }
      }
      // 出现弹窗之前
      gantt.attachEvent("onBeforeLightbox", this_.onBeforeLightboxFun);
      // 重置类型
      if (this_.ganttTypes.length) {
        gantt.config.types = configTypes;
      }
      // // 增加的弹窗的按钮，前两个是自带的
      // gantt.config.buttons_left = [
      //   "dhx_save_btn",
      //   "dhx_cancel_btn",
      //   "complete_button",
      // ];
      // // 增加的弹窗的按钮的label
      // gantt.locale.labels["complete_button"] = "完成";
      // // 自定义弹窗按钮的事件
      // gantt.attachEvent("onLightboxButton", function (button_id, node, e) {
      //   if (button_id == "complete_button") {
      //     var start_ = this_
      //       .$dayjs(gantt.getLightboxValues().start_date)
      //       .format("YYYY-MM-DD 00:00:00");
      //     var end_ = this_
      //       .$dayjs(gantt.getLightboxValues().end_date)
      //       .format("YYYY-MM-DD 23:59:59");
      //     // 重置一下数据
      //     let addData_ = {
      //       start_date: start_,
      //       end_date: end_,
      //       text: gantt.getLightboxValues().text,
      //       type: gantt.getLightboxValues().type,
      //       duration: gantt.getLightboxValues().duration,
      //       parent: gantt.getLightboxValues().parent,
      //       progress: gantt.getLightboxValues().progress,
      //       priority: gantt.getLightboxValues().priority,
      //       assigned: gantt.getLightboxValues().assigned.join(","),
      //     };
      //     if (gantt.getLightboxValues().$new) {
      //       // 新增
      //       // 先写接口，在回调后添加数据，这里的id模拟一下
      //       addData_.id = this_.$dayjs().valueOf();
      //       gantt.addTask(addData_);
      //     } else {
      //       // 编辑
      //       // 先写接口，在回调后编辑数据
      //       addData_.id = gantt.getLightboxValues().id;
      //       gantt.addTask(addData_);
      //     }
      //     this_.$nextTick(() => {
      //       // 删除自带的新增
      //       gantt._cancel_lightbox();
      //       // 刷新数据
      //       gantt.refreshData();
      //       gantt.refreshLink();
      //       gantt.refreshTask();
      //       gantt.hideLightbox();
      //     });
      //   }
      // });

      // 初始化
      gantt.init(this_.$refs.gantt);
      // 数据解析
      gantt.parse(this_.ganttTasks);
      // 排序
      gantt.sort(this_.ganttSort);

      // 关于甘特图数据变化
      gantt.createDataProcessor({
        task: {
          // 新增任务
          create: this_.taskCreateFun,
          // 更新任务
          update: this_.taskUpdateFun,
          // 删除任务
          delete: this_.taskDeleteFun,
        },
        link: {
          // 新增链接
          create: this_.linkCreateFun,
          // 更新链接
          update: this_.linkUpdateFun,
          // 删除链接
          delete: this_.linkDeleteFun,
        },
      });
    },
    refreshGantt() {
      // 刷新数据
      gantt.refreshData();
      gantt.refreshLink();
      gantt.refreshTask();
      gantt.hideLightbox();
    },
  },
  created() {},
  mounted() {},
  watch: {},
};
</script>
<style lang="less" scoped></style>
