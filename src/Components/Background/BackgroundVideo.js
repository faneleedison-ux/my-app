import React from 'react';


import bgvideo from "../../assets/Video/bgvideo.mp4";
const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay muted loop>
        <source src={bgvideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
