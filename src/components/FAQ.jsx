import { useState } from "react";
import "./FAQ.css";
const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {

    setActiveIndex(activeIndex === index ? null : index);

  };

  const faqs = [

    {
      question: "What is the check-in and check-out time?",
      answer: "Check-in is from 2:00 PM and check-out is till 12:00 PM."
    },

    {
      question: "Do you offer free cancellation?",
      answer: "Yes, free cancellation is available on selected bookings."
    },

    {
      question: "Is breakfast included in the booking?",
      answer: "Yes, complimentary breakfast is included in most packages."
    },

    {
      question: "Do you provide airport pickup?",
      answer: "Yes, airport pickup and drop services are available on request."
    }

  ];

  return (

    <section className="faq">

      <div className="section-title">

        <h2>Frequently Asked Questions</h2>

        <p>Everything you need to know about your stay</p>

      </div>

      <div className="faq-container">

        {faqs.map((item, index) => (

          <div
            key={index}
            className="faq-item"
          >

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <h3>{item.question}</h3>

              <span>
                {activeIndex === index ? "-" : "+"}
              </span>

            </div>

            {activeIndex === index && (

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>

  );

};

export default FAQ;