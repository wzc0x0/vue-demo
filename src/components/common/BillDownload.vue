<template>
  <div class="bill_wrap">
    <table class="bill_download" style="float: left;margin-top: 30px">
      <thead><tr><th style="text-align: left;font-size: 20px">平台对账账单下载</th></tr></thead>
      <tbody>
        <tr>
          <td style="color: #828282">交易时间：</td>
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
          <td>
            <el-button type="primary">下载</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="auth_status" style="float: left;margin-top: 30px">
      <thead><tr><th style="text-align: left;font-size: 20px">平台授权设置</th></tr></thead>
      <tbody>
        <tr>
          <td><img src="../../assets/image/icon_chong.png" alt=""></td>
          <td><img src="../../assets/image/icon_ti.png" alt=""></td>
          <td><img src="../../assets/image/icon_huan.png" alt=""></td>
          <td><img src="../../assets/image/icon_chang.png" alt=""></td>
        </tr>
        <tr style="font-size:14px">
          <td>自动充值</td>
          <td>自动提现</td>
          <td>自动还款</td>
          <td>自动代偿</td>
        </tr>
        <tr style="font-size: 12px;color: #828282;text-align: center">
          <td>已设置</td>
          <td>已设置</td>
          <td>已设置</td>
          <td>已设置</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default{
      data(){
          return{
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
            value3:''
          }
      }
  }
</script>
<style scoped>
  tbody{
    margin-top: 20px;
    display: block;
  }
  .bill_wrap{
    width:inherit;
    height: 190px;
    border-bottom: 2px #c0ccda dashed;
  }
  .bill_download{
    width: 680px;
  }
  .bill_download tbody td{
    line-height: 40px;
    padding-right: 20px;
  }
  .auth_status tbody td{
    line-height: 24px;
    padding-left: 60px;
  }
</style>
