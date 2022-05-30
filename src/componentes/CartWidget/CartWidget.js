import * as React from 'react';
import {Cart} from 'react-bootstrap-icons';
import "./CartWidget.css"
function Carrito() {
    return (
      <button className='bgbuttoncarrito px-5'>
        <Cart aria-label="cart" className='back'> 
      </Cart>
      </button>
      
    );
  }
  export default Carrito