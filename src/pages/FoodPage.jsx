import "./FoodPage.css";

import { useState } from "react";

import {
  FaStar,
  FaLeaf,
  FaPepperHot,
  FaShoppingCart,
  FaSearch,
  FaTrash,
  FaPlus,
  FaMinus,
  FaTimes,
  FaClock,
  FaFire,
  FaUtensils,
  FaHeart,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt
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
      "Royal Paneer Tikka is a luxurious Indian appetizer crafted with fresh paneer cubes marinated in rich yogurt, aromatic spices, and creamy herbs.",
    price: 450,
    rating: 5,
    veg: true,
    spicy: "Medium",
    reviews: "2.5k Reviews",
    time: "25 mins"
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    title: "Luxury Pasta",
    category: "Italian",
    description:
      "Luxury Pasta is prepared using premium imported Italian pasta blended with creamy white sauce and parmesan cheese.",
    price: 650,
    rating: 4.9,
    veg: true,
    spicy: "Low",
    reviews: "1.9k Reviews",
    time: "20 mins"
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
    title: "Chinese Noodles",
    category: "Chinese",
    description:
      "Chinese Noodles are stir-fried with colorful vegetables and authentic Asian spices.",
    price: 550,
    rating: 4.8,
    veg: false,
    spicy: "High",
    reviews: "3.1k Reviews",
    time: "18 mins"
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    title: "Golden Dessert",
    category: "Desserts",
    description:
      "Golden Dessert is a premium sweet delicacy layered with rich chocolate cream and luxury toppings.",
    price: 350,
    rating: 5,
    veg: true,
    spicy: "None",
    reviews: "4.2k Reviews",
    time: "10 mins"
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    title: "Cheese Burst Pizza",
    category: "Italian",
    description:
      "Loaded with mozzarella cheese, fresh veggies, and premium toppings baked to perfection.",
    price: 799,
    rating: 4.9,
    veg: true,
    spicy: "Medium",
    reviews: "5.1k Reviews",
    time: "30 mins"
  },

  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    title: "Smoky BBQ Burger",
    category: "American",
    description:
      "Juicy grilled burger layered with smoky BBQ sauce and crispy lettuce.",
    price: 499,
    rating: 4.7,
    veg: false,
    spicy: "Medium",
    reviews: "2.9k Reviews",
    time: "15 mins"
  },

  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    title: "Healthy Veg Salad",
    category: "Salad",
    description:
      "Fresh healthy salad packed with organic vegetables and rich dressing.",
    price: 299,
    rating: 4.6,
    veg: true,
    spicy: "Low",
    reviews: "1.4k Reviews",
    time: "12 mins"
  },

  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    title: "Grilled Chicken Steak",
    category: "Continental",
    description:
      "Tender grilled chicken steak served with creamy sauce and vegetables.",
    price: 950,
    rating: 5,
    veg: false,
    spicy: "Medium",
    reviews: "3.8k Reviews",
    time: "35 mins"
  },

  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    title: "Chocolate Pancakes",
    category: "Breakfast",
    description:
      "Soft fluffy pancakes topped with chocolate syrup and berries.",
    price: 420,
    rating: 4.8,
    veg: true,
    spicy: "None",
    reviews: "2.1k Reviews",
    time: "14 mins"
  },

  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
    title: "Spicy Chicken Tacos",
    category: "Mexican",
    description:
      "Crunchy tacos stuffed with spicy chicken and creamy salsa sauce.",
    price: 530,
    rating: 4.7,
    veg: false,
    spicy: "High",
    reviews: "2.8k Reviews",
    time: "17 mins"
  },

  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    title: "Classic Sushi",
    category: "Japanese",
    description:
      "Authentic sushi rolls crafted with premium seafood and sticky rice.",
    price: 1200,
    rating: 4.9,
    veg: false,
    spicy: "Low",
    reviews: "1.6k Reviews",
    time: "28 mins"
  },

  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
    title: "Loaded French Fries",
    category: "Snacks",
    description:
      "Crispy fries loaded with cheese, sauces, and spicy seasonings.",
    price: 250,
    rating: 4.5,
    veg: true,
    spicy: "Medium",
    reviews: "3.3k Reviews",
    time: "10 mins"
  },

  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    title: "Butter Chicken",
    category: "Indian",
    description:
      "Creamy butter chicken cooked with rich Indian spices and herbs.",
    price: 720,
    rating: 5,
    veg: false,
    spicy: "Medium",
    reviews: "6.2k Reviews",
    time: "32 mins"
  },

  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    title: "Veggie Sandwich",
    category: "Fast Food",
    description:
      "Crunchy vegetable sandwich layered with fresh sauces and cheese.",
    price: 280,
    rating: 4.4,
    veg: true,
    spicy: "Low",
    reviews: "1.8k Reviews",
    time: "8 mins"
  },

  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d",
    title: "Red Velvet Cake",
    category: "Desserts",
    description:
      "Soft red velvet cake topped with creamy cheese frosting.",
    price: 600,
    rating: 4.9,
    veg: true,
    spicy: "None",
    reviews: "4.5k Reviews",
    time: "15 mins"
  },

  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554",
    title: "Momos Delight",
    category: "Chinese",
    description:
      "Steamed momos served with spicy red chutney and sauces.",
    price: 340,
    rating: 4.7,
    veg: false,
    spicy: "High",
    reviews: "2.7k Reviews",
    time: "16 mins"
  },

  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    title: "Greek Salad",
    category: "Salad",
    description:
      "Fresh Greek salad loaded with olives, feta cheese, and veggies.",
    price: 390,
    rating: 4.6,
    veg: true,
    spicy: "None",
    reviews: "1.3k Reviews",
    time: "11 mins"
  },

  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    title: "Pepperoni Pizza",
    category: "Italian",
    description:
      "Hot pepperoni pizza with extra cheese and crispy crust.",
    price: 899,
    rating: 5,
    veg: false,
    spicy: "Medium",
    reviews: "5.6k Reviews",
    time: "27 mins"
  },

  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    title: "Chicken Biryani",
    category: "Indian",
    description:
      "Aromatic chicken biryani cooked with basmati rice and spices.",
    price: 680,
    rating: 5,
    veg: false,
    spicy: "High",
    reviews: "7.1k Reviews",
    time: "40 mins"
  },

  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
    title: "Ice Cream Sundae",
    category: "Desserts",
    description:
      "Luxury ice cream sundae topped with nuts and chocolate syrup.",
    price: 320,
    rating: 4.8,
    veg: true,
    spicy: "None",
    reviews: "2.4k Reviews",
    time: "7 mins"
  }

];

  /* =========================================================
      STATES
  ========================================================= */

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const [selectedFood, setSelectedFood] =
    useState(null);

  const [bookingCard, setBookingCard] =
    useState(null);

  const [showBookingForm, setShowBookingForm] =
    useState(false);

  const [bookingSuccess, setBookingSuccess] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    address: "",
    date: ""
  });

  /* =========================================================
      FILTER
  ========================================================= */

  const filteredFood = foodData.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* =========================================================
      ADD TO CART
  ========================================================= */

  const addToCart = (food) => {

    setBookingCard(food);

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
      QUANTITY
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

  /* =========================================================
      HANDLE FORM
  ========================================================= */

  const handleInputChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* =========================================================
    HANDLE BOOKING + WHATSAPP
========================================================= */

const handleBooking = (e) => {

  e.preventDefault();

  /* =========================================
      WHATSAPP NUMBER
  ========================================= */

  const whatsappNumber = "8078623915";

  /* =========================================
      MESSAGE
  ========================================= */

  const message = `🍽️ New Food Booking

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email}

👥 Guests: ${formData.guests}

📍 Address: ${formData.address}

📅 Booking Date: ${formData.date}

🍴 Food Item: ${bookingCard.title}

💰 Price: ₹${bookingCard.price}

⭐ Rating: ${bookingCard.rating}

🔥 Spicy Level: ${bookingCard.spicy}
`;

  /* =========================================
      ENCODE MESSAGE
  ========================================= */

  const encodedMessage =
    encodeURIComponent(message);

  /* =========================================
      WHATSAPP URL
  ========================================= */

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  /* =========================================
      OPEN WHATSAPP
  ========================================= */

  window.open(
    whatsappURL,
    "_blank"
  );

  /* =========================================
      SUCCESS MESSAGE
  ========================================= */

  setBookingSuccess(true);

  setTimeout(() => {

    setShowBookingForm(false);

    setBookingCard(null);

    setBookingSuccess(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      guests: "",
      address: "",
      date: ""
    });

  }, 3000);
};

  return (

    <div className="food-page">

      {/* HERO */}

      <section className="food-hero">

        <h1>Luxury Dining Experience</h1>

        <p>
          Taste premium dishes prepared by
          world-class chefs.
        </p>

      </section>

      {/* SEARCH */}

      <section className="search-section">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search food..."
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
                {food.description.slice(0, 90)}...
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

      {/* VIEW DETAILS MODAL */}

      {selectedFood && (

        <div className="food-modal">

          <div className="food-modal-content">

            <button
              className="close-btn"
              onClick={() =>
                setSelectedFood(null)
              }
            >
              <FaTimes />
            </button>

            <img
              src={selectedFood.image}
              alt={selectedFood.title}
              className="modal-image"
            />

            <div className="modal-details">

              <h1>
                {selectedFood.title}
              </h1>

              <p>
                {selectedFood.description}
              </p>

              <div className="modal-review">

                ⭐ {selectedFood.rating}
                {" "}
                ({selectedFood.reviews})

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

      {/* BOOKING CARD */}

      {bookingCard && (

        <div className="booking-overlay">

          <div className="booking-card">

            <button
              className="booking-close"
              onClick={() =>
                setBookingCard(null)
              }
            >
              <FaTimes />
            </button>

            <div className="booking-image-box">

              <img
                src={bookingCard.image}
                alt={bookingCard.title}
              />

              <div className="booking-badge">
                Premium Dish
              </div>

            </div>

            <div className="booking-content">

              <h1>
                {bookingCard.title}
              </h1>

              <p className="booking-desc">
                {bookingCard.description}
              </p>

              <div className="booking-info">

                <div>
                  <FaStar />
                  <span>
                    {bookingCard.rating}
                  </span>
                </div>

                <div>
                  <FaClock />
                  <span>
                    {bookingCard.time}
                  </span>
                </div>

                <div>
                  <FaFire />
                  <span>
                    {bookingCard.spicy}
                  </span>
                </div>

                <div>
                  <FaLeaf />
                  <span>
                    {bookingCard.veg
                      ? "Veg"
                      : "Non-Veg"}
                  </span>
                </div>

              </div>

              <div className="booking-price">
                ₹ {bookingCard.price}
              </div>

              <div className="booking-reviews">

                ❤️ Loved by Foodies

                <p>
                  {bookingCard.reviews}
                </p>

              </div>

              <div className="booking-buttons">

                <button
                  className="book-btn"
                  onClick={() =>
                    setShowBookingForm(true)
                  }
                >
                  <FaUtensils />
                  Book Now
                </button>

                <button className="wishlist-btn">
                  <FaHeart />
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* BOOKING FORM */}

      {showBookingForm && (

        <div className="booking-form-overlay">

          <div className="booking-form-card">

            <button
              className="booking-close"
              onClick={() =>
                setShowBookingForm(false)
              }
            >
              <FaTimes />
            </button>

            <h1>Complete Your Booking</h1>

            <p>
              Fill all details to confirm
              your luxury dining order.
            </p>

            <form onSubmit={handleBooking}>

              <div className="form-group">

                <FaUser />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />

              </div>

              <div className="form-group">

                <FaPhone />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />

              </div>

              <div className="form-group">

                <FaEnvelope />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />

              </div>

              <div className="form-group">

                <FaUser />

                <input
                  type="number"
                  name="guests"
                  placeholder="Number of Guests"
                  required
                  value={formData.guests}
                  onChange={handleInputChange}
                />

              </div>

              <div className="form-group">

                <FaMapMarkerAlt />

                <input
                  type="text"
                  name="address"
                  placeholder="Delivery Address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />

              </div>

              <div className="form-group">

                <FaCalendarAlt />

                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                />

              </div>

              <button
                type="submit"
                className="confirm-btn"
              >
                Confirm Booking
              </button>

            </form>

            {bookingSuccess && (

              <div className="success-message">

                🎉 Booking Confirmed Successfully!

              </div>

            )}

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
                    100
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