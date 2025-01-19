import React from "react";
import "./../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-details">
          <div className="inner-footer-content">
            <h1>MovieClix</h1>
            <p>
              Discover your next favorite movie with MovieApp! Explore top-rated
              and upcoming movies, read detailed descriptions, check ratings,
              and learn about the top cast all in one place. Your ultimate movie
              guide awaits!
            </p>
          </div>
        </div>
        <div className="footer-details">
          <div className="inner-footer-content">
            <h4>Contact Us</h4>
            <p>
              MovieClix, Four Square Street, Building No : 123, Mumbai - 400 001
            </p>
            <p>Contact : 1000 1000</p>
            <p>Emial : movieClix@email.com</p>
          </div>
        </div>
        <div className="footer-details"> 
            <div className="Social-Media-Section">
                <h2>Our Social Presence</h2>
                <div className="social-section">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
