import bus from '../../helper/bus';

export default {
  methods: {
    close() {
      this.showModal = false;
    },
  },
  name: 'contact',
  data() {
    return {
      showModal: false,
      title: 'Contact Us',
    };
  },
  mounted() {
    bus.$on('open-contact-dialog', (show) => {
      if (show) {
        this.showModal = true;
      }
    });
  },
};
