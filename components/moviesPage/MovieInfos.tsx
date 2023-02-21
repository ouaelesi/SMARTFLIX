import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MovieInfos = () => {
  return (
    <div className="bg-gradient-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,.0)] to-transparent  relative w-full h-full">
      <div className="md:pt-64 xl:px-32 lg:px-16 md:px-10 pt-40 px-5 bg-gradient-to-br w-full h-full   from-[rgba(0,0,0,.7)] to-transparent relative ">
        <div>
          <p className=" text-4xl pt-32 font-medium">DUNE</p>
          <div className="flex gap-4 text-sm py-3 ">
            <div>
              8.5/10 <FontAwesomeIcon icon={faStar} width="23" color="yellow" />
            </div>
            <div className="flex gap-2">
              3h 55min <div className="w-2 h-2 rounded-xl bg-white mt-2 "></div>
            </div>
            <div className="flex gap-2">
              Action, Drama, Adventure{" "}
              <div className="w-2 h-2 rounded-xl bg-white mt-2 "></div>
            </div>

            <div>2022</div>
          </div>
          <p className="text-sm md:w-9/12">
            Un marine paraplégique envoyé sur la lune Pandora pour une mission
            unique est tiraillé entre suivre ses ordres et protéger le monde qu
            il considère le sien.
          </p>
          <div className=" mt-5 dragBar w-64 h-1 bg-red-50 rounded-md relative">
            <div className="toDrag w-fit absolute -top-1">
              <div className="dragCircle  bg-white rounded-full w-3 h-3 "></div>
              <div className="text-xs">8.1</div>
            </div>
          </div>
          <div className="py-10 flex gap-4">
            <button className="btn-yellow font-semibold ">Add to my List</button>
            <button className="btn-border-yellow font-semibold" >Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfos;
