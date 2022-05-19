import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

function Carrito() {
    return (
      <IconButton aria-label="cart" className='changuito'> 
          <ShoppingCartIcon />
      </IconButton>
    );
  }
  export default Carrito