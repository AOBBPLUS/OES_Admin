<template>
  <div style="margin: 20px 20px">
    <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps"
    >
    </el-tree>
    <el-button :disabled="saveBtnDisabled" type="primary" @click="save"
      >保存</el-button
    >
  </div>
</template>
<script>
import menu from "@/api/acl/menu";

export default {
  data() {
    return {
      saveBtnDisabled: false,
      data: [],
      defaultProps: {
        children: "children",
        label: "name"
      },
      roleId: ""
    };
  },
  // 监听器
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      this.init();
    }
  },

  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.$route.params && this.$route.params.id) {
        this.roleId = this.$route.params.id;
        this.fetchDataById(this.roleId);
      }
    },
    fetchDataById(roleId) {
      menu.toAssign(roleId).then(response => {
        this.data = response.data.children;
        var jsonList = JSON.parse(JSON.stringify(this.data));
        var list = [];
        this.getJsonToList(list, jsonList[0]["children"]);
        this.setCheckedKeys(list);
      });
    },
    //把json数据转成string再转成对象，根据Key获取value数据
    getJsonToList(list, jsonList) {
      //遍历这个集合对象，获取key的值,此时传来的应该是admin左侧的所有权限列表
      for (var i = 0; i < jsonList.length; i++) {
        // 应该修改为 != 2,否则会出现像课程管理下发布课程明明被选了,但却无法显示的bug
        if (jsonList[i]["select"] == true && jsonList[i]["level"] != 2) {
          list.push(jsonList[i]["id"]);
        }
        if (jsonList[i]["children"] != null) {
          this.getJsonToList(list, jsonList[i]["children"]);
        }
      }
    },

    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },

    setCheckedKeys(list) {
      this.$refs.tree.setCheckedKeys(list);
    },

    save() {
      this.saveBtnDisabled = true;
      // 不要用尚硅谷讲的那个element-ui,应该使用下面的方法解决
      var ids = this.$refs.tree
        .getHalfCheckedKeys()
        .concat(this.$refs.tree.getCheckedKeys())
        .join(",");
      menu.doAssign(this.roleId, ids).then(response => {
        if (response.success) {
          this.$message({
            type: "success",
            message: "保存成功"
          });
          this.$router.push({ path: "/acl/role/list" });
        }
      });
    }
  }
};
</script>
