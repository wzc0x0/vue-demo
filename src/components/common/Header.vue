<template>
  <header>
    <div class="header_wrap">
      <div class="logo">
        <img src="../../assets/image/logo.png" alt="">
      </div>
      <div>
        <ul class="userInfo" v-show="isAccount">
          <li class="header_title" style="font-size: 18px;margin-right: 10px">平台存管账户管理平台</li>
          <li class="userName">{{username}}&nbsp;您好！<span>|</span></li>
          <li class="modifyPwd">修改密码<span>|</span></li>
          <li class="exit" @click="handleExit()">退出</li>
        </ul>
        <ul class="userInfo" v-show="!isAccount">
          <li class="user_login" style="margin-right: 100px">欢迎登陆</li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
  export default{
      data(){
          return{
              isAccount:false
          };
      },
      computed:{
        username(){
            let username = sessionStorage.getItem('ms_username');
            //return username ? username : this.name;
            if(username){
                this.isAccount = !this.isAccount;
                return username;
            }else {
                this.handleExit();
            }
        }
      },
      methods:{
        handleExit(){
            sessionStorage.removeItem('ms_username');
            this.$router.push('/login');
        }
      }

  }
</script>
<style scoped>
  header{
    width:100%;
    height: 90px;
    background: #3197ed;
    margin-bottom: 10px;
  }
  .header_wrap{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .userInfo > li{
    float: left;
    line-height: 90px;
    color: #f7f7f7;
    margin: 0 5px;
    font-size: 14px;
    cursor: pointer;
  }
  .userInfo li >span{
    padding-left: 12px;
  }
</style>
