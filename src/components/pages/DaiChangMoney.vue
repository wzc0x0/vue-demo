<!--代偿金账户-->

<template>
  <div>
    <transfer-dialog ref="transfer"></transfer-dialog>
    <bind-card-dialog ref="bingCard"></bind-card-dialog>
    <recharge-dialog ref="rechargeChild" v-if="whichModule === 'recharge' "></recharge-dialog>
    <withdraw-money v-else-if="whichModule === 'drawMoney'"></withdraw-money>
    <template v-else>
      <div class="account_info">
        <table class="account_info_wrap">
          <thead>
          <tr><th style="text-align: left;font-size: 20px">代偿金账户基本资料</th></tr>
          </thead>
          <tbody class="userInfo" style="float: left;margin-top: 30px">
          <tr>
            <td>账户名称：</td>
            <td>代偿金账户</td>
            <td>账户编号：</td>
            <td>SYS_GENERATE_001</td>
          </tr>
          <tr>
            <td>账户说明：</td>
            <td colspan="3" >用于平台代偿借款人无法还款的出款账户</td>
          </tr>
          <tr>
            <td>绑定对公账户：</td>
            <td v-show="isBindingCard">尚未绑定银行对公账户<span class="binding" @click="bindBankCard">绑定</span></td>
            <td v-show="!isBindingCard">您已绑定银行对公账户：尾号{{tailNum}}<span class="binding" @click="unbind('SYS_GENERATE_001')">解绑</span></td>
          </tr>
          </tbody>
          <tbody class="userMoney" style="float: right;margin: 30px 30px 0 0 ">
          <tr>
            <td>账户总额：</td>
            <td>{{balance}}</td>
          </tr>
          <tr>
            <td>可用余额：</td>
            <td>{{availableAmount}}</td>
          </tr>
          <tr>
            <td>冻结金额：</td>
            <td>{{freezeAmount}}</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td><el-button type="primary" @click="recharge">充值</el-button></td>
            <td><el-button type="primary" v-show="isDrawMoney" @click="drawMoney">提现</el-button></td>
            <td><el-button type="primary" v-show="isTransfer" @click="transfor">资金划拨</el-button></td>
          </tr>
          </tbody>
        </table>
      </div>
      <account-record
        recordTitle="代偿金账户资金记录"
        :tableData="tableData"
        @query="queryRecord"
      ></account-record>
    </template>
  </div>
</template>
<script>
  import formatNum from "../../config/formatNum";
  import addSign from "../../config/addSign";
  import RechargeDialog from '../common/Recharge.vue';
  import WithdrawMoney from '../common/WithdrawMoney.vue';
  import TransferDialog from '../common/TransferDialog.vue';
  import AccountRecord from '../common/AccountRecord.vue';
  import BindCardDialog from '../common/BindCardDialog.vue';
  export default {
    components:{
      RechargeDialog,
      TransferDialog,
      BindCardDialog,
      WithdrawMoney,
      AccountRecord
    },
    data(){
      return{
        balance:"",
        availableAmount:"",
        freezeAmount:"",
        tailNum:'',
        isDrawMoney:true,
        isTransfer:false,
        isBindingCard:true,
        whichModule:"",
        tableData:[]
      }
    },
    methods:{
      recharge(){
        this.whichModule =  "recharge";
      },
      drawMoney(){
        this.whichModule = "drawMoney";
      },
      transfor(){
        this.$refs.transfer.dialogVisible = !this.$refs.transfer.dialogVisible
      },
      bindBankCard(){
        this.$refs.bingCard.dialogFormVisible = !this.$refs.bingCard.dialogFormVisible;
        this.$refs.bingCard.form.whichClick = "SYS_GENERATE_001";
      },
      unbind(platformUserNo){
        this.$http.post("/api/order/accountDownOrder",addSign({
          "platformUserNo":platformUserNo,
          "orderType":"1005",
          "orderSource":"1",
          "orgCode":"xwbank",
          "redirectUrl":"http://www.baidu.com"
        })).then((res)=>{
          if(res.body.code == "200"){
            window.location.href = res.body.model.respData;
          }
        })
      },
      queryRecord(formRecord){
        let nid = formRecord.platformNumber;
        let startDateStr = formRecord.startTime;
        let endDateStr = formRecord.endTime;
        this.$http.post("/api/order/queryAccountRecord",addSign({
          "pageNum":"1",
          "pageSize":"20"
        })).then((res)=>{
          if(res.body.code == "200"){
            this.tableData = res.body.model.model;
          }
          console.log(res.body)
        })
      }
    },
    mounted(){
      this.$http.post("/api/order/selectDownOrder",addSign({
        "platformUserNo":"SYS_GENERATE_001",
        "orderType":"4001",
        "orderSource":"1",
        "orgCode":"xwbank"
      })).then((res)=>{
        let data = JSON.parse(res.bodyText);
        console.log(data);
        if(data.model.respData.bankcardNo){
          this.isBindingCard = !this.isBindingCard;
          let tail = data.model.respData.bankcardNo.toString();
          this.tailNum = tail.substr(tail.length-4);
        }
        this.balance = formatNum(data.model.respData.balance);
        this.availableAmount = formatNum(data.model.respData.availableAmount);
        this.freezeAmount = formatNum(data.model.respData.freezeAmount);
      },(res)=>{
          console.log(res);
          this.$notify({
            title: '错误',
            message: '网络状态异常，请重试！',
            type: 'warning',
            duration:0
          })
      });
    }
  }
</script>
<style scoped>
  .account_record{
    margin: 40px auto;
  }
  .userRecord{
    display: block;
    width: 1176px;
    margin-top: 10px;
    padding: 12px;
    background-color: #3197ec;
    color: #ffffff;
  }
  .account_record_wrap td{
    padding: 12px;
  }
  .account_info_wrap{
    width: 1200px;
    min-height: 239px;
    border-bottom: 2px dashed #c0ccda;
  }
  .account_info_wrap td{font-size: 16px}
  .userInfo td{
    line-height: 40px;
  }
  .userMoney td{
    margin-top: 10px;
    height: 24px;
    line-height: 24px;
  }
  .binding{
    margin-left: 20px;
    text-decoration: underline;
    cursor: pointer;
    color: #20a0ff;
  }
</style>
