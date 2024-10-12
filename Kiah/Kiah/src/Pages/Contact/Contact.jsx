import React from "react";
import "./Contact.css";
import Hero from "../../components/Hero/Hero";

const Contact = () => {
  const Submit = () => {
    alert("Form submitted successfully!");
  };
  return (
    <div>
      <Hero title="Contact us" />

      <div className="contactUs">
        <div className="contact-form">
          <div className="heading">
            <h3>SEND US MESSAGE</h3>
          </div>
          <div className="para">
            <p>
              Kiah Metallugical always try to help you, If you have any queries
              regarding services and products feel free to ask.
            </p>
          </div>
          <div className="form">
            <form action="">
              <div className="fline">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="sline">
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Subject" />
              </div>
              <div className="btn">
                <button type="button" onClick={Submit}>
                  SUBMIT NOW
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="location">
          <div className="heading">
            <h3>lOCATION</h3>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15092.947442187073!2d72.812089!3d18.965144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce16be63a6cd%3A0x26e577ff202f818a!2sKiah%20Metallurgical%20Indian%20Exporters!5e0!3m2!1sen!2sin!4v1728464933755!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="location-info">
          <div className="address">
            <div className="logo"></div>
            <div className="add-info">
              Office No. 16/1, Ratan Mansion, Grnd. Flr., 2nd Khetwadi Lane,
              Behind Alankar Cinema, Mumbai- 400004
            </div>
          </div>
          <div className="number">
            <div className="logo"></div>
            <div className="num-info">+91 8850414439</div>
          </div>
          <div className="number">
            <div className="logo"></div>
            <div className="num-info">+91 8850414439</div>
          </div>
          <div className="email">
            <div className="logo"></div>
            <div className="email-info">abc@gmail.com</div>
          </div>
          <div className="time">
            <div className="logo"></div>
            <div className="time-info">Mon - Sat: 10am - 6:30pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
