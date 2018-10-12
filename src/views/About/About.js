import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'content',
      'title',
    ]),
  },
  name: 'about',
  created() {
    this.$store.dispatch('getAbout');
  },
  data() {
    return {
      // Content should be able to be modified if current user is an admin in the future
    };
  },
};
