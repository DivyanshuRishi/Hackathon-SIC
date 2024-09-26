// src/routes/UserRoutes.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const UserRoutes = ({ role }) => {
  return role === 'user' ? <Outlet /> : <Navigate to="/admin/dashboard" />;
};

export default UserRoutes;
