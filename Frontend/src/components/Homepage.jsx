// src/components/Homepage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('userRole');

    useEffect(() => {
        if (role === 'admin') {
            navigate('/admin/dashboard');
        } else if (role === 'user') {
            navigate('/user/dashboard');
        }
    }, [navigate, role]);

    return (
        <div className="relative h-screen overflow-hidden">
            <video 
                autoPlay 
                muted 
                loop 
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-80"
                style={{ filter: 'brightness(0.5)' }} 
            >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
                <h1 className="text-4xl font-bold animate-zoom-in-out">Let's connect on EduWise</h1>
                <h2 className="text-xl mt-4">Solving your confusion is our first priority</h2>
                <p className="mt-2">A team of 5 Tiny-Coders</p>
                <div className="mt-6 flex space-x-4">
                    <button 
                        className="bg-transparent border-2 border-white text-white py-2 px-4 hover:bg-white hover:bg-opacity-20 transition" 
                        onClick={() => navigate('/login')} 
                    >
                        Login
                    </button>
                    <button 
                        className="bg-transparent border-2 border-white text-white py-2 px-4 hover:bg-white hover:bg-opacity-20 transition" 
                        onClick={() => navigate('/signup')} 
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            <style jsx>{`
                @keyframes zoom {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                }

                .animate-zoom-in-out {
                    animation: zoom 15s infinite;
                }
            `}</style>
        </div>
    );
};

export default Homepage;
