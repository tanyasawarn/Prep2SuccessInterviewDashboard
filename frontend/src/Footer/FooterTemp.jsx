import React from 'react';
import { Link } from 'react-router-dom';
import './FooterTemp.css';

// Import icons for social media
import { FaYoutube, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaQuora, FaGoogle } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li>About Us</li>
          <li>Become a Career Coach</li>
          <li>Terms & Condition</li>
          <li>Refund/Cancellation Policy</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-column">
     
          <h3>Contact Us</h3>
     
        <p>support@skillfyme.in</p>
        <p>+91-9606820252</p>
        <p>Address:</p>
        <p>Hosa Road, Sai Sree Layout,</p>
        <p>560100, Bengaluru,</p>
        <p>India</p>
      </div>
      <div className="footer-column">
        
      </div>
    </footer>
  );
};

export default FooterComponent;

