import React from "react";
import VideoArctic from '../assets/images/arctic-master.mp4';
import "../styles/Videomain.css";

const Videomain = () => {
  return (
    <div className="video-container">
      <video 
        className="header-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={VideoArctic} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
    </div>
  )
}

export default Videomain;