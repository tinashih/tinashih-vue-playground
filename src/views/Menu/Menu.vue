<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <el-row align="center" class="services" type="flex" justify="center">
      <el-col
        :key="index"
        :xs="12"
        :sm="10"
        :md="8"
        :lg="6"
        :xl="4"
        class="card"
        v-for="(item, index) in items"
      >
        <el-card class="service front" shadow="hover">
          <img :src="item.src" class="image">
          <div>
            <h3>{{ item.title }}</h3>
            <div>
              {{ item.description }}
            </div>
          </div>
        </el-card>
        <el-card class="service back" shadow="hover">
          <ul>
            <li :key="index" class="sub-items" v-for="(sub, index) in item.subItems">{{ sub }}</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from './Menu';

export default Menu;
</script>

<style lang="scss" scoped>
  @import 'Menu'
</style>
