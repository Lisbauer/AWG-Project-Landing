import React from 'react'
import './services.css'

const Services = () => {

  return (
    <div className='srv-container'>
        <div>
            <h2 className='srv-tittle'>SERVICIOS</h2>
            <section className='srv-section'>

                <div className='srv-box'>
                    <h3 className='svc-subttl'>ABM de productos</h3>
                    <p>Ayudamos a <span className='stg-lt'>subir</span> todos tus productos a la plataforma de eCommerce con la que quieras trabajar.</p>
                    <p><span className='stg-lt'>Modificamos</span> sus detalles si hay cambios.</p>
                    <p> <span className='stg-lt'>Damos de baja</span> los productos en caso de discontinuar su venta.</p>
                </div>

                <div className='srv-box'>
                    <h3 className='svc-subttl'>Retail Readines</h3>
                    <p><span className='stg-lt'>Optimizamos las descripciones</span>, títulos, bullets y el upload de las imágenes con los parámetros adecuados según cada plataforma de eCommerce.</p>
                    <p>Mejoramos tu <span className='stg-lt'>Listing Quality Score.</span></p>
                    <p>Te ayudamos a posicionarte en las primeras <span className='stg-lt'>posiciones de búsqueda.</span></p>
                </div>

                <div className='srv-box'>
                    <h3 className='svc-subttl'>Gestión de cuentas publicitarias</h3>
                    <p><span className='stg-lt'>Potenciamos ventas</span> tanto en Amazon, Mercadolibre, Walmart, Google, Facebook o cualquier otra plataforma de España, US o Latam.</p>
                    <p>Un servicio, <span className='stg-lt'>todas tus plataformas.</span></p>
                    <p><span className='stg-lt'>Creación, optimización y seguimiento</span> de todas tus campañas.</p>
                </div>
            </section>

        </div>

    </div>
  )
}

export default Services
