import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography, Link, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch } from "../../context/AppContext";
import { types } from "../../context/storeReducer";
import { useForm } from "react-hook-form";

import logo2 from "../../assets/logo1.png"; 

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [role, setRole] = useState("");

  const handleLogin = (data) => {
    dispatch({ type: types.login });
    dispatch({type: types.setUser, payload: data.nombre})
    
    if (role === "comprador") {
      navigate("/compradores");
    } else {
      navigate("/vendedores/");
    }
  };

  return (
    <AuthLayout title="Bienvenido a Llevate casero">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container justifyContent="center" mb={2}>
            <img src={logo2} alt="Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <TextField
                  label="Nombre"
                  type="nombre"
                  placeholder="nombre"
                  fullWidth
                  variant="outlined"
                  {...register('nombre', { required: 'Campo obligatorio' })}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  placeholder="email@gmail.com"
                  fullWidth
                  variant="outlined"
                  {...register('email', { required: 'Campo obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                  variant="outlined"
                  {...register('password', { required: 'Campo obligatorio' })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="role-label">Rol</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    defaultValue=""
                    variant="outlined"
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                  >
                    <MenuItem value="">Seleccionar</MenuItem>
                    <MenuItem value="vendedor">Vendedor</MenuItem>
                    <MenuItem value="comprador">Comprador</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" startIcon={<Google />} fullWidth sx={{ bgcolor: '#DB4437', color: '#fff' }}>
                  Google
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="flex-end">
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
