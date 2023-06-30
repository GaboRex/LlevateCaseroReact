import { useState } from "react";
import { Navigate, Route, Routes, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { GuardedRoute } from "../../guards/GuaardedRoute";
import { useStore } from "../../context/ContextProvider";

export const CompradoresRoutes = () => {
  const { auth } = useStore();
  return (
    <Routes>
      <Route
        path="productos"
        element={
          <GuardedRoute auth={auth}>
            <HomePage />
          </GuardedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/compradores/productos" />} />
    </Routes>
  );
};

