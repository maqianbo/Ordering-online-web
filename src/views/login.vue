<template>
  <div class="page login">
    <div class="login-form">
      <el-form>
        <el-row class="login-title">订餐管理员系统</el-row>
        <el-form-item>
          <el-input name="username" type="text" v-model="username" placeholder="用户名">
            <i class="el-icon-user-solid" slot="prefix" style="color:#fff;font-size: 15px;"></i>
          </el-input>
          <el-input
            name="password"
            type="text"
            v-model="password"
            placeholder="密码"
            style="margin-top:15px"
          >
            <i class="el-icon-lock" slot="prefix" style="color:#fff;font-size: 15px;"></i>
          </el-input>
        </el-form-item>
        <el-button type="primary" round style="width:100%">
          <span style="color:#fff" @click="login">登录</span>
        </el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import { get } from '@/api/axios.js';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  created() {},
  methods: {
    login() {
      if (this.username == 'dcgly') {
        if (this.password == '123456') {
          sessionStorage.setItem(
            'userInfo',
            JSON.stringify({
              name: this.username,
              password: this.password
            })
          );
          setTimeout(() => {
            this.$router.push({
              path: '/home'
            });
          }, 1000);

          // this.$router.push({
          //   path: '/home'
          // });
        } else {
          this.$message.error('您输入的面信息有误');
        }
      } else {
        this.$message.error('您输入的账号信息有误');
      }
    }
  }
};
</script>
<style lang="scss">
.login {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  box-sizing: border-box;
}
.login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 320px;
  padding: 35px 35px 15px;
  margin: 120px auto;
}
.login-title {
  font-size: 26px;
  color: #eee;
  margin: 0 auto 40px;
  text-align: center;
  font-weight: 700;
}
.login .el-input__inner {
  background: #2d3a4b;
  color: #fff;
}
</style>
