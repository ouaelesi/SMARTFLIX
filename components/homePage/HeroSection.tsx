import Image from "next/image";
import HomeSlider from "./HomeSlider";
import RatingSwiper from "./RatingSwiper";
const HeroSection = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/largeHomebg.png"
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
        <div className="md:w-1/2 relative xl:px-28 lg:px-10 md:px-10 md:pt-64 md:pb-52 md:py-40 pt-40  px-5">
          <div className="xl:text-5xl lg:text-5xl text-2xl md:text-4xl font-bold mb-4">
            Unlimited Movies, <br /> TV Shows, and More
          </div>
          <div className="w-10/12 my-4 text-xs md:text-sm">
            Find the greatest movies, series and TV Shows here on EXAVIEW ,
            Create your list and enjoy rating movies and sharing your
            preferences with your <br /> friends
          </div>
          <button className="btn-yellow font-semibold text-xs md:text-sm">
            Get Started
          </button>
        </div>
      

      <HomeSlider type='popular' text="You may like" />
    </div>
  );
};

export default HeroSection;
