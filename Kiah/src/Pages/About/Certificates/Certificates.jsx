import React from "react";
import "./Certificates.css";
import Hero from "../../../components/Hero/Hero";
import Heading from "../../../components/Heading/Heading";

const Certificates = () => {
  return (
    <div>
      <Hero title="certificates" />
      <Heading
        subHead="Certificates We Achieved"
        title="INDUSTRY LEVEL CERTIFICATES"
      />
      <div className="certificates">
        <div className="certificate">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="info">
            <div className="title">ISO 9001:2015</div>
            <div className="para">
              Organizations use the standard to demonstrate the ability to
              consistently provide products and services that meet customer and
              regulatory requirements.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
