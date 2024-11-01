import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const userRole = localStorage.getItem('userRole');

  // Verifica si el usuario está autenticado y si tiene el rol necesario
  if (userRole && allowedRoles.includes(userRole)) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;