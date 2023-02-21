import HomeSlider from '@/components/homePage/HomeSlider';
import RatingSwiper from '@/components/homePage/RatingSwiper';
import MovieContainer from '@/components/moviesPage/MovieContainer';
import Footer from '@/components/shared/Footer';
import React from 'react';

const movies = () => {
    return (
        <div>
           <MovieContainer/>
           <div className="mb-32">
            <p className="xl:px-32 lg:px-20 md:px-10 px-5 md:text-lg text-sm">My movies</p>
           <HomeSlider/>
           </div>
           <RatingSwiper/>
           <Footer/>
        </div>
    );
};

export default movies;