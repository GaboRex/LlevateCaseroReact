import { useForm } from 'react-hook-form';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Stack, Box, FormHelperText } from '@mui/material';
import { useDispatch } from '../../context/AppContext';
import { types } from '../../context/storeReducer';
import { postProduct } from '../../services/productsService';

const FormNuevoProducto = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();

  const onAddProduct = (data) => {
    const nuevoProducto = {
      ...data
    }
    dispatch({ type: types.addProduct, payload: nuevoProducto })
    postProduct({data:nuevoProducto});
    reset();
  };

  return (
    <Box minHeight="100vh" width={350}>
      <form onSubmit={handleSubmit(onAddProduct)}>
        <Stack
          spacing={2}
        >
          <TextField
            label="Nombre"
            {...register('Nombre', { required: true })}
            error={errors.Nombre ? true : false}
            helperText={errors.Nombre && 'El nombre es requerido'}
          />

          <FormControl>
            <InputLabel>Categoria</InputLabel>
            <Select
              labelId="select-label"
              {...register('Categoria', { required: true })}
              error={errors.Categoria ? true : false}
            >
              <MenuItem value={undefined}>{" "}</MenuItem>
              <MenuItem value="Entretenimiento">Entretenimiento</MenuItem>
              <MenuItem value="Comida">Comida</MenuItem>
              <MenuItem value="Fortuna">Fortuna</MenuItem>
            </Select>
            <FormHelperText>
              {errors.Categoria && 'La categoria es requerida'}
            </FormHelperText>
          </FormControl>

          <TextField
            label="Precio"
            type="number"
            {...register('Precio', { required: true, min: 0 })}
            error={errors.Precio ? true : false}
            helperText={errors.Precio && 'El precio es requerido y debe ser mayor o igual a 0'}
          />

          <TextField
            label="Descripción"
            multiline
            {...register('Descripcion', { required: true })}
            error={errors.Descripcion ? true : false}
            helperText={errors.Descripcion && 'La descripción es requerida'}
          />

          <Button type="submit" variant="contained">Agregar Producto</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FormNuevoProducto;
