<!--分润账户-->

<template>
  <div>
    <v-info></v-info>
    <v-record></v-record>
  </div>
</template>
<script>
  import vInfo from '../common/AccountInfo.vue';
  import vRecord from '../common/AccountRecord.vue';
  export default {
    components:{
      vInfo,
      vRecord
    }
  }
</script>
