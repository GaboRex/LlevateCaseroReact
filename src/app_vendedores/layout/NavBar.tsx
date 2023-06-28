import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { types } from '../../context/AuthReducer';
import { useDispatch } from '../../context/AuthContext';


export default function NavBar({toggle}) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({type: types.logout})
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SouvenirStore
          </Typography>
          <Button onClick={logout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}