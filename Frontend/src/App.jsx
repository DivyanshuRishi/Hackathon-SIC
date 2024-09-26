import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './AdminPanel/Sidebar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Navbarr from './components/Navbarr';
import Signup from './components/Signup';
import AppRoutes from './routes';

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  return (
    <Router>
      <Navbarr setRole={setRole} role={role} /> {/* Pass setRole and role to Navbar */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Admin/User Routes with Sidebar */}
        <Route path="/*" element={
          role ? (
            <div style={{ display: 'flex' }}>
              <Sidebar role={role} />
              <div style={{ flex: 1, padding: '1rem' }}>
                <AppRoutes role={role} />
              </div>
            </div>
          ) : (
            <div style={{ padding: '1rem' }}>
              <h2>Please log in to access this section.</h2>
            </div>
          )
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
