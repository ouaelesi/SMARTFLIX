import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import MovieContainer from "@/components/moviesPage/MovieContainer";
import Footer from "@/components/shared/Footer";
import TrailerSection from "@/components/moviesPage/TrailerSection";
const SignleMovie = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [StrServices, setServices] = useState(null);
  const [TrailerKey, setTrailer] = useState(null);

  useEffect(() => {
    if (!movie && id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=2231d34a44dda0d3b0b7670043c00cb6`
        )
        .then((res) => {
          setMovie(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
    if (!StrServices) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=2231d34a44dda0d3b0b7670043c00cb6`
        )
        .then((res) => {
          setServices(res.data.results);
        })
        .catch((err) => console.log(err));
    }

    if (!TrailerKey) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=2231d34a44dda0d3b0b7670043c00cb6&include_video_language=en`
        )
        .then((res) => {
          setTrailer(res.data.results[0].key);
        })
        .catch((err) => console.log(err));
    }

 
  });
  if (loading || !movie) return <div className="w-full h-screen"></div>;
  return (
    <div>
      <MovieContainer
        PhoneImage={(movie as any).poster_path}
        coverImage={(movie as any).backdrop_path}
        movieData={movie}
        type="movie"
      />

      <TrailerSection videoId={TrailerKey} />
      <Footer />
    </div>
  );
};

export default SignleMovie;
