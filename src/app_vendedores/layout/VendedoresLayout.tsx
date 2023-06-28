import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function VendedoresLayout({ children }) {
  const [toggle, setToggle] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setToggle(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "Items"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => navigate(`${text.toLowerCase()}`)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>

      <NavBar toggle={toggleDrawer(true)} />
      {/* <Button onClick={toggleDrawer(true)}>Left</Button> */}
      <Drawer anchor={"left"} open={toggle} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      {children}

    </div>
  );
}
