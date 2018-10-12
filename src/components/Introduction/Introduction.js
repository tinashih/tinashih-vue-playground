export default {
  methods: {
    goAboutPage() {
      this.$router.push('/about');
    },
    goMenuPage() {
      this.$router.push('/menu');
    },
  },
  name: 'introduction',
  data() {
    return {
      title: 'Introduction',
    };
  },
};
