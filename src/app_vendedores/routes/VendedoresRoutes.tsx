import { Navigate, Route, Routes } from "react-router-dom";
import VendedoresPage from "../pages/VendedoresPage";
import { GuardedRoute } from "../../guards/GuaardedRoute";
import { useStore } from "../../context/AppContext";

export const VendedoresRoutes = () => {
  const { auth } = useStore();
  return (
    <Routes>
      <Route
        path="productos"
        element={
          <GuardedRoute auth={auth}>
            <VendedoresPage />
          </GuardedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="productos" />} />
    </Routes>
  );
};
