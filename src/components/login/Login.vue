<template>
  <div class="login">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <div class="btns">
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      var _this = this;
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false;
        }
        // 发送请求进行登录
        axios.post("http://10.102.10.33:8002/vueTest/login", {
            form: _this.loginForm,
          })
          .then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              // 将token存储到localStorage中,后期调用接口将token一并发送给后台服务器
              localStorage.setItem('token',res.data.data.token)
              this.$router.push({ name: "home" });
            }
          });
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
}
.el-form {
  width: 40%;
  min-width: 400px;
  height: 25%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #cccccc;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
}
.el-form-item__label {
  text-align: justify;
  justify-content: space-between;
  /* text-align-last: justify; */
}
.btns{
  width: 60%;
  height: 40px;
  position: relative;
  float: right;
  top: 20px;
}
.btns button{
  float: right;
  margin-right: 20px;
}
.btns button:first-child{
  margin-right: 0;
}
</style>
