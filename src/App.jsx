import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Catalogo from './components/Catalogo'
import VentaAuto from './components/VentaAuto'
import SingUp from './components/SingUp'
import Login from './components/Login'

const App = ( ) => {
  return(
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos-los-autos" element={<Catalogo />} />
        <Route path="/venta-auto" element={<VentaAuto />} />
        <Route path="/registro" element={<SingUp />} />
        <Route path="/inicio-sesion" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App