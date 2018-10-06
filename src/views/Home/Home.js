import bus from '../../helper/bus';
import Components from '../../components';

export default {
  components: {
    'contact-dialog': Components.Contact,
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  },
  methods: {
    openContact() {
      bus.$emit('open-contact-dialog', true);
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
          to: 'projects',
          label: 'Projects',
        },
      ],
      name: 'Vue Demo',
    };
  },
};
