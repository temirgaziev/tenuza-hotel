import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <h1>Tenuza</h1>
        <ul>
          <li><Link to="/">Services</Link></li>
          <li><Link to="/">Reserve</Link></li>
          <li className="email">
            <Link to="mailto:contact@tenuzahotel.com">Contact</Link>
          </li>
          <li><FaTwitter className="twitter" /></li>
          <li><FaInstagram className="instagram" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
