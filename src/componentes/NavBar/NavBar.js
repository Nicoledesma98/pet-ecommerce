import * as React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import Carrito from '../CartWidget/CartWidget';



const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar className=''>
          <Link href="#" underline="hover" color="inherit" className='links'>
           Inicio
          </Link>
          <Link href="#" underline="hover" color="inherit" className='links'>
            Servicios
          </Link>
          <Link href="#" underline="hover" color="inherit" className='links' >
            Nosotros
          </Link>
          <Link href="#" underline="hover" color="inherit" className='links'>
            Como llegar
          </Link>
          <div className='titulo'>Pet Society</div>
           <Carrito/>
          </Toolbar>
      </AppBar>
    </Box>
  );
}
function ItemListContainer () {
  return (
<div>
  <h1 color='red'>MI CATALOGO</h1>
</div>
  );
}
export default NavBar
export {ItemListContainer}
