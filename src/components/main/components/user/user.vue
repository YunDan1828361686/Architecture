<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Tooltip :content="userName" placement="left">
          <Avatar :src="userAvatar" />
        </Tooltip>
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          个人信息
          <Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import "./user.less";
import { mapActions } from "vuex";
import { Spin } from "view-design";
export default {
  name: "User",
  props: {
    userAvatar: {
      type: String,
      default: ""
    },
    userName: {
      type: String,
      default: ""
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions(["handleLogOut"]),
    logout() {
      Spin.show();
      this.handleLogOut()
        .then(() => {
          this.$router.push({
            name: "login"
          });
          this.$Message.success({
            background: true,
            content: "退出账号成功！",
            duration: 3
          });
          Spin.hide();
        })
        .catch(() => {
          Spin.hide();
        });
    },
    message() {
      this.$router.push({
        name: "message_page"
      });
    },
    handleClick(name) {
      switch (name) {
        case "logout":
          this.logout();
          break;
        case "message":
          this.message();
          break;
      }
    }
  }
};
</script>
