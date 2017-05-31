<!--平台总账户-->

<template>
  <div>
    <v-header></v-header>
    <v-tabs></v-tabs>
    <div class="container">
      <v-info></v-info>
      <v-bill></v-bill>
      <v-record></v-record>
    </div>
  </div>
</template>
<script>
  import vHeader from '../common/Header.vue';
  import vTabs from '../common/TabBar.vue';
  import vInfo from '../common/AccountInfo.vue';
  import vRecord from '../common/AccountRecord.vue';
  import vBill from '../common/BillDownload.vue'
  export default {
    components:{
        vHeader,
        vTabs,
        vInfo,
        vRecord,
        vBill
    }
  }
</script>
<style scoped>
  .container{
    width: 1200px;
    background-color: #ffffff;
    margin: auto;
    padding: 40px;
  }
</style>
