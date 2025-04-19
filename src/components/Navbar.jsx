import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li className="contact">
            <Link to="/">+1800 555 2424 contact@tenuzahotel.com</Link>
          </li>
          <li>
            <Link to="/rooms">Accomodation</Link>
          </li>
          <li>
            <Link to="/tours">Services</Link>
          </li>
        </ul>
        <div className="nav-header">
          <Link to="/">
            <h1>Tenuza</h1>
          </Link>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li className="about">
            <Link to="/">About</Link>
          </li>
          <li className="email">
            <Link to="mailto:contact@tenuzahotel.com">Contact</Link>
          </li>
          <li className="reserve">
            <Link to="mailto:contact@tenuzahotel.com">Reserve now</Link>
          </li>
        </ul>
        <button type="button" className="nav-btn" onClick={handleToggle}>
          <FaBars className="nav-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
