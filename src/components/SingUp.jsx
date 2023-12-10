import '../Css/SingUp.css'
import Footer from "./Footer"
import Navbar from "./Navbar"
import ImgLeft from '../img/img-sing.jpg'
import NewUser from '../img/NewUser.jpg'

const SingUp = ( ) => {
    return (
        <>
             <Navbar/>
             <div className="container">
                <div className="imgleft">
                    <img src={ImgLeft} alt="" />
                </div>
                <form className="re-container">
                    <div className="iconnewuser">
                        <img src={NewUser} alt="" />
                    </div>
                    <div className="cont-container">
                        <div className="form-group">
                            <label htmlFor="name">Nombre completo</label>
                            <input type="text" 
                                id='name'
                                name='name'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                                id='email'
                                name='email'
                                required                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phonenumber">Telefono</label>
                            <input type="number" 
                                id='phonenumber'
                                name='phonenumber'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">Contraseña</label>
                            <input type="password" 
                                id='pass'
                                name='pass'
                                required
                            />
                        </div>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
             </div>
            <Footer/>
        </>
    )
}

export default SingUp