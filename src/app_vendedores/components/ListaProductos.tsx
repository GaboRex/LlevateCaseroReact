import { Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { useDispatch, useStore } from "../../context/AppContext"
import { types } from "../../context/storeReducer";
import { deleteProduct } from "../../services/productsService";
import DeleteIcon from '@mui/icons-material/Delete';

export const ListaProductos = () => {
  const { productos } = useStore();
  const dispatch = useDispatch();

  const eliminarProducto = (id) => {
    dispatch({ type: types.deleteProduct, payload: id })
    deleteProduct(id);
  };

  return (
    <Grid container spacing={2}>
      {productos.map((producto) => (
        <Grid item xs={12} sm={6} md={4} key={producto.Nombre}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {producto.attributes.Nombre}
              </Typography>
              <Typography variant="subtitle2" >
                {producto.attributes.Categoria}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Precio: {producto.attributes.Precio} Bs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {producto.attributes.Descripcion}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  onClick={() => eliminarProducto(producto.id)}
                  color="error"
                  startIcon={<DeleteIcon />}
                />
                
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
