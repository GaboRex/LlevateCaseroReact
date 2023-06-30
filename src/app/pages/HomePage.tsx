
// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";
// import { getProductos } from "../services/productsService";

// export default function HomePage() {
//   const [productos, setproductos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await getProductos();
//       setproductos(response.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {productos.map((auto) => (
//         <ProductCard
//           key={auto.id}
//           Nombre={auto.attributes.Nombre}
//           Descripcion={auto.attributes.Descripcion}
//           Precio={auto.attributes.Precio}
//           Vendedor={auto.attributes.Vendedor}
//           Categoria={auto.attributes.Categoria}
//         />
//       ))}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import { useTheme } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import { getProductos } from "../services/productsService";
import ShoppingCar from "../components/ShoppingCar";

export default function HomePage() {
  const [toggle, setToggle] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const theme = useTheme();

  useEffect(() => {
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

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          {
            text: "Mis Productos",
            icon: <ShoppingCartIcon />,
            onClick: () => {
              setShowProduct(false);
              setFilterCategory("");
            },
          },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={item.onClick}>
              <ListItemIcon sx={{ color: "#0B2447" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "#0B2447" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ShoppingCar cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </Box>
  );

  return (
    <div>
      <NavBar
        toggle={toggleDrawer}
        filterCategory={filterCategory}
        onFilterCategoryChange={handleFilterCategoryChange}
        products={products}
      />
      <Drawer anchor="left" open={toggle} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      {showProduct && <ProductCard />}
      {!showProduct && (
        <div>
          <div style={{ textAlign: "left" }}>
            <h2 style={{ color: theme.palette.primary.main, marginLeft: "20px" }}>Productos</h2>
          </div>
          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid item xs={4} key={product.id}>
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

