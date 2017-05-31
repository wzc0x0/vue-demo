<template>
  <div class="tab_bar">
    <el-menu  style="background-color: #ffffff" default-active="1"  mode="horizontal">
      <el-menu-item index="1">平台总账户</el-menu-item>
      <el-menu-item index="2">代偿金账户</el-menu-item>
      <el-menu-item index="3">分润账户</el-menu-item>
      <el-menu-item index="4">收入账户</el-menu-item>
      <el-menu-item index="5">营销款账户</el-menu-item>
      <el-menu-item index="6">派息账户</el-menu-item>
      <el-menu-item index="7">代充值账户</el-menu-item>
      <el-menu-item index="8">合作账户</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default{
     //TODO
  }
</script>
<style scoped>
  .el-menu-item{
    padding: 0 44px;
    font-size: 16px;
  }
  .el-menu-item:hover{
    background-color: #ffffff;
  }
  .el-menu-item.is-active{
    border-bottom: 5px solid #20a0ff;
  }
  .tab_bar{
    width: 1280px;
    margin: 0 auto 10px;
  }
  .tab_bar >li{

  }
</style>
