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
      :ganttTypes="ganttTypes"
      :onBeforeLightboxFun="onBeforeLightboxFun"
      :ganttSort="ganttSort"
      :taskCreateFun="taskCreateFun"
      :taskUpdateFun="taskUpdateFun"
      :taskDeleteFun="taskDeleteFun"
      :linkCreateFun="linkCreateFun"
      :linkUpdateFun="linkUpdateFun"
      :linkDeleteFun="linkDeleteFun"
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
          start_date: "2023-01-10",
          text: "启动",
          cssClass: "startupMarker",
        },
        {
          start_date: "2023-01-15",
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
      // 甘特图数据
      ganttTasks: {
        data: [
          {
            id: 10,
            text: "项目1",
            type: "project",
            progress: 0.6,
            assigned: "小明,小红,小刚",
            open: true,
          },
          {
            id: 11,
            text: "项目2",
            type: "project",
            progress: 0.6,
            assigned: "大明,大红,大刚",
            open: true,
          },
          {
            id: 12,
            text: "项目>任务1",
            type: "subproject",
            start_date: "2023-01-12",
            duration: "10",
            parent: "10",
            progress: 1,
            assigned: "小明,小红",
            open: true,
          },
          {
            id: 14,
            text: "项目>任务2",
            type: "subproject",
            start_date: "2023-01-12",
            duration: "3",
            parent: "10",
            progress: 0.8,
            assigned: "小红,小刚",
            open: true,
          },
          {
            id: 15,
            text: "项目>任务3",
            type: "subproject",
            start_date: "2023-01-25",
            duration: "2",
            parent: "10",
            progress: 0.6,
            assigned: "小刚",
            open: true,
          },
          {
            id: 13,
            text: "会议1",
            type: "meeting",
            start_date: "2023-01-10",
            duration: "2",
            parent: "10",
            assigned: "小明,小红,小刚",
            open: true,
          },
          {
            id: 16,
            text: "会议2",
            type: "meeting",
            start_date: "2023-01-23",
            parent: "10",
            progress: 0,
            assigned: "小红,小刚",
            open: true,
          },
          {
            id: 17,
            text: "任务1.1",
            type: "task",
            start_date: "2023-01-10",
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
            start_date: "2023-02-04",
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
            start_date: "2023-02-04",
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
            start_date: "2023-02-12",
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
            start_date: "2023-01-12",
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
            start_date: "2023-02-08",
            duration: "4",
            parent: "15",
            progress: 0.1,
            open: true,
          },
          {
            id: 23,
            text: "任务3.3",
            type: "task",
            start_date: "2023-02-16",
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
      // 重置类型
      // 默认只存在task和project，模拟新增两个type，subproject和meeting，避免使用placeholder和milestone关键字
      // 点击新增按钮默认为第一个type
      // type: "project"时，是无法设置时间的，如果想给父级设置时间就用subproject
      ganttTypes: [
        {
          typeName: "task",
          optionName: "任务",
          popupForm: [
            // 输入框
            {
              // 设置key值
              name: "text",
              map_to: "text",
              // 表单的label
              labelName: "名称",
              type: "textarea",
              focus: true,
            },
            // 多选框
            {
              name: "assigned",
              map_to: "assigned",
              labelName: "分配给",
              type: "checkbox",
              options: [
                {
                  key: "entry1",
                  label: "entry1",
                },
                {
                  key: "entry2",
                  label: "entry2",
                },
              ],
              onchange: () => {
                console.log("checkbox switched");
              },
            },
            // 选择框
            {
              name: "progress",
              map_to: "progress",
              labelName: "进度",
              type: "select",
              options: [
                { key: "0", label: "未开始" },
                { key: "0.1", label: "10%" },
                { key: "0.2", label: "20%" },
                { key: "0.3", label: "30%" },
                { key: "0.4", label: "40%" },
                { key: "0.5", label: "50%" },
                { key: "0.6", label: "60%" },
                { key: "0.7", label: "70%" },
                { key: "0.8", label: "80%" },
                { key: "0.9", label: "90%" },
                { key: "1", label: "完成" },
              ],
            },
            {
              name: "type",
              map_to: "type",
              labelName: "类型",
              type: "typeselect",
            },
            {
              name: "time",
              map_to: "auto",
              labelName: "时间范围",
              type: "time",
              time_format: ["%Y", "%m", "%d"],
            },
          ],
        },
        {
          typeName: "subproject",
          optionName: "子项目",
          popupForm: [
            {
              name: "text",
              map_to: "text",
              type: "textarea",
              labelName: "名称",
              focus: true,
            },
            {
              name: "assigned",
              map_to: "assigned",
              labelName: "分配给",
              type: "checkbox",
              options: [
                {
                  key: "entry1",
                  label: "entry1",
                },
                {
                  key: "entry2",
                  label: "entry2",
                },
              ],
              onchange: () => {
                console.log("checkbox switched");
              },
            },
            {
              name: "type",
              map_to: "type",
              labelName: "类型",
              type: "typeselect",
            },
            {
              name: "time",
              map_to: "auto",
              labelName: "时间范围",
              type: "time",
              time_format: ["%Y", "%m", "%d"],
            },
          ],
        },
        {
          typeName: "project",
          optionName: "项目",
          popupForm: [
            {
              name: "text",
              map_to: "text",
              type: "textarea",
              labelName: "名称",
              focus: true,
            },
            {
              name: "assigned",
              map_to: "assigned",
              labelName: "分配给",
              type: "checkbox",
              options: [
                {
                  key: "entry1",
                  label: "entry1",
                },
                {
                  key: "entry2",
                  label: "entry2",
                },
              ],
              onchange: () => {
                console.log("checkbox switched");
              },
            },
            {
              name: "type",
              map_to: "type",
              labelName: "类型",
              type: "typeselect",
            },
            {
              name: "time",
              map_to: "auto",
              labelName: "时间范围",
              type: "time",
              time_format: ["%Y", "%m", "%d"],
            },
          ],
        },
        {
          typeName: "meeting",
          optionName: "会议",
          popupForm: [
            {
              name: "text",
              map_to: "text",
              type: "textarea",
              labelName: "名称",
              focus: true,
            },
            {
              name: "assigned",
              map_to: "assigned",
              labelName: "分配给",
              type: "checkbox",
              options: [
                {
                  key: "entry1",
                  label: "entry1",
                },
                {
                  key: "entry2",
                  label: "entry2",
                },
              ],
              onchange: () => {
                console.log("checkbox switched");
              },
            },
            {
              name: "type",
              map_to: "type",
              labelName: "类型",
              type: "typeselect",
            },
            {
              name: "time",
              map_to: "auto",
              labelName: "时间范围",
              type: "time",
              time_format: ["%Y", "%m", "%d"],
            },
          ],
        },
      ],
      // 排序
      ganttSort: "start_date",
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
    // 出现弹窗之前
    onBeforeLightboxFun(id) {
      var this_ = this;
      // 需要先刷新灯箱数据
      gantt.resetLightbox();
      const task = gantt.getTask(id);
      // 这里return true就是打开自带的弹窗，也可以写成false然后按自己的想法写个弹窗
      // 如果是return false，具体看simulateSave函数，task.$new是确定此弹窗是新增还是编辑
      // setTimeout(() => {
      //   this.simulateSave(task.$new, id, task.parent);
      // }, 2000);
      return true;
    },
    // 模拟自定义弹窗的保存，如果onBeforeLightboxFun函数最后return false，就调用一下这个
    simulateSave(status, id, parent) {
      // 出现弹窗......
      // 点击弹窗的保存按钮执行下面的
      // 重置一下数据
      let addData_ = {
        start_date: "2023-01-03",
        end_date: "2023-01-23",
        text: "gantt.getLightboxValues().text",
        type: "task",
        duration: "20",
        parent: parent,
        progress: "0.5",
        assigned: "小明,小红",
      };
      if (status == true) {
        // 新增
        // 先写接口，在回调后添加数据，这里的id模拟一下
        addData_.id = new Date().getTime();
        gantt.addTask(addData_);
        // 删除自带的新增，因为点击+的时候，甘特图会自动生成一条空数据，需要清空一下
        gantt.deleteTask(id);
        // 如果在用自带的弹窗时，想自定义保存的逻辑，需要用下面的代码清除空数据
        // gantt._cancel_lightbox();
      } else {
        // 编辑
        // 先写接口，在回调后编辑数据
        addData_.id = id;
        gantt.addTask(addData_);
      }
      this.$nextTick(() => {
        setTimeout(() => {
          // 刷新数据
          gantt.refreshData();
          gantt.refreshLink();
          gantt.refreshTask();
          gantt.hideLightbox();
          // 排序
          gantt.sort(this.ganttSort);
        }, 1000);
      });
    },
    // 新增任务
    taskCreateFun(data) {
      console.log("新增任务", data);
    },
    // 更新任务
    taskUpdateFun(data, id) {
      console.log("更新任务", data, id);
    },
    // 删除任务
    taskDeleteFun(id) {
      // 使用自定义弹窗时，保存那里的逻辑需要删除自动生成的空数据，所以这里需要过滤下
      console.log("删除任务", id, gantt.serialize().data);
    },
    // 新增链接
    linkCreateFun(data) {
      console.log("新增链接", data);
    },
    // 更新链接
    linkUpdateFun(data, id) {
      console.log("更新链接", data, id);
    },
    // 删除链接
    linkDeleteFun(id) {
      console.log("删除链接", id);
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
