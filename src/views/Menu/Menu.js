const food1 = require('../../assets/images/services/food_1.jpg');
const food2 = require('../../assets/images/services/food_2.jpg');
const food3 = require('../../assets/images/services/food_3.jpg');

export default {
  name: 'menu',
  data() {
    return {
      items: [
        {
          description: 'Healthy & Delicious',
          title: 'Vegetables',
          src: food1,
          subItems: [
            'Meatless Masterpieces',
            'Beer-Brushed Tofu Skewers with Barley',
            'Double Barley Posole',
            'Broccolini, Red Pepper, and Roasted Garlic Frittata',
            'Mushroom Bolognese over Spaghetti Squash',
          ],
        },
        {
          description: 'Different flavors to make you happy',
          title: 'Pizza',
          src: food2,
          subItems: [
            'Double Cheese Pizza',
            'Gourmet',
            'Mexican Green Wave',
            'Peppy Paneer',
            'Margherita Pizza',
          ],
        },
        {
          description: 'Got enough fat from it!',
          title: 'Meat',
          src: food3,
          subItems: [
            'Pulled Pork Sliced',
            'Beef Brisket(Lean or Fatty)',
            'Smoked Turkey',
            'Texas Hot Link Sausage(When Available)',
            'Smoked Chicken Wings',
          ],
        },
      ],
      title: 'Menu',
    };
  },
};
