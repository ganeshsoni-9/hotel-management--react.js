import guest1 from "../assets/images/guest1.png";
import guest2 from "../assets/images/guest2.jpg";
import guest3 from "../assets/images/guest3.png";
import guest4 from "../assets/images/guest4.png";
import guest5 from "../assets/images/guest5.png";

const Testimonials = () => {

  const reviews = [

    {
      id:1,
      image:guest1,
      name:"Anjali Sharma",
      review:
        "An unforgettable luxury experience with exceptional hospitality and breathtaking views.",
      rating:"★★★★★"
    },

    {
      id:2,
      image:guest2,
      name:"Rohan Kapoor",
      review:
        "The rooms, dining and wellness services were absolutely world-class.",
      rating:"★★★★★"
    },

    {
      id:3,
      image:guest3,
      name:"Priya Mehta",
      review:
        "A royal stay experience that exceeded every expectation.",
      rating:"★★★★★"
    },

    {
      id:4,
      image:guest4,
      name:"Jackline",
      review:
        "A luxurious stay that went beyond every expectation and left a lasting impression.",
      rating:"★★★★★"
    },

{
      id:5,
      image:guest5,
      name:"henny francisko",
      review:
        "An unforgettable royal retreat that surpassed every expectation.",
      rating:"★★★★★"
    }

  ];

  return (

    <section className="testimonials">

      <div className="section-title">

        <h2>
          Guest Experiences
        </h2>

        <p>
          Hear from our delighted guests.
        </p>

      </div>

      <div className="testimonials-grid">

        {
          reviews.map((item)=>(

            <div
              className="testimonial-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt=""
              />

              <h3>
                {item.name}
              </h3>

              <span className="stars">
                {item.rating}
              </span>

              <p>
                {item.review}
              </p>

            </div>

          ))
        }

      </div>

    </section>

  );

};

export default Testimonials;