<template>
  <div>
    <Head />
    <HomePage />
    <el-container>
      <el-header>
        <Head />
      </el-header>

      <el-main>
        <HomePage />
        <!-- <HomePage2 /> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
//引入组件
import Head from "../components/Head";
import HomePage from "../components/HomePage";
import HomePage2 from "../components/HomePage2";
export default {
  name: "Home",
  components: {
    //组件注册
    Head,
    HomePage,
    HomePage2
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100%;
}

.el-main {
  position: relative;
  margin-top: 60px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>