<!--合作账户-->

<template>
  <div>
    <v-info></v-info>
    <v-bill></v-bill>
    <v-record></v-record>
  </div>
</template>
<script>
  import vInfo from '../common/AccountInfo.vue';
  import vRecord from '../common/AccountRecord.vue';
  import vBill from '../common/BillDownload.vue'
  export default {
    components:{
      vInfo,
      vRecord,
      vBill
    }
  }
</script>
