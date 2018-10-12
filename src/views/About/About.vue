<template>
  <div class="container">
    <div class="about">
      <h1 class="title">{{ title }}</h1>
      <div class="content">
        {{ content }}
      </div>
    </div>
    <img alt="Gourmand logo" class="logo" src="../../assets/images/logo/black_logo_no_background.png" />
  </div>
</template>

<script>
import About from './About';

export default About;
</script>

<style lang="scss" scoped>
  @import 'About'
</style>
