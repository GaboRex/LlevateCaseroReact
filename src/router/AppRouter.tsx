import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoutes";
import { CompradoresRoutes } from "../app/routes/CompradoresRoutes";
import { VendedoresRoutes } from "../app_vendedores/routes/VendedoresRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/compradores/*" element={<CompradoresRoutes />} />
      <Route path="/vendedores/*" element={<VendedoresRoutes />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
