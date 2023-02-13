import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/largeHomebg.png"
        alt="home background"
        className="w-full absolute"
        width={1000}
        height="1000"
      />
      <div className="relative xl:px-28 lg:px-10 md:px-10 md:pt-64 pt-40  px-5">
        <div className="xl:text-5xl lg:text-5xl text-2xl md:text-4xl font-bold mb-4">
          Unlimited Movies, <br/> TV Shows, and More
        </div>
        <div className="md:w-1/3 w-10/12 my-4 text-xs md:text-sm">
          Find the greatest movies, series and TV Shows here on SMARTFLIX , you can add here some text to explain the website
        </div>
        <button className="btn-yellow font-semibold text-xs md:text-sm">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
