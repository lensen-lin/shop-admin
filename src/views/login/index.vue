<template>
  <div class="login">
    <el-form
      ref="loginForm"
      class="login-form"
    >
      <h3 class="title">
        任通行后台管理系统
      </h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          auto-complete="off"
          placeholder="账号"
          :prefix-icon="UserFilled"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          auto-complete="off"
          placeholder="密码"
          :prefix-icon="Lock"
        >
          <svg-icon
            icon-class="password"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          :prefix-icon="FolderChecked"
        >
          <svg-icon
            icon-class="validCode"
            class="el-input__icon input-icon"
          />
        </el-input>
        <div class="login-code">
          <img
            :src="codeUrl"
            @click="getCode"
            class="login-code-img"
          >
        </div>
      </el-form-item>
      <el-checkbox
        style="margin: 0px 0px 25px 0px"
      >
        记住密码
      </el-checkbox>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width: 100%"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>版权所有 ©分米互联科技有限公司 2019</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UserFilled, Lock, FolderChecked } from '@element-plus/icons-vue'
import { ref } from 'vue'
const loading = ref(false)
</script>

<style rel="stylesheet/scss" lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("@/assets/image/login-background.jpg");
  background-size: cover;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 350px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 38px;
}
</style>
