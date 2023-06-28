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
import { useDispatch } from "../../context/AppContext";
import FormNuevoProducto from "../components/FormNuevoProducto";
import { ListaProductos } from "../components/ListaProductos";

const ProductosPage = () => {

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const dispatch = useDispatch();

  const handleAddProducto = () => {
    const nuevoProducto = {
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
        <ListaProductos />

        <h2>Añadir nuevo producto</h2>
        <FormNuevoProducto />
      </div>
    </VendedoresLayout>
  );
}

export default ProductosPage;