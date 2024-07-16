// import React from "react";
// import "./movieSwiper.css";
// //import swiper css
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// //import swiper react component
// import { Swiper, SwiperSlide } from "swiper/react";

// //import required modules
// import { Autoplay, EffectCoverflow } from "swiper/modules";

// function MovieSwiper({ slides }) {
//   return (
//     <div>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         loop={true}
//         modules={[Autoplay, EffectCoverflow]}
//         className="movieswiper"
//       >
//         {/* {slides.map((slide) => (
//           <SwiperSlide>
//             <img src={slide.previewImg} alt="Preview-Image" />
//           </SwiperSlide>
//         ))} */}
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <img src={slide.previewImg} alt="Preview-Image" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default MovieSwiper;
import React from "react";
import "./movieSwiper.css";
//import swiper css
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
//import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

function MovieSwiper({ slides, slideChange }) {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[Autoplay, EffectCoverflow]}
        className="movieswiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <img
              src={slide.previewImg}
              alt="Preview-Image"
              onClick={() => slideChange(slide._id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieSwiper;
