import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";

const nav_items = [
  {
    icon: <SlLocationPin />,
    heading: "Location",
    text: "16/1, Ratan Mansion Building, 2nd Khetwadi Lane, Mumbai, Maharashtra - 400004"
  },
  {
    icon: <CiMobile4 />,
    heading: "CALL US",
    text: "(+91) 8850414439"
  },
  {
    icon: <MdOutlineWatchLater />,
    heading: "Hours",
    text: "Mon - Sat: 10am - 6:30pm"
  }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="navigation-container">
      {/* Top Header */}
      <div className={`top-header ${isScrolled ? 'hidden' : ''}`}>
        <div className="top-left">
          <img src="https://kiahmetallurgical.com/images/logo-final.jpg" alt="" />
        </div>
      </div>

      <div className={`bottom-header ${isScrolled ? 'sticky' : ''}`}>
        <div className={`logo ${isScrolled ? 'show-logo' : 'hide-logo'}`}>
          <img src="https://kiahmetallurgical.com/images/logo-final.jpg" alt="Logo" />
        </div>
        <nav className="nav-links">
          <Link to={'/'}>Home</Link>
          <Link>About
            <div className="menu-items">
              <Link to={'/aboutus'}> About Us</Link>
              <Link to={'/make-in-india'}>Make In India</Link>
              <Link to={'/certificates'}>Certificates</Link>
            </div>
          </Link>
          <Link>Services
            <div className="menu-items">
              <Link to={'/market-sector'}>Market Sector</Link>
              <Link to={'/export-industries'}>Exported Industries</Link>
              <Link to={'/export-countries'}>Exported Countries</Link>
            </div>
          </Link>
          <Link>Product
            <div className="menu-items aside">
              <div className="left-items">
                <Link to={'/products'}>All Products</Link>
                <Link to={'/valves'}>Valves</Link>
                <Link to={'/buttweld-fitings'}>Buttweld Fittings</Link>
                <Link to={'/bright-bar'}>Bright Bar</Link>
                <Link to={'/fasteners'}>Fasteners</Link>
                <Link to={'/ferrule'}>Ferrule Instrumentation...</Link>

              </div>
              <div className="left-items">
                <Link to={'/forged-fittings'}>Forged Fittings</Link>
                <Link to={'/pipe-flanges'}>Pipes Flanges</Link>
                <Link to={'/plates&sheets'}>Plates & Sheets</Link>
                <Link to={'/tube-fittings'}>Tube Fittings</Link>
                <Link to={'/pipes&tubes'}>Pipes & Tubes</Link>
                <Link to={'/fabrication-works'}>Fabrication Works</Link>
              </div>
            </div>
          </Link>
          <Link>Gallery
            <div className="menu-items">
              <Link to={'/photos'}>Photos</Link>
              <Link to={'/videos'}>Videos</Link>
              <Link to={'/exhibitions'}>Exhibitions</Link>
            </div>
          </Link>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/contactUs'}>Contact Us</Link>
          <Link to={'/e-catalogue'}>E catalogue</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
{/* <div className="top-right">
{nav_items.map((item, index) => (
  <div className="sect" key={index}>
    <div className="icon">{item.icon}</div>
    <div className="details">
      <h5>{item.heading}</h5>
      <p>{item.text}</p>
    </div>
  </div>
))}
</div> */}