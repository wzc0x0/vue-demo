<template>
  <div class="account_record">
    <table class="account_record_wrap">
      <thead>
        <tr><th style="text-align: left;font-size: 20px;">{{recordTitle}}</th></tr>
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

</template>
<script>
  export default {
    props:{
      recordTitle:String,
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
        value1: '北京烤鸭',
        value2: '北京烤鸭',
        value3: '',
        value4: '',
        platformNumber:'',
        currentPage:1,
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
</style>
