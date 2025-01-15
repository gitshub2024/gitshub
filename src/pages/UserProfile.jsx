// src/pages/UserProfile.jsx

import React, { useState, useEffect } from 'react';

function UserProfile() {
  // Load from localStorage or fallback to empty object
  const savedUser = JSON.parse(localStorage.getItem('user') || '{}');

  // Local state for editing various fields
  const [name, setName] = useState(savedUser.name || '');
  const [email, setEmail] = useState(savedUser.email || '');
  const [phone, setPhone] = useState(savedUser.phone || '');
  const [about, setAbout] = useState(savedUser.about || '');
  const [avatar, setAvatar] = useState(savedUser.avatar || '');
  const [skills, setSkills] = useState(savedUser.skills || []);

  // (Optional) If you want a jobTitle, location, etc., define them here.
  // const [jobTitle, setJobTitle] = useState(savedUser.jobTitle || '');

  useEffect(() => {
    // In case user changes while on this page, sync it (optional).
    const updatedUser = JSON.parse(localStorage.getItem('user') || '{}');
    setName(updatedUser.name || '');
    setEmail(updatedUser.email || '');
    setPhone(updatedUser.phone || '');
    setAbout(updatedUser.about || '');
    setAvatar(updatedUser.avatar || '');
    setSkills(updatedUser.skills || []);
    // setJobTitle(updatedUser.jobTitle || '');
  }, []);

  const handleSave = () => {
    const updatedUser = {
      ...savedUser,
      name,
      email,
      phone,
      about,
      avatar,
      skills,
      // jobTitle,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert('Profile updated successfully!');
  };

  // Skills handling
  const handleSkillChange = (index, newValue) => {
    const newSkills = [...skills];
    newSkills[index] = newValue;
    setSkills(newSkills);
  };

  const addNewSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] p-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      {/* Full-Width Container (removed max-w-x classes) */}
      <div className="w-full bg-[#232320] p-6 rounded-md shadow-md">
        {/* Profile Picture Preview */}
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#ECDFCC] mr-4">
            <img
              src={avatar || 'https://via.placeholder.com/80'}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Removed the text about uploading an image link */}
        </div>

        {/* Avatar URL */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Avatar URL</label>
          <input
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="https://example.com/my-photo.jpg"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Name</label>
          <input
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Phone</label>
          <input
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="123-456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Optional: Job Title */}
        {/*
        <div className="mb-4">
          <label className="block text-sm mb-2">Job Title</label>
          <input
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        */}

        {/* About (multi-line text) */}
        <div className="mb-4">
          <label className="block text-sm mb-2">About / Bio</label>
          <textarea
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            rows={4}
            placeholder="Tell us a little about yourself..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        {/* Skills (array of strings) */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Skills</label>
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                className="w-full px-3 py-2 rounded bg-gray-800 text-white"
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="ml-2 text-red-400 hover:text-red-600"
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addNewSkill}
            className="mt-2 px-3 py-2 bg-gray-700 rounded 
                       hover:bg-gray-600 transition"
          >
            + Add Skill
          </button>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-[#ECDFCC] text-black px-4 py-2 rounded-md mt-4"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
