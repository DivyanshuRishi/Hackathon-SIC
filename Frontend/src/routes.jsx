// src/routes.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import AddQuestions from './pages/admin/AddQuestions';
import AddNotices from './pages/admin/AddNotices';
import InvalidQuestions from './pages/admin/InvalidQuestions';
import ChangePassword from './pages/admin/ChangePassword';
import UserDashboard from './pages/user/UserDashboard';
import AskQuestions from './pages/user/AskQuestions';
import Chatbot from './pages/user/ChatBot';
import Logout from './pages/admin/Logout';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/userRoutes';

const AppRoutes = ({ role }) => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/logout" element={<Logout />} />

      {/* Admin Protected Routes */}
      <Route element={<AdminRoutes role={role} />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-questions" element={<AddQuestions />} />
        <Route path="/admin/add-notices" element={<AddNotices />} />
        <Route path="/admin/invalid-questions" element={<InvalidQuestions />} />
        <Route path="/admin/change-password" element={<ChangePassword />} />
      </Route>

      {/* User Protected Routes */}
      <Route element={<UserRoutes role={role} />}>
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/ask-questions" element={<AskQuestions />} />
        <Route path="/user/chatbot" element={<Chatbot />} />
      </Route>

      {/* Fallback to User Dashboard for undefined routes */}
      <Route path="*" element={<Navigate to="/user/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;