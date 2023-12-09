import { useState } from 'react'
import '../Css/Catalogo.css'
import Footer from './Footer'
import Navbar from './Navbar'
import ImagenCata from '../img/imgInicio2.jpg'

const Catalogo = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (event) => {
        const term = event.target.value
        setSearch(term)

    }
    return (
        <>
            <Navbar />
            <main className='main-content2'>
                <h2> Encuentra tu auto</h2>
                <div className="search-container">
                    <input type="text"
                        placeholder='Buscar carro...'
                        value={search}
                        onChange={handleSearch}
                        className='search-input'
                    />
                </div>
            </main>
            <main className='catalogo-container'>
                <div className="card">
                    <img src={ImagenCata} alt="imagen carro" className='card-image'/>

                    <div className="card-content">
                        <h3 className="card-title">Vendo un BMW</h3>
                        <p className="card-text">El BMW es de ultimo modelo con...</p>
                        <button  className="card-link" type='button'>Saber mas..</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Catalogo