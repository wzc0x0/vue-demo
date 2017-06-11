<template>
  <div>
      <el-radio-group v-model="radio" @change="whichBank">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content"><el-radio :label="'BKHK'">备选项</el-radio></div></el-col>
          <el-col :span="6"><div class="grid-content"><el-radio :label="'CIBK'">备选项</el-radio></div></el-col>
          <el-col :span="6"><div class="grid-content"><el-radio :label="'EVER'">备选项</el-radio></div></el-col>
          <el-col :span="6"><div class="grid-content"><el-radio :label="'GDBK'">备选项</el-radio></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content"><el-radio :label="'ABOC'">备选项</el-radio></div></el-col>
          <el-col :span="6"><div class="grid-content"><el-radio :label="'BKCH'">备选项</el-radio></div></el-col>
          <el-col :span="6"><div class="grid-content"><el-radio :label="'EVER'">备选项</el-radio></div></el-col>
          <el-col :span="6"><div class="grid-content"><el-radio :label="'GDBK'">备选项</el-radio></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content"><el-radio :label="'BKHK'">备选项</el-radio></div></el-col>
          <el-col :span="6"><div class="grid-content"><el-radio :label="'CIBK'">备选项</el-radio></div></el-col>
          <el-col :span="6"><div class="grid-content"><el-radio :label="'CIBK'">备选项</el-radio></div></el-col>
        </el-row>
      </el-radio-group>
      <div class="showMsg_wrap" style="margin: 40px auto">
        <div style="width: 50%;margin: auto">
          <p>总账户可用余额：<span>00000000000000</span>元</p>
          <div style="margin: 20px 0">充值金额<el-input style="width: 80%;margin: 0 10px" ></el-input>元</div>
          <div style="text-align: center"><el-button type="primary" @click="dialogFormVisible = false">充  值</el-button></div>
        </div>
      </div>
  </div>
</template>
<script>
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElCol from "element-ui/packages/col/src/col";
  export default{
    components: {
      ElCol,
      ElInput},
    data(){
          return{
            radio:'BKHK'
        }
      },
      methods:{
        whichBank(value){
            console.log(value);
        }
      }
  }
</script>
<style scoped>
  .showMsg_wrap{
    width: 80%;
    margin: 40px auto;
    font-size: 16px;
  }
</style>
