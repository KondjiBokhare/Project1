import React from 'react';
import './Heading.css';

const Heading = (props) => {
  return (
    <div className="heading">
      <div className="sm-head"><i>{props.subHead}</i></div>
      <div className="main-head"><h1>{props.title}</h1><h1 className='special'>{props.special}</h1></div>
      <div className="line"></div>
    </div>
  )
}

export default Heading