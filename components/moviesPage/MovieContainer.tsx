import React from "react";
import Image from "next/image";
import MovieInfos from "./MovieInfos";
interface Props {
  coverImage: string;
  PhoneImage: String;
  movieData: any;
}
const MovieContainer: React.FC<Props> = ({
  coverImage,
  PhoneImage,
  movieData,
}) => {
  return (
    <div className="w-full relative h-screen overflow-y-hidden">
      <Image
        src={`https://www.themoviedb.org/t/p/original/${coverImage}`}
        alt="home background"
        className="w-full absolute hidden md:block"
        width={1000}
        height="1000"
      />
      <Image
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${PhoneImage}`}
        alt="home background"
        className="w-full absolute block md:hidden"
        width={1000}
        height="1000"
      />
      <MovieInfos movieData={movieData} />
    </div>
  );
};

export default MovieContainer;
