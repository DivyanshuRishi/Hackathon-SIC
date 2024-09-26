// src/routes/AdminRoutes.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = ({ role }) => {
  return role === 'admin' ? <Outlet /> : <Navigate to="/user/dashboard" />;
};

export default AdminRoutes;
