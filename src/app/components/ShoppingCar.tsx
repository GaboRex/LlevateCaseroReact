import { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCar = memo(({ cartItems, onRemoveFromCart }) => {
  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="h6" sx={{ marginBottom: "8px" }}>
        Carrito de compras
      </Typography>
      {cartItems.length === 0 ? (
        <Typography sx={{ color: "#888888" }}>No hay productos en el carrito</Typography>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <Typography>{item.attributes.Nombre}</Typography>
            <IconButton
              color="primary"
              aria-label="Remove from cart"
              onClick={() => onRemoveFromCart(item)}
              sx={{ marginLeft: "auto" }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))
      )}
    </Box>
  );
});

export default ShoppingCar;
