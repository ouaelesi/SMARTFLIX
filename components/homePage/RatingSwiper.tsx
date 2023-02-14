import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

// The movies data
import { movies } from "@/Data/movies";

const RatingSwiper = () => {
  return (
    <div className="xl:px-32 lg:px-20 md:px-10 px-5">
      <div className="flex justify-between text-xs md:text-lg">
        <div>Movies Just For You</div>
        <div>Filter Movies</div>
      </div>
      <div className="py-20">
        <Swiper
        
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-48 h-96"
        >
          {movies.map((movie, key) => (
            <SwiperSlide key={key}>
              {({ isActive }) => (
                <>
                  <div className="w-48 h-[280px] bg-white rounded-md overflow-hidden border border-gray-700">
                    <Image
                      src={`/images/${movie.cardPhoto}`}
                      alt={movie.name}
                      width="400"
                      height={500}
                      className="h-full"
                    ></Image>
                  </div>
                  <div className="mt-4 text-sm text-center"> {isActive ? movie.name : ""}</div>
                  {
                    isActive ? <div>
                    <div className=" mt-5 dragBar w-48 h-1 bg-red-50 rounded-md relative">
                        <div className="toDrag w-fit absolute -top-1">
                            <div className="dragCircle  bg-white rounded-full w-3 h-3 "></div>
                            <div className="text-xs">8.1</div>
                        </div>
                    </div>
                  </div> : <></>
                  }
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RatingSwiper;
