import React from "react";
import "./MakeInIndia.css";
import Hero from "../../../components/Hero/Hero";

const MakeInIndia = () => {
  return (
    <div>
      <Hero title="make in india" />
      <div className="make-in-india">
        <div className="image">
          <img
            src="https://www.kiahmetallurgical.com/images/resource/Make-In-India-Logo.png"
            alt=""
          />
        </div>
        <div className="info">
          <p>
            Indian Prime Minister, Sri. Narendra Modi, is endorsing Make In
            India as one of the most important amendments in the Indian
            Marketing History. This has given essential capability to the
            foreign investors and international investment is at an all time
            high in the Indian Market Sector today. Indian Manufacturers have
            seen a potential growth leading to high quality Indian manufactured
            items.
          </p>
          <p>
            Taking his trend setting initiative up to our sleeve, we wear this
            Make In India mark as a proud Industrialist. We assure that majority
            of our supplied and exported products are manufactured locally with
            the best of Indian originated raw materials.
          </p>
          <p>
            We also understand that major industries and businesses require
            specific imported raw materials and to accomplish their needs we
            also import high quality material based on the client
            specifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeInIndia;
