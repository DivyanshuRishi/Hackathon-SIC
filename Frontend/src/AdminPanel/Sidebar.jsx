// src/components/AdminPanel/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <div style={styles.sidebar}>
      <ul>
        {role === 'admin' ? (
          <>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/add-cautions">Add Cautions</Link></li>
            <li><Link to="/admin/add-notices">Add Notices</Link></li>
            <li><Link to="/admin/invalid-cautions">Invalid Cautions</Link></li>
            <li><Link to="/admin/change-password">Change Password</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/user/dashboard">Dashboard</Link></li>
            <li><Link to="/user/ask-questions">Ask Questions</Link></li>
            <li><Link to="/user/chatbot">Chatbot</Link></li>
          </>
        )}
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '1rem'
  }
};

export default Sidebar;