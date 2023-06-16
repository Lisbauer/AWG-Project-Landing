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
            src="https://www.youtube.com/embed/aPwjI1YzHcY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className='text-box-right'>
            <h3>¿Cómo abrir una cuenta publicitaria en Amazon?</h3>
            <h4>¿Qué tipo de campañas se pueden gestionar desde ahí?</h4>
            <p>El retail media es una práctica novedosa de las grandes tiendas online que consiste en ofrecer espacio publicitario para capitalizar sus audiencias propias. Es un lugar muy interesante para desarrollar la marca debido a que todo el tráfico tiene mucha mas intención de compra que el de otros espacios para anuncios.</p>
          </div>
         
        </div>

        <div className='video-box' data-aos="fade-right">
          <div className='text-box-left'>
            <h3>¿Cómo dar de alta un producto?</h3>
            <h4>¿Cuáles se pueden publicitar?<br />¿Cuáles no?</h4>
            <p>Descubre el proceso para dar de alta tus productos correctamente y que se luzcan en la plataforma.</p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JAQDmkc4p7A"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='video-box' data-aos="fade-left">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Pl7aMHSIi5A"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div className='text-box-right'>
            <h3>¿Cómo generar ventas en la plataforma?</h3>
            <h4>Ejemplo Amazon</h4>
            <p>Te compartimos nuestros mejores tips y secretos para comenzar a generar un buen volumen de ventas en Amazon.</p>
          </div>

        </div>

        <div className='video-box' data-aos="fade-right">
          <div className='text-box-left'>
            <h3>¿Cómo se usan los descuentos en las plataformas?</h3>
            <h4>Oferta vs Cupón vs Promoción</h4>
            <p>Existen muchas formas de dar descuentos en Amazon y Mercado libre, en este video te mostramos en qué se diferencian y cuáles consideramos que son las mejores.</p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qKTwGqkB2uw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='video-box' data-aos="fade-left">          
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-pFjvwcU3TI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className='text-box-right'>
            <h3>¿Cuáles son los servicios de AWG Retail Media?</h3>
            <p>AWG Retail Media Marketing ofrece servicios especializados para impulsar tu negocio en marketplaces. Nuestro equipo de expertos te brindará el apoyo necesario para alcanzar tus objetivos de venta.<br />Contáctanos hoy mismo y dale un impulso a tu negocio con AWG.
</p>
          </div>

        </div>

        <div className='video-box' data-aos="fade-right">
          <div className='text-box-left'>
            <h3>Glosario</h3>
            <h4>Conceptos básicos que deberías saber antes de incursionar en una plataforma de e-commerce</h4>
            <p>El glosario se divide en cuatro categorías: palabras generales, etiquetas, glosario publicitario y lenguaje del marketing. Estos términos son fundamentales para comprender y tener éxito en el entorno de venta y publicidad de Amazon.</p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-pFjvwcU3TI"
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
