<template>
  <div style="height:600px">
    <Card shadow style="height: 100%;width: 100%;overflow:hidden">
      <div class="department-outer">
        <div class="tip-box">
          <b style="margin-right: 20px;">
            powered by
            <a target="blank" href="https://github.com/lison16">Lison</a>
          </b>
          <a
            target="blank"
            href="https://github.com/lison16/v-org-tree"
            style="margin-right: 10px;"
            >v-org-tree文档</a
          >
        </div>
        <div class="zoom-box">
          <zoom-controller
            v-model="zoom"
            :min="20"
            :max="200"
          ></zoom-controller>
        </div>
        <div class="view-box">
          <org-view
            v-if="data"
            :data="data"
            :zoom-handled="zoomHandled"
            @on-menu-click="handleMenuClick"
          ></org-view>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import OrgView from "./components/org-view.vue";
import { flatten, newTeam } from "@/libs/tools";
import ZoomController from "./components/zoom-controller.vue";
import "./index.less";
const menuDic = {
  edit: "编辑部门",
  detail: "查看部门",
  new: "新增子部门",
  delete: "删除部门"
};
export default {
  name: "org_tree_page",
  components: {
    OrgView,
    ZoomController
  },
  data() {
    return {
      data: null,
      zoom: 100
    };
  },
  computed: {
    zoomHandled() {
      return this.zoom / 100;
    }
  },
  methods: {
    setDepartmentData(data) {
      data.isRoot = true;
      return data;
    },
    handleMenuClick({ data, key }) {
      this.$Message.success({
        duration: 5,
        background: true,
        content: `点击了《${data.label}》节点的'${menuDic[key]}'菜单`
      });
    },
    getDepartmentData() {
      this.$axios("node1/org", "post").then(res => {
        // 深拷贝
        let TreeList = [JSON.parse(JSON.stringify(res.data))];
        // 把所有子级取出，与父级平级
        TreeList = flatten(TreeList, "children", 0);
        let TreeList2 = newTeam(TreeList, null);
        this.data = res.data;
        console.log([this.data], TreeList, TreeList2);
      });
    }
  },
  mounted() {
    this.getDepartmentData();
  }
};
</script>

<style></style>
