import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <img
          src="https://www.kiahmetallurgical.com/images/main-slider/slide-1.png
"
          alt="Description of image 1"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img
          src="https://www.kiahmetallurgical.com/images/main-slider/slide-2.png
"
          alt="Description of image 2"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          src="https://www.kiahmetallurgical.com/images/main-slider/slide-3.png
"
          alt="Description of image 3"
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
