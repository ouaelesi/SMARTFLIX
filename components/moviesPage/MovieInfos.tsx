import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  movieData: {
    name: String;
    rating: Number;
    duration: String;
    type: String;
    year: String;
    description: String;
  };
}
const MovieInfos: React.FC<Props> = ({ movieData }) => {
  return (
    <div className="bg-gradient-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,.0)] to-transparent  relative w-full h-full">
      <div className="md:pt-64 xl:px-32 lg:px-16 md:px-10 pt-40 px-5 bg-gradient-to-br w-full h-full   from-[rgba(0,0,0,.7)] to-transparent relative ">
        <div>
          <p className=" text-4xl pt-32 font-medium">{movieData.name}</p>
          <div className="flex gap-4 md:text-sm text-xs py-3 ">
            <div className="flex gap-1">
              <>{movieData.rating}</>/10
              <FontAwesomeIcon icon={faStar} width="18" color="yellow" />
            </div>
            <div className="flex gap-2">
              {movieData.duration}{" "}
              <div className="w-2 h-2 rounded-xl bg-white mt-2 "></div>
            </div>
            <div className="flex gap-2">
              {movieData.type}
              <div className="w-2 h-2 rounded-xl bg-white mt-2 "></div>
            </div>

            <div>{movieData.year}</div>
          </div>
          <p className="md:text-sm text-xs md:w-9/12">
            {movieData.description}
          </p>
          <div className=" mt-5 dragBar w-64 h-1 bg-red-50 rounded-md relative">
            <div className="toDrag w-fit absolute -top-1">
              <div className="dragCircle  bg-white rounded-full w-3 h-3 "></div>
              <div className="text-xs">8.1</div>
            </div>
          </div>
          <div className="py-10 flex gap-4 text-xs md:text-lg">
            <button className="btn-yellow font-semibold ">
              Add to my List
            </button>
            <button className="btn-border-yellow font-semibold">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfos;
