import * as React from 'react';
import { Cart,Trash3Fill} from 'react-bootstrap-icons';
import "./CartWidget.css";
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from '../../context/CartContext';
import {Link} from "react-router-dom"
import { Table } from 'react-bootstrap';

function Carrito() {
  const { cartListItems,clearCart,deletProduct } = useContext(CartContext)
  const [show, setShow] = useState(false);

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
        //   <div>
        //     <Table responsive="sm">
            
        //              <thead>
        //       <tr>
        //         <th>producto</th>
        //         <th>cantidad</th>
        //         <th>precio</th>
        //         <th>eliminar</th>
        //       </tr>
        //     </thead>
            
                 
        //   <div>
        // <tbody>
        //   <tr>
        //     <td><img style={{ width: '5rem' }} className="nico" src={item.image}/></td>
        //     <td>Table cell</td>
        //     <td>Table cell</td>
        //     <td>Table cell</td>
        //   </tr>
        // </tbody>
        //     </div>
        //      </Table>
        //      </div>
        
            <div className="Container" key={item.id}>
              <div className="row">
                <div className="col-md-8 mt-5">
                  <img style={{ width: '5rem' }} className="nico" src={item.image}></img>
                </div>
                <div className="col-md-3 mt-5 ">
                <h1 className="">{item.title}</h1>
                <div>
                <span className="">su precio es:${item.price}</span>
                </div>
                <button className='bgbuttond' onClick={() => deletProduct(item)}>
                <Trash3Fill/>
                </button>

                </div>

              </div>

            </div>
          )
        })} 
        </Modal.Body>
        <Modal.Footer className='back'>
          <Button className='bgbuttond textnavbar' onClick={handleClose}>
            Cerrar
          </Button>
          <Button className='bgbuttond textnavbar' onClick={clearCart}>Borrar todo!</Button>
          <Button className="bgbuttond textnavbar" onClick={handleClose}><Link to={"/cart"} className="bgnavbar">Terminar compra</Link>
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  );
}
export default Carrito