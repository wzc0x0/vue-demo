<template>
  <div class="account_info">
    <div style="padding-bottom: 40px" v-show="false">
      <span style="font-size: 18px;color: #cccccc">请选择合作商户：</span>
      <el-select v-model="value1" placeholder="请选择">
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
        <tr><th style="text-align: left;font-size: 20px">收入账户基本资料</th></tr>
      </thead>
      <tbody class="userInfo" style="float: left;margin-top: 30px">
        <tr>
          <td>账户名称：</td>
          <td>9999999</td>
          <td>账户编号：</td>
          <td>4156454545454</td>
        </tr>
        <tr>
          <td>账户名称：</td>
          <td colspan="3">9999999</td>
        </tr>
        <tr>
          <td>绑定对公账户：</td>
          <td>尚未绑定银行对公账户<span style="margin-left: 20px">绑定</span></td>
        </tr>
      </tbody>
      <tbody class="userMoney" style="float: right;margin: 30px 30px 0 0 ">
        <tr>
          <td>账户总额：</td>
          <td>999,999,999</td>
        </tr>
        <tr>
          <td>账户总额：</td>
          <td>999,999,999</td>
        </tr>
        <tr>
          <td>账户总额：</td>
          <td>999,999,999</td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td><el-button type="primary">充值</el-button></td>
          <td><el-button type="primary">提现</el-button></td>
          <td><el-button type="primary">资金划拨</el-button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
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
        value1:'蚵仔煎'
      }
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
