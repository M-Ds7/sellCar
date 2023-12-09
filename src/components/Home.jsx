import '../Css/Home.css'
import Footer from "./Footer"
import Navbar from "./Navbar"
import ImgInicio from '../img/imgInicio2.jpg'
import SearchCar from '../img/SearchCar.png'
import SellCar from '../img/VentaAuto.jpg'
import BuyCar from '../img/compra.jpg'
import { useState } from 'react'

const Home = () => {
    const [showModal, setShowModal] = useState("")
    const [modalContent, setModalContent] = useState('')

    const toggleModal = (content) =>{
        setShowModal(true)
        setModalContent(content)
    }

    const closeModal = ( ) =>{
        setShowModal(true)
    }

    return (
        <>
            <Navbar />
            <img src={ImgInicio} alt="imagen de inicio" />
            <main className='main-content'>
                <h1>&#161; Bienvenido a Venta segura &#33;</h1>
                <h2>Tu destino confiable para comprar o vender automóviles de forma segura y conveniente</h2>
                <div className="container-circle">
                    <div className="img-circle">
                        <img src={SearchCar} alt="Imagen de buscando auto" />
                    </div>
                    <button className='more-information' onClick={() => toggleModal('info1')}>Saber mas...</button>
                    <div className="img-circle">
                        <img src={SellCar} alt="Imagen de venta de auto" />
                    </div>
                    <button className='more-information' onClick={() => toggleModal('info2')}>Saber mas...</button>
                    <div className="img-circle">
                        <img src={BuyCar} alt="Imagen de comprar auto" />
                    </div>
                    <button onClick={() => toggleModal('info3')} className='more-information'>Saber mas...</button>
                </div>
            </main>
            {showModal && (
                <div className="modal" tabIndex="-1" style={{display: 'bloack'}}>
                    <div className="modal-contenido">
                        {modalContent === 'info1' && (
                            <p>
                                ¿Estás buscando el auto de tus sueños? En VentaSegura, te ofrecemos una amplia gama de vehículos <br />
                                cuidadosamente seleccionados para satisfacer tus necesidades y preferencias. Desde autos deportivos <br />
                                elegantes hasta prácticos coches familiares, tenemos el vehículo perfecto para ti. <br />
                                Nuestro compromiso es ofrecerte una experiencia sin complicaciones, <br />
                                brindándote la seguridad y la tranquilidad que necesitas al adquirir tu próximo automóvil.
                            </p>
                        )}
                        {modalContent === 'info2' && (
                            <p>
                                ¿Deseas vender tu auto? ¡Estás en el lugar adecuado! En VentaSegura, te brindamos la <br />
                                plataforma ideal para que tu vehículo sea visto por una amplia audiencia de posibles compradores. <br />
                                Nuestra dedicación a la transparencia y la confiabilidad significa que tu experiencia <br />
                                de venta será segura y sin sorpresas desagradables. Con nuestro proceso fácil de usar, <br />
                                podrás publicar tu anuncio rápidamente y conectarte con compradores genuinos interesados <br />
                                en tu automóvil. <br />

                                En VentaSegura, nuestra prioridad es tu satisfacción y tranquilidad. Nuestro equipo <br />
                                está comprometido en garantizar que cada transacción se realice de manera segura y <br />
                                transparente, ofreciéndote un ambiente de confianza y apoyo en cada paso del camino.
                            </p>
                        )}
                        {modalContent === 'info3' && (
                            <p>
                                ¿Listo para dar el siguiente paso en la compra o venta de tu auto? Únete a la <br />
                                comunidad de VentaSegura hoy mismo y experimenta la diferencia. Confía en nosotros <br />
                                para hacer realidad tus sueños automovilísticos con facilidad y confianza. <br />
                                ¡Estamos aquí para ayudarte a encontrar el auto perfecto o a vender el tuyo <br />
                                de manera segura y exitosa!
                            </p>
                        )}
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}

export default Home
