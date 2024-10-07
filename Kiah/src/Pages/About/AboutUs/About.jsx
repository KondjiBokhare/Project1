import React from "react";
import "./About.css";
import { PiWrenchThin } from "react-icons/pi";
import { LuHardHat } from "react-icons/lu";
import { GiButterflyFlower } from "react-icons/gi";

function AboutUs() {
  return (
    <div className="about-us-page">
      <section className="hero-section">
        <div className="hero-content">
          <h2>ABOUT KIAH METALLURGICAL</h2>
        </div>
      </section>
      <section className="about-us-section">
        <div className="info">
          <h2>About Us</h2>
          <p>
            Our Parent Company was found in 1974 by a common man turned steel
            industry veteran Mangilalji Doshi. It was a small family business
            supplying local state businesses. The main strategy was the value of
            customers and to meet their needs satisfactorily. Initially, the
            business was supplying only Cold Rolled Steel Rods. With time, his
            children joined in the business and worked in unison to grow and
            expand the business portfolio by serving more states in India and
            supplying wider product range like Steel Pipes, Steel Sheets, Steel
            Plates, Steel Coils, Steel Wires, Steel Pipe Fittings, Steel
            Flanges, Steel Fasteners and more... The year of 2018 saw the most
            growth and expansion when the company started the Export Division
            under the name of KIAH METALLURGICAL INDIAN EXPORTERS. This branch
            would be focused on supplying the Export Quality Premium Engineering
            Products to the international market and striving to make "MAKE IN
            INDIA" a reality.
          </p>
        </div>
        <div className="video">
          <video src="https://www.youtube.com/watch?v=pXY2mZ1biVQ&feature=youtu.be">
            <img
              src="https://i.ytimg.com/vi/pXY2mZ1biVQ/sddefault.jpg"
              alt="video"
            />
          </video>
        </div>
      </section>
      <section className="mission-section">
        <div className="credible">
          <div className="mission-section-logo"><PiWrenchThin /></div>
          <div className="mission-section-heading">Creditable Integrity</div>
          <div className="mission-section-info">
            <p>
            Our Business Services are based on our Creditable Integrity of <b>Honest Communication, Genuine Products and Stronger Post Business Services.</b>
            </p>
          </div>
        </div>
        <div className="effective">
          <div className="mission-section-logo"><LuHardHat /></div>
          <div className="mission-section-heading">Effective Team Work</div>
          <div className="mission-section-info">
            <p>Our Business Style solely relies on our <b>efficient team</b>, beginning from our supplier to the <b>hipment team working </b>in unison.</p>
          </div>
        </div>
        <div className="quality">
          <div className="mission-section-logo"><GiButterflyFlower /></div>
          <div className="mission-section-heading">Quality Assurance</div>
          <div className="mission-section-info">
            <p>Our Result Oriented Products are based on <b>Quality Checks & Certifications</b> through our <b>in-house capabilities & private or public Testing Laboratories.</b></p>
          </div>
        </div>
      </section>
      <h2>EXPERT TEAM</h2>
      <section className="team-info">
        <div className="card">
          <div className="image">
            <img
              src="https://www.kiahmetallurgical.com/images/resource/prateen.png"
              alt=""
            />
          </div>
          <div className="card-info">
            <h3>Mr. Prateen</h3>
            <p>Managing Director</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img
              src="https://www.kiahmetallurgical.com/images/resource/prateen.png"
              alt=""
            />
          </div>
          <div className="card-info">
            <h3>Mr. Prateen</h3>
            <p>Managing Director</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img
              src="https://www.kiahmetallurgical.com/images/resource/prateen.png"
              alt=""
            />
          </div>
          <div className="card-info">
            <h3>Mr. Prateen</h3>
            <p>Managing Director</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img
              src="https://www.kiahmetallurgical.com/images/resource/prateen.png"
              alt=""
            />
          </div>
          <div className="card-info">
            <h3>Mr. Prateen</h3>
            <p>Managing Director</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img
              src="https://www.kiahmetallurgical.com/images/resource/prateen.png"
              alt=""
            />
          </div>
          <div className="card-info">
            <h3>Mr. Prateen</h3>
            <p>Managing Director</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img
              src="https://www.kiahmetallurgical.com/images/resource/prateen.png"
              alt=""
            />
          </div>
          <div className="card-info">
            <h3>Mr. Prateen</h3>
            <p>Managing Director</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
