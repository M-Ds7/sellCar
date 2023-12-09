import React from 'react'
import '../Css/Navbar.css'
import { Link } from 'react-router-dom'
 
const Navbar = ( ) => {
    return(
        <>
            <nav className="navbar">
                <div className="logo">
                    <h1> <span>V</span>enta<span>S</span>egura</h1>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todos-los-autos">Catalogo</Link></li>
                    <li><Link to="/venta-auto">Vendenr mi Auto</Link></li>
                    <li><Link to="/registro">Sing Up</Link></li>
                    <li><Link to="/inicio-sesion">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar