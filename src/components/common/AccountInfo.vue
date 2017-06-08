<template>
  <div class="account_info">
    <div style="padding-bottom: 40px" v-show="isPartner">
      <span style="font-size: 18px;color: #cccccc">请选择合作商户：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <table class="account_info_wrap">
      <thead>
        <tr><th style="text-align: left;font-size: 20px">{{accountTitle}}</th></tr>
      </thead>
      <tbody class="userInfo" style="float: left;margin-top: 30px">
        <tr>
          <td>账户名称：</td>
          <td>{{accountName}}</td>
          <td>账户编号：</td>
          <td>{{accountNumber}}</td>
        </tr>
        <tr>
          <td>账户说明：</td>
          <td colspan="3" >{{accountExplain}}</td>
        </tr>
        <tr>
          <td>绑定对公账户：</td>
          <td>尚未绑定银行对公账户<span style="margin-left: 20px">绑定</span></td>
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
          <td><el-button type="primary">充值</el-button></td>
          <td><el-button type="primary" v-show="isDrawMoney">提现</el-button></td>
          <td><el-button type="primary" v-show="isTransfer">资金划拨</el-button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import {Url} from "../../config/env";
  import ajax from "../../config/ajax"
  export default {
    props:{
      accountTitle:String,
      accountNumber:String,
      accountName:String,
      accountExplain:String,
      isPartner:Boolean,
      isDrawMoney:Boolean,
      isTransfer:Boolean
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
       /* infoDetail:{
          "index": {
            "infoTitle": "总账户基本资料",
            "accountTitle": "平台总账户资金记录"
          },
          "daichang": {
            "infoTitle": "代偿金账户基本资料",
            "accountTitle": "代偿金账户资金记录"
          },
          "fenrun": {
            "infoTitle": "平台分润账户基本资料",
            "accountTitle": "平台分润账户资金记录"
          },
          "income": {
            "infoTitle": "收入账户基本资料",
            "accountTitle": "平台收入账户资金记录"
          },
          "marketing": {
            "infoTitle": "营销款账户基本资料",
            "accountTitle": "平台营销款账户资金记录"
          },
          "paixi": {
            "infoTitle": "平台派息账户基本资料",
            "accountTitle": "平台派息账户资金记录"
          },
          "daichongzhi": {
            "infoTitle": "平台代充值基本资料",
            "accountTitle": "平台代充值账户资金记录"
          },
          "partner": {
            "infoTitle": "平台合作方账户基本资料",
            "accountTitle": "平台合作方账户资金记录"
          }
        },*/
        value:'北京烤鸭',
        balance:'',
        availableAmount:'',
        freezeAmount:''
      }
    },
    created(){
        let currentPath = this.$route.path.replace("/","");
        switch (currentPath){
          case "index":
        }
        this.$http.post("/api/order/selectDownOrder",{
            "platformUserNo":"SYS_GENERATE_000",
            "orderType":"4001",
            "orderSource":"1",
            "orgCode":"xwbank"
          }).then((res)=>{
            let data = JSON.parse(res.bodyText);
            console.log(data);
            this.balance = data.model.respData.balance;
            this.availableAmount = data.model.respData.availableAmount;
            this.freezeAmount = data.model.respData.freezeAmount;

        });

    }
  }
</script>
<style scoped>
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



</style>
