import '../Css/VentaAuto.css'
import { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const VentaAuto = () => {
    const [imagen, setImagen] = useState(null)
    const [emotor, setEMotor] = useState('')
    const [ecarroceria, setECarroceria] = useState('')
    const [einterior, setEInterior] = useState('')
    const [modificaciones, setModificaciones] = useState('')
    const [factura, setFactura] = useState('')
    const [esat, setESat] = useState('')
    const [numserie, setNumserie] = useState('')
    const [marcaje, setMarcaje] = useState('')
    const [adeudo, setAdeudo] = useState('')

    const hadleImagenChange = (event) => {
        const file = event.target.value[0]
        setImagen(file)
    }

    return (
        <>
            <Navbar />
            <main className='main-content3'>
                <form action="form-container">
                    <div className="contentleft">
                        <div className="input-group">
                            <label htmlFor="imagen">Imagen del carro</label>
                            <input type="file"
                                id="imagen"
                                name="image"
                                accept="image/*"
                                onChange={hadleImagenChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emotor">Estado del motor</label>
                            <input type="text"
                                id="emotor"
                                name="emotor"
                                onChange={() => setEMotor(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ecarroceria">Estado de la carroceria </label>
                            <input type="text"
                                id="ecarroceria"
                                name="ecarroceria"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="einterior">Estado del interior</label>
                            <input type="text"
                                id="einterior"
                                name="einterior"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="modificaciones">Modificaiones</label>
                            <input type="text"
                                id="modificaciones"
                                name="modificaciones"
                                required
                            />
                        </div>
                    </div>
                    <div className="contentright">
                        <div className="input-group">
                            <label htmlFor="factura">factura</label>
                            <input type="text"
                                id="factura"
                                name="factura"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="esat">estado anter el SAT</label>
                            <input type="text"
                                id="esat"
                                name="esat"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="numserie">Numero de serie</label>
                            <input type="text"
                                id="numserie"
                                name="numserie"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="marcaje">marcaje</label>
                            <input type="text"
                                id="marcaje"
                                name="marcaje"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="repuve">REPUVE Y RAPI</label>
                            <input type="text"
                                id="repuve"
                                name="repuve"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="adeudos">Adeudos</label>
                            <input type="text"
                                id="adeudos"
                                name="adeudos"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default VentaAuto