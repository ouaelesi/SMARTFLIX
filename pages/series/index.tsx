import HomeSlider from "@/components/homePage/HomeSlider";
import RatingSwiper from "@/components/homePage/RatingSwiper";
import MovieContainer from "@/components/moviesPage/MovieContainer";
import Footer from "@/components/shared/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Series = () => {
  const [Tvshow, setTV] = useState(null);
  const types = ["popular", "top_rated"];
  useEffect(() => {
    if (!Tvshow) {
      const type = types[Math.floor(Math.random() * (types.length - 0) + 0)];
      console.log(type);
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${type}?api_key=2231d34a44dda0d3b0b7670043c00cb6&language=en-US`
        )
        .then((res) => {
          setTV(res.data.results[Math.floor(Math.random() * (10 - 0) + 0)]);
          setLoading(false);
          console.log(res.data.results);
        });
    }
  });
  const [isLoading, setLoading] = useState(true);
  if (isLoading || !Tvshow) return <div className="w-full h-screen"></div>;
  return (
    <div>
      <MovieContainer
        PhoneImage={(Tvshow as any).backdrop_path}
        coverImage={(Tvshow as any).backdrop_path}
        movieData={Tvshow}
        type="serie"
      />
       {[
        { cat: "top_rated", message: "Top Rated Series" },
        { cat: "airing_today", message: "Airing Today" },
        { cat: "on_the_air", message: "On The air" },
        { cat: "popular", message: "Popular Series" },
      ].map((e, key) => (
        <div className="mb-20" key={key}>
          <HomeSlider cat={e.cat} text={e.message} type="tv" />
        </div>
      ))}

      <RatingSwiper />
      <Footer />
    </div>
  );
};

export default Series;
