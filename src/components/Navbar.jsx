import React from "react";
import "./navbar.css";
import './fonts.css'

const navbar = () => {
  return (
    <div className="nav-container">
      <div className="header-container">
        <img className="logo" src="../images/logo.png" alt="logo" />
        <div>
          <ul className="nav-links">
            <li className="contact-link">Contacto</li>
            <li>Sobre AWG</li>
            <li>Servicios</li>
            <li>Videos</li>
            <li>Blog</li>
          </ul>
        </div>
        <a className="whatsapp-btn-link" href="https://wa.me/+5491160510124" target="blank">  <button className="contact-button">
          <img
            className="whatsapp-logo"
            src="../images/whatsapplogo.png"
            alt="logo"
          />
          <p> iCONTACTANOS!</p>
          
        </button> </a>
      </div>
    </div>
  );
};

export default navbar;
