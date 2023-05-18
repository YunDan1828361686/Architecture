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
      default: (start, end, task) => {},
    },
    // 右键事件，左侧表格和右侧网格都适用
    onContextMenuFun: {
      type: Function,
      default: (start, end, task) => {},
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
      gantt.config.drag_progress = true;
      // 启用在任务栏中显示进度
      gantt.config.show_progress = true;
      // 是否可以添加Link
      gantt.config.drag_links = false;
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
      // 设置用于解析数据集中的数据并将日期发送回服务器的日期格式
      gantt.config.date_format = "%Y-%m-%d %H:%I:%S";
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
      // 初始化
      gantt.init(this_.$refs.gantt);
      // 数据解析
      gantt.parse(this_.ganttTasks);
      // 排序
      gantt.sort("start_date");
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
