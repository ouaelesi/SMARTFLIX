import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import MovieContainer from "@/components/moviesPage/MovieContainer";
const SingleSerie = () => {
  const router = useRouter();
  const { id } = router.query;
  const [TVshow, setTvShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [TrailerKey, setTrailer] = useState(null);

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

  if (loading || !TVshow) return <div className="w-full h-screen"></div>;
  return (
    <div>
      <MovieContainer
        PhoneImage={(TVshow as any).poster_path}
        coverImage={(TVshow as any).backdrop_path}
        movieData={TVshow}
        type="serie"
      />
    </div>
  );
};

export default SingleSerie;
