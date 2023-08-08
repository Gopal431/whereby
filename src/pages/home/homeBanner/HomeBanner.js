import React from "react";
import "./HomeBanner.css";
import hero from "../../../assets/hero.webp";
import flight from "../../../assets/flight.webp";
import flights from "../../../assets/flight-2.webp";
import dashboard from "../../../assets/dashboard.webp";
const HomeBanner = () => {
  return (
    <div>
      <div className="main">
        <div>
          <img className="hero" src={hero} alt="hero" />
        </div>
        <div>
          <h1>
            Build your dream <br />
            video call solution
          </h1>
          <p className="para">
            Ditch corporate-looking video calls for a calm, user-friendly
            option, embedded directly into your platform. Optimized for Digital
            Mental Health, Telehealth, eLearning and more...
          </p>
        </div>
        <div>
          <img className="hero" src={flights} alt="fligh-" />
        </div>
      </div>
      <div className="dash-img">
        <img className="dashboard" src={dashboard} alt="dashboard" />
      </div>
    </div>
  );
};

export default HomeBanner;
