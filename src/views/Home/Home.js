import bus from '../../helper/bus';
import { Contact, Introduction } from '../../components';

export default {
  components: {
    'contact-dialog': Contact,
    Introduction,
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
          to: 'about',
          label: 'About',
        },
        {
          to: 'menu',
          label: 'Menu',
        },
      ],
      name: 'Vue Demo',
    };
  },
};
