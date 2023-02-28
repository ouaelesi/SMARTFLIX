import HomeSlider from "@/components/homePage/HomeSlider";
import RatingSwiper from "@/components/homePage/RatingSwiper";
import MovieContainer from "@/components/moviesPage/MovieContainer";
import Footer from "@/components/shared/Footer";
import {useEffect , useState} from "react";
import axios from "axios";

const Movies = () => {
    const [movie, setMovies] = useState(null);
    const types = ["popular" , "top_rated" , "upcoming"]
    useEffect(() => {
      if (!movie) {
        const type = types[Math.floor(Math.random() * (types.length - 0) + 0)] ; 
        console.log(type)
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${type}?api_key=2231d34a44dda0d3b0b7670043c00cb6&language=en-US`
          )
          .then((res) => {
            setMovies(res.data.results[Math.floor(Math.random() * (10 - 0) + 0)]);
            setLoading(false);
            console.log(res.data.results[Math.floor(Math.random() * (10 - 0) + 0)])
          });
      }
    });
    const [isLoading, setLoading] = useState(true);
  if(isLoading || !movie) return <div className="w-full h-screen"></div>
  return (
    <div>
      <MovieContainer
            PhoneImage={movie.backdrop_path}
            coverImage ={movie.backdrop_path}
            movieData={movie}
      />
      <div className="mb-20">
        <HomeSlider type="top_rated" text="Top rated movies" />
      </div>
      <div className="mb-20">
        <HomeSlider type="now_playing" text="Now Playing" />
      </div>
      <div className="mb-20">
        <HomeSlider type="upcoming" text="Upcoming Movies" />
      </div>
      <div className="mb-20">
        <HomeSlider type="popular" text="Popular Movies" />
      </div>
      <RatingSwiper />
      <Footer />
    </div>
  );
};

export default Movies;
