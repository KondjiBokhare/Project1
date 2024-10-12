import React from "react";
import { LuMapPin } from "react-icons/lu";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";
import { IoLogoLinkedin, IoMdPhonePortrait } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="cone">
          <div className="address">
            <h2>ADDRESS</h2>
            <div className="address-info">
              <div className="adress-logo">
                <LuMapPin />
              </div>
              <p>
                Office No. 16/1, Ratan Mansion, Ground Floor, 2nd Khetwadi Lane,
                Behind Alankar Cinema, Girgaon, Mumbai, Maharashtra 400004
              </p>
            </div>
          </div>
          <div className="social-media">
            <h2>FOLLOW US ON</h2>
            <div className="links">
            <a href="www.google.com" target="_blank">
              <TiSocialFacebook />
            </a>
            <a href="">
              <TiSocialInstagram />
            </a>
            <a href="">
              <TiSocialYoutube />
            </a>
            <a href="">
              <IoLogoLinkedin />
            </a>
            <a href="">
              <FaSquareXTwitter />
            </a>
            </div>
          </div>
        </div>
        <div className="ctwo">
          <h2>CONTACT US</h2>
          <div className="ctwo-sub">
            <div className="phone-logo">
              <IoMdPhonePortrait />
            </div>
            <div className="phone-info">
              <h3>Call Us:</h3>
              <div className="number">
                +91 1234567890
              </div>
            </div>
          </div>
          <div className="ctwo-sub">
          <div className="phone-logo">
              <IoMdPhonePortrait />
            </div>
            <div className="phone-info">
              <h3>Call Us:</h3>
              <div className="number">
                +91 1234567890
              </div>
            </div>
          </div>
          <div className="ctwo-sub">
            <div className="mail-logo">
              <IoMailOutline />
            </div>
            <div className="mail-info">
              <h3>Mail Us:</h3>
              <div className="mail">
                abc@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="cthree">
          <h2>DIRECT MAIL</h2>
          <div className="mail-links">
            <a href="#">
              For Fastners
            </a>
            <a href="#">
              For Wiremesh
            </a>
            <a href="#">
              For Valves
            </a>
            <a href="#">
              Mail Us
            </a>
          </div>
        </div>
        <div className="cfour">
          <h2>REACH US AT</h2>
          <div className="map-location">
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15092.947442187073!2d72.812089!3d18.965144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce16be63a6cd%3A0x26e577ff202f818a!2sKiah%20Metallurgical%20Indian%20Exporters!5e0!3m2!1sen!2sin!4v1728464933755!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrite">
        <p>&copy; 2023 Kiah Metallurgical. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
