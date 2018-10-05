<template>
  <el-container>
    <el-header class="header">
      <h2 class="name">{{ name }}</h2>
      <div class="menu">
        <router-link
          :key="index"
          :to="item.to"
          class="item"
          v-for="(item, index) in menu"
        >
          {{ item.label }}
        </router-link>
        <router-link to="login" class="login-btn">Login</router-link>
      </div>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
      <div class="home" v-if="isHomePage">
        <div class="left-content">
          <img class="logo" src="../../assets/images/logo.png" alt="Vue logo">
          <h1>Vue Demo Site</h1>
        </div>
        <div class="right-content">
          <!-- <img class="cloud" src="../../assets/images/home_image.svg" /> -->
          <img class="elements account" src="../../assets/images/elements/account.png" />
          <img class="elements recommend" src="../../assets/images/elements/recommend.png" />
          <img class="elements search" src="../../assets/images/elements/search.png" />
        </div>
      </div>
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
