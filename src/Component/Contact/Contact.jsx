import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-right">
          <p className="contact-right-heading">Get in touch by email</p>
          <form id="form" autoComplete="off">
            <div className="row">
              <div className="row1">
                <label htmlFor="fname">Your Name:</label>
                <input type="text" id="fname" name="fname" placeholder="Ex: John Doe"/>
              </div>
              <div className="row2">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Ex: email@gmail.com" required autoComplete="off" />
              </div>
            </div>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="Enter Subject" required autoComplete="off" />
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" placeholder="Enter here" rows="3" cols="60" required autoComplete="off" />
            <br />
            <input type="submit" value="Send Message" id="submit" />
          </form>
        </div>
        <div className="contact-left">
          <div className="width">
            <p id="width-heading">Visit Us</p>
            <div className="address">
              <h4>Address</h4>
              <div className="location">
                <FaLocationDot className="location-svg" />
                <p>Feltham House Ground Floor 10 J.N. Heredia Road Ballard Estate Mumbai 400001</p>
              </div>
            </div>
            <div className="contact-list">
              <h4>Contact</h4>
              <div className="phone">
                <FaPhone className="phone-svg" />
                <p>022 – 22674466 / 35114610 / 35114597</p>
              </div>
              <div className="email">
                <MdEmail className="email-svg" />
                <p>care@pantofurniture.com</p>
              </div>
            </div>
            <div className="opentime">
              <h4>Open Time</h4>
              <p>Monday-Friday: 10:00-20:00</p>npm
              <p>Saturday-Sunday: 11:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;