<template>
  <div class="head">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页" name="first"></el-tab-pane>
      <el-tab-pane label="个人信息" name="second"></el-tab-pane>

      <el-tab-pane label="作品展览" name="third"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      this.$router.replace("/self");
    }
  }
};
</script>

<style scoped>
.el-tab-pane a {
  width: 20px;
  height: 10px;
}
</style>