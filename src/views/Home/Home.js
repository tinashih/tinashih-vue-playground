import bus from '../../helper/bus';
import { Contact, Introduction } from '../../components';

export default {
  components: {
    'contact-dialog': Contact,
    Introduction,
  },
  computed: {
    getThisYear() {
      return new Date().getFullYear();
    },
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
      footer: {
        address: '3365 Columbia Boulevard, FAIRPLAY, Colorado 80440',
        contact: 'service@gourmand.com',
        phone: '(+1)410-441-0425',
        right: '',
      },
      menu: [
        {
          to: 'news',
          label: 'News',
        },
        {
          to: 'about',
          label: 'About',
        },
        {
          to: 'menu',
          label: 'Menu',
        },
      ],
      name: 'GOURMAND',
    };
  },
  mounted() {
    this.footer.right = ` ⓒ ${this.getThisYear} all right reserved.`;
  },
};
