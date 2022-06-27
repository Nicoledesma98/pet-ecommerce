import * as React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from '../CartWidget/CartWidget';
const NavBar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bgnavbar fixed-top">
      <div className="container-fluid bgnavbar">
        <div className='logo'>
          <Link to={"/"} className="navbar-brand logo"><img src='../logo2.png' alt='logo' className='logo'/></Link>
        </div>
        
        <div className="collapse navbar-collapse bgnavbar" id="navbarNavDropdown">
          <ul className="navbar-nav bgnavbar">
            <li className="nav-item bgnavbar">
              <Link to={"/"} className="nav-link active bgnavbar textnavbar">Inicio</Link>              
           </li>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className="nav-item"><Link to={"/product"} className="nav-link bgnavbar textnavbar">Productos</Link> 
                </li>
                <li className="nav-item"><Link to={"categoria/perros"} className="nav-link bgnavbar textnavbar">Perros</Link>
                 </li>
                <li className="nav-item"><Link to={"categoria/gatos"} className="nav-link bgnavbar textnavbar">Gatos</Link>
                 </li>
           </ul>
            <li>
                <Link to={"/comollegar"} className="nav-link bgnavbar textnavbar">Como llegar</Link>
           </li>
           <li>
                <Link to={"/Contacto"} className="nav-link bgnavbar textnavbar">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      <Carrito />
     </nav>
   ); 




  }

export default NavBar

