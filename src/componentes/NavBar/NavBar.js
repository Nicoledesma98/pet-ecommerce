import * as React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from '../CartWidget/CartWidget';
const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bgnavbar fixed-top">
      <div className="container-fluid bgnavbar">
        <Link className="navbar-brand bgnavbar">PetSociety</Link>
        <button className="navbar-toggler bgnavbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bgnavbar"></span>
        </button>
        <div className="collapse navbar-collapse bgnavbar" id="navbarNavDropdown">
          <ul className="navbar-nav bgnavbar">
            <li className="nav-item bgnavbar">
               <Link to={"/"} className="nav-link active bgnavbar">Inicio</Link>              
            </li>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className="nav-item"><Link to={"/product"} className="nav-link bgnavbar">Productos</Link> 
                 </li>
                 <li className="nav-item"><Link to={"categoria/perro"} className="nav-link bgnavbar">Perros</Link>
                 </li>
                 <li className="nav-item"><Link to={"categoria/gato"} className="nav-link bgnavbar">Gatos</Link>
                 </li>
            </ul>
            <li>
                <Link to={"/comollegar"} className="nav-link bgnavbar">Como llegar</Link>
            </li>
            <li>
                <Link to={"/Contacto"} className="nav-link bgnavbar">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      <Carrito />
    </nav>
  );
}

export default NavBar

