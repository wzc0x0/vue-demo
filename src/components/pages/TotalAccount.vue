<!--平台总账户-->

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
    data(){
      return{
        options: [{
          value: '选项1',
          label: 'hahhah'
        }, {
          value: '选项2',
          label: '111112'
        }, {
          value: '选项3',
          label: '2232'
        }, {
          value: '选项4',
          label: '333'
        }, {
          value: '选项5',
          label: '444'
        }],
        isPartner:true,
        explain:"hello vux"
      }
    },
    components:{
        vInfo,
        vRecord
    }
  }
</script>
