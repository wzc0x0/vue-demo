<!--绑卡弹窗-->
<template>
  <div @click="dialogFormVisible">
    <el-dialog title="绑定银行卡号" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="bindCardForm">
        <input type="hidden" v-model="form.whichClick">
        <el-form-item label="绑定银行卡号" :label-width="formLabelWidth" prop="bankcardNo">
          <el-input v-model.number="form.bankcardNo" auto-complete="off" style="width: 60%"></el-input>
        </el-form-item>
        <el-form-item label="开户行编码" :label-width="formLabelWidth" prop="bankcode">
          <el-input v-model="form.bankcode" placeholder="例如农行:ABOC" style="width: 60%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="gotoBindCard('bindCardForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import addSign from "../../config/addSign"
  export default{
    components: {ElInput},
    data(){
          return{
            dialogFormVisible: false,
            form: {
              bankcardNo: '',
              bankcode: '',
              whichClick:'',
            },
            rules:{
              bankcardNo:[
                {required: true, message: '卡号不能为空'},
                { type: 'number', message: '卡号必须为数字'}
              ],
              bankcode:[
                {required: true, message: '银行编码不能为空'},
                { min: 4, max: 4, message: '长度为4个字符', trigger: 'blur' }
              ]
            },
            formLabelWidth: '110px'
          }
      },
    methods:{
        gotoBindCard(form){
          this.$refs[form].validate((valid)=>{
              if(valid){
                  this.$http.post("/api/order/accountDownOrder",addSign({
                    "platformUserNo":this.form.whichClick,
                    "orderType":"1004",
                    "orderSource":"1",
                    "orgCode":"xwbank",
                    "redirectUrl":"http://www.baidu.com",
                    "bankcardNo":this.form.bankcardNo,
                    "bankcode":this.form.bankcode
                  })).then((res) =>{
                      console.log(res);
                      if(res.body.code == "200") {
                        window.location.href = res.body.model.respData
                      }
                  })
              }
          })
        }
    }
  }
</script>
