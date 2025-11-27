import "../styles/testimonials.css";
import { useEffect, useRef } from "react";
import Profile1 from "../images/Profile-1.jpg"
import Profile2 from "../images/Profile-2.jpg"
import Profile3 from "../images/Profile-3.jpg"
import Profile4 from "../images/Profile-4.jpg"
import Profile5 from "../images/Profile-5.jpg"



// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          elem.classList.add("animate-section");
        }
      },
      { threshold: 0.2 }
    );

    if (elem) observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  const feedback = [
    {
      img: Profile1,
      name: "Rahul Sharma",
      rating: 5,
      text: "Their technician repaired my Smart TV within 30 minutes. Very professional and genuine pricing!"
    },
    {
      img: Profile2,
      name: "Amit Verma",
      rating: 5,
      text: "Excellent service! My LED TV had no display, and they fixed it the same day using original parts."
    },
    {
      img: Profile3,
      name: "Shruti Singh",
      rating: 4,
      text: "Quick doorstep service. The technician explained everything clearly. Highly recommended!"
    },
    {
      img: Profile4,
      name: "Rakesh Gupta",
      rating: 5,
      text: "Affordable and fast service. They repaired my 55-inch Samsung LED flawlessly."
    },
    {
      img: Profile5,
      name: "Avantika Bhatt",
      rating: 5,
      text: "Very polite and skilled team. Highly reliable TV repair service."
    }
  ];

  return (
    <section className="testimonials-section section-animate-parent" ref={sectionRef}>
      <div className="section-container">

        <div className="testimonials-top">
          <h2 className="testimonials-main-heading section-animate-child delay-1">
            Testimonials
          </h2>

          <p className="testimonials-sub-heading section-animate-child delay-2">
            What our customers say
          </p>
        </div>

        {/* SWIPER CAROUSEL */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
          className="testimonial-swiper"
        >
          {feedback.map((f, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-box section-animate-child delay-3">
                <img src={f.img} className="testimonial-img" alt={f.name} />
                <h3 className="testimonial-name">{f.name}</h3>
                <div className="testimonial-stars">{"⭐".repeat(f.rating)}</div>
                <p className="testimonial-text">{f.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
