<template>
  <div class="container">
    <section class="section parallax bg1">
      <div class="content">
        <h1>Hola!</h1>
        <p>Welcome to Gourmand!</p>
        <p>We provide delicious food that will make you addictive.</p>
        <p>Don't be hesitated anymore, let's figure out what you want now!</p>
        <el-button @click="goAboutPage">ABOUT US</el-button>
      </div>
    </section>
    <section class="section static bg2">
      <div class="content">
        <h1>Too Lazy?</h1>
        <p>
          Just login and preservation your food,
          then you'll get hot&delicious food in a short time!
        </p>
        <p>Of course, you can find your order history with an easy click.</p>
        <el-button>SIGN IN</el-button>
      </div>
    </section>
    <section class="section parallax bg3">
      <div class="content">
        <h1>Healthy</h1>
        <p>Are you getting enough food with high calories?</p>
        <p>We know you!</p>
        <p>Start to get your healthy food today!</p>
        <el-button @click="goMenuPage">FIGURE OUT NOW!</el-button>
      </div>
    </section>
    <section class="section static bg4">
      <div class="content">
        <h1>Sunshine</h1>
        <p>Enjoy you food under the sunshine!</p>
        <p>Picnic always a great option for you and your friends!</p>
      </div>
    </section>
    <section class="section parallax bg5">
      <div class="content">
        <h1>Feedback?</h1>
        <p>Have any feedback of your food journey?</p>
        <p>We would love to hear from you!</p>
        <el-button>SEND FEEDBACK</el-button>
      </div>
    </section>
  </div>
</template>

<script>
import Introduction from './Introduction';

export default Introduction;
</script>

<style lang="scss" scoped>
  @import 'Introduction'
</style>
