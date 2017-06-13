<!--平台总账户-->

<template>
  <div>
    <transfer-dialog ref="transfer"></transfer-dialog>
    <recharge-dialog ref="rechargeChild" v-if="whichModule === 'recharge' "></recharge-dialog>
    <withdraw-money v-else-if="whichModule === 'drawMoney'"></withdraw-money>
    <template v-else>
      <div class="account_info">
        <table class="account_info_wrap">
          <thead>
          <tr><th style="text-align: left;font-size: 20px">总账户基本资料</th></tr>
          </thead>
          <tbody class="userInfo" style="float: left;margin-top: 30px">
          <tr>
            <td>账户名称：</td>
            <td>平台总账户</td>
            <td>账户编号：</td>
            <td>SYS_GENERATE_000</td>
          </tr>
          <tr>
            <td>账户说明：</td>
            <td colspan="3" >用于平台资金划拨，可以将该账户资金派拨给其他平台账户</td>
          </tr>
          <tr>
            <td>绑定对公账户：</td>
            <td v-show="isBindingCard">尚未绑定银行对公账户<span class="binding">绑定</span></td>
            <td v-show="!isBindingCard">您已绑定银行对公账户：尾号{{tailNum}}<span class="binding" @click="unbind('SYS_GENERATE_000')">解绑</span></td>
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
      <div class="account_record">
        <el-form :module="recordForm" ref="recordForm">
        <table class="account_record_wrap">
          <thead>
          <tr><th style="text-align: left;font-size: 20px;">平台总账户资金记录</th></tr>
          </thead>
          <tbody class="userRecord">
          <tr>
            <td>平台交易流水号</td>
            <td>
              <el-input v-model="recordForm.platformNumber"></el-input>
            </td>
            <td>账户类型</td>
            <td>
              <el-select v-model="recordForm.value_account" placeholder="请选择">
                <el-option
                  v-for="item in account_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
            <td>交易类型</td>
            <td>
              <el-select v-model="recordForm.value_type" placeholder="请选择">
                <el-option
                  v-for="item in transaction_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td>交易时间</td>
            <td>
              <div class="block">
                <el-date-picker
                  v-model="recordForm.startTime"
                  type="datetime"
                  placeholder="选择起始日期时间"
                  align="right"
                  :picker-options="pickerOptions1">
                </el-date-picker>
              </div>
            </td>
            <td style="border-bottom: 1px solid #ffffff;display: block;width: 10%;margin-left: 25px"></td>
            <td>
              <div class="block">
                <el-date-picker
                  v-model="recordForm.endTime"
                  type="datetime"
                  placeholder="选择结束日期时间"
                  align="right"
                  :picker-options="pickerOptions1">
                </el-date-picker>
              </div>
            </td>
            <td>
              <el-button type="text" style="color: white" @click="query">查询</el-button>
            </td>
          </tr>
          </tbody>
        </table>
        </el-form>
        <div style="margin-top: 15px">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="num"
              label="序号"
              width="80">
            </el-table-column>
            <el-table-column
              prop="date"
              label="交易时间"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="交易流水号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="交易类型"
              width="100">
            </el-table-column>
            <el-table-column
              prop="address"
              label="类别"
              width="100">
            </el-table-column>
            <el-table-column
              prop="address"
              label="交易金额"
              width="100">
            </el-table-column>
            <el-table-column
              prop="address"
              label="可用余额"
              width="100">
            </el-table-column>
            <el-table-column
              prop="address"
              label="到账账户"
              width="100">
            </el-table-column>
            <el-table-column
              prop="address"
              label="备注">
            </el-table-column>
          </el-table>
        </div>
        <div class="user_total" style="margin-top:10px">
          <div style="float:left;">
            <p style="font-size: 14px;color:#828282;line-height: 40px">合计，收入：1287832787元；支出：2731897318.0元</p>
          </div>
          <div class="block" style="float: right">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="4"
              layout="total, prev, pager, next"
              :total="100">
            </el-pagination>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  import formatNum from "../../config/formatNum";
  import addSign from "../../config/addSign";
  import RechargeDialog from '../common/Recharge.vue';
  import WithdrawMoney from '../common/WithdrawMoney.vue';
  import TransferDialog from '../common/TransferDialog.vue';
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  export default {
    components:{
      ElForm,
      RechargeDialog,
      WithdrawMoney,
      TransferDialog
    },
    data(){
      return{
        account_options: "",
        recordForm:{
          platformNumber:"",
          value_account:"",
          value_type:"",
          startTime:"",
          endTime:""
        },
        transaction_options:[{
            value: '选项1',
            label: '资金划拨'
          }, {
            value: '选项2',
            label: '充值'
          },
          {
            value: '选项3',
            label: '提现扣除'
          },
          {
            value: '选项4',
            label: '提现回退'
          },
          {
            value: '选项5',
            label: '不限'
          }
        ],
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        tableData: "",
        value0:"",
        value_account: '平台总账户',
        value_transaction: '不限',
        value3: '',
        value4: '',
        platformNumber:'',
        currentPage:1,
        balance:"",
        availableAmount:"",
        freezeAmount:"",
        tailNum:'',
        isDrawMoney:true,
        isTransfer:true,
        isBindingCard:true,
        whichModule:"",
      }
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      recharge(){
          this.whichModule =  "recharge";
      },
      drawMoney(){
          this.whichModule = "drawMoney";
      },
      transfor(){
          this.$refs.transfer.dialogVisible = !this.$refs.transfer.dialogVisible
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
      query(){
        console.log(this.recordForm)
      }
    },
    mounted(){
      this.$http.post("/api/order/selectDownOrder",addSign({
        "platformUserNo":"SYS_GENERATE_000",
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
