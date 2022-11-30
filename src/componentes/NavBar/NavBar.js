import * as React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='bgnavbar'>
      <Container fluid className='bgnavbar'>
        <Navbar.Brand className='bgnavbar '><Link to={"/"} className="navbar-brand logo"><img src='../logo2.png' alt='logo' className='logo' /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bgnavbar'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='bgnavbar'>
          <Nav className="me-auto bgnavbar">
            <Link to={"/"} className="nav-link active bgnavbar textnavbar">Inicio</Link>
            <Link to={"/product"} className="nav-link bgnavbar textnavbar">Productos</Link>
            <Link to={"categoria/perros"} className="nav-link bgnavbar textnavbar">Perros</Link>
            <Link to={"categoria/gatos"} className="nav-link bgnavbar textnavbar">Gatos</Link>
            <Link to={"/comollegar"} className="nav-link bgnavbar textnavbar">Como llegar</Link>
            <Link to={"/Contacto"} className="nav-link bgnavbar textnavbar">Contacto</Link>
          </Nav>
          <Nav className='bgnavbar'>
            <Carrito/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar
