import VendedoresLayout from "../layout/VendedoresLayout";
import FormNuevoProducto from "../components/FormNuevoProducto";
import { ListaProductos } from "../components/ListaProductos";
import { getProducts } from "../../services/productsService";
import { useEffect } from "react";
import { useDispatch, useStore } from "../../context/AppContext";
import { types } from "../../context/storeReducer";

const VendedoresPage = () => {

  const dispatch = useDispatch();
  const {user} = useStore();

  const saveProducts = async () => {
    const { data } = await getProducts();

    dispatch({ type: types.setProducts, 
      payload: data.filter((d) => d.attributes.Vendedor ===  user) });
  }

  useEffect(() => {
    saveProducts();
  }, [])
  
  
  return (
    <VendedoresLayout>
      <div>
        <h1>Mis Productos</h1>
        <ListaProductos />

        <h2>Añadir nuevo producto</h2>
        <FormNuevoProducto />
      </div>
    </VendedoresLayout>
  );
}

export default VendedoresPage;