// LandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/landing-background.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-6xl sm:text-8xl font-extrabold text-[#ECDFCC] mb-6 drop-shadow-lg">
          GITSHUB
        </h1>
        <p className="text-xl sm:text-2xl text-[#D6C7B5] mb-12 max-w-2xl">
          Connect with students, alumni, and faculty within the GITSHUB community.
          A platform for collaboration, networking, and growth.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-[#697565] text-[#ECDFCC] rounded-full text-lg font-medium hover:bg-[#55614D] transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-8 py-3 bg-transparent border border-[#ECDFCC] text-[#ECDFCC] rounded-full text-lg font-medium hover:bg-[#ECDFCC] hover:text-[#181C14] transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
