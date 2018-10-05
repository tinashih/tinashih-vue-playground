<template>
  <el-container class="home">
    <el-header class="header">
      <h2 class="name">{{ name }}</h2>
      <div class="menu">
        <router-link :key="index" :to="item.to" class="item" v-for="(item, index) in menu">{{ item.label }}</router-link>
        <router-link to="login" class="login-btn">Login</router-link>
      </div>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Home from './Home';

export default Home;
</script>

<style lang="scss" scoped>
  @import 'Home'
</style>
