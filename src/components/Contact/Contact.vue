<template>
  <el-dialog
    :before-close="close"
    :visible.sync="showModal"
    class="container"
    title="Contact Us"
    width="50%"
  >
    <div class="content">
      <div class="item">
        <span class="item-left">Email:</span>
        <span class="item-right">foo@bar.com</span>
      </div>
      <div class="item">
        <span class="item-left">Phone:</span>
        <span class="item-right">+1234567890</span>
      </div>
      <div class="item">
        <span class="item-left">Address:</span>
        <span class="item-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">Close</el-button>
    </span>
  </el-dialog>
</template>

<script>
import Contact from './Contact';

export default Contact;
</script>

<style lang="scss" scoped>
  @import 'Contact'
</style>
