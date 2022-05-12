import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="#" underline="hover" color="inherit">
            {'Inicio'}
          </Link>
          <Link href="#" underline="hover" color="inherit">
            {'Servicios'}
          </Link>
          <Link href="#" underline="hover" color="inherit" >
            {'Nosotros'}
          </Link>
          <Link href="#" underline="hover" color="inherit">
            {'Como llegar'}
          </Link>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Pet Society
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar

//<div className="navbar">
        // mi barra de navegacion
    //</div>
 // )
// }