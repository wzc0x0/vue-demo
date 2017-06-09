<!--代偿金账户-->
<template>
  <div>
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
          <td><el-button type="primary" @click="Rechange">充值</el-button></td>
          <td><el-button type="primary" v-show="isDrawMoney">提现</el-button></td>
          <td><el-button type="primary" v-show="isTransfer">资金划拨</el-button></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="account_record">
      <table class="account_record_wrap">
        <thead>
        <tr><th style="text-align: left;font-size: 20px;">代偿金账户资金记录</th></tr>
        </thead>
        <tbody class="userRecord">
        <tr>
          <td>平台请求流水号</td>
          <td>
            <el-input v-model="platformNumber"></el-input>
          </td>
          <td>账户类型</td>
          <td>
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
          <td>交易类型</td>
          <td>
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td>交易时间：</td>
          <td>
            <div class="block">
              <el-date-picker
                v-model="value3"
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
                v-model="value4"
                type="datetime"
                placeholder="选择结束日期时间"
                align="right"
                :picker-options="pickerOptions1">
              </el-date-picker>
            </div>
          </td>
          <td>
            <el-button type="text" style="color: white">查询</el-button>
          </td>
        </tr>
        </tbody>
      </table>
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
  </div>
</template>
<script>
  export default {
    data(){
      return{
        isPartner:false,
        isDrawMoney:true,
        isTransfer:true,
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海'
        }],
        value0:"",
        value1: '北京烤鸭',
        value2: '北京烤鸭',
        value3: '',
        value4: '',
        platformNumber:'',
        currentPage:1,
        balance:"",
        availableAmount:"",
        freezeAmount:""
      }
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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

