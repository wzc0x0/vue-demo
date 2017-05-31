
<template>
  <div>
    <v-header></v-header>
    <div class="login-wrap">
      <div class="login-container">
        <div class="ms-title">平台存管账户管理平台</div>
        <div class="ms-login">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入用户账户"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="登陆密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item prop="validate">
              <el-input v-model="ruleForm.validateCode"></el-input>
            </el-form-item>
            <div class="login-btn">
              <el-button type="primary" @click="submitForm('ruleForm')">登&emsp;录</el-button>
            </div>
          </el-form>
          <p class="partnerApply">新合作方商户账户开户申请</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from '../components/common/Header.vue';
  export default {
    components:{vHeader} ,
    data: function(){
      return {
        ruleForm: {
          username: '',
          password: '',
          validateCode:''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          validate: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('ms_username',self.ruleForm.username);
            self.$router.push('/readme');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login-wrap{
    width: 1280px;
    height: 620px;
    background: url("../assets/image/background-Landing-page.png");
    position: relative;
    margin: 0 auto;
  }
  .login-container{
    background: #d9d9d9;
    position: absolute;
    right:73px;
    top:92px;
    width:350px;
    height:335px;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .ms-title{
    line-height: 60px;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
  }
  .partnerApply{
    font-size:14px;
    color:#3197ed;
    position: absolute;
    bottom: -30px;
    right: 0;
  }
  .login-btn button{
    width:100%;
    height:40px;
    font-size: 18px;
  }
</style>
