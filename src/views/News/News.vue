<template>
  <div class="container">
    <!-- Should has CRUD if current user is an admin in the future -->
    <h1 class="title">News</h1>
    <keep-alive>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="Consistency" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
          <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
        </el-collapse-item>
        <el-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </el-collapse-item>
      </el-collapse>
    </keep-alive>
  </div>
</template>

<script>
import News from './News';

export default News;
</script>

<style lang="scss" scoped>
  @import 'News'
</style>
