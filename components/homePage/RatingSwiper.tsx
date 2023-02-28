import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

// import axios
import axios from "axios";

const RatingSwiper = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2231d34a44dda0d3b0b7670043c00cb6&language=en-US"
      )
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      });
  });

  const [loading, setLoading] = useState(true);

  const [movies, setMovies] = useState(null);
  if (loading || !movies) return <div>Loading</div>;
  return (
    <div className="xl:px-32 lg:px-20 md:px-10 px-5">
      <div className="flex justify-between text-xs md:text-lg">
        <div>Movies Just For You</div>
      </div>
      <div className="py-20">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-48 h-96"
        >
          {movies.map((movie, key) => (
            <SwiperSlide key={key} className="">
              {({ isActive }) => (
                <div>
                  <div className="w-48 h-[280px]  rounded-md overflow-hidden border border-gray-700">
                    <Image
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                      alt={movie.original_title}
                      width="400"
                      height={500}
                      className="h-full"
                    ></Image>
                  </div>
                  <div className="mt-4 text-sm text-center">
                    {isActive ? movie.original_title : ""}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RatingSwiper;
