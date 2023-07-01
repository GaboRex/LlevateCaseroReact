import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const OrderModal = ({ open, onClose, onSubmit, orderDetails, onInputChange, onClearCart }) => {
  const handleSubmit = () => {
    onSubmit();
    onClearCart();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Realizar Pedido
        </Typography>
        <TextField
          label="Nombre completo"
          name="fullName"
          value={orderDetails.fullName}
          onChange={onInputChange}
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="Dirección"
          name="address"
          value={orderDetails.address}
          onChange={onInputChange}
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="Número de teléfono"
          name="phoneNumber"
          value={orderDetails.phoneNumber}
          onChange={onInputChange}
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Enviar Pedido
        </Button>
      </Box>
    </Modal>
  );
};

export default OrderModal;
