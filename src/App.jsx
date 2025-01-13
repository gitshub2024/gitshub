import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import Elibrary from './pages/Elibrary';
import Alumni from './pages/Alumni';
import Faculty from './pages/Faculty';
import Forum from './pages/Forum';

function AppLayout() {
  const location = useLocation();

  // Define paths where the Navbar should be hidden
  const hideNavbarPaths = ['/', '/login', '/signup'];
  
  // Check if the current path is in the list of paths where the Navbar should be hidden
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/elibrary" element={<Elibrary />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
