<template>
  <div>
    <v-header></v-header>
    <v-tab></v-tab>
      <div class="container">
        <transition name="move" mode="out-in"><router-view></router-view></transition>
      </div>
  </div>
</template>
<script>
  import vHeader from './components/common/Header.vue';
  import vTab from  './components/common/TabBar.vue';
  export default {
    components:{
        vHeader,
        vTab
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
  .move-enter-active,.move-leave-active{
    transition: opacity .8s;
  }
  .move-enter,.move-leave{
    opacity: 0;
  }
</style>
