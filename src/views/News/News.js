import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('news', [
      'news',
    ]),
  },
  name: 'news',
  created() {
    this.$store.dispatch('news/getNews');
  },
  data() {
    return {
      // Content should be able to be modified in the admin part in the future
    };
  },
};
