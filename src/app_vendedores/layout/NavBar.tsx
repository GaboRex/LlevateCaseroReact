import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import logo from "../../assets/logo1.png";
import { useState } from "react";
import { useDispatch } from "../../context/AppContext";
import { types } from "../../context/storeReducer";

export default function NavBar({ toggle }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: types.setProducts, payload: [] });
    dispatch({type: types.logout})
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            onClick={toggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={logo} alt="Logo" style={{ height: "auto", maxHeight: 70, maxWidth: "100%" }} />
          </div>


          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
