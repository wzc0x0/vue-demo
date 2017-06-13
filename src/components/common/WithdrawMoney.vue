!--提现模块-->
<template>
  <div class="withdraw_wrap">
    <div class="content">
      <h2>账户提现</h2>
      <p>尊敬的用户，提现操作涉及您的资金变动，请仔细核对您的提现信息</p>
    </div>
    <div class="content">
      <h2>提现银行</h2>
      <p>交通银行</p>
    </div>
    <div class="content">
      <h2>预期到账日期</h2>
      <p>{{nowDate}} 72小时/24小时（72小时内打款，到账时间因各个银行不同）</p>
      <p>（双休日和法定节假日顺延）之内到账</p>
    </div>
    <div class="content">
      <h2>提现费用</h2>
      <p><span>2</span>元（新浪收取提现手续费）</p>
    </div>
    <div class="content">
      <h2><span style="color: red;padding-right: 5px;vertical-align: sub;margin-left: -12px">*</span>提现金额</h2>
      <p>
        <el-input v-model="howMuchMoney" style="width: 15%;padding-right: 10px"></el-input>元
      </p>
    </div>
    <div class="content">
      <h2>预期到账金额</h2>
      <p><span  style="padding-right: 5px;color: #4db3ff">{{deduct}}</span>元（已扣除手续费）</p>
    </div>
    <div class="content">
      <h2>短信验证码<span style="padding-left: 10px;font-size: 14px">绑定手机：{{phoneNum}}</span></h2>
      <p><el-input style="width: 10%;padding-right: 10px;"></el-input>
        <el-button type="text" v-if="!isValidate" @click="catchValidate">点击获取</el-button>
        <el-button type="primary" :disabled="true" v-else>{{countDown}}s后重试</el-button>
      </p>
    </div>
    <div class="content">
      <el-button type="primary" style="margin-left: 30px;padding: 10px 30px">确&nbsp;&nbsp;定</el-button>
    </div>
  </div>
</template>
<script>
  import getNowDate from "../../config/getNowFormatDate";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {
      ElButton,
      ElInput},
    data(){
      return{
        isValidate:false,
        howMuchMoney:"",
        phoneNum:"",
        countDown:"",
      }
    },
    computed:{
      nowDate:function () {
        return getNowDate();
      },
      deduct:function () {
        if(/-?\d+/.test(this.howMuchMoney)) {
          return Number(this.howMuchMoney)>=2?this.howMuchMoney-2:"请输入金额大于2";
        }
      }
    },
    methods:{
      catchValidate(){
        this.isValidate = !this.isValidate;
        this.countDown = 5;
        let stop = setInterval(()=>{
          this.countDown<=0?(_=>{
            clearInterval(stop);
            this.isValidate = !this.isValidate;
          })():this.countDown--;
        },1000)
      }
    }
  }
</script>
<style scoped>
  .withdraw_wrap{
    font-size: 16px;
  }
  .content{
    margin-top: 20px;
  }
  .content h2{
    font-size: 18px;
    font-weight: 600;
  }
  .content p{
    margin-top: 20px;
    text-indent: 2em;
    line-height: 20px;
  }
</style>
