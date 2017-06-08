<!--平台总账户-->

<template>
  <div>
    <v-info accountTitle="总账户基本资料"
            accountNumber="SYS_GENERATE_000"
            accountName="平台总账户"
            accountExplain="用于平台资金划拨，可以将该账户资金派拨给其他平台账户"
            :isPartner="Partner"
            :isDrawMoney="DrawMoney"
            :isTransfer="Transfer"
    ></v-info>
    <v-record recordTitle="平台总账户资金记录"
    ></v-record>
  </div>
</template>
<script>
  import vInfo from '../common/AccountInfo.vue';
  import vRecord from '../common/AccountRecord.vue';
  export default {
    data(){
      return{
        Partner:false,
        DrawMoney:true,
        Transfer:true
      }
    },
    components:{
        vInfo,
        vRecord
    }
  }
</script>
