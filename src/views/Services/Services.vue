<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <el-row align="center" class="services" type="flex" justify="center">
      <el-col :key="index" :span="8" v-for="(item, index) in items">
        <el-card class="service" shadow="hover">
          <img :src="item.src" class="image">
          <div>
            <h3>{{ item.title }}</h3>
            <div>
              {{ item.description }}
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Services from './Services';

export default Services;
</script>

<style lang="scss" scoped>
  @import 'Services'
</style>
