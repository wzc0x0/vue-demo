<template>
  <div class="account_record">
    <el-form :module="recordForm" ref="recordForm">
      <table class="account_record_wrap">
        <thead>
        <tr><th style="text-align: left;font-size: 20px;">{{recordTitle}}</th></tr>
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
          :page-size="20"
          layout="total, prev, pager, next"
          :total="100">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:["recordTitle"],
    data() {
      return {
        account_options: "",
        value_account: '平台总账户',
        value_transaction: '不限',
        tableData: [],
        currentPage:1,
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
        }
      }
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      query(){
        this.$emit("query",this.recordForm) //传递给父组件
      }
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
</style>
