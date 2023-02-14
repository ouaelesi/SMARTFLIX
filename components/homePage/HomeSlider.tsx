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
    <div className="mx-5">
      <Swiper
        slidesPerView={8}

        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {movies.map((movie, key) => (
          <SwiperSlide key={key}>
            <MovieCard movie={movie}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
