export default {
  methods: {
  },
  name: 'about',
  data() {
    return {
      // Content should be able to be modified in the admin part in the future
      news: [
        {
          content: `
            Consistent with real life: in line with the process and logic of real life,
            and comply with languages and habits that the users are used to;
            Consistent within interface: all elements should be consistent,
            such as: design style, icons and texts, position of elements, etc.
          `,
          title: 'Consistency',
        },
        {
          content: `
            Operation feedback: enable the users to clearly perceive their operations
            by style updates and interactive effects;
            Visual feedback: reflect current state by updating or
            rearranging elements of the page.
          `,
          title: 'Feedback',
        },
      ],
      title: 'About Us',
    };
  },
};
