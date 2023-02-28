import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components/homePage/MovieCard";
const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=2231d34a44dda0d3b0b7670043c00cb6&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then((res) => {
        setResults(res.data.results);
      });
  }, [query]);

  if (!results) return <></>;
  return (
    <div className="md:px-28 px-3">
        <div className="pt-32 md:text-2xl text-xl">
            Results Of: {query}
        </div>
      <div className="flex flex-wrap justify-between ">
        {(results as any).map((movie:any, key:number) => (
          <div key={movie.id} className="md:w-48 w-40">
            <MovieCard movie={movie} type="movies" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
