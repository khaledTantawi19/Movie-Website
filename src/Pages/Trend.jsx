import React, { useState, useEffect } from "react";
import "./trend.css";
import TrendCard from "../Components/TrendCard";

//import swiper react component
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

function Trend() {
  const [slides, setSlides] = useState([]);
  const fetchdata = () => {
    fetch("/Movie-Website/Data/movieData.json")
      .then((res) => res.json())
      .then((Data) => {
        setSlides(Data);
      })

      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <section id="trend" className="trend">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">cooming soon</h4>
        </div>
        <div className="row">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={{ Autoplay }}
            className="trendSwiper"
          >
            {slides &&
              slides.length > 0 &&
              slides.map((slide) => (
                <SwiperSlide key={slide._id}>
                  <TrendCard slide={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Trend;
