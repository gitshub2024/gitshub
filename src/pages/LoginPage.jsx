// LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, db } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';

// Import the Google logo
import googleLogo from '../assets/gooogle.png';

function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the email domain is saintgits.org
      if (user.email.endsWith('@saintgits.org')) {
        // Check if user exists in Firestore
        const userDocRef = doc(db, 'users', user.email);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          // User exists, proceed to log them in
          const userData = userDoc.data();

          // Store user info in localStorage
          localStorage.setItem(
            'user',
            JSON.stringify({
              id: user.uid,
              name: `${userData.firstName} ${userData.lastName}`,
              email: user.email,
              avatar:
                userData.avatar ||
                user.photoURL ||
                'https://via.placeholder.com/50',
            })
          );

          // Navigate to the HomePage
          navigate('/home');
        } else {
          // User does not exist
          setError('User does not exist. Please sign up first.');
          auth.signOut(); // Sign out the user
          // Optionally, navigate to the sign-up page
          navigate('/signup');
        }
      } else {
        // Display an error if the email domain is not saintgits.org
        setError(
          "Only users with a 'saintgits.org' email address can access this site."
        );
        auth.signOut(); // Sign out the user
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/login-background.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 bg-[#181C14]/80 backdrop-blur-sm rounded-xl p-8 w-full max-w-md text-[#ECDFCC]">
        <h2 className="text-4xl font-bold mb-8 text-center">Welcome Back</h2>
        {error && (
          <p className="text-red-500 mb-4 text-center">{error}</p>
        )}
        <button
          className="w-full flex items-center justify-center space-x-4 bg-[#697565] text-[#ECDFCC] py-3 rounded-lg hover:bg-[#55614D] transition"
          onClick={handleGoogleLogin}
        >
          <img
            src={googleLogo}
            alt="Google Icon"
            className="w-6 h-6"
          />
          <span className="font-medium">Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
