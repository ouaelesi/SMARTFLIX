interface props {
  movie: {
    id: number;
    name: string;
    description: string;
    rating: number;
    lenght: string;
    year: string;
    coverPhoto: string;
    cardPhoto: string;
  };
}

import Image from "next/image";
const MovieCard: React.FC<props> = ({ movie }) => {
  return (
    <div className="ml-5 hover:ml-0">
      <div className="relative w-40 movieCard h-60 hover:w-48 hover:h-64 hover:mt-0 mt-6   cursor-pointer overflow-hidden hover:border hover:border-gray-800">
        <Image
          src={`/images/${movie.cardPhoto}`}
          width="500"
          height={500}
          className="w-full absolute"
          alt={movie.name}
        ></Image>
        <div className="relative  px-3 movieCardDescription w-full h-full pt-40 bg-gradient-to-t from-black to-[rgba(5,5,5,.5)]">
          <div className=" h-fit ralative bottom-0">
            <div className="flex justify-between">
              <p>{movie.name}</p>
              <div className="text-xs mt-1 flex gap-1">{movie.rating}/10 <Image src="/icons/star.png" alt="star" width={15} height={0}></Image></div>
            </div>

            <p className="text-2xs text-gray-300 mt-2 ">{movie.description}</p>
          </div>
        </div>
      </div>
      <div>{movie.name}</div>
    </div>
  );
};

export default MovieCard;
