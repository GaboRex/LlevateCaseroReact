import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoutes";
import { CompradoresRoutes } from "../app/routes/CompradoresRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/compradores/*" element={<CompradoresRoutes />} />
    </Routes>
  );
};
