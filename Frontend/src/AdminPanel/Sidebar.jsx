import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole'); // Remove the role from localStorage
    navigate('/'); // Redirect to homepage or login page
  };

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
            {/* <li><Link to="/user/ask-questions">Ask Questions</Link></li> */}
            <li><Link to="/user/chatbot">Chatbot</Link></li>
          </>
        )}
        <li><a onClick={handleLogout}>Logout</a></li>
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
