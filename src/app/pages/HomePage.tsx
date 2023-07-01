import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import { getProductos } from "../services/productsService";
import ShoppingCar from "../components/ShoppingCar";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [toggle, setToggle] = React.useState(false);
  const [showProduct, setShowProduct] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [filterCategory, setFilterCategory] = React.useState("");
  const [showCart, setShowCart] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getProductos();
      setProducts(response.data);
    };

    fetchData();
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setToggle(open);
  };

  const handleProductClick = () => {
    setToggle(false);
    setShowProduct(true);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setToggle(false);
    setShowProduct(false);
    setShowCart(true);
    setFilterCategory("");
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const handleFilterCategoryChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const filteredProducts = filterCategory
    ? products.filter((product) => product.attributes.Categoria === filterCategory)
    : products;

  return (
    <div>
      <NavBar
        toggle={toggleDrawer}
        filterCategory={filterCategory}
        onFilterCategoryChange={handleFilterCategoryChange}
        products={products}
        onProductClick={handleProductClick}
        onCartClick={handleCartClick} // Pasar la función como prop
      />
      <Drawer anchor="left" open={toggle} onClose={toggleDrawer(false)}>
        {list(handleProductClick, handleCartClick)} 
      </Drawer>
      {showProduct && (
        <div>
          <div style={{ textAlign: "left", marginTop: "20px", marginLeft: "20px" }}>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
              Productos
            </Typography>
          </div>
          <Grid container spacing={2} sx={{ padding: "20px" }}>
            {filteredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProductCard product={product} onAddToCart={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
      {showCart && (
        <div>
          <div style={{ textAlign: "left", marginTop: "20px", marginLeft: "20px" }}>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
              Carrito de Compras
            </Typography>
          </div>
          <ShoppingCar cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        </div>
      )}
    </div>
  );
}

function list(handleProductClick, handleCartClick) { // Recibir ambas funciones como parámetros
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleProductClick}>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Productos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleCartClick}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Carrito de Compras" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
}
