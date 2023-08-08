import React from "react";
import ReactPlayer from "react-player";
import "./VideoCall.css";
import { Link } from "react-router-dom";
const VideoCall = () => {
  return (
 <div>
       <div className="main">
      <div>
        <ReactPlayer
          url={
            "https://framerusercontent.com/modules/assets/uaIwARGiGUghYTVon1P0UN4b9rc~7IMRbCDTHtXD0d7DUOh2swt-G2bPouTkBkBWhAj0CgY.mp4"
          }
          controls={false}
        />
      </div>
      <div>
        <h3>The easiest way to add video calls into your platform</h3>
        <p className="para">Get started in minutes with just a few lines of code. Fully branded, customizable and seamlessly integrated into your platform using our API.</p>
      <div className="more-link"><Link>Discover more</Link><br/>
      <button className="btn free">Try for free</button></div>
      
      </div>
      
    </div>
    <div>
        <p className="end-para">Trusted by 5+ million people at companies like</p>
      </div>
 </div>
  );
};

export default VideoCall;
