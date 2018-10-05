<template>
  <div class="main">
    <div class="background"></div>
    <div class="about">
      <h1>{{ title }}</h1>
      <div class="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
import About from './About';

export default About;
</script>

<style lang="scss" scoped>
  @import 'About'
</style>
