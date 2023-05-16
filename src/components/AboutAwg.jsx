import React from 'react'
import './aboutAwg.css'

const AboutAwg = () => {
  return (
    <div className='abt-container'>
      <div className='picabt-container' data-aos="fade-down">
        <section className='text-container'>
        <div className='text-box'>
            <h2 className='about-text2'><strong> SOBRE <span className='awg'>AWG</span></strong></h2>
            <h3 className='about-text3'>Somos AWG Retail Media.</h3>
            <h3 className='about-text4'>Especialistas certificados en las principales plataformas de eCommerce.</h3>
            <h3 className='about-text4'>Ayudamos a las empresas a llevar su negocio digital al siguiente nivel.</h3>
            <h3 className='about-text4'>Oficinas globales.</h3>
        </div>
        </section>

        <section className='abt-img-container'>
        <img className="megafono" src="../images/about-awg.png" alt="megafono" />
        </section>
      </div>
    </div>
  )
}

export default AboutAwg