import React from 'react';
import Image from 'next/image';
import MovieInfos from './MovieInfos';
interface Props {
  coverImage : string , 
  PhoneImage : String , 
  movieData : {
    name: String,
    rating: Number,
    duration: String,
    type: String,
    year: String,
    description: String
  }
}
const MovieContainer:React.FC<Props> = ({coverImage , PhoneImage , movieData}) => {
    return (
        <div className="w-full relative h-screen overflow-y-hidden">
      <Image
        src={`/images/${coverImage}`}
        alt="home background"
        className="w-full absolute hidden md:block"
        width={1000}
        height="1000"
      />
      <Image
        src={`/images/${PhoneImage}`}
        alt="home background"
        className="w-full absolute block md:hidden"
        width={1000}
        height="1000"
      />
      <MovieInfos movieData={movieData}/>
      
    </div>
    );
};

export default MovieContainer;