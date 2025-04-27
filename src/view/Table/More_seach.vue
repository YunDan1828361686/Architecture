<template>
  <div style="margin-left: 20px; display: inline-block">
    <Form
      inline
      :label-width="80"
      ref="table_form_1"
      :rules="form_rules_1"
      :model="table_form_1"
      label-position="right"
    >
      <FormItem label="省份" prop="provinceCodes ">
        <Tooltip
          :content="default_ == '' ? '您未选择数据' : default_"
          placement="top"
          transfer
        >
          <Select
            multiple
            filterable
            :max-tag-count="1"
            placeholder="请选择省份"
            @on-change="select_change"
            v-model="table_form_1.provinceCodes"
            @on-open-change="select_open_change"
            style="width: 220px"
          >
            <Option value="-1" key=" " :disabled="disabled_1">全选</Option>
            <Option
              v-for="(item, index) in Select_province"
              :value="item.value"
              :key="item.value"
              :disabled="disabled_2"
              >{{ item.label }}</Option
            >
          </Select>
        </Tooltip>
      </FormItem>
      <!-- <FormItem label="厂家" prop="venders">
      <Tooltip
        :content="
          table_form_1.venders.toString() == ''
            ? '您未选择数据'
            : table_form_1.venders.toString()
        "
        placement="top"
        transfer
      >
        <Select
          multiple
          filterable
          :max-tag-count="1"
          placeholder="请选择厂家"
          v-model="table_form_1.venders"
          allow-create
          @on-create="handleCreate1"
          @on-open-change="select_open_change_2"
          style="width: 210px"
        >
          <Option
            v-for="(item, index) in Select_Cascader_2"
            :value="item"
            :key="item"
            :disabled="index == 0 ? true : false"
            >{{ item }}</Option
          >
        </Select>
      </Tooltip>
    </FormItem>
    <FormItem label="型号" prop="deviceModels">
      <Tooltip
        :content="
          table_form_1.deviceModels.toString() == ''
            ? '您未选择数据'
            : table_form_1.deviceModels.toString()
        "
        placement="top"
        transfer
      >
        <Select
          multiple
          filterable
          :max-tag-count="1"
          placeholder="请选择型号"
          v-model="table_form_1.deviceModels"
          allow-create
          @on-create="handleCreate2"
          @on-open-change="select_open_change_3"
          style="width: 240px"
        >
          <Option
            v-for="(item, index) in Select_Cascader_3"
            :value="item"
            :key="item"
            :disabled="index == 0 ? true : false"
            >{{ item }}</Option
          >
        </Select>
      </Tooltip>
    </FormItem>
    <FormItem label="额定功率" prop="ratedPowers">
      <Tooltip
        :content="
          table_form_1.ratedPowers.toString() == ''
            ? '您未选择数据'
            : table_form_1.ratedPowers.toString()
        "
        placement="top"
        transfer
      >
        <Select
          multiple
          filterable
          :max-tag-count="1"
          placeholder="请选择额定功率"
          v-model="table_form_1.ratedPowers"
          allow-create
          @on-create="handleCreate3"
          style="width: 220px"
        >
          <Option
            v-for="(item, index) in Select_Cascader_4"
            :value="item"
            :key="item"
            :disabled="index == 0 ? true : false"
            >{{ item }}</Option
          >
        </Select>
      </Tooltip>
    </FormItem> -->
    </Form>
  </div>
</template>

<script>
import { Spin } from "view-design";
import city_data from "@/libs/city";
export default {
  name: "More_seach",
  data() {
    return {
      default_: [],
      before_data: [],
      disabled_1: false,
      disabled_2: true,
      // 获取表格数据时用到的参数
      table_form_1: {
        provinceCodes: ["-1"],
        venders: [],
        deviceModels: [],
        ratedPowers: [],
      },
      form_rules_1: {
        provinceCodes: [
          {
            required: true,
            // blur失去焦点时触发  change数据发生改变时触发
            trigger: "change",
            validator: (rule, value, callback) => {
              if (!value.length) {
                return callback(new Error("请选择省份！"));
              } else {
                return callback();
              }
            },
          },
        ],
      },
    };
  },
  methods: {
    // 省份多选
    select_change() {
      var this_ = this;
      if (this.table_form_1.provinceCodes[0] == "-1") {
        this_.default_ = "全部省份";
      } else {
        this_.default_ = [];
        for (let i = 0; i < this.table_form_1.provinceCodes.length; i++) {
          const element = this.table_form_1.provinceCodes[i];
          for (let o = 0; o < this.Select_province.length; o++) {
            const element1 = this.Select_province[o];
            if (element == element1.value) {
              this_.default_.push(element1.label);
            }
          }
        }
        this_.default_ = this_.default_.join(",");
      }
      if (!this_.table_form_1.provinceCodes.length) {
        this_.disabled_1 = false;
        this_.disabled_2 = false;
      } else {
        for (let i = 0; i < this.table_form_1.provinceCodes.length; i++) {
          const element = this.table_form_1.provinceCodes[i];
          if (element == "-1") {
            this_.disabled_1 = false;
            this_.disabled_2 = true;
          } else {
            this_.disabled_1 = true;
            this_.disabled_2 = false;
          }
        }
      }
    },
    // 省份多选
    select_open_change(index) {
      if (!index) {
        // 合上
        let alter_data = JSON.parse(
          JSON.stringify(this.table_form_1.provinceCodes)
        );
        if (alter_data.length) {
          // 合上后的数据不是空
          // 判断展开时的数据和合上前的数据是不是相等，相等就不获取下面的数据
          if (
            this.before_data.sort().toString() == alter_data.sort().toString()
          )
            return;
          // this.get_select_data();
          console.log("11");
        }
      } else {
        // 展开先保存数据
        this.before_data = JSON.parse(
          JSON.stringify(this.table_form_1.provinceCodes)
        );
      }
    },
    // // 厂家多选
    // select_open_change_2(index) {
    //   if (!index) {
    //     // 合上
    //     let alter_data = JSON.parse(JSON.stringify(this.table_form_1.venders));
    //     if (alter_data.length) {
    //       // 合上后的数据不是空
    //       // 判断展开时的数据和合上前的数据是不是相等，相等就不获取下面的数据
    //       if (
    //         this.before_data.sort().toString() == alter_data.sort().toString()
    //       )
    //         return;
    //       this.get_select_data_2();
    //     }
    //   } else {
    //     // 展开先保存数据
    //     this.before_data = JSON.parse(
    //       JSON.stringify(this.table_form_1.venders)
    //     );
    //   }
    // },
    // // 型号多选
    // select_open_change_3(index) {
    //   if (!index) {
    //     // 合上
    //     let alter_data = JSON.parse(
    //       JSON.stringify(this.table_form_1.deviceModels)
    //     );
    //     if (alter_data.length) {
    //       // 合上后的数据不是空
    //       // 判断展开时的数据和合上前的数据是不是相等，相等就不获取下面的数据
    //       if (
    //         this.before_data.sort().toString() == alter_data.sort().toString()
    //       )
    //         return;
    //       this.get_select_data_3();
    //     }
    //   } else {
    //     // 展开先保存数据
    //     this.before_data = JSON.parse(
    //       JSON.stringify(this.table_form_1.deviceModels)
    //     );
    //   }
    // },
    // // 获取厂家
    // get_select_data() {
    //   Spin.show();
    //   var that = this;
    //   that.$Message.loading({
    //     content: "正在加载数据，请稍后~",
    //     duration: 3,
    //   });
    //   this.ajax_promise(
    //     "/training/trainwlrru/getDropDownBoxPhaseII",
    //     "post",
    //     that.$Qs.stringify({
    //       provinceCodes: that.table_form_1.provinceCodes,
    //     })
    //   ).then(function (result) {
    //     that.table_form_1.venders = [];
    //     that.table_form_1.deviceModels = [];
    //     that.table_form_1.ratedPowers = [];
    //     that.Select_Cascader_2 = ["输入新条目后，按下回车键即可新建条目。"];
    //     that.Select_Cascader_3 = ["输入新条目后，按下回车键即可新建条目。"];
    //     that.Select_Cascader_4 = ["输入新条目后，按下回车键即可新建条目。"];
    //     // 如果没有厂家
    //     if (!result.data.venders.length) {
    //       that.$Message.destroy();
    //       that.$Message["warning"]({
    //         background: true,
    //         content: "暂无厂家数据！",
    //         duration: 3,
    //       });
    //     } else {
    //       that.Select_Cascader_2 = result.data.venders;
    //       that.Select_Cascader_2.unshift(
    //         "输入新条目后，按下回车键即可新建条目。"
    //       );
    //       that.$Message.destroy();
    //       that.$Message["success"]({
    //         background: true,
    //         content: "厂家数据加载完毕！",
    //         duration: 3,
    //       });
    //     }
    //     Spin.hide();
    //   });
    // },
    // // 获取型号
    // get_select_data_2() {
    //   Spin.show();
    //   var that = this;
    //   that.$Message.loading({
    //     content: "正在加载数据，请稍后~",
    //     duration: 3,
    //   });
    //   this.ajax_promise(
    //     "/training/trainwlrru/getDropDownBoxPhaseII",
    //     "post",
    //     that.$Qs.stringify({
    //       provinceCodes: that.table_form_1.provinceCodes,
    //       venders: that.table_form_1.venders,
    //     })
    //   ).then(function (result) {
    //     that.table_form_1.deviceModels = [];
    //     that.table_form_1.ratedPowers = [];
    //     that.Select_Cascader_3 = ["输入新条目后，按下回车键即可新建条目。"];
    //     that.Select_Cascader_4 = ["输入新条目后，按下回车键即可新建条目。"];
    //     // 如果没有型号
    //     if (!result.data.deviceModel.length) {
    //       that.disabled_4 = true;
    //       that.disabled_5 = true;
    //       that.$Message.destroy();
    //       that.$Message["warning"]({
    //         background: true,
    //         content: "暂无型号数据！",
    //         duration: 3,
    //       });
    //     } else {
    //       that.disabled_4 = false;
    //       that.disabled_5 = true;
    //       that.Select_Cascader_3 = result.data.deviceModel;
    //       that.Select_Cascader_3.unshift(
    //         "输入新条目后，按下回车键即可新建条目。"
    //       );
    //       that.$Message.destroy();
    //       that.$Message["success"]({
    //         background: true,
    //         content: "型号数据加载完毕！",
    //         duration: 3,
    //       });
    //     }
    //     Spin.hide();
    //   });
    // },
    // // 获取额定功率
    // get_select_data_3() {
    //   Spin.show();
    //   var that = this;
    //   that.$Message.loading({
    //     content: "正在加载数据，请稍后~",
    //     duration: 3,
    //   });
    //   this.ajax_promise(
    //     "/training/trainwlrru/getDropDownBoxPhaseII",
    //     "post",
    //     that.$Qs.stringify({
    //       provinceCodes: that.table_form_1.provinceCodes,
    //       venders: that.table_form_1.venders,
    //       deviceModels: that.table_form_1.deviceModels,
    //     })
    //   ).then(function (result) {
    //     that.table_form_1.ratedPowers = [];
    //     that.Select_Cascader_4 = ["输入新条目后，按下回车键即可新建条目。"];
    //     // 如果没有额定功率;
    //     if (!result.data.ratedPower.length) {
    //       that.disabled_5 = true;
    //       that.$Message.destroy();
    //       that.$Message["warning"]({
    //         background: true,
    //         content: "暂无额定功率数据！",
    //         duration: 3,
    //       });
    //     } else {
    //       that.disabled_5 = false;
    //       that.Select_Cascader_4 = result.data.ratedPower;
    //       that.Select_Cascader_4.unshift(
    //         "输入新条目后，按下回车键即可新建条目。"
    //       );
    //       that.$Message.destroy();
    //       that.$Message["success"]({
    //         background: true,
    //         content: "额定功率数据加载完毕！",
    //         duration: 3,
    //       });
    //     }
    //     Spin.hide();
    //   });
    // },
  },
  computed: {
    Select_province() {
      // 此写法为省份    无操作为三级联动
      let data = JSON.parse(JSON.stringify(city_data.city));
      return data.map((item) => {
        return Object.assign(item, {
          children: "",
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
