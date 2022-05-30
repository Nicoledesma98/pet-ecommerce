import * as React from 'react';
import "./NavBar.css";
import { Navbar,Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar className='bgnavbar' variant="light" expand="lg">
    <Container className="bgnavbar">
      <Navbar.Brand className='bgnavbar' href="#home">Pet Society</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='bgnavbar'>
        <Nav className="bgnavbar">
          <Nav.Link className='bgnavbar' href="#Inicio">Inicio</Nav.Link>
          <Nav.Link className='bgnavbar' href="#Productos">Productos</Nav.Link>
          <Nav.Link className='bgnavbar' href="#Como llegar">Productos</Nav.Link>
          <Nav.Link className='bgnavbar' href="#Quienes somos">Quienes somos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Carrito/>
    </Container>
  </Navbar>
  );
}

export default NavBar

