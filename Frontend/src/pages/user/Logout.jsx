// src/pages/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the token and user role from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userRole'); // Remove user role if stored

        // Redirect to the login page after logout
        navigate('/login');
    }, [navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md text-center">
                <h2 className="text-2xl font-bold mb-4">You have been logged out!</h2>
                <p className="mb-4">Thank you for using our application.</p>
                <p className="mb-4">Redirecting to login page...</p>
                <div className="loader mt-4">Loading...</div>
            </div>
        </div>
    );
};

export default Logout;
