import React from 'react';
import './Home.css';
import CarouselComponent from '../../components/Carousel/CarouselComponent';
import { IoSettingsOutline } from "react-icons/io5";
import Heading from '../../components/Heading/Heading';
import { Link } from 'react-router-dom';
import { GiBrodieHelmet, GiButterflyFlower } from "react-icons/gi";


const Home = () => {
  return (
    <div className="home">
      <div className="carousel"><CarouselComponent/></div>
      <div className="key-features">
        <div className="feature">
          <div className="feature-logo"> <IoSettingsOutline /></div>
          <div className="feature-info">
            <h3>Creditable Intigrity</h3>
            <p>Our Business Services are based on our Creditable Integrity of <b>Honest Communication, Genuine Products and Stronger Post Business Services.</b></p>
            <Link to={'/aboutUs'}>READ MORE</Link>
          </div>
        </div>
        <div className="feature">
        <div className="feature-logo"> <GiBrodieHelmet /></div>
          <div className="feature-info">
            <h3>Effective Team Work</h3>
            <p>Our Business Style solely relies on our <b>efficient team</b>, beginning from our supplier to the <    b>hipment team working</b> in unison.</p>
            <Link to={'/aboutUs'}>READ MORE</Link>
          </div>
        </div>
        <div className="feature">
        <div className="feature-logo"> <GiButterflyFlower /></div>
          <div className="feature-info">
            <h3>Quality Assistance</h3>
            <p>Our Result Oriented Products are based on <b>Quality Checks & Certifications</b> through our <b>in-house capabilities & private or public Testing Laboratories.</b></p>
            <Link to={'/aboutUs'}>READ MORE</Link>
          </div>
        </div>
      </div>
      <Heading title="As Of March" special="2024"/>
      <div className="achievement"></div>
      <Heading subHead="Our Services" title="Materials we provide"/>
      <Heading subHead="our social" title="SOCIAL MEDIA OF KIAH METALLURGICAL" />
      <Heading subHead="testimonials" title="what people say" />
    </div>
  )
}

export default Home