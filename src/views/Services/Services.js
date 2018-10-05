const food1 = require('../../assets/images/services/food_1.jpg');
const food2 = require('../../assets/images/services/food_2.jpg');
const food3 = require('../../assets/images/services/food_3.jpg');

export default {
  name: 'services',
  data() {
    return {
      items: [
        {
          description: 'Healthy & Delicious',
          title: 'Vegetables',
          src: food1,
        },
        {
          description: 'Different flavors to make you happy',
          title: 'Pizza',
          src: food2,
        },
        {
          description: 'Got enough fat from it!',
          title: 'Meat',
          src: food3,
        },
      ],
      title: 'Our Services',
    };
  },
};
