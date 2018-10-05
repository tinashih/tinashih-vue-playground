export default {
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  },
  name: 'home',
  data() {
    return {
      menu: [
        {
          to: 'home',
          label: 'Home',
        },
        {
          to: 'about',
          label: 'About',
        },
        {
          to: 'services',
          label: 'Services',
        },
        {
          to: 'contact',
          label: 'Contact Us',
        },
      ],
      name: 'Vue Demo',
    };
  },
};
