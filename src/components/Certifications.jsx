import React from 'react'
import './certifications.css'

const Certifications = () => {
  return (
    <div className='cert-container'>  

    <h2 className='cert-text'>CERTIFICACIONES</h2>

        <section className='cert-section'>
            <div className='cert-box'>
            <img className="certif-img-google" src="../images/google.png" alt="google certification" />
            <img className="certif-img-meta" src="../images/meta-img.png" alt="meta certification" />
            <img className="certif-img-amazon" src="../images/amazon-img.png" alt="amazon certification" />
            </div>
        </section>


        <div className='footer-box'> 

        <div className='wpp-ctc'>
        <h4>¡Contactanos!</h4>
        <img className="wpp-icon" src="../images/whatsapplogo.png" alt="whatsapp icon" />
        </div>

        <a href=""><h4>ecommerce@awg.la</h4></a>
        <h4>AWG - 2023 ALL RIGHTS RESERVED</h4>

        </div>
    </div>
  )
}

export default Certifications