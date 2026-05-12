import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const LuxurySlider = () => {

  return (

    <section className="luxury-slider">

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay
        ]}

        navigation
        pagination={{ clickable:true }}

        autoplay={{
          delay:3000
        }}

        loop={true}
      >

        <SwiperSlide>

          <div className="slide">

            <img src={slide1} alt="" />

            <div className="slide-content">

              <h1>
                Luxury Beyond Imagination
              </h1>

              <p>
                Discover unforgettable experiences.
              </p>

            </div>

          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className="slide">

            <img src={slide2} alt="" />

            <div className="slide-content">

              <h1>
                Royal Palace Experiences
              </h1>

              <p>
                Experience elegance and royalty.
              </p>

            </div>

          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className="slide">

            <img src={slide3} alt="" />

            <div className="slide-content">

              <h1>
                Timeless Luxury Retreats
              </h1>

              <p>
                Relax in world-class comfort.
              </p>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </section>

  );

};

export default LuxurySlider;