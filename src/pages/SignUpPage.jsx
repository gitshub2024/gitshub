// SignUpPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, db } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Import the Google logo
import googleLogo from '../assets/gooogle.png';

function SignUpPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userType: 'Student',
    email: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user.email.endsWith('@saintgits.org')) {
        const userDocRef = doc(db, 'users', user.email);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          alert('User already exists. Please log in.');
          navigate('/login');
        } else {
          setFormData((prevData) => ({
            ...prevData,
            firstName: user.displayName.split(' ')[0] || '',
            lastName: user.displayName.split(' ')[1] || '',
            email: user.email,
          }));
          setIsAuthenticated(true);
          setUser(user);
        }
      } else {
        alert("Only users with 'saintgits.org' email can sign up.");
        await auth.signOut();
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
      alert('Failed to sign in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim())
      newErrors.lastName = 'Last name is required';
    if (!formData.acceptTerms)
      newErrors.acceptTerms = 'You must accept the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const userDocRef = doc(db, 'users', formData.email);
        await setDoc(userDocRef, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          userType: formData.userType,
          email: formData.email,
          avatar:
            user.photoURL || 'https://via.placeholder.com/50',
        });

        localStorage.setItem(
          'user',
          JSON.stringify({
            id: user.uid,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            avatar:
              user.photoURL || 'https://via.placeholder.com/50',
          })
        );

        navigate('/home');
      } catch (error) {
        console.error('Error saving user to Firestore:', error);
        alert('Failed to sign up. Please try again.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/signup-background.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 bg-[#181C14]/80 backdrop-blur-sm rounded-xl p-8 w-full max-w-md text-[#ECDFCC]">
        <h2 className="text-4xl font-bold mb-8 text-center">Create Account</h2>
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#ECDFCC]"></div>
          </div>
        ) : (
          <>
            {!isAuthenticated ? (
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center space-x-4 bg-[#697565] text-[#ECDFCC] py-3 rounded-lg hover:bg-[#55614D] transition"
              >
                <img
                  src={googleLogo}
                  alt="Google Icon"
                  className="w-6 h-6"
                />
                <span className="font-medium">Sign Up with Google</span>
              </button>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-4 text-[#181C14] bg-[#ECDFCC] rounded-md placeholder-opacity-75"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-4 text-[#181C14] bg-[#ECDFCC] rounded-md placeholder-opacity-75"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName}
                    </p>
                  )}
                </div>
                <div>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full p-4 text-[#181C14] bg-[#ECDFCC] rounded-md"
                  >
                    <option value="Student" disabled>
                      Sign-Up as*
                    </option>
                    <option value="Student">Student</option>
                    <option value="Alumni">Alumni</option>
                    <option value="Faculty">Faculty</option>
                  </select>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    readOnly
                    className="w-full p-4 text-[#181C14] bg-[#ECDFCC] rounded-md cursor-not-allowed placeholder-opacity-75"
                    placeholder="E-mail*"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-[#ECDFCC]">
                    I agree to the{' '}
                    <a href="#" className="underline">
                      terms and conditions
                    </a>
                  </label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-red-500 text-sm">
                    {errors.acceptTerms}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full p-4 mt-6 bg-[#697565] text-[#ECDFCC] rounded-md font-bold tracking-wider hover:bg-[#55614D] transition"
                >
                  Sign Up
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
