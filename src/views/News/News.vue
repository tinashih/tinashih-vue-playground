<template>
  <div class="container">
    <!-- Should has CRUD if current user is an admin in the future -->
    <h1 class="title">News</h1>
    <el-collapse accordion>
      <el-collapse-item :key="index" :name="index" v-for="(item, index) in news">
        <template slot="title">
          {{ item.title }}
        </template>
        <div>{{ item.content }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import News from './News';

export default News;
</script>

<style lang="scss" scoped>
  @import 'News'
</style>
