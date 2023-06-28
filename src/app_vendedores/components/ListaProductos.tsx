import { Card, CardContent, Grid, Typography } from "@mui/material"
import { useStore } from "../../context/AppContext"

export const ListaProductos = () => {
  const {productos} = useStore();

  return (
    <Grid container spacing={2}>
      {productos.map((producto) => (
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
  )
}
