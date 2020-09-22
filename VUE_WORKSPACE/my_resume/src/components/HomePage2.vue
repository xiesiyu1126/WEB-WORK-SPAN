<template>
  <div class="home-page-2">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HomePage2"
};
</script>
<style scoped>

.el-carousel__item:nth-child(2n) {
  background-color: #333435;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>