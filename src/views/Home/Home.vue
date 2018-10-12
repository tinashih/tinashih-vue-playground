<template>
  <el-container>
    <el-header class="header">
      <router-link to="/" class="name">
        <h2>{{ name }}</h2>
      </router-link>
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
      <div v-if="isHomePage">
        <introduction></introduction>
      </div>
      <div @click="openContact" class="contact">
        <span>Contact Us!</span>
      </div>
      <contact-dialog></contact-dialog>
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
