import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/HomeSwiper.module.css";

import { movies } from "../../Data/movies";
import MovieCard from "./MovieCard";

const HomeSlider = () => {
  return (
    <div className="ml-5">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1.7,
          },
          400: {
            slidesPerView: 2.5,
          },
          576: {
            slidesPerView: 3.5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4.5,
          },
          900: {
            slidesPerView: 5.5,
          },
          1200: {
            slidesPerView: 6.5,
          },
          1500: {
            slidesPerView: 7.5,
          },
        }}
        className="mySwiper"
      >
        {movies.map((movie, key) => (
          <SwiperSlide key={key}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
