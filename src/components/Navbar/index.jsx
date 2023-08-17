import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Navbarmenu from './navbarmenu';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Navbarmenu />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 1 }}>
          <Link to='/'>Soja's plate</Link>
        </Typography>
        <Button color="inherit"><Link to='/login'>Login</Link></Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
