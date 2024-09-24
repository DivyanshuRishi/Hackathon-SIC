import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbarr'; // adjusted path
import Homepage from './components/Homepage'; // adjusted path
import Login from './components/Login'; // adjusted path
import Signup from './components/Signup'; // adjusted path
import Footer from './components/Footer'; // adjusted path
import Sidebar from './AdminPanel/Sidebar'; // adjusted path
import AppRoutes from './routes'; // adjusted path

function App() {
  const [role] = useState('user'); 

  return (
    <Router>
      <Navbar /> 
      {/* Common Navbar */}
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Admin/User Routes with Sidebar */}
        <Route path="/*" element={
          <div style={{ display: 'flex' }}>
            <Sidebar role={role} />
            <div style={{ flex: 1, padding: '1rem' }}>
              <AppRoutes role={role} /> {/* Render role-specific routes */}
            </div>
          </div>
        } />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;