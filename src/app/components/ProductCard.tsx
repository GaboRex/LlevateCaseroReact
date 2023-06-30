import { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = memo(({ product, onAddToCart }) => {
  const theme = useTheme();

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <Card variant="outlined" sx={{ margin: "10px", backgroundColor: theme.palette.background.default }}>
      <CardContent sx={{ paddingBottom: "16px !important" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: theme.palette.primary.main, fontWeight: "bold", fontSize: "1.5rem", marginBottom: "8px" }}
        >
          {product.attributes.Nombre}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontSize: "1rem", marginBottom: "8px" }}>
          {product.attributes.Descripcion}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontSize: "1rem", marginBottom: "8px" }}>
          {product.attributes.Precio}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontSize: "1rem", marginBottom: "8px" }}>
          {product.attributes.Vendedor}
        </Typography>
        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: "0.8rem" }}>
          {product.attributes.Categoria}
        </Typography>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
          <ShoppingCartIcon sx={{ color: theme.palette.primary.main, cursor: "pointer", marginRight: "8px" }} onClick={handleAddToCart} />
        </div>
      </CardContent>
    </Card>
  );
});

export default ProductCard;
