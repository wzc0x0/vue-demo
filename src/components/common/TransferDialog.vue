<!--资金划拨-->
<template>
  <div @click="dialogVisible = !dialogVisible">
    <el-dialog
      title="资金划拨操作"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <el-form :model="ruleForm"  ref="ruleForm" label-width="110px">
        <el-form-item label="总账户可用余额">
        </el-form-item>
        <el-form-item label="资金划拨方向" prop="whereTransfer">
          <el-select v-model="ruleForm.whereTransfer" placeholder="请选择资金划拨方向">
            <el-option label="代偿金账户" value="SYS_001"></el-option>
            <el-option label="分润账户" value="SYS_002"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="划拨资金金额" prop="howMuch" :rules="[
             { required: true, message: '划拨金额不能为空'},
             { type: 'number', message: '金额必须为数字'}
          ]">
            <el-input type="howMuch" v-model.number="ruleForm.howMuch"></el-input>
        </el-form-item>
        <el-form-item label="短信验证码">
          <el-input v-model="ruleForm.code"></el-input><el-button type="text">获取</el-button>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElInputNumber from "../../../node_modules/element-ui/packages/input-number/src/input-number";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {
      ElButton,
      ElInputNumber,
      ElInput,
      ElFormItem},
    data(){
      return{
        dialogVisible:false,
        ruleForm:{
          whereTransfer:"",
          howMuch:"",
          code:"",
          desc:""
        }
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
<style scoped>

</style>
