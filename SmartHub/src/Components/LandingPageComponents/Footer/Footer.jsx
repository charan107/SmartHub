  import React, { useState } from "react";
  import "./Footer.css";
  import Button from "../../GlobalComponents/Button/Button";

  function Footer() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Message sent by ${formData.name}`);
      setFormData({ name: "", email: "", message: "" });
    };

    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Left Logo Section */}
          <div className="footer-logo">
            <div className="logo-grid">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="diamond"></div>
              ))}
            </div>
          </div>

          {/* Middle Content Section */}
          <div className="footer-content">
            <h2 className="footer-title">SmartKnowledgeHub</h2>
            <div className="footer-links">
              <div className="footer-column">
                <h3>About Us</h3>
                <ul>
                  <li>Mission</li>
                  <li>Team</li>
                  <li>Newsletter</li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Support</h3>
                <ul>
                  <li>Contact</li>
                  <li>Refund Policy</li>
                  <li>FAQ’s</li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Social</h3>
                <ul>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button text={"Submit"}/>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>Copyright © SmartKnowledgeHub</p>
          <p>Terms of Service</p>
          <p className="back-to-top">Back to top ⬆</p>
        </div>
      </footer>
    );
  }

  export default Footer;
