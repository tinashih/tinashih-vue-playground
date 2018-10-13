import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('about', [
      'content',
      'title',
    ]),
  },
  name: 'about',
  created() {
    this.$store.dispatch('about/getAbout');
  },
  data() {
    return {
      // Content should be able to be modified if current user is an admin in the future
    };
  },
};
