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
    const [repuve, setRepuve] = useState('')
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
                        <div className="form-group">
                            <label htmlFor="imagen">Imagen del carro</label>
                            <input type="file"
                                id="imagen"
                                name="imagen"
                                accept="imagen/*"
                                className='submit-image'
                                value={imagen}
                                onChange={hadleImagenChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emotor">Estado del motor</label>
                            <input type="text"
                                id="emotor"
                                name="emotor"
                                value={emotor}
                                onChange={() => setEMotor(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ecarroceria">Estado de la carroceria </label>
                            <input type="text"
                                id="ecarroceria"
                                name="ecarroceria"
                                value={ecarroceria}
                                onChange={() => setECarroceria(event.target.value)}

                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="einterior">Estado del interior</label>
                            <input type="text"
                                id="einterior"
                                name="einterior"
                                value={einterior}
                                onChange={() => setEInterior(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="modificaciones">Modificaiones</label>
                            <input type="text"
                                id="modificaciones"
                                name="modificaciones"
                                value={modificaciones}
                                onChange={() => setModificaciones(event.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="contentright">
                        <div className="form-group">
                            <label htmlFor="factura">factura</label>
                            <input type="text"
                                id="factura"
                                name="factura"
                                value={factura}
                                onChange={() => setFactura(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="esat">estado anter el SAT</label>
                            <input type="text"
                                id="esat"
                                name="esat"
                                value={esat}
                                onChange={() => setESat(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numserie">Numero de serie</label>
                            <input type="text"
                                id="numserie"
                                name="numserie"
                                value={numserie}
                                onChange={() => setNumserie(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="marcaje">marcaje</label>
                            <input type="text"
                                id="marcaje"
                                name="marcaje"
                                value={marcaje}
                                onChange={() => setMarcaje(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repuve">REPUVE Y RAPI</label>
                            <input type="text"
                                id="repuve"
                                name="repuve"
                                value={repuve}
                                onChange={() => setRepuve(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="adeudos">Adeudos</label>
                            <input type="text"
                                id="adeudos"
                                name="adeudos"
                                value={adeudo}
                                onChange={() => setAdeudo(event.target.value)}
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