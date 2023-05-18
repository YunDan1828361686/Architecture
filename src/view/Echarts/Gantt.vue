<template>
  <div style="height: 100%; display: flex; flex-direction: column">
    <div>
      <button @click="refreshGantt">刷新</button>
    </div>
    <ganttBox
      class="ganttBox"
      ref="ganttBox"
      :height="'100%'"
      :row_height="row_height"
      :scale_height="scale_height"
      :min_column_width="min_column_width"
      :ganttColumns="ganttColumns"
      :ganttTasks="ganttTasks"
      :ganttTooltip="ganttTooltip"
      :ganttTooltipTextFun="ganttTooltipTextFun"
      :ganttTooltipLinkFun="ganttTooltipLinkFun"
      :task_classFun="task_classFun"
      :ganttFullscreen="ganttFullscreen"
      :ganttFullscreenIcon="ganttFullscreenIcon"
      :ganttMarkerData="ganttMarkerData"
      :rightside_textFun="rightside_textFun"
      :task_textFun="task_textFun"
      :onContextMenuFun="onContextMenuFun"
    ></ganttBox>
  </div>
</template>
<script>
import ganttBox from "@/view/components/gantt/index.vue";
export default {
  name: "Gantt",
  components: {
    ganttBox,
  },
  data() {
    return {
      // 设置表格行的默认高度
      row_height: 30,
      // 顶部表头的高度
      scale_height: 120,
      // 设置时间轴区域中列的最小宽度
      min_column_width: 40,
      // 是否开启悬浮框功能
      ganttTooltip: true,
      // 是否开启全屏功能
      ganttFullscreen: true,
      // 全屏按钮的icon，即class
      ganttFullscreenIcon: "ivu-icon ivu-icon-md-expand gantt-fullscreen",
      // 网格区域自定义线
      ganttMarkerData: [
        {
          start_date: "2023-01-10 00:00:00",
          text: "启动",
          cssClass: "startupMarker",
        },
        {
          start_date: "2023-01-15 00:00:00",
          text: "再次启动",
          cssClass: "restartMarker",
        },
      ],
      // 设置左侧表格表头
      ganttColumns: [
        {
          name: "text",
          label: "名称",
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
        {
          name: "assigned",
          label: "分配给",
          width: 80,
          align: "center",
        },
        { name: "add", width: 40 },
      ],
      ganttTasks: {
        data: [
          {
            id: 10,
            type: "project",
            text: "项目1",
            progress: 0.6,
            assigned: "小明,小红,小刚",
            open: true,
          },
          {
            id: 11,
            type: "project",
            text: "项目2",
            progress: 0.6,
            assigned: "大明,大红,大刚",
            open: true,
          },
          {
            id: 12,
            text: "项目>任务1",
            type: "project",
            parent: "10",
            progress: 1,
            assigned: "小明,小红",
            open: true,
          },
          {
            id: 14,
            text: "项目>任务2",
            type: "project",
            parent: "10",
            progress: 0.8,
            assigned: "小红,小刚",
            open: true,
          },
          {
            id: 15,
            text: "项目>任务3",
            type: "project",
            parent: "10",
            progress: 0.6,
            assigned: "小刚",
            open: true,
          },
          {
            id: 13,
            text: "会议1",
            type: "meeting",
            start_date: "2023-01-10 00:00:00",
            duration: "2",
            parent: "10",
            assigned: "小明,小红,小刚",
            open: true,
          },
          {
            id: 16,
            text: "会议2",
            type: "meeting",
            start_date: "2023-01-23 00:00:00",
            parent: "10",
            progress: 0,
            assigned: "小红,小刚",
            open: true,
          },
          {
            id: 17,
            text: "任务1.1",
            type: "task",
            start_date: "2023-01-10 00:00:00",
            duration: "2",
            parent: "12",
            progress: 1,
            assigned: "小红",
            open: true,
          },
          {
            id: 18,
            text: "任务1.2",
            type: "task",
            start_date: "2023-02-04 00:00:00",
            duration: "3",
            parent: "12",
            progress: 0.8,
            assigned: "小刚",
            open: true,
          },
          {
            id: 19,
            text: "任务1.3",
            type: "task",
            start_date: "2023-02-04 00:00:00",
            duration: "4",
            parent: "12",
            progress: 0.2,
            assigned: "小红,小刚",
            open: true,
          },
          {
            id: 20,
            text: "任务1.4",
            type: "task",
            start_date: "2023-02-12 00:00:00",
            duration: "4",
            parent: "12",
            progress: 0,
            assigned: "小明,小刚",
            open: true,
          },
          {
            id: 21,
            text: "任务3.1",
            type: "task",
            start_date: "2023-01-12 00:00:00",
            duration: "4",
            parent: "15",
            assigned: "小明,小刚",
            progress: 0.5,
            open: true,
          },
          {
            id: 22,
            text: "任务3.2",
            type: "task",
            start_date: "2023-02-08 00:00:00",
            duration: "4",
            parent: "15",
            progress: 0.1,
            open: true,
          },
          {
            id: 23,
            text: "任务3.3",
            type: "task",
            start_date: "2023-02-16 00:00:00",
            duration: "11",
            parent: "15",
            progress: 0,
            open: true,
          },
        ],
        links: [
          { id: "10", source: "10", target: "12", type: "1" },
          { id: "11", source: "12", target: "17", type: "0" },
          { id: "12", source: "17", target: "18", type: "0" },
          { id: "13", source: "17", target: "19", type: "0" },
          { id: "14", source: "19", target: "20", type: "0" },
        ],
      },
    };
  },
  computed: {},
  methods: {
    // 甘特图刷新
    refreshGantt() {
      this.$refs.ganttBox.refreshGantt();
    },
    // 给网格区域的任务添加右侧的注释
    rightside_textFun(start, end, task) {
      if (task.type == gantt.config.types.task) {
        return "加注释";
      }
      return "";
    },
    // 表格单元格和任务单元格的悬浮框
    ganttTooltipTextFun: (start, end, task) => {
      return (
        "<b>名称：</b> " +
        task.text +
        "<br/>" +
        "<b>开始时间：</b> " +
        gantt.templates.tooltip_date_format(start) +
        "<br/>" +
        "<b>结束时间：</b> " +
        gantt.templates.tooltip_date_format(end)
      );
    },
    // 任务链路的悬浮框
    ganttTooltipLinkFun: (event, node) => {
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
    // 设置单元格样式
    task_classFun(start, end, task) {
      if (task.progress == 0.5) {
        return "ganttTaskHigh";
      }
    },
    // 网格区域单元格任务上显示的字
    task_textFun(start, end, task) {
      if (task.type == "meeting") {
        return task.text;
      } else {
        return task.text + ` （进度${(task.progress * 100).toFixed(2)}%）`;
      }
    },
    // 右键事件，左侧表格和右侧网格都适用
    onContextMenuFun(taskId, linkId, event) {
      var x =
          event.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft,
        y =
          event.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      if (taskId) {
        // console.log(x, y, taskId);
      } else if (linkId) {
        // console.log(x, y, linkId);
      }
      if (taskId || linkId) {
        return false;
      }
      return true;
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // 先获取数据
      // 然后调用子组件的init
      this.$refs.ganttBox.init();
    });
  },
  watch: {},
};
</script>
<style lang="less" scoped>
.ganttBox {
  // 自定义线的样式
  /deep/ .startupMarker {
    background-color: aqua;
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
  // 设置表格的样式
  /deep/ .ganttColumnsHigh {
    color: #db2536;
  }
}
</style>
