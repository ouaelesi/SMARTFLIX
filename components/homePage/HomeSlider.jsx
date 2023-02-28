import React, { useEffect, useRef, useState } from "react";
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

import MovieCard from "./MovieCard";

import axios from "axios";

const HomeSlider = ({type , text}) => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    if (!movies) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${type}?api_key=2231d34a44dda0d3b0b7670043c00cb6&language=en-US`
        )
        .then((res) => {
          setMovies(res.data.results);
          setLoading(false);
          console.log(res.data.results)
        });
    }
  });
  const [isLoading, setLoading] = useState(true);

  // if it's loading data display the loading spin
  if (isLoading || !movies) {
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
        <div className="md:text-lg text-sm">{text}</div>
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
