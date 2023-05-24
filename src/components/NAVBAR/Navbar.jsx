import React, { useState } from "react";
import "./navbar.css";
import "../fonts.css";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nav-container">
      <div className="header-container">
        <a href="#">
          <img className="logo" src="../images/logo.png" alt="logo" />
        </a>
        <div className="burger-link-container">
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
              <li >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                onClick={handleLinkClick}>
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
                 onClick={handleLinkClick}>
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
                 onClick={handleLinkClick}>
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
                 onClick={handleLinkClick}>
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
                 onClick={handleLinkClick}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
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
            <p> ¡CONTACTANOS!</p>
          </button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
