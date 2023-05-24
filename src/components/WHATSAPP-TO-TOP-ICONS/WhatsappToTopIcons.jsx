import React from 'react'
import './WhatsappToTopIcons.css'
import '../CONTACT/contact.css'
import { Link } from 'react-scroll'

const WhatsappToTopIcons = () => {
  return (
    <div>
        <div className='icons-box'>
        <Link to="navbar" smooth={true} duration={500} spy={true} exact="true" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img className="rocket" src="../images/rocket.png" alt="rocket" />
      </Link>
        <a
          className="whatsapp-btn-link"
          href="https://wa.me/+5491160510124"
          target="_blank"
        > <img className="whatsapp-icon" src="../images/whatsapplogo.png" alt="whatsapp logo"
        /></a>
        </div>
    </div>
  )
}
export default WhatsappToTopIcons
