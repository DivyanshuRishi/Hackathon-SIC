// src/components/AdminPanel/Navbar.js
import React from 'react';

const Navbar = ({ role }) => {
  return (
    <nav style={styles.navbar}>
      <h1>{role === 'admin' ? 'Admin Panel' : 'User Dashboard'}</h1>
      <span>{role === 'admin' ? 'Administrator' : 'User'}</span>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff'
  }
};

export default Navbar;