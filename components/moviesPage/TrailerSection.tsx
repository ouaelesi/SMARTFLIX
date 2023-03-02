import React from "react";

const TrailerSection: React.FC<any> = ({ videoId }) => {
  return (
    <div className="px-5" id="trailerSection">
      <div className="xl:px-32 md:text-2xl text:lg py-10 ">Watch Trailer Now</div>
      <div className="md:w-1/2 h-96 mx-auto mb-20">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerSection;
