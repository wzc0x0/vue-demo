<template>
  <div class="tab_bar">
    <el-menu  style="background-color: #ffffff" :default-active="onRoutes"  mode="horizontal" unique-opened router>
      <template v-for="item in items">
        <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import ElMenuItem from "../../../node_modules/element-ui/packages/menu/src/menu-item";
  export default{
    components: {ElMenuItem},
    data(){
      return{
        items:[
          {
            index:'index',
            title:'平台总账户'
          },
          {
            index:'daichang',
            title:'代偿金账户'
          },
          {
            index:'fenrun',
            title:'分润账户'
          },
          {
            index:'income',
            title:'收入账户'
          },
          {
            index:'marketing',
            title:'营销款账户'
          },
          {
            index:'paixi',
            title:'派息账户'
          },
          {
            index:'daichongzhi',
            title:'代充值账户'
          },
          {
            index:'partner',
            title:'合作账户'
          },
        ]
      }
    },
    computed:{
      onRoutes(){
          return this.$route.path.replace('/','')
      }
    }

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
</style>
