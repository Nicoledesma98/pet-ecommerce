import * as React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bgnavbar fixed-top">
      <div className="container-fluid bgnavbar">
        <a className="navbar-brand bgnavbar" href="#">PetSociety</a>
        <button className="navbar-toggler bgnavbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bgnavbar"></span>
        </button>
        <div className="collapse navbar-collapse bgnavbar" id="navbarNavDropdown">
          <ul className="navbar-nav bgnavbar">
            <li className="nav-item bgnavbar">
              <a className="nav-link active bgnavbar" aria-current="page">
               <Link to={"/"} className="bgnavbar">Inicio</Link> 
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bgnavbar">
               <Link to={"/products"} className="bgnavbar">Productos</Link> 
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bgnavbar">
                <Link to={"/comollegar"} className="bgnavbar">Como llegar</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bgnavbar">
                <Link to={"/contacto"} className="bgnavbar">Contacto</Link>
              </a>
            </li>

          </ul>
        </div>
      </div>
      <Carrito />
    </nav>
  );
}

export default NavBar

