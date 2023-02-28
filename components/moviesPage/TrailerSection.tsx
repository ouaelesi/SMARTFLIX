import React from "react";

const TrailerSection: React.FC<any> = ({ videoId }) => {
  return (
    <div>
      <div className="xl:px-32 text-2xl py-10">Watch Trailer Now</div>
      <div className="w-1/2 h-96 mx-auto mb-32">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerSection;
