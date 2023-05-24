import React from 'react';
import './videos.css';

const Videos = () => {
  return (
    <div>
      <section className='video-container'>
        <h2 data-aos="fade-down">CONOCÉ <span className='mas-span'>MÁS</span></h2>

        <div className='video-box' data-aos="fade-left"> 
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_yqSbnbUsj4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className='text-box-right'>
            <h3>¿Cómo abrir una cuenta publicitaria en Amazon?</h3>
            <h4>¿Qué tipo de campañas se pueden gestionar desde ahí?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>
         
        </div>

        <div className='video-box' data-aos="fade-right">
          <div className='text-box-left'>
            <h3>¿Cómo dar de alta un producto?</h3>
            <h4>¿Cuáles se pueden publicitar y cuáles no?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_yqSbnbUsj4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='video-box' data-aos="fade-left">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_yqSbnbUsj4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className='text-box-right'>
            <h3>¿Cómo generar ventas en la plataforma?</h3>
            <h4>Ejemplo Amazon</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>

        </div>

        <div className='video-box' data-aos="fade-right">
          <div className='text-box-left'>
            <h3>¿Cómo se usan los descuentos en las plataformas?</h3>
            <h4>Oferta vs Cupón vs Promoción</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_yqSbnbUsj4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='video-box' data-aos="fade-left">          
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_yqSbnbUsj4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className='text-box-right'>
            <h3>¿Cuáles son los servicios de AWG Retail Media?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>

        </div>

        <div className='video-box' data-aos="fade-right">
          <div className='text-box-left'>
            <h3>Glosario</h3>
            <h4>Conceptos básicos que deberías saber antes de incursionar en una plataforma de e-commerce</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_yqSbnbUsj4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>    
      </section>
    </div>
  );
}

export default Videos;
