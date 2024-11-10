import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-9xl font-bold text-accent mb-12">
        Gitshub
      </div>
      <div className="space-x-4">
        <button 
          onClick={() => navigate('/login')}
          className="btn btn-primary"
        >
          Login
        </button>
        <button 
          onClick={() => navigate('/signup')}
          className="btn btn-primary"
        >
          Sign-Up
        </button>
      </div>
    </div>
  );
}

export default LandingPage;