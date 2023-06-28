import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useDispatch } from '../../context/AppContext';
import { types } from '../../context/storeReducer';

const FormNuevoProducto = () => {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const dispatch = useDispatch();

  const onAddProduct = (data) => {
    const nuevoProducto = {
      ...data
    }
    dispatch({type: types.addProduct, payload: nuevoProducto})
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onAddProduct)}>
      <TextField
        label="Nombre"
        {...register('nombre', { required: true })}
        error={errors.nombre ? true : false}
        helperText={errors.nombre && 'El nombre es requerido'}
      />

      <TextField
        label="Precio"
        type="number"
        {...register('precio', { required: true, min: 0 })}
        error={errors.precio ? true : false}
        helperText={errors.precio && 'El precio es requerido y debe ser mayor o igual a 0'}
      />

      <TextField
        label="Descripción"
        multiline
        {...register('descripcion', { required: true })}
        error={errors.descripcion ? true : false}
        helperText={errors.descripcion && 'La descripción es requerida'}
      />

      <Button type="submit" variant="contained">Agregar Producto</Button>
    </form>
  );
};

export default FormNuevoProducto;
