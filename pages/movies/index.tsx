import HomeSlider from "@/components/homePage/HomeSlider";
import RatingSwiper from "@/components/homePage/RatingSwiper";
import MovieContainer from "@/components/moviesPage/MovieContainer";
import Footer from "@/components/shared/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const [movie, setMovies] = useState(null);
  const types = ["popular", "top_rated", "upcoming"];
  useEffect(() => {
    if (!movie) {
      const type = types[Math.floor(Math.random() * (types.length - 0) + 0)];
      console.log(type);
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${type}?api_key=2231d34a44dda0d3b0b7670043c00cb6&language=en-US`
        )
        .then((res) => {
          setMovies(res.data.results[Math.floor(Math.random() * (10 - 0) + 0)]);
          setLoading(false);
          console.log(
            res.data.results[Math.floor(Math.random() * (10 - 0) + 0)]
          );
        });
    }
  });
  const [isLoading, setLoading] = useState(true);
  if (isLoading || !movie) return <div className="w-full h-screen"></div>;
  return (
    <div>
      <MovieContainer
        PhoneImage={(movie as any).backdrop_path}
        coverImage={(movie as any).backdrop_path}
        movieData={movie}
        type="movie"
      />
      {[
        { cat: "top_rated", message: "Top Rated Movies" },
        { cat: "now_playing", message: "Now Playing" },
        { cat: "upcoming", message: "Upcoming Movies" },
        { cat: "popular", message: "Popular Movies" },
      ].map((e, key) => (
        <div className="mb-20" key={key}>
          <HomeSlider cat={e.cat} text={e.message} type="movie" />
        </div>
      ))}

      <RatingSwiper />
      <Footer />
    </div>
  );
};

export default Movies;
