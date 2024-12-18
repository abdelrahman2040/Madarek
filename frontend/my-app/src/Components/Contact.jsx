import React, { useState } from "react";
import './Contact.css';
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
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
              <h2>Chat to us</h2>
              <p>Our friendly team is here to help.</p>
              <a href="mailto:hi@our.com">hi@untitledui.com</a>
    
              <h2>Visit us</h2>
              <p>Come say hello at our office HQ.</p>
              <p>100 Smith Street<br />Collingwood VIC 3066 AU</p>
    
              <h2>Call us</h2>
              <p>Mon-Fri from 8am to 5pm.</p>
              <p>+1 (000) 000-0000</p>
            </div>
            <div className="contact-form">
              <h2>Got ideas? We've got the skills. Let's team up.</h2>
              <p>Tell us more about yourself and what you're got in mind.</p>
              <form>
                <div className="form-fields">
                    <input type="text" placeholder="Your name" required />
                    <input type="email" placeholder="you@company.com" required />
                    <textarea placeholder="Tell us a little about the project..." required></textarea>
                </div>
                <div className="form-options">
                  <label><input type="checkbox" name="service" value="our-products" /> Our Products</label>
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