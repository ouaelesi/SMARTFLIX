import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const MovieInfos: React.FC<any> = ({ movieData }) => {
  return (
    <div className="bg-gradient-to-t from-[rgba(0,0,0,1)] md:via-[rgba(0,0,0,.4)] via-[rgba(0,0,0,.8)] to-transparent  relative w-full h-full ">
      <div className="md:pt-64 xl:px-32 lg:px-16 md:px-10 pt-28 px-5 bg-gradient-to-br w-full h-full   from-[rgba(0,0,0,.8)] to-transparent relative ">
        <div>
          <p className=" md:text-4xl text-2xl md:pt-48 pt-32 font-medium">
            {movieData.original_title}
          </p>
          <div className="flex gap-4 md:text-sm text-xs py-3 ">
            <div className="flex gap-1">
              <>{movieData.vote_average}</>/10
              <FontAwesomeIcon icon={faStar} width="18" color="yellow" />
            </div>
            <div className="flex gap-2">
              {movieData.runtime} min
              <div className="w-2 h-2 rounded-xl bg-white mt-2 "></div>
            </div>
            <div className="flex gap-2">
              {movieData.type}
              <div className="w-2 h-2 rounded-xl bg-white mt-2 "></div>
            </div>

            <div>
              {movieData.genres?.map((elem: any, key: Number) => (
                <span key={elem.id}>{elem.name}, </span>
              ))}
            </div>
          </div>
          <p className="md:text-sm text-xs md:w-9/12 text-gray-300">
            {movieData.overview}
          </p>

          <div className="py-10 flex gap-4 text-xs md:text-lg">
            <button className="btn-yellow font-semibold ">
              Add to my List
            </button>
            <Link href="#trailerSection">
              {" "}
              <button className="btn-border-yellow font-semibold">
                Watch Trailer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfos;
