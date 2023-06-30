import { API } from "./instance";

export const getProducts = async () => {
  const games = await API.get("/productos");
  return games.data;
};

export const postProduct = async (producto) => {
  return await API.post("/productos", producto);
};

export const deleteProduct = async (id) => {
  return await API.delete(`/productos/${id}`);
};
