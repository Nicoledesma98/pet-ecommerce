import * as React from 'react';
import "./NavBar.css";
import { Navbar,Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
    <Container className="">
      <Navbar.Brand className='' href="#home">Pet Society</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link className='' href="#Inicio">Inicio</Nav.Link>
          <Nav.Link href="#Productos">Productos</Nav.Link>
          <Nav.Link href="#Como llegar">Productos</Nav.Link>
          <Nav.Link href="#Quienes somos">Quienes somos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Carrito/>
    </Container>
  </Navbar>
  );
}

export default NavBar

