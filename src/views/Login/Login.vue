<template>
  <div class="login">
    <el-row class="logo-block" type="flex" justify="center">
      <el-col align="middle" :offset="9" :span="6">
        <img src="../../assets/logo.png" />
      </el-col>
      <el-col align="middle" :offset="9" :span="6">
        <h1 class="title">{{ title }}</h1>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8" class="info-block">
        <el-form :model="form" :rules="formValidation" ref="form">
          <el-form-item label="Email" prop="email">
            <el-input clearable placeholder="Email" type="email" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input clearable placeholder="Password" type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="submit" type="primary" @click="submitForm('form')">Login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Login from './Login';

export default Login;
</script>

<style lang="scss" scoped>
  @import 'Login'
</style>
