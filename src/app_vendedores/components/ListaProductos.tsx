import { Card, CardContent, Grid, Typography } from "@mui/material"
import { useStore } from "../../context/AppContext"

export const ListaProductos = () => {
  const {productos} = useStore();

  return (
    <Grid container spacing={2}>
      {productos.map((producto) => (
        <Grid item xs={12} sm={6} md={4} key={producto.Nombre}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {producto.Nombre}
              </Typography>
              <Typography variant="subtitle2" >
                {producto.Categoria}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Precio: {producto.Precio} Bs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {producto.Descripcion}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
