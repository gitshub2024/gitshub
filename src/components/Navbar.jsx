import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const navItems = [
    { label: 'HOME', path: '/home' },
    { label: 'E-LIBRARY', path: '/elibrary' },
    { label: 'ALUMNI', path: '/alumni' },
    { label: 'FACULTY', path: '/faculty' },
    { label: 'FORUM', path: '/forum' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const getActiveClass = (path) => location.pathname === path;

  return (
    <nav className="bg-[#697565]/50 backdrop-blur-sm px-6 py-4 fixed w-full top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/home" className="flex items-center space-x-2">
          <span className="text-[#ECDFCC] text-3xl font-bold">GH</span>
        </Link>

        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`relative text-lg font-medium transition-colors duration-300
                ${getActiveClass(item.path) 
                  ? 'text-[#ECDFCC]' 
                  : 'text-[#FFFFFF] hover:text-[#ECDFCC]'
                }`}
            >
              {item.label}
              {getActiveClass(item.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ECDFCC]"></span>
              )}
            </Link>
          ))}

          <div className="relative">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-2 focus:outline-none">
              <div className="w-10 h-10 rounded-full bg-[#ECDFCC]/20 overflow-hidden">
                <img
                  src={user.avatar || "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl overflow-hidden bg-[#181C14]/80 backdrop-blur-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-[#697565]/40">
                    <p className="text-[#ECDFCC] font-medium">{user.name}</p>
                    <p className="text-[#FFFFFF] text-sm">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-[#FFFFFF] hover:text-[#ECDFCC] hover:bg-[#181C14]/40 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
