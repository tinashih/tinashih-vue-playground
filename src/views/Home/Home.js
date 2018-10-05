export default {
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
        {
          to: 'contact',
          label: 'Contact Us',
        },
      ],
      name: 'Vue Demo',
    };
  },
};
