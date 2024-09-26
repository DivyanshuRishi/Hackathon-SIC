import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbarr({ role, setRole }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkRole = () => {
      const storedRole = localStorage.getItem('userRole');
      setRole(storedRole);
    };

    checkRole();

    // Check the role every second to keep the state updated
    const intervalId = setInterval(checkRole, 1000);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [setRole]);

  const handleLogin = () => {
    console.log('Login clicked');
    navigate('/login'); // Navigate to login page
  };

  const handleSignup = () => {
    console.log('Signup clicked');
    navigate('/signup'); // Navigate to signup page
  };

  const handleProfileClick = () => {
    if (!role) {
      const choice = window.confirm("Do you need to login? Click 'OK' for Login, or 'Cancel' for Signup.");
      if (choice) {
        handleLogin();
      } else {
        handleSignup();
      }
    } else {
      navigate('/profile');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    setRole(null);
    navigate('/');
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="text-3xl font-bold cursor-pointer" onClick={() => navigate('/')}>EduWise</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Profile Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {role ? (
              <>
                <li>
                  <button onClick={handleProfileClick} className="justify-between">
                    Profile ({role === 'admin' ? 'Admin' : 'User'})
                  </button>
                </li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><button onClick={handleLogin}>Login</button></li>
                <li><button onClick={handleSignup}>Signup</button></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbarr;
