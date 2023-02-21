import React from 'react';
import Image from 'next/image';
import MovieInfos from './MovieInfos';
const MovieContainer = () => {
    return (
        <div className="w-full relative h-screen overflow-y-hidden">
      <Image
        src="/images/DuneBig.jpg"
        alt="home background"
        className="w-full absolute hidden md:block"
        width={1000}
        height="1000"
      />
      <Image
        src="/images/smHomebg.png"
        alt="home background"
        className="w-full absolute block md:hidden"
        width={1000}
        height="1000"
      />
      <MovieInfos/>
      
    </div>
    );
};

export default MovieContainer;