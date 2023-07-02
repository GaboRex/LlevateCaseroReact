import React, { memo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import OrderModal from "./OrderModal";

const ShoppingCar = memo(({ cartItems, onRemoveFromCart }) => {
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [cart, setCart] = useState(cartItems);

  const handleOrderModalOpen = () => {
    setOpenOrderModal(true);
  };

  const handleOrderModalClose = () => {
    setOpenOrderModal(false);
  };

  const handleOrderSubmit = () => {
    console.log("Pedido enviado:", orderDetails);
    setOrderDetails({
      fullName: "",
      address: "",
      phoneNumber: "",
    });
    setIsOrderPlaced(true);
    handleOrderModalClose();
    clearCart();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    onRemoveFromCart(item);
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="h6" sx={{ marginBottom: "8px" }}>
        ¿Qué te vas a llevar hoy, casero?
      </Typography>
      {cart.length === 0 ? (
        <Typography sx={{ color: "#888888" }}>No hay productos en el carrito</Typography>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.attributes.Nombre}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="primary"
                        aria-label="Remove from cart"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
            <Button variant="contained" onClick={handleOrderModalOpen}>
              Realizar Pedido
            </Button>
          </Box>
          <OrderModal
            open={openOrderModal}
            onClose={handleOrderModalClose}
            onSubmit={handleOrderSubmit}
            orderDetails={orderDetails}
            onInputChange={handleInputChange}
          />
        </>
      )}
    </Box>
  );
});

export default ShoppingCar;