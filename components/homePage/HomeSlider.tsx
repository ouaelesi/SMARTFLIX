import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/HomeSwiper.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faArrowRotateBack,
} from "@fortawesome/free-solid-svg-icons";

import { movies } from "../../Data/movies";
import MovieCard from "./MovieCard";

const HomeSlider = () => {
  const [isLoading, setLoading] = useState(false);

  // generate suggesstions function
  const generateSuggestions = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // if it's loading data display the loading spin
  if (isLoading) {
    return (
      <div className="text-white relative w-fit mx-auto py-10">
        <FontAwesomeIcon
          icon={faSpinner}
          width="28"
          color="white"
          className="animate-spin"
        />
      </div>
    );
  }
  // else display the swiper
  return (
    <div className="ml-5">
      <div className="text-white relative flex justify-between xl:px-24 lg:px-20 md:px-10 px-5 ">
        <div className="md:text-lg text-sm">You may like</div>
        <div
          className="flex gap-2 btn-border-yellow text-xs md:text-lg px-3"
          onClick={() => generateSuggestions()}
        >
          Genrate more <FontAwesomeIcon icon={faArrowRotateBack} width="20" className="text-sm md:text-xl md:mt-1" />
        </div>
      </div>
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
