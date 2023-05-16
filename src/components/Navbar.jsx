import React, { useState } from "react";
import "./navbar.css";
import "./fonts.css";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);

  };
  
  return (
    <div className="nav-container">
      <div className="header-container">
        <img className="logo" src="../images/logo.png" alt="logo" />

        <button
          className={`burger-btn ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuClick}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div className={`box-links ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Contacto
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Sobre AWG
              </Link>
            </li>

            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Servicios
              </Link>
            </li>

            <li>
              <Link
                to="videos"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Videos
              </Link>
            </li>

            <li>
              <Link
                to="blog"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Blog
              </Link>
            </li>
          </ul>
          
        </div>

        <a
          className="whatsapp-btn-link"
          href="https://wa.me/+5491160510124"
          target="_blank"
        >
          <button className="contact-button">
            <img
              className="whatsapp-logo"
              src="../images/whatsapplogo.png"
              alt="logo"
            />
            <p> iCONTACTANOS!</p>
          </button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
