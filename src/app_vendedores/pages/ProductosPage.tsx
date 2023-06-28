import VendedoresLayout from "../layout/VendedoresLayout";
import IProducto from "../models/IProducto";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react"
import { productos } from "../data/data"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ProductosPage = () => {

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleAddProducto = () => {
    const nuevoProducto = {
      id: Date.now().toString(),
      nombre,
      precio: parseFloat(precio),
      descripcion,
    };
    // onAddProducto(nuevoProducto);
    setNombre('');
    setPrecio('');
    setDescripcion('');
  };

  return (
    <VendedoresLayout>
      <div>
        <h1>Productos</h1>
        <Grid container spacing={2}>
          {productos.map((producto: IProducto) => (
            <Grid item xs={12} sm={6} md={4} key={producto.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {producto.nombre}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Precio: {producto.precio}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.descripcion}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <h2>Añadir nuevo producto</h2>
        <form onSubmit={handleAddProducto}>
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <br />
          <TextField
            label="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="number"
            required
          />
          <br />
          <TextField
            label="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            multiline
            rows={4}
            required
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Añadir
          </Button>
        </form>
      </div>
    </VendedoresLayout>
  );
}

export default ProductosPage;