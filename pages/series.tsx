import HomeSlider from '@/components/homePage/HomeSlider';
import RatingSwiper from '@/components/homePage/RatingSwiper';
import MovieContainer from '@/components/moviesPage/MovieContainer';
import Footer from '@/components/shared/Footer';
import React from 'react';

const series = () => {
    const movieData = {
        name: "Dark",
        rating: 8.5,
        duration: "2h 55min",
        type: "Action, Drama, Adventure",
        year: "2020",
        description:
          "Un marine paraplégique envoyé sur la lune Pandora pour une mission unique est tiraillé entre suivre ses ordres et protéger le monde qu il considère le sien.",
      };
    return (
        <div>
        <MovieContainer  coverImage="Dark.jpg"
        PhoneImage="Dune.jpg"
        movieData={movieData}/>
        <div className="mb-32">
        <HomeSlider/>
        </div>
        <RatingSwiper/>
        <Footer/>
     </div>
    );
};

export default series;