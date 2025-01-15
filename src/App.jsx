// App.jsx

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';

// Import your pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import Elibrary from './pages/Elibrary';

// Alumni (already existing)
import Alumni from './pages/Alumni';
import AlumniDetail from './pages/AlumniDetail'; 

// Faculty
import Faculty from './pages/Faculty';
import FacultyDetail from './pages/FacultyDetail';

import Forum from './pages/Forum';

// New: Import the UserProfile page
import UserProfile from './pages/UserProfile';

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

        {/* Alumni Section */}
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/alumni/:alumniId" element={<AlumniDetail />} />

        {/* Faculty Section */}
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faculty/:facultyId" element={<FacultyDetail />} />

        <Route path="/forum" element={<Forum />} />

        {/* New Profile route */}
        <Route path="/profile" element={<UserProfile />} />

        {/* Catch-all route */}
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
