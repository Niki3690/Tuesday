import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("isLogged")
  );
  return isAuthenticated === "true" ? <Outlet /> : <Navigate to="login" />;
};

export default ProtectedRoutes;
