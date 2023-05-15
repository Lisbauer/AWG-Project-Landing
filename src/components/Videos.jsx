import React from 'react'
import './videos.css'
import YouTube from 'react-youtube';


const Videos = () => {
  return (
    <div>
      <section className='video-container'>
        <h2>CONOCÉ <span className='mas-span'>MÁS</span></h2>

        <div className='video-box'>
        <YouTube videoId="_yqSbnbUsj4" />
          <div className='text-box-right'>
            <h3>¿Cómo abrir una cuenta publicitaria en Amazon?</h3>
            <h4>¿Qué tipo de campañas se pueden gestionar desde ahí?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>
        </div>

        <div className='video-box'>
          <div className='text-box-left'>
            <h3>¿Cómo dar de alta un producto?</h3>
            <h4> ¿Cuáles se pueden publicitar y cuáles no?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>  
          <YouTube videoId="_yqSbnbUsj4" />
        </div>

        <div className='video-box'>
        <YouTube videoId="_yqSbnbUsj4" />
          <div className='text-box-right'>
            <h3>¿Cómo generar ventas en la plataforma?</h3>
            <h4> Ejemplo Amazon</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>
        </div>

        <div className='video-box'>
       
          <div className='text-box-left'>
            <h3>¿Cómo se usan los descuentos en las plataformas?</h3>
            <h4>Oferta vs Cupón vs Promoción</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div> 
          <YouTube videoId="_yqSbnbUsj4" />
        </div>

        <div className='video-box'>
        <YouTube videoId="_yqSbnbUsj4" />
          <div className='text-box-right'>
            <h3>¿Cuáles son los servicios de AWG Retail Media?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div>
        </div>

        <div className='video-box'>
       
          <div className='text-box-left'>
            <h3>Glosario</h3>
            <h4>Conceptos básicos que deberías saber antes de incursionar en una plataforma de e-commerce</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus lorem, id auctor lectus finibus ac. In hac habitasse platea dictumst...</p>
          </div> 
          <YouTube videoId="_yqSbnbUsj4" />
        </div>
      </section>
    </div>
  )
}

export default Videos