import React from 'react';
import './Hero.css';

const Hero = (props) => {
  return (
   <div className="hero">
    <div className="title">
      <h2>{props.title}</h2>
      <span className="special">{props.special}</span>
    </div>
   </div>
  );
};

export default Hero;