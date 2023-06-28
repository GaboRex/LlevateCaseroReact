import { Navigate, Route, Routes } from "react-router-dom";
import ProductosPage from "../pages/ProductosPage";
import { GuardedRoute } from "../../guards/GuaardedRoute";
import { useStore } from "../../context/AuthContext";

export const VendedoresRoutes = () => {
  const { auth } = useStore();
  return (
    <Routes>
      <Route
        path="productos"
        element={
          <GuardedRoute auth={auth}>
            <ProductosPage />
          </GuardedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="productos" />} />
    </Routes>
  );
};
