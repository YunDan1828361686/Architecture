<template>
  <div>
    <!-- <Button @click="Drawer_1 = true" type="primary">Create</Button> -->
    <Drawer
      title="新增"
      v-model="Drawer_1"
      width="600"
      @on-close="Drawer_close_1"
      :mask-closable="false"
    >
      <Form ref="formCustom_1" :model="formCustom_1" :rules="ruleValidate_1">
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="姓名" label-position="top" prop="name">
              <Input v-model="formCustom_1.name" placeholder="请输入姓名" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="年龄" label-position="top" prop="age">
              <Input v-model="formCustom_1.age" placeholder="请输入年龄" number />
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="E-mail" label-position="top" prop="mail">
              <Input v-model="formCustom_1.mail" placeholder="请输入邮箱"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="城市" label-position="top" prop="city">
              <Select v-model="formCustom_1.city" placeholder="请选择城市">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="开始日期" label-position="top" prop="start_date">
              <DatePicker
                type="date"
                placeholder="请选择开始日期"
                v-model="formCustom_1.start_date"
                style="width:100%"
              ></DatePicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="开始时间" label-position="top" prop="start_time">
              <TimePicker
                type="time"
                placeholder="请选择开始时间"
                v-model="formCustom_1.start_time"
                style="width:100%"
              ></TimePicker>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="截止日期" label-position="top" prop="end_date">
              <DatePicker
                type="date"
                placeholder="请选择截止日期"
                v-model="formCustom_1.end_date"
                style="width:100%"
              ></DatePicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="截止时间" label-position="top" prop="end_time">
              <TimePicker
                type="time"
                placeholder="请选择截止时间"
                v-model="formCustom_1.end_time"
                style="width:100%"
              ></TimePicker>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="性别" label-position="top" prop="gender">
              <RadioGroup v-model="formCustom_1.gender" style="width:100%">
                <Radio label="男">男</Radio>
                <Radio label="女">女</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="爱好" label-position="top" prop="hobby">
              <div style="width:100%"></div>
              <CheckboxGroup v-model="formCustom_1.hobby" style="display: inline-block;width:100%">
                <Checkbox label="吃"></Checkbox>
                <Checkbox label="睡"></Checkbox>
                <Checkbox label="跑"></Checkbox>
                <Checkbox label="电影"></Checkbox>
              </CheckboxGroup>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="备注" label-position="top" prop="remarks">
          <Input
            type="textarea"
            v-model="formCustom_1.remarks"
            :autosize="{minRows: 3,maxRows: 3}"
            placeholder="请输入备注"
          />
        </FormItem>
      </Form>
      <div class="drawer_footer">
        <Button style="margin-right: 8px" @click="handleReset('formCustom_1')">重置</Button>
        <Button type="primary" @click="handleSubmit('formCustom_1')">确定</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
export default {
  name: "level_2_3",
  data() {
    return {
      Drawer_1: false,
      formCustom_1: {
        // 姓名
        name: "",
        // 年龄
        age: "",
        // 邮箱
        mail: "",
        // 城市
        city: "",
        // 开始日期
        start_date: "",
        // 开始时间
        start_time: "",
        // 截止日期
        end_date: "",
        // 截止时间
        end_time: "",
        // 性别
        gender: "",
        // 爱好
        hobby: [],
        // 备注
        remarks: "",
        // form表单的id
        element_form: ""
      },
      // 正则
      ruleValidate_1: {
        name: [
          {
            required: true,
            message: "请输入姓名!",
            trigger: "blur"
          }
        ],
        age: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!value) {
                return callback(new Error("请输入年龄！"));
              }
              if (!Number.isInteger(value)) {
                console.log(typeof value);
                callback(new Error("必须输入整数！"));
              } else {
                if (value < 18) {
                  callback(new Error("必须大于18岁！"));
                } else {
                  callback();
                }
              }
            }
          }
        ],
        mail: [
          {
            required: true,
            message: "请输入邮箱！",
            trigger: "blur"
          },
          { type: "email", message: "邮箱格式错误！", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "请选择城市！",
            trigger: "change"
          }
        ],
        start_date: [
          {
            required: true,
            type: "date",
            message: "请选择开始日期",
            trigger: "change"
          }
        ],
        start_time: [
          {
            required: true,
            type: "string",
            message: "请选择开始时间",
            trigger: "change"
          }
        ],
        end_date: [
          {
            required: true,
            type: "date",
            message: "请选择截止日期",
            trigger: "change"
          }
        ],
        end_time: [
          {
            required: true,
            type: "string",
            message: "请选择截止时间",
            trigger: "change"
          }
        ],
        gender: [
          { required: true, message: "请选择性别！", trigger: "change" }
        ],
        hobby: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "请选择爱好！",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "最多选择两个！",
            trigger: "change"
          }
        ],
        remarks: [
          {
            required: true,
            message: "请输入备注！",
            trigger: "blur"
          },
          {
            type: "string",
            min: 20,
            message: "介绍不少于20个字！",
            trigger: "blur"
          }
        ],
        passwd: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入密码！"));
              } else {
                if (this.formCustom_1.passwdCheck !== "") {
                  // 对第二个密码框单独验证
                  this.$refs.formCustom_1.validateField("passwdCheck");
                }
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        passwdCheck: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码！"));
              } else if (value !== this.formCustom_1.passwd) {
                callback(new Error("请保持密码一致！"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // 给他赋值子组件的表单元素
          this.formCustom_1.element_form = name;
          this.$emit("formCustom_1_click", this.formCustom_1);
        } else {
          this.$Message.error("表单验证不通过!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    Drawer_close_1() {
      this.$refs.formCustom_1.resetFields();
    }
  }
};
</script>
<style scoped  lang="less">
.drawer_footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
</style>
