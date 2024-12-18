import React, { useState } from "react";
import './Contact.css';
import chatImage from '../Assets/chat.png';
import visitUs from '../Assets/location-mark.png';
import callUs from '../Assets/phone-call.png';
import facebook_logo from '../Assets/facebook.png';
import linkedin_logo from '../Assets/linkedin.png';
import twitter_logo from '../Assets/twitter.png';
import youtube_logo from '../Assets/youtube.png';
import instagram_logo from '../Assets/instagram.png';

function Contact() {
    const [name, setName] = useState("");
    const [topic, setTopic] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted", { name, email, topic, message });
    };

    return (
        <div className="contact-wrapper">
          <div className="contact-container">
            <div className="contact-info">
              <div className="chat-to-us">
                <div className="container-img">
                  <img src={chatImage} alt="Chat Us" />
                </div>
                <h2>Chat to us</h2>
                <p>Our friendly team is here to help.</p>
                <a href="mailto:hi@our.com">hi@untitledui.com</a>
              </div>

              <div className="visit-us">
                <div className="container-img">
                  <img src={visitUs} alt="Visit Us" />
                </div>
                <h2>Visit us</h2>
                <p>Come say hello at our office HQ.</p>
                <p>100 Smith Street<br />Collingwood VIC 3066 AU</p>
              </div>

              <div className="call-us">
                <div className="container-img">
                  <img src={callUs} alt="Call Us" />
                </div>
                <h2>Call us</h2>
                <p>Mon-Fri from 8am to 5pm.</p>
                <p>+1 (000) 000-0000</p>
              </div>

              <div className="social-icons">
                <img src={facebook_logo} alt="facebook" />
                <img src={instagram_logo} alt="instagram" />
                <img src={linkedin_logo} alt="linkedin-logo" />
                <img src={youtube_logo} alt="facebook" />
                <img src={twitter_logo} alt="facebook" />
                {/* <FaFacebook size={25} />
                <FaInstagram size={25}  />
                <FaLinkedin size={25} />
                <FaYoutube size={25} />
                <FaTwitter size={25} /> */}
              </div>

            </div>
            <div className="contact-form">
              <h2>Got ideas? We've got the skills. Let's team up.</h2>
              <p>Tell us more about yourself and what you're got in mind.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-fields">
                    <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <textarea placeholder="Tell us a little about the project..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <div className="form-options">
                  <label><input type="checkbox" name="service" value="Our-Prroducts" /> Our Products</label>
                  <label><input type="checkbox" name="service" value="bugs" /> Bugs</label>
                  <label><input type="checkbox" name="service" value="user-research" /> User research</label>
                  <label><input type="checkbox" name="service" value="strategy" /> Strategy &amp; consulting</label>
                  <label><input type="checkbox" name="service" value="other" /> Other</label>
                </div>
                <button type="submit">Let's get started!</button>
              </form>
            </div>
          </div>
        </div>
    );    
}

export default Contact;