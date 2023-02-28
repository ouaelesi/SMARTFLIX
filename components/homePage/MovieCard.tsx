

import Image from "next/image";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
const MovieCard: React.FC<any> = ({ movie }) => {
  return (
    <Link href={"/movies/"+movie.id} className="ml-5 hover:ml-0" >
      <div className="relative w-40 movieCard h-60 hover:w-48 hover:h-64 hover:mt-0 mt-6   cursor-pointer overflow-hidden hover:border hover:border-gray-800">
        <Image
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
          width="500"
          height={500}
          className="w-full absolute"
          alt={movie.original_title}
        ></Image>
        <div className="relative  px-3 movieCardDescription w-full h-full pt-36 bg-gradient-to-t from-black to-[rgba(5,5,5,.5)]">
          <div className=" h-fit ralative bottom-0">
            <div className="">
              <p className="text-sm">{movie.original_title}</p>
              <div className="text-xs mt-1 flex gap-1">{movie.vote_average}/10<FontAwesomeIcon icon={faStar} width="15" color="yellow" /></div>
            </div>

            <p className="text-2xs text-gray-300 mt-2 ">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="text-xs mt-2">{movie.original_title} {movie.release_date}</div>
      <div className="text-xs text-gray-400">{movie.release_date}</div>
    </Link>
  );
};

export default MovieCard;
