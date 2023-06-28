import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoutes";
import { AppRoutes } from "../app/routes/AppRoutes";
import { VendedoresRoutes } from "../app_vendedores/routes/VendedoresRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/vendedores/*" element={<VendedoresRoutes />} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};
