import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import MovieContainer from "@/components/moviesPage/MovieContainer";
import TrailerSection from "@/components/moviesPage/TrailerSection";
const SingleSerie = () => {
  // Get the Serie Id 
  const router = useRouter();
  const { id } = router.query;
  // Some state management 
  const [TVshow, setTvShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [TrailerKey, setTrailer] = useState(null);

  useEffect(() => {
    // get the Serie details 
    if (!TVshow && id) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=2231d34a44dda0d3b0b7670043c00cb6`
        )
        .then((res) => {
          setTvShow(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }

    // get the serie trailer
    if (!TrailerKey) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=2231d34a44dda0d3b0b7670043c00cb6`
        )
        .then((res) => {
          setTrailer(res.data.results[0].key);
        })
        .catch((err) => console.log(err));
    }
  });
  // display a loading screen 
  if (loading || !TVshow) return <div className="w-full h-screen"></div>;
  return (
    <div>
      <MovieContainer
        PhoneImage={(TVshow as any).poster_path}
        coverImage={(TVshow as any).backdrop_path}
        movieData={TVshow}
        type="serie"
      />
      <TrailerSection videoId={TrailerKey} />
    </div>
  );
};

export default SingleSerie;
