import * as React from 'react';
import { Cart, Trash3Fill } from 'react-bootstrap-icons';
import "./CartWidget.css";
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom"
import { Table } from 'react-bootstrap';
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

function Carrito() {
  const { cartListItems, clearCart, deletProduct } = useContext(CartContext)
  const [show, setShow] = useState(false);
  console.log("esto es cartlist", cartListItems)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <button onClick={handleShow} className='bgbuttoncarrito px-5'>
          <Cart aria-label="cart" className='back'></Cart>
          <span className='widgetin'>{cartListItems.length}</span>
        </button>

      </div>
      <Modal show={show} onHide={handleClose} className="modalback">
        <Modal.Header className='back' closeButton>
          <Modal.Title className='back'>Sus Productos</Modal.Title>
        </Modal.Header>

        <Modal.Body className='bgbuttoncarrito'>
          {cartListItems.length === 0 && (
            <>
              <p className='back'>NO AGREGO NINGUN PRODUCTO!.</p>
            </>)}


          {cartListItems.map((item) => {
            return (
              <Container key={item.data.id}>
                <Row className='back'>
                  <Col className="mt-3 back">
                    <img style={{ width: '5rem' }} className="nico" src={item.data.image}></img>
                  </Col>
                  <Col className="mt-5 back ">
                    <h4 className='back'>{item.data.title}</h4>
                  </Col>
                  <Col className='back'>
                  <h5 className='back'>Precio:</h5>
                    <span className='back'>${item.data.price}</span>
                    </Col>
                    <Col className='back'>
                    <h5 className='back'>Cantidad:</h5>
                    <span className='back'>{item.data.quantity}</span>
                    </Col>
                    <Col className='back'>
                    <h5 className='back'>Total:</h5>
                    <span className='back'>${item.data.quantity*item.data.price}</span>
                    </Col>
                    <Row className='back mt-1'>
                      <button className='bgbuttond back shadow-inset-center' onClick={() => deletProduct(item)}>
                      <Trash3Fill className='bgtransparent mb-1'/>
                    </button>
                    </Row>
                </Row>
              </Container>
            )
          })}
        </Modal.Body>
        <Modal.Footer className='back'>
          <button className='bgbuttond textnavbar' onClick={handleClose}>
            Cerrar
          </button>
          <button className='bgbuttond textnavbar' onClick={clearCart}>Borrar todo!</button>
          <button className="bgbuttond textnavbar" onClick={handleClose}><Link to={"/cart"} className="bgnavbar textnavbar">Terminar compra</Link>
          </button>
        </Modal.Footer>
      </Modal>


    </>
  );
}
export default Carrito