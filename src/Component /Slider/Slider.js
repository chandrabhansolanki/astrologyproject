import React from "react";
import "./Slider.css";

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { play } from "../../images/images";
// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

const Slider = () => {
  const images = [
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-4.jpg",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-5.jpg",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-6.jpg",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-7.jpg",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-8.jpg",
    },
  ];

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        // loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images.map((item) => (
          <SwiperSlide className="relative" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={item.image} alt="image" />
            <img src={play} className="play"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
