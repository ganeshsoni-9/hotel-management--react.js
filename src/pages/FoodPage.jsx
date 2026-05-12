import "./FoodPage.css";

import { useState } from "react";

import {
  FaStar,
  FaLeaf,
  FaPepperHot,
  FaShoppingCart,
  FaSearch,
  FaMusic,
  FaClock,
  FaTrash,
  FaPlus,
  FaMinus,
  FaTimes
} from "react-icons/fa";

const FoodPage = () => {

  /* =========================================================
      FOOD DATA
  ========================================================= */

  const foodData = [
    {
      id: 1,

      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641",

      title: "Royal Paneer Tikka",

      category: "Indian",

      description:
        "Royal Paneer Tikka is a luxurious Indian appetizer crafted with fresh paneer cubes marinated in rich yogurt, aromatic spices, and creamy herbs. The paneer is grilled over charcoal to achieve a smoky flavor and golden texture that melts perfectly in every bite. Served with mint chutney, fresh onion salad, and elegant presentation, this dish delivers a premium dining experience loved by food enthusiasts. Its authentic royal taste, balanced spices, and restaurant-style serving make it one of the finest vegetarian delicacies for lunch, dinner, or special occasions with family and friends.",

      price: 450,

      rating: 5,

      veg: true,

      spicy: "Medium",

      reviews: "2.5k Reviews"
    },

    {
      id: 2,

      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",

      title: "Luxury Pasta",

      category: "Italian",

      description:
        "Luxury Pasta is prepared using premium imported Italian pasta blended with creamy white sauce, rich parmesan cheese, fresh herbs, and exotic vegetables. Every bite offers smooth texture and authentic continental flavor crafted by professional chefs. Served with crispy garlic bread and elegant plating, this pasta creates a complete fine-dining experience for guests who love sophisticated cuisine. The balanced seasoning, creamy richness, and fresh ingredients make it a favorite choice for both casual dining and luxury dinner occasions. Perfect for pasta lovers seeking comfort, taste, and restaurant-quality presentation in every serving.",

      price: 650,

      rating: 4.9,

      veg: true,

      spicy: "Low",

      reviews: "1.9k Reviews"
    },

    {
      id: 3,

      image:
        "https://imgs.search.brave.com/DE2w6ej97SysB8P6kZQaaebefM2A_fpeuYKK96osQNE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYm9uYXBwZXRp/dC5jb20vcGhvdG9z/LzU3YmYyN2FjNDM5/NWMwNTgyYmI2MmYz/Yi8xOjEvd182NDAs/Y19saW1pdC9jb2xk/LXNlc2FtZS1zb2Jh/LW5vb2RsZXMtY29v/a2luZy13aXRob3V0/LXJlY2lwZXMtZm9y/LXdlYi5qcGc",

      title: "Chinese Noodles",

      category: "Chinese",

      description:
        "Chinese Noodles are stir-fried with colorful vegetables, premium sauces, aromatic seasonings, and authentic Asian spices to deliver bold flavor and irresistible aroma. Prepared by expert chefs using restaurant-style cooking techniques, this dish offers the perfect combination of spicy taste and satisfying texture. Served hot with elegant presentation, the noodles create an unforgettable luxury dining experience for food lovers who enjoy Asian cuisine. The smoky wok flavor, fresh ingredients, and balanced spices make this dish highly popular among guests seeking rich taste and premium quality in every delicious bite.",

      price: 550,

      rating: 4.8,

      veg: false,

      spicy: "High",

      reviews: "3.1k Reviews"
    },

    {
      id: 4,

      image:
        "https://imgs.search.brave.com/NX2VxpIAyZXthgjSULJrIhn75TX44WxQG8tvqgmmb9E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlYmFraW5nY2hv/Y29sYXRlc3MuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA0L3B1ZGRpbmct/MS5qcGc",

      title: "Golden Dessert",

      category: "Desserts",

      description:
        "Golden Dessert is a premium sweet delicacy layered with rich chocolate cream, luxury toppings, smooth textures, and irresistible sweetness. Carefully prepared for dessert lovers who appreciate elegant presentation and unforgettable flavors, this dish creates a delightful ending to every meal. The creamy layers, decorative garnishing, and balanced sweetness provide a sophisticated fine-dining experience suitable for celebrations, parties, or family dinners. Served chilled with beautiful plating, Golden Dessert combines visual elegance with delicious taste, making it one of the most loved desserts for guests seeking comfort and luxury in every spoonful.",

      price: 350,

      rating: 5,

      veg: true,

      spicy: "None",

      reviews: "4.2k Reviews"
    },


    {
      id: 6,
      image: "https://imgs.search.brave.com/OHEBaMTvZWsYgwOCYHbHAWrxLh_Cog_IndEF--qDWII/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjQx/NTk3NjU0L3Bob3Rv/L3NhbmR3aWNoZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PS03YTRMaEhrRXRw/M1poVlhHdXBxSk9M/cjlJN1FQbW85VWZs/eXU2b2tERDA9",
      title: "Grilled Sandwich",
      category: "Fast Food",
      description: "A crispy grilled sandwich with fresh veggies is a perfect combination of taste and health. It is made with golden toasted bread layered with crunchy vegetables like tomatoes, onions, capsicum, cucumber, and lettuce. Creamy mayonnaise, cheese, and flavorful sauces enhance its delicious taste. The sandwich is grilled until perfectly crisp on the outside while remaining soft and warm inside. It makes an excellent breakfast, snack, or light meal option for all age groups. Rich in vitamins, fiber, and energy, this sandwich is both satisfying and nutritious. Served with ketchup or mint chutney, a crispy grilled veggie sandwich is loved for its refreshing flavor and crunchy texture.",
      price: 180,
      rating: 4.3,
      veg: true,
      spicy: "Low",
      reviews: "900 Reviews"
    },

    {
      id: 7,
      image: "https://imgs.search.brave.com/hcqV_rqEmJMG5E-nxXzTalxrA2ZRl8pviSo4t6Plltc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taW5p/c3RyeW9mY3Vycnku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA2L2NoaWNr/ZW4tYmlyeWFuaS0y/LmpwZw",
      title: "Chicken Biryani",
      category: "Indian",
      description: "Spicy and aromatic chicken biryani is one of the most loved dishes in Indian cuisine. It is prepared with fragrant basmati rice, tender chicken pieces, and a blend of rich spices such as saffron, cardamom, cloves, and biryani masala. The chicken is marinated with yogurt and spices to enhance its flavor and juiciness. Slow cooking allows the rice and chicken to absorb all the delicious aromas and taste perfectly balanced. Garnished with fried onions, fresh coriander, and mint leaves, chicken biryani becomes even more tempting. Served with raita or salad, this flavorful dish is perfect for family meals and celebrations.",
      price: 499,
      rating: 4.9,
      veg: false,
      spicy: "High",
      reviews: "5.1k Reviews"
    },

    {
      id: 8,
      image: "https://imgs.search.brave.com/On-sy-Frn1XmLuDcYUeV3ZIl0sFcA6UvJ3IckRdYsao/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jbG9z/ZXVwLXZlZy1waXp6/YS1zbGljZS1jb3R0/YWdlLWNoZWVzZS1n/cmVlbi12ZWdldGFi/bGVzLWNhcHNpY3Vt/cy1tb3p6YXJlbGxh/LTE3MDg5NDIzMy5q/cGc",
      title: "Veg Pizza",
      category: "Italian",
      description: "Spicy and aromatic chicken biryani is one of the most loved dishes in Indian cuisine. It is prepared with fragrant basmati rice, tender chicken pieces, and a blend of rich spices such as saffron, cardamom, cloves, and biryani masala. The chicken is marinated with yogurt and spices to enhance its flavor and juiciness. Slow cooking allows the rice and chicken to absorb all the delicious aromas and taste perfectly balanced. Garnished with fried onions, fresh coriander, and mint leaves, chicken biryani becomes even more tempting. Served with raita or salad, this flavorful dish is perfect for family meals and celebrations.",
      price: 399,
      rating: 4.7,
      veg: true,
      spicy: "Low",
      reviews: "2.3k Reviews"
    },

    {
      id: 9,
      image: "https://imgs.search.brave.com/Ld95HaGi3e2yl1tDjXmGJD54SDVowa3ifrIQCakej6A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ViLzdi/LzNiL2ViN2IzYmE2/M2VhNzdhNjk0NGRh/NTRjOGUzMDAwNDI0/LmpwZw",
      title: "French Fries",
      category: "Fast Food",
      description: "Crispy golden fries with seasoning are a popular and delicious snack loved by people of all ages. Made from fresh potatoes, the fries are cut into thin strips and deep-fried until perfectly golden and crunchy on the outside while remaining soft inside. They are tossed with flavorful seasonings such as salt, black pepper, chili flakes, garlic powder, or peri-peri spices to enhance their taste. Served hot with ketchup, mayonnaise, or cheesy dips, these fries make a perfect side dish or quick snack. Their crispy texture, mouthwatering aroma, and savory flavor make seasoned golden fries an irresistible treat for every occasion.",
      price: 120,
      rating: 4.2,
      veg: true,
      spicy: "None",
      reviews: "3.0k Reviews"
    },

    {
      id: 10,
      image: "https://imgs.search.brave.com/iEp7-7B5Ol7vZYqcw3Kp-i7pLb0mf3gJdXukJnZQLNg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iYWtl/cmJ5bmF0dXJlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMi9DaG9jb2xh/dGUtQnVuZHQtQ2Fr/ZS0xLW9mLTEtNTAw/eDc1MC5qcGc",
      title: "Chocolate Cake",
      category: "Desserts",
      description: "Soft chocolate cake with creamy layers is a delightful dessert loved by chocolate lovers everywhere. It is made with rich cocoa, soft sponge cake, and smooth creamy frosting layered perfectly between each slice. The cake has a moist texture that melts in the mouth and delivers a delicious chocolate flavor in every bite. Creamy layers of chocolate ganache or whipped cream add extra sweetness and softness to the dessert. Often decorated with chocolate chips, syrup, or fresh fruits, it looks as tempting as it tastes. Perfect for birthdays, celebrations, or special occasions, this chocolate cake brings happiness and sweetness to every moment.",
      price: 280,
      rating: 5,
      veg: true,
      spicy: "None",
      reviews: "6.1k Reviews"
    },

    {
      id: 11,
      image: "https://imgs.search.brave.com/t9SaUurMHgrZNfAgPj2SnO95TtKzwZjizV_LJj9vjZM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvSTIy/a0RZMU1zUDBqNmF0/ZEU2anhqQ2F3NFI0/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/MjAyNDEyMDVFYXN5/UGFudHJ5UGFuY2Fr/ZXMtQW1hbmRhU3Vh/cmV6LWhlcm8tanBn/LTQ4OTkzOWMxMzU2/MjQyN2NiYmFmNDBm/NzUyYTA0YTNhLmpw/Zw",
      title: "Pancakes",
      category: "Breakfast",
      description: "Fluffy pancakes with syrup are a delicious and comforting breakfast loved by many people. Made from a soft batter of flour, milk, eggs, and butter, the pancakes are cooked until golden brown and airy. Their light and fluffy texture makes every bite enjoyable and satisfying. Warm maple syrup poured over the pancakes adds sweetness and enhances their rich flavor. They are often served with fresh fruits, whipped cream, honey, or butter for extra taste and decoration. Perfect for breakfast or brunch, fluffy pancakes provide energy and happiness to start the day. Their soft texture and sweet aroma make them truly irresistible.",
      price: 220,
      rating: 4.5,
      veg: true,
      spicy: "None",
      reviews: "1.5k Reviews"
    },

    {
      id: 12,
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
      title: "Tacos",
      category: "Mexican",
      description: "Spicy chicken tacos with salsa are a flavorful and satisfying dish enjoyed by food lovers around the world. They are made with soft or crispy taco shells filled with juicy, spicy chicken cooked in rich seasonings and herbs. Fresh salsa prepared with tomatoes, onions, coriander, and chili adds a refreshing and tangy taste to the tacos. Cheese, lettuce, sour cream, and avocado can also be added for extra flavor and texture. These tacos are perfect for lunch, dinner, or parties because they are easy to eat and full of delicious taste. Their spicy, crunchy, and juicy combination makes them truly irresistible.",
      price: 350,
      rating: 4.6,
      veg: false,
      spicy: "Medium",
      reviews: "2.0k Reviews"
    },

    {
      id: 13,
      image: "https://imgs.search.brave.com/IfdFIV8EfRYw5XNonf-Z1b2aczv-D6sOPF4xXYR5iCM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTU3/NTYzODQwL3Bob3Rv/L2ZyZXNoLXNhbGFk/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz00alpVcS13N2Zk/bkxka0hjTENVMHBz/ZWUxZmZ6Ui1PVWNa/bXBxNVlGdDBjPQ",
      title: "Salad Bowl",
      category: "Healthy",
      description: "Fresh healthy vegetable salad is a nutritious and refreshing dish packed with vitamins and minerals. It is made using fresh vegetables like lettuce, cucumber, tomatoes, carrots, onions, and capsicum, which provide natural flavor and crunch. A light dressing of olive oil, lemon juice, herbs, and black pepper enhances its taste while keeping it healthy. This colorful salad is low in calories and rich in fiber, making it perfect for maintaining a balanced diet. It can be served as a side dish or a light meal for lunch and dinner. Fresh vegetable salad keeps the body energized, hydrated, and healthy every day.",
      price: 200,
      rating: 4.4,
      veg: true,
      spicy: "None",
      reviews: "800 Reviews"
    },

    {
      id: 14,
      image: "https://imgs.search.brave.com/Qcv-_kSkmXQz4DDQr37_yZrNfG0M2KtAp8lNxynXcUI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3L2Y4/L2I4L2Y3ZjhiODI0/NDQ1MjZhOGVjYmFl/MmQ1ZTQxMTRiYThk/LmpwZw",
      title: "Ice Cream Sundae",
      category: "Desserts",
      description: "Fresh healthy vegetable salad is a nutritious and refreshing dish packed with vitamins and minerals. It is made using fresh vegetables like lettuce, cucumber, tomatoes, carrots, onions, and capsicum, which provide natural flavor and crunch. A light dressing of olive oil, lemon juice, herbs, and black pepper enhances its taste while keeping it healthy. This colorful salad is low in calories and rich in fiber, making it perfect for maintaining a balanced diet. It can be served as a side dish or a light meal for lunch and dinner. Fresh vegetable salad keeps the body energized, hydrated, and healthy every day.",
      price: 180,
      rating: 4.8,
      veg: true,
      spicy: "None",
      reviews: "3.4k Reviews"
    },

    {
      id: 15,
      image: "https://imgs.search.brave.com/tImS-K2ZlUBCdIMLAFu7GPKc7A8NNbrhddPgtEy3kJU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/ZGVmX2NvbnRlbnRf/Y2F0ZWdvcnkvY2hh/bHRlLWZpcnRlLW1v/bW9zLWFuZC1zcGVj/aWFsLWZvb2RzLzYx/MjkwNzI0LTEzMTcy/MTE2MDE3NjIwNjct/NzA0NTExODYzMzI2/MDg3NTc3Ni1uLWNo/YWx0ZS1maXJ0ZS1t/b21vcy1hbmQtc3Bl/Y2lhbC1mb29kcy00/LXl5NG4wLTI1MC5q/cGc_dz02NDAmcT03/NQ",
      title: "Momos",
      category: "Chinese",
      description: "Steamed dumplings with spicy dip are a delicious and comforting snack enjoyed in many cuisines. These soft dumplings are made with thin dough filled with flavorful vegetables, chicken, or meat stuffing. They are steamed until perfectly tender, making them healthy and light compared to fried snacks. The spicy dip, prepared with red chilies, garlic, soy sauce, and herbs, adds a bold and tangy flavor that enhances the taste of the dumplings. Served hot, they make an excellent appetizer or evening snack. Their juicy filling, soft texture, and spicy sauce create a mouthwatering combination loved by people of all ages.",
      price: 150,
      rating: 4.5,
      veg: false,
      spicy: "Medium",
      reviews: "2.7k Reviews"
    },

    {
      id: 16,
      image: "https://imgs.search.brave.com/lzvyS5_8QKxWcqHE7pxyLBPE6ygYJMgbFFVK8XXM8jU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE3Lzc0LzAzLzMz/LzM2MF9GXzE3NzQw/MzMzNzZfbkxoYmlI/RVNSdjNxZFNQTW9z/VWt2WEEzcWdwWjd3/NksuanBn",
      title: "Margherita Pizza",
      category: "Italian",
      description: "Classic cheese pizza with basil is a delicious and timeless Italian dish loved worldwide. It is made with a soft and crispy pizza crust topped with rich tomato sauce and plenty of melted mozzarella cheese. Fresh basil leaves add a refreshing aroma and unique flavor that perfectly complements the cheesy taste. The pizza is baked until the crust becomes golden and the cheese turns bubbly and creamy. Simple yet flavorful, this pizza is perfect for lunch, dinner, parties, or casual gatherings. Served hot with chili flakes and oregano, classic cheese pizza with basil offers a satisfying combination of crispy texture and cheesy goodness.",
      price: 420,
      rating: 4.7,
      veg: true,
      spicy: "Low",
      reviews: "4.0k Reviews"
    },

    {
      id: 17,
      image: "https://imgs.search.brave.com/Ux8p8PBvyprJVpDJbMyP5G8TBedWx-6HJfwg7DQnFGE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kZWxp/Y2lvdXMtdmVnLXRo/YWxpLTI5NTExNDYy/Mi5qcGc",
      title: "Veg Thali",
      category: "Indian",
      description: "A complete Indian meal plate is a colorful and flavorful combination of different dishes served together for a balanced dining experience. It usually includes rice, chapati or naan, dal, vegetable curry, paneer or meat dish, salad, pickle, papad, and curd. The meal offers a perfect mix of carbohydrates, proteins, vitamins, and spices that create rich taste and nutrition. Traditional Indian spices such as turmeric, cumin, coriander, and garam masala enhance the aroma and flavor of every dish. Sweet dishes like gulab jamun or kheer are often served at the end. A complete Indian meal represents India’s rich culture, hospitality, and culinary diversity beautifully.",
      price: 320,
      rating: 4.8,
      veg: true,
      spicy: "Medium",
      reviews: "5.0k Reviews"
    },

    {
      id: 18,
      image: "https://imgs.search.brave.com/6kvIz4mL0-l0RUUNdEWR9xpxC1Fz6-plTHOGYKLlGF4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMxLzI5/LzMwLzMxMjkzMDQ3/NmYwNTg0NmY0ZTNm/NDdjOWEyMGViYjM3/LmpwZw",
      title: "Sushi Platter",
      category: "Japanese",
      description: "Fresh sushi with soy sauce is a popular Japanese dish known for its delicate flavors and beautiful presentation. It is made using soft vinegared rice combined with fresh seafood, vegetables, or seaweed. Sushi rolls and pieces are carefully prepared to create a perfect balance of texture and taste. Soy sauce adds a salty and savory flavor that enhances the freshness of the sushi. Pickled ginger and wasabi are often served alongside to provide extra spice and refresh the palate. This dish is light, healthy, and rich in nutrients like protein and omega-3 fatty acids. Fresh sushi with soy sauce offers a unique and satisfying dining experience.",
      price: 799,
      rating: 4.9,
      veg: false,
      spicy: "Low",
      reviews: "2.2k Reviews"
    },

    {
      id: 19,
      image: "https://imgs.search.brave.com/wA7_A9FVP-_3oFM_GPwgcGogwOFpaOmHCbU6BO-5UOE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/MDY0LzkxOC9zbWFs/bC9hLWNsb3NldXAt/c2hvdC1vZi10ZW5k/ZXItYmJxLWNoaWNr/ZW4taXRzLWp1aWN5/LW1lYXQtZmFsbGlu/Zy1vZmYtdGhlLWJv/bmUtY29hdGVkLWlu/LWEtZmllcnktcmVk/LW1hcmluYWRlLWFu/ZC10b3BwZWQtd2l0/aC1jaGFycmVkLWJp/dHMtb2YtY2FyYW1l/bGl6ZWQtb25pb25z/LXBob3RvLmpwZw",
      title: "BBQ Chicken",
      category: "Grill",
      description: "Smoky grilled BBQ chicken is a flavorful and juicy dish loved by barbecue enthusiasts. The chicken is marinated with a rich blend of spices, herbs, and smoky barbecue sauce that gives it a delicious taste and aroma. It is grilled over high heat until the outside becomes slightly crispy and charred while the inside remains tender and juicy. The smoky flavor combined with sweet and spicy barbecue sauce creates a mouthwatering experience in every bite. Served with fries, salad, or grilled vegetables, BBQ chicken makes a perfect meal for parties, family dinners, and outdoor gatherings. Its bold flavor and smoky texture make it truly irresistible.",
      price: 599,
      rating: 4.9,
      veg: false,
      spicy: "High",
      reviews: "3.8k Reviews"
    },

    {
      id: 20,
      image: "https://imgs.search.brave.com/wqkaV9cHXBplDyrl3B7LNnRMBvetnCgJ9syI6rjRJ6s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhjLzQ1/LzY2LzhjNDU2NjY4/MDE2NWE5MmNhN2Qy/OGVkMTgzYTBlZDVl/LmpwZw",
      title: "Hot Dog",
      category: "Fast Food",
      description: "Classic hot dog with sauces is a popular fast-food snack enjoyed by people of all ages. It consists of a soft bun filled with a juicy sausage that is grilled or steamed to perfection. The hot dog is topped with flavorful sauces such as ketchup, mustard, mayonnaise, and sometimes chili or cheese sauce for extra taste. Fresh onions, pickles, and lettuce can also be added to enhance the flavor and texture. Served hot, it makes a quick and satisfying meal for parties, street food cravings, or casual outings. Its smoky sausage, soft bread, and tasty sauces create a delicious combination loved worldwide.",
      price: 199,
      rating: 4.3,
      veg: false,
      spicy: "Low",
      reviews: "1.1k Reviews"
    }
  ];

  /* =========================================================
      STATES
  ========================================================= */

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const [selectedFood, setSelectedFood] = useState(null);

  /* =========================================================
      FILTER
  ========================================================= */

  const filteredFood = foodData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  /* =========================================================
      ADD TO CART
  ========================================================= */

  const addToCart = (food) => {

    const existingItem = cart.find(
      (item) => item.id === food.id
    );

    if (existingItem) {

      setCart(
        cart.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...food,
          quantity: 1
        }
      ]);

    }
  };

  /* =========================================================
      INCREASE QUANTITY
  ========================================================= */

  const increaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };

  /* =========================================================
      DECREASE QUANTITY
  ========================================================= */

  const decreaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1
            }
          : item
      )
    );
  };

  /* =========================================================
      DELETE ITEM
  ========================================================= */

  const deleteItem = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  /* =========================================================
      TOTAL
  ========================================================= */

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (

    <div className="food-page">

      {/* HERO */}

      <section className="food-hero">

        <h1>Luxury Dining Experience</h1>

        <p>
          Taste premium dishes prepared by
          world-class chefs with luxury ambiance.
        </p>

      </section>

      {/* SEARCH */}

      <section className="search-section">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search luxury food..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </section>

      {/* FOOD GRID */}

      <section className="food-grid">

        {filteredFood.map((food) => (

          <div
            className="food-card"
            key={food.id}
          >

            <img
              src={food.image}
              alt={food.title}
              className="food-image"
            />

            <div className="food-content">

              <h2>{food.title}</h2>

              <p>
                {food.description.slice(0, 100)}...
              </p>

              <div className="food-info">

                <span>
                  <FaStar />
                  {food.rating}
                </span>

                <span>
                  <FaPepperHot />
                  {food.spicy}
                </span>

                <span>
                  <FaLeaf />
                  {food.veg
                    ? "Veg"
                    : "Non-Veg"}
                </span>

              </div>

              <h3>₹ {food.price}</h3>

              <div className="food-buttons">

                <button
                  className="cart-btn"
                  onClick={() =>
                    addToCart(food)
                  }
                >
                  <FaShoppingCart />
                  Add To Cart
                </button>

                <button
                  className="view-btn"
                  onClick={() =>
                    setSelectedFood(food)
                  }
                >
                  View Details
                </button>

              </div>

            </div>

          </div>

        ))}

      </section>

      {/* MODAL */}

      {selectedFood && (

        <div className="food-modal">

          <div className="food-modal-content">

            {/* CLOSE BUTTON */}

            <button
              className="close-btn"
              onClick={() =>
                setSelectedFood(null)
              }
            >
              <FaTimes />
            </button>

            {/* LEFT IMAGE */}

            <img
              src={selectedFood.image}
              alt={selectedFood.title}
              className="modal-image"
            />

            {/* RIGHT DETAILS */}

            <div className="modal-details">

              <h1>
                {selectedFood.title}
              </h1>

              <p>
                {selectedFood.description}
              </p>

              <div className="modal-review">

                ⭐ {selectedFood.rating}

                {" "}({selectedFood.reviews})

              </div>

              <button
                onClick={() =>
                  addToCart(selectedFood)
                }
              >
                <FaShoppingCart />

                Add To Cart
              </button>

            </div>

          </div>

        </div>

      )}

     

      {/* CART */}

      <section className="cart-section">

        <h1>Your Cart</h1>

        {cart.length === 0 ? (

          <p>No food added yet.</p>

        ) : (

          cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              {/* IMAGE + DESCRIPTION */}

              <img
                src={item.image}
                alt={item.title}
                className="cart-image"
              />

              <div className="cart-details">

                <h3>{item.title}</h3>

                <p className="cart-desc">

                  {item.description.slice(
                    0,
                    120
                  )}
                  ...

                </p>

                <p>₹ {item.price}</p>

              </div>

              <div className="cart-actions">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  <FaMinus />
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  <FaPlus />
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteItem(item.id)
                  }
                >
                  <FaTrash />
                </button>

              </div>

            </div>

          ))

        )}

        <h2 className="total-price">
          Total : ₹ {totalPrice}
        </h2>

      </section>

    </div>
  );
};

export default FoodPage; 