import NavBar from "@/components/shared/NavBar";
import React from "react";
import Image from "next/image";
const about = () => {
  return (
    <div>
      <div className="w-full relative h-screen overflow-y-hidden">
        <Image
          src="/images/aboutBg.jpg"
          alt="home background"
          className="w-full absolute hidden md:block"
          width={1000}
          height="1000"
        />
        <Image
          src="/images/aboutsmBg.jpg"
          alt="home background"
          className="w-full absolute block md:hidden"
          width={1000}
          height="1000"
        />
        <div className="bg-gradient-to-r from-black to-transparent  relative w-full h-full">
        <div className="md:pt-64 xl:px-32 lg:px-16 md:px-10 pt-52 px-5 bg-gradient-to-br w-full h-full  from-black via-[rgba(0,0,0,.6)] to-transparent relative ">
          <div className="md:w-1/2">
            <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold mb-5 uppercase">About ExaView</p>
            <p className="opacity-90 text-xs md:text-sm">
              am gravida, vulputate augue vitae, sodales erat. Praesent ac nisi
              sem. Mauris accu porta tellus. Etiam laoreet tortor et suscipit
              accumsan. Nunc eget dignissim lorem, a imperdiet magna. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae;
            </p>
            <button className="text-xs md:text-lg btn-yellow mt-5 font-semibold">Get Started</button>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default about;
