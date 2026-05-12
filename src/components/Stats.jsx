import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Stats = () => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {

    AOS.init();

    const animate = (target, setCount) => {

      let start = 0;

      const interval = setInterval(() => {

        start += 1;

        setCount(start);

        if (start === target) {
          clearInterval(interval);
        }

      }, 20);

    };

    animate(120, setCount1);
    animate(85, setCount2);
    animate(50, setCount3);
    animate(200, setCount4);

  }, []);

  return (

    <section className="stats">

      <div
        className="stats-grid"
        data-aos="fade-up"
      >

        <div className="stat-box">

          <h2>{count1}+</h2>
          <p>Luxury Hotels</p>

        </div>

        <div className="stat-box">

          <h2>{count2}+</h2>
          <p>Destinations</p>

        </div>

        <div className="stat-box">

          <h2>{count3}+</h2>
          <p>Restaurants</p>

        </div>

        <div className="stat-box">

          <h2>{count4}+</h2>
          <p>Happy Guests</p>

        </div>

      </div>

    </section>

  );

};

export default Stats;