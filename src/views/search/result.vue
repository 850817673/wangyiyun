<template>
  <div>
    <!-- tab导航 -->
    <div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <!-- 中间内容 -->
    <div></div>
    <!-- 末尾分页 -->
    <div>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  created() {
    console.log(this.$route.query.q);
  }
};
</script>
<style lang="less">
</style>