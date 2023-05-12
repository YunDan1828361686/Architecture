<template>
  <div class="gantt-warpper">
    <div ref="gantt" class="gantt-container"></div>
  </div>
</template>
<script>
import gantt from "dhtmlx-gantt"; // 引入模块
import "dhtmlx-gantt/codebase/dhtmlxgantt.css"; //皮肤

export default {
  name: "Gantt",
  components: {},
  props: {},
  data() {
    return {
      addMarkerData: [
        {
          start_date: "2022-03-03 00:00:00",
          text: "启动",
        },
      ],
      tasks: {
        data: [
          {
            id: 11,
            text: "Project #1",
            type: gantt.config.types.project,
            progress: 0.6,
            open: true,
          },
          {
            id: 12,
            text: "Task #1",
            start_date: "2022-03-14",
            duration: "5",
            parent: "11",
            progress: 1,
            open: true,
          },
          {
            id: 13,
            text: "Task #2",
            start_date: "2022-03-08",
            type: gantt.config.types.project,
            parent: "11",
            progress: 0.5,
            open: true,
          },
          {
            id: 14,
            text: "Task #3",
            start_date: "2022-03-09",
            duration: "6",
            parent: "11",
            progress: 0.8,
            open: true,
          },
          {
            id: 15,
            text: "Task #4",
            type: gantt.config.types.project,
            parent: "11",
            progress: 0.2,
            open: true,
          },
          {
            id: 16,
            text: "Final milestone",
            start_date: "2022-03-06",
            type: gantt.config.types.meeting,
            parent: "11",
            progress: 0,
            open: true,
          },
          {
            id: 17,
            text: "Task #2.1",
            start_date: "2022-03-05",
            duration: "2",
            parent: "13",
            progress: 1,
            open: true,
          },
          {
            id: 18,
            text: "Task #2.2",
            start_date: "2022-04-25",
            duration: "3",
            parent: "13",
            progress: 0.8,
            open: true,
          },
          {
            id: 19,
            text: "Task #2.3",
            start_date: "2022-04-04",
            duration: "4",
            parent: "13",
            progress: 0.2,
            open: true,
          },
          {
            id: 20,
            text: "Task #2.4",
            start_date: "2022-04-01",
            duration: "4",
            parent: "13",
            progress: 0,
            open: true,
          },
          {
            id: 21,
            text: "Task #4.1",
            start_date: "2022-03-07",
            duration: "4",
            parent: "15",
            progress: 0.5,
            open: true,
          },
          {
            id: 22,
            text: "Task #4.2",
            start_date: "2022-03-08",
            duration: "4",
            parent: "15",
            progress: 0.1,
            open: true,
          },
          {
            id: 23,
            text: "Mediate milestone",
            start_date: "2022-03-03",
            type: gantt.config.types.milestone,
            parent: "15",
            progress: 0,
            open: true,
          },
        ],
        links: [
          { id: "10", source: "11", target: "12", type: "1" },
          { id: "11", source: "11", target: "13", type: "1" },
          { id: "12", source: "11", target: "14", type: "1" },
          { id: "13", source: "11", target: "15", type: "1" },
          { id: "14", source: "23", target: "16", type: "0" },
          { id: "15", source: "13", target: "17", type: "1" },
          { id: "16", source: "17", target: "18", type: "0" },
          { id: "17", source: "18", target: "19", type: "0" },
          { id: "18", source: "19", target: "20", type: "0" },
          { id: "19", source: "15", target: "21", type: "2" },
          { id: "20", source: "15", target: "22", type: "2" },
          { id: "21", source: "15", target: "23", type: "1" },
        ],
      },
    };
  },
  computed: {},
  methods: {
    // 初始化
    init() {
      gantt.plugins({
        // 全屏插件
        fullscreen: true,
        // 导出插件
        export_api: true,
        // 悬浮框
        tooltip: true,
        // 线段
        marker: true,
      });
      // 中文
      gantt.i18n.setLocale("cn");
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
      // 禁止添加Link
      gantt.config.drag_links = false;
      // 只读模式：打开后不可以操作甘特图
      gantt.config.readonly = false;
      // 全屏
      gantt.attachEvent("onTemplatesReady", function () {
        var toggle = document.createElement("i");
        toggle.className = "ivu-icon ivu-icon-md-expand gantt-fullscreen";
        toggle.style.fontSize = "35px";
        gantt.toggleIcon = toggle;
        gantt.$container.appendChild(toggle);
        toggle.onclick = function () {
          gantt.ext.fullscreen.toggle();
        };
      });
      // 绘制线
      if (this.addMarkerData.length) {
        for (let i = 0; i < this.addMarkerData.length; i++) {
          const element = this.addMarkerData[i];
          gantt.addMarker({
            start_date: new Date(element.start_date),
            text: element.text,
            css: "today",
          });
        }
      }
      //是否显示左侧树表格
      gantt.config.show_grid = true;
      // 设置用于解析数据集中的数据并将日期发送回服务器的日期格式
      gantt.config.date_format = "%Y-%m-%d";
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
      // 定义时间格式2
      // gantt.config.scales = [
      //   { unit: "month", step: 1, format: "%Y年%F" },
      //   {
      //     unit: "day",
      //     step: 1,
      //     format: "<strong style='line-height:normal'>%d日</strong>",
      //   },
      //   {
      //     unit: "day",
      //     step: 1,
      //     format: "<span style='line-height:normal'>周%D</span>",
      //   },
      // ];
      gantt.config.types["meeting"] = "type_id";
      gantt.locale.labels["type_meeting"] = "Meeting";

      //sections for tasks with 'meeting' type

      gantt.locale.labels.section_title = "Subject";
      gantt.locale.labels.section_details = "Details";
      gantt.config.lightbox["meeting_sections"] = [
        {
          name: "title",
          height: 20,
          map_to: "text",
          type: "textarea",
          focus: true,
        },
        {
          name: "details",
          height: 70,
          map_to: "details",
          type: "textarea",
          focus: true,
        },
        { name: "type", type: "typeselect", map_to: "type" },
        { name: "time", type: "time", map_to: "auto" },
      ];

      //sections for regular lightbox
      gantt.config.lightbox.sections = [
        {
          name: "description",
          height: 70,
          map_to: "text",
          type: "textarea",
          focus: true,
        },
        { name: "type", type: "typeselect", map_to: "type" },
        { name: "time", type: "duration", map_to: "auto" },
      ];
      // 给网格区域的任务添加右侧的注释
      gantt.templates.rightside_text = function (start, end, task) {
        console.log(task.type);
        if (task.type == gantt.config.types.milestone) {
          return "加注释";
        }
        return "";
      };

      // 顶部表头的高度
      gantt.config.scale_height = 120;
      // 设置时间轴区域中列的最小宽度
      gantt.config.min_column_width = 50;

      // 在调整列大小时保留初始网格的宽度
      gantt.config.keep_grid_width = false;
      // 通过拖动右侧网格的边框来调整网格的大小
      gantt.config.grid_resize = true;
      // 设置时间线区域是否最初滚动以显示最早的任务
      gantt.config.initial_scroll = false;
      // 设置左侧表格
      gantt.config.columns = [
        {
          name: "text",
          label: "任务名称",
          tree: true,
          width: "200",
          template: function (task) {
            if (task.progress == 0.5)
              return "<div class='ganttColumnsHigh'>" + task.text + "</div>";
            return task.text;
          },
        },
        {
          name: "start_date",
          width: 80,
          align: "center",
        },
        { name: "add", width: 40 },
      ];
      // 悬浮框的时间格式
      gantt.templates.tooltip_date_format = gantt.date.date_to_str("%F %j, %Y");
      // 悬浮框
      gantt.attachEvent("onGanttReady", function () {
        var tooltips = gantt.ext.tooltips;
        // 表格单元格和任务单元格的悬浮框
        gantt.templates.tooltip_text = function (start, end, task) {
          return (
            "<b>任务名称：</b> " +
            task.text +
            "<br/>" +
            "<b>开始时间：</b> " +
            gantt.templates.tooltip_date_format(start) +
            "<br/>" +
            "<b>结束时间：</b> " +
            gantt.templates.tooltip_date_format(end)
          );
        };
        // 任务链路的悬浮框
        tooltips.tooltipFor({
          selector: ".gantt_task_link",
          html: function (event, node) {
            var linkId = node.getAttribute(gantt.config.link_attribute);
            if (linkId) {
              var link = gantt.getLink(linkId);

              var from = gantt.getTask(link.source);
              var to = gantt.getTask(link.target);

              var LinkType = "";
              if (link.type == 0) {
                LinkType = "结束至开始";
              } else if (link.type == 1) {
                LinkType = "开始至开始";
              } else if (link.type == 2) {
                LinkType = "结束至结束";
              } else if (link.type == 3) {
                LinkType = "开始至结束";
              } else {
                LinkType = "";
              }
              return [
                "<b>链路：</b> " + LinkType,
                "<b>开始：</b> " + from.text,
                "<b>结束：</b> " + to.text,
              ].join("<br>");
            }
          },
        });
      });
      // 设置单元格样式
      gantt.templates.task_class = function (start, end, task) {
        if (task.progress == 0.5) {
          return "ganttTaskHigh";
        }
      };
      // 任务上显示的字
      gantt.templates.task_text = function (syart, end, task) {
        return task.text + ` （进度${(task.progress * 100).toFixed(2)}%）`;
      };
      // 右键事件，左侧表格和右侧网格都适用
      gantt.attachEvent("onContextMenu", function (taskId, linkId, event) {
        var x =
            event.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft,
          y =
            event.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop;
        if (taskId) {
          console.log(x, y, taskId);
        } else if (linkId) {
          console.log(x, y, linkId);
        }
        if (taskId || linkId) {
          return false;
        }
        return true;
      });
      // 周末样式突出
      gantt.config.work_time = true;
      // 设置表格行的默认高度
      gantt.config.row_height = 30;

      // 初始化
      gantt.init(this.$refs.gantt);
      // 数据解析
      gantt.parse(this.tasks);
      // 排序
      // gantt.sort("start_date");
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  watch: {},
};
</script>
<style lang="less" scoped>
.gantt-warpper {
  height: 100%;
  .gantt-container {
    height: 100%;
    z-index: 1000 !important;
    // 全屏按钮
    /deep/ .gantt-fullscreen {
      position: absolute;
      bottom: 20px;
      right: 20px;
      padding: 2px;
      font-size: 32px;
      background: transparent;
      cursor: pointer;
      opacity: 0.5;
      text-align: center;
      -webkit-transition: background-color 0.5s, opacity 0.5s;
      transition: background-color 0.5s, opacity 0.5s;
    }

    /deep/ .gantt-fullscreen:hover {
      background: rgba(150, 150, 150, 0.5);
      opacity: 1;
    }
    // 设置网格上方的时间单元格
    /deep/ .gantt_task_scale .gantt_scale_cell {
      cursor: default;
    }
    // 设置网格上方的时间单元格
    /deep/ .weekend {
      background: #f0dfe5 !important;
    }

    // 网格任务样式
    /deep/ .ganttTaskHigh {
      border: 2px solid #d96c49;
      color: #d96c49;
      background: #d96c49;
    }
    // 网格任务里的进度条的样式
    /deep/ .ganttTaskHigh .gantt_task_progress {
      background: #db2536;
    }
    // 设置表格样式
    /deep/ .ganttColumnsHigh {
      color: #db2536;
    }
  }
}
</style>
<style lang="less">
// 全局生效的样式
// 悬浮框
.gantt_tooltip {
  font-size: 13px;
  line-height: 16px;
  z-index: 1500 !important;
}
// .gantt_cal_light[aria-hidden="false"] {
//   opacity: 1;
// }
// .gantt_cal_light[aria-hidden="true"] {
//   opacity: 0;
// }
.gantt_cal_light {
  transition: all 0.3s ease;
  height: auto !important;
  // 弹窗的header
  .gantt_cal_ltitle {
    font-size: 14px;
    padding: 15px 10px;
  }
  // 弹窗的body
  .gantt_cal_larea {
    .gantt_cal_lsection {
      padding: 10px;
      padding-bottom: 5px;
    }
    .gantt_section_time {
      height: 50px !important;
      padding: 10px;
      padding-bottom: 5px;
      .gantt_time_selects {
        height: 30px;
        select {
          height: 30px;
        }
      }
      .gantt_duration {
        height: 30px;
        span {
          line-height: 30px;
        }
      }
    }

    .gantt_cal_lsection {
      height: 20px;
      box-sizing: content-box;
    }
    .gantt_cal_ltext {
      height: auto !important;
      box-sizing: content-box;
      select {
        height: 30px;
      }
      textarea,
      select,
      input {
        display: inline-block;
        width: 100%;
        height: 32px;
        line-height: 1.5;
        padding: 4px 7px;
        font-size: 14px;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        color: #515a6e;
        background-color: #fff;
        background-image: none;
        position: relative;
        cursor: text;
        transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out;
      }
      textarea:focus,
      textarea:hover,
      select:focus,
      select:hover,
      input:focus,
      input:hover {
        border-color: #57a3f3;
      }
      select:focus-visible {
        border-color: #57a3f3;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
      }
    }
    .gantt_wrap_section {
      display: flex;
      align-items: center;
      .gantt_cal_lsection {
        height: 28px !important;
        line-height: 28px;
        padding: 10px;
      }
      .gantt_cal_ltext {
        height: 28px !important;
        line-height: 26px;
        width: 100%;
        padding: 10px;
        select {
          height: 30px;
        }
      }
      .gantt_section_time {
        padding: 10px !important;
        select {
          height: 28px;
        }
      }
    }
  }
  .gantt_btn_set {
    border: 1px solid transparent;
    transition: all 0.3s ease;
  }
  .gantt_save_btn_set {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
  .gantt_save_btn_set:hover {
    background-color: #57a3f3;
    border-color: #57a3f3;
  }
  .gantt_cancel_btn_set {
    background-color: #fff;
    border-color: #dcdee2;
  }
  .gantt_cancel_btn_set:hover {
    color: #57a3f3;
    background-color: #fff;
    border-color: #57a3f3;
  }
  .gantt_delete_btn_set {
    color: #fff;
    background-color: #f90;
    border-color: #f90;
  }
  .gantt_delete_btn_set:hover {
    background-color: #ffad33;
    border-color: #ffad33;
  }
}

// .gantt_cal_larea {
//   overflow-y: auto;
//   .gantt_cal_lsection {
//     height: 30px;
//   }
//   .gantt_cal_ltext {
//     height: 30px !important;
//   }
// }
</style>
